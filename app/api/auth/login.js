import { query } from '../_db.js';
import { verifyPassword, signToken } from '../_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, password } = req.body || {};
  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password required' });
  }
  try {
    const { rows } = await query(
      'select id, password_hash from users where email = $1',
      [email.toLowerCase()]
    );
    const user = rows[0];
    // Same response whether the user is missing or the password is wrong.
    if (!user || !(await verifyPassword(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ token: signToken(user.id) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
