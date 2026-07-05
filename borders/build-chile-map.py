#!/usr/bin/env python3
# Regenerates app/src/journeys/cl/map.js from borders/america.svg.
# Rasterise the border lines, flood-fill to recover regions, trace to vector:
#   sea       = flood from the map corners over the #FF6D00+#F42906 coastline
#   chile body= complement of a flood from outside the #F42906 perimeter
# Output coords are SOURCE space (= viewBox space), so the map needs no transform.
import re, json, sys
import numpy as np
from PIL import Image, ImageDraw

SRC = 'borders/america.svg'
OUT = 'app/src/journeys/cl/map.js'
VIEWBOX = (1530, 3400, 1140, 1140)        # x y w h — square frame, zoomed out to fit long Chile
# strip (Atacama y~3452 down to Paine y~4404); trims empty ocean N/S so the card
# isn't taller than the screen. Same x:y scale, so Chile keeps its proportions.
S = 1.0                                     # raster scale (source units per px = 1/S)
W_SRC, H_SRC = 3015, 4575
EPS = 1.5                                   # RDP simplify tolerance (source units)

# ── parse paths (M/L/H/V/Z absolute only) ──────────────────────────────────────
def subpaths(d):
    toks = re.findall(r'[MLHVZ]|-?\d+\.?\d*', d)
    cx = cy = 0.0; cmd = None; out = []; sub = []
    i = 0
    while i < len(toks):
        t = toks[i]
        if t in 'MLHVZ':
            cmd = t; i += 1
            if cmd in ('M', 'Z') and sub:
                out.append(sub); sub = []
            if cmd == 'Z':
                continue
        if cmd in ('M', 'L'):
            cx, cy = float(toks[i]), float(toks[i+1]); i += 2; sub.append((cx, cy))
        elif cmd == 'H':
            cx = float(toks[i]); i += 1; sub.append((cx, cy))
        elif cmd == 'V':
            cy = float(toks[i]); i += 1; sub.append((cx, cy))
    if sub:
        out.append(sub)
    return out

svg = open(SRC).read()
paths = re.findall(r'<path d="([^"]+)" stroke="(#[0-9A-Fa-f]+)"', svg)
CHILE = '#F42906'; OTHER = '#FF6D00'

# ── rasterise helper ───────────────────────────────────────────────────────────
W, H = int(W_SRC * S), int(H_SRC * S)
def raster(colors, width=2):
    img = Image.new('L', (W, H), 0)
    dr = ImageDraw.Draw(img)
    for d, c in paths:
        if c in colors:
            for sub in subpaths(d):
                p = [(x * S, y * S) for x, y in sub]
                if len(p) > 1:
                    dr.line(p, fill=255, width=width)
    return img

def flood_exterior(border_img, seeds):
    # mark all background (0) reachable from seeds; returns bool mask of reached px
    img = border_img.copy()
    # use floodfill with a sentinel value (128) over 0-valued background
    px = img.load()
    for sx, sy in seeds:
        if px[sx, sy] == 0:
            ImageDraw.floodfill(img, (sx, sy), 128, thresh=0)
    return np.array(img) == 128

# ── masks ───────────────────────────────────────────────────────────────────────
all_border = raster({CHILE, OTHER}, 2)
sea = flood_exterior(all_border, [(0, 0), (W-1, 0), (0, H-1), (W-1, H-1)])

chile_border = raster({CHILE}, 2)
chile_ext = flood_exterior(chile_border, [(0, 0), (W-1, 0), (0, H-1), (W-1, H-1)])
chile_body = (~chile_ext) & (np.array(chile_border) == 0)  # interior, minus the line px
# include the border px themselves so the fill reaches the outline
chile_fill = ~chile_ext

# ── place city dots on the Chile strip ───────────────────────────────────────────
# Map real latitude -> source y between Chile's north & south extremes; then pick x
# inside the strip at that row via an east-west fraction (0=Pacific coast, 1=Andes).
# Rapa Nui is offshore (Pacific) — placed as an island marker west of the mainland.
ys_f, xs_f = np.where(chile_fill)
YN_PX, YS_PX = ys_f.min(), ys_f.max()
LAT_N, LAT_S = -17.5, -55.98             # Chile's north border .. Cape Horn
def lat_to_py(lat):
    f = (lat - LAT_N) / (LAT_S - LAT_N)
    return int(round(YN_PX + f * (YS_PX - YN_PX)))
