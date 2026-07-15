#!/usr/bin/env python3
# Build the "Monde" (wo) journey map: the world map from world-map.md, framed on
# France. France is the highlighted country; everything else is neighbour land.
#
# In world-map.md 468 of 470 countries are one closed loop — used directly as land
# (crisp source coastlines). France (#FF2D55) and Germany (#E6D70E) are the only two
# drawn as OPEN région-border networks with no closed outline; outer_boundary assembles
# their silhouette as a smooth vector polygon (planar-graph face traversal, no raster).
# Water = complement of land (the user's model, "água é a região complementar"), a flat
# viewBox rect painted under the land. Raster survives only for the WORLD inspection view.
# Run: python3 build-world.py
import re, os, sys, math
import numpy as np
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'world-map-2.md')

# France/Germany split into outer (national silhouette) + inner (federal-state /
# région) strokes in world-map-2.md. Inner borders are never drawn on the Monde
# journey; only the owning country's own framed journey shows them as statePaths.
FR_OUTER, FR_INNER = '#AB0525', '#F95E7B'
DE_OUTER, DE_INNER = '#BAAE0E', '#F6EB5A'
INNER = {FR_INNER.upper(), DE_INNER.upper()}

W, H = 6642, 2846                 # world-map.md svg size
PAD = 40                          # keep raw border paths intersecting frame+PAD

# Global open oceans + enclosed seas a closed strait cuts off from them. This list
# is VERIFIED leak-free (see borders/world-map-update.md): every seed sits on an
# open-water pixel. Reused by the framed country targets so they never need their
# own hand-picked seeds — North Sea / Baltic / etc. connect to the ocean in the
# raster and colour blue for free.
WORLD_SEEDS = [
    (150, 1400), (6480, 1400),                # Pacific (W / E edges)
    (2650, 820), (2950, 1950),                # N / S Atlantic
    (4650, 1950),                             # Indian Ocean
    (2000, 60),                               # Arctic (top edge)
    (1200, 2780), (4200, 2780),               # Southern Ocean (bottom edge)
    (3360, 770), (3720, 830),                 # Mediterranean W / E (Gibraltar closed)
    (3800, 700),                              # Black Sea
    (4110, 720),                              # Caspian Sea
    (3945, 1150),                             # Red Sea (mid-channel)
]

# Framed country targets: same land pipeline, only the highlighted country, frame,
# centroid, seeds and output journey differ. Add a country by adding an entry.
TARGETS = {
    'france': dict(stroke=FR_OUTER, inner=FR_INNER, frame=(3044, 413, 520, 520),  # centred on France
                   centroid=(3304, 673), out='wo', name='France',
                   mainFill='#F0EADE',   # blend into the other countries (no highlight)
                   # "Le Monde" = the whole world: render every country's land + city
                   # dots (France home + Chile/Argentina abroad), still open on France.
                   worldland=True, panBounds=(0, 0, W, H),
                   minViewSize=150, maxViewSize=H,
                   seeds=[(5, 5), (W - 5, 5), (5, H - 5), (W - 5, H - 5),
                          (3070, 720),   # Bay of Biscay / Atlantic (W of France)
                          (3060, 470),   # Atlantic NW
                          (3360, 380),   # southern North Sea
                          (3400, 950), (3230, 1000), (3520, 980),  # Mediterranean
                          (3560, 360)]), # toward the Baltic
    'germany': dict(stroke=DE_OUTER, inner=DE_INNER, frame=(3346, 482, 200, 200),  # centred on Germany, 2.6x zoom
                    centroid=(3446, 582), out='d2', name='Germany', mainFill='#e8dcc8',
                    seeds=WORLD_SEEDS),  # reuse the verified global oceans/seas
}

# Modes: no arg → France ('wo'); `germany`/`d2` → Germany ('d2'); `world` → inspection.
#   world  — the entire map, uniform land/sea, no highlight — an inspection view
#            to eyeball where land detection fails. Reversible: rerun w/o 'world'.
if 'world' in sys.argv:
    MODE = 'world'
    TARGET = None
