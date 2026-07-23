import { useState } from 'react'
import journeys from './journeys'
import { load, loadGlobal, saveGlobal, todayStr } from './progress'
import { STAMP_META, PASSPORTS, STAMPED_IMG } from './data/passport'
import {
  getCityTier, getAvgStars, nextStampCity, worldStats, evaluateAchievements,
} from './passportUtil'
import { useUi } from './ui'
import './PassportTab.css'

const BASE = import.meta.env.BASE_URL
const flagSrc = id => `${BASE}passport/${id}-flag.png`
const stampSrc = (imgKey, id) => STAMPED_IMG[imgKey]?.has(id) ? `${BASE}passport/${imgKey}/${id}.png` : null

function formatDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`
}

export default function PassportTab({ activeJourney, onGoToCity }) {
  const t = useUi()
  const TIER_LABEL = { gold: t.tierGold, silver: t.tierSilver, bronze: t.tierBronze }
  // Fall back to 'd2' if the active journey has no passport (e.g. a stale id).
  const [view, setView] = useState(PASSPORTS[activeJourney] ? activeJourney : 'd2')
  const [selected, setSelected] = useState(null)
  // Each country's passport starts closed; opening it once is remembered.
  const [opened, setOpened] = useState(() => {
    try { return new Set(JSON.parse(loadGlobal('passport-opened', '[]'))) } catch { return new Set() }
  })
  const setOpenedState = next => {
    setOpened(next)
    saveGlobal('passport-opened', JSON.stringify([...next]))
  }
  const openCover = () => setOpenedState(new Set(opened).add(view))
  const closeCover = () => {
    const next = new Set(opened); next.delete(view); setOpenedState(next); setSelected(null)
  }

  // Page-turn: clicking the bottom-right corner advances to the next passport.
  const order = Object.keys(PASSPORTS)
  const nextView = order[(order.indexOf(view) + 1) % order.length]
  const turnPage = () => { setView(nextView); setSelected(null) }

  // Read the viewed country's data + saved progress straight from storage,
  // so both passports are viewable regardless of which journey is active.
  const cities = journeys[view].content
  const stamps = load(view, 'stamps', {})
  const stars = load(view, 'stars', {})
  const completedLessons = new Set(load(view, 'completed', []))
  const pp = PASSPORTS[view]
  // Variants (f2, j2) reuse a base country's image assets via pp.img.
  const imgKey = pp.img || view

  const today = todayStr()
  const stampedCount = cities.filter(c => stamps[c.id]).length
  const allStamped = stampedCount === cities.length
  const pct = (stampedCount / cities.length) * 100
  // The unstamped city closest to completion — highlighted as the next target.
  const next = nextStampCity(cities, stamps, completedLessons)

  // Per-tab stamp counts (for the switcher badges).
  const viewStamps = Object.fromEntries(order.map(id => [id, load(id, 'stamps', {})]))
  const viewCount = id => journeys[id].content.filter(c => viewStamps[id][c.id]).length

  // Cross-journey ("World Traveller") stats + achievements — derived, no new storage.
  // ponytail: dedupe views that alias the same PASSPORTS chrome so a country isn't
  // counted twice.
  const seenPP = new Set()
  const distinctViews = order.filter(id => (seenPP.has(PASSPORTS[id]) ? false : seenPP.add(PASSPORTS[id])))
  const entries = distinctViews.map(id => ({
    id, cities: journeys[id].content, stamps: viewStamps[id], stars: load(id, 'stars', {}),
  }))
  const ws = worldStats(entries)
  const achievements = evaluateAchievements({
    totalStamps: ws.stamps,
    countriesComplete: ws.countriesComplete,
    totalCountries: entries.length,
    countriesWithStamps: entries.filter(e => e.cities.some(c => e.stamps[c.id])).length,
    anyGold: entries.some(e => e.cities.some(c => getCityTier(c, e.stamps, e.stars) === 'gold')),
    anyRoute: distinctViews.some(id => load(id, 'route', []).length > 0),
    anySrs: distinctViews.some(id => Object.keys(load(id, 'srs', {})).length > 0),
    openedAll: distinctViews.every(id => opened.has(id)),
  })

  return (
    <div className="passport-tab">

      {/* ── World Traveller summary (cross-journey) ── */}
      <div className="pp-world">
        🌍 {t.worldStamps(ws.stamps, ws.totalCities)}
        {ws.countriesComplete > 0 && <span className="pp-world-sub">{t.countriesComplete(ws.countriesComplete)}</span>}
      </div>

      {/* ── Country switcher ── */}
      <div className="pp-switcher" role="tablist">
        {order.map((id) => {
          const p = PASSPORTS[id]
          const n = viewCount(id)
          const total = journeys[id].content.length
          const complete = n === total
          return (
            <button
              key={id}
              role="tab"
              aria-selected={view === id}
              className={`pp-switcher-btn${view === id ? ' active' : ''}${id === activeJourney ? ' pp-switcher-btn--live' : ''}`}
              onClick={() => { setView(id); setSelected(null) }}
              title={id === activeJourney ? t.activeJourneyTitle : undefined}
            >
              <img className="pp-switcher-flag" src={flagSrc(p.img || id)} alt="" /> {p.name}
              <span className="pp-switcher-count">{complete ? '✓' : `${n}/${total}`}</span>
            </button>
          )
        })}
      </div>

      {!opened.has(view) ? (
        /* ── Closed cover: minimalist EU passport front, tap to open ── */
        <button className="pp-cover" key={`cover-${view}`} onClick={openCover} aria-label={t.openPassportAria(pp.name)}>
          <span className="pp-cover-eu">{pp.eu}</span>
          <span className="pp-cover-emblem" aria-hidden="true">{pp.emblem}</span>
          <span className="pp-cover-type">{pp.coverType}</span>
          <span className="pp-cover-bio" aria-hidden="true" />
          <span className="pp-cover-hint">{t.tapToOpen}</span>
        </button>
      ) : (
      /* ── Open book spread (key remount replays the flip) ── */
      <div className="passport-book" key={view}>

        {/* Close back to the cover */}
        <button className="pp-close" onClick={closeCover} aria-label={t.closePassport} title={t.closePassport}>✕</button>

        {/* Left page: bearer info */}
        <div className="passport-page passport-page--left">
          <div className="pp-rule" />
          <div className="pp-photo-box pp-photo-box--flag">
            <img className="pp-flag-img" src={`${BASE}passport/${imgKey}-stamp.png`} alt={pp.name} />
          </div>
          <div className="pp-fields">
            <div className="pp-field">
              <span className="pp-field-label">{pp.bearerLabel}</span>
              <span className="pp-field-val">{t.languageTraveller}</span>
            </div>
            <div className="pp-field">
              <span className="pp-field-label">{pp.capitalLabel}</span>
              <span className="pp-field-val">{pp.capital}</span>
            </div>
            <div className="pp-field">
              <span className="pp-field-label">{pp.mottoLabel}</span>
              <span className="pp-field-val pp-field-val--motto">{pp.motto}</span>
            </div>
            <div className="pp-field">
              <span className="pp-field-label">{pp.citiesLabel}</span>
              <span className="pp-field-val">{stampedCount} / {cities.length}</span>
            </div>
          </div>

          {/* Decorative national stamps */}
          <div className="pp-deco">
            {pp.deco.map(d => (
              <span key={d.label} className="pp-deco-stamp" title={d.label}>
                <span className="pp-deco-icon">{d.icon}</span>
                <span className="pp-deco-label">{d.label}</span>
              </span>
            ))}
          </div>
          <div className="pp-mrz">
            <span>P&lt;{pp.mrz}&lt;LANGUAGE&lt;TRAVELLER&lt;&lt;&lt;&lt;&lt;&lt;</span>
            <span>{String(stampedCount).padStart(2, '0')}{pp.mrz.slice(0, 2)}0000000&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span>
          </div>
        </div>

        {/* Spine */}
        <div className="passport-spine" />

        {/* Right page: stamps */}
        <div className="passport-page passport-page--right">
          {/* National rubber stamp, whacked across the visa page as a watermark */}
          <img className="pp-page-stamp" src={`${BASE}passport/${imgKey}-stamp.png`} alt="" aria-hidden="true" />
          <div className="pp-rule" />
          <p className="pp-stamps-label">{pp.stampsLabel}</p>
          <div className="pp-stamps-grid">
            {cities.map(city => {
              const meta = STAMP_META[city.id] || { code: '???', sub: '' }
              const isStamped = !!stamps[city.id]
              const isNew = stamps[city.id] === today
              const done = city.lessons.filter(l => completedLessons.has(l.id)).length
              const imgSrc = isStamped ? stampSrc(imgKey, city.id) : null
              const tier = getCityTier(city, stamps, stars)
              const isNext = !isStamped && next?.city.id === city.id

              return (
                <button
                  key={city.id}
                  className={`pp-stamp${isStamped ? ' pp-stamp--inked' : ''}${isNew ? ' pp-stamp--new' : ''}${imgSrc ? ' pp-stamp--img' : ''}${tier ? ` pp-stamp--${tier}` : ''}${isNext ? ' pp-stamp--next' : ''}`}
                  style={isStamped ? { '--sc': city.accentColor } : {}}
                  onClick={() => setSelected(selected === city.id ? null : city.id)}
                  aria-label={`${city.name}${isStamped ? `, stamped ${formatDate(stamps[city.id])}${tier ? `, ${tier}` : ''}` : `, ${done}/${city.lessons.length} lessons${isNext ? ', closest to complete' : ''}`}`}
                >
                  {imgSrc ? (
                    <img className="pp-stamp-img" src={imgSrc} alt={city.name} />
                  ) : (
                    <>
                      <span className="pp-stamp-icon">{isStamped ? city.icon : '✦'}</span>
                      <span className="pp-stamp-code">{meta.code}</span>
                      <span className="pp-stamp-sub">{isStamped ? meta.sub : `${done}/${city.lessons.length}`}</span>
                      {isStamped && (
                        <span className="pp-stamp-date">{formatDate(stamps[city.id])}</span>
                      )}
                    </>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Dog-ear page-turn corner: click bottom-right to flip to next passport */}
        <button
          className="pp-page-turn"
          onClick={turnPage}
          aria-label={t.turnPageAria(PASSPORTS[nextView].name)}
          title={t.nextPassport}
        />
      </div>
      )}

      {/* ── Footer progress (only meaningful once the passport is open) ── */}
      {opened.has(view) && (
      <div className="passport-footer">
        {allStamped ? (
          <div className="passport-complete">
            <div className="confetti" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={`confetti-dot confetti-dot--${i % 4}`} style={{ '--i': i }} />
              ))}
            </div>
            <p className="passport-complete-text">{pp.completeText}</p>
            <p className="passport-complete-sub">{pp.completeSub}</p>
          </div>
        ) : (
          <>
            <p className="passport-progress-text">{t.citiesStamped(stampedCount, cities.length)}</p>
            <div className="passport-progress-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
              <div className="passport-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            {next && next.done > 0 && (
              <p className="passport-next-nudge">{t.almostThere(next.city.name, next.done, next.total)}</p>
            )}
          </>
        )}
      </div>
      )}

      {/* ── Achievements shelf (global across all journeys) ── */}
      <div className="pp-ach">
        <p className="pp-ach-title">{t.achievements(achievements.filter(a => a.earned).length, achievements.length)}</p>
        <div className="pp-ach-grid">
          {achievements.map(a => (
            <span
              key={a.id}
              className={`pp-ach-item${a.earned ? ' pp-ach-item--earned' : ''}`}
              title={a.label}
            >
              <span className="pp-ach-icon" aria-hidden="true">{a.icon}</span>
              <span className="pp-ach-label">{a.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Detail modal ── */}
      {selected && (() => {
        const city = cities.find(c => c.id === selected)
        if (!city) return null
        const isStamped = !!stamps[city.id]
        const done = city.lessons.filter(l => completedLessons.has(l.id)).length
        const avg = getAvgStars(city, stars)
        const tier = getCityTier(city, stamps, stars)
        return (
          <div className="stamp-modal" role="dialog" aria-modal="true" onClick={e => { if (e.target === e.currentTarget) setSelected(null) }}>
            <div className="stamp-modal-inner">
              <button className="stamp-modal-close" onClick={() => setSelected(null)} aria-label={t.close}>✕</button>
              {isStamped && stampSrc(imgKey, city.id)
                ? <img className="stamp-modal-img" src={stampSrc(imgKey, city.id)} alt={city.name} />
                : <span className="stamp-modal-icon">{city.icon}</span>}
              <p className="stamp-modal-city">{city.name}</p>
              {isStamped ? (
                <>
                  <p className="stamp-modal-date">{t.stampedDate(formatDate(stamps[city.id]))}</p>
                  <p className={`stamp-modal-tier stamp-modal-tier--${tier}`}>
                    {TIER_LABEL[tier]}&nbsp;&nbsp;{'★'.repeat(avg)}{'☆'.repeat(3 - avg)}
                  </p>
                  <button className="stamp-modal-go" onClick={() => { setSelected(null); onGoToCity(view, city.id) }}>
                    {tier === 'gold' ? t.reviewCity(city.name) : t.rePracticeGold}
                  </button>
                </>
              ) : (
                <>
                  <p className="stamp-modal-progress">{t.lessonsComplete(done, city.lessons.length)}</p>
                  <button className="stamp-modal-go" onClick={() => { setSelected(null); onGoToCity(view, city.id) }}>
                    {t.goToCity(city.name)}
                  </button>
                </>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
