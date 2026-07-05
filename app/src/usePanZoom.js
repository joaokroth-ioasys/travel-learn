import { useEffect, useRef, useState } from 'react';
import { parseVB } from './mapUtil';

// ── Drag-to-pan + wheel/pinch zoom (only for maps with `pannable`) ────────────

// Clamp [x,y,w,h] to map.panBounds: cap zoom (aspect kept from viewBox), then keep
// the view inside the bounds — centring on any axis where the view is larger.
function clampView(map, [x, y, vw, vh]) {
  const base = parseVB(map.viewBox);
  const aspect = base[3] / base[2];
  const [bx, by, bw, bh] = map.panBounds || [x, y, vw, vh];
  const maxS = Math.min(map.maxViewSize || Infinity, bw, bh / aspect);
  vw = Math.min(Math.max(vw, map.minViewSize || 1), maxS);
  vh = vw * aspect;
  const ax = (v, min, size, span) =>
    size >= span ? min + (span - size) / 2 : Math.min(Math.max(v, min), min + span - size);
  return [ax(x, bx, vw, bw), ax(y, by, vh, bh), vw, vh];
}

// Zoom by `factor` about the fractional point (px,py ∈ 0..1) of the svg, keeping
// the world coord under that point fixed.
function zoomView(map, prev, factor, px, py) {
  const [x, y, vw, vh] = prev;
  const wx = x + px * vw, wy = y + py * vh;
  return clampView(map, [wx - px * vw * factor, wy - py * vh * factor, vw * factor, vh * factor]);
}

export default function usePanZoom(map, journeyId) {
  const enabled = Boolean(map.pannable);
  const svgRef = useRef(null);
  const [view, setView] = useState(null);   // [x,y,w,h] or null → map.viewBox
  const ptrs = useRef(new Map());           // pointerId → {x,y,sx,sy} (px)
  const pinch = useRef(null);               // {dist,mx,my} (px) of last 2-finger frame
  const moved = useRef(false);              // true once pointer has dragged past tap threshold

  // Re-frame on journey switch (MapScreen persists; only the <svg key> remounts).
  useEffect(() => { setView(null); }, [journeyId]);

  // Wheel zoom needs a non-passive listener to preventDefault (React's is passive).
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !enabled) return undefined;
    const onWheel = (e) => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      setView((prev) => zoomView(map, prev || parseVB(map.viewBox), Math.exp(e.deltaY * 0.001), px, py));
    };
    svg.addEventListener('wheel', onWheel, { passive: false });
    return () => svg.removeEventListener('wheel', onWheel);
  }, [enabled, map]);

  // Zoom about the map centre (used by the on-screen +/- buttons).
  const zoom = (factor) =>
    setView((prev) => zoomView(map, prev || parseVB(map.viewBox), factor, 0.5, 0.5));

  if (!enabled) return { svgRef, vbStr: map.viewBox, panProps: {}, zoom: null };

  const pinchState = () => {
    const [a, b] = [...ptrs.current.values()];
    return { dist: Math.hypot(b.x - a.x, b.y - a.y) || 1, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  };
  // Shift the view by a screen-space delta (px), converted to svg units.
  const panBy = (dxPx, dyPx) => setView((prev) => {
    const cur = prev || parseVB(map.viewBox);
    const f = cur[2] / svgRef.current.getBoundingClientRect().width;
    return clampView(map, [cur[0] - dxPx * f, cur[1] - dyPx * f, cur[2], cur[3]]);
  });

  const onPointerDown = (e) => {
    // Capture is deferred until a real drag/pinch starts — capturing on a plain
    // tap redirects the synthetic click to the <svg>, so the dot's onClick never
    // fires (this is why pannable-map dots didn't navigate).
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY });
    if (ptrs.current.size === 1) moved.current = false;
    if (ptrs.current.size === 2) {
      pinch.current = pinchState(); moved.current = true;
      for (const id of ptrs.current.keys()) e.currentTarget.setPointerCapture(id);
    }
  };
  const onPointerMove = (e) => {
    if (!ptrs.current.has(e.pointerId)) return;
    const prevPt = ptrs.current.get(e.pointerId);
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: prevPt.sx, sy: prevPt.sy });
    if (ptrs.current.size >= 2) {
      const p = pinchState(), last = pinch.current;
      if (last) setView((prev) => {
        const cur = prev || parseVB(map.viewBox);
        const r = svgRef.current.getBoundingClientRect();
        const z = zoomView(map, cur, last.dist / p.dist, (p.mx - r.left) / r.width, (p.my - r.top) / r.height);
        const f = z[2] / r.width;   // pan by midpoint drift
        return clampView(map, [z[0] - (p.mx - last.mx) * f, z[1] - (p.my - last.my) * f, z[2], z[3]]);
      });
      pinch.current = p;
      moved.current = true;
      return;
    }
    if (!moved.current) {
      if (Math.hypot(e.clientX - prevPt.sx, e.clientY - prevPt.sy) < 5) return;
      moved.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);   // capture now that it's a drag
    }
    panBy(e.clientX - prevPt.x, e.clientY - prevPt.y);
  };
  const end = (e) => {
    ptrs.current.delete(e.pointerId);
    if (ptrs.current.size < 2) pinch.current = null;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* already released */ }
  };

  return {
    svgRef,
    vbStr: view ? view.join(' ') : map.viewBox,
    panProps: { onPointerDown, onPointerMove, onPointerUp: end, onPointerCancel: end, onPointerLeave: end },
    zoom,
  };
}
