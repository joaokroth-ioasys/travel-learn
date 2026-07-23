import woMap from '../wo/map';

// World map framed on Italy — the "2" treatment (see j2/f2/ch). Spreads woMap so
// Italy's landmass + neighbours come from the world land loops for free.
// Coordinates are world-source xy (same space as wo/map.js), from the map's
// equirectangular projection calibrated on the existing dots:
//   x = 3273.96 + 17.364*lon,  y = 1658.2 - 21.09*lat
// (verified against Paris in f2/map.js and Beijing in ch/map.js).
// Accent colors match content.js city-for-city.
const cities = [
  { id: 'milan',    name: 'Milan',    accentColor: '#C8102E', step: 1, x: 3433.5, y: 699.4, icon: '🛍️' },
  { id: 'venice',   name: 'Venice',   accentColor: '#1a6b8a', step: 2, x: 3487.8, y: 699.9, icon: '🚤', labelAbove: true },
  { id: 'florence', name: 'Florence', accentColor: '#B8860B', step: 3, x: 3469.4, y: 735.1, icon: '🎨' },
  { id: 'rome',     name: 'Rome',     accentColor: '#009246', step: 4, x: 3491.0, y: 774.5, icon: '🏛️' },
  { id: 'naples',   name: 'Naples',   accentColor: '#E65100', step: 5, x: 3521.7, y: 796.6, icon: '🍕' },
  // Sicilia & Sardegna: the projection lands on real Palermo/Cagliari, but the
  // hand-simplified islandFill sits them off the drawn shapes, so these two use
  // the drawn islands' centroids instead. labelAbove keeps Sicilia's badge/stars
  // off the viewBox bottom edge (875).
  { id: 'sicilia',  name: 'Sicilia',  accentColor: '#8E24AA', step: 6, x: 3516.0, y: 861.0, icon: '🍋', labelAbove: true },
  { id: 'sardegna', name: 'Sardegna', accentColor: '#0097A7', step: 7, x: 3431.0, y: 812.0, icon: '🏖️', labelAbove: true },
];

// Neighbour / sea context labels (world-source coords). ponytail: first-pass
// positions; nudge against a screenshot like f2's edge labels.
const neighborLabels = [
  { name: 'Svizzera',         x: 3416, y: 671, size: 4 },
  { name: 'Austria',          x: 3520, y: 660, size: 4 },
  { name: 'Slovenia',         x: 3531, y: 689, size: 3 },
  { name: 'Croazia',          x: 3543, y: 720, size: 3 },
  { name: 'Corsica',          x: 3432, y: 769, size: 3 },
  { name: 'Ungheria',         x: 3565, y: 673, size: 4 },
  { name: 'Bosnia',           x: 3583, y: 730, size: 3 },
  { name: 'Mar Adriatico',    x: 3535, y: 751, size: 4 },
  { name: 'Mar Tirreno',      x: 3475, y: 812, size: 4 },
  { name: 'Mar Mediterraneo', x: 3460, y: 868, size: 4 },
];