elif 'germany' in sys.argv or 'd2' in sys.argv:
    MODE = 'country'
    TARGET = TARGETS['germany']
else:
    MODE = 'country'
    TARGET = TARGETS['france']

if MODE == 'world':
    VX, VY, VW, VH = 0, 0, W, H   # whole world
    EPS = 1.2                     # coarser simplification → smaller map.js
else:
    VX, VY, VW, VH = TARGET['frame']
    EPS = 0.6

OUT = os.path.join(HERE, '..', 'app', 'src', 'journeys',
                   'wo' if MODE == 'world' else TARGET['out'], 'map.js')

txt = open(SRC).read()
paths = re.findall(r'<path d="([^"]+)"[^>]*stroke="([^"]+)"', txt)

# ── path helpers (M/L/H/V/Z only — validated, no arcs in this file) ──
def subpaths(d):
    toks = re.findall(r'[MLHVZ]|-?\d+\.?\d*', d)
    cx = cy = 0.0; cmd = None; out = []; sub = []; i = 0
    while i < len(toks):
        t = toks[i]
        if t in 'MLHVZ':
            cmd = t; i += 1
            if cmd in ('M', 'Z') and sub: out.append(sub); sub = []
            if cmd == 'Z': continue
        if cmd in ('M', 'L'): cx, cy = float(toks[i]), float(toks[i + 1]); i += 2; sub.append((cx, cy))
        elif cmd == 'H': cx = float(toks[i]); i += 1; sub.append((cx, cy))
        elif cmd == 'V': cy = float(toks[i]); i += 1; sub.append((cx, cy))
    if sub: out.append(sub)
    return out

def path_bbox(d):
    xs = []; ys = []
    for sub in subpaths(d):
        for x, y in sub: xs.append(x); ys.append(y)
    return min(xs), min(ys), max(xs), max(ys)

def in_frame(d):
    x0, y0, x1, y1 = path_bbox(d)
    return not (x1 < VX - PAD or x0 > VX + VW + PAD or y1 < VY - PAD or y0 > VY + VH + PAD)

def outer_boundary(path_ds):
    # Smooth country silhouette straight from the VECTOR région-border network — no
    # raster. The country (e.g. #E6D70E) is an OPEN network of shared région edges, so
    # no single subpath is the outline. Treat it as a planar graph and extract the
    # perimeter by half-edge face traversal, returning the largest face as 'M…Z'.
    # ponytail: assumes ONE connected mainland, no islands/holes. Disconnected bits
    #   (Corsica for France, a stray dangling edge) fall on smaller faces and are
    #   dropped — fine for the highlighted-country fill; revisit if a target has isles.
    idx = {}; V = []
    def vid(p):
        k = (round(p[0] * 2) / 2, round(p[1] * 2) / 2)   # snap 0.5px → merge shared endpoints
        if k not in idx: idx[k] = len(V); V.append(k)
        return idx[k]
    edges = set(); adj = {}
    for d in path_ds:
        for sub in subpaths(d):
            ids = [vid(p) for p in sub]
            for a, b in zip(ids, ids[1:]):
                if a != b: edges.add((min(a, b), max(a, b)))
    for i in range(len(V)): adj[i] = []
    for a, b in edges: adj[a].append(b); adj[b].append(a)
    def ang(u, v): return math.atan2(V[v][1] - V[u][1], V[v][0] - V[u][0])
    for i in adj: adj[i].sort(key=lambda j: ang(i, j))
    # next half-edge in a face: arriving at v from u, turn to the neighbour just
    # clockwise of the reverse direction (the entry before u in the CCW-sorted list).
    used = set(); faces = []
    for a, b in edges:
        for u, v in ((a, b), (b, a)):
            if (u, v) in used: continue
            face = []; cu, cv = u, v
            while (cu, cv) not in used:
                used.add((cu, cv)); face.append(cu)
                nb = adj[cv]; w = nb[(nb.index(cu) - 1) % len(nb)]
                cu, cv = cv, w
            faces.append(face)
    def area(f):
        s = 0
        for i in range(len(f)):
            x1, y1 = V[f[i]]; x2, y2 = V[f[(i + 1) % len(f)]]; s += x1 * y2 - x2 * y1
        return abs(s) / 2
    outer = max(faces, key=area)   # largest face = the enclosing perimeter
    return 'M' + ' '.join('%.1f %.1f' % V[i] for i in outer) + 'Z'

