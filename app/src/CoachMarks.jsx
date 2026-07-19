import './CoachMarks.css'

// One-time explainer shown the first time the map appears (after "Start Journey").
// All hints show at once; a tap anywhere dismisses the whole thing.
export default function CoachMarks({ onDismiss }) {
  return (
    <div className="coach-overlay" onClick={onDismiss}>
      {/* Flag switcher lives inside the centered map column, not the viewport edge,
          so anchor the callout to a column that mirrors .map-container's width. */}
      <div className="coach-map-anchor">
        <div className="coach-callout coach-flag">
          <span className="coach-arrow coach-arrow-up" />
          <div className="coach-bubble">
            <strong>Tap the flag</strong>
            <span>Switch to another journey (country) anytime.</span>
          </div>
        </div>
      </div>

      {/* City Life — 3rd of 5 bottom-nav tabs (center ~50%) */}
      <div className="coach-callout coach-citylife">
        <div className="coach-bubble">
          <strong>🏙️ City Life</strong>
          <span>Practice real-life city scenes and everyday local situations.</span>
        </div>
        <span className="coach-arrow coach-arrow-down" />
      </div>

      {/* Passport — 4th of 5 bottom-nav tabs (center ~70%) */}
      <div className="coach-callout coach-passport">
        <div className="coach-bubble">
          <strong>🛂 Passport</strong>
          <span>Collect a stamp for every city you complete.</span>
        </div>
        <span className="coach-arrow coach-arrow-down" />
      </div>

      <p className="coach-hint">Tap anywhere to continue</p>
    </div>
  )
}