# id, name, accent, latitude, east-west frac (None = offshore), dx, dy, labelAbove
# dx/dy are source-unit nudges for label legibility where dots crowd (Santiago and
# Valparaíso sit ~100 km apart on a narrow strip, so they need pulling apart).
# labelAbove flips the name/lesson label above the dot (Valparaíso sits just above
# Santiago, so its label would otherwise land on Santiago's dot).
CITY_META = [
    ('santiago',   'Santiago',              '#0033A0', -33.45, 0.75,    0,  35, False),
    ('valparaiso', 'Valparaíso',            '#D52B1E', -33.05, 0.00,  -15,   8, True),
    ('atacama',    'San Pedro de Atacama',  '#C8742B', -22.90, 0.82,    0,   0, False),
    ('rapanui',    'Rapa Nui',              '#2E8B57', -27.10, None,     0,   0, False),
    ('loslagos',   'Los Lagos',             '#2C8C99', -41.30, 0.45,    0,   0, False),
    ('paine',      'Torres del Paine',      '#4A6FA5', -51.00, 0.50,    0,   0, False),
]
city_dots = []
for step, (cid, name, accent, lat, ew, dx, dy, label_above) in enumerate(CITY_META, 1):
    py = max(0, min(H - 1, lat_to_py(lat)))
    if ew is None:                                    # offshore island in the Pacific
        x_src, y_src = VIEWBOX[0] + 175.0, py / S     # 175u east of the west frame edge (keeps Rapa Nui at x≈1705)
    else:
        cols = np.where(chile_fill[py])[0]
        # widen the search a few rows if this exact row is empty (thin/island gaps)
        dr = 0
        while cols.size == 0 and dr < 12:
            dr += 1
            for yy in (py - dr, py + dr):
                if 0 <= yy < H and np.where(chile_fill[yy])[0].size:
                    cols = np.where(chile_fill[yy])[0]; py = yy; break
        xmin, xmax = cols.min(), cols.max()
        x_src = (xmin + ew * (xmax - xmin)) / S
        y_src = py / S
    x_src += dx; y_src += dy
    dot = {'id': cid, 'name': name, 'accentColor': accent,
           'step': step, 'x': round(x_src, 1), 'y': round(y_src, 1)}
    if label_above:
        dot['labelAbove'] = True
    city_dots.append(dot)
    print(f'  {cid}: x={x_src:.0f} y={y_src:.0f}', file=sys.stderr)

# crop sea to the viewBox (+margin) so the traced path stays small
vx, vy, vw, vh = VIEWBOX
M = 20
x0, y0 = int((vx - M) * S), int((vy - M) * S)
x1, y1 = int((vx + vw + M) * S), int((vy + vh + M) * S)
x0, y0 = max(0, x0), max(0, y0); x1, y1 = min(W, x1), min(H, y1)
sea_crop = np.zeros_like(sea)
sea_crop[y0:y1, x0:x1] = sea[y0:y1, x0:x1]

# ── trace region boundary: emit unit edges around filled cells (region on the
# left), then stitch the directed edges into closed loops. ───────────────────────
def mask_to_loops(mask):
    m = np.zeros((mask.shape[0]+2, mask.shape[1]+2), bool)
    m[1:-1, 1:-1] = mask
    h, w = m.shape
    # collect unit boundary edges with consistent orientation (region on the left).
    # For each filled cell, for each of 4 sides where the neighbour is empty, add a
    # directed edge so that the filled area is on the left of the edge direction.
    # grid points are integer (x,y); cell (x,y) spans [x,x+1]x[y,y+1].
    from collections import defaultdict
    nxt = {}
    def addseg(p, q):
        nxt[p] = q
    ys, xs = np.where(m)
    fill = set(zip(xs.tolist(), ys.tolist()))
    def filled(x, y): return (x, y) in fill
    for (x, y) in fill:
        # top side: neighbour (x, y-1) empty -> edge from (x,y) to (x+1,y)? orient region-left
        if not filled(x, y-1): addseg((x, y), (x+1, y))
        if not filled(x+1, y): addseg((x+1, y), (x+1, y+1))
        if not filled(x, y+1): addseg((x+1, y+1), (x, y+1))
        if not filled(x-1, y): addseg((x, y+1), (x, y))
    # stitch directed edges into loops
    loops = []
    used = set()
    for start in list(nxt.keys()):
        if start in used: continue
        loop = []; p = start
        while p in nxt and p not in used:
            used.add(p); loop.append(p); p = nxt[p]
        if len(loop) >= 4:
            loops.append(loop)
    return loops

