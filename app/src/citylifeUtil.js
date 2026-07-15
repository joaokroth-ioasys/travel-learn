// Pure helpers for City Life gamification (progress, gating, mastery).
// Shared by CityLife / CityLifeMap / RouteJourney and covered by smoke-test.mjs.

// A location is "done" once every one of its stages has been solved.
export function locationDone(location, routeDone) {
  return location.stages.length > 0 && location.stages.every((s) => routeDone.has(s.id));
}

// "Mastered" = every stage solved first-try (present in the perfect set).
export function locationMastered(location, perfect) {
  return location.stages.length > 0 && location.stages.every((s) => perfect.has(s.id));
}

// The next place to explore — first location that isn't fully done (or null).
export function firstIncompleteLocation(locations, routeDone) {
  return locations.find((l) => !locationDone(l, routeDone)) ?? null;
}

// Aggregate "N of M places explored".
export function cityLifeProgress(locations, routeDone) {
  return {
    done: locations.filter((l) => locationDone(l, routeDone)).length,
    total: locations.length,
  };
}

// Linear stage gating within one location:
//   'done'    – this stage is solved
//   'current' – the first unsolved stage (the one to play)
//   'locked'  – a later stage whose predecessor isn't done yet
// ponytail: linear by array order; previously-solved stages stay reachable.
export function stageStatus(places, index, routeDone) {
  if (routeDone.has(places[index].id)) return 'done';
  const firstUnsolved = places.findIndex((p) => !routeDone.has(p.id));
  return index === firstUnsolved ? 'current' : 'locked';
}
