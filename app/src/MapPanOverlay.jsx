import { useEffect, useRef, useState } from 'react';
import { getJourney } from './journeys';
import MapSourceLayers from './MapSourceLayers';
import {
  cameraFor, lerpCamera, cameraToTransform,
  finalToSource, parseTransform, easeInOutCubic,
} from './journeys/camera';
import './MapPanOverlay.css';

const DURATION = 700;   // pan-zoom length (ms)
const FADE_OUT = 120;   // crossfade to the real MapScreen at the end (ms)

// City + link markers, converted from each journey's FINAL coords into the shared
// SOURCE space so they travel under the camera.
function sourceMarkers(map) {
  const t = parseTransform(map.transform);
  const cities = (map.cities || []).map((c) => ({ ...finalToSource(c, t), name: c.name, color: c.accentColor }));
  const links = (map.links || []).map((l) => ({ ...finalToSource(l, t), name: l.label, color: l.accentColor }));
  return [...cities, ...links];
}

function Marker({ m }) {
  return (
    <g>
      <circle cx={m.x} cy={m.y} r="8" fill={m.color} stroke="#fff" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <text x={m.x} y={m.y + 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="#5a4632">{m.name}</text>
    </g>
  );
}

// Plays a continuous camera pan-zoom from journey `from` to `to` (same source
// basis), then crossfades into the real destination MapScreen mounted underneath.
export default function MapPanOverlay({ from, to, onDone }) {
  const fromMap = getJourney(from).map;
  const toMap = getJourney(to).map;
  const camFrom = cameraFor(fromMap);
  const camTo = cameraFor(toMap);
  const fromMarks = sourceMarkers(fromMap);
  const toMarks = sourceMarkers(toMap);

  const [k, setK] = useState(0);        // eased progress 0..1
  const [fading, setFading] = useState(false);
  const rafRef = useRef(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setK(1);
      setFading(true);
      setTimeout(() => onDone?.(), FADE_OUT);
    };

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { finish(); return undefined; }

    let start;
    const step = (now) => {
      if (start === undefined) start = now;
      const p = Math.min(1, (now - start) / DURATION);
      setK(easeInOutCubic(p));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else finish();
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [from, to, onDone]);

  const transform = cameraToTransform(lerpCamera(camFrom, camTo, k));

  return (
    <div className={`map-pan-overlay${fading ? ' map-pan-overlay--out' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 700 700" className="map-pan-svg" xmlns="http://www.w3.org/2000/svg">
        {/* opaque parchment backdrop hides the settled destination underneath */}
        <rect x="0" y="0" width="700" height="700" fill="#f0eadc" />
        <MapSourceLayers map={fromMap} transform={transform} tintOpacity={1 - 0.65 * k} />
        <MapSourceLayers map={toMap} transform={transform} tintOpacity={0.35 + 0.65 * k} />
        <g transform={transform}>
          <g opacity={1 - k}>{fromMarks.map((m, i) => <Marker key={`f${i}`} m={m} />)}</g>
          <g opacity={k}>{toMarks.map((m, i) => <Marker key={`t${i}`} m={m} />)}</g>
        </g>
      </svg>
    </div>
  );
}