# ── mask → vector (borrowed from build-japan-sea.py) ──
def erode(a):
    e = a.copy()
    e[1:, :] &= a[:-1, :]; e[:-1, :] &= a[1:, :]; e[:, 1:] &= a[:, :-1]; e[:, :-1] &= a[:, 1:]
    return e

def dilate(a):
    d = a.copy()
    d[1:, :] |= a[:-1, :]; d[:-1, :] |= a[1:, :]; d[:, 1:] |= a[:, :-1]; d[:, :-1] |= a[:, 1:]
    return d

def mask_to_loops(mask):
    m = np.zeros((mask.shape[0] + 2, mask.shape[1] + 2), bool); m[1:-1, 1:-1] = mask
    nxt = {}; ys, xs = np.where(m); fill = set(zip(xs.tolist(), ys.tolist()))
    def f(x, y): return (x, y) in fill
    for (x, y) in fill:
        if not f(x, y - 1): nxt[(x, y)] = (x + 1, y)
        if not f(x + 1, y): nxt[(x + 1, y)] = (x + 1, y + 1)
        if not f(x, y + 1): nxt[(x + 1, y + 1)] = (x, y + 1)
        if not f(x - 1, y): nxt[(x, y + 1)] = (x, y)
    loops = []; used = set()
    for s in list(nxt.keys()):
        if s in used: continue
        loop = []; p = s
        while p in nxt and p not in used: used.add(p); loop.append(p); p = nxt[p]
        if len(loop) >= 4: loops.append(loop)
    return loops

def rdp(points, eps):
    if len(points) < 3: return points
    keep = [False] * len(points); keep[0] = keep[-1] = True; st = [(0, len(points) - 1)]
    while st:
        a, b = st.pop(); ax, ay = points[a]; bx, by = points[b]; dmax = 0; idx = -1
        dx, dy = bx - ax, by - ay; nrm = math.hypot(dx, dy) or 1
        for i in range(a + 1, b):
            px, py = points[i]; dd = abs((px - ax) * dy - (py - ay) * dx) / nrm
            if dd > dmax: dmax = dd; idx = i
        if dmax > eps and idx != -1: keep[idx] = True; st.append((a, idx)); st.append((idx, b))
    return [points[i] for i in range(len(points)) if keep[i]]

def loops_to_d(loops, offset=(1, 1), minlen=8):
    ox, oy = offset; parts = []
    for loop in loops:
        if len(loop) < minlen: continue
        pts = rdp([(x - ox, y - oy) for (x, y) in loop], EPS)
        if len(pts) < 3: continue
        parts.append('M' + ' '.join(f'{x:.1f} {y:.1f}' for x, y in pts) + 'Z')
    return ''.join(parts)

def rasterize(path_ds, width=2):
    img = Image.new('L', (W, H), 0); dr = ImageDraw.Draw(img)
    for d in path_ds:
        for sub in subpaths(d):
            if len(sub) > 1: dr.line(sub, fill=255, width=width)
    return img

def wall_mask(path_ds, width=2, close=2):
    # Boolean wall mask, morphologically closed so diagonal 1px lines and small
    # (<= `close` px) coastline gaps become watertight for a 4-connected flood.
    m = np.array(rasterize(path_ds, width)) > 0
    for _ in range(close): m = dilate(m)
    return m

