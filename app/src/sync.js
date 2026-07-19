// Thin cloud-sync layer. localStorage stays the source of truth (offline-first);
// this pushes/pulls the per-journey progress blob to the backend when logged in.
// The backend is same-origin Vercel functions, so the base is just '/api'.

const API = '/api';
const TOKEN_KEY = 'auth-token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => (t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY));
export const isConfigured = () => true;
export const isLoggedIn = () => !!getToken();
export const logout = () => setToken(null);

const authHeaders = () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` });

// Gather every journey:<id>:* value into one plain object.
function collect(journeyId) {
  const prefix = `journey:${journeyId}:`;
  const blob = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith(prefix)) continue;
    try { blob[k.slice(prefix.length)] = JSON.parse(localStorage.getItem(k)); } catch { /* skip non-JSON */ }
  }
  return blob;
}

// Write a pulled blob back into localStorage under the namespaced keys.
function apply(journeyId, blob) {
  for (const [name, value] of Object.entries(blob || {})) {
    try { localStorage.setItem(`journey:${journeyId}:${name}`, JSON.stringify(value)); } catch { /* quota */ }
  }
}

// Debounced push per journey — called from progress.save() on every write.
const timers = {};
export function schedulePush(journeyId) {
  if (!isLoggedIn()) return;
  clearTimeout(timers[journeyId]);
  timers[journeyId] = setTimeout(() => push(journeyId), 1500);
}

async function push(journeyId) {
  if (!isLoggedIn()) return;
  try {
    await fetch(`${API}/progress`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify({ journeyId, data: collect(journeyId) }),
    });
  } catch { /* offline — best effort, localStorage already holds it */ }
}

// Pull every journey's blob from the server into localStorage. Call on login /
// session start. ponytail: server overwrites local (last device to push wins).
export async function pull() {
  if (!isLoggedIn()) return;
  try {
    const res = await fetch(`${API}/progress`, { headers: authHeaders() });
    if (!res.ok) return;
    for (const row of await res.json()) apply(row.journey_id, row.data);
  } catch { /* offline — keep local */ }
}

async function authRequest(path, body) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || 'Request failed');
  setToken(json.token);
}

export const signup = (email, password, displayName) => authRequest('/auth/signup', { email, password, displayName });
export const login = (email, password) => authRequest('/auth/login', { email, password });

export async function fetchLeaderboard() {
  if (!API) return [];
  try {
    const res = await fetch(`${API}/leaderboard`);
    return res.ok ? res.json() : [];
  } catch {
    return [];
  }
}
