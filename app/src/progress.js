// Per-journey progress storage. Keys are namespaced so German and French
// progress never collide: journey:<id>:<name>.

const key = (journeyId, name) => `journey:${journeyId}:${name}`;

// JSON-backed load/save (used for completed, xp, streak, stars, stamps, srs).
export function load(journeyId, name, fallback) {
  try {
    const raw = localStorage.getItem(key(journeyId, name));
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function save(journeyId, name, value) {
  try {
    localStorage.setItem(key(journeyId, name), JSON.stringify(value));
  } catch {
    // ponytail: quota exceeded / private mode — progress just doesn't persist
  }
}

// Cross-journey globals (active-journey, onboarded, passport-opened, …).
// Raw strings, matching the values existing users already have stored.
export function loadGlobal(name, fallback = null) {
  try {
    const raw = localStorage.getItem(name);
    return raw == null ? fallback : raw;
  } catch {
    return fallback;
  }
}

export function saveGlobal(name, value) {
  try {
    localStorage.setItem(name, value);
  } catch {
    // same deal as save()
  }
}

// Local date as YYYY-MM-DD, used for daily-challenge and streak keys.
export const todayStr = () => new Date().toISOString().split('T')[0];

// One-shot migration: rename the legacy `german-*` keys to the namespaced
// scheme so existing players keep their progress. Runs once.
(function migrateLegacyKeys() {
  try {
    if (localStorage.getItem('journey:migrated') === '1') return;

    const renames = {
      'german-game-completed': 'journey:de:completed',
      'german-xp': 'journey:de:xp',
      'german-streak': 'journey:de:streak',
      'german-stars': 'journey:de:stars',
      'german-stamps': 'journey:de:stamps',
      'german-anki-srs': 'journey:de:srs',
      'german-onboarded': 'onboarded', // global, not per-journey
    };
    for (const [from, to] of Object.entries(renames)) {
      const v = localStorage.getItem(from);
      if (v != null && localStorage.getItem(to) == null) localStorage.setItem(to, v);
    }

    // Daily keys are date-suffixed: german-daily-YYYY-MM-DD → journey:de:daily-…
    const dailyKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('german-daily-')) dailyKeys.push(k);
    }
    for (const k of dailyKeys) {
      const to = 'journey:de:daily-' + k.slice('german-daily-'.length);
      if (localStorage.getItem(to) == null) localStorage.setItem(to, localStorage.getItem(k));
    }

    localStorage.setItem('journey:migrated', '1');
  } catch {
    // localStorage unavailable — nothing to migrate
  }
})();