def flood_sea(wall, seeds):
    # Flood the sea over a boolean wall mask (walls block; sea = reachable 0-cells).
    # .copy(): Image.fromarray() is read-only (non-writable buffer) → floodfill no-ops.
    img = Image.fromarray(np.where(wall, 255, 0).astype('uint8')).copy()
    px = img.load()
    for sx, sy in seeds:
        if 0 <= sx < W and 0 <= sy < H and px[sx, sy] == 0:
            ImageDraw.floodfill(img, (sx, sy), 128, thresh=0)
    return np.array(img) == 128

def crop_frame(mask):
    out = np.zeros_like(mask)
    out[VY:VY + VH, VX:VX + VW] = mask[VY:VY + VH, VX:VX + VW]
    return out

CLOSE = 2   # px: seals diagonal leaks (cause 1) and coastline gaps <= CLOSE (cause 2)

def shrink(mask, n):
    for _ in range(n): mask = erode(mask)
    return mask

# ── LAND: 468 of 470 world-map.md paths are closed source loops — use them directly
#    for crisp coastlines. Only France (#FF2D55) and Germany (#E6D70E) are OPEN région
#    meshes with no closed outline; their silhouette is assembled by outer_boundary
#    (vector, no raster). WORLD mode still rasterises whole-world land (its branch). ──
closed_loops = [d for d, s in paths if d.rstrip().endswith('Z')]
open_meshes  = [(d, s) for d, s in paths if not d.rstrip().endswith('Z')]

def js_arr(items):
    if not items: return '[]'
    return '[\n' + ',\n'.join('  %r' % s for s in items) + ',\n]'

seaRect = 'M%d %d H%d V%d H%d Z' % (VX, VY, VX + VW, VY + VH, VX)

if MODE == 'world':
    # Uniform inspection view: all land as paper, all borders as thin strokes, no
    # highlight. mainPath:'' keeps MapScreen happy (no country fill / outline).
    all_borders = [d for d, _ in paths]
    # Whole-world land: rasterise every border, flood the ocean, land = complement.
    land_wall = wall_mask(all_borders, width=2, close=CLOSE)
    sea = flood_sea(land_wall, WORLD_SEEDS)
    land = shrink(crop_frame(~sea), CLOSE)
    land_d = loops_to_d(mask_to_loops(land), minlen=4)
    out = '''// GENERATED by borders/build-world.py world — do not edit by hand.
// "Monde" WORLD inspection view: the entire world-map.md, uniform land/sea.
// Land is traced from the borders (sea flooded away); water = the complement,
// a flat viewBox rect under the land. No country highlight. Rerun
// `python3 build-world.py` (no arg) to restore the France-framed view.

// Whole world landmass, painted as paper land over the sea.
const land = %r;

// Flat sea rectangle covering the world; land drawn on top, so water is what's left.
const seaPath = %r;

// Every country outline, drawn as thin strokes over the land (to locate regions).
const allBorders = %s;

export default {
  viewBox: '%d %d %d %d',
  cities: [],
  mainPath: '',
  landFill: '#F0EADE',
  seaPath,
  landIslands: [land],
  outerPaths: allBorders,
};
''' % (land_d, seaRect, js_arr(all_borders), VX, VY, VW, VH)
    land_bytes = len(land_d)
    extra = 'borders=%d' % len(all_borders)
