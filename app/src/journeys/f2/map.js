import woMap from '../wo/map';

// World map framed on France — city list with step numbers so dots link to FR lessons.
// Coordinates are world-source xy (same space as wo/map.js viewBox 3044 413 520 520).
// Accent colors match fr/map.js city-for-city.
// Brussels is interpolated (not in wo/map.js city list).
const cities = [
  { id: 'paris',      name: 'Paris',      accentColor: '#0055A4', step: 1,  x: 3314.8, y: 627.8 },
  { id: 'strasbourg', name: 'Strasbourg', accentColor: '#c0392b', step: 2,  x: 3401.7, y: 633.5 },
  { id: 'lyon',       name: 'Lyon',       accentColor: '#d4820a', step: 3,  x: 3354.8, y: 692.6 },
  { id: 'nice',       name: 'Nice',       accentColor: '#e8a33d', step: 4,  x: 3394.0, y: 735.8 },
  { id: 'marseille',  name: 'Marseille',  accentColor: '#1a6b8a', step: 5,  x: 3363.4, y: 744.3 },
  { id: 'toulouse',   name: 'Toulouse',   accentColor: '#e91e8c', step: 6,  x: 3300.1, y: 737.8 },
  { id: 'bordeaux',   name: 'Bordeaux',   accentColor: '#6b2d8b', step: 7,  x: 3267.7, y: 711.9 },
  { id: 'nantes',     name: 'Nantes',     accentColor: '#2d7a4f', step: 8,  x: 3251.8, y: 662.1 },
  { id: 'lille',      name: 'Lille',      accentColor: '#b7430c', step: 9,  x: 3326.1, y: 590.7 },
  { id: 'brussels',   name: 'Bruxelles',  accentColor: '#d4a017', step: 10, x: 3347.0, y: 583.0, country: 'Belgique' },
];

// France inner region borders from world-map-2.md (#F95E7B), world-source coordinates.
const statePaths = [
  'M3300 594L3315 595.5V602.076L3337 599.5',
  'M3355 605.5L3353 613.5L3355 620.5L3352 624L3357.5 632L3364.5 640L3362 642L3366 648M3392.5 622.5L3386.5 630V644L3382 649M3388 655.5L3388.3 653L3382 649M3382 649L3379.5 650L3375 646.5L3366 648M3366 648L3364.5 652L3361 655M3376.5 682L3369.5 687.755L3363.5 684.5L3357.5 687.755L3355 681M3235.5 662.5L3242.45 661L3243.84 654.878L3255.47 653L3259.5 647.5L3257.17 637.542M3257.17 637.542L3263 639L3270 632.628L3275.5 637.5L3278.5 635.5L3287 641M3257.17 637.542L3248.99 632.67M3278.5 612.292V626L3284 625L3289 632M3289 632H3295.5L3297.77 628.754M3289 632V638.5L3287 639V641M3287 641V650L3283 654.878L3278.5 656L3275.5 665.505M3254.48 685.5L3266 683.5L3260.5 668L3275.5 665.505M3275.5 665.505L3278.5 670H3285L3296 683.5M3296 683.5L3310.5 682.109M3296 683.5L3287.68 685.5L3289.5 692L3283.79 698M3255 698.5L3270 712.5L3283.79 698M3283.79 698L3294.5 705L3292 707L3299 715.5M3272 756.5L3277 750.026L3270 745.5L3271.5 738L3289.5 733.5L3299 715.5M3299 715.5H3308M3308 715.5V725L3315 722.5L3316.5 715.5L3321 722.5L3324 726.941V732L3330.5 735.908L3320 746.5L3314 745.5V751L3303 749.855L3304.5 763M3351 742.5L3355 737L3349.5 730.5M3337 721L3339.5 729L3349.5 730.5L3356 732L3361.5 734.5L3366.5 730.5L3361.5 726L3371 718H3381V709.5L3390 711.5M3322 673L3327.5 678.788L3331 673L3338.5 683L3336 691L3337 698.5L3336 699.5L3339.5 703L3337 706H3344L3347 711.267L3337 721M3337 721H3327.5V715.5L3321 722.5M3308 715.5L3311.5 707H3314V698.5L3310.5 695L3314 692V687.755L3310.5 682.109M3310.5 682.109L3314 681V676L3322 673M3322 673L3322.5 666L3319 659.5L3320 653L3324 646.5L3321 643.5M3336 691H3341.5V687.755H3344L3347 693.732L3349.5 681H3355M3330 627L3335 615.692L3339.5 614.363L3343 604.5M3330 627L3322.5 621.005L3316.5 623L3311.5 619.5L3305 621.005L3303 619.5M3330 627L3329 637.5M3361 655L3353 654L3352 648L3347 644L3345 648H3337L3329 637.5M3361 655L3361.5 660.856L3356.5 667L3359 677.5L3355 681M3297.77 628.754L3305 634.5V638.5H3312.5V643.5H3321M3297.77 628.754L3299 627L3297.77 623L3303 619.5M3329 637.5H3322.5L3321 643.5M3303 619.5V604L3298 600.5',
];

// Neighbour/sea labels in world-source coords, sized to the D2 reference (~4, 3 for
// small ones) and positioned just outside France inside the tight frame
// x∈[3222,3432] y∈[559,769]. Far-world labels (Royaume-Uni, Pays-Bas) dropped.
const neighborLabels = [
  { name: 'Manche',           x: 3255, y: 600, size: 4 },
  { name: 'Océan Atlantique', x: 3220, y: 700, size: 4 },
  { name: 'Belgique',         x: 3355, y: 600, size: 4 },
  { name: 'Luxembourg',       x: 3370, y: 607, size: 3 },
  { name: 'Allemagne',        x: 3418, y: 590, size: 4 },
  { name: 'Suisse',           x: 3410, y: 675, size: 4 },
  { name: 'Italie',           x: 3420, y: 708, size: 4 },
  { name: 'Corse',            x: 3430, y: 768, size: 3 },
  { name: 'Espagne',          x: 3255, y: 780, size: 4 },
  { name: 'Méditerranée',     x: 3360, y: 764, size: 4 },
];

// Portal to the German journey — twin of d2's "Paris" link (see fr/map.js).
const links = [{ to: 'd2', label: 'Frankfurt', x: 3417, y: 603, accentColor: '#3a7bd5' }];

export default {
  ...woMap,
  viewBox: '3193 557 252 252', // square — shows all of France + Corsica (SE island)
  pannable: false,             // override wo's true → fixed map like D2
  cityScale: 0.35,             // D2 reference
  cities, statePaths, mainFill: '#E8DDC8', neighborLabels, links,
  // labelScale omitted → defaults to 1 (D2).
  mainFillIslands: [
    // Corsica — paint the SE island in mainland-France colour (from wo/map.js land)
    'M3439.44 768.452L3434.46 784.725L3426.49 780.408L3422.17 766.46L3425.16 758.49L3435.79 750.52L3439.44 768.452Z',
  ],
};
