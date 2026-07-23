import { createContext, useContext, createElement } from 'react';

// Per-journey UI language for the shared chrome (buttons, labels, nav, feedback).
// Content (vocab, phrases, quizzes) is translated in the journey packs themselves;
// this only covers the strings hardcoded in components. A journey opts into a
// language via `uiLang` on its labels (see journeys/*/labels.js); default 'en'.
//
// ponytail: two languages, flat dict, string ids. If a third UI language shows
// up, swap this for a real i18n lib (react-intl / i18next) rather than growing
// the object.

const en = {
  // ── bottom nav (App) ──
  navMap: 'Map',
  navCityLife: 'City Life',
  navPassport: 'Passport',
  navReview: 'Review',

  // ── LessonView ──
  next: 'Next →',
  submit: 'Submit',
  typeAnswer: 'Type your answer…',
  hint: (h) => `Hint: ${h}`,
  correctFeedback: (c) => `Correct! "${c}" is right.`,
  wrongFeedback: (c) => `Not quite. The answer is "${c}".`,
  lessonComplete: 'Lesson Complete!',
  backToCity: (c) => `Back to ${c}`,
  lessonNotFound: 'Lesson not found',
  lessonNotFoundBody: (id) => `The lesson "${id}" could not be located.`,
  goBack: 'Go back',
  unknownStep: (t) => `Unknown step type: ${t}`,
  cityDefaultMessage: 'Ausgezeichnet!', // fallback completion cheer (see CITY_MESSAGES)
  goBackAria: 'Go back',

  // ── RouteJourney ──
  stopOf: (n, total) => `Stop ${n} of ${total}`,
  stopsExplored: (done, total) => `${done}/${total} stops explored`,
  routeComplete: (city, lang) =>
    `🎉 ${city} complete! You've travelled the whole city — and picked up some ${lang} along the way.`,
  phrasesTitle: 'Phrases to use here',
  tryAgain: 'Not quite — try again.',
  reviewLesson: (lang) => `✓ Review the ${lang} lesson`,
  learnLesson: (lang) => `→ Learn the ${lang} for this stop`,
  previous: '← Previous',
  solveToContinue: 'Solve to continue',
  nextStop: 'Next stop →',
  seeOnMap: 'See it on the map',
  stopN: (n) => `Stop ${n}`,
  routeAria: (city) => `${city} route`,
  stopAria: (n, name, suffix) => `Stop ${n}: ${name}${suffix}`,
  stopExploredSuffix: ', explored',
  stopLockedSuffix: ', locked',
  favRemove: 'Remove from favourites',
  favSave: 'Save to favourites',

  // ── CityPage ──
  backToMap: 'Back to Map',
  backToMapAria: 'Back to map',
  cityNotFound: 'City not found.',
  whatYoullLearn: "What you'll learn",
  vocabulary: 'Vocabulary',
  grammar: 'Grammar',
  noTopics: 'No topics listed yet.',
  noGrammar: 'No grammar topic listed yet.',
  lessons: 'Lessons',
  badgeComplete: '✓ Complete',
  badgeContinue: '▶ Continue',
  badgeStart: '→ Start',
  grammarCheatsheet: 'Grammar Cheatsheet',
  cheatsheetNote: (city) => `Reference for all grammar covered in ${city}.`,
  statusCompleted: 'Completed',
  statusInProgress: 'In progress',
  statusNotStarted: 'Not started',

  // ── MapScreen ──
  journeyComplete: 'Journey complete 🎉',
  nextCity: (name) => `Next city: ${name}`,
  lessonsCompleted: (done, total) => `${done} of ${total} lessons completed`,
  journeyMapAria: 'Journey map',

  // ── CityLife ──
  cityMapBack: '← City map',
  cityLifeTitle: 'City Life',
  cityLifeSub: "Tap a place and walk through what you'd actually do there",
  placesExplored: (done, total) => `${done} / ${total} places explored`,
  cityExplored: 'City explored! 🏆',
  clNext: (name) => `Next: ${name}`,
  savedPhrasesBtn: (n) => `♥ Saved phrases (${n})`,
  placesCollectedAria: 'Places collected',
  masteredSuffix: ' · mastered',
  exploredSuffix: ' · explored',
  cityLifeComingSoon: 'City Life is coming soon for this country. 🗺️',

  // ── SavedPhrases ──
  savedPhrasesTitle: 'Saved phrases',
  savedPhrasesSub: (lang) => `Your hearted ${lang} lines — tap to check yourself`,
  savedPhrasesEmpty: 'Heart a phrase in any place to save it here. ♥',
  tapToReveal: 'tap to reveal',

  // ── CoachMarks ──
  coachFlagTitle: 'Tap the flag',
  coachFlagBody: 'Switch to another journey (country) anytime.',
  coachCityLifeTitle: '🏙️ City Life',
  coachCityLifeBody: 'Practice real-life city scenes and everyday local situations.',
  coachPassportTitle: '🛂 Passport',
  coachPassportBody: 'Collect a stamp for every city you complete.',
  coachDismiss: 'Tap anywhere to continue',

  // ── ReviewTab ──
  allCaughtUp: 'All caught up!',
  nextCardIn: (label) => `Next card in ${label}`,
  noCardsScheduled: 'No cards scheduled yet.',
  totalCards: (n) => `${n} total cards`,
  filterAll: 'All',
  dueBadge: (n) => `${n} due`,
  cardsTotal: (n) => `${n} cards total`,
  cardBackAria: 'Card back',
  tapToRevealAria: 'Tap to reveal',
  again: 'Again',
  gotIt: 'Got it',
  tapToFlip: 'Tap the card to flip',

  // ── PassportTab ──
  tierGold: 'Gold — mastered',
  tierSilver: 'Silver',
  tierBronze: 'Bronze',
  worldStamps: (n, total) => `${n} / ${total} stamps`,
  countriesComplete: (n) => ` · ${n} ${n === 1 ? 'country' : 'countries'} complete`,
  activeJourneyTitle: 'Your active journey',
  openPassportAria: (name) => `Open ${name} passport`,
  tapToOpen: 'Tap to open',
  closePassport: 'Close passport',
  languageTraveller: 'Language Traveller',
  turnPageAria: (name) => `Turn page to ${name} passport`,
  nextPassport: 'Next passport',
  citiesStamped: (n, total) => `${n} / ${total} cities stamped`,
  almostThere: (city, done, total) => `Almost there: ${city} (${done}/${total})`,
  achievements: (earned, total) => `Achievements · ${earned}/${total}`,
  close: 'Close',
  stampedDate: (date) => `Stamped ${date}`,
  lessonsComplete: (done, total) => `${done}/${total} lessons complete`,
  reviewCity: (city) => `Review ${city} →`,
  rePracticeGold: 'Re-practice for gold →',
  goToCity: (city) => `Go to ${city} →`,
};

