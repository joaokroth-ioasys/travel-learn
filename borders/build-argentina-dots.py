#!/usr/bin/env python3
# Places the 6 Argentina city dots in the SAME source/viewBox space as the Chile
# map (borders/america.svg). Mirrors build-chile-map.py's dot placement: real
# latitude -> source row, then an east-west fraction across Argentina's body at
# that row. Prints the cities[] entries to paste into app/src/journeys/cl/map.js
# and a viewBox that frames Chile + Argentina together.
import re, sys
import numpy as np
from PIL import Image, ImageDraw

SRC = 'borders/america.svg'
S = 1.0
W_SRC, H_SRC = 3015, 4575
W, H = int(W_SRC * S), int(H_SRC * S)
CHILE = '#F42906'; OTHER = '#FF6D00'

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

def flood_from(border_img, seed):
    img = border_img.copy()
    px = img.load()
    if px[seed[0], seed[1]] != 0:
        return None
    ImageDraw.floodfill(img, seed, 128, thresh=0)
    return np.array(img) == 128

all_border = raster({CHILE, OTHER}, 2)
sea = flood_from(all_border, (0, 0))            # ocean from a corner
land = (~sea) & (np.array(all_border) == 0)     # all country interiors (borders excluded)

# Chile latitude scale (identical to build-chile-map.py): chile fill N/S pixel
# extremes anchor LAT_N/LAT_S. Re-derive so y matches the existing cl map exactly.
chile_border = raster({CHILE}, 2)
chile_ext = flood_from(chile_border, (0, 0))
chile_fill = ~chile_ext
ys_f, _ = np.where(chile_fill)
YN_PX, YS_PX = ys_f.min(), ys_f.max()
LAT_N, LAT_S = -17.5, -55.98
def lat_to_py(lat):
    f = (lat - LAT_N) / (LAT_S - LAT_N)
    return int(round(YN_PX + f * (YS_PX - YN_PX)))

# Find an Argentina interior seed: at Cordoba's row, scan east past Chile's strip
# to the next land run (Argentina). Then flood Argentina (walls = all borders).
def land_runs(row):
    xs = np.where(land[row])[0]
    if xs.size == 0:
        return []
    runs = []; start = xs[0]; prev = xs[0]
    for x in xs[1:]:
        if x > prev + 3:                        # gap (a border line) ends a run
            runs.append((start, prev)); start = x
        prev = x
    runs.append((start, prev))
    return runs

row0 = lat_to_py(-31.4)
runs = land_runs(row0)
# run[0] = Chile, run[1] = Argentina (first land east of Chile at this latitude)
arg_runs = [r for r in runs if r[1] - r[0] > 30]
seed_x = (arg_runs[1][0] + arg_runs[1][1]) // 2
arg = flood_from(all_border, (seed_x, row0))
ys, xs = np.where(arg)
print(f'Argentina body: x[{xs.min()}..{xs.max()}] y[{ys.min()}..{ys.max()}] area={arg.sum()}', file=sys.stderr)

# id, name, accent, lat, ew (0 = west/Andes edge, 1 = east/Atlantic edge), dx, dy, labelAbove
# Ushuaia is on Tierra del Fuego (separate island from the mainland flood); placed
# at the southern tip with a SE nudge — same offshore trick as Rapa Nui.
CITIES = [
    ('buenosaires', 'Buenos Aires',  '#75AADB', -34.60, 0.93,   0,   0, False),
    ('iguazu',      'Puerto Iguazú', '#2E8B57', -25.70, 1.00,  10, -10, True),
    ('salta',       'Salta',         '#C8742B', -24.78, 0.10,   0,   0, False),
    ('mendoza',     'Mendoza',       '#7B1E3A', -32.89, 0.04,  -8,   0, True),
    ('bariloche',   'Bariloche',     '#2C8C99', -41.13, 0.05, -10,   0, False),
    ('ushuaia',     'Ushuaia',       '#4A6FA5', -54.80, None,   0,   0, False),
]

ay_min, ay_max = ys.min(), ys.max()
out = []
for step, (cid, name, accent, lat, ew, dx, dy, above) in enumerate(CITIES, 1):
    py = max(0, min(H - 1, lat_to_py(lat)))
    if ew is None:                              # Tierra del Fuego, off the mainland fill
        x_src = xs[ys >= ay_max - 5].max() + 25 # just SE of the mainland's south tip
        y_src = ay_max + 30
    else:
        cols = np.where(arg[py])[0]
        dr = 0
        while cols.size == 0 and dr < 15:
            dr += 1
            for yy in (py - dr, py + dr):
                if 0 <= yy < H and np.where(arg[yy])[0].size:
                    cols = np.where(arg[yy])[0]; py = yy; break
        xmin, xmax = cols.min(), cols.max()
        x_src = xmin + ew * (xmax - xmin)
        y_src = py
    x_src += dx; y_src += dy
    e = f'    {{id: "{cid}", name: "{name}", accentColor: "{accent}", step: {step}, x: {round(x_src,1)}, y: {round(y_src,1)}'
    e += ', labelAbove: true}' if above else '}'
    out.append((e, x_src, y_src))
    print(f'  {cid}: x={x_src:.0f} y={y_src:.0f}', file=sys.stderr)

print('\n// Argentina dots — generated by borders/build-argentina-dots.py')
for e, _, _ in out:
    print(e + ',')

# suggest a viewBox that frames Chile strip + these dots (+ margin)
allx = [x for _, x, _ in out] + [1650, 2550]
ally = [y for _, _, y in out] + [3400, 4500]
m = 40
vx, vy = int(min(allx) - m), int(min(ally) - m)
vw, vh = int(max(allx) - min(allx) + 2*m), int(max(ally) - min(ally) + 2*m)
print(f"\n// viewBox: '{vx} {vy} {vw} {vh}'", )
