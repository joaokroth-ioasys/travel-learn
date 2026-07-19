import pg from 'pg';

// Reuse one pool across warm serverless invocations. Point DATABASE_URL at
// Neon's *pooled* connection string (the Vercel Marketplace integration sets it).
// ponytail: cached global pool is the documented serverless-safe pattern; reach
// for @neondatabase/serverless only if connection limits actually bite.
const pool = (globalThis._pg ??= new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('sslmode=require')
    ? { rejectUnauthorized: false }
    : undefined,
}));

export const query = (text, params) => pool.query(text, params);
