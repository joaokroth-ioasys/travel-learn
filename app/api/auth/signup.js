import { query } from '../_db.js';
import { hashPassword, signToken } from '../_auth.js';

// Basic trust-boundary validation. Keep it strict, not clever.
function validCreds(email, password) {
  return typeof email === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
    && typeof password === 'string' && password.length >= 8;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, password, displayName } = req.body || {};
  if (!validCreds(email, password)) {
    return res.status(400).json({ error: 'Valid email and 8+ char password required' });
  }
  const name = (typeof displayName === 'string' && displayName.trim()) || email.split('@')[0];
  try {
    const hash = await hashPassword(password);
    const { rows } = await query(
      'insert into users (email, password_hash, display_name) values ($1, $2, $3) returning id',
      [email.toLowerCase(), hash, name.slice(0, 40)]
    );
    res.status(201).json({ token: signToken(rows[0].id) });
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'Email already registered' });
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
