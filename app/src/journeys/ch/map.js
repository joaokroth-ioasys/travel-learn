import woMap from '../wo/map';

// World map framed on China — the "2" treatment (see j2/f2). Spreads woMap so
// China's landmass + neighbours come from the world land loops for free.
// Coordinates are world-source xy (same space as wo/map.js), from the map's
// equirectangular projection calibrated on the existing Paris/Tokyo dots:
//   x = 3273.96 + 17.364*lon,  y = 1658.2 - 21.09*lat
// Red dots per request (no per-city accents); China is marked by the dots, not
// a highlighted fill.
const RED = '#DE2910'; // PRC flag red
const cities = [
  { id: 'beijing',   name: 'Beijing',   accentColor: RED, step: 1, x: 5295.1, y: 816.6,  icon: '\u{1F3EF}' },
  { id: 'xian',      name: "Xi'an",     accentColor: RED, step: 2, x: 5165.6, y: 933.9,  icon: '\u{1F3FA}' },
  { id: 'chengdu',   name: 'Chengdu',   accentColor: RED, step: 3, x: 5081.0, y: 1013.4, icon: '\u{1F43C}' },
  { id: 'shanghai',  name: 'Shanghai',  accentColor: RED, step: 4, x: 5383.1, y: 999.6,  icon: '\u{1F306}', labelAbove: true },
  { id: 'hangzhou',  name: 'Hangzhou',  accentColor: RED, step: 5, x: 5360.5, y: 1019.8, icon: '\u{1F375}' },
  { id: 'guilin',    name: 'Guilin',    accentColor: RED, step: 6, x: 5189.1, y: 1125.3, icon: '\u{1F3DE}️' },
  { id: 'guangzhou', name: 'Guangzhou', accentColor: RED, step: 7, x: 5240.7, y: 1170.4, icon: '\u{1F3D9}️' },
  { id: 'hongkong',  name: 'Hong Kong', accentColor: RED, step: 8, x: 5256.4, y: 1187.5, icon: '\u{1F303}', labelAbove: true },
];

// Neighbour context labels (world-source coords). ponytail: first-pass positions;
// nudge against a screenshot like j2's edge labels.
const neighborLabels = [
  { name: 'Mongolia',    x: 5050, y: 690,  size: 20 },
  { name: 'Japan',       x: 5610, y: 885,  size: 16 },
  { name: 'Russia',      x: 5323, y: 519,  size: 22 },
  { name: 'Kazakhstan',  x: 4646, y: 688,  size: 20 },
  { name: 'India',       x: 4680, y: 1152, size: 20 },
  { name: 'Pakistan',    x: 4533, y: 1026, size: 15 },
  { name: 'Nepal',       x: 4733, y: 1047, size: 13 },
  { name: 'Myanmar',     x: 4941, y: 1215, size: 15 },
  { name: 'Laos',        x: 5062, y: 1258, size: 13 },
  { name: 'Vietnam',     x: 5123, y: 1300, size: 15 },
  { name: 'North Korea', x: 5479, y: 815,  size: 13 },
  { name: 'South Korea', x: 5497, y: 899,  size: 13 },
];

