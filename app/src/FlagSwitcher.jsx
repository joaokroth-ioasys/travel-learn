import { useState } from 'react'
import './FlagSwitcher.css'

// CSS-drawn flag. de = horizontal black/red/gold, fr = vertical blue/white/red,
// cl = white field + red lower band + blue canton with a white star,
// jp = white field + centred red disc.
function Flag({ country, size }) {
  if (country === 'cl') {
    return (
      <span className={`flag flag-cl ${size || ''}`} aria-hidden="true">
        <i className="flag-cl-red" />
        <i className="flag-cl-canton"><i className="flag-cl-star" /></i>
      </span>
    )
  }
  if (country === 'jp') {
    return (
      <span className={`flag flag-jp ${size || ''}`} aria-hidden="true">
        <i className="flag-jp-disc" />
      </span>
    )
  }
  return (
    <span className={`flag flag-${country} ${size || ''}`} aria-hidden="true">
      <i /><i /><i />
    </span>
  )
}

// Corner flag button that opens a modal to switch journeys.
// journey: 'de' | 'fr' (which flag the corner shows). onSelect(journey) bubbles the choice up.
// available: optional array of journey codes; codes outside it render blocked (locked).
export default function FlagSwitcher({ journey, onSelect, available }) {
  const [open, setOpen] = useState(false)

  function pick(j) {
    setOpen(false)
    onSelect(j)
  }

  // Sorted alphabetically by label.
  const journeys = [
    { code: 'cl', label: 'Chile' },
    { code: 'fr', label: 'France' },
    { code: 'de', label: 'Germany' },
    { code: 'jp', label: 'Japan' },
    { code: 'wo', label: 'Monde' },
    { code: 'd2', label: 'D2' },
    { code: 'f2', label: 'F2' },
  ].sort((a, b) => a.label.localeCompare(b.label))

  return (
    <>
      <button
        className="flag-corner"
        onClick={() => setOpen(true)}
        aria-label="Trocar jornada"
      >
        <Flag country={journey} />
      </button>

      {open && (
        <div className="flag-modal-overlay" onClick={() => setOpen(false)}>
          <div className="flag-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Choose your journey">
            <h2>Choose your journey</h2>
            <div className="flag-options">
              {journeys.map(({ code, label }) => {
                const blocked = available && !available.includes(code)
                return (
                  <button
                    key={code}
                    className={blocked ? 'blocked' : ''}
                    disabled={blocked}
                    onClick={() => !blocked && pick(code)}
                  >
                    <Flag country={code} size="flag-lg" />
                    {blocked && <span className="flag-lock" aria-hidden="true">🔒</span>}
                    <span>{label}</span>
                  </button>
                )
              })}
            </div>
            <p className="flag-scroll-hint">deslize para ver mais →</p>
          </div>
        </div>
      )}
    </>
  )
}