// Italy's outline in world-source coords: the three closed land loops from
// borders/world-map.md (same space as wo/map.js) — mainland boot, Sicilia,
// Sardegna. Used as both fill (mainFill) and highlighted border so Italy reads
// as the focus (mirrors j2's japanFill / ch's chinaFill).
// Italy inner region (federal state) borders from world-map-2.md (stroke #308903),
// world-source coords. Set on the Italy map only → shown only for this journey.
const statePaths = [
  'M3544 792V795L3540.5 797L3544.5 803.5L3545 806L3549.5 810L3547 816L3545 816.5L3546.5 819L3552.5 817L3553 818.5L3558.5 817.5L3559.5 812H3564L3567 805.5L3564 803L3563.5 797.5L3559 799.5L3555 794L3553.5 795L3551.5 794L3552.5 792L3549.5 790.5L3548.5 791.5L3544 792ZM3544 792L3540 792.5L3537.5 791L3538.5 788L3534 786.5L3534.5 785L3533.5 783.75M3529.5 768L3535.5 773L3534.5 775.5L3535.5 778L3532.5 780.5V782.5L3533.5 783.75M3529.5 768L3525.5 777L3524 777.5L3523.5 775.5L3520.5 774.5L3518.5 776.5L3519.5 778L3515.5 780.5M3491.17 730.5L3491.5 729.5L3505.5 738.5L3513 751.5L3515.5 756L3529.5 768M3515.5 780.5L3517 783L3516.5 785.5M3515.5 780.5L3511 778L3509 779.5L3508 777.5H3505.5V775.5L3502 773.5H3500L3499.5 771.5L3501 769.5L3504 770.5L3505 769.5L3502 765L3501 763L3501.5 760.5L3505.5 759.5L3505 757.5M3516.5 785.5L3518.5 786.5L3519.5 784.286L3526 787L3533.5 783.75M3449 731.5L3455 752L3471 767L3483.5 778L3498 787L3510.5 788.5L3513 791L3515 789.5L3514.5 787L3516.5 785.5M3505 757.5L3507 754H3509.5L3513 751.5M3505 757.5L3503.5 756L3502 756.25M3471 767L3472 766L3474.5 764.5L3474 762.5L3477.5 760.5V756L3479 756.75M3479 756.75L3480.5 757.5L3480 758.5L3482.5 760.5L3484.5 760L3486 764H3488L3489.5 766L3492.5 764.5L3496 760L3500 758.5L3500.5 756.5L3502 756.25M3479 756.75L3480 755V750.5L3478.5 749.5L3479 748.5L3483.5 745L3480.5 742L3483 737.5M3483 737.5H3485.5V739L3490 742L3492 741L3494.5 747L3495.5 752.5L3498 753.5L3501.5 755L3502 756.25M3443.5 720.5L3445 718H3447.5L3449 720.5H3450L3455.5 723L3457.5 726.5L3460 725L3462.5 727L3467.5 726.5L3470.5 723L3475.5 725.5L3476 727L3474.5 728.5L3476 731.5L3481 734H3484.5L3485 735L3483 736V737.5M3481 734L3482.5 729.5L3486 728.5L3487 730M3487 730L3487.5 732.5H3490.5L3491.17 730.5M3487 730L3489.5 729L3491.17 730.5M3443.5 720.5L3448.5 726L3449 731.5M3443.5 720.5L3441.5 719H3439.5L3440.5 715.5H3437.5M3449 731.5L3440 729L3426 722L3418.5 724.5L3409 734.5L3402 735.5L3407.5 731L3408.5 728L3412 725L3415.5 725.5L3418.5 723L3421 716.5L3422 717.5L3426 717L3428 715.5L3429.5 717L3431.5 713.5L3434.5 715.5H3437.5M3437.5 715.5L3430.5 705.5L3427.5 706.5L3424.5 699L3429.5 697.5L3424.5 689.5V687.5M3496.5 693L3483.5 700.5V703H3481.5L3474.5 706.5L3459.5 708L3449 702.5L3441.5 704L3438 708.5L3439.5 710.5L3437.5 715.5M3424.5 687.5H3417.5L3415 684.5L3406 691.5L3403 692M3480.5 669L3478 665L3462 668.5L3460 672.5L3450 669.5L3449 678L3441.5 682L3429.5 679L3426 687.5H3424.5M3403 692L3403.5 697.5L3399.5 698L3398.5 701.5H3395M3403 692L3397.5 692.5L3390.5 688.5L3390 693.5L3395 701.5M3395 701.5V702L3389.5 708L3394.5 724L3404 727L3402.5 735M3474.5 706.5L3464.5 701.5L3460 698.5L3457.5 691.5L3462 686.5M3496.5 693L3509.5 696L3505 687.5L3506 677L3487 673M3496.5 693L3497.5 684L3491.17 686.5L3483.5 680.5L3487 673M3487 673L3482.5 672L3480.5 669M3450 669.5L3455.5 676.5L3454.5 677.5L3456 686.5H3462L3463.5 690.5L3467.5 690L3471.5 681.5L3475.5 682.5V679.5L3479 677.5L3476.5 673L3477.5 670L3480.5 669',
];

const italyFill = 'M3506.52 677.129L3505.19 687.424L3509.84 696.39L3496.23 693.069L3483.28 700.707L3484.61 711.002L3482.95 716.98L3489.25 727.607L3505.86 738.233L3515.49 755.834L3535.75 772.771L3549.03 772.439L3553.68 777.088L3549.03 781.405L3564.97 789.043L3578.25 795.353L3593.86 806.644L3595.86 810.297L3593.2 817.935L3582.9 807.972L3567.63 804.651L3561.32 818.267L3574.27 826.237L3572.94 837.196L3565.97 838.524L3557.67 856.789L3550.36 858.45L3550.03 851.808L3553.02 840.517L3556.67 835.867L3549.03 823.58L3543.05 812.953L3535.75 810.297L3529.77 801.33L3518.48 797.345L3510.51 788.711L3497.89 787.383L3483.61 778.084L3467.34 764.136L3455.05 752.181L3448.74 731.26L3440.11 728.935L3426.16 721.961L3418.52 724.618L3408.89 734.58L3401.92 735.909L3403.58 726.942L3394.28 724.286L3389.3 708.013L3394.94 701.704L3389.96 693.734L3390.29 687.756L3397.6 692.405L3405.9 691.409L3414.87 684.103L3417.86 687.424L3425.83 686.76L3429.15 678.457L3441.77 681.114L3448.74 677.461L3449.74 669.159L3460.03 672.148L3461.69 668.163L3477.96 664.51L3482.28 671.484L3506.52 677.129ZM3547.37 851.475L3541.72 868.411L3544.71 874.721L3541.72 885.68L3527.78 877.71L3518.81 875.385L3493.9 864.758L3495.56 853.799L3516.15 855.792L3534.09 853.467L3547.37 851.475ZM3434.46 788.379L3445.42 803.323L3444.09 831.55L3436.12 830.222L3429.15 837.196L3422.5 831.55L3420.84 805.98L3416.53 794.024L3426.16 795.021L3434.46 788.379Z';

export default {
  ...woMap,
  // Square frame over the whole boot + Sicily and Sardinia, with sea margin.
  // Italy spans ~x3430-3525 (7E-18E) and ~y667-878 (37N-47N) in world-source
  // coords. Tune against a screenshot if the crop looks off.
  viewBox: '3375 650 225 225',
  pannable: false,     // override wo's true → fixed map like f2/j2/ch
  cityScale: 0.31,     // ~viewW/720 (build-world convention; f2 uses 0.35 @ 252)
  cities,
  neighborLabels,
  mainFill: '#E8DDC8',
  // Highlight Italy (fill + outer border); drop woMap's inherited France
  // countryFill + region statePaths. France was woMap's main country (not in
  // landIslands), so re-add its path to landIslands or it paints as bare sea.
  countryFill: italyFill,
  mainPath: italyFill,
  statePaths,
  landIslands: [...woMap.landIslands, woMap.countryFill],
};
