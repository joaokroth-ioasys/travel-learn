-- Run once in Neon's SQL Editor (Vercel dashboard → Storage → Neon → SQL Editor).
-- gen_random_uuid() is built in on Postgres 13+ (Neon is 15/16).

create table if not exists users (
  id            uuid primary key default gen_random_uuid(),
  email         text unique not null,
  google_sub    text unique,
  password_hash text,               -- nullable: Google sign-in leaves it empty
  display_name  text not null,
  created_at    timestamptz default now()
);

-- Migration for an existing DB (safe to run repeatedly):
--   alter table users add column if not exists google_sub text unique;
--   alter table users alter column password_hash drop not null;

-- One row per user+journey. The whole per-journey progress blob is stored as
-- JSONB (mirrors the localStorage keys) — no need to normalize xp/streak/stars.
create table if not exists progress (
  user_id     uuid references users(id) on delete cascade,
  journey_id  text not null,
  data        jsonb not null,
  updated_at  timestamptz default now(),
  primary key (user_id, journey_id)
);

-- Speeds up the leaderboard sort on xp.
create index if not exists progress_xp_idx on progress (((data->>'xp')::int));
