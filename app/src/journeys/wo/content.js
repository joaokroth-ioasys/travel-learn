import de from '../de/content';
import fr from '../fr/content';
import cl from '../cl/content';
import jp from '../jp/content';
import extras from './extras';

export default [
  ...de.map(c => ({ ...c, journeyId: 'de' })),
  ...fr.map(c => ({ ...c, journeyId: 'fr' })),
  ...cl.map(c => ({ ...c, journeyId: 'cl' })),
  ...jp.map(c => ({ ...c, journeyId: 'jp' })),
  ...extras.map(c => ({ ...c, journeyId: 'wo' })),
];
