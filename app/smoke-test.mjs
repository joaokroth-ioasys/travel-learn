// Smoke test for the refactored pure modules: progress.js and mapUtil.js.
import assert from 'node:assert';

// localStorage shim (must exist before progress.js runs its migration IIFE)
const store = new Map([['german-xp', '150'], ['german-onboarded', '1']]);
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  key: (i) => [...store.keys()][i] ?? null,
  get length() { return store.size; },
};

const SRC = new URL("./src", import.meta.url).pathname;
const { load, save, loadGlobal, saveGlobal, todayStr, daysBetween, advanceStreak } = await import(`${SRC}/progress.js`);

// migration ran: legacy german-xp renamed
assert.equal(load('de', 'xp', 0), 150, 'legacy xp migrated');
assert.equal(loadGlobal('onboarded'), '1', 'legacy onboarded migrated');

// journey-scoped JSON round-trip
save('de', 'stars', { berlin: 3 });
assert.deepEqual(load('de', 'stars', {}), { berlin: 3 });
assert.deepEqual(load('fr', 'stars', {}), {}, 'journeys isolated');

// corrupted JSON falls back
store.set('journey:de:streak', '{broken');
assert.deepEqual(load('de', 'streak', { count: 0 }), { count: 0 });

// globals are raw strings
saveGlobal('active-journey', 'fr');
assert.equal(loadGlobal('active-journey'), 'fr');
assert.equal(loadGlobal('missing', 'fallback'), 'fallback');

// save survives a throwing localStorage (quota / private mode)
globalThis.localStorage.setItem = () => { throw new Error('quota'); };
save('de', 'xp', 999);          // must not throw
saveGlobal('onboarded', '1');   // must not throw

assert.match(todayStr(), /^\d{4}-\d{2}-\d{2}$/);

// ── streak advance (grace-freeze) ──
assert.equal(daysBetween('2026-01-01', '2026-01-03'), 2);
// same day → unchanged reference
const s0 = { count: 3, lastDate: '2026-02-10' };
assert.equal(advanceStreak(s0, '2026-02-10'), s0, 'same day unchanged');
// consecutive day → +1
assert.deepEqual(
  advanceStreak({ count: 3, lastDate: '2026-02-10' }, '2026-02-11'),
  { count: 4, lastDate: '2026-02-11', freezeUsedOn: null },
);
// 2-day gap with a banked freeze (count>=7) → kept, freeze consumed
assert.deepEqual(
  advanceStreak({ count: 7, lastDate: '2026-02-10' }, '2026-02-12'),
  { count: 8, lastDate: '2026-02-12', freezeUsedOn: '2026-02-12' },
);
// 2-day gap, no freeze banked (count<7) → reset
assert.deepEqual(
  advanceStreak({ count: 3, lastDate: '2026-02-10' }, '2026-02-12'),
  { count: 1, lastDate: '2026-02-12', freezeUsedOn: null },
);
// 3-day gap → always reset even with a freeze banked
assert.equal(advanceStreak({ count: 9, lastDate: '2026-02-10' }, '2026-02-13').count, 1);

const { buildMapCities, getTotalCounts, getCityStarState, getCityStatus, countryFillPath, parseVB, lerpVB } = await import(`${SRC}/mapUtil.js`);

// ── viewBox pan-zoom lerp (the f2↔d2 map transition) ──
const f2VB = parseVB('3193 557 252 252');
const d2VB = parseVB('3340 482 210 210');
assert.deepEqual(lerpVB(f2VB, d2VB, 0), f2VB, 'k=0 → start frame');
assert.deepEqual(lerpVB(f2VB, d2VB, 1), d2VB, 'k=1 → end frame');
assert.deepEqual(lerpVB(f2VB, d2VB, 0.5), [3266.5, 519.5, 231, 231], 'k=0.5 → midpoint frame');

// ── path gating ──
const gate = buildMapCities(
  [{ id: 'a', step: 1 }, { id: 'b', step: 2 }, { id: 'c', step: 3 }],
  [
    { id: 'a', lessons: [{ id: 'a1' }] },
    { id: 'b', lessons: [{ id: 'b1' }] },
    { id: 'c', lessons: [{ id: 'c1' }] },
  ],
);
const [ca, cb, cc] = gate;
// fresh: first stop current, rest locked
assert.equal(getCityStatus(gate, ca, new Set()), 'current');
assert.equal(getCityStatus(gate, cb, new Set()), 'locked');
// finishing a unlocks b
assert.equal(getCityStatus(gate, ca, new Set(['a1'])), 'done');
assert.equal(getCityStatus(gate, cb, new Set(['a1'])), 'current');
assert.equal(getCityStatus(gate, cc, new Set(['a1'])), 'locked');
// everything done → all 'done', none current
assert.equal(getCityStatus(gate, cc, new Set(['a1', 'b1', 'c1'])), 'done');
// lesson-less / preview dots stay open (never gated)
assert.equal(getCityStatus(gate, { id: 'x', step: 9, lessons: [] }, new Set()), 'open');
assert.equal(getCityStatus(gate, { id: 'y', step: 9, preview: true, lessons: [{ id: 'y1' }] }, new Set()), 'open');

