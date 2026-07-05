import content from './content';
import map from './map';
import labels from './labels';

// The "Monde" journey pack: the world map framed on France (placeholder journey).
// markersOnly: dots are plain markers (no country label, no lesson badge, smaller).
export default { id: 'wo', content, map: { ...map, markersOnly: true }, labels };
