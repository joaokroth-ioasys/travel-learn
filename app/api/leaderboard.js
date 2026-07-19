import { query } from './_db.js';

// Top 50 by total XP across all journeys. Public — no auth needed to view.
// ponytail: it's a GROUP BY query, not a denormalized table, until it's slow.
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { rows } = await query(
      `select u.display_name,
              coalesce(sum((p.data->>'xp')::int), 0) as xp
       from users u
       join progress p on p.user_id = u.id
       group by u.id, u.display_name
       order by xp desc
       limit 50`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
