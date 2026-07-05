// Pure helpers shared by MapScreen / MapSourceLayers / usePanZoom.

export function parseVB(s) { return s.split(/\s+/).map(Number); }

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
