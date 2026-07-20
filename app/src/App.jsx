import { useState, useEffect } from 'react'
import MapScreen from './MapScreen'
import CityPage from './CityPage'
import LessonView from './LessonView'
import ReviewTab from './ReviewTab'
import Onboarding from './Onboarding'
import PassportTab from './PassportTab'
import CityLife from './CityLife'
import RewardBurst from './RewardBurst'
import CoachMarks from './CoachMarks'
import LoginGate from './LoginGate'
import journeys, { getJourney } from './journeys'
import { load, save, loadGlobal, saveGlobal, todayStr, advanceStreak, daysBetween } from './progress'
import { isLoggedIn, pull } from './sync'
import { isCompletedMode, enterCompletedMode, exitCompletedMode } from './completedUser'

// Streak counts that deserve a celebration.
const STREAK_MILESTONES = new Set([3, 7, 14, 30, 60, 100])
import './BottomNav.css'

// Journeys drawn from the same world-source basis can do the continuous viewBox
// pan-zoom between them (f2 ↔ d2 ↔ c2 ↔ j2 ↔ ch); others fall back to the CSS slide.
const SHARED_BASIS = new Set(['f2', 'd2', 'c2', 'j2', 'ch'])

export default function App() {
  const [journey, setJourney] = useState(() => {
    const stored = loadGlobal('active-journey')
    const id = stored === 'cl' ? 'c2' : stored === 'jp' ? 'j2' : stored === 'fr' ? 'f2' : stored   // cl→c2, jp→j2, fr→f2
    return journeys[id] ? id : 'd2' // ignore a stale id (e.g. the old 'xx'/'test')
  }) // 'f2' | 'd2'
  const [tab, setTab] = useState('map')           // 'map' | 'review'
  const [screen, setScreen] = useState('map')      // map | city | lesson
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [pan, setPan] = useState(null)             // {from, to} during an f2↔d2 viewBox pan

  // ── Per-journey progress (namespaced in localStorage by journey id) ──
  const [completedLessons, setCompletedLessons] = useState(() => new Set(load(journey, 'completed', [])))
  const [xp, setXp] = useState(() => load(journey, 'xp', 0))
  const [streak, setStreak] = useState(() => load(journey, 'streak', { count: 0, lastDate: null }))
  const [stars, setStars] = useState(() => load(journey, 'stars', {}))
  const [routeDone, setRouteDone] = useState(() => new Set(load(journey, 'route', [])))   // explored route stage ids
  const [favorites, setFavorites] = useState(() => new Set(load(journey, 'favorites', []))) // favourited stage ids
  const [perfect, setPerfect] = useState(() => new Set(load(journey, 'perfect', [])))       // stages solved first-try
  const [rewardBurst, setRewardBurst] = useState(null)  // transient XP / level-up / streak celebration

  // Onboarded is global (not per-journey)
  const [onboarded, setOnboarded] = useState(() => loadGlobal('onboarded') === '1')
  // First-run coach marks (global): shown once on the map after Start Journey
  const [coachSeen, setCoachSeen] = useState(() => loadGlobal('coach-marks') === '1')

  // Reload progress when the active journey changes (each journey is isolated).
  useEffect(() => {
    setCompletedLessons(new Set(load(journey, 'completed', [])))
    setXp(load(journey, 'xp', 0))
    setStreak(load(journey, 'streak', { count: 0, lastDate: null }))
    setStars(load(journey, 'stars', {}))
    setRouteDone(new Set(load(journey, 'route', [])))
    setFavorites(new Set(load(journey, 'favorites', [])))
    setPerfect(new Set(load(journey, 'perfect', [])))
  }, [journey])

  useEffect(() => {
    save(journey, 'completed', [...completedLessons])
  }, [journey, completedLessons])

  // Once per browser session, if logged in, pull the latest server progress and
  // reload so all screens read the merged localStorage. The flag stops a loop.
  useEffect(() => {
    if (isLoggedIn() && !sessionStorage.getItem('synced')) {
      sessionStorage.setItem('synced', '1')
      pull().then(() => window.location.reload())
    }
  }, [])

  // Required sign-in gate before everything (skipped when Google isn't configured,
  // e.g. an offline-only build).
  if (import.meta.env.VITE_GOOGLE_CLIENT_ID && !isLoggedIn()) {
    return <LoginGate />
  }

  // Show onboarding before everything else
  if (!onboarded) {
    return (
      <Onboarding onComplete={(journeyId) => {
        saveGlobal('active-journey', journeyId)
        setJourney(journeyId)
        saveGlobal('onboarded', '1')
        setOnboarded(true)
      }} />
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

  // Add XP, persist it, and fire the reward burst (floating +XP, plus a
  // level-up card when a 200-XP boundary is crossed). `extra` folds in other
  // celebrations (e.g. a streak milestone) so one completion shows one burst.
  function awardXp(amount, extra = {}) {
    if (amount > 0) {
      const next = xp + amount
      setXp(next)
      save(journey, 'xp', next)
      setRewardBurst({
        xp: amount,
        leveledUp: Math.floor(next / 200) > Math.floor(xp / 200),
        level: Math.floor(next / 200) + 1,
        ...extra,
      })
    } else if (extra.streakMilestone || extra.leveledUp) {
      setRewardBurst({ xp: 0, ...extra })
    }
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

    // Advance the streak (grace-freeze aware) and note any milestone reached.
    const nextStreak = advanceStreak(streak, todayStr())
    if (nextStreak !== streak) { setStreak(nextStreak); save(journey, 'streak', nextStreak) }
    const streakMilestone = nextStreak !== streak && STREAK_MILESTONES.has(nextStreak.count)
      ? nextStreak.count : null

    // Award a city stamp if all its lessons are now complete, and flag the burst
    // so earning a stamp is celebrated on the spot (half / all are bigger moments).
    // Stamps live only in storage; PassportTab reads them from there.
    const city = pack.content.find(c => c.lessons.some(l => l.id === lessonId))
    let stampExtra = {}
    if (city && city.lessons.every(l => newCompleted.has(l.id))) {
      const stamps = load(journey, 'stamps', {})
      if (!stamps[city.id]) {
        save(journey, 'stamps', { ...stamps, [city.id]: todayStr() })
        const total = pack.content.length
        const after = pack.content.filter(c => c.id === city.id || stamps[c.id]).length
        stampExtra = {
          stamp: city.name,
          stampMilestone: after === total ? 'all' : after === Math.ceil(total / 2) ? 'half' : null,
        }
      }
    }

    awardXp(50 + (starCount === 3 ? 25 : 0) + (stampExtra.stamp ? 20 : 0), { streakMilestone, ...stampExtra })
  }

  // Solving a stage quiz marks it explored (+10 XP, once). Answering correctly
  // on the first try earns a +5 mastery bonus and banks the stage as "perfect".
  function handleStageComplete(stageId, firstTry = false) {
    if (routeDone.has(stageId)) return
    const next = new Set(routeDone); next.add(stageId)
    setRouteDone(next)
    save(journey, 'route', [...next])
    if (firstTry) {
      const nextP = new Set(perfect); nextP.add(stageId)
      setPerfect(nextP)
      save(journey, 'perfect', [...nextP])
    }
    awardXp(firstTry ? 15 : 10, firstTry ? { perfect: true } : {})
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
      <>
        <LessonView
          content={pack.content}
          lessonId={selectedLesson}
          onComplete={handleLessonComplete}
          onBack={handleBackToCity}
        />
        <RewardBurst burst={rewardBurst} onDone={() => setRewardBurst(null)} />
      </>
    )
  }

  function handleTabSwitch(t) {
    setTab(t)
    if (t === 'map') {
      // stay on current map/city screen
    } else {
      // leave city screen when switching to review
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
      ) : tab === 'citylife' ? (
        <CityLife
          locations={pack.citylife}
          mapImage={pack.citylifeMap}
          journey={journey}
          onJourneySelect={handleJourneySelect}
          routeDone={routeDone}
          favorites={favorites}
          perfect={perfect}
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
          streakAtRisk={streak.count > 0 && streak.lastDate != null && daysBetween(streak.lastDate, todayStr()) === 1}
          stars={stars}
          pan={pan}
          onPanDone={() => setPan(null)}
        />
      )}
      <RewardBurst burst={rewardBurst} onDone={() => setRewardBurst(null)} />

      {!coachSeen && tab === 'map' && screen === 'map' && (
        <CoachMarks onDismiss={() => { saveGlobal('coach-marks', '1'); setCoachSeen(true); }} />
      )}

      {/* ponytail: dev/demo toggle — fill or restore all progress (see completedUser.js) */}
      <button
        className="completed-user-btn"
        onClick={() => {
          if (isCompletedMode()) exitCompletedMode(); else enterCompletedMode()
          window.location.reload()
        }}
      >
        {isCompletedMode() ? '✓ Completed' : 'Complete all'}
      </button>

      <nav className="bottom-nav">
        <button
          className={`bottom-nav-btn${tab === 'map' ? ' active' : ''}`}
          onClick={() => handleTabSwitch('map')}
        >
          <span className="bnav-icon">🗺️</span>
          <span className="bnav-label">Map</span>
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
