import de from './de';
import fr from './fr';
import cl from './cl';
import jp from './jp';
import wo from './wo';
import d2 from './d2';
import f2 from './f2';

// Journey registry.
// ponytail: all packs bundled eagerly (~1.4MB pre-gzip). Consumers read packs
// synchronously; switch to dynamic import() per pack if load time matters.
const journeys = { de, fr, cl, jp, wo, d2, f2 };

export function getJourney(id) {
  return journeys[id] || journeys.de;
}

export default journeys;
