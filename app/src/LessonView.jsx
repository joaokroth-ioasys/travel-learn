import { useState, useEffect, useRef } from 'react';
import { useUi, useLang, pickLang } from './ui';
import './LessonView.css';

// ── Helpers ─────────────────────────────────────────────────────────────────

function findLessonAndCity(content, lessonId) {
  for (const city of content) {
    const lesson = city.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, city };
  }
  return { lesson: null, city: null };
}

// ── Sub-components ───────────────────────────────────────────────────────────

function ArticleBadge({ article }) {
  if (!article) return null;
  const cls = article.toLowerCase();
  return <span className={`article-badge ${cls}`}>{article}</span>;
}

function VocabStep({ step, onNext }) {
  const t = useUi();
  const lang = useLang();
  return (
    <div className="lesson-card">
      <div className="vocab-word-row">
        <span className="vocab-word">{step.word}</span>
        <ArticleBadge article={step.article} />
      </div>
      <p className="vocab-english">{pickLang(lang, step.english, step.portuguese)}</p>
      {step.example && <p className="vocab-example">{step.example}</p>}
      <button className="lesson-next-btn" onClick={onNext}>
        {t.next}
      </button>
    </div>
  );
}

function GrammarStep({ step, onNext }) {
  const t = useUi();
  const lang = useLang();
  return (
    <div className="lesson-card grammar-card">
      <h2 className="grammar-card-title">{pickLang(lang, step.title, step.titlePt)}</h2>
      <p className="grammar-explanation">{pickLang(lang, step.explanation, step.explanationPt)}</p>
      {step.examples && step.examples.length > 0 && (
        <ul className="grammar-examples-list">
          {step.examples.map((ex, i) => (
            <li key={i} className="grammar-example-item">
              {ex}
            </li>
          ))}
        </ul>
      )}
      <button className="lesson-next-btn" onClick={onNext}>
        {t.next}
      </button>
    </div>
  );
}

