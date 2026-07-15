import fr from './fr';
import c2 from './c2';
import wo from './wo';
import d2 from './d2';
import f2 from './f2';
import j2 from './j2';

// Journey registry.
// ponytail: all packs bundled eagerly (~1.4MB pre-gzip). Consumers read packs
// synchronously; switch to dynamic import() per pack if load time matters.
const journeys = { fr, c2, wo, d2, f2, j2 };

export function getJourney(id) {
  return journeys[id] || journeys.d2;
}

export default journeys;
