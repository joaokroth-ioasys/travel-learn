import { useState } from 'react'
import journeys from './journeys'
import { load, loadGlobal, saveGlobal, todayStr } from './progress'
import { STAMP_META, PASSPORTS, STAMPED_IMG } from './data/passport'
import './PassportTab.css'

const BASE = import.meta.env.BASE_URL
const flagSrc = id => `${BASE}passport/${id}-flag.png`
const stampSrc = (view, id) => STAMPED_IMG[view]?.has(id) ? `${BASE}passport/${view}/${id}.png` : null

function formatDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`
}

function getAvgStars(city, stars) {
  const rated = city.lessons.filter(l => stars[l.id])
  if (!rated.length) return 0
  return Math.floor(rated.reduce((s, l) => s + stars[l.id], 0) / rated.length)
}

export default function PassportTab({ activeJourney, onGoToCity }) {
  // Fall back to 'de' if the active journey has no passport (e.g. a stale id).
  const [view, setView] = useState(PASSPORTS[activeJourney] ? activeJourney : 'de')
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

  const today = todayStr()
  const stampedCount = cities.filter(c => stamps[c.id]).length
  const allStamped = stampedCount === cities.length
  const pct = (stampedCount / cities.length) * 100

  return (
    <div className="passport-tab">

      {/* ── Country switcher ── */}
      <div className="pp-switcher" role="tablist">
        {Object.entries(PASSPORTS).map(([id, p]) => (
          <button
            key={id}
            role="tab"
            aria-selected={view === id}
            className={`pp-switcher-btn${view === id ? ' active' : ''}`}
            onClick={() => { setView(id); setSelected(null) }}
          >
            <img className="pp-switcher-flag" src={flagSrc(id)} alt="" /> {p.name}
          </button>
        ))}
      </div>

      {!opened.has(view) ? (
        /* ── Closed cover: minimalist EU passport front, tap to open ── */
        <button className="pp-cover" key={`cover-${view}`} onClick={openCover} aria-label={`Open ${pp.name} passport`}>
          <span className="pp-cover-eu">{pp.eu}</span>
          <span className="pp-cover-emblem" aria-hidden="true">{pp.emblem}</span>
          <span className="pp-cover-type">{pp.coverType}</span>
          <span className="pp-cover-bio" aria-hidden="true" />
          <span className="pp-cover-hint">Tap to open</span>
        </button>
      ) : (
      /* ── Open book spread (key remount replays the flip) ── */
      <div className="passport-book" key={view}>

        {/* Close back to the cover */}
        <button className="pp-close" onClick={closeCover} aria-label="Close passport" title="Close passport">✕</button>

        {/* Left page: bearer info */}
        <div className="passport-page passport-page--left">
          <div className="pp-rule" />
          <div className="pp-photo-box pp-photo-box--flag">
            <img className="pp-flag-img" src={`${BASE}passport/${view}-stamp.png`} alt={pp.name} />
          </div>
          <div className="pp-fields">
            <div className="pp-field">
              <span className="pp-field-label">{pp.bearerLabel}</span>
              <span className="pp-field-val">Language Traveller</span>
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
          <img className="pp-page-stamp" src={`${BASE}passport/${view}-stamp.png`} alt="" aria-hidden="true" />
          <div className="pp-rule" />
          <p className="pp-stamps-label">{pp.stampsLabel}</p>
          <div className="pp-stamps-grid">
            {cities.map(city => {
              const meta = STAMP_META[city.id] || { code: '???', sub: '' }
              const isStamped = !!stamps[city.id]
              const isNew = stamps[city.id] === today
              const done = city.lessons.filter(l => completedLessons.has(l.id)).length
              const imgSrc = isStamped ? stampSrc(view, city.id) : null

              return (
                <button
                  key={city.id}
                  className={`pp-stamp${isStamped ? ' pp-stamp--inked' : ''}${isNew ? ' pp-stamp--new' : ''}${imgSrc ? ' pp-stamp--img' : ''}`}
                  style={isStamped ? { '--sc': city.accentColor } : {}}
                  onClick={() => setSelected(selected === city.id ? null : city.id)}
                  aria-label={`${city.name}${isStamped ? ', stamped ' + formatDate(stamps[city.id]) : `, ${done}/${city.lessons.length} lessons`}`}
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
          aria-label={`Turn page to ${PASSPORTS[nextView].name} passport`}
          title="Next passport"
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
            <p className="passport-progress-text">{stampedCount} / {cities.length} cities stamped</p>
            <div className="passport-progress-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
              <div className="passport-progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </>
        )}
      </div>
      )}

      {/* ── Detail modal ── */}
      {selected && (() => {
        const city = cities.find(c => c.id === selected)
        if (!city) return null
        const isStamped = !!stamps[city.id]
        const done = city.lessons.filter(l => completedLessons.has(l.id)).length
        const avg = getAvgStars(city, stars)
        return (
          <div className="stamp-modal" role="dialog" aria-modal="true" onClick={e => { if (e.target === e.currentTarget) setSelected(null) }}>
            <div className="stamp-modal-inner">
              <button className="stamp-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              {isStamped && stampSrc(view, city.id)
                ? <img className="stamp-modal-img" src={stampSrc(view, city.id)} alt={city.name} />
                : <span className="stamp-modal-icon">{city.icon}</span>}
              <p className="stamp-modal-city">{city.name}</p>
              {isStamped ? (
                <>
                  <p className="stamp-modal-date">Stamped {formatDate(stamps[city.id])}</p>
                  <p className="stamp-modal-stats">
                    ✓ {city.lessons.length}/{city.lessons.length} lessons&nbsp;&nbsp;
                    {'★'.repeat(avg)}{'☆'.repeat(3 - avg)}
                  </p>
                </>
              ) : (
                <>
                  <p className="stamp-modal-progress">{done}/{city.lessons.length} lessons complete</p>
                  <button className="stamp-modal-go" onClick={() => { setSelected(null); onGoToCity(view, city.id) }}>
                    Go to {city.name} →
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
