import { useState, useMemo } from 'react';
import { loadGlobal, saveGlobal, todayStr } from './progress';
import './DailyChallenge.css';

function getAllVocabCards(content) {
  const cards = [];
  for (const city of content) {
    for (const lesson of city.lessons) {
      for (const step of lesson.steps) {
        if (step.type === 'vocab') {
          cards.push({
            german: step.word,
            article: step.article,
            english: step.english,
            example: step.example,
            cityName: city.name,
            cityIcon: city.icon,
          });
        }
      }
    }
  }
  return cards;
}

function pickCardForDate(date, cards) {
  const seed = date.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return cards[seed % cards.length];
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function DailyChallenge({ content, journeyId = 'd2', onXpEarned }) {
  const today = todayStr();
  const storageKey = `journey:${journeyId}:daily-${today}`;

  const allCards = useMemo(() => getAllVocabCards(content), [content]);
  const card = useMemo(() => pickCardForDate(today, allCards), [today, allCards]);

  const alreadyDone = loadGlobal(storageKey) === 'done';

  const [phase, setPhase] = useState(alreadyDone ? 'done' : 'challenge');
  const [knew, setKnew] = useState(null);

  // Journeys without lessons yet (e.g. Chile) have no vocab cards.
  if (!card) {
    return (
      <div className="daily-challenge">
        <div className="daily-header">
          <span className="daily-header-icon">📅</span>
          <div>
            <div className="daily-header-title">Daily Word</div>
            <div className="daily-header-date">{formatDate(today)}</div>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#7a6a50', marginTop: 24 }}>
          No daily word for this journey yet.
        </p>
      </div>
    );
  }

  function handleReveal() {
    setPhase('revealed');
  }

  function handleKnewIt() {
    saveGlobal(storageKey, 'done');
    setKnew(true);
    setPhase('done');
    if (onXpEarned) onXpEarned(20);
  }

  function handleDidntKnow() {
    saveGlobal(storageKey, 'done');
    setKnew(false);
    setPhase('done');
  }

  return (
    <div className="daily-challenge">
      <div className="daily-header">
        <span className="daily-header-icon">📅</span>
        <div>
          <div className="daily-header-title">Daily Word</div>
          <div className="daily-header-date">{formatDate(today)}</div>
        </div>
      </div>

      {phase === 'challenge' && (
        <>
          <div className="daily-flashcard">
            <div className="daily-city-tag">
              {card.cityIcon} {card.cityName}
            </div>
            <div className="daily-german-word">
              {card.article && (
                <span className="daily-article">{card.article} </span>
              )}
              {card.german}
            </div>
            <div className="daily-prompt">Do you know this word?</div>
          </div>
          <button className="daily-btn daily-btn-reveal" onClick={handleReveal}>
            Reveal
          </button>
        </>
      )}

      {phase === 'revealed' && (
        <>
          <div className="daily-flashcard daily-flashcard--revealed">
            <div className="daily-city-tag">
              {card.cityIcon} {card.cityName}
            </div>
            <div className="daily-german-word">
              {card.article && (
                <span className="daily-article">{card.article} </span>
              )}
              {card.german}
            </div>
            <div className="daily-divider" />
            <div className="daily-english-word">{card.english}</div>
            {card.example && (
              <div className="daily-example">"{card.example}"</div>
            )}
          </div>
          <div className="daily-verdict-row">
            <button className="daily-btn daily-btn-knew" onClick={handleKnewIt}>
              I knew it
            </button>
            <button className="daily-btn daily-btn-didnt" onClick={handleDidntKnow}>
              I didn't
            </button>
          </div>
        </>
      )}

      {phase === 'done' && (
        <div className="daily-done">
          <div className="daily-flashcard daily-flashcard--done">
            <div className="daily-city-tag">
              {card.cityIcon} {card.cityName}
            </div>
            <div className="daily-german-word">
              {card.article && (
                <span className="daily-article">{card.article} </span>
              )}
              {card.german}
            </div>
            <div className="daily-divider" />
            <div className="daily-english-word">{card.english}</div>
            {card.example && (
              <div className="daily-example">"{card.example}"</div>
            )}
          </div>

          {knew === true && (
            <div className="daily-result daily-result--success">
              <span className="daily-result-icon">⭐</span>
              <div>
                <div className="daily-result-title">+20 XP earned!</div>
                <div className="daily-result-sub">Come back tomorrow!</div>
              </div>
            </div>
          )}

          {knew === false && (
            <div className="daily-result daily-result--encouragement">
              <span className="daily-result-icon">💪</span>
              <div>
                <div className="daily-result-title">You'll get it next time!</div>
                <div className="daily-result-sub">Come back tomorrow!</div>
              </div>
            </div>
          )}

          {knew === null && (
            <div className="daily-result daily-result--neutral">
              <span className="daily-result-icon">✓</span>
              <div>
                <div className="daily-result-title">Today's word: {card.german}</div>
                <div className="daily-result-sub">Come back tomorrow!</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
