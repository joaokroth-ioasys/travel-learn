// Monde-only cities: four European capitals/cities that belong to no language
// journey of their own. Same city shape as the language journeys (see
// de/content.js Luxembourg). Phrases use the local-language key (nl/da/es/hu)
// so RouteJourney renders them; English follows in `en`.
const extras = [
  // ─────────────────────────────  AMSTERDAM  ─────────────────────────────
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    tagline: 'Welkom in Amsterdam!',
    theme: 'Canals & Bikes',
    accentColor: '#E8792B',
    icon: '🚲',
    description:
      'Amsterdam is de hoofdstad van Nederland, gebouwd rond een waaier van grachten ' +
      'uit de Gouden Eeuw. De stad leeft op de fiets: langs smalle gevels, over bruggen ' +
      'en langs het water rijden Amsterdammers naar hun werk, de markt en het museum.',
    descriptionEn:
      'Amsterdam is the capital of the Netherlands, built around a fan of Golden Age canals. ' +
      'The city lives on the bicycle: past narrow gabled houses, over bridges and along the ' +
      'water, Amsterdammers ride to work, to the market and to the museum.',
    photos: [
      { wikiTitle: 'Amsterdam', alt: 'Amsterdam canal houses', caption: 'De grachten en gevels van Amsterdam' },
      { wikiTitle: 'Rijksmuseum', alt: 'Rijksmuseum building', caption: 'Het Rijksmuseum, schatkamer van de Gouden Eeuw' },
      { wikiTitle: 'Canals of Amsterdam', alt: 'Amsterdam canal at dusk', caption: 'Een gracht in de avond' },
    ],
    vocabTopics: ['Cycling & getting around', 'Canals & the old town', 'Ordering in a café'],
    grammarTopic: 'Definite articles (de / het)',
    lessons: [
      {
        id: 'amsterdam-1',
        title: 'On Two Wheels',
        description: 'Arriving and finding your way through the city by bike.',
        steps: [
          { type: 'vocab', word: 'de fiets', article: 'de', english: 'the bicycle', example: 'Ik huur een fiets bij het station.' },
          { type: 'vocab', word: 'de gracht', article: 'de', english: 'the canal', example: 'De gracht is heel oud.' },
          { type: 'vocab', word: 'de brug', article: 'de', english: 'the bridge', example: 'Fiets over de brug.' },
          { type: 'vocab', word: 'het station', article: 'het', english: 'the station', example: 'Het station is dichtbij.' },
          { type: 'vocab', word: 'rechtdoor', article: null, english: 'straight ahead', example: 'Ga rechtdoor en dan links.' },
          { type: 'grammar', title: 'The articles de and het', explanation: 'Dutch has two definite articles. Most nouns take "de"; a smaller group of neuter nouns takes "het". You learn each noun together with its article.', examples: ['de fiets (the bike)', 'het station (the station)', 'de gracht (the canal)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "station"?', options: ['de', 'het', 'een', 'la'], correct: 'het' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ga ___ en dan links. (straight ahead)', correct: 'rechtdoor' },
        ],
      },
      {
        id: 'amsterdam-2',
        title: 'At the Café',
        description: 'Ordering a coffee and a bite along the canal.',
        steps: [
          { type: 'vocab', word: 'de koffie', article: 'de', english: 'the coffee', example: 'Een koffie, alstublieft.' },
          { type: 'vocab', word: 'het water', article: 'het', english: 'the water', example: 'Mag ik een glas water?' },
          { type: 'vocab', word: 'de rekening', article: 'de', english: 'the bill', example: 'De rekening, graag.' },
          { type: 'vocab', word: 'alstublieft', article: null, english: 'please / here you go', example: 'Twee koffie, alstublieft.' },
          { type: 'vocab', word: 'dank je wel', article: null, english: 'thank you', example: 'Dank je wel!' },
          { type: 'grammar', title: 'Polite requests with "mag ik"', explanation: '"Mag ik…?" (may I…?) is the everyday polite way to order or ask for something, followed by the thing you want.', examples: ['Mag ik een koffie?', 'Mag ik de rekening?', 'Mag ik een glas water?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you" in Dutch?', options: ['alstublieft', 'dank je wel', 'rechtdoor', 'de rekening'], correct: 'dank je wel' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ ik een koffie? (may I)', correct: 'Mag' },
        ],
      },
    ],
    places: [
      {
        id: 'ams-centraal', name: 'Amsterdam Centraal', icon: '🚉',
        coords: [52.3791, 4.9003], wikiTitle: 'Amsterdam Centraal station',
        narrative: 'Your train glides into Amsterdam Centraal, a grand brick station on the waterfront. Outside, thousands of bicycles are parked in racks that stretch as far as you can see.',
        phrases: [
          { nl: 'Waar kan ik een fiets huren?', en: 'Where can I rent a bike?' },
          { nl: 'Hoe kom ik in het centrum?', en: 'How do I get to the centre?' },
          { nl: 'Is het ver?', en: 'Is it far?' },
        ],
        lessonId: 'amsterdam-1',
        quiz: {
          question: 'What is the main way locals get around central Amsterdam?',
          options: ['by bicycle', 'by car', 'by cable car'],
          correct: 'by bicycle',
          explanation: 'Amsterdam is one of the most bicycle-friendly cities in the world.',
        },
      },
      {
        id: 'ams-canals', name: 'De Grachtengordel', icon: '🚤',
        coords: [52.3667, 4.8845], wikiTitle: 'Canals of Amsterdam',
        narrative: 'You cycle into the Grachtengordel, the ring of 17th-century canals that give the city its shape. Narrow houses lean gently over the water, each with a hook at the top for hoisting furniture.',
        phrases: [
          { nl: 'Wat een mooie grachten!', en: 'What beautiful canals!' },
          { nl: 'Fiets over de brug.', en: 'Cycle over the bridge.' },
        ],
        quiz: {
          question: 'The Amsterdam canal ring dates mainly from which century?',
          options: ['the 17th century', 'the 20th century', 'the 12th century'],
          correct: 'the 17th century',
          explanation: 'The Grachtengordel was dug during the Dutch Golden Age in the 1600s and is a UNESCO World Heritage site.',
        },
      },
      {
        id: 'ams-rijksmuseum', name: 'Rijksmuseum', icon: '🖼️',
        coords: [52.3600, 4.8852], wikiTitle: 'Rijksmuseum',
        narrative: 'At Museumplein you reach the Rijksmuseum, the national museum. Inside hangs Rembrandt\'s enormous "Night Watch", the crowd hushed in front of it.',
        phrases: [
          { nl: 'Waar is de Nachtwacht?', en: 'Where is the Night Watch?' },
          { nl: 'Een kaartje, alstublieft.', en: 'One ticket, please.' },
        ],
        lessonId: 'amsterdam-2',
        quiz: {
          question: 'Which famous painting hangs in the Rijksmuseum?',
          options: ['The Night Watch', 'The Mona Lisa', 'The Scream'],
          correct: 'The Night Watch',
          explanation: 'Rembrandt\'s "De Nachtwacht" (The Night Watch) is the Rijksmuseum\'s most famous work.',
        },
      },
      {
        id: 'ams-vondelpark', name: 'Vondelpark', icon: '🌳',
        coords: [52.3580, 4.8686], wikiTitle: 'Vondelpark',
        narrative: 'You end the day in the Vondelpark, the city\'s green heart, where locals picnic, jog and cycle between the ponds under old plane trees.',
        phrases: [
          { nl: 'Zullen we in het park zitten?', en: 'Shall we sit in the park?' },
          { nl: 'Dank je wel voor vandaag.', en: 'Thank you for today.' },
        ],
        quiz: {
          question: 'The Vondelpark is Amsterdam\'s best-known…?',
          options: ['city park', 'train station', 'harbour'],
          correct: 'city park',
          explanation: 'The Vondelpark is the most famous public park in Amsterdam.',
        },
      },
    ],
  },

  // ─────────────────────────────  COPENHAGEN  ────────────────────────────
  {
    id: 'copenhagen',
    name: 'København',
    tagline: 'Velkommen til København!',
    theme: 'Harbour & Design',
    accentColor: '#C8102E',
    icon: '🧜',
    description:
      'København er Danmarks hovedstad, en havneby af farvede huse, cykelstier og hygge. ' +
      'Fra den gamle havn Nyhavn til de kongelige slotte og den lille havfrue ved vandet ' +
      'er byen let at gå og cykle rundt i.',
    descriptionEn:
      'Copenhagen is the capital of Denmark, a harbour city of coloured houses, cycle paths ' +
      'and hygge. From the old harbour of Nyhavn to the royal palaces and the Little Mermaid ' +
      'by the water, the city is easy to walk and cycle around.',
    photos: [
      { wikiTitle: 'Copenhagen', alt: 'Copenhagen skyline', caption: 'København, en by ved vandet' },
      { wikiTitle: 'Nyhavn', alt: 'Nyhavn coloured houses', caption: 'Nyhavn med sine farverige huse' },
      { wikiTitle: 'The Little Mermaid (statue)', alt: 'The Little Mermaid statue', caption: 'Den lille havfrue ved havnen' },
    ],
    vocabTopics: ['Greetings & courtesy', 'By the harbour', 'Hygge & the café'],
    grammarTopic: 'Common vs. neuter gender (en / et)',
    lessons: [
      {
        id: 'copenhagen-1',
        title: 'First Words',
        description: 'Greetings and getting oriented in the harbour city.',
        steps: [
          { type: 'vocab', word: 'en havn', article: 'en', english: 'a harbour', example: 'København er en gammel havn.' },
          { type: 'vocab', word: 'et hus', article: 'et', english: 'a house', example: 'Et hus i Nyhavn er meget farverigt.' },
          { type: 'vocab', word: 'en cykel', article: 'en', english: 'a bicycle', example: 'Jeg tager en cykel til byen.' },
          { type: 'vocab', word: 'tak', article: null, english: 'thank you', example: 'Tak for hjælpen.' },
          { type: 'vocab', word: 'undskyld', article: null, english: 'excuse me / sorry', example: 'Undskyld, hvor er havnen?' },
          { type: 'grammar', title: 'The two genders: en and et', explanation: 'Danish nouns are either common gender (en) or neuter (et). About 75% take "en". The indefinite article comes before the noun, like English "a".', examples: ['en havn (a harbour)', 'et hus (a house)', 'en cykel (a bicycle)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "hus"?', options: ['en', 'et', 'de', 'la'], correct: 'et' },
          { type: 'exercise', subtype: 'fill-blank', question: '___, hvor er havnen? (excuse me)', correct: 'Undskyld' },
        ],
      },
      {
        id: 'copenhagen-2',
        title: 'A Little Hygge',
        description: 'Coffee, candlelight and cosiness by the water.',
        steps: [
          { type: 'vocab', word: 'en kaffe', article: 'en', english: 'a coffee', example: 'Må jeg bede om en kaffe?' },
          { type: 'vocab', word: 'et bord', article: 'et', english: 'a table', example: 'Et bord til to, tak.' },
          { type: 'vocab', word: 'hyggelig', article: null, english: 'cosy / pleasant', example: 'Caféen er meget hyggelig.' },
          { type: 'vocab', word: 'regningen', article: null, english: 'the bill', example: 'Må jeg bede om regningen?' },
          { type: 'vocab', word: 'skål', article: null, english: 'cheers', example: 'Skål!' },
          { type: 'grammar', title: 'Polite requests: "Må jeg bede om…"', explanation: '"Må jeg bede om…?" (literally "may I ask for…?") is the standard polite way to order in a café or restaurant.', examples: ['Må jeg bede om en kaffe?', 'Må jeg bede om et bord?', 'Må jeg bede om regningen?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "hyggelig" describe?', options: ['cosy / pleasant', 'expensive', 'far away'], correct: 'cosy / pleasant' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Må jeg bede om ___? (the bill)', correct: 'regningen' },
        ],
      },
    ],
    places: [
      {
        id: 'cph-hovedbanegard', name: 'København H', icon: '🚉',
        coords: [55.6725, 12.5641], wikiTitle: 'Copenhagen Central Station',
        narrative: 'You arrive at København H, the central station, its great wooden roof arching overhead. Just outside, the lights of Tivoli glow across the street.',
        phrases: [
          { da: 'Hvor er udgangen?', en: 'Where is the exit?' },
          { da: 'Hvor kan jeg leje en cykel?', en: 'Where can I rent a bicycle?' },
          { da: 'Er det langt?', en: 'Is it far?' },
        ],
        lessonId: 'copenhagen-1',
        quiz: {
          question: 'What glows just across the street from Copenhagen Central Station?',
          options: ['Tivoli Gardens', 'the airport', 'a castle'],
          correct: 'Tivoli Gardens',
          explanation: 'Tivoli Gardens, one of the world\'s oldest amusement parks, sits right by København H.',
        },
      },
      {
        id: 'cph-nyhavn', name: 'Nyhavn', icon: '⛵',
        coords: [55.6797, 12.5910], wikiTitle: 'Nyhavn',
        narrative: 'You walk to Nyhavn, the old harbour lined with tall, brightly painted houses and wooden ships. Cafés spill onto the quay where sailors once drank.',
        phrases: [
          { da: 'Hvor er havnen?', en: 'Where is the harbour?' },
          { da: 'Husene er så farverige!', en: 'The houses are so colourful!' },
        ],
        lessonId: 'copenhagen-2',
        quiz: {
          question: 'Nyhavn is best known for its rows of…?',
          options: ['brightly coloured houses', 'skyscrapers', 'windmills'],
          correct: 'brightly coloured houses',
          explanation: 'Nyhavn\'s colourful 17th- and 18th-century townhouses are Copenhagen\'s postcard image.',
        },
      },
      {
        id: 'cph-havfrue', name: 'Den lille havfrue', icon: '🧜',
        coords: [55.6929, 12.5993], wikiTitle: 'The Little Mermaid (statue)',
        narrative: 'Along the water at Langelinie you find Den lille havfrue, the small bronze mermaid gazing out to sea — inspired by Hans Christian Andersen\'s fairy tale.',
        phrases: [
          { da: 'Hvor er den lille havfrue?', en: 'Where is the Little Mermaid?' },
          { da: 'Må jeg tage et billede?', en: 'May I take a photo?' },
        ],
        quiz: {
          question: 'The Little Mermaid statue is based on a tale by which author?',
          options: ['Hans Christian Andersen', 'the Brothers Grimm', 'Astrid Lindgren'],
          correct: 'Hans Christian Andersen',
          explanation: 'The statue depicts the mermaid from Hans Christian Andersen\'s fairy tale.',
        },
      },
      {
        id: 'cph-tivoli', name: 'Tivoli', icon: '🎡',
        coords: [55.6737, 12.5681], wikiTitle: 'Tivoli Gardens',
        narrative: 'You end the evening in Tivoli, a garden of lanterns, rides and music that opened in 1843. Said to have charmed Walt Disney, it is pure hygge after dark.',
        phrases: [
          { da: 'En billet, tak.', en: 'One ticket, please.' },
          { da: 'Her er meget hyggeligt.', en: 'It is very cosy here.' },
        ],
        quiz: {
          question: 'Tivoli Gardens is famous as one of the world\'s oldest…?',
          options: ['amusement parks', 'universities', 'zoos'],
          correct: 'amusement parks',
          explanation: 'Tivoli, opened in 1843, is among the oldest amusement parks still operating.',
        },
      },
    ],
  },

  // ─────────────────────────────  BUDAPEST  ──────────────────────────────
  {
    id: 'budapest',
    name: 'Budapest',
    tagline: 'Üdvözöljük Budapesten!',
    theme: 'River & Thermal Baths',
    accentColor: '#477050',
    icon: '♨️',
    description:
      'Budapest Magyarország fővárosa, a Duna két partján: a dombos Buda a várral és a lapos ' +
      'Pest a nagy körutakkal. A várost hidak kötik össze, és a föld alól meleg gyógyvíz tör fel ' +
      'a híres fürdőkbe.',
    descriptionEn:
      'Budapest is the capital of Hungary, straddling the two banks of the Danube: hilly Buda ' +
      'with its castle and flat Pest with its grand boulevards. Bridges tie the city together, ' +
      'and warm thermal water rises from underground into its famous baths.',
    photos: [
      { wikiTitle: 'Budapest', alt: 'Budapest and the Danube', caption: 'Budapest a Duna két partján' },
      { wikiTitle: 'Hungarian Parliament Building', alt: 'Hungarian Parliament Building', caption: 'Az Országház a pesti parton' },
      { wikiTitle: 'Széchenyi Medicinal Bath', alt: 'Széchenyi thermal bath', caption: 'A Széchenyi gyógyfürdő' },
    ],
    vocabTopics: ['Greetings & courtesy', 'By the river & bridges', 'At the thermal bath'],
    grammarTopic: 'Vowel harmony in endings',
    lessons: [
      {
        id: 'budapest-1',
        title: 'Across the Danube',
        description: 'Greetings and crossing between Buda and Pest.',
        steps: [
          { type: 'vocab', word: 'a folyó', article: null, english: 'the river', example: 'A Duna egy nagy folyó.' },
          { type: 'vocab', word: 'a híd', article: null, english: 'the bridge', example: 'A híd összeköti Budát és Pestet.' },
          { type: 'vocab', word: 'a vár', article: null, english: 'the castle', example: 'A vár a dombon áll.' },
          { type: 'vocab', word: 'köszönöm', article: null, english: 'thank you', example: 'Köszönöm szépen.' },
          { type: 'vocab', word: 'jó napot', article: null, english: 'good day (hello)', example: 'Jó napot kívánok!' },
          { type: 'grammar', title: 'Vowel harmony', explanation: 'Hungarian suffixes come in back-vowel and front-vowel forms to match the vowels in the word. "Budapesten" (in Budapest) uses a front-vowel ending; "Budán" (in Buda) uses a back-vowel one.', examples: ['Budapest → Budapesten (in Budapest)', 'Buda → Budán (in Buda)', 'Pest → Pesten (in Pest)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you" in Hungarian?', options: ['jó napot', 'köszönöm', 'a híd', 'a folyó'], correct: 'köszönöm' },
          { type: 'exercise', subtype: 'fill-blank', question: 'A ___ összeköti Budát és Pestet. (bridge)', correct: 'híd' },
        ],
      },
      {
        id: 'budapest-2',
        title: 'At the Baths',
        description: 'Warm water, coffee and everyday courtesy.',
        steps: [
          { type: 'vocab', word: 'a fürdő', article: null, english: 'the bath / spa', example: 'A Széchenyi fürdő nagyon híres.' },
          { type: 'vocab', word: 'a víz', article: null, english: 'the water', example: 'A víz meleg és jó.' },
          { type: 'vocab', word: 'a jegy', article: null, english: 'the ticket', example: 'Egy jegyet kérek.' },
          { type: 'vocab', word: 'kérek', article: null, english: 'I would like (please)', example: 'Egy kávét kérek.' },
          { type: 'vocab', word: 'egészségére', article: null, english: 'cheers / to your health', example: 'Egészségére!' },
          { type: 'grammar', title: 'Asking with "…kérek"', explanation: 'To order politely, name the thing in the accusative (often -t) and add "kérek" (I would like): "Egy jegyet kérek."', examples: ['Egy jegyet kérek. (A ticket, please.)', 'Egy kávét kérek. (A coffee, please.)', 'Egy vizet kérek. (A water, please.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "a fürdő"?', options: ['the bath / spa', 'the bridge', 'the castle'], correct: 'the bath / spa' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Egy jegyet ___. (I would like)', correct: 'kérek' },
        ],
      },
    ],
    places: [
      {
        id: 'bud-keleti', name: 'Keleti pályaudvar', icon: '🚉',
        coords: [47.5000, 19.0836], wikiTitle: 'Budapest Keleti railway station',
        narrative: 'Your train pulls into Keleti pályaudvar, Budapest\'s grand eastern station, its iron-and-glass hall opening onto the busy boulevards of Pest.',
        phrases: [
          { hu: 'Hol van a kijárat?', en: 'Where is the exit?' },
          { hu: 'Hogyan jutok a belvárosba?', en: 'How do I get to the city centre?' },
          { hu: 'Messze van?', en: 'Is it far?' },
        ],
        lessonId: 'budapest-1',
        quiz: {
          question: 'Keleti station stands on which side of the Danube?',
          options: ['Pest (the flat side)', 'Buda (the hilly side)', 'an island'],
          correct: 'Pest (the flat side)',
          explanation: 'Keleti pályaudvar is on the Pest side, the flatter eastern half of the city.',
        },
      },
      {
        id: 'bud-parliament', name: 'Országház', icon: '🏛️',
        coords: [47.5072, 19.0453], wikiTitle: 'Hungarian Parliament Building',
        narrative: 'Along the river you reach the Országház, the vast neo-Gothic Parliament rising straight from the Danube, its spires mirrored in the water.',
        phrases: [
          { hu: 'Milyen szép az Országház!', en: 'How beautiful the Parliament is!' },
          { hu: 'Hol a folyó?', en: 'Where is the river?' },
        ],
        quiz: {
          question: 'The Hungarian Parliament is built right beside which river?',
          options: ['the Danube', 'the Rhine', 'the Seine'],
          correct: 'the Danube',
          explanation: 'The Országház stands on the Pest bank of the Danube.',
        },
      },
      {
        id: 'bud-chain-bridge', name: 'Széchenyi Lánchíd', icon: '🌉',
        coords: [47.4989, 19.0436], wikiTitle: 'Széchenyi Chain Bridge',
        narrative: 'You walk across the Széchenyi Lánchíd, the stone lions at each end guarding the first permanent bridge ever to join Buda and Pest.',
        phrases: [
          { hu: 'A híd összeköti Budát és Pestet.', en: 'The bridge joins Buda and Pest.' },
          { hu: 'Innen szép a kilátás.', en: 'The view from here is beautiful.' },
        ],
        lessonId: 'budapest-1',
        quiz: {
          question: 'The Chain Bridge was the first permanent bridge to connect what?',
          options: ['Buda and Pest', 'Hungary and Austria', 'two islands'],
          correct: 'Buda and Pest',
          explanation: 'Opened in 1849, the Széchenyi Chain Bridge was the first permanent link between Buda and Pest.',
        },
      },
      {
        id: 'bud-szechenyi', name: 'Széchenyi Gyógyfürdő', icon: '♨️',
        coords: [47.5188, 19.0825], wikiTitle: 'Széchenyi Medicinal Bath',
        narrative: 'You finish in the steam of the Széchenyi Gyógyfürdő, a butter-yellow palace of warm outdoor pools where locals play chess in the water.',
        phrases: [
          { hu: 'Egy jegyet kérek.', en: 'One ticket, please.' },
          { hu: 'A víz nagyon meleg.', en: 'The water is very warm.' },
        ],
        lessonId: 'budapest-2',
        quiz: {
          question: 'Budapest is famous for having many natural…?',
          options: ['thermal baths', 'volcanoes', 'canals'],
          correct: 'thermal baths',
          explanation: 'Budapest sits on hot springs and is known as a city of thermal baths.',
        },
      },
    ],
  },

  // ─────────────────────────────  BARCELONA  ─────────────────────────────
  {
    id: 'barcelona',
    name: 'Barcelona',
    tagline: '¡Bienvenido a Barcelona!',
    theme: 'Gaudí & the Sea',
    accentColor: '#B31D2B',
    icon: '⛪',
    description:
      'Barcelona es la capital de Cataluña, entre las montañas y el mar Mediterráneo. ' +
      'La ciudad de Gaudí mezcla el barrio gótico, las anchas avenidas del Eixample y una playa ' +
      'en el centro, con la Sagrada Família creciendo hacia el cielo.',
    descriptionEn:
      'Barcelona is the capital of Catalonia, set between the mountains and the Mediterranean sea. ' +
      'Gaudí\'s city blends the Gothic quarter, the wide avenues of the Eixample and a beach in the ' +
      'centre, with the Sagrada Família rising toward the sky.',
    photos: [
      { wikiTitle: 'Barcelona', alt: 'Barcelona from above', caption: 'Barcelona, entre la montaña y el mar' },
      { wikiTitle: 'Sagrada Família', alt: 'Sagrada Família basilica', caption: 'La Sagrada Família de Gaudí' },
      { wikiTitle: 'Park Güell', alt: 'Park Güell mosaics', caption: 'El Park Güell y sus mosaicos' },
    ],
    vocabTopics: ['Getting around', 'Sights & Gaudí', 'At the beach & tapas'],
    grammarTopic: 'Gender of nouns (el / la)',
    lessons: [
      {
        id: 'barcelona-1',
        title: 'Around the City',
        description: 'Arriving and finding the sights on foot and by metro.',
        steps: [
          { type: 'vocab', word: 'la calle', article: 'la', english: 'the street', example: 'La Rambla es una calle famosa.' },
          { type: 'vocab', word: 'el metro', article: 'el', english: 'the metro', example: 'Tomo el metro al centro.' },
          { type: 'vocab', word: 'la playa', article: 'la', english: 'the beach', example: 'La playa está cerca del centro.' },
          { type: 'vocab', word: 'la iglesia', article: 'la', english: 'the church', example: 'La Sagrada Família es una iglesia.' },
          { type: 'vocab', word: 'todo recto', article: null, english: 'straight ahead', example: 'Siga todo recto.' },
          { type: 'grammar', title: 'El and la', explanation: 'Spanish nouns are masculine (el) or feminine (la). Many feminine nouns end in -a and many masculine in -o, but you learn each noun with its article.', examples: ['el metro (the metro)', 'la playa (the beach)', 'la calle (the street)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "playa"?', options: ['el', 'la', 'de', 'et'], correct: 'la' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Siga todo ___. (straight ahead)', correct: 'recto' },
        ],
      },
      {
        id: 'barcelona-2',
        title: 'Tapas by the Sea',
        description: 'Ordering food and drink near the beach.',
        steps: [
          { type: 'vocab', word: 'el agua', article: 'el', english: 'the water', example: 'Un agua, por favor.' },
          { type: 'vocab', word: 'la cuenta', article: 'la', english: 'the bill', example: 'La cuenta, por favor.' },
          { type: 'vocab', word: 'las tapas', article: 'las', english: 'the tapas', example: 'Unas tapas para compartir.' },
          { type: 'vocab', word: 'por favor', article: null, english: 'please', example: 'Un café, por favor.' },
          { type: 'vocab', word: 'gracias', article: null, english: 'thank you', example: '¡Muchas gracias!' },
          { type: 'grammar', title: 'Ordering with "…por favor"', explanation: 'Name what you want and add "por favor" to be polite: "Un café, por favor." Use "quería…" (I would like) for a softer request.', examples: ['Un agua, por favor.', 'La cuenta, por favor.', 'Quería unas tapas.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you" in Spanish?', options: ['por favor', 'gracias', 'la cuenta', 'todo recto'], correct: 'gracias' },
          { type: 'exercise', subtype: 'fill-blank', question: 'La cuenta, por ___. (please)', correct: 'favor' },
        ],
      },
    ],
    places: [
      {
        id: 'bcn-catalunya', name: 'Plaça de Catalunya', icon: '⛲',
        coords: [41.3870, 2.1701], wikiTitle: 'Plaça de Catalunya',
        narrative: 'You surface at Plaça de Catalunya, the great square where the old city meets the new. Fountains and pigeons fill the space; La Rambla runs down toward the sea.',
        phrases: [
          { es: '¿Dónde está La Rambla?', en: 'Where is La Rambla?' },
          { es: '¿Cómo llego a la playa?', en: 'How do I get to the beach?' },
          { es: '¿Está lejos?', en: 'Is it far?' },
        ],
        lessonId: 'barcelona-1',
        quiz: {
          question: 'Barcelona is the capital of which region?',
          options: ['Catalonia', 'Andalusia', 'Galicia'],
          correct: 'Catalonia',
          explanation: 'Barcelona is the capital of Catalonia (Catalunya) in north-east Spain.',
        },
      },
      {
        id: 'bcn-rambla', name: 'La Rambla', icon: '🌳',
        coords: [41.3809, 2.1730], wikiTitle: 'La Rambla',
        narrative: 'You stroll down La Rambla, the tree-lined promenade full of flower stalls and street performers, with the covered Boqueria market bursting with fruit to one side.',
        phrases: [
          { es: 'La Rambla es muy animada.', en: 'La Rambla is very lively.' },
          { es: '¿Dónde está el mercado?', en: 'Where is the market?' },
        ],
        quiz: {
          question: 'La Rambla is best described as a…?',
          options: ['tree-lined pedestrian promenade', 'motorway', 'metro line'],
          correct: 'tree-lined pedestrian promenade',
          explanation: 'La Rambla is Barcelona\'s famous pedestrian boulevard running down to the harbour.',
        },
      },
      {
        id: 'bcn-sagrada', name: 'Sagrada Família', icon: '⛪',
        coords: [41.4036, 2.1744], wikiTitle: 'Sagrada Família',
        narrative: 'You stand beneath the Sagrada Família, Gaudí\'s unfinished basilica, its towers like stone forests and its light pouring through windows of coloured glass.',
        phrases: [
          { es: 'Una entrada, por favor.', en: 'One ticket, please.' },
          { es: '¡Qué alta es la iglesia!', en: 'How tall the church is!' },
        ],
        lessonId: 'barcelona-1',
        quiz: {
          question: 'Which architect designed the Sagrada Família?',
          options: ['Antoni Gaudí', 'Pablo Picasso', 'Le Corbusier'],
          correct: 'Antoni Gaudí',
          explanation: 'Antoni Gaudí designed the Sagrada Família, still under construction today.',
        },
      },
      {
        id: 'bcn-barceloneta', name: 'La Barceloneta', icon: '🏖️',
        coords: [41.3797, 2.1894], wikiTitle: 'Barceloneta beach',
        narrative: 'You end at La Barceloneta, the city beach, where the Mediterranean laps the sand and beach bars serve cold drinks and plates of tapas.',
        phrases: [
          { es: 'Unas tapas, por favor.', en: 'Some tapas, please.' },
          { es: 'El mar está muy tranquilo.', en: 'The sea is very calm.' },
        ],
        lessonId: 'barcelona-2',
        quiz: {
          question: 'La Barceloneta is Barcelona\'s well-known…?',
          options: ['city beach', 'cathedral', 'train station'],
          correct: 'city beach',
          explanation: 'La Barceloneta is the popular beach neighbourhood on Barcelona\'s waterfront.',
        },
      },
    ],
  },

  // ─────────────────────────────  LISBOA  ─────────────────────────────
  {
    id: 'lisboa',
    name: 'Lisboa',
    tagline: 'Bem-vindo a Lisboa!',
    theme: 'Fado & the Sea',
    accentColor: '#006B3C',
    icon: '🐟',
    description:
      'Lisboa é a capital de Portugal, uma cidade de sete colinas sobre o rio Tejo. ' +
      'Os eléctricos amarelos sobem as ruas íngremes de Alfama enquanto o fado ecoa ' +
      'pelas janelas abertas. O Tejo enche os horizontes de luz e de barcos.',
    descriptionEn:
      'Lisbon is the capital of Portugal, a city of seven hills above the river Tagus. ' +
      'Yellow trams climb the steep streets of Alfama while fado drifts through open windows. ' +
      'The Tagus fills every horizon with light and boats.',
    photos: [
      { wikiTitle: 'Lisbon', alt: 'Lisbon cityscape', caption: 'Lisboa sobre o Tejo' },
      { wikiTitle: 'Alfama', alt: 'Alfama neighbourhood', caption: 'O bairro de Alfama ao pôr do sol' },
      { wikiTitle: 'Torre de Belém', alt: 'Torre de Belém tower', caption: 'A Torre de Belém, guarda do rio' },
    ],
    vocabTopics: ['Airport & arrival', 'Trams & getting around', 'Café & pastéis'],
    grammarTopic: 'Definite articles (o / a)',
    lessons: [
      {
        id: 'lisboa-1',
        title: 'Arriving in Lisbon',
        description: 'From the airport to the first yellow tram.',
        steps: [
          { type: 'vocab', word: 'o aeroporto', article: 'o', english: 'the airport', example: 'O aeroporto é moderno.' },
          { type: 'vocab', word: 'o metro', article: 'o', english: 'the metro', example: 'Tomo o metro até ao centro.' },
          { type: 'vocab', word: 'o eléctrico', article: 'o', english: 'the tram', example: 'O eléctrico 28 passa por Alfama.' },
          { type: 'vocab', word: 'a paragem', article: 'a', english: 'the stop', example: 'Qual é a próxima paragem?' },
          { type: 'vocab', word: 'obrigado', article: null, english: 'thank you (said by a man)', example: 'Obrigado pela ajuda!' },
          { type: 'grammar', title: 'The articles o and a', explanation: 'Portuguese nouns are masculine (o) or feminine (a). The article matches the noun\'s gender. Most nouns ending in -o are masculine; most ending in -a are feminine.', examples: ['o metro (the metro)', 'a paragem (the stop)', 'o eléctrico (the tram)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "eléctrico"?', options: ['o', 'a', 'os', 'as'], correct: 'o' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Tomo ___ metro até ao centro. (the)', correct: 'o' },
        ],
      },
      {
        id: 'lisboa-2',
        title: 'By the Tagus',
        description: 'Coffee, pastéis de nata, and the waterfront.',
        steps: [
          { type: 'vocab', word: 'o café', article: 'o', english: 'the coffee / the café', example: 'Um café, por favor.' },
          { type: 'vocab', word: 'o pastel de nata', article: 'o', english: 'the custard tart', example: 'Queria um pastel de nata.' },
          { type: 'vocab', word: 'a conta', article: 'a', english: 'the bill', example: 'A conta, por favor.' },
          { type: 'vocab', word: 'o rio', article: 'o', english: 'the river', example: 'O rio Tejo é muito largo.' },
          { type: 'vocab', word: 'com licença', article: null, english: 'excuse me', example: 'Com licença, onde é a paragem?' },
          { type: 'grammar', title: 'Polite ordering with "queria"', explanation: '"Queria…" (I would like) is the standard polite way to order in Portuguese. It is the imperfect tense of "querer" used as a softened request.', examples: ['Queria um café.', 'Queria um pastel de nata.', 'Queria a conta, por favor.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is a "pastel de nata"?', options: ['a custard tart', 'a type of pasta', 'a fruit drink'], correct: 'a custard tart' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ um café, por favor. (I would like)', correct: 'Queria' },
        ],
      },
    ],
    places: [
      {
        id: 'lis-aeroporto', name: 'Aeroporto de Lisboa', icon: '✈️',
        coords: [38.7742, -9.1342], wikiTitle: 'Humberto Delgado Airport',
        narrative: 'Your plane touches down at Lisbon\'s Humberto Delgado Airport and the warm Atlantic air greets you as you step out. Inside, signs are in Portuguese and English and the metro entrance is just beyond arrivals.',
        phrases: [
          { pt: 'Onde é o metro?', en: 'Where is the metro?' },
          { pt: 'Quanto custa o bilhete?', en: 'How much is the ticket?' },
          { pt: 'É longe do centro?', en: 'Is it far from the centre?' },
        ],
        lessonId: 'lisboa-1',
        quiz: {
          question: 'What is the quickest way from Lisbon Airport to the city centre?',
          options: ['the metro (red line)', 'a horse-drawn tram', 'a ferry on the Tagus'],
          correct: 'the metro (red line)',
          explanation: 'The Aeroporto metro station connects directly to the city on the red line.',
        },
      },
      {
        id: 'lis-alfama', name: 'Alfama', icon: '🎵',
        coords: [38.7149, -9.1333], wikiTitle: 'Alfama',
        narrative: 'The tram drops you in Alfama, Lisbon\'s oldest neighbourhood, a labyrinth of whitewashed walls and orange rooftops tumbling down to the river. From a miradouro you hear fado rising — the melancholic Portuguese song declared a UNESCO intangible heritage.',
        phrases: [
          { pt: 'Onde é o miradouro?', en: 'Where is the viewpoint?' },
          { pt: 'Que bairro bonito!', en: 'What a beautiful neighbourhood!' },
        ],
        lessonId: 'lisboa-1',
        quiz: {
          question: 'Fado is a type of traditional Portuguese…?',
          options: ['music', 'dance', 'pastry'],
          correct: 'music',
          explanation: 'Fado is Portugal\'s melancholic traditional song, listed as UNESCO intangible cultural heritage.',
        },
      },
      {
        id: 'lis-belem', name: 'Torre de Belém', icon: '🏰',
        coords: [38.6916, -9.2160], wikiTitle: 'Torre de Belém',
        narrative: 'Down the riverbank you reach the Torre de Belém, a 16th-century fortified tower that once guarded the entrance to Lisbon\'s harbour. From here the great explorers — Vasco da Gama among them — set sail for Africa, India and Brazil.',
        phrases: [
          { pt: 'Um bilhete, por favor.', en: 'One ticket, please.' },
          { pt: 'Que vista incrível!', en: 'What an incredible view!' },
        ],
        quiz: {
          question: 'The Torre de Belém was built to guard the entrance to which river?',
          options: ['the Tagus (Tejo)', 'the Douro', 'the Guadalquivir'],
          correct: 'the Tagus (Tejo)',
          explanation: 'The tower stands on the Tagus and guarded Lisbon\'s harbour from the 16th century.',
        },
      },
      {
        id: 'lis-ribeira', name: 'Mercado da Ribeira', icon: '🐟',
        coords: [38.7062, -9.1454], wikiTitle: 'Mercado da Ribeira',
        narrative: 'You end at the Mercado da Ribeira beside the river, a vast iron-and-glass market hall. One half sells fresh fish, flowers and vegetables; the other has become a food hall where you sit at long communal tables for bacalhau, pastéis and wine.',
        phrases: [
          { pt: 'Queria um pastel de nata.', en: 'I would like a custard tart.' },
          { pt: 'A conta, por favor.', en: 'The bill, please.' },
        ],
        lessonId: 'lisboa-2',
        quiz: {
          question: 'Bacalhau is Portugal\'s iconic dish based on which ingredient?',
          options: ['salt cod', 'sardines', 'octopus'],
          correct: 'salt cod',
          explanation: 'Bacalhau (salt cod) is said to have 365 recipes — one for every day of the year.',
        },
      },
    ],
  },

  // ─────────────────────────────  PORTO  ─────────────────────────────
  {
    id: 'porto',
    name: 'Porto',
    tagline: 'Bem-vindo ao Porto!',
    theme: 'Wine & Bridges',
    accentColor: '#722F37',
    icon: '🍷',
    description:
      'Porto é a segunda cidade de Portugal, construída sobre o rio Douro. ' +
      'Os azulejos azuis e brancos cobrem as fachadas das igrejas e o bairro da Ribeira ' +
      'anima-se de barcos, restaurantes e visitantes atraídos pelo vinho do Porto.',
    descriptionEn:
      'Porto is Portugal\'s second city, built above the river Douro. ' +
      'Blue-and-white azulejo tiles cover church façades and the riverside Ribeira ' +
      'district buzzes with boats, restaurants and visitors drawn by port wine.',
    photos: [
      { wikiTitle: 'Porto', alt: 'Porto cityscape', caption: 'Porto sobre o rio Douro' },
      { wikiTitle: 'Dom Luís I Bridge', alt: 'Dom Luís I Bridge', caption: 'A Ponte Luís I, obra de ferro' },
      { wikiTitle: 'Porto Cathedral', alt: 'Porto Cathedral', caption: 'A Sé do Porto com os seus azulejos' },
    ],
    vocabTopics: ['River & bridges', 'Port wine & lodges', 'Azulejos & stations'],
    grammarTopic: 'Ser vs. estar (to be)',
    lessons: [
      {
        id: 'porto-1',
        title: 'Crossing the Douro',
        description: 'Arriving at São Bento and crossing to Vila Nova de Gaia.',
        steps: [
          { type: 'vocab', word: 'a estação', article: 'a', english: 'the station', example: 'A estação de São Bento é bonita.' },
          { type: 'vocab', word: 'a ponte', article: 'a', english: 'the bridge', example: 'A ponte tem dois andares.' },
          { type: 'vocab', word: 'o rio', article: 'o', english: 'the river', example: 'O Douro é o rio do vinho.' },
          { type: 'vocab', word: 'a ribeira', article: 'a', english: 'the waterfront', example: 'A Ribeira é muito animada.' },
          { type: 'vocab', word: 'longe', article: null, english: 'far', example: 'Não é longe daqui.' },
          { type: 'grammar', title: 'Ser vs. estar', explanation: '"Ser" is used for permanent characteristics (origin, identity); "estar" for temporary states and locations. Both mean "to be" but are not interchangeable.', examples: ['O Porto é uma cidade histórica. (ser — identity)', 'Estou no Porto. (estar — location)', 'A ponte está fechada. (estar — temporary state)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: '"Eu ___ no Porto agora." Which verb?', options: ['sou', 'estou', 'tens', 'há'], correct: 'estou' },
          { type: 'exercise', subtype: 'fill-blank', question: 'O Porto ___ uma cidade histórica. (ser, 3rd person)', correct: 'é' },
        ],
      },
      {
        id: 'porto-2',
        title: 'Port Wine & Cafés',
        description: 'Tasting port wine in a lodge above the Douro.',
        steps: [
          { type: 'vocab', word: 'o vinho do Porto', article: 'o', english: 'port wine', example: 'Um copo de vinho do Porto, por favor.' },
          { type: 'vocab', word: 'a adega', article: 'a', english: 'the wine lodge / cellar', example: 'A adega é muito antiga.' },
          { type: 'vocab', word: 'o copo', article: 'o', english: 'the glass', example: 'Dois copos de tinto, por favor.' },
          { type: 'vocab', word: 'seco', article: null, english: 'dry', example: 'Prefiro um vinho seco.' },
          { type: 'vocab', word: 'doce', article: null, english: 'sweet', example: 'O Porto tawny é mais doce.' },
          { type: 'grammar', title: 'Estar for feelings and temporary states', explanation: '"Estar" describes how someone feels right now: "Estou com sede" (I am thirsty). Pair "estar" with adjectives or "com + noun" for feelings.', examples: ['Estou com sede. (I\'m thirsty.)', 'Estou cansado. (I\'m tired.)', 'Está frio hoje. (It\'s cold today.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "seco" mean when describing wine?', options: ['dry', 'sweet', 'sparkling'], correct: 'dry' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Estou com ___. (thirst/thirsty)', correct: 'sede' },
        ],
      },
    ],
    places: [
      {
        id: 'prt-saobento', name: 'Estação de São Bento', icon: '🚉',
        coords: [41.1455, -8.6098], wikiTitle: 'São Bento railway station',
        narrative: 'You step off the train into São Bento station and stop — the entire entrance hall is lined with 20,000 blue-and-white azulejo tiles depicting scenes of Portuguese history. It is considered one of the most beautiful train stations in the world.',
        phrases: [
          { pt: 'Onde é a Ribeira?', en: 'Where is the Ribeira?' },
          { pt: 'A que horas sai o próximo comboio?', en: 'What time does the next train leave?' },
          { pt: 'É perto daqui?', en: 'Is it near here?' },
        ],
        lessonId: 'porto-1',
        quiz: {
          question: 'São Bento station is famous for its walls covered in…?',
          options: ['azulejo tiles', 'marble mosaics', 'painted murals'],
          correct: 'azulejo tiles',
          explanation: 'São Bento\'s hall is lined with 20,000 blue-and-white azulejo panels depicting Portuguese history.',
        },
      },
      {
        id: 'prt-ribeira', name: 'Ribeira', icon: '⛵',
        coords: [41.1405, -8.6135], wikiTitle: 'Ribeira (Porto)',
        narrative: 'You walk down to the Ribeira, Porto\'s riverside neighbourhood. Colourful houses lean over the quay, their laundry strung between windows. Rabelo boats — once used to carry barrels of wine — are moored on the Douro below.',
        phrases: [
          { pt: 'Que bairro animado!', en: 'What a lively neighbourhood!' },
          { pt: 'Posso tirar uma fotografia?', en: 'May I take a photograph?' },
        ],
        lessonId: 'porto-1',
        quiz: {
          question: 'Rabelo boats were traditionally used to transport which cargo?',
          options: ['port wine barrels', 'fish', 'passengers'],
          correct: 'port wine barrels',
          explanation: 'Rabelo boats carried barrels of port wine down the Douro from the valley vineyards.',
        },
      },
      {
        id: 'prt-luisi', name: 'Ponte Dom Luís I', icon: '🌉',
        coords: [41.1399, -8.6093], wikiTitle: 'Dom Luís I Bridge',
        narrative: 'You cross the double-decker Dom Luís I Bridge on its upper deck, 60 metres above the Douro, the metro running beside you. Designed by a student of Gustave Eiffel, the iron arch was the longest of its kind when it opened in 1886.',
        phrases: [
          { pt: 'A ponte é muito alta.', en: 'The bridge is very high.' },
          { pt: 'A vista é incrível!', en: 'The view is incredible!' },
        ],
        quiz: {
          question: 'The Dom Luís I Bridge was designed by a student of which famous engineer?',
          options: ['Gustave Eiffel', 'Isambard Kingdom Brunel', 'Ferdinand de Lesseps'],
          correct: 'Gustave Eiffel',
          explanation: 'Théophile Seyrig, a student of Eiffel, designed the bridge, which opened in 1886.',
        },
      },
      {
        id: 'prt-gaia', name: 'Vila Nova de Gaia', icon: '🍷',
        coords: [41.1340, -8.6098], wikiTitle: 'Vila Nova de Gaia',
        narrative: 'Across the river in Vila Nova de Gaia, the great port wine lodges climb the southern bank. Every major port house — Graham\'s, Taylor\'s, Sandeman — keeps its lodges here, cooled by the river breeze. Inside, barrels stack to the ceiling in centuries-old silence.',
        phrases: [
          { pt: 'Um copo de vinho do Porto, por favor.', en: 'A glass of port wine, please.' },
          { pt: 'Qual é a diferença entre tawny e ruby?', en: 'What is the difference between tawny and ruby?' },
        ],
        lessonId: 'porto-2',
        quiz: {
          question: 'Port wine lodges are located on which bank of the Douro?',
          options: ['Vila Nova de Gaia (south bank)', 'Porto (north bank)', 'both banks equally'],
          correct: 'Vila Nova de Gaia (south bank)',
          explanation: 'By law, port wine must be aged in lodges in Vila Nova de Gaia on the south bank.',
        },
      },
    ],
  },

  // ─────────────────────────────  MADRID  ─────────────────────────────
  {
    id: 'madrid',
    name: 'Madrid',
    tagline: '¡Bienvenido a Madrid!',
    theme: 'Art & Plazas',
    accentColor: '#AA151B',
    icon: '🎭',
    description:
      'Madrid es la capital de España y la ciudad más alta de Europa, a 667 metros sobre el mar. ' +
      'En el centro de la península ibérica, Madrid vive en sus grandes plazas, sus cafés abiertos ' +
      'hasta tarde y sus museos de fama mundial: el Prado, el Reina Sofía y el Thyssen.',
    descriptionEn:
      'Madrid is the capital of Spain and the highest capital city in Europe, at 667 metres above sea level. ' +
      'At the centre of the Iberian peninsula, Madrid lives in its grand plazas, its late-night cafés ' +
      'and its world-famous museums: the Prado, the Reina Sofía and the Thyssen.',
    photos: [
      { wikiTitle: 'Madrid', alt: 'Madrid skyline', caption: 'Madrid, la capital de España' },
      { wikiTitle: 'Museo del Prado', alt: 'Prado Museum entrance', caption: 'El Prado, uno de los mejores museos del mundo' },
      { wikiTitle: 'Plaza Mayor, Madrid', alt: 'Plaza Mayor', caption: 'La Plaza Mayor, corazón histórico' },
    ],
    vocabTopics: ['Getting around the city', 'Art museums', 'Tapas & bars'],
    grammarTopic: 'Ser vs. estar in Spanish',
    lessons: [
      {
        id: 'madrid-1',
        title: 'Gran Vía & Getting Around',
        description: 'Navigating Madrid\'s grand boulevard and the metro.',
        steps: [
          { type: 'vocab', word: 'el museo', article: 'el', english: 'the museum', example: 'El museo está en el Paseo del Prado.' },
          { type: 'vocab', word: 'la plaza', article: 'la', english: 'the square', example: 'La plaza está llena de gente.' },
          { type: 'vocab', word: 'el billete', article: 'el', english: 'the ticket', example: 'Un billete de metro, por favor.' },
          { type: 'vocab', word: 'cerca', article: null, english: 'near / close', example: 'El Prado está cerca de aquí.' },
          { type: 'vocab', word: 'girar', article: null, english: 'to turn', example: 'Gire a la derecha.' },
          { type: 'grammar', title: 'Ser vs. estar', explanation: 'Both mean "to be". Use "ser" for permanent traits (identity, origin); "estar" for locations and temporary states.', examples: ['Madrid es la capital. (permanent identity)', 'El museo está cerrado. (temporary state)', 'Estoy cansado. (temporary feeling)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: '"El Prado ___ un museo famoso." Which verb?', options: ['es', 'está', 'son', 'están'], correct: 'es' },
          { type: 'exercise', subtype: 'fill-blank', question: 'El museo ___ cerrado los lunes. (estar)', correct: 'está' },
        ],
      },
      {
        id: 'madrid-2',
        title: 'At the Prado',
        description: 'Visiting the Prado and ending with tapas at a terrace bar.',
        steps: [
          { type: 'vocab', word: 'el cuadro', article: 'el', english: 'the painting', example: 'El cuadro de Velázquez es enorme.' },
          { type: 'vocab', word: 'la entrada', article: 'la', english: 'the entrance / ticket', example: 'Una entrada, por favor.' },
          { type: 'vocab', word: 'las tapas', article: 'las', english: 'tapas', example: 'Unas tapas y una cerveza, por favor.' },
          { type: 'vocab', word: 'la terraza', article: 'la', english: 'the outdoor terrace (bar)', example: 'Tomamos algo en la terraza.' },
          { type: 'vocab', word: 'la cerveza', article: 'la', english: 'the beer', example: 'Una cerveza fría, por favor.' },
          { type: 'grammar', title: 'Estar for location', explanation: '"Estar" always describes where something is located, even for permanent places. "¿Dónde está el Prado?" — it does not move, but its location still takes "estar".', examples: ['¿Dónde está el Prado?', 'El Prado está en el Paseo del Prado.', '¿Dónde están los baños?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which Spanish painter is most associated with the Prado?', options: ['Velázquez', 'Picasso', 'Dalí'], correct: 'Velázquez' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Una ___, por favor. (entrance ticket)', correct: 'entrada' },
        ],
      },
    ],
    places: [
      {
        id: 'mad-sol', name: 'Puerta del Sol', icon: '☀️',
        coords: [40.4168, -3.7038], wikiTitle: 'Puerta del Sol',
        narrative: 'You arrive at the Puerta del Sol, the beating heart of Madrid and of Spain — a bronze plaque in the pavement marks Kilometre Zero, the point from which all Spanish roads are measured. The square never sleeps: protesters, street artists, tourists and locals share its space around the clock.',
        phrases: [
          { es: '¿Cómo se va al Prado?', en: 'How do I get to the Prado?' },
          { es: '¿Está lejos?', en: 'Is it far?' },
          { es: 'Un billete de metro, por favor.', en: 'A metro ticket, please.' },
        ],
        lessonId: 'madrid-1',
        quiz: {
          question: 'The Puerta del Sol marks Kilometre Zero — the starting point of all…?',
          options: ['Spanish national roads', 'Madrid\'s metro lines', 'Spain\'s train network'],
          correct: 'Spanish national roads',
          explanation: 'A plaque in Sol marks the point from which distances on Spanish national roads are measured.',
        },
      },
      {
        id: 'mad-mayor', name: 'Plaza Mayor', icon: '🏟️',
        coords: [40.4153, -3.7074], wikiTitle: 'Plaza Mayor, Madrid',
        narrative: 'A short walk from Sol, the Plaza Mayor opens up: a vast, perfectly rectangular 17th-century square enclosed by three-storey arcaded buildings painted terracotta. Bullfights, royal ceremonies and autos-da-fé all took place here. Today it is a café terrace and a meeting point.',
        phrases: [
          { es: 'Una cerveza y unas tapas, por favor.', en: 'A beer and some tapas, please.' },
          { es: 'La plaza es muy bonita.', en: 'The square is very beautiful.' },
        ],
        lessonId: 'madrid-1',
        quiz: {
          question: 'Plaza Mayor was built mainly in the…?',
          options: ['17th century', '15th century', '19th century'],
          correct: '17th century',
          explanation: 'Philip III had the Plaza Mayor built in the early 17th century; it was completed in 1619.',
        },
      },
      {
        id: 'mad-prado', name: 'Museo del Prado', icon: '🖼️',
        coords: [40.4138, -3.6922], wikiTitle: 'Museo del Prado',
        narrative: 'The Prado is one of the world\'s great art museums. Room after room holds masterpieces: Velázquez\'s "Las Meninas", Goya\'s "Saturn Devouring His Son" and Bosch\'s extraordinary triptych "The Garden of Earthly Delights" — all in the same building.',
        phrases: [
          { es: 'Una entrada, por favor.', en: 'One ticket, please.' },
          { es: '¿Dónde está "Las Meninas"?', en: 'Where is "Las Meninas"?' },
        ],
        lessonId: 'madrid-2',
        quiz: {
          question: '"Las Meninas" was painted by which Spanish master?',
          options: ['Velázquez', 'Goya', 'El Greco'],
          correct: 'Velázquez',
          explanation: '"Las Meninas" (1656) by Diego Velázquez is considered one of the most important paintings in Western art.',
        },
      },
      {
        id: 'mad-retiro', name: 'Parque del Retiro', icon: '🌳',
        coords: [40.4153, -3.6844], wikiTitle: 'Retiro Park',
        narrative: 'You end the day in the Retiro, Madrid\'s great park. Once the private garden of Spanish royalty, it opened to the public in the 19th century. You rent a rowing boat on the ornamental lake, the Crystal Palace glittering through the trees.',
        phrases: [
          { es: 'Quiero alquilar un bote.', en: 'I want to rent a rowing boat.' },
          { es: 'El parque es precioso.', en: 'The park is beautiful.' },
        ],
        lessonId: 'madrid-2',
        quiz: {
          question: 'The Retiro was originally a private garden for whom?',
          options: ['the Spanish royal family', 'the city\'s nobility', 'the Church'],
          correct: 'the Spanish royal family',
          explanation: 'The Retiro was a royal retreat before opening to the public in the 19th century.',
        },
      },
    ],
  },

  // ─────────────────────────────  SEVILLA  ─────────────────────────────
  {
    id: 'sevilla',
    name: 'Sevilla',
    tagline: '¡Bienvenido a Sevilla!',
    theme: 'Flamenco & Orange Trees',
    accentColor: '#D4A017',
    icon: '💃',
    description:
      'Sevilla es la capital de Andalucía y la ciudad más cálida de Europa occidental. ' +
      'Sus callejuelas blancas huelen a azahar en primavera mientras el flamenco resuena ' +
      'en los tablados del barrio de Santa Cruz, a la sombra de la Giralda.',
    descriptionEn:
      'Seville is the capital of Andalusia and the hottest city in western Europe. ' +
      'Its whitewashed lanes smell of orange blossom in spring while flamenco echoes ' +
      'through the bars of the Santa Cruz quarter, in the shadow of the Giralda tower.',
    photos: [
      { wikiTitle: 'Seville', alt: 'Seville cityscape with Giralda', caption: 'Sevilla y la Giralda al atardecer' },
      { wikiTitle: 'Real Alcázar of Seville', alt: 'Real Alcázar palace', caption: 'El Real Alcázar, palacio de los reyes' },
      { wikiTitle: 'Plaza de España, Seville', alt: 'Plaza de España', caption: 'La Plaza de España en el parque María Luisa' },
    ],
    vocabTopics: ['Old town & landmarks', 'Flamenco', 'Tapas & sherry'],
    grammarTopic: 'Present tense -ar verbs',
    lessons: [
      {
        id: 'sevilla-1',
        title: 'In the Old Town',
        description: 'Wandering the Barrio Santa Cruz and the Cathedral.',
        steps: [
          { type: 'vocab', word: 'la catedral', article: 'la', english: 'the cathedral', example: 'La catedral es la más grande del mundo gótico.' },
          { type: 'vocab', word: 'la torre', article: 'la', english: 'the tower', example: 'La Giralda es la torre de la catedral.' },
          { type: 'vocab', word: 'el barrio', article: 'el', english: 'the neighbourhood', example: 'El barrio de Santa Cruz es encantador.' },
          { type: 'vocab', word: 'el naranjo', article: 'el', english: 'the orange tree', example: 'Los naranjos perfuman las calles.' },
          { type: 'vocab', word: 'perdido', article: null, english: 'lost', example: 'Estoy un poco perdido.' },
          { type: 'grammar', title: 'Present tense -ar verbs', explanation: 'Regular -ar verbs: drop -ar and add -o (yo), -as (tú), -a (él/ella). "Escuchar" (to listen): escucho, escuchas, escucha.', examples: ['Yo escucho flamenco.', 'Tú tomas tapas.', 'Él habla español.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "I listen" from "escuchar"?', options: ['escucho', 'escuchas', 'escucha', 'escuchamos'], correct: 'escucho' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Yo ___ mucho flamenco. (escuchar, yo)', correct: 'escucho' },
        ],
      },
      {
        id: 'sevilla-2',
        title: 'Tapas & Flamenco',
        description: 'An evening of Andalusian food and dance.',
        steps: [
          { type: 'vocab', word: 'el tablao', article: 'el', english: 'flamenco venue / stage', example: 'El tablao empieza a las diez.' },
          { type: 'vocab', word: 'el jerez', article: 'el', english: 'sherry wine', example: 'Un jerez fino, por favor.' },
          { type: 'vocab', word: 'los jamones', article: 'los', english: 'cured hams', example: 'Los jamones cuelgan del techo.' },
          { type: 'vocab', word: 'bailar', article: null, english: 'to dance', example: 'La bailaora baila muy bien.' },
          { type: 'vocab', word: 'el zapato', article: 'el', english: 'the shoe', example: 'Los zapatos de flamenco hacen ruido.' },
          { type: 'grammar', title: 'Tomar & bailar: -ar verbs in use', explanation: '"Tomar" (to take/have) and "bailar" (to dance) follow the same -ar pattern. Use "tomar" when ordering food or drink in Spanish.', examples: ['Tomo un café.', 'Ella baila flamenco.', '¿Tomamos algo?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "el jerez"?', options: ['sherry wine', 'a type of dance', 'a cured ham'], correct: 'sherry wine' },
          { type: 'exercise', subtype: 'fill-blank', question: 'La bailaora ___ muy bien. (bailar, ella)', correct: 'baila' },
        ],
      },
    ],
    places: [
      {
        id: 'sev-santajusta', name: 'Estación de Santa Justa', icon: '🚉',
        coords: [37.3921, -5.9757], wikiTitle: 'Seville Santa Justa railway station',
        narrative: 'The AVE high-speed train slides into Santa Justa, Seville\'s modern station designed to evoke an Andalusian watchtower. From Madrid it took barely two and a half hours. Outside, the air is dry and scented with the city\'s countless orange trees.',
        phrases: [
          { es: '¿Dónde está el centro histórico?', en: 'Where is the historic centre?' },
          { es: '¿Cuánto tarda a pie?', en: 'How long does it take on foot?' },
          { es: '¿Hay autobús al barrio de Santa Cruz?', en: 'Is there a bus to Santa Cruz?' },
        ],
        lessonId: 'sevilla-1',
        quiz: {
          question: 'Seville is the capital of which Spanish region?',
          options: ['Andalusia', 'Castile', 'Catalonia'],
          correct: 'Andalusia',
          explanation: 'Seville is the capital of Andalusia, the southernmost region of mainland Spain.',
        },
      },
      {
        id: 'sev-alcazar', name: 'Real Alcázar', icon: '🏯',
        coords: [37.3833, -5.9912], wikiTitle: 'Real Alcázar of Seville',
        narrative: 'You enter the Real Alcázar, a royal palace begun in the 10th century by Moorish rulers and expanded by Christian kings — a unique mix of Islamic and Gothic architecture known as Mudéjar style. Its courtyards of azulejo tiles and gardens of fountains are breathtaking.',
        phrases: [
          { es: 'Una entrada, por favor.', en: 'One ticket, please.' },
          { es: 'Los jardines son preciosos.', en: 'The gardens are beautiful.' },
        ],
        lessonId: 'sevilla-1',
        quiz: {
          question: 'The Real Alcázar is a fine example of which architectural style?',
          options: ['Mudéjar (Islamic-Christian blend)', 'Gothic', 'Baroque'],
          correct: 'Mudéjar (Islamic-Christian blend)',
          explanation: 'The Alcázar blends Moorish and Christian styles — called Mudéjar — and is still a royal residence.',
        },
      },
      {
        id: 'sev-santacruz', name: 'Barrio Santa Cruz', icon: '🌸',
        coords: [37.3854, -5.9875], wikiTitle: 'Barrio Santa Cruz',
        narrative: 'The Santa Cruz neighbourhood is Seville\'s old Jewish quarter, a tangle of alleys too narrow for cars, opening onto tiny flower-filled plazas. Orange trees line every street and in spring their blossom — azahar — fills the air with a heady perfume.',
        phrases: [
          { es: 'Estoy perdido. ¿Puede ayudarme?', en: 'I\'m lost. Can you help me?' },
          { es: '¡Qué calle tan bonita!', en: 'What a beautiful street!' },
        ],
        quiz: {
          question: 'The Santa Cruz neighbourhood was historically the city\'s…?',
          options: ['Jewish quarter', 'Moorish palace district', 'river port'],
          correct: 'Jewish quarter',
          explanation: 'Santa Cruz was Seville\'s judería (Jewish quarter) before the expulsion of Jews in 1492.',
        },
      },
      {
        id: 'sev-plaza-espana', name: 'Plaza de España', icon: '💃',
        coords: [37.3771, -5.9867], wikiTitle: 'Plaza de España, Seville',
        narrative: 'You end at the Plaza de España, a vast semicircular complex built for the 1929 Ibero-American Exposition. A canal with rowing boats curves along the arcade; each alcove holds tiled panels representing a different Spanish province. Flamenco dancers sometimes perform spontaneously under the arches.',
        phrases: [
          { es: 'Quiero alquilar una barca.', en: 'I want to rent a rowing boat.' },
          { es: 'La plaza es impresionante.', en: 'The square is impressive.' },
        ],
        lessonId: 'sevilla-2',
        quiz: {
          question: 'The Plaza de España was built for which event?',
          options: ['the 1929 Ibero-American Exposition', 'the 1992 Summer Olympics', 'the 1888 World\'s Fair'],
          correct: 'the 1929 Ibero-American Exposition',
          explanation: 'The Plaza de España was the centrepiece of the 1929 Ibero-American Exposition held in Seville.',
        },
      },
    ],
  },


  // ─────────────────────────────  PRAHA  ─────────────────────────────
  {
    id: 'praha',
    name: 'Praha',
    tagline: 'Vítejte v Praze!',
    theme: 'Castles & Beer',
    accentColor: '#D7141A',
    icon: '🏰',
    description:
      'Praha je hlavní město České republiky a jedno z nejlépe zachovaných středověkých měst v Evropě. ' +
      'Gotické věže, barokní paláce a mosty přes Vltavu tvoří panorama, které se téměř nezměnilo ' +
      'za staletí. Praha je také světovým centrem piva — zejména zlatého plzeňského ležáku.',
    descriptionEn:
      'Prague is the capital of the Czech Republic and one of the best-preserved medieval cities in Europe. ' +
      'Gothic towers, baroque palaces and bridges over the Vltava form a skyline barely changed over centuries. ' +
      'Prague is also a world centre of beer — especially the golden Pilsner lager.',
    photos: [
      { wikiTitle: 'Prague', alt: 'Prague skyline', caption: 'Praha — věže a střechy nad Vltavou' },
      { wikiTitle: 'Charles Bridge', alt: 'Charles Bridge Prague', caption: 'Karlův most se svými barokními sochami' },
      { wikiTitle: 'Prague Castle', alt: 'Prague Castle', caption: 'Pražský hrad, největší hradní komplex světa' },
    ],
    vocabTopics: ['Getting around Old Town', 'Prague Castle & history', 'Czech pub culture'],
    grammarTopic: 'Nominative vs. accusative nouns',
    lessons: [
      {
        id: 'praha-1',
        title: 'Across the Charles Bridge',
        description: 'Arriving and walking from the Old Town to the castle.',
        steps: [
          { type: 'vocab', word: 'most', article: null, english: 'bridge', example: 'Karlův most je starý.' },
          { type: 'vocab', word: 'hrad', article: null, english: 'castle', example: 'Hrad je nahoře na kopci.' },
          { type: 'vocab', word: 'náměstí', article: null, english: 'square', example: 'Staroměstské náměstí je krásné.' },
          { type: 'vocab', word: 'kostel', article: null, english: 'church', example: 'Kostel má vysokou věž.' },
          { type: 'vocab', word: 'vlevo / vpravo', article: null, english: 'to the left / to the right', example: 'Hrad je vlevo od mostu.' },
          { type: 'grammar', title: 'Nominative vs. accusative', explanation: 'In Czech, nouns change form depending on their role. The subject uses the nominative; the direct object uses the accusative. Masculine animate nouns add -a in accusative.', examples: ['Hrad je starý. (nominative — subject)', 'Vidím hrad. (accusative — object)', 'Vidím průvodce. (accusative animate)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "náměstí" mean?', options: ['square (public space)', 'bridge', 'castle'], correct: 'square (public space)' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Hrad je ___. (to the left)', correct: 'vlevo' },
        ],
      },
      {
        id: 'praha-2',
        title: 'In a Czech Pub',
        description: 'Ordering beer and food in a traditional hospoda.',
        steps: [
          { type: 'vocab', word: 'pivo', article: null, english: 'beer', example: 'Jedno pivo, prosím.' },
          { type: 'vocab', word: 'hospoda', article: null, english: 'pub / inn', example: 'Ta hospoda je velmi stará.' },
          { type: 'vocab', word: 'svíčková', article: null, english: 'beef sirloin in cream sauce', example: 'Svíčková se podává se šesti knedlíky.' },
          { type: 'vocab', word: 'prosím', article: null, english: 'please / here you go', example: 'Jedno pivo, prosím.' },
          { type: 'vocab', word: 'účet', article: null, english: 'the bill', example: 'Prosím účet.' },
          { type: 'grammar', title: 'Accusative for ordering', explanation: 'When ordering in Czech, use the accusative case. Neuter nouns like "pivo" look the same in both nominative and accusative, making ordering easier.', examples: ['Dám si pivo. (I\'ll have a beer.)', 'Chci svíčkovou. (I want svíčková.)', 'Prosím účet. (The bill, please.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "svíčková"?', options: ['beef sirloin in cream sauce', 'a type of beer', 'a bread dumpling'], correct: 'beef sirloin in cream sauce' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Jedno ___, prosím. (beer)', correct: 'pivo' },
        ],
      },
    ],
    places: [
      {
        id: 'prg-hlavni', name: 'Praha hlavní nádraží', icon: '🚉',
        coords: [50.0831, 14.4356], wikiTitle: 'Praha hlavní nádraží',
        narrative: 'You arrive at Prague\'s art-nouveau main station, its ornate dome and grand staircase a relic of the Habsburg empire. A short walk takes you to Wenceslas Square, where the history of 20th-century Central Europe played out — from Nazi occupation to the Velvet Revolution of 1989.',
        phrases: [
          { cs: 'Kde je centrum?', en: 'Where is the centre?' },
          { cs: 'Jak se dostanu na Karlův most?', en: 'How do I get to Charles Bridge?' },
          { cs: 'Je to daleko?', en: 'Is it far?' },
        ],
        lessonId: 'praha-1',
        quiz: {
          question: 'The Velvet Revolution of 1989 ended which type of government in Czechoslovakia?',
          options: ['Communist rule', 'Habsburg monarchy', 'Nazi occupation'],
          correct: 'Communist rule',
          explanation: 'The Velvet Revolution peacefully ended Communist rule in Czechoslovakia in November 1989.',
        },
      },
      {
        id: 'prg-karluv', name: 'Karlův most', icon: '⛪',
        coords: [50.0865, 14.4114], wikiTitle: 'Charles Bridge',
        narrative: 'The Charles Bridge stretches 516 metres across the Vltava, its 30 Baroque statues of saints lining the parapet. Built in 1357 on the orders of Emperor Charles IV, it was for centuries the only crossing of the river in Prague. Street musicians play here at all hours.',
        phrases: [
          { cs: 'Sochy jsou krásné.', en: 'The statues are beautiful.' },
          { cs: 'Mohu si vyfotit?', en: 'May I take a photo?' },
        ],
        lessonId: 'praha-1',
        quiz: {
          question: 'The Charles Bridge was built on the orders of which emperor?',
          options: ['Charles IV', 'Ferdinand II', 'Rudolf II'],
          correct: 'Charles IV',
          explanation: 'Charles IV ordered construction to begin in 1357; the bridge is named after him.',
        },
      },
      {
        id: 'prg-hrad', name: 'Pražský hrad', icon: '🏰',
        coords: [50.0904, 14.4016], wikiTitle: 'Prague Castle',
        narrative: 'Prague Castle is the largest ancient castle complex in the world, covering over 70,000 square metres on a hill above the river. Inside its walls stand a Gothic cathedral, a Romanesque basilica, the Old Royal Palace and the Golden Lane where alchemists once worked.',
        phrases: [
          { cs: 'Jeden lístek, prosím.', en: 'One ticket, please.' },
          { cs: 'Kde je katedrála?', en: 'Where is the cathedral?' },
        ],
        quiz: {
          question: 'Prague Castle is notable for being the…?',
          options: ['largest ancient castle complex in the world', 'oldest castle in Europe', 'only medieval castle in Bohemia'],
          correct: 'largest ancient castle complex in the world',
          explanation: 'At over 70,000 m², Pražský hrad is recognised as the world\'s largest ancient castle complex.',
        },
      },
      {
        id: 'prg-staromestske', name: 'Staroměstské náměstí', icon: '🕰️',
        coords: [50.0875, 14.4213], wikiTitle: 'Old Town Square, Prague',
        narrative: 'Back in the Old Town, Staroměstské náměstí opens up around you. The medieval astronomical clock (Orloj) chimes on the hour, its mechanical figures parading past the windows. The twin Gothic towers of the Týn Church preside over one end of the square.',
        phrases: [
          { cs: 'Jedno pivo, prosím.', en: 'One beer, please.' },
          { cs: 'Kde je dobrá hospoda?', en: 'Where is a good pub?' },
        ],
        lessonId: 'praha-2',
        quiz: {
          question: 'The Orloj is a famous medieval…?',
          options: ['astronomical clock', 'church bell', 'water wheel'],
          correct: 'astronomical clock',
          explanation: 'The Prague Orloj, installed in 1410, is the world\'s oldest astronomical clock still in operation.',
        },
      },
    ],
  },

  // ─────────────────────────────  MONACO  ─────────────────────────────
  {
    id: 'monaco',
    name: 'Monaco',
    tagline: 'Bienvenue à Monaco !',
    theme: 'Grand Prix & Glamour',
    accentColor: '#CE1126',
    icon: '🎲',
    description:
      'Monaco est la plus petite monarchie du monde, coincée entre la France et la mer Méditerranée. ' +
      'Principauté de 2 km², c\'est le pays le plus densément peuplé de la planète — ' +
      'et l\'un des plus riches. Le Grand Prix de Formule 1 descend ses rues depuis 1929.',
    descriptionEn:
      'Monaco is the world\'s smallest monarchy, wedged between France and the Mediterranean sea. ' +
      'A principality of just 2 km², it is the most densely populated country on the planet — ' +
      'and one of the richest. The Formula 1 Grand Prix has been held on its streets since 1929.',
    photos: [
      { wikiTitle: 'Monaco', alt: 'Monaco harbour and skyline', caption: 'Monaco et son port vu d\'en haut' },
      { wikiTitle: 'Monte Carlo Casino', alt: 'Monte Carlo Casino entrance', caption: 'Le Casino de Monte-Carlo, temple du jeu' },
      { wikiTitle: 'Monaco Grand Prix', alt: 'Monaco Grand Prix circuit', caption: 'La Formule 1 dans les rues de Monaco' },
    ],
    vocabTopics: ['Arriving on the Riviera', 'The casino & palace', 'Harbour & the circuit'],
    grammarTopic: 'Prepositions of place (à / en / sur / dans)',
    lessons: [
      {
        id: 'monaco-1',
        title: 'Arriving on the Côte d\'Azur',
        description: 'From the train to the principality\'s first views.',
        steps: [
          { type: 'vocab', word: 'la principauté', article: 'la', english: 'the principality', example: 'Monaco est une principauté.' },
          { type: 'vocab', word: 'le prince', article: 'le', english: 'the prince', example: 'Le prince habite au Palais.' },
          { type: 'vocab', word: 'le port', article: 'le', english: 'the harbour / port', example: 'Le port est plein de yachts.' },
          { type: 'vocab', word: 'le yacht', article: 'le', english: 'the yacht', example: 'Un grand yacht est amarré au port.' },
          { type: 'vocab', word: 'luxueux', article: null, english: 'luxurious', example: 'L\'hôtel est très luxueux.' },
          { type: 'grammar', title: 'Prepositions of place', explanation: '"À" is used before cities ("à Monaco"). "En" before feminine countries ("en France"). "Sur" (on) and "dans" (in/inside) describe positions: "sur la terrasse", "dans le port".', examples: ['Je suis à Monaco.', 'Je viens de France.', 'Le yacht est dans le port.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which preposition goes before a city name in French?', options: ['à', 'en', 'sur', 'dans'], correct: 'à' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Le yacht est ___ le port. (in)', correct: 'dans' },
        ],
      },
      {
        id: 'monaco-2',
        title: 'The Casino & the Port',
        description: 'An evening at Monte-Carlo and the harbour.',
        steps: [
          { type: 'vocab', word: 'le casino', article: 'le', english: 'the casino', example: 'Le casino est ouvert le soir.' },
          { type: 'vocab', word: 'jouer', article: null, english: 'to play / to gamble', example: 'Il joue à la roulette.' },
          { type: 'vocab', word: 'gagner', article: null, english: 'to win', example: 'J\'espère gagner !' },
          { type: 'vocab', word: 'la mise', article: 'la', english: 'the bet / stake', example: 'La mise minimale est élevée.' },
          { type: 'vocab', word: 'formidable', article: null, english: 'fantastic / great', example: 'La vue depuis la terrasse est formidable.' },
          { type: 'grammar', title: 'Sur vs. dans', explanation: '"Sur" describes being on a surface: "sur la terrasse", "sur le circuit". "Dans" describes being inside an enclosed space: "dans le casino", "dans le port".', examples: ['Je suis sur la terrasse.', 'Nous sommes dans le casino.', 'La F1 passe sur le circuit.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "to win" in French?', options: ['gagner', 'jouer', 'perdre', 'miser'], correct: 'gagner' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Il joue ___ la roulette. (at)', correct: 'à' },
        ],
      },
    ],
    places: [
      {
        id: 'mon-station', name: 'Monaco-Monte-Carlo', icon: '🚉',
        coords: [43.7359, 7.4197], wikiTitle: 'Monaco-Monte-Carlo railway station',
        narrative: 'The train burrows out of the cliff face into Monaco-Monte-Carlo station, entirely underground. You ride the elevator up to street level and emerge into blazing Mediterranean sun, the sea gleaming below the terraced city.',
        phrases: [
          { fr: 'Où est le port ?', en: 'Where is the harbour?' },
          { fr: 'Est-ce loin du casino ?', en: 'Is it far from the casino?' },
          { fr: 'Y a-t-il un bus pour le Rocher ?', en: 'Is there a bus to the Rock?' },
        ],
        lessonId: 'monaco-1',
        quiz: {
          question: 'Monaco-Monte-Carlo station is unusual because it is entirely…?',
          options: ['underground', 'on the seafront', 'inside the palace walls'],
          correct: 'underground',
          explanation: 'The station was built underground inside the cliff to save Monaco\'s limited surface space.',
        },
      },
      {
        id: 'mon-casino', name: 'Casino de Monte-Carlo', icon: '🎲',
        coords: [43.7395, 7.4282], wikiTitle: 'Monte Carlo Casino',
        narrative: 'The Casino de Monte-Carlo rises at the end of a garden of manicured hedges and luxury cars. Its Belle Époque façade, designed by Charles Garnier (who also built the Paris Opéra), has been the backdrop of countless spy films. The dress code applies even for photos outside.',
        phrases: [
          { fr: 'L\'entrée est gratuite ?', en: 'Is entry free?' },
          { fr: 'La mise minimale est de combien ?', en: 'What is the minimum bet?' },
        ],
        lessonId: 'monaco-2',
        quiz: {
          question: 'The Monte-Carlo Casino was designed by which architect?',
          options: ['Charles Garnier', 'Gustave Eiffel', 'Baron Haussmann'],
          correct: 'Charles Garnier',
          explanation: 'Charles Garnier, who also designed the Paris Opéra, built the Monte-Carlo Casino in 1878.',
        },
      },
      {
        id: 'mon-rocher', name: 'Le Rocher', icon: '🏰',
        coords: [43.7308, 7.4214], wikiTitle: 'Monaco-Ville',
        narrative: 'Le Rocher — the Rock — is the old city of Monaco, perched on a headland 60 metres above the sea. Here stands the Prince\'s Palace, the cathedral where Princess Grace is buried, and streets barely wide enough for two people to pass. The changing of the guard happens every morning at 11:55.',
        phrases: [
          { fr: 'Où est le Palais du Prince ?', en: 'Where is the Prince\'s Palace?' },
          { fr: 'La vue est magnifique !', en: 'The view is magnificent!' },
        ],
        quiz: {
          question: 'Princess Grace of Monaco was formerly the American actress…?',
          options: ['Grace Kelly', 'Audrey Hepburn', 'Elizabeth Taylor'],
          correct: 'Grace Kelly',
          explanation: 'Grace Kelly married Prince Rainier III in 1956 and became Princess Grace of Monaco.',
        },
      },
      {
        id: 'mon-port', name: 'Port Hercule', icon: '⛵',
        coords: [43.7352, 7.4254], wikiTitle: 'Port Hercule',
        narrative: 'Port Hercule is Monaco\'s main harbour, every berth occupied by superyachts so large they dwarf the surrounding streets. During the Formula 1 Grand Prix the circuit runs right around the port — the famous hairpin corner is one of the most demanding in motorsport.',
        phrases: [
          { fr: 'Le port est impressionnant.', en: 'The harbour is impressive.' },
          { fr: 'Le Grand Prix passe ici ?', en: 'Does the Grand Prix go past here?' },
        ],
        lessonId: 'monaco-2',
        quiz: {
          question: 'During the Monaco Grand Prix, what does the circuit include at the harbour?',
          options: ['a hairpin corner', 'a tunnel under the sea', 'a drawbridge'],
          correct: 'a hairpin corner',
          explanation: 'The famous Loews/Grand Hotel hairpin at Port Hercule is one of the slowest corners in Formula 1.',
        },
      },
    ],
  },

  // ─────────────────────────────  LONDON  ─────────────────────────────
  {
    id: 'london',
    name: 'London',
    tagline: 'Welcome to London!',
    theme: 'Thames & Tradition',
    accentColor: '#012169',
    icon: '🎡',
    description:
      'London is the capital of the United Kingdom, sprawling across both banks of the Thames. ' +
      'From the medieval Tower of London to the steel towers of Canary Wharf, a thousand years ' +
      'of history and a hundred nations share the same streets. Eight million people call it home.',
    descriptionEn:
      'One of the world\'s most visited cities, London blends royal pageantry with cutting-edge culture. ' +
      'Its river, the Thames, has shaped the city since Roman times, and its Underground — ' +
      'the world\'s oldest metro — carries five million people a day.',
    photos: [
      { wikiTitle: 'London', alt: 'London skyline with Tower Bridge', caption: 'London and the Thames at dusk' },
      { wikiTitle: 'Tower Bridge', alt: 'Tower Bridge', caption: 'Tower Bridge, the symbol of London' },
      { wikiTitle: 'Tate Modern', alt: 'Tate Modern exterior', caption: 'Tate Modern in the former Bankside Power Station' },
    ],
    vocabTopics: ['The Underground & transport', 'Thames landmarks', 'British English expressions'],
    grammarTopic: 'British English modals: shall / ought to / had better',
    lessons: [
      {
        id: 'london-1',
        title: 'The Underground',
        description: 'Navigating the Tube and London\'s transport network.',
        steps: [
          { type: 'vocab', word: 'the Tube', article: null, english: 'the London Underground (informal)', example: 'Take the Tube to Tower Hill.' },
          { type: 'vocab', word: 'the Oyster card', article: null, english: 'London\'s contactless travel card', example: 'Top up your Oyster card at the machine.' },
          { type: 'vocab', word: 'the queue', article: null, english: 'a waiting line (British English)', example: 'Please join the queue.' },
          { type: 'vocab', word: 'Mind the gap', article: null, english: 'warning: space between train and platform', example: '"Mind the gap between the train and the platform edge."' },
          { type: 'vocab', word: 'brilliant', article: null, english: 'fantastic / great (British informal)', example: 'That\'s absolutely brilliant!' },
          { type: 'grammar', title: 'Shall and ought to', explanation: '"Shall" is used in British English for suggestions and offers: "Shall we go?" "Ought to" is a softer alternative to "should": "You ought to book ahead."', examples: ['Shall we take the Tube?', 'You ought to book in advance.', 'Shall I get the tickets?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'In British English, a "queue" is…?', options: ['a waiting line', 'a type of bus', 'a ticket barrier'], correct: 'a waiting line' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ we take the Tube? (suggestion)', correct: 'Shall' },
        ],
      },
      {
        id: 'london-2',
        title: 'Along the Thames',
        description: 'Walking the South Bank from Tate Modern to Tower Bridge.',
        steps: [
          { type: 'vocab', word: 'the South Bank', article: null, english: 'London\'s cultural riverside area', example: 'The South Bank has great street food.' },
          { type: 'vocab', word: 'cheers', article: null, english: 'thanks / goodbye (British informal)', example: '"Cheers, mate!" said the barman.' },
          { type: 'vocab', word: 'sorted', article: null, english: 'arranged / done / fine (British slang)', example: '"All sorted!" means everything is arranged.' },
          { type: 'vocab', word: 'a quid', article: null, english: 'one pound sterling (informal)', example: 'It costs two quid.' },
          { type: 'vocab', word: 'the Thames', article: null, english: 'London\'s river (pronounced "Temz")', example: 'The Thames is wide at Tower Bridge.' },
          { type: 'grammar', title: '"Had better" for strong advice', explanation: '"Had better" (often \'d better) gives strong advice implying something bad will happen otherwise: "You\'d better book ahead — it\'s very popular."', examples: ['You\'d better get an Oyster card.', 'We\'d better leave now or we\'ll miss the last Tube.', 'You\'d better not skip the queue.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: '"Cheers" in British English informally means…?', options: ['thanks / goodbye', 'only a toast with drinks', 'sorry'], correct: 'thanks / goodbye' },
          { type: 'exercise', subtype: 'fill-blank', question: 'You\'d ___ book in advance. (had better)', correct: 'better' },
        ],
      },
    ],
    places: [
      {
        id: 'lon-stpancras', name: 'St Pancras International', icon: '🚉',
        coords: [51.5309, -0.1231], wikiTitle: 'St Pancras railway station',
        narrative: 'Your Eurostar glides into St Pancras International, its vast Victorian Gothic redbrick façade soaring above the platforms. The station connects London to Paris in two hours and sixteen minutes through the Channel Tunnel. The Champagne bar on the platform is reportedly the longest in Europe.',
        phrases: [
          { gb: 'Which way to the Underground?', en: 'How do I get to the Tube?' },
          { gb: 'Could I top up my Oyster card, please?', en: 'I need to add credit to my travel card.' },
          { gb: 'Mind the gap!', en: 'Watch the space between the train and the platform.' },
        ],
        lessonId: 'london-1',
        quiz: {
          question: 'St Pancras International connects London to Paris via…?',
          options: ['the Channel Tunnel (Eurostar)', 'a ferry crossing', 'a suspension bridge'],
          correct: 'the Channel Tunnel (Eurostar)',
          explanation: 'The Eurostar runs through the Channel Tunnel, reaching Paris Gare du Nord in about 2h 16m.',
        },
      },
      {
        id: 'lon-towerbridge', name: 'Tower Bridge', icon: '🌉',
        coords: [51.5055, -0.0754], wikiTitle: 'Tower Bridge',
        narrative: 'Tower Bridge spans the Thames just east of the Tower of London, its twin Gothic towers and blue bascules instantly recognisable worldwide. Despite its medieval appearance, the bridge was completed in 1894. Its bascules still lift around 800 times a year to allow tall ships through.',
        phrases: [
          { gb: 'Shall we walk across?', en: 'Let\'s walk over the bridge.' },
          { gb: 'The view from the top is brilliant.', en: 'The view from the glass walkway is fantastic.' },
        ],
        lessonId: 'london-1',
        quiz: {
          question: 'Tower Bridge was completed in which year?',
          options: ['1894', '1066', '1750'],
          correct: '1894',
          explanation: 'Despite its Victorian Gothic style, Tower Bridge was completed in 1894, not in medieval times.',
        },
      },
      {
        id: 'lon-tate', name: 'Tate Modern', icon: '🎨',
        coords: [51.5076, -0.0994], wikiTitle: 'Tate Modern',
        narrative: 'Across the Millennium Bridge from St Paul\'s Cathedral, Tate Modern occupies the former Bankside Power Station. Its enormous Turbine Hall — once housing the generators — now holds vast art installations. Entry to the permanent collection is free.',
        phrases: [
          { gb: 'Is entry free?', en: 'Do I need to pay to get in?' },
          { gb: 'Where\'s the Turbine Hall?', en: 'How do I find the main hall?' },
        ],
        quiz: {
          question: 'Tate Modern is housed in a former…?',
          options: ['power station', 'prison', 'market hall'],
          correct: 'power station',
          explanation: 'Tate Modern opened in 2000 in the converted Bankside Power Station on the South Bank.',
        },
      },
      {
        id: 'lon-portobello', name: 'Portobello Road Market', icon: '🛒',
        coords: [51.5156, -0.2046], wikiTitle: 'Portobello Road Market',
        narrative: 'You end the day in Notting Hill at Portobello Road Market, one of London\'s great street markets. Antique dealers occupy the southern end; as you walk north the stalls shift to fruit and vegetables, then street food from every corner of the world. On Saturdays it stretches over a kilometre.',
        phrases: [
          { gb: 'How much is this?', en: 'What does this cost?' },
          { gb: 'Cheers, mate!', en: 'Thanks very much!' },
        ],
        lessonId: 'london-2',
        quiz: {
          question: 'Portobello Road Market is especially famous for…?',
          options: ['antiques', 'fresh fish', 'fashion'],
          correct: 'antiques',
          explanation: 'The southern section of Portobello Road is the world\'s largest antiques market.',
        },
      },
    ],
  },

  // ─────────────────────────────  MANCHESTER  ─────────────────────────────
  {
    id: 'manchester',
    name: 'Manchester',
    tagline: 'Welcome to Manchester!',
    theme: 'Music & Canals',
    accentColor: '#6CADDF',
    icon: '🎸',
    description:
      'Manchester is the beating heart of northern England, a city rebuilt by the Industrial Revolution ' +
      'and reborn through music. Its Victorian warehouses, converted into bars and galleries, ' +
      'line the canals of Castlefield; its music scene gave the world The Smiths, Oasis and the Haçienda.',
    descriptionEn:
      'Manchester pioneered the world\'s first railway and the Industrial Revolution. ' +
      'Today it is celebrated for its football clubs, its vibrant music heritage and its ' +
      'lively Northern Quarter — a grid of record shops, street art and independent cafés.',
    photos: [
      { wikiTitle: 'Manchester', alt: 'Manchester city centre', caption: 'Manchester city centre at dusk' },
      { wikiTitle: 'Northern Quarter, Manchester', alt: 'Northern Quarter street art', caption: 'The Northern Quarter, Manchester\'s creative hub' },
      { wikiTitle: 'Bridgewater Hall', alt: 'Bridgewater Hall', caption: 'Bridgewater Hall, home of the Hallé Orchestra' },
    ],
    vocabTopics: ['Arriving & getting around', 'Music & nightlife', 'Northern English expressions'],
    grammarTopic: 'Northern British English: right / proper / sorted / nowt',
    lessons: [
      {
        id: 'manchester-1',
        title: 'Arriving in Manchester',
        description: 'From Piccadilly station to the city centre.',
        steps: [
          { type: 'vocab', word: 'the tram', article: null, english: 'tram / Metrolink (Manchester\'s light rail)', example: 'Take the tram to St Peter\'s Square.' },
          { type: 'vocab', word: 'the city centre', article: null, english: 'downtown area (British term)', example: 'The city centre is ten minutes on the tram.' },
          { type: 'vocab', word: 'nowt', article: null, english: 'nothing (Northern English dialect)', example: '"There\'s nowt wrong wi\' that" — there\'s nothing wrong with it.' },
          { type: 'vocab', word: 'proper', article: null, english: 'really / very (Northern informal)', example: 'That\'s proper good.' },
          { type: 'vocab', word: 'ta', article: null, english: 'thanks (Northern English)', example: '"Ta!" is a quick thank you.' },
          { type: 'grammar', title: 'Right and proper as intensifiers', explanation: 'In Northern English dialects, "right" and "proper" function as intensifiers meaning "very" or "really". They are common in casual speech in Manchester, Liverpool and Yorkshire.', examples: ['"It\'s right cold today." (It\'s very cold.)', '"That\'s proper brilliant." (That\'s really great.)', '"She\'s right nice." (She\'s very kind.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'In Northern English, "nowt" means…?', options: ['nothing', 'something', 'anything'], correct: 'nothing' },
          { type: 'exercise', subtype: 'fill-blank', question: 'That\'s ___ good! (Northern: very/really)', correct: 'proper' },
        ],
      },
      {
        id: 'manchester-2',
        title: 'Music & the Night',
        description: 'Exploring the Northern Quarter and Manchester\'s music heritage.',
        steps: [
          { type: 'vocab', word: 'a gig', article: null, english: 'a live music concert (informal)', example: 'Are you going to the gig tonight?' },
          { type: 'vocab', word: 'the venue', article: null, english: 'the music or events venue', example: 'The venue opens at eight.' },
          { type: 'vocab', word: 'sorted', article: null, english: 'arranged / all good', example: '"All sorted!" — everything is arranged.' },
          { type: 'vocab', word: 'the Madchester scene', article: null, english: 'late 1980s Manchester music movement', example: 'The Haçienda was the heart of the Madchester scene.' },
          { type: 'vocab', word: 'a pint', article: null, english: '568ml glass of beer (standard British measure)', example: 'Shall we get a pint?' },
          { type: 'grammar', title: '"Sorted" and "mint"', explanation: '"Sorted" means something is arranged or settled. "Mint" (Northern slang) means excellent or great. Both are widely used in everyday Manchester English.', examples: ['"It\'s all sorted." (Everything is arranged.)', '"That gig was mint." (That gig was excellent.)', '"Are we sorted for tickets?" (Do we have our tickets?)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "a gig" mean?', options: ['a live music concert', 'a type of pub', 'a taxi ride'], correct: 'a live music concert' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Shall we get a ___? (a pint of beer)', correct: 'pint' },
        ],
      },
    ],
    places: [
      {
        id: 'man-piccadilly', name: 'Manchester Piccadilly', icon: '🚉',
        coords: [53.4774, -2.2309], wikiTitle: 'Manchester Piccadilly station',
        narrative: 'You arrive at Manchester Piccadilly, the city\'s main railway hub. Outside, the Metrolink tram pulls up — the quickest way into the city centre. Manchester\'s red-brick Victorian architecture lines the streets, hinting at its industrial past as the first city of the Industrial Revolution.',
        phrases: [
          { gb: 'Which tram goes to the city centre?', en: 'How do I get to the town centre?' },
          { gb: 'Is the Northern Quarter far?', en: 'How far is the creative district?' },
          { gb: 'Ta very much!', en: 'Thank you very much! (Northern English)' },
        ],
        lessonId: 'manchester-1',
        quiz: {
          question: 'Manchester played a key role in which historical revolution?',
          options: ['the Industrial Revolution', 'the French Revolution', 'the American Revolution'],
          correct: 'the Industrial Revolution',
          explanation: 'Manchester was a pioneer of the Industrial Revolution and home to the world\'s first inter-city railway (1830).',
        },
      },
      {
        id: 'man-northern-quarter', name: 'Northern Quarter', icon: '🎨',
        coords: [53.4841, -2.2340], wikiTitle: 'Northern Quarter, Manchester',
        narrative: 'The Northern Quarter is Manchester\'s creative heart: a grid of Victorian streets packed with independent record shops, street art, vintage clothing stores and café-bars. Oldham Street is its spine, plastered in murals. The area gave birth to bands like The Smiths and Joy Division.',
        phrases: [
          { gb: 'Have you got any Oasis records?', en: 'Do you have any Oasis albums?' },
          { gb: 'That\'s proper brilliant.', en: 'That is really great.' },
        ],
        lessonId: 'manchester-2',
        quiz: {
          question: 'Which band — formed in Manchester in 1982 — is famous for "There Is a Light That Never Goes Out"?',
          options: ['The Smiths', 'Oasis', 'Joy Division'],
          correct: 'The Smiths',
          explanation: 'The Smiths, fronted by Morrissey, were formed in Manchester in 1982 and are one of the most influential bands in British music.',
        },
      },
      {
        id: 'man-bridgewater', name: 'Bridgewater Hall', icon: '🎶',
        coords: [53.4769, -2.2444], wikiTitle: 'Bridgewater Hall',
        narrative: 'Bridgewater Hall is the home of the Hallé Orchestra, Britain\'s oldest professional symphony orchestra, founded in Manchester in 1858. The glass and steel concert hall stands beside the canal, and its acoustics are considered among the finest in Europe.',
        phrases: [
          { gb: 'Two tickets for tonight, please.', en: 'I\'d like two tickets for this evening.' },
          { gb: 'Is there a programme?', en: 'Do you have a concert schedule?' },
        ],
        quiz: {
          question: 'The Hallé, based at Bridgewater Hall, is Britain\'s oldest…?',
          options: ['professional symphony orchestra', 'music venue', 'conservatoire'],
          correct: 'professional symphony orchestra',
          explanation: 'The Hallé was founded in Manchester in 1858 by conductor Sir Charles Hallé — the oldest professional symphony orchestra in the UK.',
        },
      },
      {
        id: 'man-castlefield', name: 'Castlefield', icon: '🏭',
        coords: [53.4743, -2.2521], wikiTitle: 'Castlefield, Manchester',
        narrative: 'You end the day in Castlefield, Manchester\'s canal district, where Victorian railway viaducts arch over the waterways and converted warehouses house bars and restaurants. This was the birthplace of Britain\'s canal network. On summer evenings, tables spill out along the towpaths.',
        phrases: [
          { gb: 'A pint of bitter, please.', en: 'A glass of traditional English ale, please.' },
          { gb: 'It\'s mint out here.', en: 'It\'s excellent out here. (Northern slang)' },
        ],
        lessonId: 'manchester-2',
        quiz: {
          question: 'Castlefield was the birthplace of Britain\'s…?',
          options: ['canal network', 'railway network', 'textile industry'],
          correct: 'canal network',
          explanation: 'The Bridgewater Canal, which opened in 1761 through Castlefield, is considered Britain\'s first true canal.',
        },
      },
    ],
  },


  // ─────────────────────────────  GLASGOW  ─────────────────────────────
  {
    id: 'glasgow',
    name: 'Glasgow',
    tagline: 'Welcome tae Glasgow!',
    theme: 'Tenements & Whisky',
    accentColor: '#003087',
    icon: '🥃',
    description:
      'Glasgow is Scotland\'s largest city, a powerhouse of Victorian industry transformed into ' +
      'a cultural capital. Its grid of sandstone tenement blocks, art nouveau architecture and ' +
      'world-class museums sit alongside legendary pubs, whisky bars and a fierce civic pride.',
    descriptionEn:
      'Glasgow was once the "Second City of the Empire" — the world\'s leading shipbuilder. ' +
      'Today its galleries, music venues and the warm humour of its citizens make it ' +
      'one of Britain\'s most welcoming cities.',
    photos: [
      { wikiTitle: 'Glasgow', alt: 'Glasgow city centre', caption: 'Glasgow city centre and the River Clyde' },
      { wikiTitle: 'Kelvingrove Art Gallery and Museum', alt: 'Kelvingrove Museum', caption: 'Kelvingrove Art Gallery, Glasgow\'s great museum' },
      { wikiTitle: 'Glasgow Cathedral', alt: 'Glasgow Cathedral', caption: 'Glasgow Cathedral, the medieval heart of the city' },
    ],
    vocabTopics: ['Scots English expressions', 'Whisky & pubs', 'Art & museums'],
    grammarTopic: 'Scots English vocabulary and pronunciation',
    lessons: [
      {
        id: 'glasgow-1',
        title: 'Arriving in Glasgow',
        description: 'From Glasgow Central to the city streets.',
        steps: [
          { type: 'vocab', word: 'wee', article: null, english: 'small / little (Scottish)', example: '"A wee dram, please" — a small measure of whisky.' },
          { type: 'vocab', word: 'aye', article: null, english: 'yes (Scottish)', example: '"Aye, that\'s right!" — Yes, that\'s correct.' },
          { type: 'vocab', word: 'nae', article: null, english: 'no / not (Scottish)', example: '"Nae bother" — no problem.' },
          { type: 'vocab', word: 'the subway', article: null, english: 'Glasgow\'s circular underground (called "the Clockwork Orange")', example: 'Take the subway to Kelvinbridge.' },
          { type: 'vocab', word: 'dreich', article: null, english: 'grey, wet and miserable weather (Scottish)', example: '"It\'s a dreich day" — it\'s grey and rainy.' },
          { type: 'grammar', title: 'Scots English pronunciation notes', explanation: 'Scots English differs from standard British English in key ways: "wh-" words are often pronounced with a clear "wh" sound, "och" is used for "oh" (frustration/surprise), and glottal stops replace "t" in words like "butter" → "bu\'er".', examples: ['"Och aye!" — Oh yes!', '"Whit?" — What?', '"The wa\'er" — the water (glottal stop)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "dreich" mean?', options: ['grey, wet and miserable (weather)', 'beautiful', 'cold and snowy'], correct: 'grey, wet and miserable (weather)' },
          { type: 'exercise', subtype: 'fill-blank', question: '"___ bother" means "no problem" in Scottish. (nae)', correct: 'Nae' },
        ],
      },
      {
        id: 'glasgow-2',
        title: 'City Centre Culture',
        description: 'Kelvingrove, whisky bars and the West End.',
        steps: [
          { type: 'vocab', word: 'a dram', article: null, english: 'a measure of whisky (Scottish)', example: '"A wee dram, please."' },
          { type: 'vocab', word: 'brilliant', article: null, english: 'great / fantastic (widely used in Glasgow)', example: '"That\'s absolutely brilliant."' },
          { type: 'vocab', word: 'the gallus', article: null, english: 'bold, cheeky, self-confident (Glasgow slang)', example: '"He\'s dead gallus" — he\'s very confident.' },
          { type: 'vocab', word: 'the Merchant City', article: null, english: 'Glasgow\'s historic trading quarter, now bars and restaurants', example: 'The Merchant City is great for a night out.' },
          { type: 'vocab', word: 'single malt', article: null, english: 'whisky from one distillery (vs. blended)', example: 'I\'d prefer a single malt Scotch.' },
          { type: 'grammar', title: '"Dead" as an intensifier in Glasgow English', explanation: 'In Glasgow dialect, "dead" functions as an intensifier meaning "very" or "really": "dead good", "dead gallus", "dead easy". It is equivalent to "right" in other Northern dialects.', examples: ['"That\'s dead good." (That\'s very good.)', '"It\'s dead easy." (It\'s very easy.)', '"She\'s dead nice." (She\'s very kind.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'In Glasgow dialect, "dead" used before an adjective means…?', options: ['very / really', 'unfortunately', 'almost'], correct: 'very / really' },
          { type: 'exercise', subtype: 'fill-blank', question: '"A wee ___, please." (a measure of whisky)', correct: 'dram' },
        ],
      },
    ],
    places: [
      {
        id: 'gla-central', name: 'Glasgow Central', icon: '🚉',
        coords: [55.8584, -4.2575], wikiTitle: 'Glasgow Central station',
        narrative: 'You arrive at Glasgow Central, a grand Victorian terminus with a vast glass roof over twelve platforms. The famous "hielanman\'s umbrella" — the railway bridge over Argyle Street outside — was once a traditional gathering point for Highlanders who came to the city for work.',
        phrases: [
          { gb: 'Which way to the city centre?', en: 'How do I get to the town centre?' },
          { gb: 'Is it far tae Kelvingrove?', en: 'Is Kelvingrove far? (Scottish: "tae" = to)' },
          { gb: 'Aye, nae bother.', en: 'Yes, no problem.' },
        ],
        lessonId: 'glasgow-1',
        quiz: {
          question: 'Glasgow was once known as the "Second City of the Empire" due to its dominance in…?',
          options: ['shipbuilding', 'textile manufacturing', 'banking'],
          correct: 'shipbuilding',
          explanation: 'Glasgow\'s shipyards on the Clyde built many of the world\'s largest ships, earning the city its nickname.',
        },
      },
      {
        id: 'gla-necropolis', name: 'The Necropolis', icon: '⛪',
        coords: [55.8622, -4.2397], wikiTitle: 'Glasgow Necropolis',
        narrative: 'From beside the medieval cathedral you climb to the Necropolis, a Victorian garden cemetery on a hill above the city, its elaborate stone monuments to Glasgow\'s industrial elite stretching across the ridge. The view from the top takes in the cathedral, the River Clyde and the hills beyond.',
        phrases: [
          { gb: 'The view from up here is brilliant.', en: 'The view from up here is fantastic.' },
          { gb: 'It\'s a wee bit dreich today.', en: 'It\'s a little grey and wet today.' },
        ],
        lessonId: 'glasgow-1',
        quiz: {
          question: 'The Glasgow Necropolis is a Victorian example of which type of place?',
          options: ['a garden cemetery', 'a botanical garden', 'a public park'],
          correct: 'a garden cemetery',
          explanation: 'Opened in 1833, the Necropolis is a Victorian garden cemetery designed for contemplation.',
        },
      },
      {
        id: 'gla-kelvingrove', name: 'Kelvingrove Art Gallery', icon: '🖼️',
        coords: [55.8685, -4.2879], wikiTitle: 'Kelvingrove Art Gallery and Museum',
        narrative: 'Kelvingrove Art Gallery and Museum is one of the finest free museums in Britain, housed in a spectacular red sandstone building. Inside: Salvador Dalí\'s enormous "Christ of Saint John of the Cross", a Spitfire aeroplane hanging from the ceiling, and the legendary "you\'re not getting the right answer" quiz question about the building\'s orientation.',
        phrases: [
          { gb: 'Is entry free?', en: 'Do I need to pay to get in?' },
          { gb: 'Where\'s the Dalí?', en: 'Where is the Dalí painting?' },
        ],
        lessonId: 'glasgow-2',
        quiz: {
          question: 'Kelvingrove\'s most famous painting is by Salvador Dalí and is called…?',
          options: ['"Christ of Saint John of the Cross"', '"The Persistence of Memory"', '"Guernica"'],
          correct: '"Christ of Saint John of the Cross"',
          explanation: 'Dalí\'s "Christ of Saint John of the Cross" (1951) was purchased by Glasgow Corporation and is the museum\'s most visited work.',
        },
      },
      {
        id: 'gla-ashton', name: 'Ashton Lane', icon: '🥃',
        coords: [55.8754, -4.2959], wikiTitle: 'Ashton Lane',
        narrative: 'You end in Ashton Lane, a cobbled alley in the West End lined with bars, restaurants and a cinema. This is where Glasgow\'s students and academics gather, and the outdoor terraces buzz even on the driest of dreich evenings. A wee dram of single malt ends the perfect day.',
        phrases: [
          { gb: 'A wee dram of Islay malt, please.', en: 'A small measure of Islay whisky, please.' },
          { gb: 'It\'s dead brilliant here.', en: 'It\'s really great here.' },
        ],
        lessonId: 'glasgow-2',
        quiz: {
          question: 'Ashton Lane in Glasgow\'s West End is known for being…?',
          options: ['a cobbled alley of bars and restaurants', 'a Victorian shopping arcade', 'a riverside market'],
          correct: 'a cobbled alley of bars and restaurants',
          explanation: 'Ashton Lane is a narrow, lit cobblestone lane in the heart of Glasgow\'s West End social scene.',
        },
      },
    ],
  },

  // ─────────────────────────────  DUBLIN  ─────────────────────────────
  {
    id: 'dublin',
    name: 'Dublin',
    tagline: 'Fáilte go Baile Átha Cliath!',
    theme: 'Craic & Guinness',
    accentColor: '#169B62',
    icon: '🍀',
    description:
      'Baile Átha Cliath — Dublin — is the capital of Ireland, a compact city of Georgian squares, ' +
      'medieval laneways and legendary pubs on the banks of the River Liffey. ' +
      'Irish and English are both official languages, and the warmth of the welcome — the craic — is genuine.',
    descriptionEn:
      'Dublin is one of Europe\'s most literary cities: home of Joyce, Beckett and Wilde. ' +
      'Its pub culture is a living institution, its coastline is minutes from the city centre, ' +
      'and the word "craic" (fun, good company, good conversation) is its philosophy of life.',
    photos: [
      { wikiTitle: 'Dublin', alt: 'Dublin city centre', caption: 'Dublin and the River Liffey' },
      { wikiTitle: 'Trinity College, Dublin', alt: 'Trinity College', caption: 'Trinity College, home of the Book of Kells' },
      { wikiTitle: 'Temple Bar, Dublin', alt: 'Temple Bar district', caption: 'Temple Bar, Dublin\'s cultural quarter' },
    ],
    vocabTopics: ['Irish Gaelic greetings', 'The pub & craic', 'History & literature'],
    grammarTopic: 'Irish Gaelic greetings and their English echoes',
    lessons: [
      {
        id: 'dublin-1',
        title: 'Arriving in Dublin',
        description: 'From Connolly Station to the Georgian streets.',
        steps: [
          { type: 'vocab', word: 'Dia dhuit', article: null, english: 'Hello (Irish: literally "God be with you")', example: '"Dia dhuit!" — Hello!' },
          { type: 'vocab', word: 'Go raibh maith agat', article: null, english: 'Thank you (Irish)', example: '"Go raibh maith agat!" — Thank you!' },
          { type: 'vocab', word: 'craic', article: null, english: 'fun / good conversation / atmosphere', example: '"The craic was mighty last night." — It was great fun.' },
          { type: 'vocab', word: 'the Dart', article: null, english: 'Dublin Area Rapid Transit (coastal train)', example: 'Take the DART to Howth.' },
          { type: 'vocab', word: 'grand', article: null, english: 'fine / great (Irish English)', example: '"That\'s grand." — That\'s fine/great.' },
          { type: 'grammar', title: 'Irish Gaelic greetings', explanation: '"Dia dhuit" (hello, said to one person) and "Dia dhaoibh" (hello, to a group) are the standard Irish greetings. The reply to "Dia dhuit" is "Dia is Muire dhuit" (God and Mary be with you). These are still heard daily in Ireland.', examples: ['"Dia dhuit!" — Hello!', '"Go raibh maith agat!" — Thank you!', '"Slán!" — Goodbye!'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "Go raibh maith agat" mean in Irish?', options: ['Thank you', 'Goodbye', 'Hello'], correct: 'Thank you' },
          { type: 'exercise', subtype: 'fill-blank', question: '"___ dhuit!" means Hello in Irish.', correct: 'Dia' },
        ],
      },
      {
        id: 'dublin-2',
        title: 'The Pub & Temple Bar',
        description: 'A pint of Guinness and an evening in the cultural quarter.',
        steps: [
          { type: 'vocab', word: 'a pint of Guinness', article: null, english: 'a glass (568ml) of the iconic Irish stout', example: '"A pint of Guinness, please."' },
          { type: 'vocab', word: 'Sláinte', article: null, english: 'Cheers! (Irish, lit. "health")', example: '"Sláinte!" before drinking.' },
          { type: 'vocab', word: 'the snug', article: null, english: 'a small private booth inside a traditional Irish pub', example: 'We sat in the snug by the fire.' },
          { type: 'vocab', word: 'the session', article: null, english: 'an informal gathering for traditional Irish music', example: 'There\'s a session starting at nine.' },
          { type: 'vocab', word: 'grand stretch', article: null, english: 'a long evening of daylight (Irish English)', example: '"There\'s a grand stretch in the evenings now." — the days are getting longer.' },
          { type: 'grammar', title: 'Irish English: "after" + -ing', explanation: 'Irish English uses a unique construction: "I\'m after doing it" means "I have just done it". This reflects the influence of Irish Gaelic syntax on Irish English and is heard throughout the country.', examples: ['"I\'m after eating." — I have just eaten.', '"She\'s after leaving." — She has just left.', '"We\'re after finding a great pub!" — We\'ve just found a great pub!'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "Sláinte" mean when said at a pub?', options: ['Cheers / to your health', 'Goodbye', 'Thank you'], correct: 'Cheers / to your health' },
          { type: 'exercise', subtype: 'fill-blank', question: '"I\'m ___ eating." means "I have just eaten" in Irish English.', correct: 'after' },
        ],
      },
    ],
    places: [
      {
        id: 'dub-connolly', name: 'Connolly Station', icon: '🚉',
        coords: [53.3519, -6.2491], wikiTitle: 'Dublin Connolly station',
        narrative: 'Your train pulls into Connolly Station, named after James Connolly, one of the leaders of the 1916 Easter Rising. Outside, the Custom House dome glows across the Liffey. The DART coastal train begins its journey here, running north to Howth and south to Bray along the bay.',
        phrases: [
          { ga: 'Dia dhuit!', en: 'Hello!' },
          { ga: 'Cá bhfuil an lár na cathrach?', en: 'Where is the city centre?' },
          { ga: 'Go raibh maith agat.', en: 'Thank you.' },
        ],
        lessonId: 'dublin-1',
        quiz: {
          question: 'The Easter Rising of 1916 was a rebellion against which power?',
          options: ['British rule', 'French occupation', 'the Roman Church'],
          correct: 'British rule',
          explanation: 'The Easter Rising was an armed insurrection against British rule in Ireland, a pivotal event in Irish independence.',
        },
      },
      {
        id: 'dub-trinity', name: 'Trinity College', icon: '📖',
        coords: [53.3439, -6.2546], wikiTitle: 'Trinity College, Dublin',
        narrative: 'You walk through the gates of Trinity College, founded in 1592. In the Long Room of its old library, 200,000 leather-bound volumes line oak galleries rising to a barrel-vaulted ceiling. Here lies the Book of Kells, an illuminated gospel manuscript created by Celtic monks around 800 AD.',
        phrases: [
          { ga: 'Cá bhfuil Leabhar Cheanannais?', en: 'Where is the Book of Kells?' },
          { ga: 'Amháin ticéad, le do thoil.', en: 'One ticket, please.' },
        ],
        lessonId: 'dublin-1',
        quiz: {
          question: 'The Book of Kells is an illuminated manuscript of the…?',
          options: ['four Gospels', 'Old Testament', 'Irish myths'],
          correct: 'four Gospels',
          explanation: 'The Book of Kells contains the four Gospels in Latin, decorated with elaborate illustrations by Celtic monks around AD 800.',
        },
      },
      {
        id: 'dub-temple-bar', name: 'Temple Bar', icon: '🎶',
        coords: [53.3455, -6.2647], wikiTitle: 'Temple Bar, Dublin',
        narrative: 'Temple Bar is Dublin\'s cultural quarter, a cobbled maze of pubs, galleries and music venues between the Liffey and Dame Street. On any given evening a traditional music session starts spontaneously in a corner pub — fiddles, tin whistles and a bodhrán drum filling the snug.',
        phrases: [
          { ga: 'Pionta Guinness, le do thoil.', en: 'A pint of Guinness, please.' },
          { ga: 'Sláinte!', en: 'Cheers! (to your health)' },
        ],
        lessonId: 'dublin-2',
        quiz: {
          question: 'What is a traditional Irish music "session"?',
          options: ['an informal gathering for live traditional music', 'a formal concert', 'a recorded music broadcast'],
          correct: 'an informal gathering for live traditional music',
          explanation: 'A session (seisiún) is an informal gathering where musicians play traditional Irish music together, usually in a pub.',
        },
      },
      {
        id: 'dub-howth', name: 'Howth Head', icon: '⛵',
        coords: [53.3862, -6.0657], wikiTitle: 'Howth Head',
        narrative: 'You take the DART north along Dublin Bay to Howth, a fishing village on a rocky peninsula. The cliff walk circles the headland with views across the Irish Sea. The harbour is busy with trawlers and seals, and the seafood restaurants are legendary. Dublin feels very far away.',
        phrases: [
          { ga: 'Conas atá tú?', en: 'How are you? (Irish greeting)' },
          { ga: 'Tá sé go hálainn.', en: 'It is beautiful.' },
        ],
        lessonId: 'dublin-2',
        quiz: {
          question: 'Howth is best reached from Dublin city centre by…?',
          options: ['the DART coastal train', 'ferry', 'the Luas tram'],
          correct: 'the DART coastal train',
          explanation: 'The DART runs along Dublin Bay from the city centre north to Howth in about 30 minutes.',
        },
      },
    ],
  },

  // ─────────────────────────────  OSLO  ─────────────────────────────
  {
    id: 'oslo',
    name: 'Oslo',
    tagline: 'Velkommen til Oslo!',
    theme: 'Fjords & Vikings',
    accentColor: '#EF2B2D',
    icon: '🌊',
    description:
      'Oslo er Norges hovedstad, en moderne by ved inngangen til Oslofjorden. ' +
      'Byens mange museer, fra vikingskip til Edvard Munch, forteller om et folk av sjøfarere ' +
      'og kunstnere. Marka — den store skogen rundt byen — begynner der husene slutter.',
    descriptionEn:
      'Oslo is the capital of Norway, a modern city at the mouth of the Oslofjord. ' +
      'Its museums — from Viking ships to Edvard Munch — tell the story of a seafaring, artistic people. ' +
      'The Marka forest begins where the city streets end: skiing in winter, hiking in summer.',
    photos: [
      { wikiTitle: 'Oslo', alt: 'Oslo city centre and fjord', caption: 'Oslo ved Oslofjorden' },
      { wikiTitle: 'Viking Ship Museum', alt: 'Viking Ship Museum Oslo', caption: 'Vikingskipene på Bygdøy' },
      { wikiTitle: 'Akershus Fortress', alt: 'Akershus Fortress Oslo', caption: 'Akershus festning over fjorden' },
    ],
    vocabTopics: ['By the fjord', 'Vikings & museums', 'Nature & outdoors'],
    grammarTopic: 'Norwegian articles: en / et and the definite suffix',
    lessons: [
      {
        id: 'oslo-1',
        title: 'By the Fjord',
        description: 'Arriving in Oslo and finding the waterfront.',
        steps: [
          { type: 'vocab', word: 'en fjord', article: 'en', english: 'a fjord', example: 'Oslofjorden er veldig vakker.' },
          { type: 'vocab', word: 'et skip', article: 'et', english: 'a ship', example: 'Et gammelt skip ligger i museet.' },
          { type: 'vocab', word: 'en kai', article: 'en', english: 'a quay / wharf', example: 'Vi går langs kaien.' },
          { type: 'vocab', word: 'takk', article: null, english: 'thank you', example: 'Tusen takk!' },
          { type: 'vocab', word: 'unnskyld', article: null, english: 'excuse me / sorry', example: 'Unnskyld, hvor er stasjonen?' },
          { type: 'grammar', title: 'Norwegian articles and the definite suffix', explanation: 'Norwegian has two genders: common (en) and neuter (et). The indefinite article comes before the noun. To make a noun definite ("the"), add a suffix: -en/-a for common, -et for neuter.', examples: ['en fjord → fjorden (the fjord)', 'et skip → skipet (the ship)', 'en kai → kaien (the quay)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "the fjord" in Norwegian (with the definite suffix)?', options: ['fjorden', 'en fjord', 'fjordet', 'fjords'], correct: 'fjorden' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Tusen ___! (thank you)', correct: 'takk' },
        ],
      },
      {
        id: 'oslo-2',
        title: 'Museums & Viking Ships',
        description: 'Visiting the Viking Ship Museum on Bygdøy peninsula.',
        steps: [
          { type: 'vocab', word: 'en viking', article: 'en', english: 'a Viking', example: 'Vikingene var gode sjøfarere.' },
          { type: 'vocab', word: 'et museum', article: 'et', english: 'a museum', example: 'Museet er åpent hver dag.' },
          { type: 'vocab', word: 'en billett', article: 'en', english: 'a ticket', example: 'Én billett, takk.' },
          { type: 'vocab', word: 'vakker', article: null, english: 'beautiful', example: 'Skipet er veldig vakker.' },
          { type: 'vocab', word: 'gammel', article: null, english: 'old', example: 'Det er et veldig gammelt skip.' },
          { type: 'grammar', title: 'Et-nouns in the definite form', explanation: 'Neuter nouns (et-words) take -et to become definite: "et skip" → "skipet" (the ship), "et museum" → "museet" (the museum). Common nouns take -en: "en kai" → "kaien".', examples: ['et skip → skipet (the ship)', 'et museum → museet (the museum)', 'en billett → billetten (the ticket)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "the museum" in Norwegian?', options: ['museet', 'museen', 'museum', 'en museum'], correct: 'museet' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Én ___, takk. (ticket)', correct: 'billett' },
        ],
      },
    ],
    places: [
      {
        id: 'osl-oslo-s', name: 'Oslo S', icon: '🚉',
        coords: [59.9109, 10.7528], wikiTitle: 'Oslo Central Station',
        narrative: 'Your train arrives at Oslo S — Oslo Sentralstasjon — the main hub for Norwegian rail. Outside, the Barcode district\'s slim high-rises line the waterfront, and behind them you can already see the fjord. The metro, tram and bus all connect from here.',
        phrases: [
          { no: 'Hvor er Aker Brygge?', en: 'Where is Aker Brygge?' },
          { no: 'Hvordan kommer jeg til Bygdøy?', en: 'How do I get to Bygdøy?' },
          { no: 'Er det langt?', en: 'Is it far?' },
        ],
        lessonId: 'oslo-1',
        quiz: {
          question: 'Norway is known for having the world\'s largest collection of…?',
          options: ['sovereign wealth (oil fund)', 'Viking artefacts', 'fjords'],
          correct: 'sovereign wealth (oil fund)',
          explanation: 'Norway\'s Government Pension Fund Global, funded by North Sea oil, is the world\'s largest sovereign wealth fund.',
        },
      },
      {
        id: 'osl-akershus', name: 'Akershus Festning', icon: '🏰',
        coords: [59.9081, 10.7350], wikiTitle: 'Akershus Fortress',
        narrative: 'Akershus Fortress stands on a rocky promontory above the fjord, its medieval walls built in the 1290s and later expanded into a Renaissance palace. From the ramparts you look across the harbour to the islands and the open fjord beyond. In WWII it was used by the Nazi occupiers as a prison.',
        phrases: [
          { no: 'Festningen er imponerende.', en: 'The fortress is impressive.' },
          { no: 'Utsikten er vakker.', en: 'The view is beautiful.' },
        ],
        lessonId: 'oslo-1',
        quiz: {
          question: 'Akershus Fortress was originally built in the…?',
          options: ['1290s', '1500s', '1800s'],
          correct: '1290s',
          explanation: 'Construction of Akershus Fortress began around 1290 under King Haakon V of Norway.',
        },
      },
      {
        id: 'osl-vikingship', name: 'Vikingskipshuset', icon: '⛵',
        coords: [59.9049, 10.6849], wikiTitle: 'Viking Ship Museum',
        narrative: 'On the Bygdøy peninsula, the Vikingskipshuset houses three of the world\'s best-preserved Viking ships, buried as funeral vessels over 1,000 years ago. The largest — the Oseberg ship — was the burial vessel of a high-ranking woman and still retains traces of elaborate wood carving.',
        phrases: [
          { no: 'Én billett, takk.', en: 'One ticket, please.' },
          { no: 'Skipene er fantastiske!', en: 'The ships are fantastic!' },
        ],
        lessonId: 'oslo-2',
        quiz: {
          question: 'The Viking ships in the Vikingskipshuset were found buried as…?',
          options: ['funeral vessels', 'warships sunk in battle', 'trading ships'],
          correct: 'funeral vessels',
          explanation: 'The ships were buried as part of elaborate Viking funeral rituals, preserving them in the clay soil for over a thousand years.',
        },
      },
      {
        id: 'osl-aker-brygge', name: 'Aker Brygge', icon: '🌊',
        coords: [59.9104, 10.7265], wikiTitle: 'Aker Brygge',
        narrative: 'You end at Aker Brygge, the old shipyard converted into a waterfront complex of restaurants, galleries and marina. The fjord stretches south, ferries crossing to the islands. In summer the outdoor terraces fill until midnight under Norway\'s long evening light.',
        phrases: [
          { no: 'En kaffe, takk.', en: 'A coffee, please.' },
          { no: 'Fjorden er vakker om kvelden.', en: 'The fjord is beautiful in the evening.' },
        ],
        lessonId: 'oslo-2',
        quiz: {
          question: 'Aker Brygge was formerly a…?',
          options: ['shipyard', 'fish market', 'naval fortress'],
          correct: 'shipyard',
          explanation: 'Aker Brygge was one of Norway\'s largest shipyards before being redeveloped as a waterfront district in the 1980s.',
        },
      },
    ],
  },

  // ─────────────────────────────  STOCKHOLM  ─────────────────────────────
  {
    id: 'stockholm',
    name: 'Stockholm',
    tagline: 'Välkommen till Stockholm!',
    theme: 'Islands & Design',
    accentColor: '#006AA7',
    icon: '👑',
    description:
      'Stockholm är Sveriges huvudstad, byggd på fjorton öar där Mälaren möter Östersjön. ' +
      'Gamla Stan — den medeltida stadskärnan — är ett virrvarr av gränder och röda hus, ' +
      'omgivet av museer, designbutiker och ett tunnelbana dekorerat som ett konstgalleri.',
    descriptionEn:
      'Stockholm is the capital of Sweden, built across fourteen islands where Lake Mälaren meets the Baltic Sea. ' +
      'Gamla Stan — the medieval old town — is a maze of lanes and red-painted houses, ' +
      'surrounded by world-class museums, design shops and a metro system decorated like an art gallery.',
    photos: [
      { wikiTitle: 'Stockholm', alt: 'Stockholm cityscape', caption: 'Stockholm — den flytande staden' },
      { wikiTitle: 'Gamla Stan', alt: 'Gamla Stan old town', caption: 'Gamla Stan, Stockholms medeltida stadskärna' },
      { wikiTitle: 'Vasa (ship)', alt: 'Vasa warship', caption: 'Vasaskeppet — en hel 1600-talsflotta i ett museum' },
    ],
    vocabTopics: ['Gamla Stan & history', 'Fika & design', 'Islands & the archipelago'],
    grammarTopic: 'Swedish noun genders (en / ett)',
    lessons: [
      {
        id: 'stockholm-1',
        title: 'Gamla Stan',
        description: 'Exploring the medieval old town on foot.',
        steps: [
          { type: 'vocab', word: 'en gata', article: 'en', english: 'a street', example: 'Gatan är smal och lång.' },
          { type: 'vocab', word: 'ett torg', article: 'ett', english: 'a square', example: 'Stortorget är vackert.' },
          { type: 'vocab', word: 'en kyrka', article: 'en', english: 'a church', example: 'Kyrkan är gammal.' },
          { type: 'vocab', word: 'tack', article: null, english: 'thank you', example: 'Tack så mycket!' },
          { type: 'vocab', word: 'förlåt', article: null, english: 'excuse me / sorry', example: 'Förlåt, var är tunnelbanan?' },
          { type: 'grammar', title: 'Swedish noun genders: en and ett', explanation: 'Swedish nouns are either common gender (en) or neuter (ett). About 75% take "en". To make a noun definite, add a suffix: -en/-n for en-words, -et/-t for ett-words.', examples: ['en gata → gatan (the street)', 'ett torg → torget (the square)', 'en kyrka → kyrkan (the church)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "the square" in Swedish (definite form)?', options: ['torget', 'torg', 'ett torg', 'torgen'], correct: 'torget' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Tack så ___! (thank you very much)', correct: 'mycket' },
        ],
      },
      {
        id: 'stockholm-2',
        title: 'Fika & Design',
        description: 'The Swedish coffee break and Scandinavian design.',
        steps: [
          { type: 'vocab', word: 'fika', article: null, english: 'a coffee break with something sweet (Swedish cultural institution)', example: 'Vi fikar klockan tre.' },
          { type: 'vocab', word: 'en kanelbulle', article: 'en', english: 'a cinnamon bun', example: 'En kanelbulle och en kaffe, tack.' },
          { type: 'vocab', word: 'ett kaffe', article: 'ett', english: 'a coffee', example: 'Kan jag få ett kaffe?' },
          { type: 'vocab', word: 'lagom', article: null, english: 'just right / not too much, not too little (key Swedish concept)', example: '"Lagom är bäst." — Just right is best.' },
          { type: 'vocab', word: 'snälla', article: null, english: 'please (polite)', example: 'En kanelbulle, snälla.' },
          { type: 'grammar', title: 'Definite form: -en vs. -et', explanation: 'Definite ("the") is formed with a suffix. En-words: add -en (gata → gatan). Att-words ending in vowel: add -n (kaffe → kaffet? No — ett kaffe → kaffet). Learn each noun with its gender.', examples: ['en kanelbulle → kanelbullen (the cinnamon bun)', 'ett kaffe → kaffet (the coffee)', 'en butik → butiken (the shop)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "fika"?', options: ['a Swedish coffee break tradition', 'a type of bread', 'a Nordic festival'], correct: 'a Swedish coffee break tradition' },
          { type: 'exercise', subtype: 'fill-blank', question: 'En kanelbulle och ett kaffe, ___. (please)', correct: 'tack' },
        ],
      },
    ],
    places: [
      {
        id: 'sto-centralstation', name: 'Stockholm Centralstation', icon: '🚉',
        coords: [59.3303, 18.0584], wikiTitle: 'Stockholm Central Station',
        narrative: 'You arrive at Stockholm Centralstation, the hub of Swedish rail. Outside the great red-brick building, the city spreads across the water. The metro entrance is right here — Stockholm\'s T-banan is famous for being the world\'s longest art exhibition, its 90 stations decorated by hundreds of artists.',
        phrases: [
          { sv: 'Var är tunnelbanan?', en: 'Where is the metro?' },
          { sv: 'Hur kommer jag till Gamla Stan?', en: 'How do I get to Gamla Stan?' },
          { sv: 'Är det långt?', en: 'Is it far?' },
        ],
        lessonId: 'stockholm-1',
        quiz: {
          question: 'Stockholm\'s metro (T-banan) is famous for being the world\'s longest…?',
          options: ['art exhibition', 'underground tunnel', 'automated railway'],
          correct: 'art exhibition',
          explanation: 'Over 90 stations of the T-banan are decorated by Swedish and international artists, making it a 110km long art gallery.',
        },
      },
      {
        id: 'sto-gamla-stan', name: 'Gamla Stan', icon: '🏰',
        coords: [59.3251, 18.0703], wikiTitle: 'Gamla Stan',
        narrative: 'Gamla Stan — the Old Town — is a small island of medieval streets, its buildings painted in ochres, reds and yellows. The narrow lanes barely changed since the 13th century. The royal palace, the cathedral and the stock exchange all face each other across the cobbled Stortorget square.',
        phrases: [
          { sv: 'Var är kungliga slottet?', en: 'Where is the Royal Palace?' },
          { sv: 'Vilken vacker gata!', en: 'What a beautiful street!' },
        ],
        lessonId: 'stockholm-1',
        quiz: {
          question: 'Gamla Stan (the Old Town) was founded in which century?',
          options: ['the 13th century', 'the 17th century', 'the 9th century'],
          correct: 'the 13th century',
          explanation: 'Stockholm was founded in 1252, and Gamla Stan preserves its medieval street plan.',
        },
      },
      {
        id: 'sto-vasa', name: 'Vasa museet', icon: '⛵',
        coords: [59.3280, 18.0913], wikiTitle: 'Vasa Museum',
        narrative: 'The Vasa Museum houses the warship Vasa, which sank on its maiden voyage in Stockholm harbour in 1628 and was raised almost intact in 1961. The enormous gilded warship, still 95% original timber, fills its own museum building. It is one of the most visited museums in Scandinavia.',
        phrases: [
          { sv: 'En biljett, tack.', en: 'One ticket, please.' },
          { sv: 'Skeppet är fantastiskt!', en: 'The ship is fantastic!' },
        ],
        lessonId: 'stockholm-2',
        quiz: {
          question: 'The Vasa warship sank in 1628 during what event?',
          options: ['its maiden voyage', 'a battle in the Baltic', 'a storm at sea'],
          correct: 'its maiden voyage',
          explanation: 'The Vasa sank just 1,300 metres into its maiden voyage in Stockholm harbour, likely due to poor stability design.',
        },
      },
      {
        id: 'sto-fotografiska', name: 'Fotografiska', icon: '📸',
        coords: [59.3176, 18.0857], wikiTitle: 'Fotografiska',
        narrative: 'You end the day at Fotografiska, Stockholm\'s photography museum on the Södermalm waterfront, housed in a beautiful art nouveau customs house. Its rotating exhibitions showcase the world\'s finest photographers. The rooftop restaurant overlooks Gamla Stan and the water — the perfect spot for fika as the sun sets.',
        phrases: [
          { sv: 'En kanelbulle och ett kaffe, tack.', en: 'A cinnamon bun and a coffee, please.' },
          { sv: 'Utsikten är fantastisk.', en: 'The view is fantastic.' },
        ],
        lessonId: 'stockholm-2',
        quiz: {
          question: 'Fotografiska is a museum dedicated to…?',
          options: ['photography', 'modern art', 'Viking history'],
          correct: 'photography',
          explanation: 'Fotografiska is one of the world\'s most visited photography museums, founded in Stockholm in 2010.',
        },
      },
    ],
  },


  // ─────────────────────────────  WARSAW  ─────────────────────────────
  {
    id: 'warsaw',
    name: 'Warszawa',
    tagline: 'Witamy w Warszawie!',
    theme: 'Rising City',
    accentColor: '#DC143C',
    icon: '🦅',
    description:
      'Warszawa jest stolicą Polski, miastem, które podniosło się z gruzów. ' +
      'Zniszczone w 85% podczas II wojny światowej, zostało odbudowane przez jej mieszkańców ' +
      'z dawnej chwały — Stare Miasto wpisano na Listę Dziedzictwa UNESCO właśnie za ten wysiłek.',
    descriptionEn:
      'Warsaw is the capital of Poland, a city that rose from rubble. ' +
      'Destroyed 85% during World War II, it was rebuilt by its citizens from old photographs and memories — ' +
      'its Old Town is UNESCO-listed precisely for this act of reconstruction.',
    photos: [
      { wikiTitle: 'Warsaw', alt: 'Warsaw Old Town', caption: 'Warszawa — Stare Miasto odbudowane z gruzów' },
      { wikiTitle: 'Palace of Culture and Science', alt: 'Palace of Culture and Science', caption: 'Pałac Kultury i Nauki, symbol stalinowskiej Warszawy' },
      { wikiTitle: 'Warsaw Old Town Market Place', alt: 'Warsaw Old Town Market', caption: 'Rynek Starego Miasta, serce historycznej Warszawy' },
    ],
    vocabTopics: ['Arriving & getting around', 'Old Town & history', 'Pierogi & Polish food'],
    grammarTopic: 'Polish noun cases: nominative vs. locative',
    lessons: [
      {
        id: 'warsaw-1',
        title: 'Arriving in Warsaw',
        description: 'From Warszawa Centralna to the city centre.',
        steps: [
          { type: 'vocab', word: 'dworzec', article: null, english: 'train station', example: 'Dworzec jest w centrum.' },
          { type: 'vocab', word: 'metro', article: null, english: 'metro', example: 'Metro jedzie do Starego Miasta.' },
          { type: 'vocab', word: 'dziękuję', article: null, english: 'thank you', example: 'Dziękuję bardzo!' },
          { type: 'vocab', word: 'przepraszam', article: null, english: 'excuse me / I\'m sorry', example: 'Przepraszam, gdzie jest metro?' },
          { type: 'vocab', word: 'bilet', article: null, english: 'ticket', example: 'Jeden bilet, proszę.' },
          { type: 'grammar', title: 'Nominative vs. locative', explanation: 'Polish uses different noun endings depending on their role. The locative case (used after "w" = in) changes noun endings: Warszawa → w Warszawie, miasto → w mieście.', examples: ['Warszawa (nominative — subject)', 'w Warszawie (locative — in Warsaw)', 'w centrum (in the centre)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you" in Polish?', options: ['dziękuję', 'przepraszam', 'proszę', 'tak'], correct: 'dziękuję' },
          { type: 'exercise', subtype: 'fill-blank', question: '___, gdzie jest metro? (excuse me)', correct: 'Przepraszam' },
        ],
      },
      {
        id: 'warsaw-2',
        title: 'Old Town & Pierogi',
        description: 'Exploring the reconstructed Old Town and trying Polish food.',
        steps: [
          { type: 'vocab', word: 'pierogi', article: null, english: 'dumplings (Polish staple)', example: 'Pierogi ruskie są pyszne.' },
          { type: 'vocab', word: 'pyszny', article: null, english: 'delicious', example: 'To jest bardzo pyszne!' },
          { type: 'vocab', word: 'rynek', article: null, english: 'market square', example: 'Rynek Starego Miasta jest piękny.' },
          { type: 'vocab', word: 'zamek', article: null, english: 'castle', example: 'Zamek Królewski jest w centrum.' },
          { type: 'vocab', word: 'proszę', article: null, english: 'please / here you go', example: 'Jeden pierogi, proszę.' },
          { type: 'grammar', title: 'Locative in use: "w Starym Mieście"', explanation: 'After "w" (in), nouns change to the locative case. Adjectives change too: "Stare Miasto" (Old Town, nominative) → "w Starym Mieście" (in the Old Town, locative). It looks complex but comes quickly with practice.', examples: ['Stare Miasto → w Starym Mieście (in the Old Town)', 'rynek → na rynku (in/at the square)', 'zamek → w zamku (in the castle)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What are "pierogi"?', options: ['Polish dumplings', 'a type of soup', 'a grilled sausage'], correct: 'Polish dumplings' },
          { type: 'exercise', subtype: 'fill-blank', question: 'To jest bardzo ___! (delicious)', correct: 'pyszne' },
        ],
      },
    ],
    places: [
      {
        id: 'war-centralna', name: 'Warszawa Centralna', icon: '🚉',
        coords: [52.2296, 21.0002], wikiTitle: 'Warsaw Central railway station',
        narrative: 'You arrive at Warszawa Centralna, a concrete behemoth from the communist era that still functions as the city\'s main rail hub. Outside, the Pałac Kultury i Nauki — Stalin\'s gift to Poland — towers above the surrounding modern skyline, a hulking reminder of the 20th century\'s weight on this city.',
        phrases: [
          { pl: 'Gdzie jest Stare Miasto?', en: 'Where is the Old Town?' },
          { pl: 'Jeden bilet, proszę.', en: 'One ticket, please.' },
          { pl: 'Dziękuję bardzo!', en: 'Thank you very much!' },
        ],
        lessonId: 'warsaw-1',
        quiz: {
          question: 'The Palace of Culture and Science was a "gift" to Poland from…?',
          options: ['Joseph Stalin / Soviet Union', 'the United States', 'Nazi Germany'],
          correct: 'Joseph Stalin / Soviet Union',
          explanation: 'The Pałac Kultury i Nauki was built 1952–55 as a gift from Stalin and the Soviet Union, and remains a divisive symbol in Polish memory.',
        },
      },
      {
        id: 'war-stare-miasto', name: 'Stare Miasto', icon: '🏰',
        coords: [52.2498, 21.0120], wikiTitle: 'Warsaw Old Town',
        narrative: 'Warsaw\'s Old Town was 85% destroyed in WWII, then rebuilt stone by stone from 18th-century paintings and photographs. Walking its colourful market square today, you see houses that look medieval but were largely finished in the 1950s. UNESCO recognised this act of reconstruction as a cultural achievement of universal value.',
        phrases: [
          { pl: 'Rynek jest piękny.', en: 'The square is beautiful.' },
          { pl: 'To wszystko zostało odbudowane.', en: 'All of this was rebuilt.' },
        ],
        lessonId: 'warsaw-2',
        quiz: {
          question: 'Warsaw\'s Old Town was listed as UNESCO World Heritage for being…?',
          options: ['an outstanding example of reconstruction after wartime destruction', 'the oldest medieval town in Poland', 'an intact Baroque city'],
          correct: 'an outstanding example of reconstruction after wartime destruction',
          explanation: 'UNESCO recognised Warsaw\'s Old Town specifically because it was rebuilt from ruins after near-total destruction in WWII.',
        },
      },
      {
        id: 'war-palace', name: 'Pałac Kultury i Nauki', icon: '🏛️',
        coords: [52.2319, 21.0067], wikiTitle: 'Palace of Culture and Science',
        narrative: 'You take the elevator up the Palace of Culture and Science — 237 metres of Stalinist "wedding cake" architecture — to the observation terrace on the 30th floor. The view across Warsaw is extraordinary: the rebuilt Old Town to the north, the Vistula river to the east, and a sea of apartment blocks in every direction.',
        phrases: [
          { pl: 'Jeden bilet na taras widokowy, proszę.', en: 'One ticket for the observation deck, please.' },
          { pl: 'Widok jest niesamowity!', en: 'The view is amazing!' },
        ],
        quiz: {
          question: 'The Palace of Culture and Science observation deck is at approximately which floor?',
          options: ['30th floor', '10th floor', '50th floor'],
          correct: '30th floor',
          explanation: 'The observation terrace is on the 30th floor, about 114 metres above ground, with panoramic views of Warsaw.',
        },
      },
      {
        id: 'war-lazienki', name: 'Łazienki Park', icon: '🌳',
        coords: [52.2153, 21.0357], wikiTitle: 'Łazienki Park',
        narrative: 'You end the day in Łazienki Park, Warsaw\'s great royal park on the southern edge of the city. The Palace on the Isle sits in the middle of a lake; peacocks wander the paths. On Sunday afternoons in summer, free Chopin concerts take place beside the composer\'s monument — a Warsaw tradition since 1959.',
        phrases: [
          { pl: 'Pierogi ruskie, proszę.', en: 'Potato and cheese dumplings, please.' },
          { pl: 'Muzyka jest piękna.', en: 'The music is beautiful.' },
        ],
        lessonId: 'warsaw-2',
        quiz: {
          question: 'Free outdoor Chopin concerts in Łazienki Park are a tradition held every…?',
          options: ['Sunday in summer', 'Saturday year-round', 'national holiday'],
          correct: 'Sunday in summer',
          explanation: 'Free outdoor Chopin piano concerts have been held every Sunday in summer beside the Chopin monument in Łazienki since 1959.',
        },
      },
    ],
  },

  // ─────────────────────────────  ROME  ─────────────────────────────
  {
    id: 'rome',
    name: 'Roma',
    tagline: 'Benvenuto a Roma!',
    theme: 'Eternal City',
    accentColor: '#009246',
    icon: '🏛️',
    description:
      'Roma è la capitale d\'Italia e la Città Eterna — due millenni e mezzo di storia ' +
      'accumulati in una sola città. Antichi templi sorgono accanto a chiese barocche, ' +
      'mentre le fontane alimentate da acquedotti romani scorrono tra i vicoli.',
    descriptionEn:
      'Rome is the capital of Italy and the Eternal City — two and a half millennia of history ' +
      'layered in one place. Ancient temples stand beside baroque churches, ' +
      'and fountains fed by Roman aqueducts still flow through the alleys.',
    photos: [
      { wikiTitle: 'Rome', alt: 'Rome cityscape', caption: 'Roma, la Città Eterna' },
      { wikiTitle: 'Colosseum', alt: 'Colosseum Rome', caption: 'Il Colosseo, simbolo di Roma' },
      { wikiTitle: 'Trevi Fountain', alt: 'Trevi Fountain', caption: 'La Fontana di Trevi — una moneta per tornare' },
    ],
    vocabTopics: ['Ancient ruins & the Colosseum', 'Coffee & gelato', 'Italian basics'],
    grammarTopic: 'Italian definite articles (il / la / l\' / i / le)',
    lessons: [
      {
        id: 'rome-1',
        title: 'At the Colosseum',
        description: 'Arriving and finding the ancient heart of Rome.',
        steps: [
          { type: 'vocab', word: 'il Colosseo', article: 'il', english: 'the Colosseum', example: 'Il Colosseo è enorme.' },
          { type: 'vocab', word: 'il foro', article: 'il', english: 'the forum', example: 'Il Foro Romano è vicino al Colosseo.' },
          { type: 'vocab', word: 'la fontana', article: 'la', english: 'the fountain', example: 'La fontana è bellissima.' },
          { type: 'vocab', word: 'l\'entrata', article: 'l\'', english: 'the entrance', example: 'L\'entrata è aperta dalle nove.' },
          { type: 'vocab', word: 'vicino a', article: null, english: 'near / close to', example: 'Il Foro è vicino al Colosseo.' },
          { type: 'grammar', title: 'Italian definite articles', explanation: 'Italian has several forms of "the": "il" (masc. sing.), "la" (fem. sing.), "l\'" (before vowel or h), "i" (masc. plur.), "le" (fem. plur.).', examples: ['il Colosseo (the Colosseum)', 'la fontana (the fountain)', 'l\'entrata (the entrance)', 'i fori (the forums)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "entrata" (feminine, starts with vowel)?', options: ['l\'', 'la', 'il', 'lo'], correct: 'l\'' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ Colosseo è enorme. (masc. singular)', correct: 'Il' },
        ],
      },
      {
        id: 'rome-2',
        title: 'Coffee & Gelato',
        description: 'Ordering at a Roman bar and finding the best gelato.',
        steps: [
          { type: 'vocab', word: 'il caffè', article: 'il', english: 'the coffee / espresso', example: 'Un caffè, per favore.' },
          { type: 'vocab', word: 'il gelato', article: 'il', english: 'the ice cream (Italian-style)', example: 'Un gelato alla fragola, per favore.' },
          { type: 'vocab', word: 'il bar', article: 'il', english: 'the café / coffee bar (Italian)', example: 'Al bar si beve in piedi.' },
          { type: 'vocab', word: 'il conto', article: 'il', english: 'the bill', example: 'Il conto, per favore.' },
          { type: 'vocab', word: 'per favore', article: null, english: 'please', example: 'Un caffè, per favore.' },
          { type: 'grammar', title: 'Al bar: contractions (a + il = al)', explanation: '"A" (at/to) contracts with "il" to form "al": "al bar" (at the bar), "al Colosseo" (at the Colosseum). "A + la" = "alla": "alla fontana" (at the fountain).', examples: ['al bar (at the bar)', 'al Colosseo (at the Colosseum)', 'alla fontana (at the fountain)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is a "bar" in Italian?', options: ['a café / coffee bar', 'an alcohol-only pub', 'a restaurant'], correct: 'a café / coffee bar' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Un caffè, per ___. (please)', correct: 'favore' },
        ],
      },
    ],
    places: [
      {
        id: 'rom-termini', name: 'Roma Termini', icon: '🚉',
        coords: [41.9009, 12.5011], wikiTitle: 'Roma Termini railway station',
        narrative: 'You arrive at Roma Termini, the largest train station in Italy and one of the largest in Europe. Built partly over Roman baths (you can still see ruins in the lower levels), it handles 150 million passengers a year. The metro lines A and B cross here, and the city centre is a short walk away.',
        phrases: [
          { it: 'Dove si prende la metro?', en: 'Where do you take the metro?' },
          { it: 'Come arrivo al Colosseo?', en: 'How do I get to the Colosseum?' },
          { it: 'È lontano da qui?', en: 'Is it far from here?' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'Roma Termini was built partly over ruins of which ancient structure?',
          options: ['Roman baths', 'a Roman temple', 'an ancient forum'],
          correct: 'Roman baths',
          explanation: 'The station was built over the Baths of Diocletian; ancient ruins are visible in the lower levels.',
        },
      },
      {
        id: 'rom-colosseo', name: 'Colosseo', icon: '🏟️',
        coords: [41.8902, 12.4922], wikiTitle: 'Colosseum',
        narrative: 'You stand before the Colosseum, the largest amphitheatre ever built, completed in 80 AD. It held 50,000 to 80,000 spectators for gladiatorial combat, animal hunts and executions. Two-thirds of the original structure was used as a quarry in the Middle Ages; what remains is still the most recognisable building on Earth.',
        phrases: [
          { it: 'Un biglietto, per favore.', en: 'One ticket, please.' },
          { it: 'Il Colosseo è impressionante!', en: 'The Colosseum is impressive!' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'The Colosseum was completed in which year?',
          options: ['80 AD', '44 BC', '313 AD'],
          correct: '80 AD',
          explanation: 'The Colosseum was completed in 80 AD under Emperor Titus and inaugurated with 100 days of games.',
        },
      },
      {
        id: 'rom-trevi', name: 'Fontana di Trevi', icon: '⛲',
        coords: [41.9009, 12.4833], wikiTitle: 'Trevi Fountain',
        narrative: 'The Trevi Fountain fills an entire piazza with the sound of rushing water. Built in 1762, it marks the terminal point of one of Rome\'s ancient aqueducts. The tradition of throwing a coin over your left shoulder with your right hand is said to guarantee a return to Rome — about €1.5 million is collected each year.',
        phrases: [
          { it: 'La fontana è bellissima.', en: 'The fountain is very beautiful.' },
          { it: 'Butto una moneta per tornare a Roma!', en: 'I\'ll throw a coin to come back to Rome!' },
        ],
        quiz: {
          question: 'Throwing a coin into the Trevi Fountain is said to guarantee…?',
          options: ['a return to Rome', 'good luck in love', 'wealth'],
          correct: 'a return to Rome',
          explanation: 'The tradition says: throw one coin = return to Rome. About €1.5 million is collected annually and donated to charity.',
        },
      },
      {
        id: 'rom-campo', name: 'Campo de\' Fiori', icon: '🌹',
        coords: [41.8955, 12.4722], wikiTitle: 'Campo de\' Fiori',
        narrative: 'You end the day at Campo de\' Fiori, a lively market square that in the morning sells flowers, vegetables and fish, and by evening becomes a meeting point of bars and restaurants. A statue of Giordano Bruno stands at its centre — he was burned here as a heretic in 1600. Romans drink the square\'s history in with their aperitivo.',
        phrases: [
          { it: 'Un aperitivo, per favore.', en: 'An aperitivo, please.' },
          { it: 'Il conto, per favore.', en: 'The bill, please.' },
        ],
        lessonId: 'rome-2',
        quiz: {
          question: 'The statue in the centre of Campo de\' Fiori is of…?',
          options: ['Giordano Bruno', 'Julius Caesar', 'Galileo Galilei'],
          correct: 'Giordano Bruno',
          explanation: 'Giordano Bruno, the philosopher and cosmologist, was burned at the stake in Campo de\' Fiori in 1600 by the Inquisition.',
        },
      },
    ],
  },

  // ─────────────────────────────  MILANO  ─────────────────────────────
  {
    id: 'milano',
    name: 'Milano',
    tagline: 'Benvenuto a Milano!',
    theme: 'Fashion & Design',
    accentColor: '#8B0000',
    icon: '🎶',
    description:
      'Milano è la capitale economica e della moda d\'Italia. ' +
      'Il Duomo di marmo bianco, il teatro della Scala, i Navigli con le loro osterie ' +
      'e la Galleria Vittorio Emanuele — la "salotto di Milano" — convivono con showroom, ' +
      'grattacieli e l\'energia frenetica di una città che non si ferma mai.',
    descriptionEn:
      'Milan is the economic and fashion capital of Italy. ' +
      'The white marble Duomo, La Scala opera house, the canal district\'s bars ' +
      'and the magnificent Galleria shopping arcade all coexist with showrooms, ' +
      'skyscrapers and the relentless energy of a city that never stops.',
    photos: [
      { wikiTitle: 'Milan', alt: 'Milan Duomo', caption: 'Il Duomo di Milano, capolavoro gotico' },
      { wikiTitle: 'Galleria Vittorio Emanuele II', alt: 'Galleria Vittorio Emanuele II', caption: 'La Galleria, il salotto di Milano' },
      { wikiTitle: 'Naviglio Grande', alt: 'Naviglio Grande canal', caption: 'I Navigli al tramonto — aperitivo time' },
    ],
    vocabTopics: ['The Duomo & Galleria', 'Aperitivo & Navigli', 'Fashion & shopping'],
    grammarTopic: 'Italian partitive (del / della / dell\')',
    lessons: [
      {
        id: 'milano-1',
        title: 'The Duomo & Galleria',
        description: 'Exploring the heart of Milan on and around Piazza Duomo.',
        steps: [
          { type: 'vocab', word: 'il duomo', article: 'il', english: 'the cathedral', example: 'Il Duomo di Milano ha 3,400 statue.' },
          { type: 'vocab', word: 'la guglia', article: 'la', english: 'the spire / pinnacle', example: 'La guglia più alta è bellissima.' },
          { type: 'vocab', word: 'la galleria', article: 'la', english: 'the arcade / gallery', example: 'La Galleria è elegantissima.' },
          { type: 'vocab', word: 'il tetto', article: 'il', english: 'the roof', example: 'Si sale sul tetto del Duomo.' },
          { type: 'vocab', word: 'magnifico', article: null, english: 'magnificent', example: 'Il panorama è magnifico!' },
          { type: 'grammar', title: 'Partitive del / della / dell\'', explanation: 'The partitive expresses "some" or an unspecified amount. It combines "di" + definite article: del (masc.), della (fem.), dell\' (before vowel).', examples: ['del vino (some wine)', 'della pizza (some pizza)', 'dell\'acqua (some water)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which form of the partitive goes with "acqua" (water, fem., starts with vowel)?', options: ['dell\'', 'della', 'del', 'dello'], correct: 'dell\'' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ vino, per favore. (some wine, masc.)', correct: 'Del' },
        ],
      },
      {
        id: 'milano-2',
        title: 'Aperitivo',
        description: 'The Milanese aperitivo ritual along the Navigli canals.',
        steps: [
          { type: 'vocab', word: 'l\'aperitivo', article: 'l\'', english: 'the pre-dinner drink (+ free snacks in Milan)', example: 'A Milano l\'aperitivo include buffet gratuito.' },
          { type: 'vocab', word: 'uno Spritz', article: null, english: 'a Spritz (Aperol/Campari + prosecco + soda)', example: 'Uno Spritz, per favore.' },
          { type: 'vocab', word: 'il Negroni', article: 'il', english: 'a Negroni (gin + Campari + vermouth)', example: 'Un Negroni, grazie.' },
          { type: 'vocab', word: 'i Navigli', article: 'i', english: 'the Navigli (Milan\'s canal district)', example: 'I Navigli si animano di sera.' },
          { type: 'vocab', word: 'il tramonto', article: 'il', english: 'the sunset', example: 'Il tramonto sui Navigli è romantico.' },
          { type: 'grammar', title: 'Partitive in practice', explanation: 'At a Milanese bar you might hear: "Prendo dell\'Aperol Spritz" (I\'ll have some Aperol Spritz). The partitive works like "some" in English: unspecified amounts of food and drink.', examples: ['Prendo dell\'Aperol Spritz.', 'Vuole della frutta?', 'C\'è del pane?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is the Milanese "aperitivo" tradition?', options: ['a pre-dinner drink served with free snacks', 'a mid-morning coffee break', 'a formal dinner'], correct: 'a pre-dinner drink served with free snacks' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Uno ___, per favore. (a Spritz cocktail)', correct: 'Spritz' },
        ],
      },
    ],
    places: [
      {
        id: 'mil-centrale', name: 'Milano Centrale', icon: '🚉',
        coords: [45.4862, 9.2045], wikiTitle: 'Milano Centrale railway station',
        narrative: 'You arrive at Milano Centrale, one of the most dramatic railway stations in Europe — a temple of travertine stone, art deco and Fascist-era grandeur, its monumental façade rising above the forecourt. High-speed trains connect Milan to Rome in three hours, to Paris in seven.',
        phrases: [
          { it: 'Come arrivo al Duomo?', en: 'How do I get to the Duomo?' },
          { it: 'Quale metro prendo?', en: 'Which metro do I take?' },
          { it: 'È lontano?', en: 'Is it far?' },
        ],
        lessonId: 'milano-1',
        quiz: {
          question: 'Milano Centrale is notable for combining which architectural styles?',
          options: ['art deco and Fascist-era grandeur', 'Gothic and Renaissance', 'Modernist and Baroque'],
          correct: 'art deco and Fascist-era grandeur',
          explanation: 'The station was completed in 1931 under Mussolini, blending art deco with the monumental Fascist aesthetic of the era.',
        },
      },
      {
        id: 'mil-duomo', name: 'Duomo di Milano', icon: '🏰',
        coords: [45.4641, 9.1919], wikiTitle: 'Milan Cathedral',
        narrative: 'The Duomo di Milano took 600 years to complete — from 1386 to 1965. Its white marble façade erupts with 3,400 statues, 135 spires and endless Gothic detail. Take the elevator to the roof terraces and walk among the pinnacles while the city stretches to the Alps in the distance.',
        phrases: [
          { it: 'Un biglietto per il tetto, per favore.', en: 'One ticket for the roof, please.' },
          { it: 'Il Duomo è magnifico!', en: 'The Duomo is magnificent!' },
        ],
        lessonId: 'milano-1',
        quiz: {
          question: 'The Duomo di Milano took approximately how long to complete?',
          options: ['600 years', '200 years', '50 years'],
          correct: '600 years',
          explanation: 'Construction began in 1386 and was completed only in 1965 with the addition of the last bronze door.',
        },
      },
      {
        id: 'mil-galleria', name: 'Galleria Vittorio Emanuele II', icon: '🛍️',
        coords: [45.4655, 9.1898], wikiTitle: 'Galleria Vittorio Emanuele II',
        narrative: 'Next to the Duomo, the Galleria Vittorio Emanuele II is Milan\'s 19th-century shopping arcade, its steel-and-glass vaulted roof flooding the marble floors with light. Prada, Gucci and Louis Vuitton occupy its corners. Milanese tradition: spin three times on the bull mosaic in the floor for good luck.',
        phrases: [
          { it: 'Posso guardare le vetrine?', en: 'May I browse the shop windows?' },
          { it: 'Quanto costa?', en: 'How much does it cost?' },
        ],
        quiz: {
          question: 'The Galleria Vittorio Emanuele II is nicknamed…?',
          options: ['"il salotto di Milano" (Milan\'s drawing room)', '"la fashion week"', '"il duomo dei negozi"'],
          correct: '"il salotto di Milano" (Milan\'s drawing room)',
          explanation: 'The Galleria is called "il salotto di Milano" — Milan\'s living room — because it is where Milanese life has gathered for over 150 years.',
        },
      },
      {
        id: 'mil-navigli', name: 'Navigli', icon: '🌊',
        coords: [45.4527, 9.1716], wikiTitle: 'Naviglio Grande',
        narrative: 'You end at the Navigli, Milan\'s canal district. Designed in part by Leonardo da Vinci, who invented new lock mechanisms for the waterways, the canals now reflect the lights of the bars and trattorias along their banks. The aperitivo begins at six: a Spritz or Negroni with free snacks, the Milanese way to close the day.',
        phrases: [
          { it: 'Uno Spritz, per favore.', en: 'A Spritz, please.' },
          { it: 'Il tramonto sui Navigli è bellissimo.', en: 'The sunset over the canals is very beautiful.' },
        ],
        lessonId: 'milano-2',
        quiz: {
          question: 'Milan\'s Navigli canal system was partially designed by which Renaissance genius?',
          options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael'],
          correct: 'Leonardo da Vinci',
          explanation: 'Leonardo da Vinci invented innovative lock mechanisms for the Milan canal system while living in the city in the late 15th century.',
        },
      },
    ],
  },
];

export default extras;
