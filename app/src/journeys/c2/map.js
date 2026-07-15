import woMap from '../wo/map';

// World map framed on Chile — the "2" treatment (see d2/f2/j2). Same 6 cities and
// north→south sequence as the old cl/map.js, but coordinates are world-source xy
// (same space as wo/map.js) — Chile sits at x≈1850-2070, y≈2150-2740.
// Accents/steps mirror the old cl/map.js city-for-city (Rapa Nui sits offshore west).
const cities = [
  { id: 'santiago',   name: 'Santiago',             accentColor: '#0033A0', step: 1, x: 2012.2, y: 2373.0 },
  { id: 'valparaiso', name: 'Valparaíso',           accentColor: '#D52B1E', step: 2, x: 1989.7, y: 2367.0, labelAbove: true },
  { id: 'atacama',    name: 'San Pedro de Atacama', accentColor: '#C8742B', step: 3, x: 2027.2, y: 2153.0 },
  { id: 'rapanui',    name: 'Rapa Nui',             accentColor: '#2E8B57', step: 4, x: 1852.0, y: 2240.3 },
  { id: 'loslagos',   name: 'Los Lagos',            accentColor: '#2C8C99', step: 5, x: 2014.8, y: 2537.0 },
  { id: 'paine',      name: 'Torres del Paine',     accentColor: '#4A6FA5', step: 6, x: 2066.0, y: 2739.0 },
];

// Chile's outline in world-source coords: the two closed loops tagged stroke="#F42906"
// (Chile) in borders/world-map-2.md — mainland + the southern tip. Argentina (#74ACDF)
// is a black/blue neighbour, not painted. Used as both fill and the highlighted country
// border so Chile reads as the focused country (mirrors cl/map.js).
const chileFill =
  'M2175.51 2782.57L2195.44 2827.73H2212.04L2222 2828.4L2220.34 2836.37L2209.72 2842.68L2201.75 2842.01L2191.45 2840.35L2177.5 2834.38L2159.57 2831.39L2134.66 2820.1L2113.41 2809.47L2080.87 2786.56L2096.14 2790.87L2124.7 2804.49L2148.94 2811.79L2152.93 2802.5L2151.93 2788.55L2163.22 2779.91L2175.51 2782.57Z' +
  'M2040.35 2151.27L2043.34 2156.58L2039.36 2178.83L2020.76 2189.13L2026.07 2224.66L2023.42 2231.64L2030.06 2239.94L2019.1 2253.22L2010.46 2273.15L2007.48 2292.74L2013.12 2313.33L2006.15 2335.25L2022.42 2372.11L2027.73 2376.09L2032.38 2395.69L2027.07 2416.28L2031.72 2434.21L2021.76 2448.16L2027.07 2467.42L2038.03 2488.34L2029.73 2495.98L2030.39 2514.91L2033.05 2536.49L2044.01 2562.4L2038.36 2566.71L2050.65 2590.96L2060.94 2598.93L2058.28 2607.89L2067.58 2611.88L2072.23 2619.85L2066.26 2623.83L2072.23 2636.12L2075.89 2663.68L2073.56 2681.62L2079.54 2692.24L2079.21 2705.19L2070.24 2714.49L2080.53 2736.08L2089.17 2743.72L2099.46 2742.39L2105.77 2757.66L2117.4 2769.62L2157.58 2772.28L2173.85 2775.6H2159.57L2153.93 2780.58L2142.64 2787.88L2148.28 2806.81L2141.97 2807.15L2121.05 2800.84L2096.14 2786.56L2070.9 2774.93L2060.28 2761.98L2059.28 2750.03L2045.33 2736.08L2028.73 2700.88L2028.07 2680.95L2039.36 2665.01L2011.79 2658.7L2020.76 2640.44L2014.12 2605.57L2035.7 2612.87L2029.73 2569.37L2016.44 2563.73L2019.76 2589.96L2008.14 2586.97L2003.16 2557.08L1996.52 2517.9L2000.17 2503.28L1989.21 2482.7L1981.24 2458.79L1988.55 2457.79L1990.54 2423.58L1994.52 2389.38L1994.86 2357.83L1983.9 2325.62L1985.89 2308.02L1978.92 2281.78L1984.89 2255.88L1981.9 2214.7V2170.2L1982.24 2122.71L1977.26 2087.84L1970.28 2057.62L1979.58 2052.31L1983.23 2041.35L1993.86 2055.96L1997.84 2071.24L2008.47 2080.2L2004.82 2100.79L2017.11 2124.7L2027.4 2154.26L2040.35 2151.27Z';

// Neighbour/sea labels in world-source coords. Chile's frame is ~3.6× d2's (760 vs
// 210), so sizes are scaled up from d2's ~4 (raw user units, not cityScale-affected).
const neighborLabels = [
  { name: 'Océano Pacífico', x: 1740, y: 2470, size: 14 },
  { name: 'Argentina',       x: 2270, y: 2470, size: 14 },
  { name: 'Bolivia',         x: 2200, y: 2185, size: 12 },
  { name: 'Perú',            x: 1975, y: 2130, size: 12 },
];

export default {
  ...woMap,
  // ponytail: hand-fitted square frame on Chile (Rapa Nui west ≈1852, Patagonia tip
  // south ≈2842). Tune against a screenshot if the crop looks off — like f2's viewBox.
  viewBox: '1680 2110 760 760',
  pannable: false,   // override wo's true → fixed map like d2/f2/j2
  // ponytail: this frame is ~3.6× wider than d2's (760 vs 210), so match d2's on-screen
  // marker size by scaling dots + label pills by 760/210 instead of d2's raw 0.35/1.
  cityScale: 1.27,   // 0.35 × 760/210 → dots read like d2
  cities,
  mainFill: '#E8DDC8',
  neighborLabels,
  // woMap's sea rect stops at y=2846, but this frame reaches y≈2870 (Patagonia tip),
  // leaving a bare strip. Extend the sea south so the whole frame reads as ocean.
  seaPath: 'M0 0 H6642 V3200 H0 Z',
  // Override woMap's Germany paths so Chile (not Germany) is the highlighted country.
  countryFill: chileFill,
  mainPath: chileFill,
};
