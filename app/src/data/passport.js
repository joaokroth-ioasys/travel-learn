// Static passport data: stamp metadata and per-country booklet "chrome".
// Pure data — no logic. Rendered by PassportTab.

// Real IATA codes + short descriptors shown inside each stamp
export const STAMP_META = {
  // Germany
  frankfurt: { code: 'FRA', sub: 'Am Main' },
  stuttgart: { code: 'STR', sub: 'Württemberg' },
  munich:    { code: 'MUC', sub: 'Freistaat Bayern' },
  berlin:    { code: 'BER', sub: 'Hauptstadt' },
  hamburg:   { code: 'HAM', sub: 'Hansestadt' },
  cologne:   { code: 'CGN', sub: 'Am Rhein' },
  dresden:   { code: 'DRS', sub: 'Elbflorenz' },
  nuremberg: { code: 'NUE', sub: 'Altstadt' },
  vienna:    { code: 'VIE', sub: 'Österreich' },
  zurich:    { code: 'ZRH', sub: 'Schweiz' },
  // France (+ related cities)
  paris:      { code: 'CDG', sub: 'Île-de-France' },
  strasbourg: { code: 'SXB', sub: 'Grand Est' },
  lyon:       { code: 'LYS', sub: 'Gastronomie' },
  nice:       { code: 'NCE', sub: "Côte d'Azur" },
  marseille:  { code: 'MRS', sub: 'Provence' },
  toulouse:   { code: 'TLS', sub: 'Ville Rose' },
  bordeaux:   { code: 'BOD', sub: 'Vignobles' },
  nantes:     { code: 'NTE', sub: 'Pays de la Loire' },
  lille:      { code: 'LIL', sub: 'Hauts-de-France' },
  brussels:   { code: 'BRU', sub: 'Belgique' },
  // Chile
  santiago:   { code: 'SCL', sub: 'Región Metropolitana' },
  valparaiso: { code: 'VAP', sub: 'Patrimonio' },
  atacama:    { code: 'CJC', sub: 'Desierto' },
  rapanui:    { code: 'IPC', sub: 'Isla de Pascua' },
  loslagos:   { code: 'PMC', sub: 'Los Lagos' },
  paine:      { code: 'PNT', sub: 'Patagonia' },
  // Japan
  tokyo:      { code: 'HND', sub: '東京 · Kantō' },
  hakone:     { code: 'ODA', sub: '箱根 · Fuji' },
  kyoto:      { code: 'UKY', sub: '京都 · Kansai' },
  osaka:      { code: 'KIX', sub: '大阪 · Kansai' },
  hiroshima:  { code: 'HIJ', sub: '広島' },
  okinawa:    { code: 'OKA', sub: '沖縄 · Naha' },
}

