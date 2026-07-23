import { useState, useMemo, useCallback } from 'react';
import { load, save } from './progress';
import { useUi } from './ui';
import './ReviewTab.css';

function buildCards(content) {
  return content.flatMap(city =>
    city.lessons.flatMap(lesson =>
      lesson.steps
        .filter(s => s.type === 'vocab')
        .map(s => ({ ...s, cityColor: city.accentColor, cityName: city.name, cityIcon: city.icon }))
    )
  );
}

function pickCard(srs, cards) {
  const now = Date.now();
  const due = cards.filter(c => {
    const entry = srs[c.word];
    return !entry || entry.due <= now;
  });
  if (due.length === 0) return null;
  due.sort((a, b) => (srs[a.word]?.due ?? 0) - (srs[b.word]?.due ?? 0));
  return due[0];
}

function countDue(srs, cards) {
  const now = Date.now();
  return cards.filter(c => {
    const e = srs[c.word];
    return !e || e.due <= now;
  }).length;
}

export default function ReviewTab({ content, journeyId = 'd2' }) {
  const t = useUi();
  const allCards = useMemo(() => buildCards(content), [content]);
  const [srs, setSRS] = useState(() => load(journeyId, 'srs', {}));
  const [flipped, setFlipped] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const visibleCards = selectedCity
    ? allCards.filter(c => c.cityName === selectedCity)
    : allCards;

  const card = pickCard(srs, visibleCards);
  const dueCount = countDue(srs, visibleCards);

  const advance = useCallback((knew) => {
    setSRS(prev => {
      const entry = prev[card.word] || { interval: 1 };
      const interval = knew ? Math.min(entry.interval * 2, 128) : 1;
      const due = Date.now() + interval * 24 * 60 * 60 * 1000;
      const next = { ...prev, [card.word]: { interval, due } };
      save(journeyId, 'srs', next);
      return next;
    });
    setFlipped(false);
    if (knew) {
      setCelebrating(true);
      setTimeout(() => setCelebrating(false), 600);
    }
  }, [card, journeyId]);

  const cityFilter = (
    <div className="city-filter">
      <button
        className={`city-pill${selectedCity === null ? ' active' : ''}`}
        onClick={() => { setSelectedCity(null); setFlipped(false); }}
      >
        {t.filterAll}
      </button>
      {content.map(city => (
        <button
          key={city.id}
          className={`city-pill${selectedCity === city.name ? ' active' : ''}`}
          style={selectedCity === city.name ? { background: city.accentColor, color: '#fff', borderColor: city.accentColor } : {}}
          onClick={() => { setSelectedCity(city.name); setFlipped(false); }}
        >
          {city.icon} {city.name}
        </button>
      ))}
    </div>
  );

  if (!card) {
    const nextDue = visibleCards.reduce((min, c) => {
      const d = srs[c.word]?.due ?? 0;
      return d > 0 && d < min ? d : min;
    }, Infinity);
    const minutesLeft = nextDue === Infinity ? null : Math.ceil((nextDue - Date.now()) / 60000);

    return (
      <div className="review-done">
        {cityFilter}
        <div className="review-done-icon">🎉</div>
        <h2>{t.allCaughtUp}</h2>
        <p className="review-done-sub">
          {minutesLeft != null
            ? t.nextCardIn(minutesLeft < 60 ? `${minutesLeft}m` : `${Math.ceil(minutesLeft / 60)}h`)
            : t.noCardsScheduled}
        </p>
        <p className="review-done-total">{t.totalCards(visibleCards.length)}</p>
      </div>
    );
  }

  return (
    <div className="review-tab">
      {cityFilter}
      <div className="review-header">
        <span className="review-due-badge">{t.dueBadge(dueCount)}</span>
        <span className="review-total">{t.cardsTotal(visibleCards.length)}</span>
      </div>

      <div
        className={`flashcard${flipped ? ' flipped' : ''}${celebrating ? ' celebrate' : ''}`}
        onClick={() => !flipped && setFlipped(true)}
        style={{ '--accent': card.cityColor }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' || e.key === ' ' ? setFlipped(true) : null}
        aria-label={flipped ? t.cardBackAria : t.tapToRevealAria}
      >
        <div className="flashcard-inner">
          {/* Front */}
          <div className="flashcard-face flashcard-front">
            <span className="fc-city">{card.cityName}</span>
            <div className="fc-word-row">
              {card.article && <span className="fc-article" style={{ color: card.cityColor }}>{card.article}</span>}
              <span className="fc-word">{card.article ? card.word.replace(/^(der|die|das)\s+/i, '') : card.word}</span>
            </div>
            <span className="fc-tap-hint">{t.tapToReveal}</span>
          </div>

          {/* Back */}
          <div className="flashcard-face flashcard-back">
            <span className="fc-city">{card.cityName}</span>
            <div className="fc-word-row">
              {card.article && <span className="fc-article" style={{ color: card.cityColor }}>{card.article}</span>}
              <span className="fc-word">{card.article ? card.word.replace(/^(der|die|das)\s+/i, '') : card.word}</span>
            </div>
            <p className="fc-english">{card.english}</p>
            {card.example && <p className="fc-example">{card.example}</p>}
          </div>
        </div>
      </div>

      {flipped && (
        <div className="review-buttons">
          <button className="btn-again" onClick={() => advance(false)}>{t.again}</button>
          <button className="btn-gotit" onClick={() => advance(true)}>{t.gotIt}</button>
        </div>
      )}

      {!flipped && (
        <p className="review-hint">{t.tapToFlip}</p>
      )}
    </div>
  );
}
