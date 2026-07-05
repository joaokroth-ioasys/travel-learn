// Camera helpers for the physical pan-zoom transition between journeys that share
// a source coordinate space (fr ↔ de, both from borders/eu-borders-4.md).
//
// Each journey draws source-space geometry as `final = source*scale + translate`
// inside <g transform>, then frames it with a per-journey viewBox. A "camera"
// folds the viewBox origin into the transform so any such journey can be drawn
// into ONE fixed display window (0 0 700 700):  display = source*s + t.
// Animating the camera from one journey's pose to another's = a true pan-zoom.

// Pull translate/scale out of an SVG transform string. Missing scale → 1.
export function parseTransform(str = '') {
  const t = /translate\(\s*(-?[\d.]+)[ ,]+(-?[\d.]+)\s*\)/.exec(str);
  const s = /scale\(\s*(-?[\d.]+)(?:[ ,]+(-?[\d.]+))?\s*\)/.exec(str);
  return {
    translateX: t ? +t[1] : 0,
    translateY: t ? +t[2] : 0,
    scaleX: s ? +s[1] : 1,
    scaleY: s ? (s[2] !== undefined ? +s[2] : +s[1]) : 1,
  };
}

// Invert a journey's transform: final (viewBox-space) coords → source coords.
export function finalToSource({ x, y }, t) {
  return { x: (x - t.translateX) / t.scaleX, y: (y - t.translateY) / t.scaleY };
}

// Camera {sx, sy, tx, ty} mapping source coords → a fixed 0 0 700 700 display.
// tx/ty absorb the journey's viewBox origin so the framing is reproduced at 0,0.
export function cameraFor(map) {
  const t = parseTransform(map.transform);
  const [vx, vy] = map.viewBox.trim().split(/\s+/).map(Number);
  return { sx: t.scaleX, sy: t.scaleY, tx: t.translateX - vx, ty: t.translateY - vy };
}

export function lerpCamera(a, b, k) {
  return {
    sx: a.sx + (b.sx - a.sx) * k,
    sy: a.sy + (b.sy - a.sy) * k,
    tx: a.tx + (b.tx - a.tx) * k,
    ty: a.ty + (b.ty - a.ty) * k,
  };
}

export function cameraToTransform(c) {
  return `translate(${c.tx} ${c.ty}) scale(${c.sx} ${c.sy})`;
}

export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
