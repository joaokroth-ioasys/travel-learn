import { query } from '../_db.js';
import { signToken } from '../_auth.js';
import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

// Verify a Google ID token (from the "Sign in with Google" button) and mint our
// own app JWT. Upsert by google_sub; the coalesce keeps an existing email row's
// progress if that person had an old email/password account.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { credential } = req.body || {};
  if (typeof credential !== 'string' || !CLIENT_ID) {
    return res.status(400).json({ error: 'Missing credential' });
  }
  try {
    const ticket = await client.verifyIdToken({ idToken: credential, audience: CLIENT_ID });
    const p = ticket.getPayload();
    if (!p || !p.email_verified) return res.status(401).json({ error: 'Unverified Google account' });

    const name = (p.name || p.email.split('@')[0]).slice(0, 40);
    const { rows } = await query(
      `insert into users (email, display_name, google_sub) values ($1, $2, $3)
       on conflict (google_sub) do update set email = excluded.email, display_name = excluded.display_name
       returning id`,
      [p.email.toLowerCase(), name, p.sub]
    );
    res.json({ token: signToken(rows[0].id) });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Invalid Google token' });
  }
}
