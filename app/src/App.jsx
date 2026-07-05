import { useState, useEffect } from 'react'
import MapScreen from './MapScreen'
import CityPage from './CityPage'
import LessonView from './LessonView'
import ReviewTab from './ReviewTab'
import Onboarding from './Onboarding'
import DailyChallenge from './DailyChallenge'
import PassportTab from './PassportTab'
import CityLife from './CityLife'
import journeys, { getJourney } from './journeys'
import { load, save, loadGlobal, saveGlobal, todayStr } from './progress'
import './BottomNav.css'

// Journeys drawn from the same source basis (borders/eu-borders-4.md) can do the
// continuous camera pan-zoom between them; others fall back to the CSS slide.
const SHARED_BASIS = new Set(['fr', 'de'])

export default function App() {
  const [journey, setJourney] = useState(() => {
    const stored = loadGlobal('active-journey')
    return journeys[stored] ? stored : 'de' // ignore a stale id (e.g. the old 'xx'/'test')
  }) // 'fr' | 'de'
  const [tab, setTab] = useState('map')           // 'map' | 'review' | 'daily'
  const [screen, setScreen] = useState('map')      // map | city | lesson
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [pan, setPan] = useState(null)             // {from, to} during a fr↔de camera pan

  // ── Per-journey progress (namespaced in localStorage by journey id) ──
  const [completedLessons, setCompletedLessons] = useState(() => new Set(load(journey, 'completed', [])))
  const [xp, setXp] = useState(() => load(journey, 'xp', 0))
  const [streak, setStreak] = useState(() => load(journey, 'streak', { count: 0, lastDate: null }))
  const [stars, setStars] = useState(() => load(journey, 'stars', {}))
  const [routeDone, setRouteDone] = useState(() => new Set(load(journey, 'route', [])))   // explored route stage ids
  const [favorites, setFavorites] = useState(() => new Set(load(journey, 'favorites', []))) // favourited stage ids

  // Onboarded is global (not per-journey)
  const [onboarded, setOnboarded] = useState(() => loadGlobal('onboarded') === '1')

  // Reload progress when the active journey changes (each journey is isolated).
  useEffect(() => {
    setCompletedLessons(new Set(load(journey, 'completed', [])))
    setXp(load(journey, 'xp', 0))
    setStreak(load(journey, 'streak', { count: 0, lastDate: null }))
    setStars(load(journey, 'stars', {}))
    setRouteDone(new Set(load(journey, 'route', [])))
    setFavorites(new Set(load(journey, 'favorites', [])))
  }, [journey])

  useEffect(() => {
    save(journey, 'completed', [...completedLessons])
  }, [journey, completedLessons])

  // Show onboarding before everything else
  if (!onboarded) {
    return (
      <Onboarding onComplete={() => { saveGlobal('onboarded', '1'); setOnboarded(true); }} />
    )
  }

  const pack = getJourney(journey)

  function handleJourneySelect(j) {
    const from = journey
    saveGlobal('active-journey', j)
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (from !== j && SHARED_BASIS.has(from) && SHARED_BASIS.has(j) && !reduce) {
      setPan({ from, to: j })   // play the camera pan; MapScreen suppresses its slide
    }
    setJourney(j)
  }

  function handleCitySelect(cityId) {
    if (journey === 'wo') {
      const city = pack.content.find(c => c.id === cityId)
      if (city?.journeyId) handleJourneySelect(city.journeyId)
    }
    setSelectedCity(cityId)
    setScreen('city')
  }

  function handleLessonSelect(lessonId) {
    setSelectedLesson(lessonId)
    setScreen('lesson')
  }

  function handleLessonComplete(lessonId, starCount) {
    const newCompleted = new Set(completedLessons)
    newCompleted.add(lessonId)
    setCompletedLessons(newCompleted)

    setStars(prev => {
      const next = {...prev}
      next[lessonId] = Math.max(prev[lessonId] || 0, starCount || 1)
      save(journey, 'stars', next)
      return next
    })

    setXp(prev => {
      const next = prev + 50 + (starCount === 3 ? 25 : 0)
      save(journey, 'xp', next)
      return next
    })

    setStreak(prev => {
      const today = todayStr()
      const next = prev.lastDate === today ? prev : { count: (prev.count || 0) + 1, lastDate: today }
      save(journey, 'streak', next)
      return next
    })

    // Award city stamp if all lessons in the city are now complete.
    // Stamps live only in storage; PassportTab reads them from there.
    const city = pack.content.find(c => c.lessons.some(l => l.id === lessonId))
    if (city && city.lessons.every(l => newCompleted.has(l.id))) {
      const stamps = load(journey, 'stamps', {})
      if (!stamps[city.id]) save(journey, 'stamps', { ...stamps, [city.id]: todayStr() })
    }
  }

  // Solving a stage quiz marks it explored (+10 XP, once).
  function handleStageComplete(stageId) {
    if (routeDone.has(stageId)) return
    const next = new Set(routeDone); next.add(stageId)
    setRouteDone(next)
    save(journey, 'route', [...next])
    setXp(prev => { const v = prev + 10; save(journey, 'xp', v); return v })
  }

  function handleToggleFavorite(stageId) {
    const next = new Set(favorites)
    if (next.has(stageId)) next.delete(stageId); else next.add(stageId)
    setFavorites(next)
    save(journey, 'favorites', [...next])
  }

  function handleBackToMap() {
    setScreen('map')
    setSelectedCity(null)
    setSelectedLesson(null)
  }

  function handleBackToCity() {
    setScreen('city')
    setSelectedLesson(null)
  }

  // Lesson view is full-screen, no bottom nav
  if (screen === 'lesson') {
    return (
      <LessonView
        content={pack.content}
        lessonId={selectedLesson}
        onComplete={handleLessonComplete}
        onBack={handleBackToCity}
      />
    )
  }

  function handleTabSwitch(t) {
    setTab(t)
    if (t === 'map') {
      // stay on current map/city screen
    } else {
      // leave city screen when switching to review or daily
      setScreen('map')
    }
  }

  function handleGoToCity(journeyId, cityId) {
    if (journeyId !== journey) handleJourneySelect(journeyId)
    setTab('map')
    setSelectedCity(cityId)
    setScreen('city')
  }

  return (
    <>
      {tab === 'review' ? (
        <ReviewTab content={pack.content} journeyId={journey} />
      ) : tab === 'daily' ? (
        <DailyChallenge
          content={pack.content}
          journeyId={journey}
          onXpEarned={(amount) => {
            setXp(prev => {
              const next = prev + amount
              save(journey, 'xp', next)
              return next
            })
          }}
        />
      ) : tab === 'citylife' ? (
        <CityLife
          locations={pack.citylife}
          journey={journey}
          onJourneySelect={handleJourneySelect}
          routeDone={routeDone}
          favorites={favorites}
          completedLessons={completedLessons}
          langName={pack.labels.langName}
          onStageComplete={handleStageComplete}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : tab === 'passport' ? (
        <PassportTab
          activeJourney={journey}
          onGoToCity={handleGoToCity}
        />
      ) : screen === 'city' ? (
        <CityPage
          content={pack.content}
          cityId={selectedCity}
          completedLessons={completedLessons}
          lessonStars={stars}
          routeDone={routeDone}
          favorites={favorites}
          langName={pack.labels.langName}
          onLessonSelect={handleLessonSelect}
          onStageComplete={handleStageComplete}
          onToggleFavorite={handleToggleFavorite}
          onBack={handleBackToMap}
        />
      ) : (
        <MapScreen
          map={pack.map}
          content={pack.content}
          labels={pack.labels}
          journeyId={journey}
          onCitySelect={handleCitySelect}
          onJourneySelect={handleJourneySelect}
          completedLessons={completedLessons}
          xp={xp}
          streak={streak}
          stars={stars}
          pan={pan}
          onPanDone={() => setPan(null)}
        />
      )}

      <nav className="bottom-nav">
        <button
          className={`bottom-nav-btn${tab === 'map' ? ' active' : ''}`}
          onClick={() => handleTabSwitch('map')}
        >
          <span className="bnav-icon">🗺️</span>
          <span className="bnav-label">Map</span>
        </button>
        <button
          className={`bottom-nav-btn${tab === 'daily' ? ' active' : ''}`}
          onClick={() => handleTabSwitch('daily')}
        >
          <span className="bnav-icon">📅</span>
          <span className="bnav-label">Daily</span>
        </button>
        <button
          className={`bottom-nav-btn${tab === 'citylife' ? ' active' : ''}`}
          onClick={() => handleTabSwitch('citylife')}
        >
          <span className="bnav-icon">🏙️</span>
          <span className="bnav-label">City Life</span>
        </button>
        <button
          className={`bottom-nav-btn${tab === 'passport' ? ' active' : ''}`}
          onClick={() => handleTabSwitch('passport')}
        >
          <span className="bnav-icon">🛂</span>
          <span className="bnav-label">Passport</span>
        </button>
        <button
          className={`bottom-nav-btn${tab === 'review' ? ' active' : ''}`}
          onClick={() => handleTabSwitch('review')}
        >
          <span className="bnav-icon">🃏</span>
          <span className="bnav-label">Review</span>
        </button>
      </nav>
    </>
  )
}