function MultipleChoiceExercise({ step, onAdvance, onAnswer }) {
  const lang = useLang();
  const [selected, setSelected] = useState(null);
  const timerRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function handleSelect(option) {
    if (selected !== null) return; // already answered
    setSelected(option);
    onAnswer(option === step.correct);
    timerRef.current = setTimeout(() => {
      onAdvance();
    }, 1000);
  }

  function getOptionClass(option) {
    if (selected === null) return '';
    if (option === step.correct) return 'correct';
    if (option === selected) return 'wrong';
    return '';
  }

  return (
    <div className="lesson-card">
      <p className="exercise-question">{pickLang(lang, step.question, step.questionPt)}</p>
      <div className="mc-grid">
        {step.options.map((option) => (
          <button
            key={option}
            className={`mc-option-btn ${getOptionClass(option)}`}
            onClick={() => handleSelect(option)}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function FillBlankExercise({ step, onAdvance, onAnswer }) {
  const t = useUi();
  const lang = useLang();
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null); // null | 'correct' | 'wrong'
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function handleSubmit() {
    if (result !== null) return;
    const isCorrect =
      answer.trim().toLowerCase() === step.correct.trim().toLowerCase();
    setResult(isCorrect ? 'correct' : 'wrong');
    onAnswer(isCorrect);
    timerRef.current = setTimeout(() => {
      onAdvance();
    }, 1500);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && result === null && answer.trim() !== '') {
      handleSubmit();
    }
  }

  const inputClass = result ? result : '';

  return (
    <div className="lesson-card">
      <p className="exercise-question">{pickLang(lang, step.question, step.questionPt)}</p>
      <div className="fill-blank-input-row">
        <input
          type="text"
          className={`fill-blank-input ${inputClass}`}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.typeAnswer}
          disabled={result !== null}
          autoFocus
        />
        {step.hint && result === null && (
          <p className="fill-blank-hint">{t.hint(step.hint)}</p>
        )}
        {result && (
          <p className={`exercise-feedback ${result}`}>
            {result === 'correct'
              ? t.correctFeedback(step.correct)
              : t.wrongFeedback(step.correct)}
          </p>
        )}
        <button
          className="fill-blank-submit-btn"
          onClick={handleSubmit}
          disabled={result !== null || answer.trim() === ''}
        >
          {t.submit}
        </button>
      </div>
    </div>
  );
}

function ExerciseStep({ step, onNext, onAnswer }) {
  const t = useUi();
  const lang = useLang();
  if (step.subtype === 'multiple-choice') {
    return <MultipleChoiceExercise step={step} onAdvance={onNext} onAnswer={onAnswer} />;
  }
  if (step.subtype === 'fill-blank') {
    return <FillBlankExercise step={step} onAdvance={onNext} onAnswer={onAnswer} />;
  }
  // Fallback for unknown exercise subtypes
  return (
    <div className="lesson-card">
      <p className="exercise-question">{pickLang(lang, step.question, step.questionPt)}</p>
      <button className="lesson-next-btn" onClick={onNext}>
        {t.next}
      </button>
    </div>
  );
}

const CITY_MESSAGES = {
  frankfurt: 'Willkommen in Deutschland! ✈️',
  stuttgart: 'Sehr professionell! 💼',
  munich: 'Prost! 🍺',
  berlin: 'Beeindruckend! 🏛️',
};

function CompletionScreen({ cityName, cityId, stars, onBack }) {
  const t = useUi();
  const cityMessage = CITY_MESSAGES[cityId] || t.cityDefaultMessage;
  const starDisplay = Array.from({ length: 3 }, (_, i) =>
    i < stars ? '★' : '☆'
  ).join('');

  return (
    <div className="completion-overlay">
      <div className="completion-card">
        <div className="completion-checkmark">✓</div>
        <h2 className="completion-title">{t.lessonComplete}</h2>
        <div className="completion-stars">{starDisplay}</div>
        <p className="completion-city-message">{cityMessage}</p>
        <p className="completion-city">{cityName}</p>
        <button className="completion-back-btn" onClick={onBack}>
          {t.backToCity(cityName)}
        </button>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function LessonView({ content, lessonId, onComplete, onBack }) {
  const t = useUi();
  const lang = useLang();
  const { lesson, city } = findLessonAndCity(content, lessonId);

  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const completedRef = useRef(false);
  const starsRef = useRef(1);

  // Call onComplete exactly once when done becomes true
  useEffect(() => {
    if (done && !completedRef.current) {
      completedRef.current = true;
      onComplete(lessonId, starsRef.current);
    }
  }, [done, lessonId, onComplete]);

  if (!lesson || !city) {
    return (
      <div className="lesson-not-found">
        <h2>{t.lessonNotFound}</h2>
        <p>{t.lessonNotFoundBody(lessonId)}</p>
        <button onClick={onBack}>{t.goBack}</button>
      </div>
    );
  }

  const steps = lesson.steps || [];
  const totalSteps = steps.length;
  const step = steps[currentStep];

  function handleAnswer(isCorrect) {
    setScore(prev => isCorrect
      ? { ...prev, correct: prev.correct + 1 }
      : { ...prev, wrong: prev.wrong + 1 }
    );
  }

  function handleNext() {
    if (currentStep + 1 >= totalSteps) {
      const totalExercises = steps.filter(s => s.type === 'exercise').length;
      const wrong = score.wrong;
      if (wrong === 0) {
        starsRef.current = 3;
      } else if (totalExercises > 0 && wrong / totalExercises <= 0.2) {
        starsRef.current = 2;
      } else {
        starsRef.current = 1;
      }
      setDone(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
  }

  const progressPercent =
    totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  function renderStep() {
    if (!step) return null;

    switch (step.type) {
      case 'vocab':
        return <VocabStep key={currentStep} step={step} onNext={handleNext} />;
      case 'grammar':
        return <GrammarStep key={currentStep} step={step} onNext={handleNext} />;
      case 'exercise':
        return <ExerciseStep key={currentStep} step={step} onNext={handleNext} onAnswer={handleAnswer} />;
      default:
        return (
          <div className="lesson-card">
            <p>{t.unknownStep(step.type)}</p>
            <button className="lesson-next-btn" onClick={handleNext}>
              {t.next}
            </button>
          </div>
        );
    }
  }

  return (
    <div
      className="lesson-view"
      style={{ '--accent': city.accentColor }}
    >
      {/* Top bar */}
      <div className="lesson-topbar">
        <button className="lesson-back-btn" onClick={onBack} aria-label={t.goBackAria}>
          ←
        </button>
        <span className="lesson-title">{pickLang(lang, lesson.title, lesson.titlePt)}</span>
        <span className="lesson-city-name">{city.name}</span>
      </div>

      {/* Progress bar */}
      <div className="lesson-progress-track">
        <div
          className="lesson-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step area */}
      <div className="lesson-step-area">{renderStep()}</div>

      {/* Completion overlay */}
      {done && (
        <CompletionScreen cityName={city.name} cityId={city.id} stars={starsRef.current} onBack={onBack} />
      )}
    </div>
  );
}
