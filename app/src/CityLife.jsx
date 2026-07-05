import { useState } from 'react';
import RouteJourney from './RouteJourney';
import CityLifeMap from './CityLifeMap';
import FlagSwitcher from './FlagSwitcher';
import journeys from './journeys';
import './CityLife.css';

// Journeys that actually ship City Life content; the rest are blocked in the switcher.
const CITYLIFE_AVAILABLE = Object.keys(journeys).filter((id) => journeys[id].citylife?.length);

// City Life: an illustrated city map of 8 places. Tapping a pin opens that
// place as a stepped journey (RouteJourney) — the sequence of things you'd
// actually do there, with phrases and a mini-quiz per step. Route progress
// (explored stages, favourites) shares App's per-journey state. `locations`
// comes from the active journey pack; only journeys that ship a citylife file
// have it — the rest show a coming-soon state.
export default function CityLife({
  locations, journey, onJourneySelect,
  routeDone, favorites, completedLessons, langName = 'German',
  onStageComplete, onToggleFavorite,
}) {
  const [selected, setSelected] = useState(null);
  const location = (locations || []).find((l) => l.id === selected);

  if (location) {
    return (
      <div className="citylife">
        <button className="cl-back" onClick={() => setSelected(null)}>← City map</button>
        <RouteJourney
          places={location.stages}
          accentColor={location.accent}
          cityName={location.name}
          langName={langName}
          completedLessons={completedLessons}
          routeDone={routeDone}
          favorites={favorites}
          onLessonSelect={() => {}}
          onStageComplete={onStageComplete}
          onToggleFavorite={onToggleFavorite}
          showMap={false}
        />
      </div>
    );
  }

  return (
    <div className="citylife">
      <FlagSwitcher journey={journey} onSelect={onJourneySelect} available={CITYLIFE_AVAILABLE} />
      <div className="cl-header">
        <span className="cl-header-icon">🏙️</span>
        <div>
          <div className="cl-header-title">City Life</div>
          <div className="cl-header-sub">Tap a place and walk through what you&apos;d actually do there</div>
        </div>
      </div>
      {locations?.length ? (
        <CityLifeMap locations={locations} routeDone={routeDone} onSelect={setSelected} />
      ) : (
        <div className="cl-coming-soon">City Life is coming soon for this country. 🗺️</div>
      )}
    </div>
  );
}
