// Pure helpers shared by MapScreen / MapSourceLayers / usePanZoom.

export function parseVB(s) { return s.split(/\s+/).map(Number); }

// Lerp two [x, y, w, h] viewBoxes — the pan-zoom between two journey frames.
export function lerpVB(a, b, k) { return a.map((v, i) => v + (b[i] - v) * k); }

// The outer ring of the main country path (first subpath), used as its fill.
// Falls back to an explicit `countryFill` path when the map provides one.
export function countryFillPath(map) {
  return map.countryFill || (map.mainPath ? map.mainPath.split('Z')[0] : null);
}

// Merge content lessons into map cities by id, so lesson counts work for the
// cities that have content; the others render fine without lessons.
export function buildMapCities(mapCities, content) {
  const contentMap = Object.fromEntries(content.map((c) => [c.id, c]));
  return mapCities.map((city) => ({
    ...city,
    lessons: contentMap[city.id]?.lessons ?? [],
  }));
}

export function getCityLessonCounts(city, completedLessons) {
  const total = city.lessons.length;
  const done  = city.lessons.filter((l) => completedLessons.has(l.id)).length;
  return { done, total };
}

export function getTotalCounts(cities, completedLessons) {
  const total = cities.reduce((s, c) => s + c.lessons.length, 0);
  const done  = cities.reduce(
    (s, c) => s + c.lessons.filter((l) => completedLessons.has(l.id)).length,
    0,
  );
  return { done, total };
}

// Linear path gating: which cities are reachable yet.
//   'done'    – every lesson complete
//   'current' – the next unfinished stop on the route (the one to play)
//   'locked'  – a later stop whose predecessor isn't done yet
//   'open'    – not gated at all (preview/link dots, or map-only cities with
//               no lessons) — always clickable.
// ponytail: journeys are linear by `step`; branch gating would need a graph.
export function getCityStatus(cities, city, completedLessons) {
  if (city.preview || city.lessons.length === 0) return 'open';
  const isDone = (c) => getCityLessonCounts(c, completedLessons).done === c.lessons.length;
  const route = cities
    .filter((c) => !c.preview && c.lessons.length > 0)
    .sort((a, b) => a.step - b.step);
  const firstIncomplete = route.find((c) => !isDone(c));
  if (!firstIncomplete) return 'done';                 // whole route complete
  if (city.id === firstIncomplete.id) return 'current';
  return isDone(city) ? 'done' : 'locked';
}

export function getCityStarState(city, stars) {
  const lessons = city.lessons;
  if (lessons.length === 0) return 'none';
  if (lessons.every((l) => stars[l.id] === 3)) return 'gold';
  if (lessons.some((l) => stars[l.id] >= 1)) return 'started';
  return 'none';
}

export function getCityAvgStars(city, stars) {
  const rated = city.lessons.filter((l) => stars[l.id]);
  if (rated.length === 0) return 0;
  return Math.floor(rated.reduce((s, l) => s + stars[l.id], 0) / rated.length);
}