const pt = {
  // ── bottom nav (App) ──
  navMap: 'Mapa',
  navCityLife: 'Cidade',
  navPassport: 'Passaporte',
  navReview: 'Revisão',

  // ── LessonView ──
  next: 'Próximo →',
  submit: 'Enviar',
  typeAnswer: 'Digite sua resposta…',
  hint: (h) => `Dica: ${h}`,
  correctFeedback: (c) => `Correto! "${c}" está certo.`,
  wrongFeedback: (c) => `Não é bem isso. A resposta é "${c}".`,
  lessonComplete: 'Lição concluída!',
  backToCity: (c) => `Voltar para ${c}`,
  lessonNotFound: 'Lição não encontrada',
  lessonNotFoundBody: (id) => `A lição "${id}" não pôde ser localizada.`,
  goBack: 'Voltar',
  unknownStep: (t) => `Tipo de passo desconhecido: ${t}`,
  cityDefaultMessage: 'Excelente!',
  goBackAria: 'Voltar',

  // ── RouteJourney ──
  stopOf: (n, total) => `Parada ${n} de ${total}`,
  stopsExplored: (done, total) => `${done}/${total} paradas exploradas`,
  routeComplete: (city, lang) =>
    `🎉 ${city} concluída! Você percorreu a cidade inteira e aprendeu um pouco de ${lang} pelo caminho.`,
  phrasesTitle: 'Frases para usar aqui',
  tryAgain: 'Não é bem isso — tente de novo.',
  reviewLesson: (lang) => `✓ Revisar a lição de ${lang}`,
  learnLesson: (lang) => `→ Aprenda o ${lang} desta parada`,
  previous: '← Anterior',
  solveToContinue: 'Resolva para continuar',
  nextStop: 'Próxima parada →',
  seeOnMap: 'Veja no mapa',
  stopN: (n) => `Parada ${n}`,
  routeAria: (city) => `rota de ${city}`,
  stopAria: (n, name, suffix) => `Parada ${n}: ${name}${suffix}`,
  stopExploredSuffix: ', explorada',
  stopLockedSuffix: ', bloqueada',
  favRemove: 'Remover dos favoritos',
  favSave: 'Salvar nos favoritos',

  // ── CityPage ──
  backToMap: 'Voltar ao mapa',
  backToMapAria: 'Voltar ao mapa',
  cityNotFound: 'Cidade não encontrada.',
  whatYoullLearn: 'O que você vai aprender',
  vocabulary: 'Vocabulário',
  grammar: 'Gramática',
  noTopics: 'Nenhum tópico listado ainda.',
  noGrammar: 'Nenhum tópico de gramática listado ainda.',
  lessons: 'Lições',
  badgeComplete: '✓ Concluída',
  badgeContinue: '▶ Continuar',
  badgeStart: '→ Começar',
  grammarCheatsheet: 'Resumo de gramática',
  cheatsheetNote: (city) => `Referência de toda a gramática vista em ${city}.`,
  statusCompleted: 'Concluída',
  statusInProgress: 'Em andamento',
  statusNotStarted: 'Não iniciada',

  // ── MapScreen ──
  journeyComplete: 'Viagem concluída 🎉',
  nextCity: (name) => `Próxima cidade: ${name}`,
  lessonsCompleted: (done, total) => `${done} de ${total} lições concluídas`,
  journeyMapAria: 'Mapa da viagem',

  // ── CityLife ──
  cityMapBack: '← Mapa da cidade',
  cityLifeTitle: 'Vida na cidade',
  cityLifeSub: 'Toque em um lugar e percorra o que você realmente faria lá',
  placesExplored: (done, total) => `${done} / ${total} lugares explorados`,
  cityExplored: 'Cidade explorada! 🏆',
  clNext: (name) => `Próximo: ${name}`,
  savedPhrasesBtn: (n) => `♥ Frases salvas (${n})`,
  placesCollectedAria: 'Lugares coletados',
  masteredSuffix: ' · dominado',
  exploredSuffix: ' · explorado',
  cityLifeComingSoon: 'A Vida na cidade chega em breve para este país. 🗺️',

  // ── SavedPhrases ──
  savedPhrasesTitle: 'Frases salvas',
  savedPhrasesSub: (lang) => `Suas frases de ${lang} favoritas — toque para se testar`,
  savedPhrasesEmpty: 'Marque uma frase com ♥ em qualquer lugar para salvá-la aqui.',
  tapToReveal: 'toque para revelar',

  // ── CoachMarks ──
  coachFlagTitle: 'Toque na bandeira',
  coachFlagBody: 'Troque de viagem (país) a qualquer momento.',
  coachCityLifeTitle: '🏙️ Vida na cidade',
  coachCityLifeBody: 'Pratique cenas reais da cidade e situações do dia a dia.',
  coachPassportTitle: '🛂 Passaporte',
  coachPassportBody: 'Ganhe um carimbo para cada cidade que você concluir.',
  coachDismiss: 'Toque em qualquer lugar para continuar',

  // ── ReviewTab ──
  allCaughtUp: 'Tudo em dia!',
  nextCardIn: (label) => `Próxima carta em ${label}`,
  noCardsScheduled: 'Nenhuma carta agendada ainda.',
  totalCards: (n) => `${n} cartas no total`,
  filterAll: 'Todas',
  dueBadge: (n) => `${n} pendentes`,
  cardsTotal: (n) => `${n} cartas no total`,
  cardBackAria: 'Verso da carta',
  tapToRevealAria: 'Toque para revelar',
  again: 'De novo',
  gotIt: 'Acertei',
  tapToFlip: 'Toque na carta para virar',

  // ── PassportTab ──
  tierGold: 'Ouro — dominado',
  tierSilver: 'Prata',
  tierBronze: 'Bronze',
  worldStamps: (n, total) => `${n} / ${total} carimbos`,
  countriesComplete: (n) => ` · ${n} ${n === 1 ? 'país' : 'países'} completo${n === 1 ? '' : 's'}`,
  activeJourneyTitle: 'Sua viagem ativa',
  openPassportAria: (name) => `Abrir passaporte de ${name}`,
  tapToOpen: 'Toque para abrir',
  closePassport: 'Fechar passaporte',
  languageTraveller: 'Viajante de Idiomas',
  turnPageAria: (name) => `Virar para o passaporte de ${name}`,
  nextPassport: 'Próximo passaporte',
  citiesStamped: (n, total) => `${n} / ${total} cidades carimbadas`,
  almostThere: (city, done, total) => `Quase lá: ${city} (${done}/${total})`,
  achievements: (earned, total) => `Conquistas · ${earned}/${total}`,
  close: 'Fechar',
  stampedDate: (date) => `Carimbado em ${date}`,
  lessonsComplete: (done, total) => `${done}/${total} lições concluídas`,
  reviewCity: (city) => `Revisar ${city} →`,
  rePracticeGold: 'Treinar de novo pelo ouro →',
  goToCity: (city) => `Ir para ${city} →`,
};

export const STRINGS = { en, pt };

const UiContext = createContext(en);
const LangContext = createContext('en');

export function UiProvider({ lang, children }) {
  const code = STRINGS[lang] ? lang : 'en';
  return createElement(
    LangContext.Provider,
    { value: code },
    createElement(UiContext.Provider, { value: STRINGS[code] }, children),
  );
}

export function useUi() {
  return useContext(UiContext);
}

// Active base/native language code ('en' | 'pt'), for picking translated content fields.
export function useLang() {
  return useContext(LangContext);
}

// Pick the pt field when the base language is Portuguese and it exists, else the English field.
export const pickLang = (lang, en, pt) => (lang === 'pt' && pt != null ? pt : en);
