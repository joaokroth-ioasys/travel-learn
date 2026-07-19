# How to update & deploy Travel-learn

## The short version

**Deploy = push to `main`.** GitHub → Vercel auto-builds and ships to
`https://travel-learn.vercel.app`.

```bash
git add -A && git commit -m "your change"
git push origin main        # → auto-deploys to production in ~30s
```

## Developing locally

**Frontend-only change** (components, styles, journey content, anything under `app/src`):

```bash
cd app
npm run dev                 # Vite dev server at localhost:5173, hot reload
```

**Change that touches the backend** (anything under `app/api/`) — Vite alone
doesn't run the functions, so use the Vercel dev server, which runs the frontend
*and* the `/api` functions together:

```bash
cd app
vercel env pull            # one-time-ish: writes .env.local with DATABASE_URL, JWT_SECRET
vercel dev                 # localhost:3000, serves SPA + /api/* functions
```

Heads-up: `vercel dev` talks to your **real Neon database**, so signups/progress
you create locally are real prod rows. Fine for a solo project, just know it's
not a separate sandbox.

## Before you push (catch breakage locally)

```bash
cd app
npm run lint && npm run build && npm test
```

Lint, production build, and the smoke test. If those pass, the Vercel build will too.

## Recommended: branch → preview → merge

For anything non-trivial, let Vercel give you a throwaway preview URL before it
hits production:

```bash
git checkout -b my-feature
# ...work, commit...
git push origin my-feature          # → Vercel builds a PREVIEW deployment
```

Every branch/PR gets its own preview URL (behind Vercel login, since it's a
preview). Test it, then merge to `main` to promote to production. If a deploy
ever goes bad, Vercel dashboard → Deployments → **Instant Rollback** reverts in
one click.

Direct-to-`main` is fine for tiny fixes; branch-and-preview is the safer default
for features.

## The one manual step: database schema changes

No migration tool (plain SQL by choice). So if a feature needs a **new table or
column**, code alone won't create it — run the SQL yourself once in **Neon's SQL
Editor** (Vercel → Storage → your DB → SQL Editor). Keep `app/api/_schema.sql`
updated as the source of truth. Everything else (new endpoints, new frontend)
deploys automatically with the push.

## Cheat sheet

| I want to… | Do this |
|---|---|
| Edit UI/content | `npm run dev` |
| Edit an API function | `vercel dev` |
| Check before pushing | `npm run lint && npm run build && npm test` |
| Ship to production | `git push origin main` |
| Safe preview first | push a branch, test its preview URL, merge |
| Add a DB table/column | run SQL in Neon SQL Editor + update `app/api/_schema.sql` |
| Undo a bad deploy | Vercel dashboard → Deployments → Instant Rollback |

## Reference

- **Production URL:** https://travel-learn.vercel.app
- **Backend:** same-origin Vercel functions in `app/api/` (`auth/signup`,
  `auth/login`, `progress`, `leaderboard`; shared `_db.js`/`_auth.js`)
- **Database:** Neon Postgres (`travel-learn-db-sp-1`), schema in `app/api/_schema.sql`
- **Repo:** `joaokroth-ioasys/travel-learn`, push to `main` auto-deploys
