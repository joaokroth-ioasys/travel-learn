// French journey content (A1). Same shape as the German pack.
// article: 'le' | 'la' | 'les' drives the coloured gender badge in LessonView.
// Photo wikiTitle values resolve via Wikimedia Commons Special:FilePath.

const cities = [
  {
    id: 'paris',
    name: 'Paris',
    tagline: 'Bienvenue en France !',
    theme: 'Aéroport & arrivée',
    accentColor: '#0055A4',
    icon: '🗼',
    description:
      "Paris, la capitale de la France, est le point de départ de notre voyage. " +
      "Le voyageur atterrit à l'aéroport Charles de Gaulle, prend le RER B vers le centre " +
      "et s'installe dans un petit hôtel du Quartier latin. Premier défi : se débrouiller " +
      "sans parler un mot de français.",
    descriptionEn:
      "Paris, the capital of France, is the starting point of our journey. " +
      "The traveller lands at Charles de Gaulle airport, takes the RER B into the centre " +
      "and settles into a small hotel in the Latin Quarter. First challenge: getting by " +
      "without speaking a word of French.",
    photos: [
      { wikiTitle: 'Eiffel Tower', alt: 'Tour Eiffel', caption: 'La Tour Eiffel, symbole de Paris' },
      { wikiTitle: 'Paris', alt: 'Paris skyline', caption: 'Paris, la Ville Lumière' },
      { wikiTitle: 'Charles de Gaulle Airport', alt: 'Aéroport CDG', caption: "L'aéroport Charles de Gaulle, porte d'entrée du pays" },
    ],
    vocabTopics: ['Aéroport', 'Salutations', 'Présentations'],
    grammarTopic: 'Pronoms sujets + être au présent',
    lessons: [
      {
        id: 'paris-1',
        title: 'Arriving in France',
        description: "At the airport: customs, luggage, finding the train.",
        steps: [
          { type: 'vocab', word: "l'aéroport", article: 'le', english: 'airport', example: "L'aéroport est très grand." },
          { type: 'vocab', word: 'le vol', article: 'le', english: 'flight', example: 'Le vol est à huit heures.' },
          { type: 'vocab', word: 'le passeport', article: 'le', english: 'passport', example: 'Voici mon passeport.' },
          { type: 'vocab', word: 'la douane', article: 'la', english: 'customs', example: 'Je passe la douane.' },
          { type: 'vocab', word: 'les bagages', article: 'les', english: 'luggage', example: 'Où sont les bagages ?' },
          { type: 'vocab', word: 'la sortie', article: 'la', english: 'exit', example: 'La sortie est à droite.' },
          { type: 'grammar', title: 'Le verbe être (to be)', explanation: 'Être is the most essential French verb and is completely irregular. Learn all six forms by heart.', examples: ['Je suis en France !', 'Elle est de Paris.', 'Nous sommes à l\'aéroport.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "luggage" in French?', options: ['la douane', 'les bagages', 'le vol', 'la sortie'], correct: 'les bagages' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ en France ! (être: I am)', correct: 'suis' },
        ],
      },
      {
        id: 'paris-2',
        title: 'Introductions and Greetings',
        description: 'Saying hello, introducing yourself, where you are from.',
        steps: [
          { type: 'vocab', word: 'bonjour', article: null, english: 'hello / good morning', example: 'Bonjour, ça va ?' },
          { type: 'vocab', word: 'au revoir', article: null, english: 'goodbye', example: 'Au revoir, à bientôt !' },
          { type: 'vocab', word: "je m'appelle…", article: null, english: 'my name is…', example: "Je m'appelle Maria." },
          { type: 'vocab', word: 'enchanté(e)', article: null, english: 'pleased to meet you', example: 'Enchanté ! Et vous ?' },
          { type: 'vocab', word: 'je suis de…', article: null, english: 'I am from…', example: 'Je suis du Brésil.' },
          { type: 'vocab', word: 'je ne comprends pas', article: null, english: "I don't understand", example: 'Je ne comprends pas, pardon.' },
          { type: 'grammar', title: 'Pronoms sujets', explanation: 'je, tu, il/elle/on, nous, vous, ils/elles. Tu is informal; vous is formal or plural. On often means an informal "we".', examples: ['Je suis brésilien.', 'Vous parlez anglais ?', 'On va à Paris.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which is the FORMAL "you"?', options: ['tu', 'je', 'vous', 'on'], correct: 'vous' },
          { type: 'exercise', subtype: 'fill-blank', question: "Je m'___ Maria. (my name is)", correct: 'appelle' },
        ],
      },
      {
        id: 'paris-3',
        title: 'At the Eiffel Tower',
        description: 'Buying a ticket, numbers, asking the price.',
        steps: [
          { type: 'vocab', word: 'le billet', article: 'le', english: 'ticket', example: 'Un billet, s\'il vous plaît.' },
          { type: 'vocab', word: "l'entrée", article: 'la', english: 'entrance / admission', example: "L'entrée est à droite." },
          { type: 'vocab', word: 'combien', article: null, english: 'how much / how many', example: "C'est combien ?" },
          { type: 'vocab', word: "l'ascenseur", article: 'le', english: 'lift / elevator', example: "On prend l'ascenseur ?" },
          { type: 'vocab', word: 'la vue', article: 'la', english: 'view', example: 'La vue est magnifique !' },
          { type: 'vocab', word: 'cher / chère', article: null, english: 'expensive', example: "C'est un peu cher." },
          { type: 'grammar', title: 'Les nombres 1–20', explanation: 'un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix… up to vingt (20). Essential for prices, time and tickets.', examples: ['Deux billets, s\'il vous plaît.', 'Ça fait dix-huit euros.', 'Il est trois heures.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you ask "How much is it?"', options: ['Où est-ce ?', 'C\'est combien ?', 'Qui est-ce ?', 'Quelle heure ?'], correct: 'C\'est combien ?' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Un ___, s\'il vous plaît. (ticket)', correct: 'billet' },
        ],
      },
      {
        id: 'paris-4',
        title: 'At the Café',
        description: 'Ordering a drink, being polite, asking for the bill.',
        steps: [
          { type: 'vocab', word: 'le café', article: 'le', english: 'coffee / café', example: 'Un café, s\'il vous plaît.' },
          { type: 'vocab', word: "l'eau", article: 'la', english: 'water', example: "Une carafe d'eau, s'il vous plaît." },
          { type: 'vocab', word: "l'addition", article: 'la', english: 'the bill / check', example: "L'addition, s'il vous plaît !" },
          { type: 'vocab', word: 'merci', article: null, english: 'thank you', example: 'Merci beaucoup !' },
          { type: 'vocab', word: "s'il vous plaît", article: null, english: 'please', example: 'Un thé, s\'il vous plaît.' },
          { type: 'vocab', word: 'la terrasse', article: 'la', english: 'terrace (outdoor seating)', example: 'On s\'installe en terrasse ?' },
          { type: 'grammar', title: 'Commander avec « je voudrais »', explanation: '« Je voudrais… » (I would like…) is the polite way to order. Softer than « je veux » (I want). Always pair it with « s\'il vous plaît ».', examples: ['Je voudrais un café.', 'Je voudrais l\'addition, s\'il vous plaît.', 'Je voudrais une eau, merci.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you politely ask for the bill?', options: ['Le café, s\'il vous plaît', 'L\'addition, s\'il vous plaît', 'Bonjour, ça va ?', 'Une terrasse, merci'], correct: 'L\'addition, s\'il vous plaît' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ un café, s\'il vous plaît. (I would like)', correct: 'voudrais' },
        ],
      },
    ],
    // ── Immersive route: an ordered 10-stage journey across Paris. ──
    // Array order IS the route order (airport → … → Eiffel finale). Each stage
    // has a narrative beat, a mini culture quiz, and optionally a full lesson.
    // Drives the timeline + stage detail in RouteJourney.jsx. See paris.md.
    places: [
      {
        id: 'cdg', name: 'Aéroport Charles de Gaulle', icon: '✈️',
        coords: [49.0097, 2.5479], wikiTitle: 'Charles de Gaulle Airport',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/RER-B_at_Charles_de_Gaulle.jpg',
        narrative: 'Your plane touches down at Charles de Gaulle. Passport stamped, bags collected — you hop on the RER B and watch Paris slide into view.',
        phrases: [
          { fr: 'Où sont les bagages ?', en: 'Where is the luggage?' },
          { fr: "La sortie, s'il vous plaît ?", en: 'The exit, please?' },
          { fr: 'Un ticket pour le centre.', en: 'A ticket to the centre.' },
        ],
        lessonId: 'paris-1',
        quiz: {
          question: 'Charles de Gaulle airport is named after a famous French…?',
          options: ['President & general', 'Painter', 'Chef'],
          correct: 'President & general',
          explanation: 'Charles de Gaulle led the Free French in WWII and later became president of France.',
        },
      },
      {
        id: 'palais-garnier', name: 'Palais Garnier', icon: '🎭',
        coords: [48.8720, 2.3316], wikiTitle: 'Palais Garnier',
        narrative: 'You surface near the Palais Garnier — all gold leaf and red velvet. A grand overture to the city, and your first taste of French politeness.',
        phrases: [
          { fr: 'Bonjour !', en: 'Hello!' },
          { fr: "Deux billets, s'il vous plaît.", en: 'Two tickets, please.' },
          { fr: 'Enchanté !', en: 'Pleased to meet you!' },
        ],
        lessonId: 'paris-2',
        quiz: {
          question: 'The Palais Garnier is the setting for which famous story?',
          options: ['The Phantom of the Opera', 'Les Misérables', 'The Hunchback'],
          correct: 'The Phantom of the Opera',
          explanation: "Gaston Leroux set his 1910 novel in this very opera house — lake in the cellars included.",
        },
      },
      {
        id: 'louvre', name: 'Musée du Louvre', icon: '🖼️',
        coords: [48.8606, 2.3376], wikiTitle: 'Louvre',
        narrative: 'Following the Seine, you reach the glass pyramid of the Louvre. Somewhere inside, behind the crowds, the Mona Lisa is smiling.',
        phrases: [
          { fr: "Un billet, s'il vous plaît.", en: 'One ticket, please.' },
          { fr: 'Où est la Joconde ?', en: 'Where is the Mona Lisa?' },
        ],
        quiz: {
          question: 'Which world-famous painting hangs in the Louvre?',
          options: ['Mona Lisa', 'The Scream', 'Starry Night'],
          correct: 'Mona Lisa',
          explanation: 'La Joconde (Mona Lisa) by Leonardo da Vinci is the Louvre\'s most visited work.',
        },
      },
      {
        id: 'notre-dame', name: 'Cathédrale Notre-Dame', icon: '⛪',
        coords: [48.8530, 2.3499], wikiTitle: 'Notre-Dame de Paris',
        narrative: 'You cross to the Île de la Cité, where Notre-Dame rises over the river — scarred by fire, wrapped in scaffolding, but standing proud.',
        phrases: [
          { fr: "C'est magnifique !", en: "It's magnificent!" },
          { fr: "C'est ouvert ?", en: 'Is it open?' },
        ],
        quiz: {
          question: 'In 2019 Notre-Dame survived a major…?',
          options: ['Fire', 'Flood', 'Earthquake'],
          correct: 'Fire',
          explanation: 'A 2019 fire destroyed the spire and roof; a vast restoration reopened it in 2024.',
        },
      },
      {
        id: 'le-marais', name: 'Le Marais', icon: '🏘️',
        coords: [48.8590, 2.3620], wikiTitle: 'Le Marais',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Place_des_Vosges_vue_a%C3%A9rienne.png',
        narrative: 'You wander into Le Marais — medieval lanes, hidden courtyards, trendy cafés and the smell of fresh falafel. Time for a break.',
        phrases: [
          { fr: 'Je voudrais un café.', en: 'I would like a coffee.' },
          { fr: "L'addition, s'il vous plaît !", en: 'The bill, please!' },
          { fr: 'Merci beaucoup !', en: 'Thank you very much!' },
        ],
        lessonId: 'paris-4',
        quiz: {
          question: 'Le Marais, one of Paris\'s oldest districts, surrounds which elegant square?',
          options: ['Place des Vosges', 'Place de la Concorde', 'Trocadéro'],
          correct: 'Place des Vosges',
          explanation: 'Place des Vosges (1612) is the oldest planned square in Paris, at the heart of Le Marais.',
        },
      },
      {
        id: 'luxembourg', name: 'Jardin du Luxembourg', icon: '🌳',
        coords: [48.8462, 2.3372], wikiTitle: 'Jardin du Luxembourg',
        narrative: 'You pause in the Jardin du Luxembourg, where Parisians read on green metal chairs and toy sailboats drift across the fountain.',
        phrases: [
          { fr: "Une glace, s'il vous plaît.", en: 'An ice cream, please.' },
          { fr: 'Quelle belle journée !', en: 'What a beautiful day!' },
        ],
        quiz: {
          question: 'The palace in the Jardin du Luxembourg today houses the French…?',
          options: ['Senate', 'National Library', 'President'],
          correct: 'Senate',
          explanation: 'The Palais du Luxembourg has been the seat of the French Senate since 1799.',
        },
      },
      {
        id: 'sacre-coeur', name: 'Basilique du Sacré-Cœur', icon: '🎨',
        coords: [48.8867, 2.3431], wikiTitle: 'Sacré-Cœur, Paris',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Sacr%C3%A9_Coeur_Fa%C3%A7ade_1.jpg',
        narrative: 'You climb the steep streets of Montmartre to the white domes of Sacré-Cœur, with all of Paris spread out at your feet.',
        phrases: [
          { fr: 'Où est la basilique ?', en: 'Where is the basilica?' },
          { fr: "C'est par où ?", en: 'Which way is it?' },
        ],
        quiz: {
          question: 'Sacré-Cœur sits on top of which artists\' hill?',
          options: ['Montmartre', 'Montparnasse', 'Belleville'],
          correct: 'Montmartre',
          explanation: 'Montmartre was home to Picasso, Dalí and Van Gogh — still full of painters today.',
        },
      },
      {
        id: 'champs-elysees', name: 'Champs-Élysées', icon: '🛍️',
        coords: [48.8698, 2.3079], wikiTitle: 'Champs-Élysées',
        narrative: 'You stroll down the Champs-Élysées, the city\'s grandest avenue — café terraces, flagship stores and lights as far as you can see.',
        phrases: [
          { fr: "C'est combien ?", en: 'How much is it?' },
          { fr: 'Je regarde, merci.', en: "I'm just looking, thanks." },
        ],
        quiz: {
          question: 'The Champs-Élysées hosts the finish of which annual event?',
          options: ['Tour de France', 'The Olympics', 'The World Cup'],
          correct: 'Tour de France',
          explanation: 'Every July the Tour de France ends with laps along the Champs-Élysées.',
        },
      },
      {
        id: 'arc-triomphe', name: 'Arc de Triomphe', icon: '🏛️',
        coords: [48.8738, 2.2950], wikiTitle: 'Arc de Triomphe',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Arc_de_Triomphe_de_l%C3%89toile%2C_Paris_7_June_2012.jpg',
        narrative: 'At the top of the avenue stands the Arc de Triomphe, twelve boulevards radiating from it like a star. You climb for one last panorama.',
        phrases: [
          { fr: "Un billet pour monter, s'il vous plaît.", en: 'A ticket to go up, please.' },
          { fr: "Où est l'ascenseur ?", en: 'Where is the lift?' },
        ],
        quiz: {
          question: 'Beneath the Arc de Triomphe lies the tomb of the…?',
          options: ['Unknown Soldier', 'Napoleon', 'Victor Hugo'],
          correct: 'Unknown Soldier',
          explanation: 'The Tomb of the Unknown Soldier (1920) burns an eternal flame, rekindled every evening.',
        },
      },
      {
        id: 'tour-eiffel', name: 'Tour Eiffel', icon: '🗼',
        coords: [48.8584, 2.2945], wikiTitle: 'Eiffel Tower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/MG-Paris-Champ_de_Mars.jpg',
        narrative: 'As night falls you arrive at the Tour Eiffel. On the hour it bursts into sparkling lights — the grand finale of your Paris journey.',
        phrases: [
          { fr: 'On monte au sommet ?', en: 'Shall we go up to the top?' },
          { fr: 'La vue est magnifique !', en: 'The view is magnificent!' },
          { fr: 'Quelle belle ville !', en: 'What a beautiful city!' },
        ],
        lessonId: 'paris-3',
        quiz: {
          question: 'The Eiffel Tower was built for the 1889…?',
          options: ["World's Fair", 'Olympics', 'Coronation'],
          correct: "World's Fair",
          explanation: 'Built for the 1889 Exposition Universelle, it was meant to be temporary — and never came down.',
        },
      },
    ],
  },

  {
    id: 'strasbourg',
    name: 'Strasbourg',
    tagline: "La capitale alsacienne, entre France et Allemagne",
    theme: 'Hôtel & dates',
    accentColor: '#c0392b',
    icon: '⛪',
    description:
      "Le TGV file vers l'est jusqu'à Strasbourg, capitale de l'Alsace, où les panneaux " +
      "s'affichent en français et en allemand. Le voyageur s'installe dans un hôtel près de " +
      "la Grande Île et doit gérer sa réservation en français.",
    photos: [
      { wikiTitle: 'Strasbourg Cathedral', alt: 'Cathédrale de Strasbourg', caption: 'La cathédrale Notre-Dame de Strasbourg' },
      { wikiTitle: 'Grande Île', alt: 'Grande Île de Strasbourg', caption: 'La Grande Île, cœur historique de la ville' },
      { wikiTitle: 'Strasbourg', alt: 'Strasbourg Petite France', caption: 'La Petite France et ses maisons à colombages' },
    ],
    vocabTopics: ['Hôtel', 'Nombres', 'Jours & mois'],
    grammarTopic: 'Articles définis et indéfinis',
    lessons: [
      {
        id: 'strasbourg-1',
        title: 'At the Hotel',
        description: 'Checking in: rooms, reservations, breakfast.',
        steps: [
          { type: 'vocab', word: "l'hôtel", article: 'le', english: 'hotel', example: "L'hôtel est près de la gare." },
          { type: 'vocab', word: 'la chambre', article: 'la', english: 'room', example: 'La chambre est au premier étage.' },
          { type: 'vocab', word: 'la réservation', article: 'la', english: 'reservation', example: "J'ai une réservation." },
          { type: 'vocab', word: 'la clé', article: 'la', english: 'key', example: 'Voici la clé de la chambre.' },
          { type: 'vocab', word: 'le petit-déjeuner', article: 'le', english: 'breakfast', example: 'Le petit-déjeuner est inclus ?' },
          { type: 'vocab', word: 'inclus', article: null, english: 'included', example: 'Le Wi-Fi est inclus.' },
          { type: 'grammar', title: 'Articles définis et indéfinis', explanation: 'Definite: le (m), la (f), l\' (before vowel), les (pl) = "the". Indefinite: un (m), une (f), des (pl) = "a / some". The article signals gender.', examples: ['le train, la chambre, les bagages', "Je voudrais une chambre.", 'Voici la chambre.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "chambre" (feminine)?', options: ['le', 'la', 'les', 'un'], correct: 'la' },
          { type: 'exercise', subtype: 'fill-blank', question: "J'ai ___ réservation au nom de Silva. (a / une)", correct: 'une' },
        ],
      },
      {
        id: 'strasbourg-2',
        title: 'Numbers and Dates',
        description: 'Counting to 100, days of the week, stating dates.',
        steps: [
          { type: 'vocab', word: "aujourd'hui", article: null, english: 'today', example: "Aujourd'hui, c'est lundi." },
          { type: 'vocab', word: 'demain', article: null, english: 'tomorrow', example: 'Je pars demain.' },
          { type: 'vocab', word: 'la semaine', article: 'la', english: 'week', example: 'La semaine prochaine.' },
          { type: 'vocab', word: 'lundi', article: null, english: 'Monday', example: "J'arrive lundi." },
          { type: 'vocab', word: 'le mois', article: 'le', english: 'month', example: 'Le mois de mars.' },
          { type: 'vocab', word: "l'année", article: 'la', english: 'year', example: 'Bonne année !' },
          { type: 'grammar', title: 'Les nombres 70–90', explanation: 'French counting gets tricky: 70 = soixante-dix ("sixty-ten"), 80 = quatre-vingts ("four-twenties"), 90 = quatre-vingt-dix ("four-twenty-ten").', examples: ['soixante-dix (70)', 'quatre-vingts (80)', 'quatre-vingt-dix (90)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "quatre-vingts"?', options: ['70', '80', '90', '60'], correct: '80' },
          { type: 'exercise', subtype: 'fill-blank', question: "Nous sommes ___ : c'est lundi. (today)", correct: "aujourd'hui" },
        ],
      },
    ],
    descriptionEn:
      "The TGV speeds east to Strasbourg, capital of Alsace, where signs appear in both French " +
      "and German. The traveller settles into a hotel near the Grande Île and has to handle the " +
      "booking in French.",
    places: [
      {
        id: 'str-gare', name: 'Gare de Strasbourg', icon: '🚆',
        coords: [48.5851, 7.7341], wikiTitle: 'Gare de Strasbourg',
        narrative: 'The TGV glides into Strasbourg under the station\'s great glass dome. Alsace begins here — half French, half German.',
        phrases: [
          { fr: 'Le train pour Strasbourg ?', en: 'The train to Strasbourg?' },
          { fr: 'Quel quai, s\'il vous plaît ?', en: 'Which platform, please?' },
        ],
        quiz: { question: 'Alsace sits on the border with which country?', options: ['Germany', 'Spain', 'Italy'], correct: 'Germany', explanation: 'Alsace borders Germany — which is why Strasbourg is bilingual French/German.' },
      },
      {
        id: 'str-grande-ile', name: 'Hôtel sur la Grande Île', icon: '🏨',
        coords: [48.5817, 7.7458], wikiTitle: 'Grande Île, Strasbourg',
        narrative: 'You check into a small hotel on the Grande Île, the river-wrapped historic heart of the city.',
        phrases: [
          { fr: "Bonjour, j'ai une réservation.", en: 'Hello, I have a reservation.' },
          { fr: 'La clé, s\'il vous plaît.', en: 'The key, please.' },
        ],
        lessonId: 'strasbourg-1',
        quiz: { question: 'The Grande Île historic centre is listed as a…?', options: ['UNESCO World Heritage Site', 'National park', 'Ski resort'], correct: 'UNESCO World Heritage Site', explanation: 'In 1988 the Grande Île became the first entire city centre listed by UNESCO.' },
      },
      {
        id: 'str-cathedrale', name: 'Cathédrale Notre-Dame', icon: '⛪',
        coords: [48.5819, 7.7510], wikiTitle: 'Strasbourg Cathedral',
        narrative: 'Inside the cathedral, the famous astronomical clock chimes — a perfect moment to master numbers and dates.',
        phrases: [
          { fr: 'Quelle heure est-il ?', en: 'What time is it?' },
          { fr: "C'est ouvert aujourd'hui ?", en: 'Is it open today?' },
        ],
        lessonId: 'strasbourg-2',
        quiz: { question: 'Strasbourg Cathedral was the world\'s tallest building for over 200 years until the…?', options: ['19th century', '15th century', '21st century'], correct: '19th century', explanation: 'At 142 m it held the record from 1647 to 1874.' },
      },
      {
        id: 'str-petite-france', name: 'La Petite France', icon: '🏘️',
        coords: [48.5800, 7.7400], wikiTitle: 'Petite France, Strasbourg',
        narrative: 'You wander Petite France: half-timbered houses leaning over canals, flowers on every windowsill.',
        phrases: [
          { fr: 'C\'est par ici ?', en: 'Is it this way?' },
          { fr: 'Quel joli quartier !', en: 'What a pretty district!' },
        ],
        quiz: { question: 'Petite France was historically the district of the…?', options: ['Tanners', 'Bankers', 'Sailors'], correct: 'Tanners', explanation: 'Tanners, millers and fishermen worked here — the canals powered their trades.' },
      },
      {
        id: 'str-place-kleber', name: 'Place Kléber', icon: '🎄',
        coords: [48.5833, 7.7458], wikiTitle: 'Place Kléber',
        narrative: 'You finish on Place Kléber, the city\'s grand main square — and in winter, the heart of its legendary Christmas market.',
        phrases: [
          { fr: 'Un vin chaud, s\'il vous plaît.', en: 'A mulled wine, please.' },
          { fr: 'Joyeux Noël !', en: 'Merry Christmas!' },
        ],
        quiz: { question: 'Strasbourg hosts one of Europe\'s oldest…?', options: ['Christmas markets', 'Film festivals', 'Marathons'], correct: 'Christmas markets', explanation: 'The Christkindelsmärik dates back to 1570 — Strasbourg calls itself the "Capital of Christmas".' },
      },
    ],
  },

  {
    id: 'lyon',
    name: 'Lyon',
    tagline: 'La capitale de la gastronomie',
    theme: 'Restaurant & café',
    accentColor: '#d4820a',
    icon: '🍽️',
    description:
      "Direction le sud avec le TGV jusqu'à Lyon, capitale gastronomique de la France. " +
      "Le voyageur découvre les bouchons, ces restaurants traditionnels lyonnais, et doit " +
      "commander son premier vrai repas français tout seul.",
    photos: [
      { wikiTitle: 'Vieux Lyon', alt: 'Vieux Lyon', caption: 'Le Vieux Lyon, quartier Renaissance' },
      { wikiTitle: 'Lyon', alt: 'Lyon panorama', caption: 'Lyon, au confluent du Rhône et de la Saône' },
      { wikiTitle: 'Quenelle', alt: 'Quenelles lyonnaises', caption: 'La quenelle, spécialité lyonnaise' },
    ],
    vocabTopics: ['Restaurant', 'Commander', 'Boissons'],
    grammarTopic: 'Verbes en -er au présent',
    lessons: [
      {
        id: 'lyon-1',
        title: 'At the Bouchon',
        description: 'Ordering a meal: starters, mains, the bill.',
        steps: [
          { type: 'vocab', word: 'le restaurant', article: 'le', english: 'restaurant', example: 'Le restaurant est complet.' },
          { type: 'vocab', word: 'la carte', article: 'la', english: 'menu', example: 'La carte, s\'il vous plaît ?' },
          { type: 'vocab', word: "l'entrée", article: 'la', english: 'starter', example: "Je prends une entrée." },
          { type: 'vocab', word: 'le plat principal', article: 'le', english: 'main course', example: 'Le plat principal est délicieux.' },
          { type: 'vocab', word: "l'addition", article: 'la', english: 'the bill', example: "L'addition, s'il vous plaît !" },
          { type: 'vocab', word: 'manger', article: null, english: 'to eat', example: 'Je mange une quenelle.' },
          { type: 'grammar', title: 'Verbes en -er au présent', explanation: 'Most French verbs end in -er. Remove -er and add: -e, -es, -e, -ons, -ez, -ent. Only -ons and -ez are audible.', examples: ['je mange, tu manges, il mange', 'nous mangeons, vous mangez', 'ils mangent'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "le plat principal"?', options: ['starter', 'main course', 'dessert', 'the bill'], correct: 'main course' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Nous ___ ensemble. (manger: we eat)', correct: 'mangeons' },
        ],
      },
      {
        id: 'lyon-2',
        title: 'Drinks and Café Life',
        description: 'Ordering coffee, water, wine; paying.',
        steps: [
          { type: 'vocab', word: 'le café', article: 'le', english: 'coffee / café', example: 'Un café, s\'il vous plaît.' },
          { type: 'vocab', word: "l'eau", article: 'la', english: 'water', example: "Une carafe d'eau, s'il vous plaît." },
          { type: 'vocab', word: 'le thé', article: 'le', english: 'tea', example: 'Je voudrais un thé.' },
          { type: 'vocab', word: 'le vin', article: 'le', english: 'wine', example: 'Un verre de vin rouge.' },
          { type: 'vocab', word: 'la terrasse', article: 'la', english: 'terrace', example: 'On s\'assoit en terrasse ?' },
          { type: 'vocab', word: 'aimer', article: null, english: 'to like / love', example: "J'aime le café." },
          { type: 'grammar', title: 'aimer + infinitif', explanation: 'aimer means "to like". Followed by an infinitive, it means "to like doing something".', examples: ["J'aime manger au restaurant.", 'Elle aime boire du café.', 'Nous aimons voyager.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "water"?', options: ['le vin', "l'eau", 'le thé', 'le café'], correct: "l'eau" },
          { type: 'exercise', subtype: 'fill-blank', question: "J'___ voyager. (aimer: I like)", correct: 'aime' },
        ],
      },
    ],
    descriptionEn:
      "Heading south by TGV to Lyon, France's gastronomic capital. The traveller discovers the " +
      "bouchons — traditional Lyonnais restaurants — and has to order a first real French meal alone.",
    places: [
      {
        id: 'lyon-bellecour', name: 'Place Bellecour', icon: '🐎',
        coords: [45.7578, 4.8324], wikiTitle: 'Place Bellecour',
        narrative: 'You arrive on Place Bellecour, a vast open square with a statue of Louis XIV on horseback at its centre.',
        phrases: [
          { fr: 'Où est la statue ?', en: 'Where is the statue?' },
          { fr: 'On se retrouve ici ?', en: 'Shall we meet here?' },
        ],
        quiz: { question: 'Place Bellecour is one of Europe\'s largest…?', options: ['Pedestrian squares', 'Train stations', 'Vineyards'], correct: 'Pedestrian squares', explanation: 'At ~62,000 m² it is among the biggest pedestrian squares in Europe.' },
      },
      {
        id: 'lyon-vieux', name: 'Vieux Lyon', icon: '🏘️',
        coords: [45.7620, 4.8275], wikiTitle: 'Vieux Lyon',
        narrative: 'You lose yourself in Vieux Lyon, a Renaissance maze threaded with secret covered passageways.',
        phrases: [
          { fr: 'Où est la traboule ?', en: 'Where is the traboule?' },
          { fr: 'C\'est magnifique !', en: "It's magnificent!" },
        ],
        quiz: { question: 'Vieux Lyon is famous for hidden passageways called…?', options: ['Traboules', 'Bouchons', 'Quenelles'], correct: 'Traboules', explanation: 'Traboules are covered passages cutting through buildings — once used by silk workers.' },
      },
      {
        id: 'lyon-bouchon', name: 'Un bouchon lyonnais', icon: '🍽️',
        coords: [45.7640, 4.8270], wikiTitle: 'Lyonnaise cuisine',
        narrative: 'You sit down in a bouchon, a cosy traditional restaurant, to order your first proper Lyonnais meal.',
        phrases: [
          { fr: 'Une table pour deux.', en: 'A table for two.' },
          { fr: 'La carte, s\'il vous plaît.', en: 'The menu, please.' },
        ],
        lessonId: 'lyon-1',
        quiz: { question: 'In Lyon, a "bouchon" is a traditional…?', options: ['Restaurant', 'Wine', 'Hat'], correct: 'Restaurant', explanation: 'A bouchon is a small Lyonnais eatery serving hearty local dishes.' },
      },
      {
        id: 'lyon-croix-rousse', name: 'Café à la Croix-Rousse', icon: '☕',
        coords: [45.7740, 4.8320], wikiTitle: 'Croix-Rousse',
        narrative: 'On the Croix-Rousse hill you take a coffee on a terrace, in the old quarter of the silk weavers.',
        phrases: [
          { fr: 'Un café en terrasse.', en: 'A coffee on the terrace.' },
          { fr: "J'aime cette ville.", en: 'I love this city.' },
        ],
        lessonId: 'lyon-2',
        quiz: { question: 'The Croix-Rousse hill was historically home to silk…?', options: ['Weavers', 'Miners', 'Bakers'], correct: 'Weavers', explanation: 'The "canuts" (silk weavers) filled this hill with their looms in the 1800s.' },
      },
      {
        id: 'lyon-fourviere', name: 'Basilique de Fourvière', icon: '⛪',
        coords: [45.7622, 4.8222], wikiTitle: 'Basilica of Notre-Dame de Fourvière',
        narrative: 'You climb to the white basilica of Fourvière, watching all of Lyon unfold below you.',
        phrases: [
          { fr: 'Quelle belle vue !', en: 'What a beautiful view!' },
          { fr: 'On monte à pied ?', en: 'Shall we walk up?' },
        ],
        quiz: { question: 'Fourvière hill is nicknamed the hill that…?', options: ['Prays', 'Sleeps', 'Sings'], correct: 'Prays', explanation: 'Fourvière "qui prie" (that prays) vs the Croix-Rousse "qui travaille" (that works).' },
      },
      {
        id: 'lyon-tete-or', name: "Parc de la Tête d'Or", icon: '🌳',
        coords: [45.7772, 4.8550], wikiTitle: "Parc de la Tête d'Or",
        narrative: 'You end with a stroll in the Parc de la Tête d\'Or, by the lake where the two rivers of Lyon nearly meet.',
        phrases: [
          { fr: 'On se promène ?', en: 'Shall we take a walk?' },
          { fr: 'Il fait beau aujourd\'hui.', en: 'The weather is nice today.' },
        ],
        quiz: { question: 'Lyon lies at the meeting of the Rhône and the…?', options: ['Saône', 'Seine', 'Loire'], correct: 'Saône', explanation: 'Lyon sits on the confluence of the Rhône and the Saône.' },
      },
    ],
  },

  {
    id: 'nice',
    name: 'Nice',
    tagline: "La perle de la Côte d'Azur",
    theme: 'Météo & couleurs',
    accentColor: '#e8a33d',
    icon: '☀️',
    description:
      "Cap sur la Côte d'Azur. Nice est vibrante, colorée et ensoleillée. Le voyageur passe " +
      "une journée sur la Promenade des Anglais et visite le marché aux fleurs du Cours Saleya. " +
      "Le défi : décrire le monde autour de soi.",
    photos: [
      { wikiTitle: 'Promenade des Anglais', alt: 'Promenade des Anglais', caption: 'La Promenade des Anglais au bord de la mer' },
      { wikiTitle: 'Nice', alt: 'Nice baie des Anges', caption: "Nice et la baie des Anges" },
      { wikiTitle: 'Cours Saleya', alt: 'Cours Saleya', caption: 'Le marché du Cours Saleya' },
    ],
    vocabTopics: ['Météo', 'Couleurs', 'Descriptions'],
    grammarTopic: 'Accord des adjectifs',
    lessons: [
      {
        id: 'nice-1',
        title: 'Weather and Colors',
        description: 'Talking about the weather; basic colors.',
        steps: [
          { type: 'vocab', word: 'le soleil', article: 'le', english: 'sun', example: 'Il y a du soleil.' },
          { type: 'vocab', word: 'il fait beau', article: null, english: 'the weather is nice', example: "Il fait beau aujourd'hui !" },
          { type: 'vocab', word: 'il pleut', article: null, english: 'it is raining', example: 'Il pleut ce matin.' },
          { type: 'vocab', word: 'la plage', article: 'la', english: 'beach', example: "J'adore la plage !" },
          { type: 'vocab', word: 'la mer', article: 'la', english: 'sea', example: 'La mer est bleue.' },
          { type: 'vocab', word: 'bleu', article: null, english: 'blue', example: 'Le ciel est bleu.' },
          { type: 'grammar', title: "Accord des adjectifs (genre)", explanation: 'Adjectives agree in gender. Usually add -e for feminine: petit → petite. Adjectives already ending in -e (rouge) do not change.', examples: ['un ciel bleu / une mer bleue', 'un petit café / une petite plage', 'un sac rouge / une voiture rouge'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "it is raining"?', options: ['il fait beau', 'il pleut', 'le soleil', 'la mer'], correct: 'il pleut' },
          { type: 'exercise', subtype: 'fill-blank', question: 'La mer est ___ . (blue, feminine)', correct: 'bleue' },
        ],
      },
      {
        id: 'nice-2',
        title: 'Describing Things',
        description: 'Adjectives for size, beauty, price; placement.',
        steps: [
          { type: 'vocab', word: 'grand(e)', article: null, english: 'big / tall', example: 'La chambre est grande.' },
          { type: 'vocab', word: 'petit(e)', article: null, english: 'small', example: 'Un petit café.' },
          { type: 'vocab', word: 'beau / belle', article: null, english: 'beautiful', example: 'Nice est une belle ville.' },
          { type: 'vocab', word: 'cher / chère', article: null, english: 'expensive', example: 'Ce restaurant est cher.' },
          { type: 'vocab', word: 'magnifique', article: null, english: 'magnificent', example: "C'est magnifique !" },
          { type: 'vocab', word: 'délicieux / délicieuse', article: null, english: 'delicious', example: 'Le repas est délicieux.' },
          { type: 'grammar', title: "Place de l'adjectif (BAGS)", explanation: 'Most adjectives go AFTER the noun. But BAGS adjectives (Beauty, Age, Goodness, Size) go BEFORE: beau, vieux, bon, grand, petit.', examples: ['une mer bleue (after)', 'une belle plage (before)', 'un petit café (before)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Where does "belle" go?', options: ['after the noun', 'before the noun', 'either way', 'it never changes'], correct: 'before the noun' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Nice est une ___ ville. (beautiful, feminine)', correct: 'belle' },
        ],
      },
    ],
    descriptionEn:
      "On to the Côte d'Azur. Nice is vibrant, colourful and sunny. The traveller spends a day on " +
      "the Promenade des Anglais and visits the flower market of Cours Saleya. The challenge: " +
      "describing the world around you.",
    places: [
      {
        id: 'nice-promenade', name: 'Promenade des Anglais', icon: '🌊',
        coords: [43.6950, 7.2655], wikiTitle: 'Promenade des Anglais',
        narrative: 'You arrive on the Promenade des Anglais, the long seafront walk curving along the bright blue bay.',
        phrases: [
          { fr: 'Il fait beau !', en: 'The weather is nice!' },
          { fr: 'La mer est bleue.', en: 'The sea is blue.' },
        ],
        lessonId: 'nice-1',
        quiz: { question: 'The Promenade des Anglais runs along the Baie des…?', options: ['Anges', 'Rois', 'Fleurs'], correct: 'Anges', explanation: 'It follows the Baie des Anges — the "Bay of Angels".' },
      },
      {
        id: 'nice-cours-saleya', name: 'Cours Saleya', icon: '💐',
        coords: [43.6953, 7.2758], image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Nizza.jpg',
        narrative: 'In the Cours Saleya the morning market overflows with flowers, fruit and colour — perfect for practising descriptions.',
        phrases: [
          { fr: 'Ces fleurs sont belles.', en: 'These flowers are beautiful.' },
          { fr: 'C\'est combien le bouquet ?', en: 'How much is the bunch?' },
        ],
        lessonId: 'nice-2',
        quiz: { question: 'Cours Saleya is famous for its market of…?', options: ['Flowers', 'Cars', 'Books'], correct: 'Flowers', explanation: 'Its flower market is a Nice institution, running most mornings.' },
      },
      {
        id: 'nice-vieux', name: 'Vieux Nice', icon: '🏘️',
        coords: [43.6961, 7.2756], image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Vue_du_Vieux-Nice.jpg',
        narrative: 'You dive into the old town\'s warm-coloured alleys, stopping for a scoop of gelato in the shade.',
        phrases: [
          { fr: 'Une glace, s\'il vous plaît.', en: 'An ice cream, please.' },
          { fr: 'C\'est par où ?', en: 'Which way is it?' },
        ],
        quiz: { question: 'Until 1860, Nice belonged to the Kingdom of…?', options: ['Sardinia', 'Spain', 'England'], correct: 'Sardinia', explanation: 'Nice was part of the Kingdom of Sardinia (House of Savoy) until it joined France in 1860.' },
      },
      {
        id: 'nice-chateau', name: 'Colline du Château', icon: '🏰',
        coords: [43.6947, 7.2806], image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/CollineDuChateau_NiceFrance2022.png',
        narrative: 'You climb Castle Hill for the postcard view: terracotta roofs, the bay, and the sea stretching out forever.',
        phrases: [
          { fr: 'On monte en haut ?', en: 'Shall we go up to the top?' },
          { fr: 'Quelle vue magnifique !', en: 'What a magnificent view!' },
        ],
        quiz: { question: 'There is no castle left on Castle Hill — it was demolished on the orders of…?', options: ['Louis XIV', 'Napoleon', 'Julius Caesar'], correct: 'Louis XIV', explanation: 'Louis XIV had the fortress razed in 1706; only the panoramic park remains.' },
      },
      {
        id: 'nice-massena', name: 'Place Masséna', icon: '🟥',
        coords: [43.6976, 7.2713], wikiTitle: 'Place Masséna',
        narrative: 'You end the day on Place Masséna, its red façades glowing as the evening lights come on.',
        phrases: [
          { fr: 'On se promène ce soir ?', en: 'Shall we walk tonight?' },
          { fr: "J'adore Nice !", en: 'I love Nice!' },
        ],
        quiz: { question: 'Place Masséna\'s pavement has a checkerboard pattern in red and…?', options: ['White', 'Blue', 'Green'], correct: 'White', explanation: 'Its bold red-and-white chequered paving is the city\'s signature look.' },
      },
    ],
  },

  {
    id: 'marseille',
    name: 'Marseille',
    tagline: 'Le plus vieux port de France',
    theme: 'Marché & prix',
    accentColor: '#1a6b8a',
    icon: '⚓',
    description:
      "Un court trajet en train jusqu'à Marseille. Le voyageur visite le Vieux-Port, achète " +
      "du poisson directement sur les quais et arpente le marché de Noailles. Premier vrai " +
      "défi de shopping en français.",
    photos: [
      { wikiTitle: 'Old Port of Marseille', alt: 'Vieux-Port de Marseille', caption: 'Le Vieux-Port de Marseille' },
      { wikiTitle: 'Notre-Dame de la Garde', alt: 'Notre-Dame de la Garde', caption: 'Notre-Dame de la Garde domine la ville' },
      { wikiTitle: 'Bouillabaisse', alt: 'Bouillabaisse', caption: 'La bouillabaisse, spécialité marseillaise' },
    ],
    vocabTopics: ['Marché', 'Quantités', 'Prix'],
    grammarTopic: 'Articles partitifs + négation',
    lessons: [
      {
        id: 'marseille-1',
        title: 'At the Market',
        description: 'Buying food: quantities, prices, asking for things.',
        steps: [
          { type: 'vocab', word: 'le marché', article: 'le', english: 'market', example: 'Je vais au marché.' },
          { type: 'vocab', word: 'le poisson', article: 'le', english: 'fish', example: 'Le poisson est frais.' },
          { type: 'vocab', word: 'les fruits', article: 'les', english: 'fruit', example: "J'achète des fruits." },
          { type: 'vocab', word: 'la baguette', article: 'la', english: 'baguette', example: 'Une baguette, s\'il vous plaît.' },
          { type: 'vocab', word: 'le kilo', article: 'le', english: 'kilogram', example: 'Un kilo de tomates.' },
          { type: 'vocab', word: 'combien', article: null, english: 'how much', example: "C'est combien ?" },
          { type: 'grammar', title: 'Articles partitifs (du / de la / des)', explanation: 'Use partitives for "some" of something: du (m), de la (f), de l\' (before vowel), des (pl). After negation they all become "de".', examples: ['Je mange du pain.', "Je bois de l'eau.", 'Il achète des fruits.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which partitive goes with "pain" (m)?', options: ['de la', 'du', 'des', "de l'"], correct: 'du' },
          { type: 'exercise', subtype: 'fill-blank', question: "Je voudrais un ___ de tomates. (kilogram)", correct: 'kilo' },
        ],
      },
      {
        id: 'marseille-2',
        title: 'Prices and Negation',
        description: 'Money, paying, and saying "not / no more".',
        steps: [
          { type: 'vocab', word: "l'euro", article: 'le', english: 'euro', example: "Ça coûte cinq euros." },
          { type: 'vocab', word: 'la monnaie', article: 'la', english: 'change', example: "Je n'ai pas de monnaie." },
          { type: 'vocab', word: 'la carte bancaire', article: 'la', english: 'bank card', example: 'On peut payer par carte ?' },
          { type: 'vocab', word: 'acheter', article: null, english: 'to buy', example: "J'achète du fromage." },
          { type: 'vocab', word: 'ne…pas', article: null, english: 'not', example: 'Je ne parle pas français.' },
          { type: 'vocab', word: 'ne…plus', article: null, english: 'no more', example: "Il n'y a plus de pain." },
          { type: 'grammar', title: 'La négation (ne…pas)', explanation: 'Negation wraps the verb: ne + verb + pas. ne becomes n\' before a vowel. After ne…pas, du/de la/un/une/des become "de".', examples: ['Je ne parle pas français.', "Il n'a pas de billet.", 'Elle ne mange pas de viande.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "no more"?', options: ['ne…pas', 'ne…plus', 'ne…jamais', 'ne…rien'], correct: 'ne…plus' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ne parle ___ français. (not)', correct: 'pas' },
        ],
      },
    ],
    descriptionEn:
      "A short train ride to Marseille. The traveller visits the Old Port, buys fish straight off " +
      "the quays and wanders the Noailles market. A first real shopping challenge in French.",
    places: [
      {
        id: 'mrs-vieux-port', name: 'Le Vieux-Port', icon: '⚓',
        coords: [43.2951, 5.3740], wikiTitle: 'Old Port of Marseille',
        narrative: 'You reach the Vieux-Port, where fishermen still sell the morning\'s catch straight from their boats.',
        phrases: [
          { fr: 'Le poisson est frais ?', en: 'Is the fish fresh?' },
          { fr: 'Un kilo, s\'il vous plaît.', en: 'A kilo, please.' },
        ],
        lessonId: 'marseille-1',
        quiz: { question: 'Marseille is France\'s oldest city, founded by the…?', options: ['Greeks', 'Vikings', 'Egyptians'], correct: 'Greeks', explanation: 'Greek sailors from Phocaea founded Massalia around 600 BC.' },
      },
      {
        id: 'mrs-noailles', name: 'Marché de Noailles', icon: '🛒',
        coords: [43.2964, 5.3793], image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Marseille_Canebi%C3%A8re_and_Palais_de_la_Bourse.jpg',
        narrative: 'Just off the Canebière, the Noailles market is a riot of spices and accents — time to talk prices.',
        phrases: [
          { fr: 'C\'est combien le kilo ?', en: 'How much per kilo?' },
          { fr: 'Je voudrais des épices.', en: 'I would like some spices.' },
        ],
        lessonId: 'marseille-2',
        quiz: { question: 'The Noailles market is nicknamed the "belly of Marseille" and is famous for its…?', options: ['Spices', 'Diamonds', 'Books'], correct: 'Spices', explanation: 'Its stalls of spices and produce reflect the city\'s Mediterranean melting pot.' },
      },
      {
        id: 'mrs-panier', name: 'Le Panier', icon: '🏘️',
        coords: [43.2980, 5.3660], image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Rue_Panier_Marseille.jpg',
        narrative: 'You climb into Le Panier, the steep old quarter of painted lanes, street art and washing lines.',
        phrases: [
          { fr: 'C\'est joli ici !', en: "It's pretty here!" },
          { fr: 'On se perd un peu.', en: "We're getting a bit lost." },
        ],
        quiz: { question: 'Le Panier is Marseille\'s…?', options: ['Oldest district', 'Newest mall', 'Main airport'], correct: 'Oldest district', explanation: 'Le Panier sits where the Greeks first settled — the city\'s oldest neighbourhood.' },
      },
      {
        id: 'mrs-garde', name: 'Notre-Dame de la Garde', icon: '⛪',
        coords: [43.2840, 5.3712], wikiTitle: 'Notre-Dame de la Garde',
        narrative: 'You climb to Notre-Dame de la Garde, the golden Madonna watching over the whole city and sea.',
        phrases: [
          { fr: 'On monte à la basilique ?', en: 'Shall we go up to the basilica?' },
          { fr: 'Quelle belle vue sur la mer !', en: 'What a beautiful sea view!' },
        ],
        quiz: { question: 'Locals affectionately call Notre-Dame de la Garde "la Bonne…"?', options: ['Mère', 'Route', 'Étoile'], correct: 'Mère', explanation: '"La Bonne Mère" (the Good Mother) is the city\'s beloved protector.' },
      },
      {
        id: 'mrs-mucem', name: 'MuCEM', icon: '🏛️',
        coords: [43.2966, 5.3614], wikiTitle: 'MuCEM',
        narrative: 'You finish at the MuCEM, its lace-like concrete cube linked to the old fort by a slender footbridge over the sea.',
        phrases: [
          { fr: 'Un billet pour le musée.', en: 'A ticket for the museum.' },
          { fr: 'C\'est ouvert le lundi ?', en: 'Is it open on Monday?' },
        ],
        quiz: { question: 'The MuCEM, opened in 2013, explores the cultures of…?', options: ['The Mediterranean', 'The Arctic', 'The Pacific'], correct: 'The Mediterranean', explanation: 'It is the Museum of European and Mediterranean Civilisations.' },
      },
    ],
  },

  {
    id: 'toulouse',
    name: 'Toulouse',
    tagline: 'La Ville Rose',
    theme: 'Transports & directions',
    accentColor: '#e91e8c',
    icon: '🚀',
    description:
      "Direction l'ouest jusqu'à Toulouse, « la Ville Rose » bâtie en brique de terre cuite, " +
      "berceau d'Airbus et grande ville étudiante. Le voyageur doit prendre le métro et " +
      "demander son chemin aux habitants.",
    photos: [
      { wikiTitle: 'Capitole de Toulouse', alt: 'Capitole de Toulouse', caption: 'Le Capitole, hôtel de ville de Toulouse' },
      { wikiTitle: 'Toulouse', alt: 'Toulouse la ville rose', caption: 'Toulouse et ses briques roses' },
      { wikiTitle: 'Garonne', alt: 'La Garonne à Toulouse', caption: 'La Garonne traverse la ville' },
    ],
    vocabTopics: ['Métro', 'Lieux', 'Demander son chemin'],
    grammarTopic: "Poser une question",
    lessons: [
      {
        id: 'toulouse-1',
        title: 'Taking the Metro',
        description: 'Public transport: lines, stops, tickets.',
        steps: [
          { type: 'vocab', word: 'le métro', article: 'le', english: 'metro', example: 'Je prends le métro.' },
          { type: 'vocab', word: 'le bus', article: 'le', english: 'bus', example: 'Le bus arrive.' },
          { type: 'vocab', word: 'la station', article: 'la', english: 'station', example: 'La station est là.' },
          { type: 'vocab', word: 'la ligne', article: 'la', english: 'line', example: "C'est quelle ligne ?" },
          { type: 'vocab', word: 'le plan', article: 'le', english: 'map', example: 'Voici le plan du métro.' },
          { type: 'vocab', word: 'prochain', article: null, english: 'next', example: 'Le prochain bus.' },
          { type: 'grammar', title: 'Poser une question (3 façons)', explanation: 'Three ways to ask yes/no questions: 1) intonation ("Tu parles français ?"), 2) est-ce que ("Est-ce que tu parles français ?"), 3) inversion ("Parlez-vous français ?").', examples: ['Tu parles français ? (intonation)', 'Est-ce qu\'il y a un bus ?', 'Parlez-vous français ? (inversion)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which is the neutral, everyday question form?', options: ['inversion', 'est-ce que', 'passé composé', 'partitif'], correct: 'est-ce que' },
          { type: 'exercise', subtype: 'fill-blank', question: '___-ce qu\'il y a un métro ? (question marker)', correct: 'Est' },
        ],
      },
      {
        id: 'toulouse-2',
        title: 'Asking for Directions',
        description: 'Finding places and understanding directions.',
        steps: [
          { type: 'vocab', word: 'la gare', article: 'la', english: 'train station', example: 'Où est la gare ?' },
          { type: 'vocab', word: 'la pharmacie', article: 'la', english: 'pharmacy', example: 'La pharmacie est à droite.' },
          { type: 'vocab', word: 'à gauche', article: null, english: 'to the left', example: 'Tournez à gauche.' },
          { type: 'vocab', word: 'à droite', article: null, english: 'to the right', example: "C'est à droite." },
          { type: 'vocab', word: 'tout droit', article: null, english: 'straight ahead', example: 'Allez tout droit.' },
          { type: 'vocab', word: 'à côté de', article: null, english: 'next to', example: "C'est à côté de la gare." },
          { type: 'grammar', title: 'Mots interrogatifs', explanation: 'Question words: où (where), quand (when), comment (how), pourquoi (why), combien (how much), qui (who), que/quoi (what), quel(le) (which).', examples: ['Où est la gare ?', 'Quand part le train ?', "C'est combien ?"] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "où" mean?', options: ['when', 'where', 'how', 'why'], correct: 'where' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Tournez à ___ au carrefour. (left)', correct: 'gauche' },
        ],
      },
    ],
    descriptionEn:
      "West to Toulouse, 'la Ville Rose', built of terracotta brick, home of Airbus and a great " +
      "student city. The traveller has to take the metro and ask locals for directions.",
    places: [
      {
        id: 'tls-metro', name: 'Le métro toulousain', icon: '🚇',
        coords: [43.6113, 1.4536], wikiTitle: 'Toulouse Metro',
        narrative: 'You arrive at Matabiau and tackle the metro — small, driverless trains zipping under the pink city.',
        phrases: [
          { fr: 'Un ticket, s\'il vous plaît.', en: 'One ticket, please.' },
          { fr: "C'est quelle ligne ?", en: 'Which line is it?' },
        ],
        lessonId: 'toulouse-1',
        quiz: { question: 'Toulouse\'s metro is fully…?', options: ['Driverless', 'Steam-powered', 'Double-decker'], correct: 'Driverless', explanation: 'Its automatic, driverless trains have run since 1993.' },
      },
      {
        id: 'tls-capitole', name: 'Place du Capitole', icon: '🏛️',
        coords: [43.6043, 1.4437], wikiTitle: 'Capitole de Toulouse',
        narrative: 'You emerge on the vast Place du Capitole and ask a passer-by the way to the next sight.',
        phrases: [
          { fr: "Où est l'office de tourisme ?", en: 'Where is the tourist office?' },
          { fr: "C'est loin d'ici ?", en: 'Is it far from here?' },
        ],
        lessonId: 'toulouse-2',
        quiz: { question: 'The Capitole is Toulouse\'s…?', options: ['City hall', 'Cathedral', 'Train station'], correct: 'City hall', explanation: 'The Capitole has been the seat of city government since the Middle Ages.' },
      },
      {
        id: 'tls-saint-sernin', name: 'Basilique Saint-Sernin', icon: '⛪',
        coords: [43.6080, 1.4419], wikiTitle: 'Basilica of Saint-Sernin, Toulouse',
        narrative: 'You follow the directions to Saint-Sernin, its rose-brick bell tower rising in tiers above the rooftops.',
        phrases: [
          { fr: "C'est par où, la basilique ?", en: 'Which way to the basilica?' },
          { fr: 'Tournez à droite.', en: 'Turn right.' },
        ],
        quiz: { question: 'Saint-Sernin is the largest remaining… church in Europe?', options: ['Romanesque', 'Gothic', 'Baroque'], correct: 'Romanesque', explanation: 'It is the biggest surviving Romanesque church on the continent, a pilgrimage landmark.' },
      },
      {
        id: 'tls-cite-espace', name: "Cité de l'espace", icon: '🚀',
        coords: [43.5860, 1.4900], wikiTitle: "Cité de l'espace",
        narrative: 'You head out to the Cité de l\'espace, where a full-size rocket reminds you this is Europe\'s space city.',
        phrases: [
          { fr: 'Deux entrées, s\'il vous plaît.', en: 'Two admissions, please.' },
          { fr: "C'est génial !", en: "It's awesome!" },
        ],
        quiz: { question: 'Toulouse is the European capital of…?', options: ['Aerospace', 'Wine', 'Cinema'], correct: 'Aerospace', explanation: 'Home to Airbus and the space industry, it\'s Europe\'s aerospace hub.' },
      },
      {
        id: 'tls-pont-neuf', name: 'Pont Neuf & la Garonne', icon: '🌉',
        coords: [43.5990, 1.4380], wikiTitle: 'Pont Neuf, Toulouse',
        narrative: 'You end on the Pont Neuf at dusk, the brick glowing pink-orange over the river Garonne.',
        phrases: [
          { fr: 'On marche le long du fleuve ?', en: 'Shall we walk along the river?' },
          { fr: 'Quelle belle ville rose !', en: 'What a beautiful pink city!' },
        ],
        quiz: { question: 'Toulouse is nicknamed "la Ville Rose" because of its…?', options: ['Pink brick', 'Blue roofs', 'White marble'], correct: 'Pink brick', explanation: 'Its terracotta brick turns rosy in the light — hence "the Pink City".' },
      },
    ],
  },

  {
    id: 'bordeaux',
    name: 'Bordeaux',
    tagline: 'La capitale mondiale du vin',
    theme: 'Vin & amitié',
    accentColor: '#6b2d8b',
    icon: '🍷',
    description:
      "Le voyageur arrive à Bordeaux, capitale mondiale du vin. Il participe à une dégustation " +
      "dans le Médoc, apprend à parler de goûts et de préférences, et partage un dîner avec " +
      "des habitants accueillants.",
    photos: [
      { wikiTitle: 'Place de la Bourse', alt: 'Place de la Bourse', caption: "La place de la Bourse et son miroir d'eau" },
      { wikiTitle: 'Bordeaux', alt: 'Bordeaux', caption: 'Bordeaux au bord de la Garonne' },
      { wikiTitle: 'Médoc', alt: 'Vignobles du Médoc', caption: 'Les vignobles du Médoc' },
    ],
    vocabTopics: ['Vin', 'Goûts', 'Socialiser'],
    grammarTopic: 'vouloir, pouvoir, devoir',
    lessons: [
      {
        id: 'bordeaux-1',
        title: 'Wine Tasting',
        description: 'Tasting wine and talking about flavors.',
        steps: [
          { type: 'vocab', word: 'le vin rouge', article: 'le', english: 'red wine', example: 'Le vin rouge est excellent.' },
          { type: 'vocab', word: 'la dégustation', article: 'la', english: 'tasting', example: 'La dégustation commence.' },
          { type: 'vocab', word: 'le verre', article: 'le', english: 'glass', example: 'Un verre de blanc.' },
          { type: 'vocab', word: 'la bouteille', article: 'la', english: 'bottle', example: 'Une bouteille de rouge.' },
          { type: 'vocab', word: 'goûter', article: null, english: 'to taste', example: 'Je voudrais goûter ce vin.' },
          { type: 'vocab', word: 'santé !', article: null, english: 'cheers!', example: 'Santé ! À votre santé !' },
          { type: 'grammar', title: 'vouloir (to want)', explanation: 'vouloir: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils veulent. Use the polite "je voudrais" (I would like) in shops and restaurants.', examples: ['Je voudrais une bouteille de rouge.', 'Vous voulez goûter ?', 'Il veut visiter un château.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is the polite "I would like"?', options: ['je veux', 'je voudrais', 'je peux', 'je dois'], correct: 'je voudrais' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Vous ___ goûter ? (vouloir: you want)', correct: 'voulez' },
        ],
      },
      {
        id: 'bordeaux-2',
        title: 'Making Friends',
        description: 'Socializing, preferences, making plans together.',
        steps: [
          { type: 'vocab', word: 'sympa', article: null, english: 'nice / friendly', example: 'Les gens sont sympas.' },
          { type: 'vocab', word: 'ensemble', article: null, english: 'together', example: 'On dîne ensemble ?' },
          { type: 'vocab', word: 'adorer', article: null, english: 'to love', example: "J'adore ce vin !" },
          { type: 'vocab', word: 'préférer', article: null, english: 'to prefer', example: 'Je préfère le rouge.' },
          { type: 'vocab', word: "d'accord", article: null, english: 'okay / agreed', example: "D'accord, bonne idée !" },
          { type: 'vocab', word: 'avec plaisir', article: null, english: 'with pleasure', example: 'Avec plaisir !' },
          { type: 'grammar', title: 'pouvoir & devoir', explanation: 'pouvoir (can): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. devoir (must): je dois, tu dois, il doit… Both are followed by an infinitive.', examples: ['Je peux goûter ?', 'Vous pouvez répéter ?', 'Je dois partir à 18h.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "je dois" mean?', options: ['I can', 'I want', 'I must', 'I like'], correct: 'I must' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Vous ___ répéter, s\'il vous plaît ? (pouvoir: you can)', correct: 'pouvez' },
        ],
      },
    ],
    descriptionEn:
      "The traveller arrives in Bordeaux, the world capital of wine. They join a tasting in the " +
      "Médoc, learn to talk about tastes and preferences, and share a dinner with welcoming locals.",
    places: [
      {
        id: 'bdx-bourse', name: 'Place de la Bourse', icon: '🪞',
        coords: [44.8412, -0.5697], wikiTitle: 'Place de la Bourse',
        narrative: 'You arrive at the Place de la Bourse, perfectly mirrored in the shimmering Miroir d\'eau.',
        phrases: [
          { fr: "C'est magnifique le soir.", en: "It's magnificent in the evening." },
          { fr: 'On prend une photo ?', en: 'Shall we take a photo?' },
        ],
        quiz: { question: 'Place de la Bourse faces the world\'s largest reflecting pool, the Miroir d\'…?', options: ['Eau', 'Or', 'Argent'], correct: 'Eau', explanation: 'The "Miroir d\'eau" (water mirror) is the largest reflecting pool in the world.' },
      },
      {
        id: 'bdx-medoc', name: 'Dégustation dans le Médoc', icon: '🍷',
        coords: [45.1000, -0.7500], wikiTitle: 'Médoc',
        narrative: 'You drive out into the Médoc vineyards for your first real wine tasting at a château.',
        phrases: [
          { fr: 'Je voudrais goûter le rouge.', en: "I'd like to taste the red." },
          { fr: 'Santé !', en: 'Cheers!' },
        ],
        lessonId: 'bordeaux-1',
        quiz: { question: 'The Médoc is world-famous for its red…?', options: ['Wine', 'Cheese', 'Cider'], correct: 'Wine', explanation: 'The Médoc holds some of the most prestigious red-wine estates on earth.' },
      },
      {
        id: 'bdx-cite-vin', name: 'La Cité du Vin', icon: '🏛️',
        coords: [44.8627, -0.5503], wikiTitle: 'La Cité du Vin',
        narrative: 'Back in town you visit La Cité du Vin, a swirling glass building shaped like wine in a glass.',
        phrases: [
          { fr: 'Un billet avec dégustation.', en: 'A ticket with a tasting.' },
          { fr: "J'adore ce vin.", en: 'I love this wine.' },
        ],
        quiz: { question: 'La Cité du Vin is a museum entirely about…?', options: ['Wine', 'Ships', 'Space'], correct: 'Wine', explanation: 'It is a museum and cultural centre dedicated to wine across the world.' },
      },
      {
        id: 'bdx-sainte-catherine', name: 'Rue Sainte-Catherine', icon: '🍽️',
        coords: [44.8378, -0.5736], image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Bordeaux_Rue_Sainte_Catherine_R01.jpg',
        narrative: 'In the evening you join new friends for dinner off the lively Rue Sainte-Catherine.',
        phrases: [
          { fr: 'On dîne ensemble ?', en: 'Shall we have dinner together?' },
          { fr: 'Avec plaisir !', en: 'With pleasure!' },
        ],
        lessonId: 'bordeaux-2',
        quiz: { question: 'Rue Sainte-Catherine is one of Europe\'s longest… streets?', options: ['Pedestrian shopping', 'Underground', 'Coastal'], correct: 'Pedestrian shopping', explanation: 'At ~1.2 km it is one of the longest pedestrian shopping streets in Europe.' },
      },
      {
        id: 'bdx-cathedrale', name: 'Cathédrale Saint-André', icon: '⛪',
        coords: [44.8378, -0.5795], wikiTitle: 'Bordeaux Cathedral',
        narrative: 'You finish at the Cathédrale Saint-André, its Gothic towers crowning the UNESCO-listed old town.',
        phrases: [
          { fr: "C'est très ancien ?", en: 'Is it very old?' },
          { fr: 'Quelle belle ville !', en: 'What a beautiful city!' },
        ],
        quiz: { question: 'Bordeaux\'s historic centre is listed as a UNESCO World…?', options: ['Heritage Site', 'Wonder', 'Park'], correct: 'Heritage Site', explanation: 'The "Port of the Moon" old town is a UNESCO World Heritage Site.' },
      },
    ],
  },

  {
    id: 'nantes',
    name: 'Nantes',
    tagline: 'Sur les bords de la Loire',
    theme: 'Shopping & routine',
    accentColor: '#2d7a4f',
    icon: '🐘',
    description:
      "Le voyageur remonte vers Nantes, sur la Loire. Il visite les spectaculaires Machines " +
      "de l'île (animaux mécaniques géants) et passe un après-midi à acheter des souvenirs " +
      "et des vêtements.",
    photos: [
      { wikiTitle: 'Machines of the Isle of Nantes', alt: "Machines de l'île", caption: "Le Grand Éléphant des Machines de l'île" },
      { wikiTitle: 'Château des ducs de Bretagne', alt: 'Château des ducs de Bretagne', caption: 'Le château des ducs de Bretagne' },
      { wikiTitle: 'Nantes', alt: 'Nantes', caption: 'Nantes au bord de la Loire' },
    ],
    vocabTopics: ['Vêtements', 'Tailles', 'Routine'],
    grammarTopic: 'Verbes pronominaux + pronoms COD',
    lessons: [
      {
        id: 'nantes-1',
        title: 'In the Shop',
        description: 'Buying clothes: sizes, trying things on.',
        steps: [
          { type: 'vocab', word: 'le vêtement', article: 'le', english: 'clothing', example: 'Les vêtements sont en solde.' },
          { type: 'vocab', word: 'la chemise', article: 'la', english: 'shirt', example: 'Une chemise blanche.' },
          { type: 'vocab', word: 'la veste', article: 'la', english: 'jacket', example: 'Je peux essayer cette veste ?' },
          { type: 'vocab', word: 'les chaussures', article: 'les', english: 'shoes', example: 'Les chaussures sont là.' },
          { type: 'vocab', word: 'la taille', article: 'la', english: 'size', example: 'Vous avez la taille 40 ?' },
          { type: 'vocab', word: 'essayer', article: null, english: 'to try on', example: 'Je voudrais essayer la robe.' },
          { type: 'grammar', title: 'Pronoms COD (le / la / les)', explanation: 'Direct object pronouns replace a noun and go BEFORE the verb: le (m), la (f), l\' (before vowel), les (pl).', examples: ['Cette veste ? Je la prends !', 'Ces chaussures ? Je les essaie.', 'Le pantalon ? Je le voudrais en 38.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Replace "la robe": "Je ___ prends".', options: ['le', 'la', 'les', 'lui'], correct: 'la' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Vous avez ça en ___ 40 ? (clothing size)', correct: 'taille' },
        ],
      },
      {
        id: 'nantes-2',
        title: 'Daily Routine',
        description: 'Reflexive verbs for everyday routines.',
        steps: [
          { type: 'vocab', word: 'se lever', article: null, english: 'to get up', example: 'Je me lève à sept heures.' },
          { type: 'vocab', word: 'se coucher', article: null, english: 'to go to bed', example: 'Je me couche tard.' },
          { type: 'vocab', word: "s'habiller", article: null, english: 'to get dressed', example: "Je m'habille vite." },
          { type: 'vocab', word: 'le matin', article: 'le', english: 'morning', example: 'Le matin, je bois un café.' },
          { type: 'vocab', word: "d'abord", article: null, english: 'first', example: "D'abord, je me douche." },
          { type: 'vocab', word: 'ensuite', article: null, english: 'then', example: "Ensuite, je m'habille." },
          { type: 'grammar', title: 'Verbes pronominaux', explanation: 'Reflexive verbs use a pronoun referring to the subject, placed before the verb: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.', examples: ['Je me lève à sept heures.', "Il s'appelle Pierre.", 'Nous nous reposons.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "se coucher" mean?', options: ['to get up', 'to go to bed', 'to wash', 'to rest'], correct: 'to go to bed' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ lève à sept heures. (reflexive pronoun: myself)', correct: 'me' },
        ],
      },
    ],
    descriptionEn:
      "The traveller heads up to Nantes, on the Loire. They visit the spectacular Machines de l'île " +
      "(giant mechanical animals) and spend an afternoon buying souvenirs and clothes.",
    places: [
      {
        id: 'nte-chateau', name: 'Château des ducs de Bretagne', icon: '🏰',
        coords: [47.2158, -1.5497], wikiTitle: 'Château des ducs de Bretagne',
        narrative: 'You arrive at the Château des ducs de Bretagne, white stone walls ringed by a moat in the city centre.',
        phrases: [
          { fr: 'Un billet pour le château.', en: 'A ticket for the castle.' },
          { fr: "C'est ouvert aujourd'hui ?", en: 'Is it open today?' },
        ],
        quiz: { question: 'Nantes was historically the capital of which region?', options: ['Brittany', 'Normandy', 'Alsace'], correct: 'Brittany', explanation: 'The castle was the seat of the Dukes of Brittany — Nantes was its historic capital.' },
      },
      {
        id: 'nte-machines', name: "Les Machines de l'île", icon: '🐘',
        coords: [47.2050, -1.5650], image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Les_Machines_de_l%27Ile_%40_Nantes_%287929839186%29.jpg',
        narrative: 'You meet the Grand Éléphant — a 12-metre mechanical elephant that walks, trumpets and sprays the crowd.',
        phrases: [
          { fr: "On monte sur l'éléphant ?", en: 'Shall we ride the elephant?' },
          { fr: "C'est incroyable !", en: "It's incredible!" },
        ],
        quiz: { question: "The Machines de l'île's most famous creation is a giant mechanical…?", options: ['Elephant', 'Spider', 'Whale'], correct: 'Elephant', explanation: 'The Grand Éléphant carries dozens of passengers on its back as it strolls.' },
      },
      {
        id: 'nte-pommeraye', name: 'Passage Pommeraye', icon: '🛍️',
        coords: [47.2138, -1.5580], wikiTitle: 'Passage Pommeraye',
        narrative: 'You go shopping in the Passage Pommeraye, an ornate 19th-century arcade of staircases and statues.',
        phrases: [
          { fr: 'Je peux essayer ça ?', en: 'Can I try this on?' },
          { fr: 'Vous avez ma taille ?', en: 'Do you have my size?' },
        ],
        lessonId: 'nantes-1',
        quiz: { question: 'The Passage Pommeraye is a 19th-century covered shopping…?', options: ['Arcade', 'Market', 'Station'], correct: 'Arcade', explanation: 'Opened in 1843, it is one of France\'s most beautiful covered shopping arcades.' },
      },
      {
        id: 'nte-ile', name: "Île de Nantes (le matin)", icon: '🌅',
        coords: [47.2030, -1.5620], wikiTitle: 'Île de Nantes',
        narrative: 'Morning on the Île de Nantes: coffee by the river, then off to explore the regenerated docks.',
        phrases: [
          { fr: 'Le matin, je bois un café.', en: 'In the morning, I have a coffee.' },
          { fr: 'On commence par ici.', en: "Let's start here." },
        ],
        lessonId: 'nantes-2',
        quiz: { question: 'Nantes sits on the banks of which river?', options: ['The Loire', 'The Rhône', 'The Seine'], correct: 'The Loire', explanation: 'Nantes lies on the Loire, near where it meets the Atlantic.' },
      },
      {
        id: 'nte-jardin', name: 'Jardin des Plantes', icon: '🌳',
        coords: [47.2185, -1.5420], wikiTitle: 'Jardin des plantes de Nantes',
        narrative: 'You end among the greenhouses and giant flowerbeds of the Jardin des Plantes.',
        phrases: [
          { fr: 'On se repose un peu ?', en: 'Shall we rest a bit?' },
          { fr: 'Quel beau jardin !', en: 'What a lovely garden!' },
        ],
        quiz: { question: 'Nantes was named European Green… in 2013?', options: ['Capital', 'Olympics', 'Festival'], correct: 'Capital', explanation: 'Nantes won the European Green Capital award in 2013 for its eco-friendly city planning.' },
      },
    ],
  },

  {
    id: 'lille',
    name: 'Lille',
    tagline: 'La capitale des Flandres',
    theme: "Heure & emploi du temps",
    accentColor: '#b7430c',
    icon: '🏛️',
    description:
      "Direction le nord et Lille, ville animée aux fortes influences belges et flamandes. " +
      "Le voyageur visite la Grand-Place, goûte la carbonnade flamande et prépare la " +
      "dernière étape vers Bruxelles.",
    photos: [
      { wikiTitle: 'Grand-Place, Lille', alt: 'Grand-Place de Lille', caption: 'La Grand-Place de Lille' },
      { wikiTitle: 'Vieux-Lille', alt: 'Vieux-Lille', caption: 'Les façades du Vieux-Lille' },
      { wikiTitle: 'Lille', alt: 'Lille', caption: 'Lille, capitale des Flandres françaises' },
    ],
    vocabTopics: ["Heure", 'Fréquence', 'Organiser'],
    grammarTopic: "Dire l'heure + adverbes de fréquence",
    lessons: [
      {
        id: 'lille-1',
        title: 'What Time Is It?',
        description: 'Telling and asking the time.',
        steps: [
          { type: 'vocab', word: "l'heure", article: 'la', english: 'hour / time', example: 'Quelle heure est-il ?' },
          { type: 'vocab', word: 'midi', article: null, english: 'noon', example: 'On se retrouve à midi ?' },
          { type: 'vocab', word: 'minuit', article: null, english: 'midnight', example: 'Il est minuit.' },
          { type: 'vocab', word: 'et demie', article: null, english: 'half past', example: 'Il est deux heures et demie.' },
          { type: 'vocab', word: 'en retard', article: null, english: 'late', example: 'Je suis en retard !' },
          { type: 'vocab', word: 'le rendez-vous', article: 'le', english: 'appointment', example: "J'ai un rendez-vous à 15h." },
          { type: 'grammar', title: "Dire l'heure", explanation: 'Use "il est + number + heure(s)". Minutes: et quart (:15), et demie (:30), moins le quart (:45). Schedules use the 24-hour clock.', examples: ['Il est une heure.', 'Il est deux heures et demie.', 'Le train part à seize heures trente.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "et demie"?', options: ['quarter past', 'half past', 'quarter to', 'noon'], correct: 'half past' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Quelle ___ est-il ? (hour / time)', correct: 'heure' },
        ],
      },
      {
        id: 'lille-2',
        title: 'Planning and Schedule',
        description: 'Frequency words and planning the trip.',
        steps: [
          { type: 'vocab', word: 'le voyage', article: 'le', english: 'trip / journey', example: 'Le voyage est long.' },
          { type: 'vocab', word: 'souvent', article: null, english: 'often', example: 'Je visite Lille souvent.' },
          { type: 'vocab', word: 'parfois', article: null, english: 'sometimes', example: 'Il prend parfois le bus.' },
          { type: 'vocab', word: 'toujours', article: null, english: 'always', example: 'Je prends toujours le train.' },
          { type: 'vocab', word: 'réserver', article: null, english: 'to book', example: 'Je voudrais réserver une place.' },
          { type: 'vocab', word: 'le départ', article: 'le', english: 'departure', example: 'Le départ est à 9h.' },
          { type: 'grammar', title: 'Adverbes de fréquence', explanation: 'toujours (always), souvent (often), parfois (sometimes), rarement (rarely) go after the verb. jamais wraps the verb: ne…jamais.', examples: ['Je visite toujours la boulangerie le matin.', 'Il prend parfois le bus.', 'Je ne prends jamais le taxi.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "souvent" mean?', options: ['always', 'often', 'sometimes', 'never'], correct: 'often' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je voudrais ___ une place pour Bruxelles. (to book)', correct: 'réserver' },
        ],
      },
    ],
    descriptionEn:
      "North to Lille, a lively city with strong Belgian and Flemish influences. The traveller " +
      "visits the Grand-Place, tastes carbonnade flamande and prepares the final leg to Brussels.",
    places: [
      {
        id: 'lil-gare', name: 'Gare Lille-Flandres', icon: '🚆',
        coords: [50.6365, 3.0707], wikiTitle: 'Gare de Lille-Flandres',
        narrative: 'You step off at Lille-Flandres, the bustling station that ties the north of Europe together.',
        phrases: [
          { fr: 'Le train pour Bruxelles ?', en: 'The train to Brussels?' },
          { fr: 'À quelle heure ?', en: 'At what time?' },
        ],
        quiz: { question: 'Lille is a major rail hub linking Paris, Brussels and…?', options: ['London', 'Madrid', 'Rome'], correct: 'London', explanation: 'Eurostar and Thalys make Lille a crossroads between Paris, Brussels and London.' },
      },
      {
        id: 'lil-grand-place', name: 'Grand-Place', icon: '🏛️',
        coords: [50.6366, 3.0635], image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Lille_vue_gd_place.JPG',
        narrative: 'You reach the Grand-Place, ringed by Flemish façades and crowned by the old stock-exchange belfry.',
        phrases: [
          { fr: 'Quelle heure est-il ?', en: 'What time is it?' },
          { fr: 'On se retrouve à midi.', en: "Let's meet at noon." },
        ],
        lessonId: 'lille-1',
        quiz: { question: "Lille's Grand-Place is officially named after which leader, born in the city?", options: ['Charles de Gaulle', 'Napoleon', 'Louis XIV'], correct: 'Charles de Gaulle', explanation: 'It is officially Place du Général-de-Gaulle — he was born in Lille in 1890.' },
      },
      {
        id: 'lil-vieux', name: 'Vieux-Lille', icon: '🏘️',
        coords: [50.6420, 3.0640], wikiTitle: 'Vieux-Lille',
        narrative: 'You wander Vieux-Lille\'s cobbled lanes, red-brick gables and tempting pastry shops.',
        phrases: [
          { fr: 'C\'est par ici ?', en: 'Is it this way?' },
          { fr: "J'aime ce quartier.", en: 'I like this district.' },
        ],
        quiz: { question: "Lille's architecture shows a strong… influence?", options: ['Flemish', 'Greek', 'Moorish'], correct: 'Flemish', explanation: 'Centuries in the Flemish and Spanish Netherlands shaped its brick-and-gable look.' },
      },
      {
        id: 'lil-beaux-arts', name: 'Palais des Beaux-Arts', icon: '🖼️',
        coords: [50.6310, 3.0625], wikiTitle: 'Palais des Beaux-Arts de Lille',
        narrative: 'You take in the Palais des Beaux-Arts, a grand museum of paintings second only to the Louvre.',
        phrases: [
          { fr: 'Un billet pour le musée.', en: 'A ticket for the museum.' },
          { fr: "C'est ouvert maintenant ?", en: 'Is it open now?' },
        ],
        quiz: { question: 'The Palais des Beaux-Arts is one of France\'s largest museums after the…?', options: ['Louvre', 'Orsay', 'Pompidou'], correct: 'Louvre', explanation: 'It is often called the largest French fine-arts museum outside Paris.' },
      },
      {
        id: 'lil-braderie', name: 'La Braderie de Lille', icon: '🛍️',
        coords: [50.6330, 3.0590], wikiTitle: 'Braderie de Lille',
        narrative: 'You plan the trip around the Braderie, when the whole city turns into a giant street market.',
        phrases: [
          { fr: "C'est combien ?", en: 'How much is it?' },
          { fr: 'Je regarde, merci.', en: "I'm just looking, thanks." },
        ],
        lessonId: 'lille-2',
        quiz: { question: 'The Braderie de Lille is one of Europe\'s largest…?', options: ['Flea markets', 'Concerts', 'Parades'], correct: 'Flea markets', explanation: 'Every September millions come for this centuries-old giant flea market.' },
      },
      {
        id: 'lil-carbonnade', name: 'Carbonnade flamande', icon: '🍲',
        coords: [50.6400, 3.0625], wikiTitle: 'Carbonnade',
        narrative: 'Before the last leg you settle into an estaminet for carbonnade flamande, the north\'s cosy beef stew.',
        phrases: [
          { fr: 'Une carbonnade, s\'il vous plaît.', en: 'A carbonnade, please.' },
          { fr: "C'est délicieux !", en: "It's delicious!" },
        ],
        quiz: { question: 'Carbonnade flamande is beef slow-cooked in…?', options: ['Beer', 'Wine', 'Milk'], correct: 'Beer', explanation: 'This Flemish classic braises beef in dark beer — a taste of nearby Belgium.' },
      },
    ],
  },

  {
    id: 'brussels',
    name: 'Bruxelles',
    tagline: "Le terminus : capitale de l'Europe",
    theme: 'Spécialités & projets',
    accentColor: '#d4a017',
    icon: '🧇',
    description:
      "La destination finale. Bruxelles, en Belgique, officiellement bilingue français-néerlandais. " +
      "Capitale de l'Union européenne, patrie de la gaufre et du chocolat. Le voyageur fait le " +
      "bilan de son périple et rêve déjà de l'avenir.",
    photos: [
      { wikiTitle: 'Grand-Place', alt: 'Grand-Place de Bruxelles', caption: 'La Grand-Place de Bruxelles' },
      { wikiTitle: 'Manneken Pis', alt: 'Manneken Pis', caption: 'Le Manneken Pis, emblème de la ville' },
      { wikiTitle: 'Brussels', alt: 'Bruxelles', caption: "Bruxelles, capitale de l'Europe" },
    ],
    vocabTopics: ['Spécialités belges', 'Projets', 'Révision'],
    grammarTopic: 'Le futur proche (aller + infinitif)',
    lessons: [
      {
        id: 'brussels-1',
        title: 'Belgian Specialties',
        description: 'Waffles, chocolate, and ordering to take away.',
        steps: [
          { type: 'vocab', word: 'la gaufre', article: 'la', english: 'waffle', example: 'Une gaufre au chocolat.' },
          { type: 'vocab', word: 'le chocolat', article: 'le', english: 'chocolate', example: 'Le chocolat belge est incroyable.' },
          { type: 'vocab', word: 'les frites', article: 'les', english: 'fries', example: 'Les moules-frites !' },
          { type: 'vocab', word: 'à emporter', article: null, english: 'to take away', example: "C'est à emporter ?" },
          { type: 'vocab', word: 'sur place', article: null, english: 'to eat in', example: 'Sur place ou à emporter ?' },
          { type: 'vocab', word: "c'est délicieux", article: null, english: "it's delicious", example: "C'est délicieux !" },
          { type: 'grammar', title: 'Le futur proche (aller + infinitif)', explanation: 'The near future: conjugate aller (je vais, tu vas, il va, nous allons, vous allez, ils vont) + infinitive.', examples: ['Je vais visiter la Grand-Place.', 'Nous allons manger des frites.', 'Il va acheter du chocolat.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "to take away"?', options: ['sur place', 'à emporter', 'une portion', 'à droite'], correct: 'à emporter' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ acheter des pralines. (aller: I am going to)', correct: 'vais' },
        ],
      },
      {
        id: 'brussels-2',
        title: 'Future Plans and Review',
        description: 'Talking about plans and wrapping up the journey.',
        steps: [
          { type: 'vocab', word: 'le projet', article: 'le', english: 'plan / project', example: "J'ai un projet." },
          { type: 'vocab', word: "l'avenir", article: 'le', english: 'the future', example: "Pour l'avenir." },
          { type: 'vocab', word: 'apprendre', article: null, english: 'to learn', example: 'Je vais continuer à apprendre.' },
          { type: 'vocab', word: 'revenir', article: null, english: 'to come back', example: "J'espère revenir en France." },
          { type: 'vocab', word: 'peut-être', article: null, english: 'maybe', example: 'Peut-être un jour.' },
          { type: 'vocab', word: 'à la prochaine !', article: null, english: 'until next time!', example: 'Merci pour tout, à la prochaine !' },
          { type: 'grammar', title: 'Futur proche : négation & question', explanation: 'Negative: ne + aller + pas + infinitive. Question: est-ce que + aller + infinitive.', examples: ['Je ne vais pas partir demain.', 'Est-ce que tu vas visiter le Manneken Pis ?', "Je vais continuer à apprendre le français."] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "apprendre" mean?', options: ['to come back', 'to learn', 'to plan', 'to leave'], correct: 'to learn' },
          { type: 'exercise', subtype: 'fill-blank', question: "J'espère ___ en France un jour. (to come back)", correct: 'revenir' },
        ],
      },
    ],
    descriptionEn:
      "The final destination. Brussels, in Belgium, officially bilingual French-Dutch. Capital of " +
      "the European Union, home of the waffle and chocolate. The traveller looks back on the " +
      "journey and already dreams of the future.",
    places: [
      {
        id: 'bru-grand-place', name: 'Grand-Place de Bruxelles', icon: '🏛️',
        coords: [50.8467, 4.3525], wikiTitle: 'Grand-Place',
        narrative: 'You step into the Grand-Place, a square of gilded guildhalls glittering in the late sun — journey\'s end.',
        phrases: [
          { fr: "C'est splendide !", en: "It's splendid!" },
          { fr: 'On prend une photo ?', en: 'Shall we take a photo?' },
        ],
        quiz: { question: 'The Grand-Place of Brussels is a UNESCO World…?', options: ['Heritage Site', 'Wonder', 'Capital'], correct: 'Heritage Site', explanation: 'Its ensemble of baroque guildhalls has been UNESCO-listed since 1998.' },
      },
      {
        id: 'bru-manneken', name: 'Manneken Pis', icon: '💦',
        coords: [50.8450, 4.3500], wikiTitle: 'Manneken Pis',
        narrative: 'Around the corner you find the tiny Manneken Pis — far smaller than you imagined, and often in costume.',
        phrases: [
          { fr: 'Où est la statue ?', en: 'Where is the statue?' },
          { fr: 'Il est tout petit !', en: "It's tiny!" },
        ],
        quiz: { question: 'The Manneken Pis is a small statue of a…?', options: ['Boy', 'Lion', 'King'], correct: 'Boy', explanation: 'A 61 cm bronze boy — the city dresses him in hundreds of different costumes.' },
      },
      {
        id: 'bru-gaufre', name: 'Une gaufre belge', icon: '🧇',
        coords: [50.8466, 4.3528], wikiTitle: 'Belgian waffle',
        narrative: 'You treat yourself to a hot Belgian waffle from a street stand — eat in or take away?',
        phrases: [
          { fr: 'Une gaufre, s\'il vous plaît.', en: 'A waffle, please.' },
          { fr: 'Sur place ou à emporter ?', en: 'Eat in or take away?' },
        ],
        lessonId: 'brussels-1',
        quiz: { question: 'Belgium is world-famous for waffles and…?', options: ['Chocolate', 'Cheese', 'Tea'], correct: 'Chocolate', explanation: 'Belgian chocolate and pralines are prized around the world.' },
      },
      {
        id: 'bru-ue', name: 'Quartier européen', icon: '🇪🇺',
        coords: [50.8389, 4.3750], wikiTitle: 'European Quarter, Brussels',
        narrative: 'You visit the European Quarter, flags of every member state snapping in the wind — and make plans for the future.',
        phrases: [
          { fr: 'Je vais visiter le parlement.', en: "I'm going to visit the parliament." },
          { fr: 'C\'est par où ?', en: 'Which way is it?' },
        ],
        lessonId: 'brussels-2',
        quiz: { question: 'Brussels is the de facto capital of the…?', options: ['European Union', 'United States', 'United Kingdom'], correct: 'European Union', explanation: 'It hosts the European Commission, Council and Parliament.' },
      },
      {
        id: 'bru-atomium', name: 'Atomium', icon: '⚛️',
        coords: [50.8949, 4.3415], wikiTitle: 'Atomium',
        narrative: 'You finish at the Atomium\'s shining spheres — a fitting, futuristic end to your French-speaking adventure.',
        phrases: [
          { fr: 'Deux billets, s\'il vous plaît.', en: 'Two tickets, please.' },
          { fr: 'Quel voyage incroyable !', en: 'What an incredible journey!' },
        ],
        quiz: { question: 'The Atomium, built for Expo 58, represents a magnified iron…?', options: ['Crystal', 'Snowflake', 'Star'], correct: 'Crystal', explanation: 'It models a unit cell of an iron crystal, enlarged 165 billion times.' },
      },
    ],
  },
];

export default cities;