// China's mainland outline in world-source coords: the closed loop tagged
// stroke="black" (bbox x4557-5520 y534-1234) in borders/world-map-2.md. Used as
// both fill (mainFill) and the highlighted border, so China reads as the focus.
const chinaFill = 'M5398.4 616.0 5428.3 631.0 5448.2 650.2 5473.5 650.2 5482.1 642.3 5505.0 636.0 5509.4 654.9 5508.4 662.5 5517.6 685.1 5519.6 705.7 5496.7 702.0 5487.1 709.3 5502.7 727.3 5515.7 752.2 5507.4 752.5 5513.7 763.5 5495.4 750.9 5495.4 762.8 5474.1 771.8 5483.4 783.1 5468.2 782.1 5456.2 775.4 5452.6 790.7 5439.6 802.0 5432.6 815.6 5411.7 821.6 5403.8 831.6 5387.8 837.5 5392.1 827.6 5384.5 819.3 5391.1 805.0 5376.2 794.0 5364.9 801.3 5352.9 816.3 5348.6 829.9 5332.0 830.9 5327.7 840.9 5343.6 855.1 5359.6 858.8 5364.2 868.1 5381.2 874.4 5393.8 859.1 5413.4 867.4 5425.0 868.1 5432.6 879.0 5410.4 885.0 5407.1 896.6 5394.4 907.3 5391.5 922.2 5415.0 933.8 5430.3 954.8 5448.6 974.4 5466.8 990.6 5472.2 1006.6 5462.9 1012.5 5470.8 1023.8 5483.8 1030.5 5486.4 1047.7 5486.8 1064.7 5477.5 1066.7 5470.5 1089.6 5462.9 1117.8 5451.6 1143.0 5430.3 1162.6 5408.4 1180.9 5388.1 1183.2 5378.5 1192.5 5370.9 1185.9 5362.6 1196.2 5338.7 1207.1 5319.4 1210.1 5317.1 1232.7 5306.8 1234.0 5299.5 1218.4 5302.5 1210.5 5276.6 1203.5 5268.6 1207.1 5249.0 1201.5 5238.7 1192.9 5239.7 1180.6 5222.1 1176.6 5211.8 1168.6 5198.2 1179.9 5180.6 1182.6 5166.0 1182.2 5157.0 1187.5 5148.0 1190.5 5154.7 1215.1 5144.7 1214.5 5142.1 1209.5 5140.4 1200.5 5127.8 1206.8 5119.1 1202.8 5104.2 1194.9 5106.9 1177.3 5094.6 1172.9 5086.6 1153.3 5068.0 1157.0 5065.7 1131.8 5079.6 1113.8 5076.6 1096.2 5072.3 1080.0 5063.4 1075.0 5054.4 1062.3 5044.1 1064.0 5023.8 1060.7 5027.8 1051.7 5015.9 1038.4 5005.2 1047.4 4989.0 1042.4 4971.0 1055.7 4958.1 1071.7 4944.1 1074.3 4934.8 1068.7 4925.2 1068.0 4910.9 1063.3 4902.3 1068.7 4893.7 1084.6 4888.7 1067.7 4878.4 1072.3 4856.8 1070.0 4835.2 1065.3 4818.6 1055.7 4803.7 1051.7 4795.4 1041.4 4784.4 1038.4 4763.1 1024.5 4747.2 1017.9 4740.9 1022.8 4712.3 1007.9 4691.8 994.6 4681.1 971.0 4694.7 974.0 4692.7 963.1 4682.8 952.1 4680.1 934.8 4654.6 909.6 4623.0 901.3 4613.4 884.7 4597.8 874.7 4592.8 868.7 4586.8 856.8 4585.1 848.5 4572.9 843.5 4567.9 845.8 4557.6 825.9 4561.2 821.3 4557.2 816.3 4570.9 806.3 4581.5 802.0 4600.8 805.0 4602.8 791.4 4624.0 789.0 4627.3 780.4 4650.2 769.1 4650.9 764.5 4645.3 752.2 4654.9 746.9 4625.7 710.3 4655.9 702.0 4662.5 697.4 4659.2 659.9 4695.1 666.8 4700.4 657.2 4692.1 636.6 4704.7 634.6 4711.0 620.7 4716.7 619.0 4727.6 633.6 4746.5 644.6 4773.8 652.2 4793.0 669.2 4797.7 693.4 4807.6 702.7 4829.2 706.4 4853.1 709.0 4879.7 722.3 4891.0 724.6 4907.6 743.9 4923.2 756.5 4941.8 755.8 4979.3 760.8 5000.6 757.8 5019.2 760.8 5050.4 773.8 5071.0 773.8 5081.9 780.1 5096.6 768.8 5120.5 761.5 5145.7 760.8 5162.0 753.5 5168.6 742.2 5176.6 734.9 5170.3 727.9 5160.7 720.0 5162.3 706.4 5172.9 708.3 5192.5 712.7 5203.2 701.4 5224.4 693.4 5228.7 679.5 5237.0 673.5 5259.6 670.8 5274.2 673.1 5271.6 665.8 5247.7 651.2 5230.4 644.6 5222.1 652.2 5203.8 648.9 5196.2 651.6 5186.9 643.3 5185.9 622.3 5183.9 606.7 5208.5 614.7 5223.1 601.7 5216.8 592.4 5216.1 570.9 5220.4 564.2 5212.1 552.9 5199.8 548.3 5205.5 538.0 5222.4 534.3 5243.0 533.7 5271.6 540.0 5291.5 547.3 5317.1 567.9 5329.7 576.8 5344.6 589.5 5365.2 609.4 5398.4 616.0Z';

export default {
  ...woMap,
  // ponytail: square frame sized to the whole country. China spans ~x4540-5620
  // (73E-135E) and ~y540-1280 (18N-54N) in world-source coords; this frames it
  // all with margin. Tune against a screenshot if the crop looks off.
  viewBox: '4500 330 1160 1160',
  pannable: false,   // override wo's true → fixed map like j2/f2
  cityScale: 1.66,   // ~viewW/700 (build-world convention); tune vs screenshot
  cities,
  neighborLabels,
  mainFill: '#E8DDC8',
  // Highlight China: fill + outer border from its own outline (like j2's japanFill).
  countryFill: chinaFill,
  mainPath: chinaFill,
};
