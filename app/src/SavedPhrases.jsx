import { useState } from 'react';
import { useUi } from './ui';
import './CityLife.css';

// The native-language line of a phrase, matching RouteJourney's fallback order.
function nativeText(ph) {
  return ph.fr ?? ph.es ?? ph.de ?? ph.nl ?? ph.da ?? ph.hu ?? ph.ja
    ?? ph.pt ?? ph.cs ?? ph.it ?? ph.ga ?? ph.no ?? ph.sv ?? ph.pl ?? ph.gb;
}

function PhraseCard({ item }) {
  const t = useUi();
  const [revealed, setRevealed] = useState(false);
  return (
    <button className={`cl-saved-card${revealed ? ' cl-saved-card--open' : ''}`} onClick={() => setRevealed(r => !r)}>
      <span className="cl-saved-place">{item.icon} {item.place}</span>
      <span className="cl-saved-native">« {nativeText(item)} »</span>
      {item.romaji && <span className="cl-saved-romaji">{item.romaji}</span>}
      {revealed
        ? <span className="cl-saved-en">{item.en}</span>
        : <span className="cl-saved-hint">{t.tapToReveal}</span>}
    </button>
  );
}

// A quick review of every phrase from stages the user hearted — so the ♥ does
// something. Gathered live from the journey's City Life locations; no storage.
export default function SavedPhrases({ locations, favorites, langName = 'German', onBack }) {
  const t = useUi();
  const items = [];
  for (const loc of locations) {
    for (const stage of loc.stages) {
      if (!favorites.has(stage.id)) continue;
      for (const ph of stage.phrases || []) items.push({ ...ph, place: loc.name, icon: loc.icon });
    }
  }

  return (
    <div className="citylife">
      <button className="cl-back" onClick={onBack}>{t.cityMapBack}</button>
      <div className="cl-header">
        <span className="cl-header-icon">♥</span>
        <div>
          <div className="cl-header-title">{t.savedPhrasesTitle}</div>
          <div className="cl-header-sub">{t.savedPhrasesSub(langName)}</div>
        </div>
      </div>
      {items.length ? (
        <div className="cl-saved-list">
          {items.map((item, i) => <PhraseCard key={i} item={item} />)}
        </div>
      ) : (
        <div className="cl-coming-soon">{t.savedPhrasesEmpty}</div>
      )}
    </div>
  );
}
