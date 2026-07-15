// Pure helpers for Passport gamification (tiers, next-stamp pull, achievements,
// cross-journey stats). Shared by PassportTab and covered by smoke-test.mjs.

// Floored average star rating across a city's rated lessons (0 if none rated).
export function getAvgStars(city, stars) {
  const rated = city.lessons.filter((l) => stars[l.id]);
  if (!rated.length) return 0;
  return Math.floor(rated.reduce((s, l) => s + stars[l.id], 0) / rated.length);
}

// Stamp tier from mastery: gold = every lesson 3★, silver = avg ≥2, else bronze.
// null when the city isn't stamped yet.
export function getCityTier(city, stamps, stars) {
  if (!stamps[city.id]) return null;
  if (city.lessons.length > 0 && city.lessons.every((l) => stars[l.id] === 3)) return 'gold';
  return getAvgStars(city, stars) >= 2 ? 'silver' : 'bronze';
}

// The unstamped city closest to completion (most lessons done) — the "next" pull.
// Returns { city, done, total } or null when nothing is left to stamp.
export function nextStampCity(cities, stamps, completedLessons) {
  let best = null;
  for (const c of cities) {
    if (stamps[c.id] || c.lessons.length === 0) continue;
    const done = c.lessons.filter((l) => completedLessons.has(l.id)).length;
    if (!best || done > best.done) best = { city: c, done, total: c.lessons.length };
  }
  return best;
}

// Cross-journey totals. `entries`: [{ cities, stamps }] — dedupe alias views first.
export function worldStats(entries) {
  let stamps = 0, totalCities = 0, countriesComplete = 0;
  for (const e of entries) {
    const stamped = e.cities.filter((c) => e.stamps[c.id]).length;
    stamps += stamped;
    totalCities += e.cities.length;
    if (e.cities.length > 0 && stamped === e.cities.length) countriesComplete++;
  }
  return { stamps, totalCities, countriesComplete };
}

// Earnable achievements — all derived from existing storage, no new persisted keys.
// Each test reads a flat context object built once by the caller.
export const ACHIEVEMENTS = [
  { id: 'first-stamp',     icon: '🛂', label: 'First Stamp',     test: (c) => c.totalStamps >= 1 },
  { id: 'city-master',     icon: '🏅', label: 'City Master',     test: (c) => c.anyGold },
  { id: 'explorer',        icon: '🧭', label: 'Explorer',        test: (c) => c.anyRoute },
  { id: 'reviewer',        icon: '🃏', label: 'Reviewer',        test: (c) => c.anySrs },
  { id: 'globetrotter',    icon: '✈️', label: 'Globetrotter',    test: (c) => c.countriesWithStamps >= 2 },
  { id: 'collector',       icon: '📖', label: 'Collector',       test: (c) => c.countriesComplete >= 1 },
  { id: 'world-traveller', icon: '🌍', label: 'World Traveller', test: (c) => c.totalCountries > 0 && c.countriesComplete === c.totalCountries },
  { id: 'polyglot',        icon: '🗣️', label: 'Polyglot',        test: (c) => c.openedAll },
];

export function evaluateAchievements(ctx) {
  return ACHIEVEMENTS.map((a) => ({ id: a.id, icon: a.icon, label: a.label, earned: !!a.test(ctx) }));
}
