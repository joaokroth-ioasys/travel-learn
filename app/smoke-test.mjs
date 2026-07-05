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
const { load, save, loadGlobal, saveGlobal, todayStr } = await import(`${SRC}/progress.js`);

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

const { buildMapCities, getTotalCounts, getCityStarState, countryFillPath } = await import(`${SRC}/mapUtil.js`);
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

console.log('smoke: all assertions passed');
