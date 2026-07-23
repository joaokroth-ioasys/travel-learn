import { useState } from 'react';
import RouteJourney from './RouteJourney';
import CityLifeMap from './CityLifeMap';
import SavedPhrases from './SavedPhrases';
import FlagSwitcher from './FlagSwitcher';
import journeys from './journeys';
import { cityLifeProgress, firstIncompleteLocation, locationDone, locationMastered } from './citylifeUtil';
import { useUi } from './ui';
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
  routeDone, favorites, perfect = new Set(), completedLessons, langName = 'German',
  onStageComplete, onToggleFavorite, mapImage,
}) {
  const t = useUi();
  const [selected, setSelected] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const locs = locations || [];
  const location = locs.find((l) => l.id === selected);

  if (location) {
    return (
      <div className="citylife">
        <button className="cl-back" onClick={() => setSelected(null)}>{t.cityMapBack}</button>
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
          gated
        />
      </div>
    );
  }

  if (showSaved) {
    return <SavedPhrases locations={locs} favorites={favorites} langName={langName} onBack={() => setShowSaved(false)} />;
  }

  const { done, total } = cityLifeProgress(locs, routeDone);
  const allDone = total > 0 && done === total;
  const nextLoc = firstIncompleteLocation(locs, routeDone);
  const favCount = locs.reduce((n, l) => n + l.stages.filter((s) => favorites.has(s.id)).length, 0);

  return (
    <div className="citylife">
      <FlagSwitcher journey={journey} onSelect={onJourneySelect} available={CITYLIFE_AVAILABLE} />
      <div className="cl-header">
        <span className="cl-header-icon">🏙️</span>
        <div>
          <div className="cl-header-title">{t.cityLifeTitle}</div>
          <div className="cl-header-sub">{t.cityLifeSub}</div>
        </div>
      </div>

      {locs.length ? (
        <>
          <CityLifeMap locations={locs} routeDone={routeDone} perfect={perfect} onSelect={setSelected} mapImage={mapImage} />

          {/* Aggregate progress */}
          <div className="cl-progress">
            <span className="cl-progress-text">{t.placesExplored(done, total)}</span>
            <div className="cl-progress-bar" aria-hidden="true">
              <div className="cl-progress-fill" style={{ width: `${(done / total) * 100}%` }} />
            </div>
          </div>

          {/* Direction + saved-phrase entry */}
          <div className="cl-actions">
            <button
              className={`cl-next${allDone ? ' cl-next--done' : ''}`}
              disabled={allDone}
              onClick={() => nextLoc && setSelected(nextLoc.id)}
            >
              {allDone ? t.cityExplored : t.clNext(nextLoc.name)}
            </button>
            {favCount > 0 && (
              <button className="cl-saved-btn" onClick={() => setShowSaved(true)}>{t.savedPhrasesBtn(favCount)}</button>
            )}
          </div>

          {/* Collectible strip — one chip per place, gold when mastered */}
          <div className="cl-collect" aria-label={t.placesCollectedAria}>
            {locs.map((l) => {
              const isDone = locationDone(l, routeDone);
              const isGold = isDone && locationMastered(l, perfect);
              return (
                <span
                  key={l.id}
                  className={`cl-chip${isDone ? ' cl-chip--done' : ''}${isGold ? ' cl-chip--gold' : ''}`}
                  style={{ '--accent': l.accent }}
                  title={`${l.name}${isGold ? t.masteredSuffix : isDone ? t.exploredSuffix : ''}`}
                >
                  {l.icon}
                </span>
              );
            })}
          </div>
        </>
      ) : (
        <div className="cl-coming-soon">{t.cityLifeComingSoon}</div>
      )}
    </div>
  );
}
