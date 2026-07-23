import { useUi } from './ui'
import './CoachMarks.css'

// One-time explainer shown the first time the map appears (after "Start Journey").
// All hints show at once; a tap anywhere dismisses the whole thing.
export default function CoachMarks({ onDismiss }) {
  const t = useUi()
  return (
    <div className="coach-overlay" onClick={onDismiss}>
      {/* Flag switcher lives inside the centered map column, not the viewport edge,
          so anchor the callout to a column that mirrors .map-container's width. */}
      <div className="coach-map-anchor">
        <div className="coach-callout coach-flag">
          <span className="coach-arrow coach-arrow-up" />
          <div className="coach-bubble">
            <strong>{t.coachFlagTitle}</strong>
            <span>{t.coachFlagBody}</span>
          </div>
        </div>
      </div>

      {/* City Life — 3rd of 5 bottom-nav tabs (center ~50%) */}
      <div className="coach-callout coach-citylife">
        <div className="coach-bubble">
          <strong>{t.coachCityLifeTitle}</strong>
          <span>{t.coachCityLifeBody}</span>
        </div>
        <span className="coach-arrow coach-arrow-down" />
      </div>

      {/* Passport — 4th of 5 bottom-nav tabs (center ~70%) */}
      <div className="coach-callout coach-passport">
        <div className="coach-bubble">
          <strong>{t.coachPassportTitle}</strong>
          <span>{t.coachPassportBody}</span>
        </div>
        <span className="coach-arrow coach-arrow-down" />
      </div>

      <p className="coach-hint">{t.coachDismiss}</p>
    </div>
  )
}
