// Chilean journey content (A1 Spanish). Same shape as the de/fr packs: an array
// of cities, each with .lessons. article: 'el' | 'la' | 'los' | 'las' drives the
// coloured gender badge in LessonView. 5 separate city pages, north→south arc.
// See chile.md for the design + the Paris-style narrative/phrases/quiz kept there
// for a future per-city route.

const cities = [
  {
    id: 'santiago',
    name: 'Santiago',
    tagline: '¡Bienvenido a Chile!',
    theme: 'Aeropuerto y llegada',
    accentColor: '#0033A0',
    icon: '🏙️',
    description:
      'Santiago, la capital de Chile, es el punto de partida del viaje. El viajero ' +
      'aterriza en el aeropuerto, ve la cordillera de los Andes al fondo y se instala ' +
      'en el centro. Primer reto: arreglárselas sin hablar una palabra de español.',
    descriptionEn:
      'Santiago, the capital of Chile, is the starting point of the journey. The ' +
      'traveller lands at the airport, sees the Andes towering on the horizon and ' +
      'settles downtown. First challenge: getting by without a word of Spanish.',
    photos: [
      { wikiTitle: 'Santiago', alt: 'Santiago skyline', caption: 'Santiago, la capital, al pie de los Andes' },
      { wikiTitle: 'Andes', alt: 'Cordillera de los Andes', caption: 'La cordillera de los Andes domina el horizonte' },
    ],
    vocabTopics: ['Aeropuerto', 'Saludos', 'Presentaciones'],
    grammarTopic: 'Pronombres + el verbo ser',
    lessons: [
      {
        id: 'santiago-1',
        title: 'Arriving in Chile',
        description: 'At the airport: customs, luggage, finding the way out.',
        steps: [
          { type: 'vocab', word: 'el aeropuerto', article: 'el', english: 'airport', example: 'El aeropuerto es muy grande.' },
          { type: 'vocab', word: 'el vuelo', article: 'el', english: 'flight', example: 'El vuelo llega a las ocho.' },
          { type: 'vocab', word: 'el pasaporte', article: 'el', english: 'passport', example: 'Aquí está mi pasaporte.' },
          { type: 'vocab', word: 'la aduana', article: 'la', english: 'customs', example: 'Paso por la aduana.' },
          { type: 'vocab', word: 'las maletas', article: 'las', english: 'luggage / suitcases', example: '¿Dónde están las maletas?' },
          { type: 'vocab', word: 'la salida', article: 'la', english: 'exit', example: 'La salida está a la derecha.' },
          { type: 'grammar', title: 'El verbo ser (to be)', explanation: 'Ser is the most essential Spanish verb and is irregular. Learn the present forms: soy, eres, es, somos, sois, son.', examples: ['¡Soy de Brasil!', 'Ella es de Santiago.', 'Nosotros somos turistas.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "luggage" in Spanish?', options: ['la aduana', 'las maletas', 'el vuelo', 'la salida'], correct: 'las maletas' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ de Brasil. (ser: I am)', correct: 'Soy' },
        ],
      },
      {
        id: 'santiago-2',
        title: 'Greetings and Introductions',
        description: 'Saying hello, introducing yourself, where you are from.',
        steps: [
          { type: 'vocab', word: 'hola', article: null, english: 'hello', example: '¡Hola! ¿Cómo estás?' },
          { type: 'vocab', word: 'adiós', article: null, english: 'goodbye', example: 'Adiós, ¡hasta pronto!' },
          { type: 'vocab', word: 'me llamo…', article: null, english: 'my name is…', example: 'Me llamo Maria.' },
          { type: 'vocab', word: 'mucho gusto', article: null, english: 'pleased to meet you', example: 'Mucho gusto, ¿y tú?' },
          { type: 'vocab', word: 'soy de…', article: null, english: 'I am from…', example: 'Soy de Brasil.' },
          { type: 'vocab', word: 'no entiendo', article: null, english: "I don't understand", example: 'Perdón, no entiendo.' },
          { type: 'grammar', title: 'Pronombres personales', explanation: 'yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas. Tú is informal; usted is formal. In Chile usted is common when being polite.', examples: ['Yo soy brasileño.', '¿Tú hablas inglés?', '¿De dónde es usted?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which is the FORMAL "you"?', options: ['tú', 'yo', 'usted', 'él'], correct: 'usted' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Me ___ Maria. (my name is)', correct: 'llamo' },
        ],
      },
    ],
    places: [
      {
        id: 'santiago-airport', name: 'Aeropuerto AMB', icon: '✈️',
        coords: [-33.393, -70.786], wikiTitle: 'Comodoro Arturo Merino Benítez International Airport',
        narrative: "Your plane lands at Arturo Merino Benítez airport, the Andes glinting behind the terminal. You clear customs, grab your bag and head for the metro into the city.",
        phrases: [
          { es: '¿Dónde está la salida?', en: 'Where is the exit?' },
          { es: 'Soy de Brasil.', en: "I'm from Brazil." },
          { es: 'Un boleto al centro, por favor.', en: 'A ticket to the centre, please.' },
        ],
        lessonId: 'santiago-1',
        quiz: {
          question: "Santiago's main airport is named after Arturo Merino Benítez, a pioneer of what?",
          options: ['Chilean aviation', 'Chilean wine', 'Chilean football'],
          correct: 'Chilean aviation',
          explanation: 'He founded the Chilean Air Force and the national airline LAN.',
        },
      },
      {
        id: 'santiago-plaza', name: 'Plaza de Armas', icon: '🏛️',
        coords: [-33.4378, -70.6505], wikiTitle: 'Plaza de Armas, Santiago',
        narrative: "In the Plaza de Armas, the city's heart since 1541, you practise your first hellos under the palms, the cathedral on one side.",
        phrases: [
          { es: '¡Hola, buenos días!', en: 'Hello, good morning!' },
          { es: 'Mucho gusto.', en: 'Pleased to meet you.' },
          { es: '¿Cómo está usted?', en: 'How are you? (formal)' },
        ],
        lessonId: 'santiago-2',
        quiz: {
          question: 'The Plaza de Armas marks what about Santiago?',
          options: ['Its founding point (1541)', 'Its airport', 'Its harbour'],
          correct: 'Its founding point (1541)',
          explanation: 'Pedro de Valdivia founded Santiago here in 1541; the square is the historic centre.',
        },
      },
      {
        id: 'santiago-moneda', name: 'Palacio de La Moneda', icon: '🏰',
        coords: [-33.4429, -70.6539], wikiTitle: 'La Moneda',
        narrative: 'A few blocks south stands La Moneda, the presidential palace — once a colonial mint, now the seat of Chile\'s government.',
        phrases: [
          { es: 'Es un edificio muy importante.', en: "It's a very important building." },
          { es: '¿Se puede entrar?', en: 'Can we go in?' },
        ],
        quiz: {
          question: 'La Moneda is today the seat of…?',
          options: ['The president of Chile', 'The cathedral', 'The stock exchange'],
          correct: 'The president of Chile',
          explanation: 'Built as a colonial mint, it has been the presidential seat since 1845.',
        },
      },
      {
        id: 'santiago-mercado', name: 'Mercado Central', icon: '🐟',
        coords: [-33.4330, -70.6506], wikiTitle: 'Mercado Central de Santiago',
        narrative: "Lunchtime: you dive into the Mercado Central, its wrought-iron hall loud with vendors selling the day's catch from Chile's long coast.",
        phrases: [
          { es: '¿Qué es esto?', en: 'What is this?' },
          { es: 'Quiero probar el pescado.', en: 'I want to try the fish.' },
          { es: '¡Qué rico!', en: 'How tasty!' },
        ],
        quiz: {
          question: "Santiago's Mercado Central is most famous for…?",
          options: ['Seafood', 'Books', 'Flowers'],
          correct: 'Seafood',
          explanation: "It's renowned for fresh fish and shellfish from Chile's 4,000 km coast.",
        },
      },
      {
        id: 'santiago-lucia', name: 'Cerro Santa Lucía', icon: '⛰️',
        coords: [-33.4400, -70.6440], wikiTitle: 'Santa Lucía Hill',
        narrative: 'You climb the leafy terraces of Cerro Santa Lucía, the small hill where the city was founded, for a first view over the rooftops.',
        phrases: [
          { es: 'La vista es preciosa.', en: 'The view is lovely.' },
          { es: 'Vamos a subir.', en: "Let's go up." },
        ],
        quiz: {
          question: 'Cerro Santa Lucía is historically significant as…?',
          options: ['Where Santiago was founded', 'A volcano', 'An island'],
          correct: 'Where Santiago was founded',
          explanation: 'Valdivia founded the city beside this hill (Huelén) in 1541.',
        },
      },
      {
        id: 'santiago-cristobal', name: 'Cerro San Cristóbal', icon: '🚠',
        coords: [-33.4253, -70.6320], wikiTitle: 'San Cristóbal Hill',
        narrative: 'As the sun sinks, a funicular carries you up Cerro San Cristóbal to the white statue of the Virgin, the whole city and the Andes spread below.',
        phrases: [
          { es: 'Tomamos el funicular.', en: 'We take the funicular.' },
          { es: '¡Hace frío aquí arriba!', en: "It's cold up here!" },
        ],
        quiz: {
          question: 'What stands on top of Cerro San Cristóbal?',
          options: ['A statue of the Virgin Mary', 'A lighthouse', 'A castle'],
          correct: 'A statue of the Virgin Mary',
          explanation: 'A 14 m statue of the Immaculate Conception crowns the hill, reached by a 1925 funicular.',
        },
      },
    ],
  },
  {
    id: 'valparaiso',
    name: 'Valparaíso',
    tagline: '¡El puerto colorido!',
    theme: 'El puerto y los colores',
    accentColor: '#D52B1E',
    icon: '🚠',
    description:
      'A poca distancia de Santiago, Valparaíso baja por los cerros en una explosión ' +
      'de colores. Casas pintadas, arte callejero y ascensores centenarios. Patrimonio ' +
      'de la Humanidad y el puerto más bohemio de Chile.',
    descriptionEn:
      'A short trip from Santiago, Valparaíso spills down the hills in a riot of ' +
      'colour. Painted houses, street art and century-old funiculars. A UNESCO World ' +
      "Heritage site and Chile's most bohemian port.",
    photos: [
      { wikiTitle: 'Valparaíso', alt: 'Cerros de Valparaíso', caption: 'Casas de colores en los cerros de Valparaíso' },
    ],
    vocabTopics: ['Los colores', 'El funicular', 'Direcciones'],
    grammarTopic: 'Adjetivos de color (concordancia)',
    lessons: [
      {
        id: 'valparaiso-1',
        title: 'Colours and the Funicular',
        description: 'Riding the ascensor, naming colours, asking the way up.',
        steps: [
          { type: 'vocab', word: 'el cerro', article: 'el', english: 'hill', example: 'El cerro es muy alto.' },
          { type: 'vocab', word: 'el ascensor', article: 'el', english: 'funicular / lift', example: 'Tomamos el ascensor al mirador.' },
          { type: 'vocab', word: 'rojo', article: null, english: 'red', example: 'La casa es roja.' },
          { type: 'vocab', word: 'azul', article: null, english: 'blue', example: 'El mar es azul.' },
          { type: 'vocab', word: 'amarillo', article: null, english: 'yellow', example: 'La puerta es amarilla.' },
          { type: 'vocab', word: 'el mirador', article: 'el', english: 'viewpoint / lookout', example: 'El mirador es precioso.' },
          { type: 'grammar', title: 'Los colores concuerdan', explanation: 'Most colour adjectives agree with the noun: rojo→roja, amarillo→amarilla. Colours ending in -e or a consonant (azul, verde) do not change for gender.', examples: ['un coche rojo / una casa roja', 'el cielo azul / la flor azul', 'un muro amarillo / una pared amarilla'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "the funicular / lift"?', options: ['el cerro', 'el ascensor', 'el mirador', 'el mar'], correct: 'el ascensor' },
          { type: 'exercise', subtype: 'fill-blank', question: 'La casa es ___. (red, feminine)', correct: 'roja' },
        ],
      },
    ],
    places: [
      {
        id: 'valpo-muelle', name: 'Muelle Prat', icon: '⚓',
        coords: [-33.0381, -71.6293], wikiTitle: 'Valparaíso',
        narrative: "You arrive at Muelle Prat on the waterfront, where fishing boats and navy ships share Chile's most storied port.",
        phrases: [
          { es: '¿Dónde está el puerto?', en: 'Where is the port?' },
          { es: 'El mar es azul.', en: 'The sea is blue.' },
        ],
        quiz: {
          question: "Valparaíso was historically Chile's most important…?",
          options: ['Seaport', 'Mine', 'Vineyard'],
          correct: 'Seaport',
          explanation: "Before the Panama Canal, 'Valpo' was a key Pacific port for ships rounding Cape Horn.",
        },
      },
      {
        id: 'valpo-ascensor', name: 'Ascensor Concepción', icon: '🚠',
        coords: [-33.0397, -71.6275], wikiTitle: 'Funiculars of Valparaíso',
        narrative: "You ride the creaking Ascensor Concepción, the city's oldest funicular from 1883, up a hillside of painted houses.",
        phrases: [
          { es: '¿Cuánto cuesta el ascensor?', en: 'How much is the funicular?' },
          { es: 'La casa roja es bonita.', en: 'The red house is pretty.' },
          { es: 'Vamos al mirador.', en: "Let's go to the lookout." },
        ],
        lessonId: 'valparaiso-1',
        quiz: {
          question: 'Valparaíso\'s hillside ascensores are…?',
          options: ['Historic funicular lifts', 'Buses', 'Boats'],
          correct: 'Historic funicular lifts',
          explanation: 'These UNESCO-listed funiculars have climbed the cerros since the late 1800s.',
        },
      },
      {
        id: 'valpo-alegre', name: 'Cerro Alegre', icon: '🎨',
        coords: [-33.0420, -71.6290], wikiTitle: 'Cerro Alegre',
        narrative: 'On Cerro Alegre you wander lanes that are open-air galleries, every wall a mural of colour.',
        phrases: [
          { es: '¡Qué colores!', en: 'What colours!' },
          { es: 'Me gusta el arte.', en: 'I like the art.' },
        ],
        quiz: {
          question: 'Cerro Alegre is famous today for its…?',
          options: ['Street art', 'Beaches', 'Casinos'],
          correct: 'Street art',
          explanation: 'Its winding streets are covered in celebrated murals and graffiti art.',
        },
      },
      {
        id: 'valpo-sebastiana', name: 'La Sebastiana', icon: '🏠',
        coords: [-33.0469, -71.6197], wikiTitle: 'La Sebastiana',
        narrative: 'You visit La Sebastiana, the quirky hillside home of poet Pablo Neruda, full of sea views and curiosities.',
        phrases: [
          { es: 'Es la casa de un poeta.', en: "It's a poet's house." },
          { es: 'La vista es increíble.', en: 'The view is incredible.' },
        ],
        quiz: {
          question: 'La Sebastiana was the home of which Nobel-winning Chilean?',
          options: ['Pablo Neruda', 'Gabriela Mistral', 'Salvador Allende'],
          correct: 'Pablo Neruda',
          explanation: 'Poet Pablo Neruda, winner of the 1971 Nobel Prize in Literature, kept this house in Valparaíso.',
        },
      },
      {
        id: 'valpo-mirador', name: 'Paseo 21 de Mayo', icon: '🌅',
        coords: [-33.0317, -71.6356], wikiTitle: 'Valparaíso',
        narrative: 'At dusk you reach the Paseo 21 de Mayo on Cerro Artillería, the whole amphitheatre of the bay glowing below.',
        phrases: [
          { es: 'El atardecer es hermoso.', en: 'The sunset is beautiful.' },
          { es: 'Adiós, Valparaíso.', en: 'Goodbye, Valparaíso.' },
        ],
        quiz: {
          question: 'Valparaíso is often described as built on…?',
          options: ['Many hills (cerros)', 'A single island', 'Flat plains'],
          correct: 'Many hills (cerros)',
          explanation: "The city rises over more than 40 cerros around its bay, an 'amphitheatre' on the Pacific.",
        },
      },
    ],
  },
  {
    id: 'atacama',
    name: 'San Pedro de Atacama',
    tagline: '¡El desierto más seco!',
    theme: 'El desierto y los números',
    accentColor: '#C8742B',
    icon: '🏜️',
    description:
      'El desierto de Atacama, el más árido del mundo. Cielos perfectos para mirar las ' +
      'estrellas, géiseres al amanecer y lagunas de sal. En San Pedro se reservan tours ' +
      'para todo — hay que saber los números y preguntar el precio.',
    descriptionEn:
      'The Atacama Desert, the driest in the world. Perfect skies for stargazing, ' +
      'geysers at dawn and salt lagoons. In San Pedro you book tours for everything — ' +
      'so you need your numbers and how to ask the price.',
    photos: [
      { wikiTitle: 'Atacama Desert', alt: 'Desierto de Atacama', caption: 'El Atacama, el desierto más árido del mundo' },
    ],
    vocabTopics: ['Los números', 'Reservar un tour', 'El precio'],
    grammarTopic: 'Los números 1–20',
    lessons: [
      {
        id: 'atacama-1',
        title: 'Numbers and Booking a Tour',
        description: 'Counting, booking a tour, asking how much it costs.',
        steps: [
          { type: 'vocab', word: 'el desierto', article: 'el', english: 'desert', example: 'El desierto es enorme.' },
          { type: 'vocab', word: 'las estrellas', article: 'las', english: 'stars', example: 'Las estrellas son brillantes.' },
          { type: 'vocab', word: 'el tour', article: 'el', english: 'tour', example: 'Quiero reservar un tour.' },
          { type: 'vocab', word: 'el precio', article: 'el', english: 'price', example: '¿Cuál es el precio?' },
          { type: 'vocab', word: '¿cuánto cuesta?', article: null, english: 'how much is it?', example: '¿Cuánto cuesta el tour?' },
          { type: 'vocab', word: 'caro / barato', article: null, english: 'expensive / cheap', example: 'Es un poco caro.' },
          { type: 'grammar', title: 'Los números 1–20', explanation: 'uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez… up to veinte (20). Essential for prices, time and booking tours.', examples: ['Dos personas, por favor.', 'Son quince mil pesos.', 'El tour es a las seis.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you ask "How much is it?"', options: ['¿Dónde está?', '¿Cuánto cuesta?', '¿Quién es?', '¿Qué hora es?'], correct: '¿Cuánto cuesta?' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Quiero ___ un tour. (to book / reserve)', correct: 'reservar' },
        ],
      },
    ],
    places: [
      {
        id: 'atacama-pueblo', name: 'Pueblo de San Pedro', icon: '⛪',
        coords: [-22.9117, -68.2003], wikiTitle: 'San Pedro de Atacama',
        narrative: 'You reach the adobe village of San Pedro de Atacama and book your first tours from a dusty main street, the white church glowing in the sun.',
        phrases: [
          { es: 'Quiero reservar un tour.', en: 'I want to book a tour.' },
          { es: '¿Cuánto cuesta?', en: 'How much is it?' },
          { es: 'Dos personas, por favor.', en: 'Two people, please.' },
        ],
        lessonId: 'atacama-1',
        quiz: {
          question: 'San Pedro de Atacama is built mainly from…?',
          options: ['Adobe (mud brick)', 'Glass', 'Marble'],
          correct: 'Adobe (mud brick)',
          explanation: 'Its church and houses are traditional adobe, suited to the desert climate.',
        },
      },
      {
        id: 'atacama-luna', name: 'Valle de la Luna', icon: '🌙',
        coords: [-22.9333, -68.2667], wikiTitle: 'Valle de la Luna (Chile)',
        narrative: 'At sunset you stand in the Valle de la Luna, dunes and salt ridges turning red — a landscape so Mars-like that rovers are tested nearby.',
        phrases: [
          { es: 'Parece la luna.', en: 'It looks like the moon.' },
          { es: 'No hay agua aquí.', en: 'There is no water here.' },
        ],
        quiz: {
          question: 'The Valle de la Luna is named for its resemblance to…?',
          options: ['The Moon', 'A forest', 'A city'],
          correct: 'The Moon',
          explanation: 'Its eroded salt-and-sand forms look lunar; the Mars-like terrain is used to test rovers.',
        },
      },
      {
        id: 'atacama-tatio', name: 'Géiseres del Tatio', icon: '♨️',
        coords: [-22.3333, -68.0167], wikiTitle: 'El Tatio',
        narrative: 'Before dawn you ride up to El Tatio at 4,300 m, where dozens of geysers blast steam into the freezing morning air.',
        phrases: [
          { es: 'Hace mucho frío.', en: "It's very cold." },
          { es: '¡Mira el vapor!', en: 'Look at the steam!' },
        ],
        quiz: {
          question: "El Tatio is one of the world's highest fields of…?",
          options: ['Geysers', 'Waterfalls', 'Glaciers'],
          correct: 'Geysers',
          explanation: "At ~4,300 m it's among the highest geyser fields on Earth, best seen at dawn.",
        },
      },
      {
        id: 'atacama-cejar', name: 'Laguna Cejar', icon: '🏊',
        coords: [-23.0500, -68.2167], wikiTitle: 'Cejar Lagoon',
        narrative: 'You float effortlessly in Laguna Cejar, a salt lagoon so dense you bob like a cork, the Andes shimmering on the horizon.',
        phrases: [
          { es: 'El agua tiene mucha sal.', en: 'The water has a lot of salt.' },
          { es: 'Puedo flotar.', en: 'I can float.' },
        ],
        quiz: {
          question: 'You float easily in Laguna Cejar because the water is…?',
          options: ['Very salty', 'Frozen', 'Boiling'],
          correct: 'Very salty',
          explanation: 'Its high salt concentration makes you buoyant, like the Dead Sea.',
        },
      },
      {
        id: 'atacama-stars', name: 'Cielos del Atacama', icon: '🔭',
        coords: [-23.0234, -67.7538], wikiTitle: 'Atacama Large Millimeter Array',
        narrative: "Night falls and the sky erupts with stars. The Atacama's bone-dry air gives Earth's clearest skies — home to the giant ALMA observatory.",
        phrases: [
          { es: 'Hay muchas estrellas.', en: 'There are many stars.' },
          { es: 'El cielo es perfecto.', en: 'The sky is perfect.' },
        ],
        quiz: {
          question: "The Atacama hosts ALMA, one of the world's great…?",
          options: ['Astronomical observatories', 'Football stadiums', 'Ski resorts'],
          correct: 'Astronomical observatories',
          explanation: 'Dry, high and clear, the desert is ideal for telescopes like the ALMA array.',
        },
      },
    ],
  },
  {
    id: 'rapanui',
    name: 'Rapa Nui',
    tagline: '¡La isla de los moái!',
    theme: 'La isla y la naturaleza',
    accentColor: '#2E8B57',
    icon: '🗿',
    description:
      'A 3.700 km de la costa, Rapa Nui (Isla de Pascua) es la isla habitada más remota ' +
      'del mundo, famosa por sus gigantescos moái de piedra y su cultura polinesia. ' +
      'Playas, mar abierto y silencio.',
    descriptionEn:
      'Some 3,700 km off the coast, Rapa Nui (Easter Island) is the most remote ' +
      'inhabited island on Earth, famous for its giant stone moái and Polynesian ' +
      'culture. Beaches, open sea and silence.',
    photos: [
      { wikiTitle: 'Easter Island', alt: 'Moái de Rapa Nui', caption: 'Los moái de piedra de Rapa Nui' },
    ],
    vocabTopics: ['La naturaleza', 'La isla', 'Hay (there is/are)'],
    grammarTopic: 'Hay + sustantivos',
    lessons: [
      {
        id: 'rapanui-1',
        title: 'The Island and Nature',
        description: 'Describing what there is: sea, beach, statues.',
        steps: [
          { type: 'vocab', word: 'la isla', article: 'la', english: 'island', example: 'La isla es muy remota.' },
          { type: 'vocab', word: 'el mar', article: 'el', english: 'sea', example: 'El mar es azul y grande.' },
          { type: 'vocab', word: 'la playa', article: 'la', english: 'beach', example: 'La playa es tranquila.' },
          { type: 'vocab', word: 'la piedra', article: 'la', english: 'stone', example: 'Los moái son de piedra.' },
          { type: 'vocab', word: 'hay', article: null, english: 'there is / there are', example: 'Hay muchos moáis.' },
          { type: 'vocab', word: '¿qué es esto?', article: null, english: 'what is this?', example: '¿Qué es esto? Es un moái.' },
          { type: 'grammar', title: 'Hay = there is / there are', explanation: '"Hay" never changes: it works for singular and plural. Use it to say what exists: hay una playa, hay muchos moáis.', examples: ['Hay una playa cerca.', 'Hay muchas estrellas.', 'No hay agua aquí.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "there are many moai"?', options: ['Son muchos moáis', 'Hay muchos moáis', 'Está muchos moáis', 'Tengo muchos moáis'], correct: 'Hay muchos moáis' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ una playa cerca. (there is)', correct: 'Hay' },
        ],
      },
    ],
    places: [
      {
        id: 'rapanui-hangaroa', name: 'Hanga Roa', icon: '🏘️',
        coords: [-27.1500, -109.4333], wikiTitle: 'Hanga Roa',
        narrative: "Five hours over open Pacific, you land at Hanga Roa, the island's only town, where the whole of Rapa Nui life gathers by the sea.",
        phrases: [
          { es: '¿Dónde está el pueblo?', en: 'Where is the town?' },
          { es: 'La isla es muy remota.', en: 'The island is very remote.' },
        ],
        quiz: {
          question: 'Hanga Roa is Rapa Nui\'s…?',
          options: ['Only town', 'Tallest volcano', 'Airport code'],
          correct: 'Only town',
          explanation: "Almost all of the island's residents live in Hanga Roa, the single town.",
        },
      },
      {
        id: 'rapanui-tongariki', name: 'Ahu Tongariki', icon: '🗿',
        coords: [-27.1258, -109.2767], wikiTitle: 'Ahu Tongariki',
        narrative: 'At dawn you face Ahu Tongariki: fifteen giant moái standing shoulder to shoulder against the rising sun.',
        phrases: [
          { es: 'Hay quince moáis.', en: 'There are fifteen moai.' },
          { es: '¡Son enormes!', en: "They're enormous!" },
        ],
        quiz: {
          question: 'Ahu Tongariki is the largest ahu, with how many moái?',
          options: ['Fifteen', 'Three', 'Fifty'],
          correct: 'Fifteen',
          explanation: 'Fifteen restored moái stand on Tongariki, the biggest ceremonial platform on the island.',
        },
      },
      {
        id: 'rapanui-raraku', name: 'Rano Raraku', icon: '⛏️',
        coords: [-27.1219, -109.2894], wikiTitle: 'Rano Raraku',
        narrative: 'You climb Rano Raraku, the quarry where nearly every moái was carved — hundreds still lie half-buried in the volcanic slope.',
        phrases: [
          { es: '¿Qué es esto?', en: 'What is this?' },
          { es: 'Los moáis son de piedra.', en: 'The moai are made of stone.' },
          { es: 'Hay muchos en la montaña.', en: 'There are many on the mountain.' },
        ],
        lessonId: 'rapanui-1',
        quiz: {
          question: 'Rano Raraku is the place where the moái were…?',
          options: ['Carved (the quarry)', 'Painted', 'Shipped from Europe'],
          correct: 'Carved (the quarry)',
          explanation: "Almost all moái were quarried from Rano Raraku's volcanic tuff.",
        },
      },
      {
        id: 'rapanui-anakena', name: 'Playa Anakena', icon: '🏖️',
        coords: [-27.0728, -109.3236], wikiTitle: 'Anakena',
        narrative: 'You rest at Anakena, a white-sand beach fringed with palms — by legend, where the first settlers of Rapa Nui came ashore.',
        phrases: [
          { es: 'La playa es blanca.', en: 'The beach is white.' },
          { es: 'Vamos a nadar.', en: "Let's go swimming." },
        ],
        quiz: {
          question: 'Anakena beach is traditionally seen as…?',
          options: ['Where the first settlers landed', 'A volcano crater', 'The airport'],
          correct: 'Where the first settlers landed',
          explanation: 'Oral tradition says King Hotu Matuʻa first landed at Anakena.',
        },
      },
      {
        id: 'rapanui-ranokau', name: 'Rano Kau / Orongo', icon: '🌋',
        coords: [-27.1869, -109.4419], wikiTitle: 'Rano Kau',
        narrative: 'You finish at the rim of Rano Kau, a vast volcanic crater holding a reed-filled lake, beside the stone village of Orongo.',
        phrases: [
          { es: 'El volcán es muy grande.', en: 'The volcano is very big.' },
          { es: 'Adiós, Rapa Nui.', en: 'Goodbye, Rapa Nui.' },
        ],
        quiz: {
          question: 'Orongo, on the rim of Rano Kau, was the centre of which tradition?',
          options: ['The Birdman cult', 'Wine making', 'Funicular building'],
          correct: 'The Birdman cult',
          explanation: 'The Tangata manu (Birdman) competition was held at Orongo each year.',
        },
      },
    ],
  },
  {
    id: 'loslagos',
    name: 'Los Lagos',
    tagline: '¡Lagos y volcanes!',
    theme: 'La comida y el restaurante',
    accentColor: '#2C8C99',
    icon: '🌋',
    description:
      'La Región de Los Lagos: pueblos de inmigrantes alemanes a orillas del lago ' +
      'Llanquihue, con el volcán Osorno nevado al fondo. En Puerto Varas se come kuchen, ' +
      'salmón y curanto — el lugar perfecto para aprender a pedir en un restaurante.',
    descriptionEn:
      "Chile's Lake District: German-settler towns on the shore of Lake Llanquihue, " +
      'the snow-capped Osorno volcano behind. In Puerto Varas you eat kuchen, salmon ' +
      'and curanto — the perfect place to learn to order in a restaurant.',
    photos: [
      { wikiTitle: 'Osorno (volcano)', alt: 'Volcán Osorno', caption: 'El volcán Osorno sobre el lago Llanquihue' },
      { wikiTitle: 'Puerto Varas', alt: 'Puerto Varas', caption: 'Puerto Varas, pueblo de inmigrantes alemanes' },
    ],
    vocabTopics: ['La comida', 'El restaurante', 'Pedir con querer'],
    grammarTopic: 'El verbo querer (quiero…)',
    lessons: [
      {
        id: 'loslagos-1',
        title: 'At the Restaurant',
        description: 'Ordering food and drink, being polite, asking for the bill.',
        steps: [
          { type: 'vocab', word: 'el restaurante', article: 'el', english: 'restaurant', example: 'El restaurante está en la plaza.' },
          { type: 'vocab', word: 'la comida', article: 'la', english: 'food / meal', example: 'La comida es muy rica.' },
          { type: 'vocab', word: 'el agua', article: 'el', english: 'water', example: 'Un vaso de agua, por favor.' },
          { type: 'vocab', word: 'la cuenta', article: 'la', english: 'the bill / check', example: 'La cuenta, por favor.' },
          { type: 'vocab', word: 'por favor', article: null, english: 'please', example: 'Un café, por favor.' },
          { type: 'vocab', word: 'gracias', article: null, english: 'thank you', example: '¡Muchas gracias!' },
          { type: 'grammar', title: 'Pedir con « quiero »', explanation: '« Quiero… » (I want…) from the verb querer is the everyday way to order: quiero, quieres, quiere… Soften it with « por favor ».', examples: ['Quiero un café, por favor.', 'Quiero la cuenta.', '¿Quieres agua?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you ask for the bill?', options: ['La comida, por favor', 'La cuenta, por favor', 'El agua, por favor', 'Gracias, adiós'], correct: 'La cuenta, por favor' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ un café, por favor. (querer: I want)', correct: 'Quiero' },
        ],
      },
    ],
    places: [
      {
        id: 'lagos-pv', name: 'Puerto Varas', icon: '🏘️',
        coords: [-41.3195, -72.9854], wikiTitle: 'Puerto Varas',
        narrative: "On the shore of Lake Llanquihue, the 'City of Roses' Puerto Varas greets you with German-style houses and the volcano mirrored in the water.",
        phrases: [
          { es: 'El lago es enorme.', en: 'The lake is huge.' },
          { es: '¡Qué bonito pueblo!', en: 'What a pretty town!' },
        ],
        quiz: {
          question: 'Puerto Varas was largely built by which 19th-century immigrants?',
          options: ['Germans', 'Greeks', 'Japanese'],
          correct: 'Germans',
          explanation: 'German colonists settled the Lake District from the 1850s; their architecture remains.',
        },
      },
      {
        id: 'lagos-osorno', name: 'Volcán Osorno', icon: '🌋',
        coords: [-41.1000, -72.4933], wikiTitle: 'Osorno (volcano)',
        narrative: 'You drive toward Volcán Osorno, its near-perfect snow cone rising 2,652 m — Chile\'s answer to Mount Fuji.',
        phrases: [
          { es: 'La montaña tiene nieve.', en: 'The mountain has snow.' },
          { es: 'Hace frío en el volcán.', en: "It's cold on the volcano." },
        ],
        quiz: {
          question: 'Volcán Osorno is famous for its shape, often compared to…?',
          options: ['Mount Fuji', 'A pyramid', 'A table'],
          correct: 'Mount Fuji',
          explanation: "Its symmetrical snow-capped cone draws constant comparisons with Japan's Mt Fuji.",
        },
      },
      {
        id: 'lagos-petrohue', name: 'Saltos del Petrohué', icon: '💦',
        coords: [-41.1667, -72.4167], wikiTitle: 'Petrohué Falls',
        narrative: 'You follow the turquoise Petrohué river to its falls, glacial meltwater roaring over black volcanic rock beneath Osorno.',
        phrases: [
          { es: 'El agua es turquesa.', en: 'The water is turquoise.' },
          { es: '¡Mira la cascada!', en: 'Look at the waterfall!' },
        ],
        quiz: {
          question: 'The Saltos del Petrohué cut through what kind of rock?',
          options: ['Volcanic rock', 'Ice', 'Sand'],
          correct: 'Volcanic rock',
          explanation: "The falls carve through dark volcanic basalt fed by Osorno's meltwater.",
        },
      },
      {
        id: 'lagos-frutillar', name: 'Frutillar', icon: '🍰',
        coords: [-41.1264, -73.0500], wikiTitle: 'Frutillar',
        narrative: "In Frutillar you sit by the lake with a slice of kuchen, the German cake that's a local institution, the Teatro del Lago at the water's edge.",
        phrases: [
          { es: 'Quiero un kuchen, por favor.', en: "I'd like a kuchen, please." },
          { es: 'La cuenta, por favor.', en: 'The bill, please.' },
          { es: 'La comida es muy rica.', en: 'The food is delicious.' },
        ],
        lessonId: 'loslagos-1',
        quiz: {
          question: "Frutillar's famous kuchen reflects which heritage?",
          options: ['German', 'Italian', 'French'],
          correct: 'German',
          explanation: 'Kuchen is a German cake brought by 19th-century settlers; Frutillar is known for it.',
        },
      },
      {
        id: 'lagos-llanquihue', name: 'Lago Llanquihue', icon: '🏞️',
        coords: [-41.1333, -72.8000], wikiTitle: 'Llanquihue Lake',
        narrative: 'You end at the edge of Lago Llanquihue itself, Chile\'s second-largest lake, three volcanoes ringing the far shore.',
        phrases: [
          { es: 'Es el lago más grande de la región.', en: 'It\'s the biggest lake in the region.' },
          { es: 'Adiós, Los Lagos.', en: 'Goodbye, Los Lagos.' },
        ],
        quiz: {
          question: 'Lago Llanquihue is Chile\'s…?',
          options: ['Second-largest lake', 'Highest geyser', 'Driest desert'],
          correct: 'Second-largest lake',
          explanation: 'At ~860 km² it is the second-biggest lake wholly within Chile.',
        },
      },
    ],
  },
  {
    id: 'paine',
    name: 'Torres del Paine',
    tagline: '¡La Patagonia salvaje!',
    theme: 'El clima y las direcciones',
    accentColor: '#4A6FA5',
    icon: '🏔️',
    description:
      'El gran final del viaje: las torres de granito, glaciares y guanacos en el sur ' +
      'profundo de la Patagonia. El clima es extremo y cambiante — sol, viento y lluvia ' +
      'en una hora. Hay que saber hablar del tiempo y pedir direcciones.',
    descriptionEn:
      'The grand finale: the granite towers, glaciers and guanacos of deep Patagonia. ' +
      'The weather is extreme and ever-changing — sun, wind and rain within an hour. ' +
      'You learn to talk about the weather and ask for directions.',
    photos: [
      { wikiTitle: 'Torres del Paine National Park', alt: 'Torres del Paine', caption: 'Las torres de granito de Paine, en la Patagonia' },
    ],
    vocabTopics: ['El clima', 'Direcciones', 'Despedida'],
    grammarTopic: 'El tiempo con hacer (hace frío)',
    lessons: [
      {
        id: 'paine-1',
        title: 'Weather and Directions',
        description: 'Talking about the weather, asking the way, saying goodbye.',
        steps: [
          { type: 'vocab', word: 'hace frío', article: null, english: "it's cold", example: 'En la Patagonia hace frío.' },
          { type: 'vocab', word: 'hace calor', article: null, english: "it's hot", example: 'Hoy no hace calor.' },
          { type: 'vocab', word: 'el viento', article: 'el', english: 'wind', example: 'El viento es muy fuerte.' },
          { type: 'vocab', word: 'la lluvia', article: 'la', english: 'rain', example: 'La lluvia llega rápido.' },
          { type: 'vocab', word: '¿por dónde se va?', article: null, english: 'which way?', example: '¿Por dónde se va al mirador?' },
          { type: 'vocab', word: '¡buen viaje!', article: null, english: 'safe travels!', example: 'Adiós, ¡buen viaje!' },
          { type: 'grammar', title: 'El tiempo con "hacer"', explanation: 'Spanish uses "hacer" for many weather phrases: hace frío (it\'s cold), hace calor (it\'s hot), hace viento (it\'s windy), hace sol (it\'s sunny).', examples: ['Hace mucho frío hoy.', '¿Hace viento en la montaña?', 'En el desierto hace sol.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "it\'s cold"?', options: ['hace calor', 'hace frío', 'hace sol', 'hay viento'], correct: 'hace frío' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Adiós, ¡buen ___! (safe travels — journey)', correct: 'viaje' },
        ],
      },
    ],
    places: [
      {
        id: 'paine-entrada', name: 'Entrada Laguna Amarga', icon: '⛺',
        coords: [-50.9833, -72.7500], wikiTitle: 'Torres del Paine National Park',
        narrative: 'You reach the Laguna Amarga gate into Torres del Paine, wind howling off the steppe, guanacos grazing as you ask the ranger the way.',
        phrases: [
          { es: 'Hace mucho viento.', en: "It's very windy." },
          { es: '¿Por dónde se va a las torres?', en: 'Which way to the towers?' },
          { es: 'Buen viaje.', en: 'Have a good trip.' },
        ],
        lessonId: 'paine-1',
        quiz: {
          question: 'Torres del Paine is protected as a…?',
          options: ['National park / Biosphere Reserve', 'Private vineyard', 'City'],
          correct: 'National park / Biosphere Reserve',
          explanation: "It's a Chilean national park and UNESCO Biosphere Reserve in Patagonia.",
        },
      },
      {
        id: 'paine-torres', name: 'Base de las Torres', icon: '🏔️',
        coords: [-50.9423, -73.4068], wikiTitle: 'Cordillera del Paine',
        narrative: "After a long climb you reach the Base de las Torres: three sheer granite towers soaring above a glacial lake, the park's namesake.",
        phrases: [
          { es: '¡Qué montañas!', en: 'What mountains!' },
          { es: 'Estoy cansado.', en: "I'm tired." },
        ],
        quiz: {
          question: "The park is named 'Torres del Paine' after its three…?",
          options: ['Granite towers', 'Glaciers', 'Lakes'],
          correct: 'Granite towers',
          explanation: "Three near-vertical granite peaks, the 'towers', give the park its name.",
        },
      },
      {
        id: 'paine-pehoe', name: 'Lago Pehoé', icon: '🏕️',
        coords: [-51.0833, -73.0833], wikiTitle: 'Pehoé Lake',
        narrative: 'You camp by Lago Pehoé, its impossibly turquoise water set against the dark horns of the Cuernos del Paine.',
        phrases: [
          { es: 'El lago es de color turquesa.', en: 'The lake is turquoise.' },
          { es: 'Aquí vamos a acampar.', en: "We'll camp here." },
        ],
        quiz: {
          question: "Lago Pehoé's vivid turquoise colour comes from…?",
          options: ['Glacial rock flour', 'Algae', 'Dye'],
          correct: 'Glacial rock flour',
          explanation: "Fine 'rock flour' ground by glaciers scatters light, giving the milky-turquoise hue.",
        },
      },
      {
        id: 'paine-grey', name: 'Glaciar Grey', icon: '🧊',
        coords: [-51.0000, -73.2000], wikiTitle: 'Grey Glacier',
        narrative: 'You sail toward Glaciar Grey, blue icebergs drifting past — a tongue of the vast Southern Patagonian Ice Field.',
        phrases: [
          { es: 'El hielo es azul.', en: 'The ice is blue.' },
          { es: '¡Qué frío hace!', en: 'How cold it is!' },
        ],
        quiz: {
          question: 'Glaciar Grey is part of which huge ice mass?',
          options: ['The Southern Patagonian Ice Field', 'The Atacama', 'Lake Llanquihue'],
          correct: 'The Southern Patagonian Ice Field',
          explanation: 'Grey flows from the Southern Patagonian Ice Field, the largest outside the poles after Antarctica and Greenland.',
        },
      },
      {
        id: 'paine-salto', name: 'Salto Grande', icon: '💦',
        coords: [-51.0667, -73.0000], wikiTitle: 'Torres del Paine National Park',
        narrative: 'Your journey ends at Salto Grande, a thundering waterfall between two lakes, the Cuernos framing your last view of Patagonia.',
        phrases: [
          { es: 'Esta es la última parada.', en: 'This is the last stop.' },
          { es: 'Adiós, Patagonia.', en: 'Goodbye, Patagonia.' },
        ],
        quiz: {
          question: 'Salto Grande is a waterfall linking which two lakes?',
          options: ['Nordenskjöld and Pehoé', 'Grey and Amarga', 'Llanquihue and Todos los Santos'],
          correct: 'Nordenskjöld and Pehoé',
          explanation: 'The falls drain Lago Nordenskjöld into Lago Pehoé.',
        },
      },
    ],
  },
  // ── Argentina (hosted on the Chile journey for now; future `ar` journey). ──
  // Classic cities: no `places`/immersive route yet (that's the deferred "kit
  // Paris" in argentina.md). They appear as the dimmed abroad dots on cl/map.js;
  // ids/accentColors must match those dots. A1 themes reinforce the Chile grammar.
  {
    id: 'buenosaires',
    name: 'Buenos Aires',
    tagline: '¡Bienvenido a Argentina!',
    theme: 'Aeropuerto y llegada',
    accentColor: '#75AADB',
    icon: '🏙️',
    description:
      'Buenos Aires, la capital, es el punto de partida. El viajero aterriza en Ezeiza, ' +
      'toma el subte al centro y descubre el tango, el café y las librerías. Primer reto: ' +
      'arreglárselas sin hablar una palabra de español.',
    descriptionEn:
      'Buenos Aires, the capital, is the starting point. The traveller lands at Ezeiza, ' +
      'rides the subte downtown and discovers tango, cafés and bookshops. First challenge: ' +
      'getting by without a word of Spanish.',
    photos: [
      { wikiTitle: 'Buenos Aires', alt: 'Buenos Aires y el Obelisco', caption: 'Buenos Aires, la capital del tango' },
    ],
    vocabTopics: ['Aeropuerto', 'Saludos', 'Presentaciones'],
    grammarTopic: 'Pronombres + el verbo ser',
    lessons: [
      {
        id: 'buenosaires-1',
        title: 'Arriving in Argentina',
        description: 'At Ezeiza airport: customs, luggage, finding the way into the city.',
        steps: [
          { type: 'vocab', word: 'el aeropuerto', article: 'el', english: 'airport', example: 'El aeropuerto de Ezeiza es enorme.' },
          { type: 'vocab', word: 'el vuelo', article: 'el', english: 'flight', example: 'El vuelo llega a la mañana.' },
          { type: 'vocab', word: 'el pasaporte', article: 'el', english: 'passport', example: 'Aquí está mi pasaporte.' },
          { type: 'vocab', word: 'el subte', article: 'el', english: 'metro / subway', example: 'Tomo el subte al centro.' },
          { type: 'vocab', word: 'las maletas', article: 'las', english: 'luggage / suitcases', example: '¿Dónde están las maletas?' },
          { type: 'vocab', word: 'la salida', article: 'la', english: 'exit', example: 'La salida está a la derecha.' },
          { type: 'grammar', title: 'El verbo ser (to be)', explanation: 'Ser is the most essential Spanish verb and is irregular. Present forms: soy, eres, es, somos, sois, son.', examples: ['¡Soy de Brasil!', 'Ella es de Buenos Aires.', 'Nosotros somos turistas.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "the metro / subway" in Buenos Aires?', options: ['el vuelo', 'el subte', 'la salida', 'las maletas'], correct: 'el subte' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ de Brasil. (ser: I am)', correct: 'Soy' },
        ],
      },
      {
        id: 'buenosaires-2',
        title: 'Greetings and Introductions',
        description: 'Saying hello, introducing yourself, where you are from.',
        steps: [
          { type: 'vocab', word: 'hola', article: null, english: 'hello', example: '¡Hola! ¿Cómo estás?' },
          { type: 'vocab', word: 'adiós', article: null, english: 'goodbye', example: 'Adiós, ¡hasta pronto!' },
          { type: 'vocab', word: 'me llamo…', article: null, english: 'my name is…', example: 'Me llamo Maria.' },
          { type: 'vocab', word: 'mucho gusto', article: null, english: 'pleased to meet you', example: 'Mucho gusto, ¿y vos?' },
          { type: 'vocab', word: 'soy de…', article: null, english: 'I am from…', example: 'Soy de Brasil.' },
          { type: 'vocab', word: 'no entiendo', article: null, english: "I don't understand", example: 'Perdón, no entiendo.' },
          { type: 'grammar', title: 'Pronombres personales', explanation: 'yo, tú/vos, él/ella/usted, nosotros, ellos/ellas. In Argentina « vos » replaces « tú »: vos sos (instead of tú eres).', examples: ['Yo soy brasileño.', '¿Vos hablás inglés?', '¿De dónde es usted?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'In Argentina, the informal "you" is…?', options: ['tú', 'vos', 'usted', 'él'], correct: 'vos' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Me ___ Maria. (my name is)', correct: 'llamo' },
        ],
      },
    ],
    places: [
      {
        id: 'ba-ezeiza', name: 'Aeropuerto de Ezeiza', icon: '✈️',
        coords: [-34.8222, -58.5358], wikiTitle: 'Ministro Pistarini International Airport',
        narrative: 'Your plane touches down at Ezeiza, Buenos Aires\'s main international airport. You clear customs, grab your bag and find the bus into the city.',
        phrases: [
          { es: '¿Dónde está la salida?', en: 'Where is the exit?' },
          { es: 'Soy de Brasil.', en: "I'm from Brazil." },
          { es: 'Un boleto al centro, por favor.', en: 'A ticket to the centre, please.' },
        ],
        lessonId: 'buenosaires-1',
        quiz: {
          question: "Buenos Aires's main international airport is commonly known as…?",
          options: ['Ezeiza', 'Aeroparque', 'El Palomar'],
          correct: 'Ezeiza',
          explanation: 'Ministro Pistarini International Airport sits in Ezeiza, hence its everyday name.',
        },
      },
      {
        id: 'ba-plaza', name: 'Plaza de Mayo', icon: '🏛️',
        coords: [-34.6083, -58.3712], wikiTitle: 'Plaza de Mayo',
        narrative: 'In the Plaza de Mayo, the city\'s political heart, you practise your first hellos facing the rose-pink Casa Rosada, the presidential palace.',
        phrases: [
          { es: '¡Hola, buenos días!', en: 'Hello, good morning!' },
          { es: 'Mucho gusto.', en: 'Pleased to meet you.' },
          { es: '¿Cómo está usted?', en: 'How are you? (formal)' },
        ],
        lessonId: 'buenosaires-2',
        quiz: {
          question: 'The pink building on the Plaza de Mayo, the Casa Rosada, is…?',
          options: ['The presidential palace', 'The cathedral', 'The opera house'],
          correct: 'The presidential palace',
          explanation: 'The Casa Rosada is the seat of the Argentine president.',
        },
      },
      {
        id: 'ba-santelmo', name: 'San Telmo', icon: '💃',
        coords: [-34.6212, -58.3731], wikiTitle: 'San Telmo',
        narrative: 'As evening falls you wander San Telmo\'s cobbled lanes, where couples dance tango under the lamplight beside the Sunday antiques market.',
        phrases: [
          { es: 'Me gusta el tango.', en: 'I like tango.' },
          { es: '¡Qué barrio tan bonito!', en: 'What a lovely neighbourhood!' },
        ],
        quiz: {
          question: 'San Telmo is most associated with which dance?',
          options: ['Tango', 'Samba', 'Flamenco'],
          correct: 'Tango',
          explanation: 'Tango was born in the Río de la Plata barrios; San Telmo is its spiritual home.',
        },
      },
      {
        id: 'ba-caminito', name: 'Caminito (La Boca)', icon: '🎨',
        coords: [-34.6395, -58.3625], wikiTitle: 'Caminito',
        narrative: 'In La Boca you reach Caminito, a short street of brightly painted tin houses, all reds, blues and yellows, where tango dancers pose for the crowd.',
        phrases: [
          { es: '¡Qué colores!', en: 'What colours!' },
          { es: 'La casa es azul y amarilla.', en: 'The house is blue and yellow.' },
        ],
        quiz: {
          question: 'Caminito is famous for its houses painted in…?',
          options: ['Many bright colours', 'Pure white', 'Black and grey'],
          correct: 'Many bright colours',
          explanation: 'Workers painted the tin houses with leftover ship paint, giving Caminito its colourful look.',
        },
      },
      {
        id: 'ba-recoleta', name: 'Cementerio de la Recoleta', icon: '⚰️',
        coords: [-34.5875, -58.3925], wikiTitle: 'La Recoleta Cemetery',
        narrative: 'You end at the Recoleta Cemetery, a city of marble mausoleums where Eva Perón rests, before a coffee in the elegant barrio above.',
        phrases: [
          { es: 'Es un lugar muy tranquilo.', en: "It's a very quiet place." },
          { es: 'Adiós, Buenos Aires.', en: 'Goodbye, Buenos Aires.' },
        ],
        quiz: {
          question: 'Which famous Argentine is buried in the Recoleta Cemetery?',
          options: ['Eva Perón', 'Diego Maradona', 'Jorge Luis Borges'],
          correct: 'Eva Perón',
          explanation: 'Eva "Evita" Perón lies in the Duarte family tomb in Recoleta.',
        },
      },
    ],
  },
  {
    id: 'iguazu',
    name: 'Puerto Iguazú',
    tagline: '¡Las cataratas más grandes!',
    theme: 'La naturaleza y los números',
    accentColor: '#2E8B57',
    icon: '🌊',
    description:
      'En el extremo noreste, en la selva subtropical, rugen las Cataratas del Iguazú: ' +
      '275 saltos de agua en la frontera con Brasil. La "Garganta del Diablo" deja a ' +
      'todos sin palabras.',
    descriptionEn:
      'In the far northeast, in the subtropical jungle, the Iguazú Falls roar: 275 ' +
      'waterfalls on the border with Brazil. The "Devil\'s Throat" leaves everyone ' +
      'speechless.',
    photos: [
      { wikiTitle: 'Iguazu Falls', alt: 'Cataratas del Iguazú', caption: 'Las Cataratas del Iguazú, en la selva subtropical' },
    ],
    vocabTopics: ['La naturaleza', 'Los números 1–20', 'Hay (there is/are)'],
    grammarTopic: 'Hay + los números',
    lessons: [
      {
        id: 'iguazu-1',
        title: 'Nature and Numbers',
        description: 'Describing the falls and the jungle, counting from one to twenty.',
        steps: [
          { type: 'vocab', word: 'el agua', article: 'el', english: 'water', example: 'Hay mucha agua aquí.' },
          { type: 'vocab', word: 'la cascada', article: 'la', english: 'waterfall', example: 'La cascada es enorme.' },
          { type: 'vocab', word: 'la selva', article: 'la', english: 'jungle', example: 'La selva es verde y húmeda.' },
          { type: 'vocab', word: 'hay', article: null, english: 'there is / there are', example: 'Hay muchas cataratas.' },
          { type: 'vocab', word: '¡qué grande!', article: null, english: 'how big!', example: '¡Qué grande es la catarata!' },
          { type: 'vocab', word: 'uno, dos, tres…', article: null, english: 'one, two, three…', example: 'Uno, dos, tres saltos de agua.' },
          { type: 'grammar', title: 'Los números 1–20 y « hay »', explanation: 'uno, dos, tres… up to veinte (20). « Hay » (there is / there are) never changes: hay un río, hay muchos saltos.', examples: ['Hay 275 saltos de agua.', 'Veo dos arcoíris.', 'No hay puente aquí.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "there is a lot of water"?', options: ['Es mucha agua', 'Hay mucha agua', 'Tengo mucha agua', 'Está mucha agua'], correct: 'Hay mucha agua' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ muchas cataratas. (there are)', correct: 'Hay' },
        ],
      },
    ],
    places: [
      {
        id: 'iguazu-garganta', name: 'Garganta del Diablo', icon: '🌊',
        coords: [-25.6916, -54.4378], wikiTitle: 'Devil\'s Throat (Iguazu Falls)',
        narrative: 'A catwalk carries you over the river to the Garganta del Diablo, where half the Iguazú River plunges into a roaring cloud of spray.',
        phrases: [
          { es: '¡Qué grande!', en: 'How big!' },
          { es: 'Hay mucha agua.', en: 'There is a lot of water.' },
          { es: 'No puedo oír nada.', en: "I can't hear anything." },
        ],
        lessonId: 'iguazu-1',
        quiz: {
          question: 'The Garganta del Diablo ("Devil\'s Throat") is…?',
          options: ['The biggest of the falls', 'A cave', 'A hotel'],
          correct: 'The biggest of the falls',
          explanation: 'It is the largest and most powerful of the 275 Iguazú waterfalls.',
        },
      },
      {
        id: 'iguazu-superior', name: 'Circuito Superior', icon: '🚶',
        coords: [-25.6840, -54.4445], wikiTitle: 'Iguazú National Park',
        narrative: 'The upper circuit walks you along the top of the falls, the green river sliding silently to the edge before it drops away.',
        phrases: [
          { es: 'La vista es increíble.', en: 'The view is incredible.' },
          { es: 'Hay un arcoíris.', en: 'There is a rainbow.' },
        ],
        quiz: {
          question: 'The Iguazú Falls lie inside what kind of protected area?',
          options: ['A national park', 'A private farm', 'A city park'],
          correct: 'A national park',
          explanation: 'Iguazú National Park is a UNESCO World Heritage Site shared by Argentina and Brazil.',
        },
      },
      {
        id: 'iguazu-inferior', name: 'Circuito Inferior', icon: '💦',
        coords: [-25.6953, -54.4367], wikiTitle: 'Iguazu Falls',
        narrative: 'The lower circuit brings you to the foot of the falls, close enough to be soaked, coatis crossing the path beside you.',
        phrases: [
          { es: 'El agua está fría.', en: 'The water is cold.' },
          { es: 'Hay muchos animales.', en: 'There are many animals.' },
        ],
        quiz: {
          question: 'How many separate waterfalls make up the Iguazú Falls (roughly)?',
          options: ['About 275', 'Exactly 3', 'Over 1,000'],
          correct: 'About 275',
          explanation: 'Depending on the river level, there are around 275 individual falls.',
        },
      },
      {
        id: 'iguazu-isla', name: 'Isla San Martín', icon: '🌿',
        coords: [-25.6889, -54.4456], wikiTitle: 'Iguazu Falls',
        narrative: 'A small boat ferries you to Isla San Martín, an island ringed by falls in the middle of the river, deep in the subtropical jungle.',
        phrases: [
          { es: 'La selva es verde.', en: 'The jungle is green.' },
          { es: 'Vamos en barco.', en: "We're going by boat." },
        ],
        quiz: {
          question: 'The forest around Iguazú is what kind of jungle?',
          options: ['Subtropical rainforest', 'Pine forest', 'Desert scrub'],
          correct: 'Subtropical rainforest',
          explanation: 'The falls sit in the Atlantic subtropical rainforest, rich in wildlife.',
        },
      },
      {
        id: 'iguazu-hito', name: 'Hito Tres Fronteras', icon: '📍',
        coords: [-25.5997, -54.5807], wikiTitle: 'Triple Frontier',
        narrative: 'You finish at the Hito Tres Fronteras, where the rivers meet and three countries face each other across the water.',
        phrases: [
          { es: 'Aquí hay tres países.', en: 'Here there are three countries.' },
          { es: 'Adiós, Iguazú.', en: 'Goodbye, Iguazú.' },
        ],
        quiz: {
          question: 'At the Triple Frontier near Iguazú, which three countries meet?',
          options: ['Argentina, Brazil and Paraguay', 'Argentina, Chile and Bolivia', 'Brazil, Uruguay and Paraguay'],
          correct: 'Argentina, Brazil and Paraguay',
          explanation: 'The Iguazú and Paraná rivers meet where Argentina, Brazil and Paraguay share a border.',
        },
      },
    ],
  },
  {
    id: 'salta',
    name: 'Salta',
    tagline: '¡El norte colorido!',
    theme: 'El mercado y las compras',
    accentColor: '#C8742B',
    icon: '⛰️',
    description:
      '"Salta la linda", colonial y andina, puerta a la Quebrada de Humahuaca y al Cerro ' +
      'de los Siete Colores. Mercados, empanadas y peñas folklóricas: el lugar para ' +
      'aprender a comprar y regatear.',
    descriptionEn:
      '"Salta the beautiful", colonial and Andean, gateway to the Quebrada de Humahuaca ' +
      'and the Hill of Seven Colours. Markets, empanadas and folk music: the place to ' +
      'learn to shop and haggle.',
    photos: [
      { wikiTitle: 'Salta', alt: 'Salta colonial y andina', caption: 'Salta "la linda", puerta al norte andino' },
    ],
    vocabTopics: ['El mercado', 'Las compras', 'El precio'],
    grammarTopic: 'Comprar y preguntar el precio',
    lessons: [
      {
        id: 'salta-1',
        title: 'At the Market',
        description: 'Shopping in the market, asking the price, haggling.',
        steps: [
          { type: 'vocab', word: 'el mercado', article: 'el', english: 'market', example: 'El mercado está en la plaza.' },
          { type: 'vocab', word: 'la empanada', article: 'la', english: 'empanada', example: 'Quiero comprar empanadas.' },
          { type: 'vocab', word: 'el precio', article: 'el', english: 'price', example: '¿Cuál es el precio?' },
          { type: 'vocab', word: '¿cuánto cuesta?', article: null, english: 'how much is it?', example: '¿Cuánto cuesta esto?' },
          { type: 'vocab', word: 'demasiado caro', article: null, english: 'too expensive', example: '¡Es demasiado caro!' },
          { type: 'vocab', word: 'quiero comprar esto', article: null, english: 'I want to buy this', example: 'Quiero comprar esto, por favor.' },
          { type: 'grammar', title: 'Comprar y regatear', explanation: 'To shop: « ¿Cuánto cuesta? » (how much is it?), « Quiero comprar… » (I want to buy…). To haggle: « Es muy caro » / « ¿Me hace un descuento? ».', examples: ['¿Cuánto cuesta el poncho?', 'Quiero comprar dos empanadas.', 'Es demasiado caro.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "too expensive"?', options: ['muy barato', 'demasiado caro', 'qué rico', 'por favor'], correct: 'demasiado caro' },
          { type: 'exercise', subtype: 'fill-blank', question: '¿Cuánto ___ esto? (to cost: it costs)', correct: 'cuesta' },
        ],
      },
    ],
    places: [
      {
        id: 'salta-plaza', name: 'Plaza 9 de Julio', icon: '⛪',
        coords: [-24.7889, -65.4106], wikiTitle: 'Salta',
        narrative: 'You arrive in the colonial heart of Salta, the Plaza 9 de Julio, its arcades and pink cathedral framed by palm trees.',
        phrases: [
          { es: '¡Qué plaza tan linda!', en: 'What a lovely square!' },
          { es: '¿Dónde está la catedral?', en: 'Where is the cathedral?' },
        ],
        quiz: {
          question: 'Salta is nicknamed…?',
          options: ['"La linda" (the beautiful)', '"La fría" (the cold)', '"La grande" (the big)'],
          correct: '"La linda" (the beautiful)',
          explanation: 'Its well-preserved colonial centre earns Salta the nickname "Salta la linda".',
        },
      },
      {
        id: 'salta-mercado', name: 'Mercado Artesanal', icon: '🛍️',
        coords: [-24.8000, -65.4350], wikiTitle: 'Salta',
        narrative: 'In the market you haggle for empanadas salteñas and a woven poncho, surrounded by Andean colour and the smell of spice.',
        phrases: [
          { es: '¿Cuánto cuesta?', en: 'How much is it?' },
          { es: 'Demasiado caro.', en: 'Too expensive.' },
          { es: 'Quiero comprar esto.', en: 'I want to buy this.' },
        ],
        lessonId: 'salta-1',
        quiz: {
          question: 'The local pastry Salta is famous for is the…?',
          options: ['Empanada', 'Croissant', 'Pretzel'],
          correct: 'Empanada',
          explanation: 'The empanada salteña is a regional speciality of the northwest.',
        },
      },
      {
        id: 'salta-teleferico', name: 'Cerro San Bernardo', icon: '🚠',
        coords: [-24.7886, -65.3956], wikiTitle: 'San Bernardo Hill',
        narrative: 'A cable car lifts you up Cerro San Bernardo for a view over the whole city and the green Lerma valley beyond.',
        phrases: [
          { es: 'Tomamos el teleférico.', en: 'We take the cable car.' },
          { es: 'La vista es preciosa.', en: 'The view is lovely.' },
        ],
        quiz: {
          question: 'How do you reach the top of Cerro San Bernardo most easily?',
          options: ['By cable car (teleférico)', 'By boat', 'By plane'],
          correct: 'By cable car (teleférico)',
          explanation: 'A teleférico runs from the city park up to the summit.',
        },
      },
      {
        id: 'salta-tren', name: 'Tren a las Nubes', icon: '🚂',
        coords: [-24.6300, -65.7700], wikiTitle: 'Train to the Clouds',
        narrative: 'You board the Tren a las Nubes, climbing through tunnels and switchbacks to a viaduct over 4,000 m high in the Andes.',
        phrases: [
          { es: 'El tren sube muy alto.', en: 'The train climbs very high.' },
          { es: 'Hace frío aquí.', en: "It's cold here." },
        ],
        quiz: {
          question: 'The "Tren a las Nubes" (Train to the Clouds) is famous for being…?',
          options: ['One of the highest railways in the world', 'The fastest train', 'An underground metro'],
          correct: 'One of the highest railways in the world',
          explanation: 'It crosses the La Polvorilla viaduct at over 4,200 m above sea level.',
        },
      },
      {
        id: 'salta-quebrada', name: 'Quebrada de Humahuaca', icon: '🏔️',
        coords: [-23.2050, -65.3497], wikiTitle: 'Quebrada de Humahuaca',
        narrative: 'North of the city you reach the Quebrada de Humahuaca, a long painted valley where the Cerro de los Siete Colores glows in stripes of rock.',
        phrases: [
          { es: '¡Qué montañas de colores!', en: 'What colourful mountains!' },
          { es: 'Adiós, Salta.', en: 'Goodbye, Salta.' },
        ],
        quiz: {
          question: 'The Quebrada de Humahuaca is recognised as a…?',
          options: ['UNESCO World Heritage Site', 'National football stadium', 'Ski resort'],
          correct: 'UNESCO World Heritage Site',
          explanation: 'The painted Andean valley is a UNESCO World Heritage cultural landscape.',
        },
      },
    ],
  },
  {
    id: 'mendoza',
    name: 'Mendoza',
    tagline: '¡Tierra del vino!',
    theme: 'La comida y la bebida',
    accentColor: '#7B1E3A',
    icon: '🍷',
    description:
      'A los pies del Aconcagua —la montaña más alta de América— Mendoza es la capital ' +
      'del Malbec. Bodegas, asado y un sol seco. Aquí se aprende a pedir en el restaurante ' +
      'y a brindar.',
    descriptionEn:
      'At the foot of Aconcagua —the highest mountain in the Americas— Mendoza is the ' +
      'capital of Malbec. Wineries, asado and a dry sun. Here you learn to order in a ' +
      'restaurant and to toast.',
    photos: [
      { wikiTitle: 'Mendoza, Argentina', alt: 'Viñedos de Mendoza', caption: 'Mendoza, la tierra del Malbec, bajo el Aconcagua' },
    ],
    vocabTopics: ['La comida', 'La bebida', 'Pedir con querer'],
    grammarTopic: 'El verbo querer (quiero…)',
    lessons: [
      {
        id: 'mendoza-1',
        title: 'Food and Wine',
        description: 'Ordering at the restaurant, asking for the bill, raising a toast.',
        steps: [
          { type: 'vocab', word: 'el vino', article: 'el', english: 'wine', example: 'Quiero un vino tinto.' },
          { type: 'vocab', word: 'la comida', article: 'la', english: 'food / meal', example: 'La comida es muy rica.' },
          { type: 'vocab', word: 'el asado', article: 'el', english: 'barbecue / roast', example: 'El asado es la especialidad.' },
          { type: 'vocab', word: 'la cuenta', article: 'la', english: 'the bill / check', example: 'La cuenta, por favor.' },
          { type: 'vocab', word: 'por favor', article: null, english: 'please', example: 'Un vino, por favor.' },
          { type: 'vocab', word: '¡salud!', article: null, english: 'cheers!', example: '¡Salud, buen viaje!' },
          { type: 'grammar', title: 'Pedir con « quiero »', explanation: '« Quiero… » (I want…) from querer is the everyday way to order: quiero, querés/quieres, quiere… Soften it with « por favor ».', examples: ['Quiero un vino, por favor.', 'Quiero la cuenta.', '¿Querés agua?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you ask for the bill?', options: ['La comida, por favor', 'La cuenta, por favor', 'El vino, por favor', '¡Salud!'], correct: 'La cuenta, por favor' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ un vino, por favor. (querer: I want)', correct: 'Quiero' },
        ],
      },
    ],
    places: [
      {
        id: 'mendoza-plaza', name: 'Plaza Independencia', icon: '🏛️',
        coords: [-32.8895, -68.8458], wikiTitle: 'Mendoza, Argentina',
        narrative: 'You start in the leafy Plaza Independencia at the centre of Mendoza, a city rebuilt with wide, tree-lined avenues after an earthquake.',
        phrases: [
          { es: '¡Qué ciudad tan verde!', en: 'What a green city!' },
          { es: '¿Dónde está la plaza?', en: 'Where is the square?' },
        ],
        quiz: {
          question: 'Mendoza\'s streets are lined with trees fed by what historic system?',
          options: ['Irrigation channels (acequias)', 'The metro', 'Canals for boats'],
          correct: 'Irrigation channels (acequias)',
          explanation: 'Acequias, channels of Andean meltwater, water the city\'s thousands of street trees.',
        },
      },
      {
        id: 'mendoza-bodega', name: 'Bodega de Maipú', icon: '🍇',
        coords: [-32.9833, -68.7833], wikiTitle: 'Maipú, Mendoza',
        narrative: 'In Maipú you tour a bodega among the vines, learning to swirl and taste, and sit down to an asado with a glass of deep red Malbec.',
        phrases: [
          { es: 'Quiero un vino, por favor.', en: "I'd like a wine, please." },
          { es: 'La comida es muy rica.', en: 'The food is delicious.' },
          { es: '¡Salud!', en: 'Cheers!' },
        ],
        lessonId: 'mendoza-1',
        quiz: {
          question: 'Mendoza is Argentina\'s capital of which red wine?',
          options: ['Malbec', 'Merlot', 'Pinot Noir'],
          correct: 'Malbec',
          explanation: 'Malbec is Mendoza\'s signature grape and Argentina\'s flagship wine.',
        },
      },
      {
        id: 'mendoza-parque', name: 'Parque General San Martín', icon: '🌳',
        coords: [-32.8908, -68.8772], wikiTitle: 'General San Martín Park',
        narrative: 'You stroll the huge Parque General San Martín, past its lake and rose garden, the dry Andean foothills rising at its edge.',
        phrases: [
          { es: 'El parque es enorme.', en: 'The park is huge.' },
          { es: 'Vamos a caminar.', en: "Let's go for a walk." },
        ],
        quiz: {
          question: 'The park and many places in the region honour José de San Martín, who was…?',
          options: ['Argentina\'s liberator-general', 'A footballer', 'A winemaker'],
          correct: 'Argentina\'s liberator-general',
          explanation: 'San Martín led the army that crossed the Andes from Mendoza to free Chile and Peru.',
        },
      },
      {
        id: 'mendoza-aconcagua', name: 'Cerro Aconcagua', icon: '🏔️',
        coords: [-32.6533, -70.0109], wikiTitle: 'Aconcagua',
        narrative: 'A road west into the mountains brings you below Aconcagua, its snow-capped summit the highest point in all the Americas.',
        phrases: [
          { es: 'La montaña tiene nieve.', en: 'The mountain has snow.' },
          { es: 'Hace mucho frío.', en: "It's very cold." },
        ],
        quiz: {
          question: 'Aconcagua, near Mendoza, is the highest mountain in…?',
          options: ['The Americas', 'Europe', 'Africa'],
          correct: 'The Americas',
          explanation: 'At 6,961 m, Aconcagua is the highest peak outside Asia.',
        },
      },
      {
        id: 'mendoza-gloria', name: 'Cerro de la Gloria', icon: '🥩',
        coords: [-32.8861, -68.8889], wikiTitle: 'Cerro de la Gloria',
        narrative: 'You end at the Cerro de la Gloria, its monument to the Army of the Andes overlooking the city, then a final asado as the sun drops.',
        phrases: [
          { es: 'El asado es muy rico.', en: 'The barbecue is delicious.' },
          { es: 'Adiós, Mendoza.', en: 'Goodbye, Mendoza.' },
        ],
        quiz: {
          question: 'The monument on the Cerro de la Gloria honours the army that crossed the Andes to…?',
          options: ['Liberate Chile and Peru', 'Build the railway', 'Plant the vineyards'],
          correct: 'Liberate Chile and Peru',
          explanation: 'It commemorates San Martín\'s Army of the Andes and the independence campaign.',
        },
      },
    ],
  },
  {
    id: 'bariloche',
    name: 'Bariloche',
    tagline: '¡Lagos y chocolate!',
    theme: 'El transporte y las direcciones',
    accentColor: '#2C8C99',
    icon: '🏔️',
    description:
      'En la Patagonia de los lagos, un pueblo de estilo alpino a orillas del Nahuel ' +
      'Huapi, famoso por el chocolate y el esquí. Desde aquí se toman buses y barcos para ' +
      'recorrer la región.',
    descriptionEn:
      'In the Patagonian lake country, an alpine-style town on the shore of Nahuel Huapi, ' +
      'famous for chocolate and skiing. From here you take buses and boats to explore the ' +
      'region.',
    photos: [
      { wikiTitle: 'San Carlos de Bariloche', alt: 'Bariloche y el lago Nahuel Huapi', caption: 'Bariloche, alpina, a orillas del Nahuel Huapi' },
    ],
    vocabTopics: ['El transporte', 'Las direcciones', 'El verbo ir'],
    grammarTopic: 'El verbo ir (voy, vas…)',
    lessons: [
      {
        id: 'bariloche-1',
        title: 'Getting Around',
        description: 'Taking the bus, asking the way, left and right.',
        steps: [
          { type: 'vocab', word: 'el autobús', article: 'el', english: 'bus', example: 'Voy en autobús al lago.' },
          { type: 'vocab', word: 'el lago', article: 'el', english: 'lake', example: 'El lago es enorme.' },
          { type: 'vocab', word: 'a la derecha', article: null, english: 'to the right', example: 'El museo está a la derecha.' },
          { type: 'vocab', word: 'a la izquierda', article: null, english: 'to the left', example: 'Gire a la izquierda.' },
          { type: 'vocab', word: '¿por dónde se va?', article: null, english: 'which way?', example: '¿Por dónde se va al lago?' },
          { type: 'vocab', word: 'el chocolate', article: 'el', english: 'chocolate', example: 'El chocolate de Bariloche es famoso.' },
          { type: 'grammar', title: 'El verbo ir (to go)', explanation: 'Ir is irregular: voy, vas, va, vamos, vais, van. Use « voy en… » for transport and « voy a… » for destinations.', examples: ['Voy en autobús.', 'Vamos al lago.', '¿Vas a la montaña?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "to the left"?', options: ['a la derecha', 'a la izquierda', 'el autobús', 'el lago'], correct: 'a la izquierda' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ en autobús. (ir: I go)', correct: 'Voy' },
        ],
      },
    ],
    places: [
      {
        id: 'bariloche-centro', name: 'Centro Cívico', icon: '🏘️',
        coords: [-41.1335, -71.3103], wikiTitle: 'San Carlos de Bariloche',
        narrative: 'You arrive at Bariloche\'s Centro Cívico, a square of grey-stone, alpine-style buildings looking out over Lake Nahuel Huapi.',
        phrases: [
          { es: '¿Por dónde se va al lago?', en: 'Which way to the lake?' },
          { es: '¡Qué pueblo tan bonito!', en: 'What a pretty town!' },
        ],
        lessonId: 'bariloche-1',
        quiz: {
          question: 'Bariloche\'s architecture is often compared to which European region?',
          options: ['The Alps', 'The Mediterranean coast', 'Scandinavia\'s fjords'],
          correct: 'The Alps',
          explanation: 'Its stone-and-timber buildings give Bariloche an alpine, Swiss-like look.',
        },
      },
      {
        id: 'bariloche-campanario', name: 'Cerro Campanario', icon: '🚠',
        coords: [-41.1083, -71.4333], wikiTitle: 'Cerro Campanario',
        narrative: 'A chairlift carries you up Cerro Campanario for a view often called one of the world\'s finest: lakes, islands and peaks in every direction.',
        phrases: [
          { es: 'Voy en la silla.', en: "I'm going on the chairlift." },
          { es: 'La vista es increíble.', en: 'The view is incredible.' },
        ],
        quiz: {
          question: 'Cerro Campanario is famous for its panorama of…?',
          options: ['Lakes and mountains', 'A desert', 'A big city'],
          correct: 'Lakes and mountains',
          explanation: 'Its summit gives a 360° view over the Nahuel Huapi lakes and surrounding peaks.',
        },
      },
      {
        id: 'bariloche-llaollao', name: 'Circuito Chico / Llao Llao', icon: '🌲',
        coords: [-41.0556, -71.5378], wikiTitle: 'Llao Llao Hotel',
        narrative: 'Following the Circuito Chico you pass forests and bays to the Llao Llao, a grand hotel set between two lakes and the mountains.',
        phrases: [
          { es: 'Voy en autobús.', en: "I'm going by bus." },
          { es: 'a la derecha / a la izquierda', en: 'right / left' },
        ],
        quiz: {
          question: 'The Circuito Chico is a scenic route best done by…?',
          options: ['Road, past lakes and forests', 'Submarine', 'Cable car only'],
          correct: 'Road, past lakes and forests',
          explanation: 'The "Circuito Chico" is a classic loop drive through the lake-and-forest scenery.',
        },
      },
      {
        id: 'bariloche-nahuel', name: 'Lago Nahuel Huapi', icon: '⛵',
        coords: [-41.0500, -71.5000], wikiTitle: 'Nahuel Huapi Lake',
        narrative: 'You take a boat onto Lake Nahuel Huapi, a vast glacial lake of deep blue arms reaching into the forested mountains.',
        phrases: [
          { es: 'El lago es enorme.', en: 'The lake is huge.' },
          { es: 'Vamos en barco a la isla.', en: "We're going by boat to the island." },
        ],
        quiz: {
          question: 'Lake Nahuel Huapi gives its name to Argentina\'s oldest…?',
          options: ['National park', 'Vineyard', 'Airport'],
          correct: 'National park',
          explanation: 'Nahuel Huapi National Park, around the lake, is the oldest in Argentina.',
        },
      },
      {
        id: 'bariloche-mitre', name: 'Calle Mitre (chocolate)', icon: '🍫',
        coords: [-41.1340, -71.3080], wikiTitle: 'San Carlos de Bariloche',
        narrative: 'Back in town you finish on Calle Mitre, the main street lined with chocolate shops, and buy a box for the road south.',
        phrases: [
          { es: 'Quiero chocolate, por favor.', en: 'I want chocolate, please.' },
          { es: 'Adiós, Bariloche.', en: 'Goodbye, Bariloche.' },
        ],
        quiz: {
          question: 'Bariloche\'s main street is famous for selling which sweet?',
          options: ['Chocolate', 'Ice cream cones only', 'Cotton candy'],
          correct: 'Chocolate',
          explanation: 'Calle Mitre is packed with artisan chocolate shops, a Bariloche tradition.',
        },
      },
    ],
  },
  {
    id: 'ushuaia',
    name: 'Ushuaia',
    tagline: '¡El fin del mundo!',
    theme: 'El clima y la despedida',
    accentColor: '#4A6FA5',
    icon: '🐧',
    description:
      'El gran final: la ciudad más austral del mundo, entre el canal Beagle y las ' +
      'montañas nevadas. Pingüinos, glaciares y un clima frío y cambiante — hay que saber ' +
      'hablar del tiempo y despedirse.',
    descriptionEn:
      'The grand finale: the southernmost city in the world, between the Beagle Channel ' +
      'and snowy mountains. Penguins, glaciers and a cold, changeable climate — you need ' +
      'to talk about the weather and say goodbye.',
    photos: [
      { wikiTitle: 'Ushuaia', alt: 'Ushuaia, el fin del mundo', caption: 'Ushuaia, la ciudad más austral del mundo' },
    ],
    vocabTopics: ['El clima', 'La despedida', 'El tiempo con hacer'],
    grammarTopic: 'El tiempo con hacer (hace frío)',
    lessons: [
      {
        id: 'ushuaia-1',
        title: 'Weather and Farewell',
        description: 'Talking about the cold weather, saying goodbye and safe travels.',
        steps: [
          { type: 'vocab', word: 'hace frío', article: null, english: "it's cold", example: 'En Ushuaia hace mucho frío.' },
          { type: 'vocab', word: 'el viento', article: 'el', english: 'wind', example: 'El viento del Beagle es fuerte.' },
          { type: 'vocab', word: 'la nieve', article: 'la', english: 'snow', example: 'Hay nieve en las montañas.' },
          { type: 'vocab', word: '¿cómo está el tiempo?', article: null, english: "how's the weather?", example: '¿Cómo está el tiempo hoy?' },
          { type: 'vocab', word: 'adiós', article: null, english: 'goodbye', example: 'Adiós, ¡buen viaje!' },
          { type: 'vocab', word: '¡buen viaje!', article: null, english: 'safe travels!', example: 'Gracias, ¡buen viaje!' },
          { type: 'grammar', title: 'El tiempo con « hacer »', explanation: 'Spanish uses « hacer » for many weather phrases: hace frío (it\'s cold), hace calor (it\'s hot), hace viento (it\'s windy), hace sol (it\'s sunny).', examples: ['Hace mucho frío hoy.', '¿Hace viento en el canal?', 'En el norte hace calor.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "it\'s cold"?', options: ['hace calor', 'hace frío', 'hace sol', 'hay viento'], correct: 'hace frío' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Adiós, ¡buen ___! (safe travels — journey)', correct: 'viaje' },
        ],
      },
    ],
    places: [
      {
        id: 'ushuaia-puerto', name: 'Puerto de Ushuaia', icon: '⚓',
        coords: [-54.8019, -68.3030], wikiTitle: 'Ushuaia',
        narrative: 'You reach Ushuaia, the southernmost city in the world, its colourful port wedged between the Beagle Channel and snowy peaks.',
        phrases: [
          { es: 'Hace frío.', en: "It's cold." },
          { es: '¿Cómo está el tiempo?', en: "How's the weather?" },
        ],
        lessonId: 'ushuaia-1',
        quiz: {
          question: 'Ushuaia is often called the world\'s southernmost…?',
          options: ['City', 'Capital', 'Island'],
          correct: 'City',
          explanation: 'Ushuaia is widely known as the southernmost city in the world ("el fin del mundo").',
        },
      },
      {
        id: 'ushuaia-faro', name: 'Faro Les Éclaireurs', icon: '🗼',
        coords: [-54.8667, -68.0833], wikiTitle: 'Les Eclaireurs Lighthouse',
        narrative: 'A boat carries you down the Beagle Channel to the red-and-white Les Éclaireurs lighthouse, sea lions barking on the rocks below it.',
        phrases: [
          { es: 'El viento es muy fuerte.', en: 'The wind is very strong.' },
          { es: 'Vamos en barco.', en: "We're going by boat." },
        ],
        quiz: {
          question: 'The Beagle Channel is named after…?',
          options: ['Darwin\'s ship, HMS Beagle', 'A type of dog', 'A local fish'],
          correct: 'Darwin\'s ship, HMS Beagle',
          explanation: 'The channel was charted during the voyages of HMS Beagle, which carried Charles Darwin.',
        },
      },
      {
        id: 'ushuaia-pinguinos', name: 'Pingüinera Isla Martillo', icon: '🐧',
        coords: [-54.8950, -67.3850], wikiTitle: 'Gable Island',
        narrative: 'On Isla Martillo you walk among a colony of penguins, the only sound the wind and their braying over the grey water.',
        phrases: [
          { es: 'Hay muchos pingüinos.', en: 'There are many penguins.' },
          { es: '¡Qué frío hace!', en: 'How cold it is!' },
        ],
        quiz: {
          question: 'What wildlife are the islands off Ushuaia best known for?',
          options: ['Penguins', 'Camels', 'Tigers'],
          correct: 'Penguins',
          explanation: 'Colonies of Magellanic and Gentoo penguins nest on the Beagle Channel islands.',
        },
      },
      {
        id: 'ushuaia-parque', name: 'P.N. Tierra del Fuego', icon: '🌲',
        coords: [-54.8333, -68.5667], wikiTitle: 'Tierra del Fuego National Park',
        narrative: 'You hike into Tierra del Fuego National Park, where the Pan-American Highway finally ends among forests, peat bogs and still bays.',
        phrases: [
          { es: 'Aquí termina la ruta.', en: 'The road ends here.' },
          { es: 'La naturaleza es hermosa.', en: 'Nature is beautiful.' },
        ],
        quiz: {
          question: 'Tierra del Fuego National Park marks the southern end of which great road?',
          options: ['The Pan-American Highway', 'Route 66', 'The Silk Road'],
          correct: 'The Pan-American Highway',
          explanation: 'The Pan-American Highway\'s southern tip lies inside the park, near Lapataia Bay.',
        },
      },
      {
        id: 'ushuaia-tren', name: 'Tren del Fin del Mundo', icon: '🚂',
        coords: [-54.8419, -68.4814], wikiTitle: 'Southern Fuegian Railway',
        narrative: 'Your journey ends aboard the Tren del Fin del Mundo, the "End of the World" train, steaming through the forest at the bottom of the Americas.',
        phrases: [
          { es: 'Este es el fin del mundo.', en: 'This is the end of the world.' },
          { es: 'Adiós, ¡buen viaje!', en: 'Goodbye, safe travels!' },
        ],
        quiz: {
          question: 'The "Tren del Fin del Mundo" originally carried what?',
          options: ['Prisoners cutting wood', 'Tourists only', 'Gold from mines'],
          correct: 'Prisoners cutting wood',
          explanation: 'It was built to carry inmates of the Ushuaia prison to the forest for logging.',
        },
      },
    ],
  },
];

export default cities;