// Per-country passport "chrome" — the static text on the booklet.
export const PASSPORTS = {
  d2: {
    name: 'Deutschland',
    eu: 'EUROPÄISCHE UNION',
    emblem: '🦅',
    coverType: 'REISEPASS',
    bearerLabel: 'Inhaber / Bearer',
    citiesLabel: 'Städte / Cities',
    capitalLabel: 'Hauptstadt / Capital',
    capital: 'Berlin',
    mottoLabel: 'Wahlspruch / Motto',
    motto: 'Einigkeit und Recht und Freiheit',
    stampsLabel: 'VISA / EINREISESTEMPEL',
    mrz: 'DEU',
    // Decorative national stamps — pure flavour, not progress.
    deco: [
      { icon: '🦅', label: 'Bundesadler' },
      { icon: '🍺', label: 'Oktoberfest' },
      { icon: '🥨', label: 'Brezel' },
      { icon: '🏰', label: 'Neuschwanstein' },
      { icon: '🎼', label: 'Beethoven' },
      { icon: '🌲', label: 'Schwarzwald' },
    ],
    completeText: '🎉 Journey Complete!',
    completeSub: 'Alle Städte gestempelt! Herzlichen Glückwunsch!',
  },
  f2: {
    name: 'France',
    img: 'fr',   // reuses /passport/fr-flag.png + fr-stamp.png + fr/ city stamps
    eu: 'UNION EUROPÉENNE',
    emblem: '⚜️',
    coverType: 'PASSEPORT',
    bearerLabel: 'Titulaire / Bearer',
    citiesLabel: 'Villes / Cities',
    capitalLabel: 'Capitale / Capital',
    capital: 'Paris',
    mottoLabel: 'Devise / Motto',
    motto: 'Liberté, Égalité, Fraternité',
    stampsLabel: "VISA / TAMPONS D'ENTRÉE",
    mrz: 'FRA',
    deco: [
      { icon: '⚜️', label: 'Fleur de lys' },
      { icon: '🗼', label: 'Tour Eiffel' },
      { icon: '🥐', label: 'Croissant' },
      { icon: '🍷', label: 'Vin' },
      { icon: '🧀', label: 'Fromage' },
      { icon: '🎨', label: 'Beaux-Arts' },
    ],
    completeText: '🎉 Voyage Terminé !',
    completeSub: 'Toutes les villes tamponnées ! Félicitations !',
  },
  c2: {
    name: 'Chile',
    img: 'cl',   // loads /passport/cl-flag.png + cl-stamp.png (kept from the old cl pack)
    eu: 'REPÚBLICA DE CHILE',
    emblem: '⭐',
    coverType: 'PASAPORTE',
    bearerLabel: 'Titular / Bearer',
    citiesLabel: 'Ciudades / Cities',
    capitalLabel: 'Capital / Capital',
    capital: 'Santiago',
    mottoLabel: 'Lema / Motto',
    motto: 'Por la razón o la fuerza',
    stampsLabel: 'VISA / SELLOS DE ENTRADA',
    mrz: 'CHL',
    deco: [
      { icon: '⭐', label: 'La Estrella Solitaria' },
      { icon: '🗿', label: 'Moái' },
      { icon: '🏔️', label: 'Los Andes' },
      { icon: '🍷', label: 'Vino' },
      { icon: '🌋', label: 'Volcanes' },
      { icon: '🐧', label: 'Patagonia' },
    ],
    completeText: '🎉 ¡Viaje Completado!',
    completeSub: '¡Todas las ciudades selladas! ¡Felicitaciones!',
  },
  j2: {
    name: 'Japan',
    img: 'jp',   // loads /passport/jp-flag.png + jp-stamp.png (kept from the old jp pack)
    eu: 'NATION OF JAPAN',
    emblem: '🏵️',
    coverType: '旅券',
    bearerLabel: '所持人 / Bearer',
    citiesLabel: '都市 / Cities',
    capitalLabel: '首都 / Capital',
    capital: 'Tokyo',
    mottoLabel: '標語 / Motto',
    motto: '和 — Harmony',
    stampsLabel: 'VISA / 入国スタンプ',
    mrz: 'JPN',
    deco: [
      { icon: '🏵️', label: '菊の御紋' },
      { icon: '🗻', label: '富士山' },
      { icon: '⛩️', label: '鳥居' },
      { icon: '🍣', label: '寿司' },
      { icon: '🏯', label: '城' },
      { icon: '🍵', label: '抹茶' },
    ],
    completeText: '🎉 旅 完了！ Journey Complete!',
    completeSub: 'すべての都市にスタンプ！おめでとうございます！',
  },
}

// Cities that have a real cropped stamp / flag image in /public/passport.
// Others (Wien, Zürich, Bruxelles — not in the national stamp sheets) keep their emoji.
export const STAMPED_IMG = {
  d2: new Set(['frankfurt', 'stuttgart', 'munich', 'berlin', 'hamburg', 'cologne', 'dresden', 'nuremberg']),
  fr: new Set(['paris', 'strasbourg', 'lyon', 'nice', 'marseille', 'toulouse', 'bordeaux', 'nantes', 'lille']),
}