const cities = buildMapCities(
  [{ id: 'a', x: 1, y: 2 }, { id: 'b', x: 3, y: 4 }],
  [{ id: 'a', lessons: [{ id: 'l1' }, { id: 'l2' }] }],
);
assert.equal(cities[0].lessons.length, 2);
assert.equal(cities[1].lessons.length, 0);
assert.deepEqual(getTotalCounts(cities, new Set(['l1'])), { done: 1, total: 2 });
assert.equal(getCityStarState(cities[0], { l1: 3, l2: 3 }), 'gold');
assert.equal(countryFillPath({ mainPath: 'M0 0L1 1Z M2 2Z' }), 'M0 0L1 1');
assert.equal(countryFillPath({ countryFill: 'X', mainPath: 'Y' }), 'X');
assert.equal(countryFillPath({}), null);

// ── city life: progress / gating / mastery ──
const { locationDone, locationMastered, firstIncompleteLocation, cityLifeProgress, stageStatus } =
  await import(`${SRC}/citylifeUtil.js`);

const locA = { id: 'la', name: 'Airport', stages: [{ id: 's1' }, { id: 's2' }] };
const locB = { id: 'lb', name: 'Cafe', stages: [{ id: 's3' }, { id: 's4' }] };
const clLocs = [locA, locB];
assert.equal(locationDone(locA, new Set(['s1', 's2'])), true);
assert.equal(locationDone(locA, new Set(['s1'])), false);
assert.equal(locationMastered(locA, new Set(['s1', 's2'])), true);
assert.equal(locationMastered(locA, new Set(['s1'])), false);
assert.equal(firstIncompleteLocation(clLocs, new Set(['s1', 's2'])).id, 'lb');
assert.equal(firstIncompleteLocation(clLocs, new Set(['s1', 's2', 's3', 's4'])), null);
assert.deepEqual(cityLifeProgress(clLocs, new Set(['s1', 's2'])), { done: 1, total: 2 });
// stage gating within a location
const clStages = [{ id: 's1' }, { id: 's2' }, { id: 's3' }];
assert.equal(stageStatus(clStages, 0, new Set()), 'current');
assert.equal(stageStatus(clStages, 1, new Set()), 'locked');
assert.equal(stageStatus(clStages, 0, new Set(['s1'])), 'done');
assert.equal(stageStatus(clStages, 1, new Set(['s1'])), 'current');

// ── passport: tiers / next-stamp / world stats / achievements ──
const { getCityTier, nextStampCity, worldStats, evaluateAchievements } =
  await import(`${SRC}/passportUtil.js`);

const ppA = { id: 'a', lessons: [{ id: 'a1' }, { id: 'a2' }] };
const ppB = { id: 'b', lessons: [{ id: 'b1' }, { id: 'b2' }] };
// tiers
assert.equal(getCityTier(ppA, {}, {}), null, 'unstamped → null');
assert.equal(getCityTier(ppA, { a: 'x' }, { a1: 3, a2: 3 }), 'gold');
assert.equal(getCityTier(ppA, { a: 'x' }, { a1: 2, a2: 2 }), 'silver');
assert.equal(getCityTier(ppA, { a: 'x' }, { a1: 1, a2: 1 }), 'bronze');
// next-stamp = most-done unstamped city
const nx = nextStampCity([ppA, ppB], {}, new Set(['b1']));
assert.equal(nx.city.id, 'b'); assert.equal(nx.done, 1);
assert.equal(nextStampCity([ppA, ppB], { a: 'x', b: 'y' }, new Set()), null, 'all stamped → null');
// world stats
assert.deepEqual(
  worldStats([{ cities: [ppA, ppB], stamps: { a: 'x', b: 'y' } }, { cities: [ppA], stamps: {} }]),
  { stamps: 2, totalCities: 3, countriesComplete: 1 },
);
// achievements gating
const ach1 = Object.fromEntries(evaluateAchievements({
  totalStamps: 1, countriesComplete: 0, totalCountries: 2, countriesWithStamps: 1,
  anyGold: false, anyRoute: false, anySrs: false, openedAll: false,
}).map(a => [a.id, a.earned]));
assert.equal(ach1['first-stamp'], true);
assert.equal(ach1['globetrotter'], false, 'globetrotter needs stamps in ≥2 journeys');
assert.equal(ach1['world-traveller'], false);
const ach2 = Object.fromEntries(evaluateAchievements({
  totalStamps: 5, countriesComplete: 2, totalCountries: 2, countriesWithStamps: 2,
  anyGold: true, anyRoute: true, anySrs: true, openedAll: true,
}).map(a => [a.id, a.earned]));
assert.ok(ach2['globetrotter'] && ach2['world-traveller'] && ach2['city-master'] && ach2['polyglot']);

console.log('smoke: all assertions passed');