def rdp(points, eps):
    if len(points) < 3: return points
    # iterative Ramer-Douglas-Peucker
    keep = [False]*len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points)-1)]
    import math
    while stack:
        a, b = stack.pop()
        ax, ay = points[a]; bx, by = points[b]
        dmax = 0; idx = -1
        dx, dy = bx-ax, by-ay
        norm = math.hypot(dx, dy) or 1
        for i in range(a+1, b):
            px, py = points[i]
            d = abs((px-ax)*dy - (py-ay)*dx)/norm
            if d > dmax: dmax = d; idx = i
        if dmax > eps and idx != -1:
            keep[idx] = True
            stack.append((a, idx)); stack.append((idx, b))
    return [points[i] for i in range(len(points)) if keep[i]]

def loops_to_d(loops, scale, offset=(1, 1)):
    # offset accounts for the 1px pad; convert grid px -> source units
    ox, oy = offset
    parts = []
    for loop in loops:
        pts = [((x-ox)/scale, (y-oy)/scale) for (x, y) in loop]
        pts = rdp(pts, EPS)
        if len(pts) < 3: continue
        d = 'M' + ' '.join(f'{x:.1f} {y:.1f}' for x, y in pts) + 'Z'
        parts.append(d)
    return ''.join(parts)

print('tracing sea...', file=sys.stderr)
sea_loops = mask_to_loops(sea_crop)
sea_d = loops_to_d(sea_loops, S)
print('tracing chile...', file=sys.stderr)
chile_loops = mask_to_loops(chile_fill)
chile_d = loops_to_d(chile_loops, S)
print(f'sea loops={len(sea_loops)} d={len(sea_d)}b  chile loops={len(chile_loops)} d={len(chile_d)}b', file=sys.stderr)

# ── emit map.js ──────────────────────────────────────────────────────────────────
chile_strokes = [d for d, c in paths if c == CHILE]
other_strokes = [d for d, c in paths if c == OTHER]
main_path = ' '.join(chile_strokes)

js = []
js.append("// Chile map — derived from borders/america.svg (Americas source, viewBox 0 0 3015 4575).")
js.append("// GENERATED by borders/build-chile-map.py — do not hand-edit; re-run the script.")
js.append("// Coloured per borders/color-reference.md: sea #a8cfe0, other land #ddd8c8 (paper),")
js.append("// Chile (the focused country) #e8dcc8. seaPath + countryFill are flood-filled from")
js.append("// the border lines and traced to vector (evenodd). Borders kept as strokes:")
js.append("//   mainPath  = #F42906 (Chile outer + inner) drawn dark; outerPaths = #FF6D00.")
js.append("// Coords are source space = viewBox space, so no transform.")
js.append("")
js.append("const outerPaths = [")
for d in other_strokes:
    js.append("  " + json.dumps(d) + ",")
js.append("];")
js.append("")
js.append("export default {")
js.append(f"  viewBox: '{vx} {vy} {vw} {vh}',")
js.append("  landFill: '#ddd8c8',   // all other land (neighbours recede)")
js.append("  mainFill: '#e8dcc8',   // Chile — the focused country")
js.append("  cities: [")
for c in city_dots:
    js.append("    " + json.dumps(c, ensure_ascii=False).replace('"id"', 'id').replace('"name"', 'name')
              .replace('"accentColor"', 'accentColor').replace('"step"', 'step')
              .replace('"x"', 'x').replace('"y"', 'y').replace('"labelAbove"', 'labelAbove') + ",")
js.append("  ],")
js.append("  outerPaths,")
js.append("  mainPath: " + json.dumps(main_path) + ",")
js.append("  countryFill: " + json.dumps(chile_d) + ",")
js.append("  seaPath: " + json.dumps(sea_d) + ",")
js.append("};")
open(OUT, 'w').write('\n'.join(js) + '\n')
print('wrote', OUT, file=sys.stderr)
