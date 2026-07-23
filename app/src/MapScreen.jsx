import { useRef } from 'react';
import FlagSwitcher from './FlagSwitcher';
import MapPanOverlay from './MapPanOverlay';
import usePanZoom from './usePanZoom';
import {
  buildMapCities, getCityLessonCounts, getTotalCounts, getCityStatus,
  getCityStarState, getCityAvgStars, countryFillPath,
} from './mapUtil';
import { useUi } from './ui';
import './MapScreen.css';

// ── Helpers ──────────────────────────────────────────────────────────────────

// Geographic anchor per journey (screen axes: x→east, y→south). France sits
// south-west, Germany north-east. The switch reads like grabbing the map and
// dragging it to the target: to reach Germany (NE) you pull the map down-left,
// so fr→de the content slides down-left ('sw'); de→fr it slides up-right ('ne').
const JOURNEY_POS = { f2: [0, 1], d2: [1, 0] };
// Shared-basis journeys are animated by the pan overlay, so the underlying svg must NOT
// also run a CSS slide — otherwise the class flips back on (when pan clears) and the drag
// keyframe replays as a "shake" at the end. 'none' has no CSS rule.
const SHARED_BASIS = new Set(['f2', 'd2', 'c2', 'j2']);
function enterDirection(from, to) {
  if (SHARED_BASIS.has(from) && SHARED_BASIS.has(to)) return 'none';
  const a = JOURNEY_POS[from], b = JOURNEY_POS[to];
  if (!a || !b) return 'fade';
  const dx = b[0] - a[0];
  if (dx > 0) return 'sw';   // dragging toward an eastern map → content pulled down-left
  if (dx < 0) return 'ne';   // dragging toward a western map → content pulled up-right
  return 'fade';             // same side → plain cross-fade
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MapScreen({
  map, content, labels, journeyId = 'd2',
  onCitySelect, onJourneySelect, completedLessons,
  stars = {}, xp = 0, streak = { count: 0, lastDate: null }, streakAtRisk = false,
  pan = null, onPanDone,
}) {
  const t = useUi();
  // Direction of the journey switch, computed in the SAME render that changes the
  // <svg key> (so the entrance animation matches the move). Refs persist across
  // unrelated re-renders, keeping the class stable so the animation doesn't replay.
  const prevJourney = useRef(journeyId);
  const enterDir = useRef('fade');
  if (prevJourney.current !== journeyId) {
    enterDir.current = enterDirection(prevJourney.current, journeyId);
    prevJourney.current = journeyId;
  }

  const { svgRef, vbStr, panProps, zoom } = usePanZoom(map, journeyId);

  const cities = buildMapCities(map.cities, content);
  const { done: totalDone, total: grandTotal } = getTotalCounts(cities, completedLessons);
  const progressPct = grandTotal > 0 ? (totalDone / grandTotal) * 100 : 0;
  const level = Math.floor(xp / 200) + 1;

  // Path gating status per city ('done' | 'current' | 'locked' | 'open').
  const statusOf = Object.fromEntries(
    cities.map((c) => [c.id, getCityStatus(cities, c, completedLessons)]),
  );
  const currentCity = cities.find((c) => statusOf[c.id] === 'current');
  const allComplete = grandTotal > 0 && totalDone === grandTotal;

  // Journey path – city positions in story order.
  const routeCities = cities
    .filter((c) => !c.preview)   // preview dots (e.g. Argentina) aren't on the route
    .sort((a, b) => a.step - b.step);
  const journeyPoints = routeCities.map((c) => `${c.x},${c.y}`).join(' ');
  // Solid "travelled" overlay: the prefix up to and including the current stop.
  const currentIdx = routeCities.findIndex((c) => statusOf[c.id] === 'current');
  const traveled = currentIdx === -1 ? routeCities : routeCities.slice(0, currentIdx + 1);
  const traveledPoints = traveled.map((c) => `${c.x},${c.y}`).join(' ');

  const [bgX, bgY, bgW, bgH] = map.viewBox.split(/\s+/).map(Number);
  const markersOnly = map.markersOnly;  // wo: plain markers — no country label / lesson badge
  const labelScale = map.labelScale ?? 1; // world-scale maps set >1 to keep pills readable
  // cityScale keeps on-screen dot/name size at the de reference (r=8 @ 700-wide viewBox).
  // For the pannable markersOnly (wo) map it tracks the live view width, so dots/names scale
  // with zoom and stay a constant, de-matched size; other maps use their fixed cityScale.
  const viewW = Number(vbStr.split(/\s+/)[2]) || bgW;
  const cityScale = markersOnly ? viewW / 700 : (map.cityScale ?? 1);
  const noPaint = map.noPaint; // borders-only view: skip sea/background area fills
  // Land fills are configurable per map (defaults keep de/fr unchanged):
  //   landFill = all non-main land (background paper) ; mainFill = the focused country.
  const landFill = map.landFill || '#ddd8c8';
  const mainFill = map.mainFill || '#e8dcc8';
  // Main-country fill: explicit `countryFill` path wins (lets a borders-only view
  // still paint just its country); otherwise the outer ring of mainPath, unless noPaint.
  const countryFillD = map.countryFill || (noPaint ? null : countryFillPath(map));

  return (
    <div className="map-screen">
      <div className="map-header-stats">
        <span className={`streak-badge${streakAtRisk ? ' streak-badge--at-risk' : ''}`}>
          {streak.count > 0 ? `🔥 ${streak.count}` : ''}
          {streakAtRisk && <span className="streak-nudge">keep it alive today!</span>}
        </span>
        <span className="xp-badge">Lv.{level} · {xp} XP</span>
      </div>
      <h1 className="map-title">{labels.title}</h1>

      <div className="map-container">
        <FlagSwitcher journey={journeyId} onSelect={onJourneySelect} />
        {/* key forces a fresh node on journey change so the slide replays. When a
            camera pan overlay is handling the switch, suppress the CSS slide so the
            overlay owns the motion and the settled map waits underneath. */}
        <svg
          key={journeyId}
          ref={svgRef}
          className={`map-svg${pan ? '' : ` map-svg--${enterDir.current}`}${map.pannable ? ' map-svg--pannable' : ''}`}
          viewBox={vbStr}
          xmlns="http://www.w3.org/2000/svg"
          aria-label={t.journeyMapAria}
          {...panProps}
        >
          {/* ── Background ── */}
          {!noPaint && <rect x={bgX} y={bgY} width={bgW} height={bgH} fill={landFill} />}

          {/* ── Seas ── */}
          {/* seaPath: a single final-space path (computed to follow the border coastline,
              evenodd so islands read as holes). Falls back to polygon seas otherwise. */}
          {!noPaint && map.seaPath && (
            <path d={map.seaPath} fill="#a8cfe0" stroke="#5e98b8" strokeWidth="0.8" fillRule="evenodd" />
          )}
          {!noPaint && !map.seaPath && map.seas?.map((points, i) => (
            <polygon key={i} points={points} fill="#a8cfe0" stroke="#5e98b8" strokeWidth="0.8" />
          ))}

          {/* ── Islands as land (over the sea) ── */}
          {!noPaint && (
            <g transform={map.transform}>
              {map.landIslands?.map((d, i) => (
                <path key={i} d={d} fill={landFill} stroke="none" />
              ))}
            </g>
          )}

          {/* ── Main-country islands (e.g. Corsica) painted as France over the sea ── */}
          {/* Final-space (like seaPath), so no transform group. */}
          {!noPaint && map.mainFillIslands?.map((d, i) => (
            <path key={i} d={d} fill={mainFill} stroke="none" />
          ))}

          {/* ── Neighbour-country name labels ── */}
          {map.neighborLabels?.map((c) => (
            <text
              key={c.name}
              x={c.x} y={c.y}
              textAnchor="middle"
              fontSize={c.size}
              fontWeight="600"
              fontStyle="italic"
              fill="#8a7a60"
              opacity="0.6"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >{c.name}</text>
          ))}

          {/* ── Outer borders between neighbouring countries ── */}
          <g
            transform={map.transform}
            fill="none"
            stroke="#a09070"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            {map.outerPaths?.map((d, i) => (
              <path key={i} d={d} vectorEffect="non-scaling-stroke" />
            ))}
          </g>

          {/* ── Main-country fill ── */}
          {countryFillD && (
            <g transform={map.transform}>
              <path className="germany-fill" d={countryFillD} fill={mainFill} stroke="none" />
            </g>
          )}

          {/* ── State border lines (internal, thin) ── */}
          <g
            className="state-borders"
            transform={map.transform}
            fill="none"
            stroke="#a09070"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            {map.statePaths?.map((d, i) => (
              <path key={i} d={d} vectorEffect="non-scaling-stroke" />
            ))}
          </g>

          {/* ── Country outer border ── */}
          <g transform={map.transform}>
            <path
              d={map.mainPath}
              fill="none"
              stroke="#8a7a60"
              strokeWidth="1.5"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>

          {/* ── Journey path (animated dashed polyline — the full, faint route) ── */}
          <polyline
            className="journey-path"
            points={journeyPoints}
            fill="none"
            stroke="#8a7a60"
            strokeWidth={0.5}
            strokeDasharray="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Solid overlay for the stretch already travelled (up to the current stop). */}
          {traveled.length > 1 && (
            <polyline
              className="journey-path--done"
              points={traveledPoints}
              fill="none"
              stroke="#e9a23b"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* ── City markers ── */}
          {cities.map((city) => {
            const { done, total } = getCityLessonCounts(city, completedLessons);
            const allDone    = total > 0 && done === total;
            const hasLessons = total > 0;
            const isAbroad   = Boolean(city.country);
            const starState  = getCityStarState(city, stars);
            const avgStars   = getCityAvgStars(city, stars);
            const isGold     = starState === 'gold';
            const isStarted  = starState === 'started';
            const status     = statusOf[city.id];
            const isLocked   = status === 'locked';
            const isCurrent  = status === 'current';
            // Abroad preview dots (e.g. Argentina) stay off the numbered route, but
            // once they have content (lessons merged in) their page is reachable.
            // Locked stops (predecessor not finished) aren't clickable yet.
            const clickable  = (!city.preview || hasLessons) && !isLocked;

            return (
              <g
                key={city.id}
                className={`city-group${isAbroad ? ' city-abroad' : ''}${isLocked ? ' city-group--locked' : ''}${isCurrent ? ' city-group--current' : ''}`}
                style={{ '--accent': city.accentColor }}
                transform={cityScale === 1 ? undefined
                  : `translate(${city.x} ${city.y}) scale(${cityScale}) translate(${-city.x} ${-city.y})`}
                onClick={() => clickable && onCitySelect(city.id)}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
                aria-label={`${city.name}${city.country ? ` (${city.country})` : ''}${city.preview ? '' : `, step ${city.step}`}${isLocked ? ', locked' : ''}${hasLessons ? `, ${done} of ${total} lessons completed` : ''}`}
                onKeyDown={(e) => e.key === 'Enter' && clickable && onCitySelect(city.id)}
              >
                {/* Pulsing glow ring — only the current stop pulses, to point the way */}
                {isCurrent && (
                  <circle
                    className="city-glow"
                    cx={city.x}
                    cy={city.y}
                    r={10}
                    fill="none"
                    stroke={city.accentColor}
                    strokeWidth="2"
                  />
                )}

                {/* Progress ring for started cities */}
                {isStarted && !isGold && (
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="11"
                    fill="none"
                    stroke="#f4c430"
                    strokeWidth="2.5"
                    strokeDasharray="5 3"
                    opacity="0.85"
                  />
                )}

                {/* Main dot */}
                <circle
                  className={`city-dot${isGold ? ' city-dot--gold' : ''}`}
                  cx={city.x}
                  cy={city.y}
                  r={8}
                  fill={city.accentColor}
                  stroke="#fff"
                  strokeWidth="2"
                  opacity={isAbroad ? 0.75 : 1}
                />

                {/* Completion check */}
                {allDone && (
                  <text
                    x={city.x}
                    y={city.y + 4}
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="900"
                    fill="#fff"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    ✓
                  </text>
                )}

                {/* Passport stamp overlay for all-lessons-done cities */}
                {allDone && (
                  <text
                    x={city.x}
                    y={city.y + 63}
                    textAnchor="middle"
                    fontSize="10"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    🛂
                  </text>
                )}

                {/* Step number badge (route cities only; preview dots have no step).
                    Locked stops show a 🔒 in the same slot instead of the number. */}
                {!city.preview && (
                  <>
                    <circle
                      cx={city.x + 10}
                      cy={city.y - 10}
                      r="7"
                      fill="#fff"
                      stroke={isLocked ? '#9a9285' : city.accentColor}
                      strokeWidth="1.5"
                    />
                    <text
                      x={city.x + 10}
                      y={city.y - 10 + 4}
                      textAnchor="middle"
                      fontSize={isLocked ? 7 : 8}
                      fontWeight="800"
                      fill={city.accentColor}
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {isLocked ? '🔒' : city.step}
                    </text>
                  </>
                )}

                {/* Label cluster (name pill + lesson badge + stars). Flips above the
                    dot when labelAbove is set, to avoid colliding with a close
                    neighbour below (e.g. Valparaíso sits just above Santiago). */}
                <g transform={city.labelAbove ? `translate(0, ${-54 * labelScale})` : undefined}>
                {/* City label pill */}
                <rect
                  x={city.x - 28 * labelScale}
                  y={city.y + 13 * labelScale}
                  width={56 * labelScale}
                  height={15 * labelScale}
                  rx={7 * labelScale}
                  fill="rgba(255,255,255,0.9)"
                  stroke="rgba(184,168,136,0.6)"
                  strokeWidth={0.8 * labelScale}
                />
                <text
                  x={city.x}
                  y={city.y + 24 * labelScale}
                  textAnchor="middle"
                  fontSize={8.5 * labelScale}
                  fontWeight="700"
                  fill="#3a2d20"
                  letterSpacing={0.4 * labelScale}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {city.name}
                </text>

                {/* Country label for abroad cities */}
                {isAbroad && !markersOnly && (
                  <text
                    x={city.x}
                    y={city.y + 38 * labelScale}
                    textAnchor="middle"
                    fontSize={7 * labelScale}
                    fontStyle="italic"
                    fill="#7a6a50"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    ({city.country})
                  </text>
                )}

                {/* Lesson progress badge, only shown when city has content */}
                {hasLessons && !markersOnly && (
                  <>
                    <rect
                      x={city.x - 14 * labelScale}
                      y={city.y + 30 * labelScale}
                      width={28 * labelScale}
                      height={12 * labelScale}
                      rx={6 * labelScale}
                      fill={city.accentColor}
                      opacity="0.92"
                    />
                    <text
                      x={city.x}
                      y={city.y + 39 * labelScale}
                      textAnchor="middle"
                      fontSize={7.5 * labelScale}
                      fontWeight="700"
                      fill="#fff"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      {done}/{total}
                    </text>

                    {/* Star row, shown only when at least one lesson is rated */}
                    {avgStars > 0 && (
                      <text
                        x={city.x}
                        y={city.y + 52 * labelScale}
                        textAnchor="middle"
                        fontSize={9 * labelScale}
                        fill="#caa820"
                        className="city-stars"
                        style={{ pointerEvents: 'none', userSelect: 'none', letterSpacing: '1px' }}
                      >
                        {'★'.repeat(avgStars)}{'☆'.repeat(3 - avgStars)}
                      </text>
                    )}
                  </>
                )}
                </g>
              </g>
            );
          })}

          {/* ── Journey links (e.g. Paris → French journey) ── */}
          {map.links?.map((link) => (
            <g
              key={link.to}
              className="city-group"
              style={{ cursor: 'pointer' }}
              onClick={() => onJourneySelect(link.to)}
              role="button"
              tabIndex={0}
              aria-label={`${link.label}, ir para a outra jornada`}
              onKeyDown={(e) => e.key === 'Enter' && onJourneySelect(link.to)}
              transform={cityScale === 1 ? undefined
                : `translate(${link.x} ${link.y}) scale(${cityScale}) translate(${-link.x} ${-link.y})`}
            >
              <circle cx={link.x} cy={link.y} r="7" fill={link.accentColor} stroke="#fff" strokeWidth="2" />
              <rect x={link.x - 28} y={link.y + 13} width="56" height="15" rx="7" fill="rgba(255,255,255,0.9)" stroke="rgba(184,168,136,0.6)" strokeWidth="0.8" />
              <text
                x={link.x} y={link.y + 24}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="700"
                fill="#3a2d20"
                letterSpacing="0.4"
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >{link.label}</text>
            </g>
          ))}

        </svg>

        {/* ── Zoom controls (pannable Monde map only) ── */}
        {map.pannable && (
          <div className="map-zoom-controls">
            <button type="button" aria-label="Aproximar" onClick={() => zoom(0.7)}>+</button>
            <button type="button" aria-label="Afastar" onClick={() => zoom(1 / 0.7)}>−</button>
          </div>
        )}

        {/* ── Cinematic camera pan-zoom (fr↔de), over the settled destination ── */}
        {pan && (
          <MapPanOverlay key={`${pan.from}-${pan.to}`} from={pan.from} to={pan.to} onDone={onPanDone} />
        )}

        {/* ── Continue CTA — points the player at their current stop ── */}
        {(currentCity || allComplete) && (
          <button
            type="button"
            className={`map-continue${allComplete ? ' map-continue--done' : ''}`}
            disabled={allComplete}
            onClick={() => currentCity && onCitySelect(currentCity.id)}
          >
            {allComplete ? t.journeyComplete : t.nextCity(currentCity.name)}
          </button>
        )}

        {/* ── Bottom progress strip ── */}
        <div className="map-progress">
          <span className="map-progress-text">
            {t.lessonsCompleted(totalDone, grandTotal)}
          </span>
          <div className="map-progress-bar-wrap" aria-hidden="true">
            <div
              className="map-progress-bar-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
