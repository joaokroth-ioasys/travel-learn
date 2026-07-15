import { useEffect, useMemo, useRef, useState } from 'react';
import { getJourney } from './journeys';
import woMap from './journeys/wo/map';
import { parseVB, lerpVB, countryFillPath } from './mapUtil';
import './MapPanOverlay.css';

const DURATION = 700;   // pan-zoom length (ms)
const FADE_OUT = 120;   // crossfade to the settled MapScreen at the end (ms)
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Bounding box of both frames — the parchment backdrop that hides the settled
// MapScreen underneath until the reveal (any lerp of the two frames sits inside it).
function unionVB([ax, ay, aw, ah], [bx, by, bw, bh]) {
  const x = Math.min(ax, bx), y = Math.min(ay, by);
  return [x, y, Math.max(ax + aw, bx + bw) - x, Math.max(ay + ah, by + bh) - y];
}

// City / link dots as {x, y, name, color} in raw source coords.
function markers(map) {
  const cities = (map.cities || []).map((c) => ({ x: c.x, y: c.y, name: c.name, color: c.accentColor }));
  const links = (map.links || []).map((l) => ({ x: l.x, y: l.y, name: l.label, color: l.accentColor }));
  return [...cities, ...links];
}

// A dot + name pill, sized to the tight frame via cityScale so it matches
// MapScreen's markers (no size pop at handoff).
function Marker({ m, scale }) {
  return (
    <g transform={`translate(${m.x} ${m.y}) scale(${scale}) translate(${-m.x} ${-m.y})`}>
      <circle cx={m.x} cy={m.y} r="8" fill={m.color} stroke="#fff" strokeWidth="2" />
      <rect
        x={m.x - 28} y={m.y + 13} width="56" height="15" rx="7"
        fill="rgba(255,255,255,0.9)" stroke="rgba(184,168,136,0.6)" strokeWidth="0.8"
      />
      <text x={m.x} y={m.y + 24} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#3a2d20" letterSpacing="0.4">
        {m.name}
      </text>
    </g>
  );
}

// The per-journey focus (highlighted country + région borders + cities) that
// cross-fades over the shared base as the camera pans.
function Focus({ map, opacity }) {
  const fill = countryFillPath(map);   // null for France (no silhouette, same as its screen)
  return (
    <g opacity={opacity}>
      {fill && <path d={fill} fill={map.mainFill || '#e8dcc8'} stroke="none" />}
      <g fill="none" stroke="#a09070" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        {map.statePaths?.map((d, i) => <path key={i} d={d} vectorEffect="non-scaling-stroke" />)}
      </g>
      {markers(map).map((m, i) => <Marker key={i} m={m} scale={map.cityScale ?? 1} />)}
    </g>
  );
}

// Plays a single continuous viewBox pan across ONE shared world base map (wo),
// from journey `from`'s frame to `to`'s, cross-fading only the country focus.
// The settled destination MapScreen sits mounted underneath and is revealed by
// the final fade-out. All three journeys (f2, d2, wo) are identity source-space,
// so markers/paths need no transform — the SVG viewBox does the whole move.
export default function MapPanOverlay({ from, to, onDone }) {
  const fromMap = getJourney(from).map;
  const toMap = getJourney(to).map;
  const vbFrom = parseVB(fromMap.viewBox);
  const vbTo = parseVB(toMap.viewBox);

  const [vb, setVb] = useState(vbFrom);
  const [k, setK] = useState(0);           // eased progress 0..1
  const [fading, setFading] = useState(false);
  const rafRef = useRef(0);
  const doneRef = useRef(false);

  // Static shared base (world land/sea/borders) + backdrop — heavy geometry, so
  // build it once; only the <svg viewBox> and the focus opacities change per frame.
  const base = useMemo(() => {
    const [ux, uy, uw, uh] = unionVB(vbFrom, vbTo);
    const land = woMap.landFill || '#F0EADE';
    return (
      <>
        <rect x={ux} y={uy} width={uw} height={uh} fill={land} />
        {woMap.seaPath && (
          <path d={woMap.seaPath} fill="#a8cfe0" stroke="#5e98b8" strokeWidth="0.8" fillRule="evenodd" />
        )}
        {woMap.landIslands?.map((d, i) => <path key={`l${i}`} d={d} fill={land} stroke="none" />)}
        {/* wo splits its main country (France) out of `land` — paint it, plus each
            endpoint's islands (e.g. Corsica), so the base is the full landmass. */}
        {woMap.countryFill && <path d={woMap.countryFill} fill={land} stroke="none" />}
        {[fromMap, toMap].flatMap((m) => m.mainFillIslands || [])
          .map((d, i) => <path key={`mi${i}`} d={d} fill={land} stroke="none" />)}
        <g fill="none" stroke="#a09070" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
          {woMap.outerPaths?.map((d, i) => <path key={`o${i}`} d={d} vectorEffect="non-scaling-stroke" />)}
        </g>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setK(1);
      setVb(vbTo);
      setFading(true);
      setTimeout(() => onDone?.(), FADE_OUT);
    };

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { finish(); return undefined; }

    let start;
    const step = (now) => {
      if (start === undefined) start = now;
      const p = Math.min(1, (now - start) / DURATION);
      const e = easeInOutCubic(p);
      setK(e);
      setVb(lerpVB(vbFrom, vbTo, e));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else finish();
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, onDone]);

  return (
    <div className={`map-pan-overlay${fading ? ' map-pan-overlay--out' : ''}`} aria-hidden="true">
      <svg viewBox={vb.join(' ')} className="map-pan-svg" xmlns="http://www.w3.org/2000/svg">
        {base}
        <Focus map={fromMap} opacity={1 - k} />
        <Focus map={toMap} opacity={k} />
      </svg>
    </div>
  );
}