else:
    # ── COUNTRY fill: smooth VECTOR silhouette assembled from the raw région network ──
    STROKE = TARGET['stroke']
    NAME = TARGET['name']
    country_raw = [d for d, s in paths if s.replace(' ', '').upper() == STROKE.upper()]
    if not country_raw:
        raise SystemExit('%s path (stroke %s) not found' % (NAME, STROKE))
    # Perimeter straight from the SVG points (no raster) → crisp edge at any zoom.
    country_d = outer_boundary(country_raw)
    # Internal région/state borders (statePaths). Dropped on the Monde/worldland journey
    # (only outer borders there); kept on the country's own framed journey (e.g. Germany).
    region_paths = [] if TARGET.get('worldland') else \
        [d for d, s in paths if s.replace(' ', '').upper() == TARGET['inner'].upper()]

    # Land + borders: whole world when the target opts in (worldland), else in-frame only.
    # Silhouettes for the OTHER open mesh (Germany) keep it from reading as a sea-hole.
    # ponytail: whole-loop land, not frame-clipped — vector-clip to frame if map.js size matters
    # Inner (federal-state) strokes are never neighbour borders or land silhouettes —
    # only the highlight's own framed journey draws them, as statePaths (below).
    def is_inner(s): return s.replace(' ', '').upper() in INNER
    def is_highlight(s): return s.replace(' ', '').upper() == STROKE.upper()
    if TARGET.get('worldland'):
        land_islands = list(closed_loops)
        for d, s in open_meshes:
            if is_highlight(s) or is_inner(s): continue   # highlight silhouette / inner lines
            land_islands.append(outer_boundary([d]))
        neighbour_strokes = [d for d, s in paths
                             if not is_highlight(s) and not is_inner(s)]
        neighbour_strokes.append(country_d)   # no highlight: France draws as a soft neighbour border
        seaRect = 'M0 0 H%d V%d H0 Z' % (W, H)     # water fills the whole world
    else:
        land_islands = [d for d in closed_loops if in_frame(d)]
        for d, s in open_meshes:
            if is_highlight(s) or is_inner(s): continue
            if in_frame(d): land_islands.append(outer_boundary([d]))
        neighbour_strokes = [d for d, s in paths
                             if not is_highlight(s) and not is_inner(s) and in_frame(d)]
    land_bytes = sum(len(d) for d in land_islands)

    # ── City dots (world-source xy). France = home dots via an affine from its
    #    silhouette bbox; Chile/Argentina = abroad previews via colour-outline
    #    raster + shared latitude scale + east-west fraction (same as the cl map). ──
    def _mask(color, width=3):
        ds = [d for d, s in paths if s.replace(' ', '').lower() == color.lower()]
        return np.array(rasterize(ds, width)) > 0

    def _row_x(mask, py, ew):
        h = mask.shape[0]; py = int(round(max(0, min(h - 1, py)))); dr = 0
        cols = np.where(mask[py])[0]
        while cols.size == 0 and dr < 25:          # widen a few rows over thin/island gaps
            dr += 1
            for yy in (py - dr, py + dr):
                if 0 <= yy < h and np.where(mask[yy])[0].size:
                    cols = np.where(mask[yy])[0]; py = yy; break
        if cols.size == 0: return None, py
        return cols.min() + ew * (cols.max() - cols.min()), py

    def _dot(cid, name, accent, x, y, country=None, above=False):
        p = ['id: "%s"' % cid, 'name: "%s"' % name, 'accentColor: "%s"' % accent]
        if country: p.append('country: "%s"' % country)
        p += ['preview: true', 'x: %s' % round(x, 1), 'y: %s' % round(y, 1)]
        if above: p.append('labelAbove: true')
        return '    {' + ', '.join(p) + '}'

    city_dots = ''
    if TARGET.get('worldland'):
        lines = []
        # France — affine from the assembled silhouette bbox to lon/lat extremes.
        fx0, fy0, fx1, fy1 = path_bbox(country_d)
        FLW, FLE, FLN, FLS = -4.8, 8.2, 51.09, 42.33   # Corsen..Alsace, Bray-Dunes..Pyrénées
        def fr_xy(lon, lat):
            return (fx0 + (lon - FLW) / (FLE - FLW) * (fx1 - fx0),
                    fy0 + (FLN - lat) / (FLN - FLS) * (fy1 - fy0))
        for cid, name, acc, lon, lat, above in [
                ('paris', 'Paris', '#0055A4', 2.352, 48.857, False),
                ('strasbourg', 'Strasbourg', '#c0392b', 7.745, 48.583, False),
                ('lyon', 'Lyon', '#d4820a', 4.835, 45.764, False),
                ('nice', 'Nice', '#e8a33d', 7.268, 43.700, False),
                ('marseille', 'Marseille', '#1a6b8a', 5.370, 43.296, True),
                ('toulouse', 'Toulouse', '#e91e8c', 1.444, 43.604, True),
                ('bordeaux', 'Bordeaux', '#6b2d8b', -0.570, 44.841, False),
                ('nantes', 'Nantes', '#2d7a4f', -1.554, 47.218, False),
                ('lille', 'Lille', '#b7430c', 3.057, 50.629, False)]:
            x, y = fr_xy(lon, lat); lines.append(_dot(cid, name, acc, x, y, None, above))

        # Shared latitude→row from Chile's outline extent (a property of the map, not
        # the country — Argentina reuses it, matching the cl map's own convention).
        cl_mask = _mask('#F42906'); cys, _ = np.where(cl_mask)
        CL_YN, CL_YS, CL_LN, CL_LS = cys.min(), cys.max(), -17.5, -55.98
        def lat_y(lat): return CL_YN + (lat - CL_LN) / (CL_LS - CL_LN) * (CL_YS - CL_YN)

        # Chile — ew: 0=Pacific(W)..1=Andes(E); None=Rapa Nui (offshore Pacific marker).
        for cid, name, acc, lat, ew, dx, dy, above in [
                ('santiago', 'Santiago', '#0033A0', -33.45, 0.60, 0, 0, False),
                ('valparaiso', 'Valparaíso', '#D52B1E', -33.05, 0.10, -6, 3, True),
                ('atacama', 'San Pedro de Atacama', '#C8742B', -22.90, 0.75, 0, 0, False),
                ('rapanui', 'Rapa Nui', '#2E8B57', -27.10, None, 0, 0, False),
                ('loslagos', 'Los Lagos', '#2C8C99', -41.30, 0.45, 0, 0, False),
                ('paine', 'Torres del Paine', '#4A6FA5', -51.00, 0.50, 0, 0, False)]:
            py = lat_y(lat)
            if ew is None:                             # Rapa Nui — nudge W into the Pacific
                bx, _p = _row_x(cl_mask, py, 0.0)
                x = (bx if bx is not None else cl_mask.shape[1]) - 130; y = py
            else:
                x, py = _row_x(cl_mask, py, ew); y = py
                if x is None: continue
            lines.append(_dot(cid, name, acc, x + dx, y + dy, 'Chile', above))

        # Argentina — ew: 0=Andes(W)..1=Atlantic(E); None=Ushuaia (Tierra del Fuego tip).
        ar_mask = _mask('#74ACDF'); ays, axs = np.where(ar_mask)
        for cid, name, acc, lat, ew, dx, dy, above in [
                ('buenosaires', 'Buenos Aires', '#75AADB', -34.60, 0.93, 0, 0, False),
                ('iguazu', 'Puerto Iguazú', '#2E8B57', -25.70, 1.00, 4, -4, True),
                ('salta', 'Salta', '#C8742B', -24.78, 0.10, 0, 0, False),
                ('mendoza', 'Mendoza', '#7B1E3A', -32.89, 0.05, -3, 0, True),
                ('bariloche', 'Bariloche', '#2C8C99', -41.13, 0.05, -4, 0, False),
                ('ushuaia', 'Ushuaia', '#4A6FA5', -54.80, None, 0, 0, False)]:
            py = lat_y(lat)
            if ew is None:                             # Ushuaia — south tip, slight SE nudge
                sy = ays.max(); x = axs[ays >= sy - 5].max() + 6; y = sy + 6
            else:
                x, py = _row_x(ar_mask, py, ew); y = py
                if x is None: continue
            lines.append(_dot(cid, name, acc, x + dx, y + dy, 'Argentina', above))

        # Germany — open mesh like France: assemble its silhouette, affine from its bbox.
        de_d = outer_boundary([d for d, s in paths if s.replace(' ', '').upper() == DE_OUTER.upper()])
        gx0, gy0, gx1, gy1 = path_bbox(de_d)
        GLW, GLE, GLN, GLS = 5.87, 15.04, 55.06, 47.27   # Selfkant..Görlitz, Sylt..Alps
        def de_xy(lon, lat):
            return (gx0 + (lon - GLW) / (GLE - GLW) * (gx1 - gx0),
                    gy0 + (GLN - lat) / (GLN - GLS) * (gy1 - gy0))
        for cid, name, acc, lon, lat, above in [
                ('frankfurt', 'Frankfurt', '#3a7bd5', 8.68, 50.11, False),
                ('stuttgart', 'Stuttgart', '#2d7a4f', 9.18, 48.78, False),
                ('munich', 'München', '#d4820a', 11.58, 48.14, False),
                ('berlin', 'Berlin', '#c0392b', 13.40, 52.52, False),
                ('hamburg', 'Hamburg', '#1a6b8a', 9.99, 53.55, False),
                ('cologne', 'Köln', '#8e44ad', 6.96, 50.94, False),
                ('dresden', 'Dresden', '#c0392b', 13.74, 51.05, False),
                ('nuremberg', 'Nürnberg', '#b7430c', 11.08, 49.45, False)]:
            x, y = de_xy(lon, lat); lines.append(_dot(cid, name, acc, x, y, 'Deutschland', above))

        # Neighbour capitals (own countries). de_xy extrapolates linearly past
        # Germany's bbox — fine for nearby cities; nudge dx/dy/above if labels drift.
        for cid, name, acc, lon, lat, country, dx, dy, above in [
                ('vienna',     'Wien',      '#6b2d8b', 16.3719, 48.2082, 'Österreich', 0, 0, False),
                ('zurich',     'Zürich',    '#2c7873',  8.5417, 47.3769, 'Schweiz',    0, 0, False),
                ('luxembourg', 'Luxemburg', '#0a7e8c',  6.1319, 49.6116, 'Luxemburg',  0, 0, True),
                ('brussels',   'Bruxelles', '#d4a017',  4.3517, 50.8503, 'Belgique',   0, 0, True)]:
            x, y = de_xy(lon, lat); lines.append(_dot(cid, name, acc, x + dx, y + dy, country, above))

        # Japan — 3 closed loops far east: affine from their combined bbox.
        jxs, jys = [], []
        for d in [d for d, s in paths if s.replace(' ', '').upper() == '#FE1010']:
            x0, y0, x1, y1 = path_bbox(d); jxs += [x0, x1]; jys += [y0, y1]
        JX0, JX1, JY0, JY1 = min(jxs), max(jxs), min(jys), max(jys)
        JLW, JLE, JLN, JLS = 129.4, 145.8, 45.52, 31.0   # Kyushu W..Hokkaido E, Sōya..Sata
        def jp_xy(lon, lat):
            return (JX0 + (lon - JLW) / (JLE - JLW) * (JX1 - JX0),
                    JY0 + (JLN - lat) / (JLN - JLS) * (JY1 - JY0))
        for cid, name, acc, lon, lat, above in [
                ('sapporo', 'Sapporo', '#FF6D00', 141.35, 43.06, False),
                ('tokyo', 'Tokyo', '#E60012', 139.69, 35.68, True),
                ('fuji', 'Mount Fuji', '#65C090', 138.73, 35.36, False),
                ('kyoto', 'Kyoto', '#C84B31', 135.77, 35.01, True),
                ('hiroshima', 'Hiroshima', '#4F7942', 132.46, 34.39, False),
                ('okinawa', 'Okinawa', '#00A4B4', 127.68, 26.21, False)]:
            x, y = jp_xy(lon, lat); lines.append(_dot(cid, name, acc, x, y, 'Japan', above))

        city_dots = '\n' + ',\n'.join(lines) + ',\n  '

    elif TARGET == TARGETS['germany']:
        lines = []
        de_d = outer_boundary([d for d, s in paths if s.replace(' ', '').upper() == DE_OUTER.upper()])
        gx0, gy0, gx1, gy1 = path_bbox(de_d)
        GLW, GLE, GLN, GLS = 5.87, 15.04, 55.06, 47.27
        def de_xy(lon, lat):
            return (gx0 + (lon - GLW) / (GLE - GLW) * (gx1 - gx0),
                    gy0 + (GLN - lat) / (GLN - GLS) * (gy1 - gy0))
        for step, (cid, name, acc, lon, lat, above) in enumerate([
                ('frankfurt', 'Frankfurt', '#3a7bd5', 8.68, 50.11, False),
                ('stuttgart', 'Stuttgart', '#2d7a4f', 9.18, 48.78, False),
                ('munich',    'München',   '#d4820a', 11.58, 48.14, False),
                ('berlin',    'Berlin',    '#c0392b', 13.40, 52.52, False),
                ('hamburg',   'Hamburg',   '#1a6b8a',  9.99, 53.55, False),
                ('cologne',   'Köln',      '#8e44ad',  6.96, 50.94, False),
                ('dresden',   'Dresden',   '#c0392b', 13.74, 51.05, False),
                ('nuremberg', 'Nürnberg',  '#b7430c', 11.08, 49.45, False)], 1):
            x, y = de_xy(lon, lat)
            p = ['id: "%s"' % cid, 'name: "%s"' % name, 'accentColor: "%s"' % acc,
                 'step: %d' % step, 'x: %s' % round(x, 1), 'y: %s' % round(y, 1)]
            if above: p.append('labelAbove: true')
            lines.append('    {' + ', '.join(p) + '}')
        city_dots = '\n' + ',\n'.join(lines) + ',\n  '

    # Pan config (worldland targets are pannable across the whole world).
    if TARGET.get('worldland'):
        bx, by, bw, bh = TARGET['panBounds']
        pan_js = ('  pannable: true,\n  panBounds: [%d, %d, %d, %d],\n'
                  '  minViewSize: %d,\n  maxViewSize: %d,\n'
                  % (bx, by, bw, bh, TARGET['minViewSize'], TARGET['maxViewSize']))
    else:
        pan_js = ''

    cityscale_js = ('  cityScale: %.4f,\n' % (VW / 700.0)) if VW != 700 else ''
    # No highlight (worldland): France's outline lives in neighbourBorders, so no dark
    # main outline — only its fill (countryFill) remains, blending into the other land.
    main_path_js = "''" if TARGET.get('worldland') else 'countryFillPath'

    out = '''// GENERATED by borders/build-world.py — do not edit by hand.
// Journey map: the world map (borders/world-map.md) framed on %s.
// Land is the source's closed country loops used directly (crisp coastlines); %s's
// outline is assembled as a smooth vector polygon from its région network and
// highlighted. Water = the complement of land, painted as a flat viewBox rect under
// the land. Identity: source == viewBox.

// In-frame landmass: each country's own closed source loop, painted as paper land.
const land = %s;

// %s, traced from its %s outline — the highlighted country.
const countryFillPath = %r;

// Flat sea rectangle (the frame); land is drawn on top, so water is what's left.
const seaPath = %r;

// Neighbour borders (soft strokes).
const neighbourBorders = %s;

// The country's internal région borders (soft strokes, drawn over the fill).
const countryRegions = %s;

export default {
  viewBox: '%d %d %d %d',
%s%s  cities: [%s],
  mainPath: %s,
  countryFill: countryFillPath,
  mainFill: '%s',
  landFill: '#F0EADE',
  seaPath,
  landIslands: land,
  outerPaths: neighbourBorders,
  statePaths: countryRegions,
};
''' % (NAME, NAME, js_arr(land_islands), NAME, STROKE, country_d, seaRect,
       js_arr(neighbour_strokes), js_arr(region_paths), VX, VY, VW, VH,
       pan_js, cityscale_js, city_dots, main_path_js, TARGET['mainFill'])
    extra = '%s bytes=%d  neighbour strokes=%d  dots=%d' % (
        NAME, len(country_d), len(neighbour_strokes), city_dots.count('id:'))

os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w').write(out)
print('wrote %s (mode=%s)' % (os.path.normpath(OUT), MODE))
print('land bytes=%d  %s' % (land_bytes, extra))
