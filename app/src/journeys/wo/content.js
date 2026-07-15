import d2 from '../d2/content';
import fr from '../fr/content';
import c2 from '../c2/content';
import j2 from '../j2/content';
import extras from './extras';

export default [
  ...d2.map(c => ({ ...c, journeyId: 'd2' })),
  ...fr.map(c => ({ ...c, journeyId: 'f2' })),   // French cities open the f2 journey
  ...c2.map(c => ({ ...c, journeyId: 'c2' })),   // Chilean cities open the c2 journey
  ...j2.map(c => ({ ...c, journeyId: 'j2' })),   // Japanese cities open the j2 journey
  ...extras.map(c => ({ ...c, journeyId: 'wo' })),
];
