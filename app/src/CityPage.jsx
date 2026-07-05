import { useState } from 'react';
import WikiPhoto from './WikiPhoto';
import RouteJourney from './RouteJourney';
import { darkenHex, hexToRgba } from './colors';
import './CityPage.css';

// Determine the badge state for a lesson.
// completedLessons is a Set<string> of lesson IDs (e.g. "frankfurt-1").
// completedSteps is an optional Set<string> of step keys (e.g. "frankfurt-1:2").
// A lesson is "complete" when its own id is in completedLessons.
// A lesson is "in progress" when it has partial step progress recorded in completedSteps.
function getLessonStatus(lesson, completedLessons, completedSteps) {
  if (completedLessons.has(lesson.id)) return 'complete';
  if (completedSteps) {
    const stepCount = (lesson.steps ?? []).length;
    for (let i = 0; i < stepCount; i++) {
      if (completedSteps.has(`${lesson.id}:${i}`)) return 'continue';
    }
  }
  return 'start';
}

// Props:
//   cityId         , string, e.g. "frankfurt"
//   completedLessons, Set<string> of completed lesson IDs, e.g. new Set(["frankfurt-1"])
//   completedSteps , optional Set<string> of step keys like "frankfurt-1:0", "frankfurt-1:1"
//   onLessonSelect , (lessonId: string) => void
//   onBack         , () => void
export default function CityPage({
  content, cityId, completedLessons, completedSteps, lessonStars = {},
  routeDone = new Set(), favorites = new Set(), langName = 'French',
  onLessonSelect, onStageComplete, onToggleFavorite, onBack,
}) {
  const city = content.find((c) => c.id === cityId);
  const [cheatsheetOpen, setCheatsheetOpen] = useState(false);
  const [descEn, setDescEn] = useState(false);

  if (!city) {
    return (
      <div className="city-page">
        <div className="city-page__body">
          <button className="city-page__back" onClick={onBack}>
            <span className="city-page__back-arrow">←</span>
            Back to Map
          </button>
          <p style={{ marginTop: 80, textAlign: 'center', color: '#7a6a58' }}>
            City not found.
          </p>
        </div>
      </div>
    );
  }

  const { accentColor } = city;
  const darkAccent = darkenHex(accentColor, 50);

  // CSS custom properties for per-card accent colouring
  const lessonCardVars = {
    '--lesson-accent': accentColor,
    '--lesson-badge-bg': hexToRgba(accentColor, 0.1),
    '--lesson-badge-color': accentColor,
    '--lesson-badge-border': hexToRgba(accentColor, 0.35),
  };

  // Immersive route layer (only cities that define `places`, e.g. Paris).
  const places = city.places;

  return (
    <div className="city-page">
      {/* ── Back button ── */}
      <button className="city-page__back" onClick={onBack} aria-label="Back to map">
        <span className="city-page__back-arrow">←</span>
        Back to Map
      </button>

      {/* ── Hero banner ── */}
      <div
        className="city-page__hero"
        style={{
          background: `linear-gradient(140deg, ${accentColor} 0%, ${darkAccent} 100%)`,
        }}
        aria-label={`${city.name}, ${city.tagline}`}
      >
        <div className="city-page__hero-content">
          <span className="city-page__hero-icon" aria-hidden="true">
            {city.icon}
          </span>
          <div className="city-page__hero-text">
            <h1 className="city-page__hero-name">{city.name}</h1>
            {city.tagline && (
              <p className="city-page__hero-tagline">{city.tagline}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Body content ── */}
      <div className="city-page__body">

        {/* ── City description (with optional FR↔EN toggle) ── */}
        {city.description && (
          <div className="city-page__description">
            <p className="city-page__description-text">
              {descEn && city.descriptionEn ? city.descriptionEn : city.description}
            </p>
            {city.descriptionEn && (
              <button
                className="city-page__translate"
                onClick={() => setDescEn((v) => !v)}
              >
                {descEn ? '🌐 Ver original' : '🇬🇧 Translate to English'}
              </button>
            )}
          </div>
        )}

        {/* ── Photo gallery (classic cities only; immersive cities use the map) ── */}
        {!places && city.photos && city.photos.length > 0 && (
          <div className="city-page__photos">
            {city.photos.map((photo, i) => (
              <WikiPhoto
                key={i}
                photo={photo}
                cityIcon={city.icon}
                accentColor={accentColor}
                darkAccent={darkAccent}
              />
            ))}
          </div>
        )}

        {/* ── Immersive route: timeline + stages + quizzes + map ── */}
        {places && (
          <RouteJourney
            places={places}
            accentColor={accentColor}
            cityName={city.name}
            langName={langName}
            completedLessons={completedLessons}
            routeDone={routeDone}
            favorites={favorites}
            onLessonSelect={onLessonSelect}
            onStageComplete={onStageComplete}
            onToggleFavorite={onToggleFavorite}
          />
        )}

        {/* ── Objectives ── */}
        <p className="city-page__section-title">What you&apos;ll learn</p>
        <div className="city-page__objectives">

          {/* Vocabulary card */}
          <div className="city-page__obj-card">
            <p className="city-page__obj-card-title">Vocabulary</p>
            {city.vocabTopics && city.vocabTopics.length > 0 ? (
              <ul className="city-page__vocab-list">
                {city.vocabTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            ) : (
              <p className="city-page__grammar-text">No topics listed yet.</p>
            )}
          </div>

          {/* Grammar card */}
          <div className="city-page__obj-card">
            <p className="city-page__obj-card-title">Grammar</p>
            <p className="city-page__grammar-text">
              {city.grammarTopic ?? 'No grammar topic listed yet.'}
            </p>
          </div>

        </div>

        {/* ── Lessons (classic cities; immersive cities use the route above) ── */}
        {!places && <>
        <p className="city-page__section-title">Lessons</p>
        <div className="city-page__lessons-list">
          {city.lessons.map((lesson) => {
            const status = getLessonStatus(lesson, completedLessons, completedSteps);

            return (
              <button
                key={lesson.id}
                className="city-page__lesson-card"
                style={lessonCardVars}
                onClick={() => onLessonSelect(lesson.id)}
                aria-label={`${lesson.title}, ${status === 'complete' ? 'Completed' : status === 'continue' ? 'In progress' : 'Not started'}`}
              >
                <div className="city-page__lesson-info">
                  <p className="city-page__lesson-title">{lesson.title}</p>
                  <p className="city-page__lesson-desc">{lesson.description}</p>
                </div>

                {status === 'complete' ? (
                  <span className="city-page__lesson-badge city-page__lesson-badge--complete">
                    ✓ Complete
                  </span>
                ) : (
                  <span className="city-page__lesson-badge city-page__lesson-badge--continue">
                    {status === 'continue' ? '▶ Continue' : '→ Start'}
                  </span>
                )}
                {lessonStars[lesson.id] && (
                  <span className="lesson-stars">
                    {'★'.repeat(lessonStars[lesson.id])}{'☆'.repeat(3 - lessonStars[lesson.id])}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        </>}

        <button
          className="cheatsheet-toggle"
          onClick={() => setCheatsheetOpen(o => !o)}
        >
          {cheatsheetOpen ? '▾' : '▸'} Grammar Cheatsheet
        </button>
        {cheatsheetOpen && (
          <div className="cheatsheet-body">
            <p className="cheatsheet-topic">{city.grammarTopic}</p>
            <p className="cheatsheet-note">Reference for all grammar covered in {city.name}.</p>
            {/* Show all grammar steps from all lessons */}
            {city.lessons.flatMap(l => l.steps.filter(s => s.type === 'grammar')).map((g, i) => (
              <div key={i} className="cheatsheet-item">
                <p className="cheatsheet-item-title">{g.title}</p>
                <p className="cheatsheet-item-explanation">{g.explanation}</p>
                {g.examples && (
                  <ul className="cheatsheet-item-examples">
                    {g.examples.map((ex, j) => <li key={j}>{ex}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
