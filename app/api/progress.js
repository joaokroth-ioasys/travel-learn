import { query } from './_db.js';
import { getUserId } from './_auth.js';

export default async function handler(req, res) {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  try {
    // All journeys' blobs for the logged-in user.
    if (req.method === 'GET') {
      const { rows } = await query(
        'select journey_id, data from progress where user_id = $1',
        [userId]
      );
      return res.json(rows);
    }

    // Upsert one journey's blob. ponytail: last write wins, no merge — the
    // client is offline-first and pushes its full local blob.
    if (req.method === 'PUT') {
      const { journeyId, data } = req.body || {};
      if (typeof journeyId !== 'string' || !journeyId || typeof data !== 'object' || data === null) {
        return res.status(400).json({ error: 'journeyId and data object required' });
      }
      await query(
        `insert into progress (user_id, journey_id, data, updated_at)
         values ($1, $2, $3, now())
         on conflict (user_id, journey_id)
         do update set data = excluded.data, updated_at = now()`,
        [userId, journeyId.slice(0, 20), data]
      );
      return res.json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
