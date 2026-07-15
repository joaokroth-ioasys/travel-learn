import woMap from '../wo/map';

// World map framed on Japan — the "2" treatment (see d2/f2). Same 6 cities and
// north→south sequence as jp/map.js, but coordinates are world-source xy (same
// space as wo/map.js viewBox 3044 413 520 520) — Japan sits at x≈5570-5720.
// Icons/accents/steps mirror jp/map.js city-for-city.
const cities = [
  { id: 'sapporo',   name: 'Sapporo',    icon: '\u{1F33A}',        accentColor: '#FF6D00', step: 1, x: 5717.5, y: 749.2 },
  { id: 'tokyo',     name: 'Tokyo',      icon: '\u{1F5FC}',        accentColor: '#E60012', step: 2, x: 5699.5, y: 905.7, labelAbove: true },
  { id: 'fuji',      name: 'Mount Fuji', icon: '\u{1F5FB}',        accentColor: '#65C090', step: 3, x: 5689.1, y: 912.5 },
  { id: 'kyoto',     name: 'Kyoto',      icon: '⛩️',     accentColor: '#C84B31', step: 4, x: 5657.1, y: 919.9, labelAbove: true },
  { id: 'hiroshima', name: 'Hiroshima',  icon: '\u{1F54A}️',  accentColor: '#4F7942', step: 5, x: 5621.2, y: 933.0 },
  { id: 'okinawa',   name: 'Okinawa',    icon: '\u{1F33A}',        accentColor: '#00A4B4', step: 6, x: 5569.4, y: 1106.5 },
];

// Japan's outline in world-source coords: the 3 closed island loops tagged
// stroke="#FE1010" (Japan) in borders/world-map-2.md — Shikoku, Honshu, Hokkaido.
// Korea and the small southern island nearby are black-stroked neighbours, not Japan,
// so they're excluded. Used as both fill (mainFill) and the highlighted country
// border, so Japan reads as the focused country (mirrors jp/map.js).
const japanFill = 'M5673.74 938.483L5679.05 945.789L5674.73 958.741L5664.44 951.767L5657.46 956.748L5657.8 969.035L5643.52 963.058L5639.53 953.095L5643.85 940.144L5655.14 942.8L5658.46 933.834L5673.74 938.483ZM5755.43 874.721L5757.42 891.657L5765.72 902.284L5763.73 917.228L5745.8 927.191L5715.25 928.519L5700.64 953.094L5685.03 944.791L5677.06 928.851L5648.5 933.5L5631.56 943.463L5610.97 944.127L5635.55 959.735L5638.2 995.933L5629.9 1004.9L5617.95 996.597L5614.96 977.336L5601.34 971.358L5588.06 956.747L5602.34 950.105L5605.99 936.489L5618.94 925.53L5625.58 910.918L5657.8 904.609L5678.72 908.926V871.068L5695.65 881.362L5710.6 860.109L5716.24 851.807L5712.92 825.904L5695.99 801.993L5695.32 788.71L5711.26 784.725L5738.49 814.28L5747.79 831.217L5743.47 852.803L5755.43 874.721ZM5715.91 725.946L5730.86 730.264L5736.83 721.629L5756.76 745.208L5735.5 750.853L5734.18 771.775L5697.98 757.495L5703.29 780.409L5684.36 780.741L5668.76 759.819L5666.76 743.547L5684.03 742.551L5669.42 713.327L5663.44 697.055L5698.31 718.973L5715.91 725.946Z';

export default {
  ...woMap,
  // ponytail: hand-fitted square frame on Japan (okinawa at y≈1106 is the south
  // extreme). Tune against a screenshot if the crop looks off — like f2's viewBox.
  viewBox: '5440 700 440 440',
  pannable: false,   // override wo's true → fixed map like d2/f2
  // ponytail: this frame is ~2.1× wider than d2's (440 vs 210), so match d2's on-screen
  // marker size by scaling dots + label pills by 440/210 instead of using d2's raw 0.35/1.
  cityScale: 0.73,   // 0.35 × 440/210 → dots read like d2
  // labelScale left at default 1: labels are nested inside the cityScale group, so they
  // already ride the 0.73 boost — matching d2's label proportion (any >1 would oversize them).
  cities,
  mainFill: '#E8DDC8',
  // Override woMap's Germany paths so Japan (not Germany) is the highlighted country.
  countryFill: japanFill,
  mainPath: japanFill,
};
