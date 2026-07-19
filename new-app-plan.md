# Architecture: add a portable backend to Travel-learn

## Context

Today Travel-learn is a **frontend-only** Vite + React SPA. All progress (XP,
streak, stars, stamps, SRS) lives in `localStorage`, namespaced per journey
(`journey:<id>:<name>`) via `app/src/progress.js`. It deploys to Vercel as
static files.

You want three things `localStorage` can't do: **cross-device sync**, **user
accounts/login**, and **leaderboards/social**. All three genuinely require a
shared database + auth, so the backend is justified (not YAGNI). You chose a
**portable Express backend** over Vercel-locked functions.

The design goal: add the smallest real backend that delivers those three, while
keeping the app **offline-first** (localStorage stays the primary cache) and the
backend **portable** (plain Node/Express, runs anywhere).

## Recommended architecture

One repo, two independently deployable pieces (a "modular monolith"):

```
Travel-learn/
├── app/            # existing Vite SPA (unchanged deploy target)
└── server/         # NEW portable Express backend
```

- **Frontend**: stays a static SPA on Vercel. Talks to the backend over HTTPS
  via a `VITE_API_URL` env var. localStorage remains the source of truth for
  gameplay; the server is a sync target.
- **Backend**: a single Express app (monolith). Runs with `node src/index.js`
  anywhere — Render/Railway/Fly (always-on, truly portable) **or** Vercel
  (wrapped as one catch-all function). See deploy notes for the tradeoff.
- **Database**: Postgres. Use **Neon** (generous free tier, just-Postgres so
  fully portable). Provision via Vercel Marketplace or directly at neon.tech.

Flow: `SPA → HTTPS → Express → Postgres`.

## Backend folder structure (`server/`)

Deliberately flat. Three route files, one db, one auth — nothing more until a
feature needs it.

```
server/
├── src/
│   ├── index.js          # Express app: cors, json, mount routes, listen
│   ├── db.js             # pg Pool + query() helper
│   ├── auth.js           # password hash, JWT sign/verify, requireAuth middleware
│   ├── routes/
│   │   ├── auth.js       # POST /auth/signup, POST /auth/login
│   │   ├── progress.js   # GET /progress, PUT /progress  (per-user blob sync)
│   │   └── leaderboard.js# GET /leaderboard
│   └── schema.sql        # tables + indexes (run once)
├── package.json          # express, pg, bcrypt (or argon2), jsonwebtoken, cors
└── .env.example          # DATABASE_URL, JWT_SECRET, CORS_ORIGIN
```

### Data model (minimal, `schema.sql`)

```sql
create table users (
  id            uuid primary key default gen_random_uuid(),
  email         text unique not null,
  password_hash text not null,
  display_name  text not null,
  created_at    timestamptz default now()
);

-- One row per user+journey. Store the whole progress blob as JSONB —
-- mirrors the localStorage keys, no need to normalize xp/streak/stars.
create table progress (
  user_id     uuid references users(id) on delete cascade,
  journey_id  text not null,
  data        jsonb not null,        -- { xp, streak, stars, stamps, srs, completed, ... }
  updated_at  timestamptz default now(),
  primary key (user_id, journey_id)
);

create index on progress ((data->>'xp'));  -- for leaderboard sort
```

**Leaderboard is a query, not a table** (ponytail: no denormalized table to
keep in sync):

```sql
select u.display_name, sum((p.data->>'xp')::int) as xp
from progress p join users u on u.id = p.user_id
group by u.id order by xp desc limit 50;
```

### API surface (that's all you need for the three features)

| Method | Path            | Purpose                                    |
|--------|-----------------|--------------------------------------------|
| POST   | `/auth/signup`  | create user, return JWT                    |
| POST   | `/auth/login`   | verify password, return JWT                |
| GET    | `/progress`     | pull all journeys' blobs for the user      |
| PUT    | `/progress`     | push one journey's blob (upsert)           |
| GET    | `/leaderboard`  | top-N by summed XP                         |

## Frontend changes (small, isolated)

The whole point of the current design pays off here: **every writer already
routes through `save()` in `app/src/progress.js`**, so sync hooks in at one
choke point.

1. **New `app/src/sync.js`** — thin sync layer:
   - `pull()`: on login, GET `/progress`, merge server blobs into localStorage.
   - `push(journeyId)`: debounced PUT of that journey's blob. Called from
     `save()` when a token is present.
   - Offline-first preserved: localStorage stays primary; push is best-effort.
2. **Hook `save()`** in `progress.js` to fire a debounced `push(journeyId)` when
   logged in. `load()` stays untouched (reads local cache).
3. **New login/signup screen** + store the JWT (localStorage or httpOnly cookie).
   Wire into `app/src/App.jsx` nav (there's an existing tab/nav pattern).
4. **New `app/src/Leaderboard.jsx`** tab — GET `/leaderboard`, render list.
   Reuse existing design tokens in `app/src/colors.js`.
5. **`VITE_API_URL`** env var for the backend base URL.
6. **Update CSP** in `app/vercel.json`: add the backend origin to `connect-src`.

## Security (do NOT be lazy here)

- Hash passwords with **bcrypt or argon2** — never store or compare plaintext.
- Sign JWTs with a strong `JWT_SECRET`; verify on every protected route via the
  `requireAuth` middleware.
- Alternative to rolling auth at all: offload to **Supabase Auth** (portable,
  open-source, Postgres-native) and keep Express only for progress/leaderboard.
  Consider this if you'd rather not own the auth code. Left as an option, not the
  default, since you asked for an Express backend you control.

## Deploy notes

- **Frontend**: unchanged — existing Vercel project rooted at `app/`.
- **Backend, portable path (recommended for "truly portable")**: deploy
  `server/` to **Render or Railway** (always-on Node). Then a plain `pg` Pool is
  correct and simple.
- **Backend on Vercel**: also fine, but it runs as a **stateless serverless
  function** — no in-memory sessions (JWT already handles that), and you must use
  a **serverless-friendly Postgres driver** (Neon's `@neondatabase/serverless`
  or a pooled connection string) or you'll exhaust DB connections on cold starts.
  This is the one real tuning knob depending on where the backend lands.
- **DB**: Neon Postgres, one instance, free tier.

## Verification (end to end)

1. `cd server && npm i && psql "$DATABASE_URL" -f src/schema.sql && node src/index.js`.
2. `curl -XPOST localhost:3000/auth/signup -d '{"email":..,"password":..,"display_name":..}'`
   → returns a JWT.
3. `curl PUT /progress` with the token and a sample blob → 200; row appears in
   Postgres.
4. In the app: log in on browser A, earn XP, confirm `PUT /progress` fires;
   log in as the same user on browser B → `pull()` restores that XP.
5. Two users with XP → `GET /leaderboard` ranks them correctly.
6. Existing offline behavior still works with no token (localStorage only).

## What I deliberately skipped (add when needed)

- No ORM (Prisma/Drizzle): plain SQL + `pg` is enough at this size. Add Drizzle
  if migrations get painful.
- No separate leaderboard table: it's a `GROUP BY` query until it's slow.
- No refresh-token rotation / OAuth providers: plain email+password JWT first;
  add Google login when users ask.
- No realtime/websockets for social: leaderboard is a plain GET; add polling or
  realtime only if you build live features.
