import re, sys, math
import numpy as np
from PIL import Image, ImageDraw
src=open('borders/japan.md').read(); svg=src[src.index('<svg'):src.index('</svg>')+6]
paths=re.findall(r'<path d="([^"]+)" stroke="(#[0-9A-Fa-f]+)"',svg)
W,H=2152,1232; EPS=1.5
VIEWBOX=(1420,230,480,720)
def subpaths(d):
    toks=re.findall(r'[MLHVZ]|-?\d+\.?\d*',d); cx=cy=0.0; cmd=None; out=[]; sub=[]; i=0
    while i<len(toks):
        t=toks[i]
        if t in 'MLHVZ':
            cmd=t; i+=1
            if cmd in ('M','Z') and sub: out.append(sub); sub=[]
            if cmd=='Z': continue
        if cmd in ('M','L'): cx,cy=float(toks[i]),float(toks[i+1]); i+=2; sub.append((cx,cy))
        elif cmd=='H': cx=float(toks[i]); i+=1; sub.append((cx,cy))
        elif cmd=='V': cy=float(toks[i]); i+=1; sub.append((cx,cy))
    if sub: out.append(sub)
    return out
img=Image.new('L',(W,H),0); dr=ImageDraw.Draw(img)
for d,c in paths:
    for sub in subpaths(d):
        p=[(x,y) for x,y in sub]
        if len(p)>1: dr.line(p,fill=255,width=2)
fl=img.copy(); px=fl.load()
seeds=[(1600,1231),(1900,1231),(2151,700),(2151,400),(1480,560),(1420,900),(1900,300)]
for sx,sy in seeds:
    if px[sx,sy]==0: ImageDraw.floodfill(fl,(sx,sy),128,thresh=0)
sea=np.array(fl)==128
vx,vy,vw,vh=VIEWBOX
# LAND = inside viewBox AND not sea (border pixels count as land → coastline closed)
land=np.zeros_like(sea)
land[vy:vy+vh, vx:vx+vw]=~sea[vy:vy+vh, vx:vx+vw]
def erode(a):
    e=a.copy()
    e[1:,:]&=a[:-1,:]; e[:-1,:]&=a[1:,:]; e[:,1:]&=a[:,:-1]; e[:,:-1]&=a[:,1:]
    return e
land=erode(land)
def mask_to_loops(mask):
    m=np.zeros((mask.shape[0]+2,mask.shape[1]+2),bool); m[1:-1,1:-1]=mask
    nxt={}; ys,xs=np.where(m); fill=set(zip(xs.tolist(),ys.tolist()))
    def f(x,y): return (x,y) in fill
    for (x,y) in fill:
        if not f(x,y-1): nxt[(x,y)]=(x+1,y)
        if not f(x+1,y): nxt[(x+1,y)]=(x+1,y+1)
        if not f(x,y+1): nxt[(x+1,y+1)]=(x,y+1)
        if not f(x-1,y): nxt[(x,y+1)]=(x,y)
    loops=[]; used=set()
    for s in list(nxt.keys()):
        if s in used: continue
        loop=[]; p=s
        while p in nxt and p not in used: used.add(p); loop.append(p); p=nxt[p]
        if len(loop)>=4: loops.append(loop)
    return loops

def rdp(points,eps):
    if len(points)<3: return points
    keep=[False]*len(points); keep[0]=keep[-1]=True; st=[(0,len(points)-1)]
    while st:
        a,b=st.pop(); ax,ay=points[a]; bx,by=points[b]; dmax=0; idx=-1
        dx,dy=bx-ax,by-ay; nrm=math.hypot(dx,dy) or 1
        for i in range(a+1,b):
            px2,py2=points[i]; dd=abs((px2-ax)*dy-(py2-ay)*dx)/nrm
            if dd>dmax: dmax=dd; idx=i
        if dmax>eps and idx!=-1: keep[idx]=True; st.append((a,idx)); st.append((idx,b))
    return [points[i] for i in range(len(points)) if keep[i]]
def loops_to_d(loops,offset=(1,1),minlen=6):
    ox,oy=offset; parts=[]
    for loop in loops:
        if len(loop)<minlen: continue
        pts=[((x-ox),(y-oy)) for (x,y) in loop]; pts=rdp(pts,EPS)
        if len(pts)<3: continue
        parts.append('M'+' '.join(f'{x:.1f} {y:.1f}' for x,y in pts)+'Z')
    return ''.join(parts)
loops=mask_to_loops(land)
land_d=loops_to_d(loops)
# sea path = full viewBox rect (outer) + land loops as holes (evenodd)
rect=f'M{vx} {vy}H{vx+vw}V{vy+vh}H{vx}Z'
sea_d=rect+land_d
print('land loops',len(loops),'sea bytes',len(sea_d),file=sys.stderr)
open('/tmp/jp_sea_d.txt','w').write(sea_d)
red=[d for d,c in paths if c=='#FE1010']; blue=[d for d,c in paths if c=='#0D83D0'][0]; main=' '.join(red)
vb=f"{vx} {vy} {vw} {vh}"
s=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="480" height="720">'
s+=f'<rect x="{vx}" y="{vy}" width="{vw}" height="{vh}" fill="#ddd8c8"/>'
s+=f'<path d="{sea_d}" fill="#a8cfe0" stroke="none" fill-rule="evenodd"/>'
s+=f'<g fill="none" stroke="#a09070" stroke-width="1.2"><path d="{blue}"/></g>'
s+=f'<path d="{main}" fill="#e8dcc8" stroke="#8a7a60" stroke-width="1.5"/>'
s+='</svg>'
open('/tmp/jp_sea.html','w').write('<!doctype html><body style=margin:0>'+s)
