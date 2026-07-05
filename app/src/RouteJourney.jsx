import { useState, useEffect } from 'react';
import WikiPhoto from './WikiPhoto';
import CityMap from './CityMap';
import { darkenHex, hexToRgba } from './colors';
import './RouteJourney.css';

// The immersive Paris route: a 10-stage timeline you move through like a story.
// Timeline (top) → current stage detail (narrative + photo + phrases + quiz +
// favourite + lesson) → map (bottom). Progression, light transitions, quizzes
// and completion feedback per the spec.
//
// Props:
//   places           , ordered [{ id, name, icon, coords, wikiTitle, narrative, phrases?, lessonId?, quiz }]
//                      phrases items are { fr?|es?|de?|ja?, romaji?, en } — the native-language line
//                      falls back fr → es → de → ja, with an optional romaji reading shown under it.
//   accentColor      , city accent hex
//   cityName         , city display name (completion banner / aria) — e.g. 'Paris', 'Santiago'
//   langName         , language being learned, for the CTA/banner copy — e.g. 'French', 'Spanish'
//   completedLessons , Set<string> of completed lesson ids (for the lesson CTA)
//   routeDone        , Set<string> of stage ids whose quiz is solved
//   favorites        , Set<string> of favourited stage ids
//   onLessonSelect   , (lessonId) => void
//   onStageComplete  , (stageId) => void   — fired once when a quiz is solved
//   onToggleFavorite , (stageId) => void
export default function RouteJourney({
  places, accentColor, cityName = 'Paris', langName = 'French',
  completedLessons, routeDone, favorites,
  onLessonSelect, onStageComplete, onToggleFavorite,
  showMap = true, // City Life stages have no real coords → hide the geo map
}) {
  const total = places.length;

  // Start at the first unsolved stage so returning users resume where they left.
  const firstUnsolved = places.findIndex((p) => !routeDone.has(p.id));
  const [current, setCurrent] = useState(firstUnsolved === -1 ? 0 : firstUnsolved);
  const [answer, setAnswer] = useState(null); // chosen quiz option for current stage

  const stage = places[current];

  // Reset the quiz selection whenever the stage changes.
  useEffect(() => { setAnswer(null); }, [current]);

  const darkAccent = darkenHex(accentColor, 50);
  const vars = {
    '--accent': accentColor,
    '--accent-dark': darkAccent,
    '--accent-soft': hexToRgba(accentColor, 0.14),
    '--accent-border': hexToRgba(accentColor, 0.35),
  };

  const doneCount = places.filter((p) => routeDone.has(p.id)).length;
  const allDone = doneCount === total;
  const isFav = favorites.has(stage.id);
  const stageDone = routeDone.has(stage.id);
  const correct = answer != null && answer === stage.quiz.correct;

  function pick(option) {
    setAnswer(option);
    if (option === stage.quiz.correct && !routeDone.has(stage.id)) {
      onStageComplete(stage.id);
    }
  }

  const go = (i) => setCurrent(Math.max(0, Math.min(total - 1, i)));

  return (
    <div className="route" style={vars}>
      {/* ── Progress header ── */}
      <div className="route__progress">
        <p className="route__progress-label">
          <span className="route__progress-strong">Stop {current + 1} of {total}</span>
          <span className="route__progress-sub">{stage.name}</span>
        </p>
        <div className="route__bar" aria-hidden="true">
          <div className="route__bar-fill" style={{ width: `${(doneCount / total) * 100}%` }} />
        </div>
        <p className="route__progress-count">{doneCount}/{total} stops explored</p>
      </div>

      {/* ── Timeline ── */}
      <div className="timeline" role="tablist" aria-label={`${cityName} route`}>
        {places.map((p, i) => {
          const done = routeDone.has(p.id);
          const prevDone = i > 0 && routeDone.has(places[i - 1].id);
          const cls = ['tl-node',
            done && 'tl-node--done',
            i === current && 'tl-node--current',
            prevDone && 'tl-node--linkfill'].filter(Boolean).join(' ');
          return (
            <button
              key={p.id}
              className={cls}
              role="tab"
              aria-selected={i === current}
              aria-label={`Stop ${i + 1}: ${p.name}${done ? ', explored' : ''}`}
              onClick={() => go(i)}
            >
              <span className="tl-node__circle">{p.icon}</span>
              <span className="tl-node__label">{p.name}</span>
              {favorites.has(p.id) && <span className="tl-node__fav" aria-hidden="true">♥</span>}
            </button>
          );
        })}
      </div>

      {allDone && (
        <div className="route__complete" role="status">
          🎉 {cityName} complete! You&apos;ve travelled the whole city — and picked up some {langName} along the way.
        </div>
      )}

      {/* ── Current stage (re-mounts per stage → fade/slide animation) ── */}
      <div className="stage" key={stage.id}>
        <div className="stage__photo">
          <WikiPhoto
            photo={{ src: stage.image, wikiTitle: stage.wikiTitle, alt: stage.name, caption: stage.name }}
            cityIcon={stage.icon}
            accentColor={accentColor}
            darkAccent={darkAccent}
          />
          <button
            className={`stage__fav${isFav ? ' stage__fav--on' : ''}`}
            onClick={() => onToggleFavorite(stage.id)}
            aria-pressed={isFav}
            aria-label={isFav ? 'Remove from favourites' : 'Save to favourites'}
          >
            {isFav ? '♥' : '♡'}
          </button>
        </div>

        <div className="stage__body">
          <p className="stage__step">Stop {current + 1} · {stage.icon}</p>
          <h2 className="stage__name">{stage.name}</h2>
          <p className="stage__narrative">{stage.narrative}</p>

          {stage.phrases?.length > 0 && (
            <div className="stage__phrases">
              <p className="stage__phrases-title">Phrases to use here</p>
              <ul>
                {stage.phrases.map((ph, i) => (
                  <li key={i}>
                    <span className="stage__phrase-native">
                      <span className="stage__phrase-fr">« {ph.fr ?? ph.es ?? ph.de ?? ph.nl ?? ph.da ?? ph.hu ?? ph.ja ?? ph.pt ?? ph.cs ?? ph.it ?? ph.ga ?? ph.no ?? ph.sv ?? ph.pl ?? ph.gb} »</span>
                      {ph.romaji && <span className="stage__phrase-romaji">{ph.romaji}</span>}
                    </span>
                    <span className="stage__phrase-en">{ph.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Mini quiz ── */}
          <div className="stage-quiz">
            <p className="stage-quiz__q">
              {stageDone && answer == null && <span className="stage-quiz__solved">✓ </span>}
              {stage.quiz.question}
            </p>
            <div className="stage-quiz__options">
              {stage.quiz.options.map((opt) => {
                const chosen = answer === opt;
                const showCorrect = answer != null && opt === stage.quiz.correct;
                const cls = ['stage-quiz__opt',
                  chosen && correct && 'stage-quiz__opt--correct',
                  chosen && !correct && 'stage-quiz__opt--wrong',
                  !chosen && showCorrect && 'stage-quiz__opt--reveal'].filter(Boolean).join(' ');
                return (
                  <button key={opt} className={cls} onClick={() => pick(opt)} disabled={correct || stageDone}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {answer != null && !correct && (
              <p className="stage-quiz__feedback stage-quiz__feedback--wrong">Not quite — try again.</p>
            )}
            {(correct || (stageDone && answer == null)) && (
              <p className="stage-quiz__feedback stage-quiz__feedback--ok">
                ✓ {stage.quiz.explanation}
              </p>
            )}
          </div>

          {stage.lessonId && (
            <button className="stage__lesson" onClick={() => onLessonSelect(stage.lessonId)}>
              {completedLessons.has(stage.lessonId) ? `✓ Review the ${langName} lesson` : `→ Learn the ${langName} for this stop`}
            </button>
          )}
        </div>
      </div>

      {/* ── Stage navigation ── */}
      <div className="stage-nav">
        <button className="stage-nav__btn" onClick={() => go(current - 1)} disabled={current === 0}>
          ← Previous
        </button>
        <button className="stage-nav__btn stage-nav__btn--next" onClick={() => go(current + 1)} disabled={current === total - 1}>
          Next stop →
        </button>
      </div>

      {/* ── Map (secondary view of the same route) ── */}
      {showMap && (
        <>
          <p className="route__map-title">See it on the map</p>
          <CityMap
            places={places}
            accentColor={accentColor}
            selectedPlaceId={stage.id}
            doneIds={routeDone}
            onSelect={(id) => go(places.findIndex((p) => p.id === id))}
          />
        </>
      )}
    </div>
  );
}
