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
    descriptionPt:
      "Paris, a capital da França, é o ponto de partida da nossa viagem. " +
      "O viajante pousa no aeroporto Charles de Gaulle, pega o RER B em direção ao centro " +
      "e se instala em um pequeno hotel no Bairro Latino. Primeiro desafio: se virar " +
      "sem falar uma palavra de francês.",
    photos: [
      { wikiTitle: 'Eiffel Tower', alt: 'Tour Eiffel', caption: 'La Tour Eiffel, symbole de Paris' },
      { wikiTitle: 'Paris', alt: 'Paris skyline', caption: 'Paris, la Ville Lumière' },
      { wikiTitle: 'Charles de Gaulle Airport', alt: 'Aéroport CDG', caption: "L'aéroport Charles de Gaulle, porte d'entrée du pays" },
    ],
    vocabTopics: ['Aéroport', 'Salutations', 'Présentations'],
    grammarTopic: 'Pronoms sujets + être au présent',
    grammarTopicPt: 'Pronomes sujeitos + être no presente',
    lessons: [
      {
        id: 'paris-1',
        title: 'Arriving in France',
        titlePt: 'Chegando na França',
        description: "At the airport: customs, luggage, finding the train.",
        descriptionPt: "No aeroporto: alfândega, bagagem, encontrar o trem.",
        steps: [
          { type: 'vocab', word: "l'aéroport", article: 'le', english: 'airport', portuguese: 'aeroporto', example: "L'aéroport est très grand." },
          { type: 'vocab', word: 'le vol', article: 'le', english: 'flight', portuguese: 'voo', example: 'Le vol est à huit heures.' },
          { type: 'vocab', word: 'le passeport', article: 'le', english: 'passport', portuguese: 'passaporte', example: 'Voici mon passeport.' },
          { type: 'vocab', word: 'la douane', article: 'la', english: 'customs', portuguese: 'alfândega', example: 'Je passe la douane.' },
          { type: 'vocab', word: 'les bagages', article: 'les', english: 'luggage', portuguese: 'bagagem', example: 'Où sont les bagages ?' },
          { type: 'vocab', word: 'la sortie', article: 'la', english: 'exit', portuguese: 'saída', example: 'La sortie est à droite.' },
          { type: 'grammar', title: 'Le verbe être (to be)', titlePt: 'O verbo être (ser/estar)', explanation: 'Être is the most essential French verb and is completely irregular. Learn all six forms by heart.', explanationPt: 'Être é o verbo mais essencial do francês e é totalmente irregular. Decore as seis formas de cor.', examples: ['Je suis en France !', 'Elle est de Paris.', 'Nous sommes à l\'aéroport.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "luggage" in French?', questionPt: 'Como se diz "bagagem" em francês?', options: ['la douane', 'les bagages', 'le vol', 'la sortie'], correct: 'les bagages' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ en France ! (être: I am)', questionPt: 'Je ___ en France ! (être: eu sou/estou)', correct: 'suis' },
        ],
      },
      {
        id: 'paris-2',
        title: 'Introductions and Greetings',
        titlePt: 'Apresentações e cumprimentos',
        description: 'Saying hello, introducing yourself, where you are from.',
        descriptionPt: 'Dizer olá, se apresentar, de onde você é.',
        steps: [
          { type: 'vocab', word: 'bonjour', article: null, english: 'hello / good morning', portuguese: 'olá / bom dia', example: 'Bonjour, ça va ?' },
          { type: 'vocab', word: 'au revoir', article: null, english: 'goodbye', portuguese: 'tchau / até logo', example: 'Au revoir, à bientôt !' },
          { type: 'vocab', word: "je m'appelle…", article: null, english: 'my name is…', portuguese: 'meu nome é…', example: "Je m'appelle Maria." },
          { type: 'vocab', word: 'enchanté(e)', article: null, english: 'pleased to meet you', portuguese: 'prazer em conhecer', example: 'Enchanté ! Et vous ?' },
          { type: 'vocab', word: 'je suis de…', article: null, english: 'I am from…', portuguese: 'eu sou de…', example: 'Je suis du Brésil.' },
          { type: 'vocab', word: 'je ne comprends pas', article: null, english: "I don't understand", portuguese: 'eu não entendo', example: 'Je ne comprends pas, pardon.' },
          { type: 'grammar', title: 'Pronoms sujets', titlePt: 'Pronomes sujeitos', explanation: 'je, tu, il/elle/on, nous, vous, ils/elles. Tu is informal; vous is formal or plural. On often means an informal "we".', explanationPt: 'je, tu, il/elle/on, nous, vous, ils/elles. Tu é informal; vous é formal ou plural. On muitas vezes significa um "nós" informal.', examples: ['Je suis brésilien.', 'Vous parlez anglais ?', 'On va à Paris.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which is the FORMAL "you"?', questionPt: 'Qual é o "você" FORMAL?', options: ['tu', 'je', 'vous', 'on'], correct: 'vous' },
          { type: 'exercise', subtype: 'fill-blank', question: "Je m'___ Maria. (my name is)", questionPt: "Je m'___ Maria. (meu nome é)", correct: 'appelle' },
        ],
      },
      {
        id: 'paris-3',
        title: 'At the Eiffel Tower',
        titlePt: 'Na Torre Eiffel',
        description: 'Buying a ticket, numbers, asking the price.',
        descriptionPt: 'Comprar um ingresso, números, perguntar o preço.',
        steps: [
          { type: 'vocab', word: 'le billet', article: 'le', english: 'ticket', portuguese: 'ingresso', example: 'Un billet, s\'il vous plaît.' },
          { type: 'vocab', word: "l'entrée", article: 'la', english: 'entrance / admission', portuguese: 'entrada / ingresso', example: "L'entrée est à droite." },
          { type: 'vocab', word: 'combien', article: null, english: 'how much / how many', portuguese: 'quanto / quantos', example: "C'est combien ?" },
          { type: 'vocab', word: "l'ascenseur", article: 'le', english: 'lift / elevator', portuguese: 'elevador', example: "On prend l'ascenseur ?" },
          { type: 'vocab', word: 'la vue', article: 'la', english: 'view', portuguese: 'vista', example: 'La vue est magnifique !' },
          { type: 'vocab', word: 'cher / chère', article: null, english: 'expensive', portuguese: 'caro / cara', example: "C'est un peu cher." },
          { type: 'grammar', title: 'Les nombres 1–20', titlePt: 'Os números de 1 a 20', explanation: 'un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix… up to vingt (20). Essential for prices, time and tickets.', explanationPt: 'un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix… até vingt (20). Essenciais para preços, horas e ingressos.', examples: ['Deux billets, s\'il vous plaît.', 'Ça fait dix-huit euros.', 'Il est trois heures.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you ask "How much is it?"', questionPt: 'Como você pergunta "Quanto custa?"', options: ['Où est-ce ?', 'C\'est combien ?', 'Qui est-ce ?', 'Quelle heure ?'], correct: 'C\'est combien ?' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Un ___, s\'il vous plaît. (ticket)', questionPt: 'Un ___, s\'il vous plaît. (ingresso)', correct: 'billet' },
        ],
      },
      {
        id: 'paris-4',
        title: 'At the Café',
        titlePt: 'No Café',
        description: 'Ordering a drink, being polite, asking for the bill.',
        descriptionPt: 'Pedir uma bebida, ser educado, pedir a conta.',
        steps: [
          { type: 'vocab', word: 'le café', article: 'le', english: 'coffee / café', portuguese: 'café', example: 'Un café, s\'il vous plaît.' },
          { type: 'vocab', word: "l'eau", article: 'la', english: 'water', portuguese: 'água', example: "Une carafe d'eau, s'il vous plaît." },
          { type: 'vocab', word: "l'addition", article: 'la', english: 'the bill / check', portuguese: 'a conta', example: "L'addition, s'il vous plaît !" },
          { type: 'vocab', word: 'merci', article: null, english: 'thank you', portuguese: 'obrigado(a)', example: 'Merci beaucoup !' },
          { type: 'vocab', word: "s'il vous plaît", article: null, english: 'please', portuguese: 'por favor', example: 'Un thé, s\'il vous plaît.' },
          { type: 'vocab', word: 'la terrasse', article: 'la', english: 'terrace (outdoor seating)', portuguese: 'terraço (mesas ao ar livre)', example: 'On s\'installe en terrasse ?' },
          { type: 'grammar', title: 'Commander avec « je voudrais »', titlePt: 'Pedir com « je voudrais »', explanation: '« Je voudrais… » (I would like…) is the polite way to order. Softer than « je veux » (I want). Always pair it with « s\'il vous plaît ».', explanationPt: '« Je voudrais… » (eu gostaria…) é a forma educada de pedir. Mais suave que « je veux » (eu quero). Use sempre junto com « s\'il vous plaît ».', examples: ['Je voudrais un café.', 'Je voudrais l\'addition, s\'il vous plaît.', 'Je voudrais une eau, merci.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you politely ask for the bill?', questionPt: 'Como você pede a conta educadamente?', options: ['Le café, s\'il vous plaît', 'L\'addition, s\'il vous plaît', 'Bonjour, ça va ?', 'Une terrasse, merci'], correct: 'L\'addition, s\'il vous plaît' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ un café, s\'il vous plaît. (I would like)', questionPt: 'Je ___ un café, s\'il vous plaît. (eu gostaria)', correct: 'voudrais' },
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
        narrativePt: 'Seu avião pousa em Charles de Gaulle. Passaporte carimbado, malas recolhidas, você pega o RER B e vê Paris surgir diante dos seus olhos.',
        phrases: [
          { fr: 'Où sont les bagages ?', en: 'Where is the luggage?', pt: 'Onde está a bagagem?' },
          { fr: "La sortie, s'il vous plaît ?", en: 'The exit, please?', pt: 'A saída, por favor?' },
          { fr: 'Un ticket pour le centre.', en: 'A ticket to the centre.', pt: 'Uma passagem para o centro.' },
        ],
        lessonId: 'paris-1',
        quiz: {
          question: 'Charles de Gaulle airport is named after a famous French…?',
          questionPt: 'O aeroporto Charles de Gaulle recebeu o nome de um famoso francês…?',
          options: ['President & general', 'Painter', 'Chef'],
          correct: 'President & general',
          explanation: 'Charles de Gaulle led the Free French in WWII and later became president of France.',
          explanationPt: 'Charles de Gaulle liderou a França Livre na Segunda Guerra Mundial e mais tarde se tornou presidente da França.',
        },
      },
      {
        id: 'palais-garnier', name: 'Palais Garnier', icon: '🎭',
        coords: [48.8720, 2.3316], wikiTitle: 'Palais Garnier',
        narrative: 'You surface near the Palais Garnier — all gold leaf and red velvet. A grand overture to the city, and your first taste of French politeness.',
        narrativePt: 'Você emerge perto do Palais Garnier, todo em folha de ouro e veludo vermelho. Uma grande abertura para a cidade e seu primeiro gostinho da polidez francesa.',
        phrases: [
          { fr: 'Bonjour !', en: 'Hello!', pt: 'Olá!' },
          { fr: "Deux billets, s'il vous plaît.", en: 'Two tickets, please.', pt: 'Dois ingressos, por favor.' },
          { fr: 'Enchanté !', en: 'Pleased to meet you!', pt: 'Prazer em conhecer!' },
        ],
        lessonId: 'paris-2',
        quiz: {
          question: 'The Palais Garnier is the setting for which famous story?',
          questionPt: 'O Palais Garnier é o cenário de qual história famosa?',
          options: ['The Phantom of the Opera', 'Les Misérables', 'The Hunchback'],
          correct: 'The Phantom of the Opera',
          explanation: "Gaston Leroux set his 1910 novel in this very opera house — lake in the cellars included.",
          explanationPt: 'Gaston Leroux ambientou seu romance de 1910 nesta mesma casa de ópera, lago nos porões incluído.',
        },
      },
      {
        id: 'louvre', name: 'Musée du Louvre', icon: '🖼️',
        coords: [48.8606, 2.3376], wikiTitle: 'Louvre',
        narrative: 'Following the Seine, you reach the glass pyramid of the Louvre. Somewhere inside, behind the crowds, the Mona Lisa is smiling.',
        narrativePt: 'Seguindo o Sena, você chega à pirâmide de vidro do Louvre. Em algum lugar lá dentro, por trás da multidão, a Mona Lisa está sorrindo.',
        phrases: [
          { fr: "Un billet, s'il vous plaît.", en: 'One ticket, please.', pt: 'Um ingresso, por favor.' },
          { fr: 'Où est la Joconde ?', en: 'Where is the Mona Lisa?', pt: 'Onde está a Mona Lisa?' },
        ],
        quiz: {
          question: 'Which world-famous painting hangs in the Louvre?',
          questionPt: 'Qual pintura mundialmente famosa está no Louvre?',
          options: ['Mona Lisa', 'The Scream', 'Starry Night'],
          correct: 'Mona Lisa',
          explanation: 'La Joconde (Mona Lisa) by Leonardo da Vinci is the Louvre\'s most visited work.',
          explanationPt: 'La Joconde (Mona Lisa), de Leonardo da Vinci, é a obra mais visitada do Louvre.',
        },
      },
      {
        id: 'notre-dame', name: 'Cathédrale Notre-Dame', icon: '⛪',
        coords: [48.8530, 2.3499], wikiTitle: 'Notre-Dame de Paris',
        narrative: 'You cross to the Île de la Cité, where Notre-Dame rises over the river — scarred by fire, wrapped in scaffolding, but standing proud.',
        narrativePt: 'Você atravessa para a Île de la Cité, onde Notre-Dame se ergue sobre o rio, marcada pelo incêndio, envolta em andaimes, mas de pé com orgulho.',
        phrases: [
          { fr: "C'est magnifique !", en: "It's magnificent!", pt: 'É magnífico!' },
          { fr: "C'est ouvert ?", en: 'Is it open?', pt: 'Está aberto?' },
        ],
        quiz: {
          question: 'In 2019 Notre-Dame survived a major…?',
          questionPt: 'Em 2019, Notre-Dame sobreviveu a um grande…?',
          options: ['Fire', 'Flood', 'Earthquake'],
          correct: 'Fire',
          explanation: 'A 2019 fire destroyed the spire and roof; a vast restoration reopened it in 2024.',
          explanationPt: 'Um incêndio em 2019 destruiu a torre e o telhado; uma ampla restauração a reabriu em 2024.',
        },
      },
      {
        id: 'le-marais', name: 'Le Marais', icon: '🏘️',
        coords: [48.8590, 2.3620], wikiTitle: 'Le Marais',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Place_des_Vosges_vue_a%C3%A9rienne.png',
        narrative: 'You wander into Le Marais — medieval lanes, hidden courtyards, trendy cafés and the smell of fresh falafel. Time for a break.',
        narrativePt: 'Você entra no Le Marais, com ruelas medievais, pátios escondidos, cafés descolados e o cheiro de falafel fresquinho. Hora de uma pausa.',
        phrases: [
          { fr: 'Je voudrais un café.', en: 'I would like a coffee.', pt: 'Eu gostaria de um café.' },
          { fr: "L'addition, s'il vous plaît !", en: 'The bill, please!', pt: 'A conta, por favor!' },
          { fr: 'Merci beaucoup !', en: 'Thank you very much!', pt: 'Muito obrigado!' },
        ],
        lessonId: 'paris-4',
        quiz: {
          question: 'Le Marais, one of Paris\'s oldest districts, surrounds which elegant square?',
          questionPt: 'Le Marais, um dos bairros mais antigos de Paris, cerca qual praça elegante?',
          options: ['Place des Vosges', 'Place de la Concorde', 'Trocadéro'],
          correct: 'Place des Vosges',
          explanation: 'Place des Vosges (1612) is the oldest planned square in Paris, at the heart of Le Marais.',
          explanationPt: 'A Place des Vosges (1612) é a praça planejada mais antiga de Paris, no coração do Le Marais.',
        },
      },
      {
        id: 'luxembourg', name: 'Jardin du Luxembourg', icon: '🌳',
        coords: [48.8462, 2.3372], wikiTitle: 'Jardin du Luxembourg',
        narrative: 'You pause in the Jardin du Luxembourg, where Parisians read on green metal chairs and toy sailboats drift across the fountain.',
        narrativePt: 'Você descansa no Jardin du Luxembourg, onde os parisienses leem em cadeiras de metal verdes e barquinhos de brinquedo deslizam pela fonte.',
        phrases: [
          { fr: "Une glace, s'il vous plaît.", en: 'An ice cream, please.', pt: 'Um sorvete, por favor.' },
          { fr: 'Quelle belle journée !', en: 'What a beautiful day!', pt: 'Que dia lindo!' },
        ],
        quiz: {
          question: 'The palace in the Jardin du Luxembourg today houses the French…?',
          questionPt: 'O palácio no Jardin du Luxembourg abriga hoje o francês…?',
          options: ['Senate', 'National Library', 'President'],
          correct: 'Senate',
          explanation: 'The Palais du Luxembourg has been the seat of the French Senate since 1799.',
          explanationPt: 'O Palais du Luxembourg é a sede do Senado francês desde 1799.',
        },
      },
      {
        id: 'sacre-coeur', name: 'Basilique du Sacré-Cœur', icon: '🎨',
        coords: [48.8867, 2.3431], wikiTitle: 'Sacré-Cœur, Paris',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Sacr%C3%A9_Coeur_Fa%C3%A7ade_1.jpg',
        narrative: 'You climb the steep streets of Montmartre to the white domes of Sacré-Cœur, with all of Paris spread out at your feet.',
        narrativePt: 'Você sobe as ruas íngremes de Montmartre até as cúpulas brancas da Sacré-Cœur, com toda a Paris estendida aos seus pés.',
        phrases: [
          { fr: 'Où est la basilique ?', en: 'Where is the basilica?', pt: 'Onde fica a basílica?' },
          { fr: "C'est par où ?", en: 'Which way is it?', pt: 'Por onde é?' },
        ],
        quiz: {
          question: 'Sacré-Cœur sits on top of which artists\' hill?',
          questionPt: 'A Sacré-Cœur fica no topo de qual colina de artistas?',
          options: ['Montmartre', 'Montparnasse', 'Belleville'],
          correct: 'Montmartre',
          explanation: 'Montmartre was home to Picasso, Dalí and Van Gogh — still full of painters today.',
          explanationPt: 'Montmartre foi lar de Picasso, Dalí e Van Gogh, e ainda hoje está cheia de pintores.',
        },
      },
      {
        id: 'champs-elysees', name: 'Champs-Élysées', icon: '🛍️',
        coords: [48.8698, 2.3079], wikiTitle: 'Champs-Élysées',
        narrative: 'You stroll down the Champs-Élysées, the city\'s grandest avenue — café terraces, flagship stores and lights as far as you can see.',
        narrativePt: 'Você passeia pela Champs-Élysées, a avenida mais grandiosa da cidade, com terraços de café, lojas conceito e luzes até onde a vista alcança.',
        phrases: [
          { fr: "C'est combien ?", en: 'How much is it?', pt: 'Quanto custa?' },
          { fr: 'Je regarde, merci.', en: "I'm just looking, thanks.", pt: 'Só estou olhando, obrigado.' },
        ],
        quiz: {
          question: 'The Champs-Élysées hosts the finish of which annual event?',
          questionPt: 'A Champs-Élysées recebe a chegada de qual evento anual?',
          options: ['Tour de France', 'The Olympics', 'The World Cup'],
          correct: 'Tour de France',
          explanation: 'Every July the Tour de France ends with laps along the Champs-Élysées.',
          explanationPt: 'Todo mês de julho o Tour de France termina com voltas ao longo da Champs-Élysées.',
        },
      },
      {
        id: 'arc-triomphe', name: 'Arc de Triomphe', icon: '🏛️',
        coords: [48.8738, 2.2950], wikiTitle: 'Arc de Triomphe',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Arc_de_Triomphe_de_l%C3%89toile%2C_Paris_7_June_2012.jpg',
        narrative: 'At the top of the avenue stands the Arc de Triomphe, twelve boulevards radiating from it like a star. You climb for one last panorama.',
        narrativePt: 'No topo da avenida está o Arc de Triomphe, com doze bulevares irradiando dele como uma estrela. Você sobe para um último panorama.',
        phrases: [
          { fr: "Un billet pour monter, s'il vous plaît.", en: 'A ticket to go up, please.', pt: 'Um ingresso para subir, por favor.' },
          { fr: "Où est l'ascenseur ?", en: 'Where is the lift?', pt: 'Onde fica o elevador?' },
        ],
        quiz: {
          question: 'Beneath the Arc de Triomphe lies the tomb of the…?',
          questionPt: 'Sob o Arc de Triomphe está o túmulo do…?',
          options: ['Unknown Soldier', 'Napoleon', 'Victor Hugo'],
          correct: 'Unknown Soldier',
          explanation: 'The Tomb of the Unknown Soldier (1920) burns an eternal flame, rekindled every evening.',
          explanationPt: 'O Túmulo do Soldado Desconhecido (1920) mantém uma chama eterna, reacesa todas as noites.',
        },
      },
      {
        id: 'tour-eiffel', name: 'Tour Eiffel', icon: '🗼',
        coords: [48.8584, 2.2945], wikiTitle: 'Eiffel Tower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/MG-Paris-Champ_de_Mars.jpg',
        narrative: 'As night falls you arrive at the Tour Eiffel. On the hour it bursts into sparkling lights — the grand finale of your Paris journey.',
        narrativePt: 'Ao cair da noite você chega à Tour Eiffel. A cada hora ela irrompe em luzes cintilantes, o grande final da sua jornada por Paris.',
        phrases: [
          { fr: 'On monte au sommet ?', en: 'Shall we go up to the top?', pt: 'Vamos subir até o topo?' },
          { fr: 'La vue est magnifique !', en: 'The view is magnificent!', pt: 'A vista é magnífica!' },
          { fr: 'Quelle belle ville !', en: 'What a beautiful city!', pt: 'Que cidade linda!' },
        ],
        lessonId: 'paris-3',
        quiz: {
          question: 'The Eiffel Tower was built for the 1889…?',
          questionPt: 'A Torre Eiffel foi construída para a… de 1889?',
          options: ["World's Fair", 'Olympics', 'Coronation'],
          correct: "World's Fair",
          explanation: 'Built for the 1889 Exposition Universelle, it was meant to be temporary — and never came down.',
          explanationPt: 'Construída para a Exposition Universelle de 1889, era para ser temporária, e nunca foi demolida.',
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
    grammarTopicPt: 'Artigos definidos e indefinidos',
    lessons: [
      {
        id: 'strasbourg-1',
        title: 'At the Hotel',
        titlePt: 'No hotel',
        description: 'Checking in: rooms, reservations, breakfast.',
        descriptionPt: 'Fazendo o check-in: quartos, reservas, café da manhã.',
        steps: [
          { type: 'vocab', word: "l'hôtel", article: 'le', english: 'hotel', portuguese: 'hotel', example: "L'hôtel est près de la gare." },
          { type: 'vocab', word: 'la chambre', article: 'la', english: 'room', portuguese: 'quarto', example: 'La chambre est au premier étage.' },
          { type: 'vocab', word: 'la réservation', article: 'la', english: 'reservation', portuguese: 'reserva', example: "J'ai une réservation." },
          { type: 'vocab', word: 'la clé', article: 'la', english: 'key', portuguese: 'chave', example: 'Voici la clé de la chambre.' },
          { type: 'vocab', word: 'le petit-déjeuner', article: 'le', english: 'breakfast', portuguese: 'café da manhã', example: 'Le petit-déjeuner est inclus ?' },
          { type: 'vocab', word: 'inclus', article: null, english: 'included', portuguese: 'incluído', example: 'Le Wi-Fi est inclus.' },
          { type: 'grammar', title: 'Articles définis et indéfinis', titlePt: 'Artigos definidos e indefinidos', explanation: 'Definite: le (m), la (f), l\' (before vowel), les (pl) = "the". Indefinite: un (m), une (f), des (pl) = "a / some". The article signals gender.', explanationPt: 'Definidos: le (m), la (f), l\' (antes de vogal), les (pl) = "o/a/os/as". Indefinidos: un (m), une (f), des (pl) = "um/uma/uns/umas". O artigo indica o gênero.', examples: ['le train, la chambre, les bagages', "Je voudrais une chambre.", 'Voici la chambre.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which article goes with "chambre" (feminine)?', questionPt: 'Qual artigo combina com "chambre" (feminino)?', options: ['le', 'la', 'les', 'un'], correct: 'la' },
          { type: 'exercise', subtype: 'fill-blank', question: "J'ai ___ réservation au nom de Silva. (a / une)", questionPt: "J'ai ___ réservation au nom de Silva. (a / une)", correct: 'une' },
        ],
      },
      {
        id: 'strasbourg-2',
        title: 'Numbers and Dates',
        titlePt: 'Números e datas',
        description: 'Counting to 100, days of the week, stating dates.',
        descriptionPt: 'Contando até 100, dias da semana, dizendo datas.',
        steps: [
          { type: 'vocab', word: "aujourd'hui", article: null, english: 'today', portuguese: 'hoje', example: "Aujourd'hui, c'est lundi." },
          { type: 'vocab', word: 'demain', article: null, english: 'tomorrow', portuguese: 'amanhã', example: 'Je pars demain.' },
          { type: 'vocab', word: 'la semaine', article: 'la', english: 'week', portuguese: 'semana', example: 'La semaine prochaine.' },
          { type: 'vocab', word: 'lundi', article: null, english: 'Monday', portuguese: 'segunda-feira', example: "J'arrive lundi." },
          { type: 'vocab', word: 'le mois', article: 'le', english: 'month', portuguese: 'mês', example: 'Le mois de mars.' },
          { type: 'vocab', word: "l'année", article: 'la', english: 'year', portuguese: 'ano', example: 'Bonne année !' },
          { type: 'grammar', title: 'Les nombres 70–90', titlePt: 'Os números 70–90', explanation: 'French counting gets tricky: 70 = soixante-dix ("sixty-ten"), 80 = quatre-vingts ("four-twenties"), 90 = quatre-vingt-dix ("four-twenty-ten").', explanationPt: 'A contagem em francês fica complicada: 70 = soixante-dix ("sessenta-dez"), 80 = quatre-vingts ("quatro-vintes"), 90 = quatre-vingt-dix ("quatro-vinte-dez").', examples: ['soixante-dix (70)', 'quatre-vingts (80)', 'quatre-vingt-dix (90)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "quatre-vingts"?', questionPt: 'O que é "quatre-vingts"?', options: ['70', '80', '90', '60'], correct: '80' },
          { type: 'exercise', subtype: 'fill-blank', question: "Nous sommes ___ : c'est lundi. (today)", questionPt: "Nous sommes ___ : c'est lundi. (today)", correct: "aujourd'hui" },
        ],
      },
    ],
    descriptionEn:
      "The TGV speeds east to Strasbourg, capital of Alsace, where signs appear in both French " +
      "and German. The traveller settles into a hotel near the Grande Île and has to handle the " +
      "booking in French.",
    descriptionPt:
      "O TGV corre para o leste até Strasbourg, capital da Alsácia, onde as placas aparecem em francês " +
      "e em alemão. O viajante se instala em um hotel perto da Grande Île e precisa cuidar da " +
      "reserva em francês.",
    places: [
      {
        id: 'str-gare', name: 'Gare de Strasbourg', icon: '🚆',
        coords: [48.5851, 7.7341], wikiTitle: 'Gare de Strasbourg',
        narrative: 'The TGV glides into Strasbourg under the station\'s great glass dome. Alsace begins here — half French, half German.',
        narrativePt: 'O TGV desliza para dentro de Strasbourg sob a grande cúpula de vidro da estação. A Alsácia começa aqui: metade francesa, metade alemã.',
        phrases: [
          { fr: 'Le train pour Strasbourg ?', en: 'The train to Strasbourg?', pt: 'O trem para Strasbourg?' },
          { fr: 'Quel quai, s\'il vous plaît ?', en: 'Which platform, please?', pt: 'Qual plataforma, por favor?' },
        ],
        quiz: { question: 'Alsace sits on the border with which country?', questionPt: 'A Alsácia fica na fronteira com qual país?', options: ['Germany', 'Spain', 'Italy'], correct: 'Germany', explanation: 'Alsace borders Germany — which is why Strasbourg is bilingual French/German.', explanationPt: 'A Alsácia faz fronteira com a Alemanha, e é por isso que Strasbourg é bilíngue francês/alemão.' },
      },
      {
        id: 'str-grande-ile', name: 'Hôtel sur la Grande Île', icon: '🏨',
        coords: [48.5817, 7.7458], wikiTitle: 'Grande Île, Strasbourg',
        narrative: 'You check into a small hotel on the Grande Île, the river-wrapped historic heart of the city.',
        narrativePt: 'Você faz o check-in em um pequeno hotel na Grande Île, o coração histórico da cidade cercado pelo rio.',
        phrases: [
          { fr: "Bonjour, j'ai une réservation.", en: 'Hello, I have a reservation.', pt: 'Olá, eu tenho uma reserva.' },
          { fr: 'La clé, s\'il vous plaît.', en: 'The key, please.', pt: 'A chave, por favor.' },
        ],
        lessonId: 'strasbourg-1',
        quiz: { question: 'The Grande Île historic centre is listed as a…?', questionPt: 'O centro histórico da Grande Île está classificado como um…?', options: ['UNESCO World Heritage Site', 'National park', 'Ski resort'], correct: 'UNESCO World Heritage Site', explanation: 'In 1988 the Grande Île became the first entire city centre listed by UNESCO.', explanationPt: 'Em 1988, a Grande Île se tornou o primeiro centro urbano inteiro a ser classificado pela UNESCO.' },
      },
      {
        id: 'str-cathedrale', name: 'Cathédrale Notre-Dame', icon: '⛪',
        coords: [48.5819, 7.7510], wikiTitle: 'Strasbourg Cathedral',
        narrative: 'Inside the cathedral, the famous astronomical clock chimes — a perfect moment to master numbers and dates.',
        narrativePt: 'Dentro da catedral, o famoso relógio astronômico badala: um momento perfeito para dominar números e datas.',
        phrases: [
          { fr: 'Quelle heure est-il ?', en: 'What time is it?', pt: 'Que horas são?' },
          { fr: "C'est ouvert aujourd'hui ?", en: 'Is it open today?', pt: 'Está aberto hoje?' },
        ],
        lessonId: 'strasbourg-2',
        quiz: { question: 'Strasbourg Cathedral was the world\'s tallest building for over 200 years until the…?', questionPt: 'A Catedral de Strasbourg foi o edifício mais alto do mundo por mais de 200 anos até o…?', options: ['19th century', '15th century', '21st century'], correct: '19th century', explanation: 'At 142 m it held the record from 1647 to 1874.', explanationPt: 'Com 142 m, ela deteve o recorde de 1647 a 1874.' },
      },
      {
        id: 'str-petite-france', name: 'La Petite France', icon: '🏘️',
        coords: [48.5800, 7.7400], wikiTitle: 'Petite France, Strasbourg',
        narrative: 'You wander Petite France: half-timbered houses leaning over canals, flowers on every windowsill.',
        narrativePt: 'Você passeia pela Petite France: casas de enxaimel debruçadas sobre os canais, flores em cada peitoril de janela.',
        phrases: [
          { fr: 'C\'est par ici ?', en: 'Is it this way?', pt: 'É por aqui?' },
          { fr: 'Quel joli quartier !', en: 'What a pretty district!', pt: 'Que bairro bonito!' },
        ],
        quiz: { question: 'Petite France was historically the district of the…?', questionPt: 'Historicamente, a Petite France era o bairro dos…?', options: ['Tanners', 'Bankers', 'Sailors'], correct: 'Tanners', explanation: 'Tanners, millers and fishermen worked here — the canals powered their trades.', explanationPt: 'Curtidores, moleiros e pescadores trabalhavam aqui: os canais movimentavam seus ofícios.' },
      },
      {
        id: 'str-place-kleber', name: 'Place Kléber', icon: '🎄',
        coords: [48.5833, 7.7458], wikiTitle: 'Place Kléber',
        narrative: 'You finish on Place Kléber, the city\'s grand main square — and in winter, the heart of its legendary Christmas market.',
        narrativePt: 'Você termina na Place Kléber, a grande praça principal da cidade e, no inverno, o coração de seu lendário mercado de Natal.',
        phrases: [
          { fr: 'Un vin chaud, s\'il vous plaît.', en: 'A mulled wine, please.', pt: 'Um vinho quente, por favor.' },
          { fr: 'Joyeux Noël !', en: 'Merry Christmas!', pt: 'Feliz Natal!' },
        ],
        quiz: { question: 'Strasbourg hosts one of Europe\'s oldest…?', questionPt: 'Strasbourg sedia um dos mais antigos…?', options: ['Christmas markets', 'Film festivals', 'Marathons'], correct: 'Christmas markets', explanation: 'The Christkindelsmärik dates back to 1570 — Strasbourg calls itself the "Capital of Christmas".', explanationPt: 'O Christkindelsmärik remonta a 1570; Strasbourg se autodenomina a "Capital do Natal".' },
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
    grammarTopicPt: 'Verbos em -er no presente',
    lessons: [
      {
        id: 'lyon-1',
        title: 'At the Bouchon',
        titlePt: 'No Bouchon',
        description: 'Ordering a meal: starters, mains, the bill.',
        descriptionPt: 'Pedir uma refeição: entradas, pratos principais, a conta.',
        steps: [
          { type: 'vocab', word: 'le restaurant', article: 'le', english: 'restaurant', portuguese: 'restaurante', example: 'Le restaurant est complet.' },
          { type: 'vocab', word: 'la carte', article: 'la', english: 'menu', portuguese: 'cardápio', example: 'La carte, s\'il vous plaît ?' },
          { type: 'vocab', word: "l'entrée", article: 'la', english: 'starter', portuguese: 'entrada', example: "Je prends une entrée." },
          { type: 'vocab', word: 'le plat principal', article: 'le', english: 'main course', portuguese: 'prato principal', example: 'Le plat principal est délicieux.' },
          { type: 'vocab', word: "l'addition", article: 'la', english: 'the bill', portuguese: 'a conta', example: "L'addition, s'il vous plaît !" },
          { type: 'vocab', word: 'manger', article: null, english: 'to eat', portuguese: 'comer', example: 'Je mange une quenelle.' },
          { type: 'grammar', title: 'Verbes en -er au présent', titlePt: 'Verbos em -er no presente', explanation: 'Most French verbs end in -er. Remove -er and add: -e, -es, -e, -ons, -ez, -ent. Only -ons and -ez are audible.', explanationPt: 'A maioria dos verbos franceses termina em -er. Tire o -er e acrescente: -e, -es, -e, -ons, -ez, -ent. Só o -ons e o -ez são audíveis.', examples: ['je mange, tu manges, il mange', 'nous mangeons, vous mangez', 'ils mangent'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "le plat principal"?', questionPt: 'O que é "le plat principal"?', options: ['starter', 'main course', 'dessert', 'the bill'], correct: 'main course' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Nous ___ ensemble. (manger: we eat)', questionPt: 'Nous ___ ensemble. (manger: nós comemos)', correct: 'mangeons' },
        ],
      },
      {
        id: 'lyon-2',
        title: 'Drinks and Café Life',
        titlePt: 'Bebidas e a vida de café',
        description: 'Ordering coffee, water, wine; paying.',
        descriptionPt: 'Pedir café, água, vinho; pagar.',
        steps: [
          { type: 'vocab', word: 'le café', article: 'le', english: 'coffee / café', portuguese: 'café (bebida) / café (lugar)', example: 'Un café, s\'il vous plaît.' },
          { type: 'vocab', word: "l'eau", article: 'la', english: 'water', portuguese: 'água', example: "Une carafe d'eau, s'il vous plaît." },
          { type: 'vocab', word: 'le thé', article: 'le', english: 'tea', portuguese: 'chá', example: 'Je voudrais un thé.' },
          { type: 'vocab', word: 'le vin', article: 'le', english: 'wine', portuguese: 'vinho', example: 'Un verre de vin rouge.' },
          { type: 'vocab', word: 'la terrasse', article: 'la', english: 'terrace', portuguese: 'terraço', example: 'On s\'assoit en terrasse ?' },
          { type: 'vocab', word: 'aimer', article: null, english: 'to like / love', portuguese: 'gostar / amar', example: "J'aime le café." },
          { type: 'grammar', title: 'aimer + infinitif', titlePt: 'aimer + infinitivo', explanation: 'aimer means "to like". Followed by an infinitive, it means "to like doing something".', explanationPt: 'aimer significa "gostar". Seguido de um infinitivo, quer dizer "gostar de fazer algo".', examples: ["J'aime manger au restaurant.", 'Elle aime boire du café.', 'Nous aimons voyager.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "water"?', questionPt: 'Como se diz "água"?', options: ['le vin', "l'eau", 'le thé', 'le café'], correct: "l'eau" },
          { type: 'exercise', subtype: 'fill-blank', question: "J'___ voyager. (aimer: I like)", questionPt: "J'___ voyager. (aimer: eu gosto)", correct: 'aime' },
        ],
      },
    ],
    descriptionEn:
      "Heading south by TGV to Lyon, France's gastronomic capital. The traveller discovers the " +
      "bouchons — traditional Lyonnais restaurants — and has to order a first real French meal alone.",
    descriptionPt:
      "Rumo ao sul de TGV até Lyon, a capital gastronômica da França. O viajante descobre os " +
      "bouchons, restaurantes tradicionais lioneses, e precisa pedir sua primeira refeição francesa de verdade sozinho.",
    places: [
      {
        id: 'lyon-bellecour', name: 'Place Bellecour', icon: '🐎',
        coords: [45.7578, 4.8324], wikiTitle: 'Place Bellecour',
        narrative: 'You arrive on Place Bellecour, a vast open square with a statue of Louis XIV on horseback at its centre.',
        narrativePt: 'Você chega à Place Bellecour, uma praça ampla e aberta com uma estátua de Luís XIV a cavalo no centro.',
        phrases: [
          { fr: 'Où est la statue ?', en: 'Where is the statue?', pt: 'Onde fica a estátua?' },
          { fr: 'On se retrouve ici ?', en: 'Shall we meet here?', pt: 'A gente se encontra aqui?' },
        ],
        quiz: { question: 'Place Bellecour is one of Europe\'s largest…?', questionPt: 'A Place Bellecour é uma das maiores da Europa em quê?', options: ['Pedestrian squares', 'Train stations', 'Vineyards'], correct: 'Pedestrian squares', explanation: 'At ~62,000 m² it is among the biggest pedestrian squares in Europe.', explanationPt: 'Com cerca de 62.000 m², está entre as maiores praças para pedestres da Europa.' },
      },
      {
        id: 'lyon-vieux', name: 'Vieux Lyon', icon: '🏘️',
        coords: [45.7620, 4.8275], wikiTitle: 'Vieux Lyon',
        narrative: 'You lose yourself in Vieux Lyon, a Renaissance maze threaded with secret covered passageways.',
        narrativePt: 'Você se perde na Vieux Lyon, um labirinto renascentista entremeado de passagens cobertas secretas.',
        phrases: [
          { fr: 'Où est la traboule ?', en: 'Where is the traboule?', pt: 'Onde fica a traboule?' },
          { fr: 'C\'est magnifique !', en: "It's magnificent!", pt: 'É magnífico!' },
        ],
        quiz: { question: 'Vieux Lyon is famous for hidden passageways called…?', questionPt: 'A Vieux Lyon é famosa por passagens escondidas chamadas de quê?', options: ['Traboules', 'Bouchons', 'Quenelles'], correct: 'Traboules', explanation: 'Traboules are covered passages cutting through buildings — once used by silk workers.', explanationPt: 'As traboules são passagens cobertas que atravessam os prédios, antes usadas pelos trabalhadores da seda.' },
      },
      {
        id: 'lyon-bouchon', name: 'Un bouchon lyonnais', icon: '🍽️',
        coords: [45.7640, 4.8270], wikiTitle: 'Lyonnaise cuisine',
        narrative: 'You sit down in a bouchon, a cosy traditional restaurant, to order your first proper Lyonnais meal.',
        narrativePt: 'Você se senta em um bouchon, um restaurante tradicional aconchegante, para pedir sua primeira refeição lionesa de verdade.',
        phrases: [
          { fr: 'Une table pour deux.', en: 'A table for two.', pt: 'Uma mesa para dois.' },
          { fr: 'La carte, s\'il vous plaît.', en: 'The menu, please.', pt: 'O cardápio, por favor.' },
        ],
        lessonId: 'lyon-1',
        quiz: { question: 'In Lyon, a "bouchon" is a traditional…?', questionPt: 'Em Lyon, um "bouchon" é um tradicional o quê?', options: ['Restaurant', 'Wine', 'Hat'], correct: 'Restaurant', explanation: 'A bouchon is a small Lyonnais eatery serving hearty local dishes.', explanationPt: 'Um bouchon é um pequeno restaurante lionês que serve pratos locais fartos.' },
      },
      {
        id: 'lyon-croix-rousse', name: 'Café à la Croix-Rousse', icon: '☕',
        coords: [45.7740, 4.8320], wikiTitle: 'Croix-Rousse',
        narrative: 'On the Croix-Rousse hill you take a coffee on a terrace, in the old quarter of the silk weavers.',
        narrativePt: 'Na colina da Croix-Rousse, você toma um café num terraço, no antigo bairro dos tecelões de seda.',
        phrases: [
          { fr: 'Un café en terrasse.', en: 'A coffee on the terrace.', pt: 'Um café no terraço.' },
          { fr: "J'aime cette ville.", en: 'I love this city.', pt: 'Eu amo esta cidade.' },
        ],
        lessonId: 'lyon-2',
        quiz: { question: 'The Croix-Rousse hill was historically home to silk…?', questionPt: 'A colina da Croix-Rousse foi historicamente lar de quê ligado à seda?', options: ['Weavers', 'Miners', 'Bakers'], correct: 'Weavers', explanation: 'The "canuts" (silk weavers) filled this hill with their looms in the 1800s.', explanationPt: 'Os "canuts" (tecelões de seda) encheram esta colina com seus teares no século XIX.' },
      },
      {
        id: 'lyon-fourviere', name: 'Basilique de Fourvière', icon: '⛪',
        coords: [45.7622, 4.8222], wikiTitle: 'Basilica of Notre-Dame de Fourvière',
        narrative: 'You climb to the white basilica of Fourvière, watching all of Lyon unfold below you.',
        narrativePt: 'Você sobe até a basílica branca de Fourvière, vendo toda a cidade de Lyon se estender abaixo de você.',
        phrases: [
          { fr: 'Quelle belle vue !', en: 'What a beautiful view!', pt: 'Que vista linda!' },
          { fr: 'On monte à pied ?', en: 'Shall we walk up?', pt: 'A gente sobe a pé?' },
        ],
        quiz: { question: 'Fourvière hill is nicknamed the hill that…?', questionPt: 'A colina de Fourvière é apelidada de a colina que faz o quê?', options: ['Prays', 'Sleeps', 'Sings'], correct: 'Prays', explanation: 'Fourvière "qui prie" (that prays) vs the Croix-Rousse "qui travaille" (that works).', explanationPt: 'Fourvière "qui prie" (que reza) em contraste com a Croix-Rousse "qui travaille" (que trabalha).' },
      },
      {
        id: 'lyon-tete-or', name: "Parc de la Tête d'Or", icon: '🌳',
        coords: [45.7772, 4.8550], wikiTitle: "Parc de la Tête d'Or",
        narrative: 'You end with a stroll in the Parc de la Tête d\'Or, by the lake where the two rivers of Lyon nearly meet.',
        narrativePt: 'Você termina com um passeio no Parc de la Tête d\'Or, à beira do lago onde os dois rios de Lyon quase se encontram.',
        phrases: [
          { fr: 'On se promène ?', en: 'Shall we take a walk?', pt: 'A gente dá uma caminhada?' },
          { fr: 'Il fait beau aujourd\'hui.', en: 'The weather is nice today.', pt: 'O tempo está bom hoje.' },
        ],
        quiz: { question: 'Lyon lies at the meeting of the Rhône and the…?', questionPt: 'Lyon fica no encontro do Rhône com o quê?', options: ['Saône', 'Seine', 'Loire'], correct: 'Saône', explanation: 'Lyon sits on the confluence of the Rhône and the Saône.', explanationPt: 'Lyon fica na confluência do Rhône e do Saône.' },
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
    grammarTopicPt: 'Concordância dos adjetivos',
    lessons: [
      {
        id: 'nice-1',
        title: 'Weather and Colors',
        titlePt: 'Clima e cores',
        description: 'Talking about the weather; basic colors.',
        descriptionPt: 'Falar sobre o clima; cores básicas.',
        steps: [
          { type: 'vocab', word: 'le soleil', article: 'le', english: 'sun', portuguese: 'sol', example: 'Il y a du soleil.' },
          { type: 'vocab', word: 'il fait beau', article: null, english: 'the weather is nice', portuguese: 'o tempo está bom', example: "Il fait beau aujourd'hui !" },
          { type: 'vocab', word: 'il pleut', article: null, english: 'it is raining', portuguese: 'está chovendo', example: 'Il pleut ce matin.' },
          { type: 'vocab', word: 'la plage', article: 'la', english: 'beach', portuguese: 'praia', example: "J'adore la plage !" },
          { type: 'vocab', word: 'la mer', article: 'la', english: 'sea', portuguese: 'mar', example: 'La mer est bleue.' },
          { type: 'vocab', word: 'bleu', article: null, english: 'blue', portuguese: 'azul', example: 'Le ciel est bleu.' },
          { type: 'grammar', title: "Accord des adjectifs (genre)", titlePt: 'Concordância dos adjetivos (gênero)', explanation: 'Adjectives agree in gender. Usually add -e for feminine: petit → petite. Adjectives already ending in -e (rouge) do not change.', explanationPt: 'Os adjetivos concordam em gênero. Normalmente acrescenta-se -e no feminino: petit → petite. Os adjetivos que já terminam em -e (rouge) não mudam.', examples: ['un ciel bleu / une mer bleue', 'un petit café / une petite plage', 'un sac rouge / une voiture rouge'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "it is raining"?', questionPt: 'Como se diz "está chovendo"?', options: ['il fait beau', 'il pleut', 'le soleil', 'la mer'], correct: 'il pleut' },
          { type: 'exercise', subtype: 'fill-blank', question: 'La mer est ___ . (blue, feminine)', questionPt: 'La mer est ___ . (azul, feminino)', correct: 'bleue' },
        ],
      },
      {
        id: 'nice-2',
        title: 'Describing Things',
        titlePt: 'Descrevendo as coisas',
        description: 'Adjectives for size, beauty, price; placement.',
        descriptionPt: 'Adjetivos de tamanho, beleza, preço; posição.',
        steps: [
          { type: 'vocab', word: 'grand(e)', article: null, english: 'big / tall', portuguese: 'grande / alto', example: 'La chambre est grande.' },
          { type: 'vocab', word: 'petit(e)', article: null, english: 'small', portuguese: 'pequeno', example: 'Un petit café.' },
          { type: 'vocab', word: 'beau / belle', article: null, english: 'beautiful', portuguese: 'bonito', example: 'Nice est une belle ville.' },
          { type: 'vocab', word: 'cher / chère', article: null, english: 'expensive', portuguese: 'caro', example: 'Ce restaurant est cher.' },
          { type: 'vocab', word: 'magnifique', article: null, english: 'magnificent', portuguese: 'magnífico', example: "C'est magnifique !" },
          { type: 'vocab', word: 'délicieux / délicieuse', article: null, english: 'delicious', portuguese: 'delicioso', example: 'Le repas est délicieux.' },
          { type: 'grammar', title: "Place de l'adjectif (BAGS)", titlePt: 'Posição do adjetivo (BAGS)', explanation: 'Most adjectives go AFTER the noun. But BAGS adjectives (Beauty, Age, Goodness, Size) go BEFORE: beau, vieux, bon, grand, petit.', explanationPt: 'A maioria dos adjetivos vem DEPOIS do substantivo. Mas os adjetivos BAGS (Beleza, Idade, Bondade, Tamanho) vêm ANTES: beau, vieux, bon, grand, petit.', examples: ['une mer bleue (after)', 'une belle plage (before)', 'un petit café (before)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Where does "belle" go?', questionPt: 'Onde fica "belle"?', options: ['after the noun', 'before the noun', 'either way', 'it never changes'], correct: 'before the noun' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Nice est une ___ ville. (beautiful, feminine)', questionPt: 'Nice est une ___ ville. (bonita, feminino)', correct: 'belle' },
        ],
      },
    ],
    descriptionEn:
      "On to the Côte d'Azur. Nice is vibrant, colourful and sunny. The traveller spends a day on " +
      "the Promenade des Anglais and visits the flower market of Cours Saleya. The challenge: " +
      "describing the world around you.",
    descriptionPt:
      "Rumo à Côte d'Azur. Nice é vibrante, colorida e ensolarada. O viajante passa um dia na " +
      "Promenade des Anglais e visita o mercado de flores do Cours Saleya. O desafio: " +
      "descrever o mundo ao seu redor.",
    places: [
      {
        id: 'nice-promenade', name: 'Promenade des Anglais', icon: '🌊',
        coords: [43.6950, 7.2655], wikiTitle: 'Promenade des Anglais',
        narrative: 'You arrive on the Promenade des Anglais, the long seafront walk curving along the bright blue bay.',
        narrativePt: 'Você chega à Promenade des Anglais, o longo calçadão à beira-mar que se curva ao longo da baía de um azul intenso.',
        phrases: [
          { fr: 'Il fait beau !', en: 'The weather is nice!', pt: 'O tempo está bom!' },
          { fr: 'La mer est bleue.', en: 'The sea is blue.', pt: 'O mar está azul.' },
        ],
        lessonId: 'nice-1',
        quiz: { question: 'The Promenade des Anglais runs along the Baie des…?', questionPt: 'A Promenade des Anglais margeia a Baie des…?', options: ['Anges', 'Rois', 'Fleurs'], correct: 'Anges', explanation: 'It follows the Baie des Anges — the "Bay of Angels".', explanationPt: 'Ela acompanha a Baie des Anges, a "Baía dos Anjos".' },
      },
      {
        id: 'nice-cours-saleya', name: 'Cours Saleya', icon: '💐',
        coords: [43.6953, 7.2758], image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Nizza.jpg',
        narrative: 'In the Cours Saleya the morning market overflows with flowers, fruit and colour — perfect for practising descriptions.',
        narrativePt: 'No Cours Saleya, o mercado da manhã transborda de flores, frutas e cores, perfeito para praticar descrições.',
        phrases: [
          { fr: 'Ces fleurs sont belles.', en: 'These flowers are beautiful.', pt: 'Estas flores são lindas.' },
          { fr: 'C\'est combien le bouquet ?', en: 'How much is the bunch?', pt: 'Quanto custa o buquê?' },
        ],
        lessonId: 'nice-2',
        quiz: { question: 'Cours Saleya is famous for its market of…?', questionPt: 'O Cours Saleya é famoso pelo seu mercado de…?', options: ['Flowers', 'Cars', 'Books'], correct: 'Flowers', explanation: 'Its flower market is a Nice institution, running most mornings.', explanationPt: 'Seu mercado de flores é uma instituição de Nice, funcionando quase todas as manhãs.' },
      },
      {
        id: 'nice-vieux', name: 'Vieux Nice', icon: '🏘️',
        coords: [43.6961, 7.2756], image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Vue_du_Vieux-Nice.jpg',
        narrative: 'You dive into the old town\'s warm-coloured alleys, stopping for a scoop of gelato in the shade.',
        narrativePt: 'Você mergulha nas ruelas de cores quentes da cidade velha, parando para uma bola de gelato na sombra.',
        phrases: [
          { fr: 'Une glace, s\'il vous plaît.', en: 'An ice cream, please.', pt: 'Um sorvete, por favor.' },
          { fr: 'C\'est par où ?', en: 'Which way is it?', pt: 'Para que lado fica?' },
        ],
        quiz: { question: 'Until 1860, Nice belonged to the Kingdom of…?', questionPt: 'Até 1860, Nice pertencia ao Reino de…?', options: ['Sardinia', 'Spain', 'England'], correct: 'Sardinia', explanation: 'Nice was part of the Kingdom of Sardinia (House of Savoy) until it joined France in 1860.', explanationPt: 'Nice fazia parte do Reino da Sardenha (Casa de Saboia) até se unir à França em 1860.' },
      },
      {
        id: 'nice-chateau', name: 'Colline du Château', icon: '🏰',
        coords: [43.6947, 7.2806], image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/CollineDuChateau_NiceFrance2022.png',
        narrative: 'You climb Castle Hill for the postcard view: terracotta roofs, the bay, and the sea stretching out forever.',
        narrativePt: 'Você sobe a Colina do Castelo para ver a vista de cartão-postal: telhados de terracota, a baía e o mar se estendendo até o infinito.',
        phrases: [
          { fr: 'On monte en haut ?', en: 'Shall we go up to the top?', pt: 'Vamos subir até o topo?' },
          { fr: 'Quelle vue magnifique !', en: 'What a magnificent view!', pt: 'Que vista magnífica!' },
        ],
        quiz: { question: 'There is no castle left on Castle Hill — it was demolished on the orders of…?', questionPt: 'Não resta nenhum castelo na Colina do Castelo, ele foi demolido por ordem de…?', options: ['Louis XIV', 'Napoleon', 'Julius Caesar'], correct: 'Louis XIV', explanation: 'Louis XIV had the fortress razed in 1706; only the panoramic park remains.', explanationPt: 'Luís XIV mandou arrasar a fortaleza em 1706; só restou o parque panorâmico.' },
      },
      {
        id: 'nice-massena', name: 'Place Masséna', icon: '🟥',
        coords: [43.6976, 7.2713], wikiTitle: 'Place Masséna',
        narrative: 'You end the day on Place Masséna, its red façades glowing as the evening lights come on.',
        narrativePt: 'Você termina o dia na Place Masséna, com suas fachadas vermelhas brilhando enquanto as luzes da noite se acendem.',
        phrases: [
          { fr: 'On se promène ce soir ?', en: 'Shall we walk tonight?', pt: 'Vamos passear hoje à noite?' },
          { fr: "J'adore Nice !", en: 'I love Nice!', pt: 'Eu adoro Nice!' },
        ],
        quiz: { question: 'Place Masséna\'s pavement has a checkerboard pattern in red and…?', questionPt: 'O piso da Place Masséna tem um padrão xadrez em vermelho e…?', options: ['White', 'Blue', 'Green'], correct: 'White', explanation: 'Its bold red-and-white chequered paving is the city\'s signature look.', explanationPt: 'Seu marcante piso xadrez vermelho e branco é a marca registrada da cidade.' },
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
    grammarTopicPt: 'Artigos partitivos + negação',
    lessons: [
      {
        id: 'marseille-1',
        title: 'At the Market',
        titlePt: 'No mercado',
        description: 'Buying food: quantities, prices, asking for things.',
        descriptionPt: 'Comprar comida: quantidades, preços, pedir coisas.',
        steps: [
          { type: 'vocab', word: 'le marché', article: 'le', english: 'market', portuguese: 'mercado', example: 'Je vais au marché.' },
          { type: 'vocab', word: 'le poisson', article: 'le', english: 'fish', portuguese: 'peixe', example: 'Le poisson est frais.' },
          { type: 'vocab', word: 'les fruits', article: 'les', english: 'fruit', portuguese: 'frutas', example: "J'achète des fruits." },
          { type: 'vocab', word: 'la baguette', article: 'la', english: 'baguette', portuguese: 'baguete', example: 'Une baguette, s\'il vous plaît.' },
          { type: 'vocab', word: 'le kilo', article: 'le', english: 'kilogram', portuguese: 'quilo', example: 'Un kilo de tomates.' },
          { type: 'vocab', word: 'combien', article: null, english: 'how much', portuguese: 'quanto', example: "C'est combien ?" },
          { type: 'grammar', title: 'Articles partitifs (du / de la / des)', titlePt: 'Artigos partitivos (du / de la / des)', explanation: 'Use partitives for "some" of something: du (m), de la (f), de l\' (before vowel), des (pl). After negation they all become "de".', explanationPt: 'Use os partitivos para dizer "um pouco de" algo: du (m), de la (f), de l\' (antes de vogal), des (pl). Depois da negação, todos viram "de".', examples: ['Je mange du pain.', "Je bois de l'eau.", 'Il achète des fruits.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which partitive goes with "pain" (m)?', questionPt: 'Qual partitivo combina com "pain" (m)?', options: ['de la', 'du', 'des', "de l'"], correct: 'du' },
          { type: 'exercise', subtype: 'fill-blank', question: "Je voudrais un ___ de tomates. (kilogram)", questionPt: "Je voudrais un ___ de tomates. (quilo)", correct: 'kilo' },
        ],
      },
      {
        id: 'marseille-2',
        title: 'Prices and Negation',
        titlePt: 'Preços e negação',
        description: 'Money, paying, and saying "not / no more".',
        descriptionPt: 'Dinheiro, pagar e dizer "não / não mais".',
        steps: [
          { type: 'vocab', word: "l'euro", article: 'le', english: 'euro', portuguese: 'euro', example: "Ça coûte cinq euros." },
          { type: 'vocab', word: 'la monnaie', article: 'la', english: 'change', portuguese: 'troco', example: "Je n'ai pas de monnaie." },
          { type: 'vocab', word: 'la carte bancaire', article: 'la', english: 'bank card', portuguese: 'cartão bancário', example: 'On peut payer par carte ?' },
          { type: 'vocab', word: 'acheter', article: null, english: 'to buy', portuguese: 'comprar', example: "J'achète du fromage." },
          { type: 'vocab', word: 'ne…pas', article: null, english: 'not', portuguese: 'não', example: 'Je ne parle pas français.' },
          { type: 'vocab', word: 'ne…plus', article: null, english: 'no more', portuguese: 'não mais', example: "Il n'y a plus de pain." },
          { type: 'grammar', title: 'La négation (ne…pas)', titlePt: 'A negação (ne…pas)', explanation: 'Negation wraps the verb: ne + verb + pas. ne becomes n\' before a vowel. After ne…pas, du/de la/un/une/des become "de".', explanationPt: 'A negação envolve o verbo: ne + verbo + pas. ne vira n\' antes de vogal. Depois de ne…pas, du/de la/un/une/des viram "de".', examples: ['Je ne parle pas français.', "Il n'a pas de billet.", 'Elle ne mange pas de viande.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "no more"?', questionPt: 'Como se diz "não mais"?', options: ['ne…pas', 'ne…plus', 'ne…jamais', 'ne…rien'], correct: 'ne…plus' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ne parle ___ français. (not)', questionPt: 'Je ne parle ___ français. (não)', correct: 'pas' },
        ],
      },
    ],
    descriptionEn:
      "A short train ride to Marseille. The traveller visits the Old Port, buys fish straight off " +
      "the quays and wanders the Noailles market. A first real shopping challenge in French.",
    descriptionPt:
      "Uma curta viagem de trem até Marselha. O viajante visita o Porto Velho, compra peixe direto " +
      "dos cais e passeia pelo mercado de Noailles. Um primeiro desafio de verdade fazendo compras em francês.",
    places: [
      {
        id: 'mrs-vieux-port', name: 'Le Vieux-Port', icon: '⚓',
        coords: [43.2951, 5.3740], wikiTitle: 'Old Port of Marseille',
        narrative: 'You reach the Vieux-Port, where fishermen still sell the morning\'s catch straight from their boats.',
        narrativePt: 'Você chega ao Vieux-Port, onde os pescadores ainda vendem a pesca da manhã direto de seus barcos.',
        phrases: [
          { fr: 'Le poisson est frais ?', en: 'Is the fish fresh?', pt: 'O peixe está fresco?' },
          { fr: 'Un kilo, s\'il vous plaît.', en: 'A kilo, please.', pt: 'Um quilo, por favor.' },
        ],
        lessonId: 'marseille-1',
        quiz: { question: 'Marseille is France\'s oldest city, founded by the…?', questionPt: 'Marselha é a cidade mais antiga da França, fundada pelos…?', options: ['Greeks', 'Vikings', 'Egyptians'], correct: 'Greeks', explanation: 'Greek sailors from Phocaea founded Massalia around 600 BC.', explanationPt: 'Marinheiros gregos de Foceia fundaram Massalia por volta de 600 a.C.' },
      },
      {
        id: 'mrs-noailles', name: 'Marché de Noailles', icon: '🛒',
        coords: [43.2964, 5.3793], image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Marseille_Canebi%C3%A8re_and_Palais_de_la_Bourse.jpg',
        narrative: 'Just off the Canebière, the Noailles market is a riot of spices and accents — time to talk prices.',
        narrativePt: 'Bem ao lado da Canebière, o mercado de Noailles é uma explosão de especiarias e sotaques: hora de falar de preços.',
        phrases: [
          { fr: 'C\'est combien le kilo ?', en: 'How much per kilo?', pt: 'Quanto custa o quilo?' },
          { fr: 'Je voudrais des épices.', en: 'I would like some spices.', pt: 'Eu gostaria de algumas especiarias.' },
        ],
        lessonId: 'marseille-2',
        quiz: { question: 'The Noailles market is nicknamed the "belly of Marseille" and is famous for its…?', questionPt: 'O mercado de Noailles é apelidado de "barriga de Marselha" e é famoso por suas…?', options: ['Spices', 'Diamonds', 'Books'], correct: 'Spices', explanation: 'Its stalls of spices and produce reflect the city\'s Mediterranean melting pot.', explanationPt: 'Suas bancas de especiarias e hortifrúti refletem o caldeirão mediterrâneo da cidade.' },
      },
      {
        id: 'mrs-panier', name: 'Le Panier', icon: '🏘️',
        coords: [43.2980, 5.3660], image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Rue_Panier_Marseille.jpg',
        narrative: 'You climb into Le Panier, the steep old quarter of painted lanes, street art and washing lines.',
        narrativePt: 'Você sobe até Le Panier, o antigo bairro íngreme de ruelas pintadas, arte de rua e varais de roupa.',
        phrases: [
          { fr: 'C\'est joli ici !', en: "It's pretty here!", pt: 'Que bonito aqui!' },
          { fr: 'On se perd un peu.', en: "We're getting a bit lost.", pt: 'A gente está se perdendo um pouco.' },
        ],
        quiz: { question: 'Le Panier is Marseille\'s…?', questionPt: 'Le Panier é o… de Marselha?', options: ['Oldest district', 'Newest mall', 'Main airport'], correct: 'Oldest district', explanation: 'Le Panier sits where the Greeks first settled — the city\'s oldest neighbourhood.', explanationPt: 'Le Panier fica onde os gregos se estabeleceram primeiro: o bairro mais antigo da cidade.' },
      },
      {
        id: 'mrs-garde', name: 'Notre-Dame de la Garde', icon: '⛪',
        coords: [43.2840, 5.3712], wikiTitle: 'Notre-Dame de la Garde',
        narrative: 'You climb to Notre-Dame de la Garde, the golden Madonna watching over the whole city and sea.',
        narrativePt: 'Você sobe até Notre-Dame de la Garde, a Madona dourada que vigia toda a cidade e o mar.',
        phrases: [
          { fr: 'On monte à la basilique ?', en: 'Shall we go up to the basilica?', pt: 'Vamos subir até a basílica?' },
          { fr: 'Quelle belle vue sur la mer !', en: 'What a beautiful sea view!', pt: 'Que vista linda para o mar!' },
        ],
        quiz: { question: 'Locals affectionately call Notre-Dame de la Garde "la Bonne…"?', questionPt: 'Os moradores chamam carinhosamente Notre-Dame de la Garde de "la Bonne…"?', options: ['Mère', 'Route', 'Étoile'], correct: 'Mère', explanation: '"La Bonne Mère" (the Good Mother) is the city\'s beloved protector.', explanationPt: '"La Bonne Mère" (a Boa Mãe) é a querida protetora da cidade.' },
      },
      {
        id: 'mrs-mucem', name: 'MuCEM', icon: '🏛️',
        coords: [43.2966, 5.3614], wikiTitle: 'MuCEM',
        narrative: 'You finish at the MuCEM, its lace-like concrete cube linked to the old fort by a slender footbridge over the sea.',
        narrativePt: 'Você termina no MuCEM, seu cubo de concreto rendilhado ligado ao forte antigo por uma passarela esguia sobre o mar.',
        phrases: [
          { fr: 'Un billet pour le musée.', en: 'A ticket for the museum.', pt: 'Um ingresso para o museu.' },
          { fr: 'C\'est ouvert le lundi ?', en: 'Is it open on Monday?', pt: 'Abre na segunda-feira?' },
        ],
        quiz: { question: 'The MuCEM, opened in 2013, explores the cultures of…?', questionPt: 'O MuCEM, inaugurado em 2013, explora as culturas do…?', options: ['The Mediterranean', 'The Arctic', 'The Pacific'], correct: 'The Mediterranean', explanation: 'It is the Museum of European and Mediterranean Civilisations.', explanationPt: 'É o Museu das Civilizações da Europa e do Mediterrâneo.' },
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
    grammarTopicPt: 'Fazer uma pergunta',
    lessons: [
      {
        id: 'toulouse-1',
        title: 'Taking the Metro',
        titlePt: 'Pegando o metrô',
        description: 'Public transport: lines, stops, tickets.',
        descriptionPt: 'Transporte público: linhas, paradas, bilhetes.',
        steps: [
          { type: 'vocab', word: 'le métro', article: 'le', english: 'metro', portuguese: 'metrô', example: 'Je prends le métro.' },
          { type: 'vocab', word: 'le bus', article: 'le', english: 'bus', portuguese: 'ônibus', example: 'Le bus arrive.' },
          { type: 'vocab', word: 'la station', article: 'la', english: 'station', portuguese: 'estação', example: 'La station est là.' },
          { type: 'vocab', word: 'la ligne', article: 'la', english: 'line', portuguese: 'linha', example: "C'est quelle ligne ?" },
          { type: 'vocab', word: 'le plan', article: 'le', english: 'map', portuguese: 'mapa', example: 'Voici le plan du métro.' },
          { type: 'vocab', word: 'prochain', article: null, english: 'next', portuguese: 'próximo', example: 'Le prochain bus.' },
          { type: 'grammar', title: 'Poser une question (3 façons)', titlePt: 'Fazer uma pergunta (3 maneiras)', explanation: 'Three ways to ask yes/no questions: 1) intonation ("Tu parles français ?"), 2) est-ce que ("Est-ce que tu parles français ?"), 3) inversion ("Parlez-vous français ?").', explanationPt: 'Três maneiras de fazer perguntas de sim ou não: 1) entonação ("Tu parles français ?"), 2) est-ce que ("Est-ce que tu parles français ?"), 3) inversão ("Parlez-vous français ?").', examples: ['Tu parles français ? (intonation)', 'Est-ce qu\'il y a un bus ?', 'Parlez-vous français ? (inversion)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which is the neutral, everyday question form?', questionPt: 'Qual é a forma de pergunta neutra, do dia a dia?', options: ['inversion', 'est-ce que', 'passé composé', 'partitif'], correct: 'est-ce que' },
          { type: 'exercise', subtype: 'fill-blank', question: '___-ce qu\'il y a un métro ? (question marker)', questionPt: '___-ce qu\'il y a un métro ? (marcador de pergunta)', correct: 'Est' },
        ],
      },
      {
        id: 'toulouse-2',
        title: 'Asking for Directions',
        titlePt: 'Pedindo informações',
        description: 'Finding places and understanding directions.',
        descriptionPt: 'Encontrar lugares e entender as indicações.',
        steps: [
          { type: 'vocab', word: 'la gare', article: 'la', english: 'train station', portuguese: 'estação de trem', example: 'Où est la gare ?' },
          { type: 'vocab', word: 'la pharmacie', article: 'la', english: 'pharmacy', portuguese: 'farmácia', example: 'La pharmacie est à droite.' },
          { type: 'vocab', word: 'à gauche', article: null, english: 'to the left', portuguese: 'à esquerda', example: 'Tournez à gauche.' },
          { type: 'vocab', word: 'à droite', article: null, english: 'to the right', portuguese: 'à direita', example: "C'est à droite." },
          { type: 'vocab', word: 'tout droit', article: null, english: 'straight ahead', portuguese: 'em frente', example: 'Allez tout droit.' },
          { type: 'vocab', word: 'à côté de', article: null, english: 'next to', portuguese: 'ao lado de', example: "C'est à côté de la gare." },
          { type: 'grammar', title: 'Mots interrogatifs', titlePt: 'Palavras interrogativas', explanation: 'Question words: où (where), quand (when), comment (how), pourquoi (why), combien (how much), qui (who), que/quoi (what), quel(le) (which).', explanationPt: 'Palavras interrogativas: où (onde), quand (quando), comment (como), pourquoi (por que), combien (quanto), qui (quem), que/quoi (o que), quel(le) (qual).', examples: ['Où est la gare ?', 'Quand part le train ?', "C'est combien ?"] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "où" mean?', questionPt: 'O que significa "où"?', options: ['when', 'where', 'how', 'why'], correct: 'where' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Tournez à ___ au carrefour. (left)', questionPt: 'Tournez à ___ au carrefour. (esquerda)', correct: 'gauche' },
        ],
      },
    ],
    descriptionEn:
      "West to Toulouse, 'la Ville Rose', built of terracotta brick, home of Airbus and a great " +
      "student city. The traveller has to take the metro and ask locals for directions.",
    descriptionPt:
      "A oeste até Toulouse, 'la Ville Rose', construída em tijolo de terracota, berço da Airbus e uma grande " +
      "cidade universitária. O viajante precisa pegar o metrô e pedir informações aos moradores.",
    places: [
      {
        id: 'tls-metro', name: 'Le métro toulousain', icon: '🚇',
        coords: [43.6113, 1.4536], wikiTitle: 'Toulouse Metro',
        narrative: 'You arrive at Matabiau and tackle the metro — small, driverless trains zipping under the pink city.',
        narrativePt: 'Você chega a Matabiau e encara o metrô: trenzinhos sem condutor cruzando velozes por baixo da cidade rosa.',
        phrases: [
          { fr: 'Un ticket, s\'il vous plaît.', en: 'One ticket, please.', pt: 'Um bilhete, por favor.' },
          { fr: "C'est quelle ligne ?", en: 'Which line is it?', pt: 'Que linha é essa?' },
        ],
        lessonId: 'toulouse-1',
        quiz: { question: 'Toulouse\'s metro is fully…?', questionPt: 'O metrô de Toulouse é totalmente…?', options: ['Driverless', 'Steam-powered', 'Double-decker'], correct: 'Driverless', explanation: 'Its automatic, driverless trains have run since 1993.', explanationPt: 'Seus trens automáticos, sem condutor, funcionam desde 1993.' },
      },
      {
        id: 'tls-capitole', name: 'Place du Capitole', icon: '🏛️',
        coords: [43.6043, 1.4437], wikiTitle: 'Capitole de Toulouse',
        narrative: 'You emerge on the vast Place du Capitole and ask a passer-by the way to the next sight.',
        narrativePt: 'Você sai na imensa Place du Capitole e pergunta a um transeunte o caminho para o próximo ponto turístico.',
        phrases: [
          { fr: "Où est l'office de tourisme ?", en: 'Where is the tourist office?', pt: 'Onde fica o posto de turismo?' },
          { fr: "C'est loin d'ici ?", en: 'Is it far from here?', pt: 'É longe daqui?' },
        ],
        lessonId: 'toulouse-2',
        quiz: { question: 'The Capitole is Toulouse\'s…?', questionPt: 'O Capitole é o(a)… de Toulouse?', options: ['City hall', 'Cathedral', 'Train station'], correct: 'City hall', explanation: 'The Capitole has been the seat of city government since the Middle Ages.', explanationPt: 'O Capitole é a sede do governo da cidade desde a Idade Média.' },
      },
      {
        id: 'tls-saint-sernin', name: 'Basilique Saint-Sernin', icon: '⛪',
        coords: [43.6080, 1.4419], wikiTitle: 'Basilica of Saint-Sernin, Toulouse',
        narrative: 'You follow the directions to Saint-Sernin, its rose-brick bell tower rising in tiers above the rooftops.',
        narrativePt: 'Você segue as indicações até Saint-Sernin, cujo campanário de tijolo rosa se ergue em andares acima dos telhados.',
        phrases: [
          { fr: "C'est par où, la basilique ?", en: 'Which way to the basilica?', pt: 'Por onde se vai à basílica?' },
          { fr: 'Tournez à droite.', en: 'Turn right.', pt: 'Vire à direita.' },
        ],
        quiz: { question: 'Saint-Sernin is the largest remaining… church in Europe?', questionPt: 'Saint-Sernin é a maior igreja… ainda existente na Europa?', options: ['Romanesque', 'Gothic', 'Baroque'], correct: 'Romanesque', explanation: 'It is the biggest surviving Romanesque church on the continent, a pilgrimage landmark.', explanationPt: 'É a maior igreja românica ainda existente no continente, um marco das peregrinações.' },
      },
      {
        id: 'tls-cite-espace', name: "Cité de l'espace", icon: '🚀',
        coords: [43.5860, 1.4900], wikiTitle: "Cité de l'espace",
        narrative: 'You head out to the Cité de l\'espace, where a full-size rocket reminds you this is Europe\'s space city.',
        narrativePt: 'Você vai até a Cité de l\'espace, onde um foguete em tamanho real lembra que esta é a cidade espacial da Europa.',
        phrases: [
          { fr: 'Deux entrées, s\'il vous plaît.', en: 'Two admissions, please.', pt: 'Duas entradas, por favor.' },
          { fr: "C'est génial !", en: "It's awesome!", pt: 'Que demais!' },
        ],
        quiz: { question: 'Toulouse is the European capital of…?', questionPt: 'Toulouse é a capital europeia de…?', options: ['Aerospace', 'Wine', 'Cinema'], correct: 'Aerospace', explanation: 'Home to Airbus and the space industry, it\'s Europe\'s aerospace hub.', explanationPt: 'Lar da Airbus e da indústria espacial, é o polo aeroespacial da Europa.' },
      },
      {
        id: 'tls-pont-neuf', name: 'Pont Neuf & la Garonne', icon: '🌉',
        coords: [43.5990, 1.4380], wikiTitle: 'Pont Neuf, Toulouse',
        narrative: 'You end on the Pont Neuf at dusk, the brick glowing pink-orange over the river Garonne.',
        narrativePt: 'Você termina no Pont Neuf ao entardecer, o tijolo brilhando em rosa-alaranjado sobre o rio Garonne.',
        phrases: [
          { fr: 'On marche le long du fleuve ?', en: 'Shall we walk along the river?', pt: 'Vamos caminhar à beira do rio?' },
          { fr: 'Quelle belle ville rose !', en: 'What a beautiful pink city!', pt: 'Que linda cidade rosa!' },
        ],
        quiz: { question: 'Toulouse is nicknamed "la Ville Rose" because of its…?', questionPt: 'Toulouse é apelidada de "la Ville Rose" por causa de seu(sua)…?', options: ['Pink brick', 'Blue roofs', 'White marble'], correct: 'Pink brick', explanation: 'Its terracotta brick turns rosy in the light — hence "the Pink City".', explanationPt: 'Seu tijolo de terracota fica rosado sob a luz, daí "a Cidade Rosa".' },
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
    grammarTopicPt: 'vouloir, pouvoir, devoir',
    lessons: [
      {
        id: 'bordeaux-1',
        title: 'Wine Tasting',
        titlePt: 'Degustação de vinho',
        description: 'Tasting wine and talking about flavors.',
        descriptionPt: 'Degustar vinho e falar sobre sabores.',
        steps: [
          { type: 'vocab', word: 'le vin rouge', article: 'le', english: 'red wine', portuguese: 'vinho tinto', example: 'Le vin rouge est excellent.' },
          { type: 'vocab', word: 'la dégustation', article: 'la', english: 'tasting', portuguese: 'degustação', example: 'La dégustation commence.' },
          { type: 'vocab', word: 'le verre', article: 'le', english: 'glass', portuguese: 'taça', example: 'Un verre de blanc.' },
          { type: 'vocab', word: 'la bouteille', article: 'la', english: 'bottle', portuguese: 'garrafa', example: 'Une bouteille de rouge.' },
          { type: 'vocab', word: 'goûter', article: null, english: 'to taste', portuguese: 'provar', example: 'Je voudrais goûter ce vin.' },
          { type: 'vocab', word: 'santé !', article: null, english: 'cheers!', portuguese: 'saúde!', example: 'Santé ! À votre santé !' },
          { type: 'grammar', title: 'vouloir (to want)', titlePt: 'vouloir (querer)', explanation: 'vouloir: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils veulent. Use the polite "je voudrais" (I would like) in shops and restaurants.', explanationPt: 'vouloir: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils veulent. Use a forma educada "je voudrais" (eu gostaria) em lojas e restaurantes.', examples: ['Je voudrais une bouteille de rouge.', 'Vous voulez goûter ?', 'Il veut visiter un château.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is the polite "I would like"?', questionPt: 'Qual é a forma educada de "eu gostaria"?', options: ['je veux', 'je voudrais', 'je peux', 'je dois'], correct: 'je voudrais' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Vous ___ goûter ? (vouloir: you want)', questionPt: 'Vous ___ goûter ? (vouloir: você quer)', correct: 'voulez' },
        ],
      },
      {
        id: 'bordeaux-2',
        title: 'Making Friends',
        titlePt: 'Fazer amizades',
        description: 'Socializing, preferences, making plans together.',
        descriptionPt: 'Socializar, falar de preferências e fazer planos juntos.',
        steps: [
          { type: 'vocab', word: 'sympa', article: null, english: 'nice / friendly', portuguese: 'legal / simpático', example: 'Les gens sont sympas.' },
          { type: 'vocab', word: 'ensemble', article: null, english: 'together', portuguese: 'juntos', example: 'On dîne ensemble ?' },
          { type: 'vocab', word: 'adorer', article: null, english: 'to love', portuguese: 'adorar', example: "J'adore ce vin !" },
          { type: 'vocab', word: 'préférer', article: null, english: 'to prefer', portuguese: 'preferir', example: 'Je préfère le rouge.' },
          { type: 'vocab', word: "d'accord", article: null, english: 'okay / agreed', portuguese: 'certo / de acordo', example: "D'accord, bonne idée !" },
          { type: 'vocab', word: 'avec plaisir', article: null, english: 'with pleasure', portuguese: 'com prazer', example: 'Avec plaisir !' },
          { type: 'grammar', title: 'pouvoir & devoir', titlePt: 'pouvoir e devoir', explanation: 'pouvoir (can): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. devoir (must): je dois, tu dois, il doit… Both are followed by an infinitive.', explanationPt: 'pouvoir (poder): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. devoir (dever/ter que): je dois, tu dois, il doit… Os dois são seguidos por um infinitivo.', examples: ['Je peux goûter ?', 'Vous pouvez répéter ?', 'Je dois partir à 18h.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "je dois" mean?', questionPt: 'O que significa "je dois"?', options: ['I can', 'I want', 'I must', 'I like'], correct: 'I must' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Vous ___ répéter, s\'il vous plaît ? (pouvoir: you can)', questionPt: 'Vous ___ répéter, s\'il vous plaît ? (pouvoir: você pode)', correct: 'pouvez' },
        ],
      },
    ],
    descriptionEn:
      "The traveller arrives in Bordeaux, the world capital of wine. They join a tasting in the " +
      "Médoc, learn to talk about tastes and preferences, and share a dinner with welcoming locals.",
    descriptionPt:
      "O viajante chega a Bordeaux, a capital mundial do vinho. Ele participa de uma degustação no " +
      "Médoc, aprende a falar sobre gostos e preferências e compartilha um jantar com moradores acolhedores.",
    places: [
      {
        id: 'bdx-bourse', name: 'Place de la Bourse', icon: '🪞',
        coords: [44.8412, -0.5697], wikiTitle: 'Place de la Bourse',
        narrative: 'You arrive at the Place de la Bourse, perfectly mirrored in the shimmering Miroir d\'eau.',
        narrativePt: 'Você chega à Place de la Bourse, perfeitamente refletida no cintilante Miroir d\'eau.',
        phrases: [
          { fr: "C'est magnifique le soir.", en: "It's magnificent in the evening.", pt: 'É magnífico à noite.' },
          { fr: 'On prend une photo ?', en: 'Shall we take a photo?', pt: 'Vamos tirar uma foto?' },
        ],
        quiz: { question: 'Place de la Bourse faces the world\'s largest reflecting pool, the Miroir d\'…?', questionPt: 'A Place de la Bourse fica de frente para o maior espelho d\'água do mundo, o Miroir d\'…?', options: ['Eau', 'Or', 'Argent'], correct: 'Eau', explanation: 'The "Miroir d\'eau" (water mirror) is the largest reflecting pool in the world.', explanationPt: 'O "Miroir d\'eau" (espelho d\'água) é o maior espelho d\'água do mundo.' },
      },
      {
        id: 'bdx-medoc', name: 'Dégustation dans le Médoc', icon: '🍷',
        coords: [45.1000, -0.7500], wikiTitle: 'Médoc',
        narrative: 'You drive out into the Médoc vineyards for your first real wine tasting at a château.',
        narrativePt: 'Você viaja até os vinhedos do Médoc para sua primeira degustação de vinho de verdade em um château.',
        phrases: [
          { fr: 'Je voudrais goûter le rouge.', en: "I'd like to taste the red.", pt: 'Eu gostaria de provar o tinto.' },
          { fr: 'Santé !', en: 'Cheers!', pt: 'Saúde!' },
        ],
        lessonId: 'bordeaux-1',
        quiz: { question: 'The Médoc is world-famous for its red…?', questionPt: 'O Médoc é mundialmente famoso pelo seu… tinto?', options: ['Wine', 'Cheese', 'Cider'], correct: 'Wine', explanation: 'The Médoc holds some of the most prestigious red-wine estates on earth.', explanationPt: 'O Médoc abriga algumas das mais prestigiadas propriedades de vinho tinto do mundo.' },
      },
      {
        id: 'bdx-cite-vin', name: 'La Cité du Vin', icon: '🏛️',
        coords: [44.8627, -0.5503], wikiTitle: 'La Cité du Vin',
        narrative: 'Back in town you visit La Cité du Vin, a swirling glass building shaped like wine in a glass.',
        narrativePt: 'De volta à cidade, você visita La Cité du Vin, um edifício de vidro sinuoso com o formato de vinho numa taça.',
        phrases: [
          { fr: 'Un billet avec dégustation.', en: 'A ticket with a tasting.', pt: 'Um ingresso com degustação.' },
          { fr: "J'adore ce vin.", en: 'I love this wine.', pt: 'Eu adoro este vinho.' },
        ],
        quiz: { question: 'La Cité du Vin is a museum entirely about…?', questionPt: 'La Cité du Vin é um museu inteiramente sobre…?', options: ['Wine', 'Ships', 'Space'], correct: 'Wine', explanation: 'It is a museum and cultural centre dedicated to wine across the world.', explanationPt: 'É um museu e centro cultural dedicado ao vinho do mundo inteiro.' },
      },
      {
        id: 'bdx-sainte-catherine', name: 'Rue Sainte-Catherine', icon: '🍽️',
        coords: [44.8378, -0.5736], image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Bordeaux_Rue_Sainte_Catherine_R01.jpg',
        narrative: 'In the evening you join new friends for dinner off the lively Rue Sainte-Catherine.',
        narrativePt: 'À noite, você encontra novos amigos para jantar perto da animada Rue Sainte-Catherine.',
        phrases: [
          { fr: 'On dîne ensemble ?', en: 'Shall we have dinner together?', pt: 'Vamos jantar juntos?' },
          { fr: 'Avec plaisir !', en: 'With pleasure!', pt: 'Com prazer!' },
        ],
        lessonId: 'bordeaux-2',
        quiz: { question: 'Rue Sainte-Catherine is one of Europe\'s longest… streets?', questionPt: 'A Rue Sainte-Catherine é uma das mais longas ruas… da Europa?', options: ['Pedestrian shopping', 'Underground', 'Coastal'], correct: 'Pedestrian shopping', explanation: 'At ~1.2 km it is one of the longest pedestrian shopping streets in Europe.', explanationPt: 'Com cerca de 1,2 km, é uma das mais longas ruas de comércio para pedestres da Europa.' },
      },
      {
        id: 'bdx-cathedrale', name: 'Cathédrale Saint-André', icon: '⛪',
        coords: [44.8378, -0.5795], wikiTitle: 'Bordeaux Cathedral',
        narrative: 'You finish at the Cathédrale Saint-André, its Gothic towers crowning the UNESCO-listed old town.',
        narrativePt: 'Você termina na Cathédrale Saint-André, cujas torres góticas coroam o centro histórico tombado pela UNESCO.',
        phrases: [
          { fr: "C'est très ancien ?", en: 'Is it very old?', pt: 'É muito antigo?' },
          { fr: 'Quelle belle ville !', en: 'What a beautiful city!', pt: 'Que cidade linda!' },
        ],
        quiz: { question: 'Bordeaux\'s historic centre is listed as a UNESCO World…?', questionPt: 'O centro histórico de Bordeaux é reconhecido como… Mundial da UNESCO?', options: ['Heritage Site', 'Wonder', 'Park'], correct: 'Heritage Site', explanation: 'The "Port of the Moon" old town is a UNESCO World Heritage Site.', explanationPt: 'O centro histórico "Porto da Lua" é Patrimônio Mundial da UNESCO.' },
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
    grammarTopicPt: 'Verbos pronominais + pronomes de objeto direto',
    lessons: [
      {
        id: 'nantes-1',
        title: 'In the Shop',
        titlePt: 'Na loja',
        description: 'Buying clothes: sizes, trying things on.',
        descriptionPt: 'Comprando roupas: tamanhos, experimentar peças.',
        steps: [
          { type: 'vocab', word: 'le vêtement', article: 'le', english: 'clothing', portuguese: 'roupa', example: 'Les vêtements sont en solde.' },
          { type: 'vocab', word: 'la chemise', article: 'la', english: 'shirt', portuguese: 'camisa', example: 'Une chemise blanche.' },
          { type: 'vocab', word: 'la veste', article: 'la', english: 'jacket', portuguese: 'casaco', example: 'Je peux essayer cette veste ?' },
          { type: 'vocab', word: 'les chaussures', article: 'les', english: 'shoes', portuguese: 'sapatos', example: 'Les chaussures sont là.' },
          { type: 'vocab', word: 'la taille', article: 'la', english: 'size', portuguese: 'tamanho', example: 'Vous avez la taille 40 ?' },
          { type: 'vocab', word: 'essayer', article: null, english: 'to try on', portuguese: 'experimentar', example: 'Je voudrais essayer la robe.' },
          { type: 'grammar', title: 'Pronoms COD (le / la / les)', titlePt: 'Pronomes de objeto direto (le / la / les)', explanation: 'Direct object pronouns replace a noun and go BEFORE the verb: le (m), la (f), l\' (before vowel), les (pl).', explanationPt: 'Os pronomes de objeto direto substituem um substantivo e vêm ANTES do verbo: le (m), la (f), l\' (antes de vogal), les (pl).', examples: ['Cette veste ? Je la prends !', 'Ces chaussures ? Je les essaie.', 'Le pantalon ? Je le voudrais en 38.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Replace "la robe": "Je ___ prends".', questionPt: 'Substitua "la robe": "Je ___ prends".', options: ['le', 'la', 'les', 'lui'], correct: 'la' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Vous avez ça en ___ 40 ? (clothing size)', questionPt: 'Vous avez ça en ___ 40 ? (tamanho de roupa)', correct: 'taille' },
        ],
      },
      {
        id: 'nantes-2',
        title: 'Daily Routine',
        titlePt: 'Rotina diária',
        description: 'Reflexive verbs for everyday routines.',
        descriptionPt: 'Verbos reflexivos para as rotinas do dia a dia.',
        steps: [
          { type: 'vocab', word: 'se lever', article: null, english: 'to get up', portuguese: 'levantar-se', example: 'Je me lève à sept heures.' },
          { type: 'vocab', word: 'se coucher', article: null, english: 'to go to bed', portuguese: 'deitar-se', example: 'Je me couche tard.' },
          { type: 'vocab', word: "s'habiller", article: null, english: 'to get dressed', portuguese: 'vestir-se', example: "Je m'habille vite." },
          { type: 'vocab', word: 'le matin', article: 'le', english: 'morning', portuguese: 'manhã', example: 'Le matin, je bois un café.' },
          { type: 'vocab', word: "d'abord", article: null, english: 'first', portuguese: 'primeiro', example: "D'abord, je me douche." },
          { type: 'vocab', word: 'ensuite', article: null, english: 'then', portuguese: 'depois', example: "Ensuite, je m'habille." },
          { type: 'grammar', title: 'Verbes pronominaux', titlePt: 'Verbos pronominais', explanation: 'Reflexive verbs use a pronoun referring to the subject, placed before the verb: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.', explanationPt: 'Os verbos reflexivos usam um pronome que se refere ao sujeito, colocado antes do verbo: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.', examples: ['Je me lève à sept heures.', "Il s'appelle Pierre.", 'Nous nous reposons.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "se coucher" mean?', questionPt: 'O que significa "se coucher"?', options: ['to get up', 'to go to bed', 'to wash', 'to rest'], correct: 'to go to bed' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ lève à sept heures. (reflexive pronoun: myself)', questionPt: 'Je ___ lève à sept heures. (pronome reflexivo: me)', correct: 'me' },
        ],
      },
    ],
    descriptionEn:
      "The traveller heads up to Nantes, on the Loire. They visit the spectacular Machines de l'île " +
      "(giant mechanical animals) and spend an afternoon buying souvenirs and clothes.",
    descriptionPt:
      "O viajante sobe até Nantes, às margens do Loire. Ele visita as espetaculares Machines de l'île " +
      "(animais mecânicos gigantes) e passa uma tarde comprando lembranças e roupas.",
    places: [
      {
        id: 'nte-chateau', name: 'Château des ducs de Bretagne', icon: '🏰',
        coords: [47.2158, -1.5497], wikiTitle: 'Château des ducs de Bretagne',
        narrative: 'You arrive at the Château des ducs de Bretagne, white stone walls ringed by a moat in the city centre.',
        narrativePt: 'Você chega ao Château des ducs de Bretagne, muralhas de pedra branca cercadas por um fosso no centro da cidade.',
        phrases: [
          { fr: 'Un billet pour le château.', en: 'A ticket for the castle.', pt: 'Um ingresso para o castelo.' },
          { fr: "C'est ouvert aujourd'hui ?", en: 'Is it open today?', pt: 'Está aberto hoje?' },
        ],
        quiz: { question: 'Nantes was historically the capital of which region?', questionPt: 'Historicamente, Nantes foi a capital de qual região?', options: ['Brittany', 'Normandy', 'Alsace'], correct: 'Brittany', explanation: 'The castle was the seat of the Dukes of Brittany — Nantes was its historic capital.', explanationPt: 'O castelo era a sede dos Duques da Bretanha: Nantes era a sua capital histórica.' },
      },
      {
        id: 'nte-machines', name: "Les Machines de l'île", icon: '🐘',
        coords: [47.2050, -1.5650], image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Les_Machines_de_l%27Ile_%40_Nantes_%287929839186%29.jpg',
        narrative: 'You meet the Grand Éléphant — a 12-metre mechanical elephant that walks, trumpets and sprays the crowd.',
        narrativePt: 'Você encontra o Grand Éléphant, um elefante mecânico de 12 metros que anda, barrita e borrifa a multidão.',
        phrases: [
          { fr: "On monte sur l'éléphant ?", en: 'Shall we ride the elephant?', pt: 'Vamos subir no elefante?' },
          { fr: "C'est incroyable !", en: "It's incredible!", pt: 'É incrível!' },
        ],
        quiz: { question: "The Machines de l'île's most famous creation is a giant mechanical…?", questionPt: "A criação mais famosa das Machines de l'île é um gigantesco… mecânico?", options: ['Elephant', 'Spider', 'Whale'], correct: 'Elephant', explanation: 'The Grand Éléphant carries dozens of passengers on its back as it strolls.', explanationPt: 'O Grand Éléphant carrega dezenas de passageiros nas costas enquanto passeia.' },
      },
      {
        id: 'nte-pommeraye', name: 'Passage Pommeraye', icon: '🛍️',
        coords: [47.2138, -1.5580], wikiTitle: 'Passage Pommeraye',
        narrative: 'You go shopping in the Passage Pommeraye, an ornate 19th-century arcade of staircases and statues.',
        narrativePt: 'Você vai às compras na Passage Pommeraye, uma ornamentada galeria do século 19 com escadarias e estátuas.',
        phrases: [
          { fr: 'Je peux essayer ça ?', en: 'Can I try this on?', pt: 'Posso experimentar isto?' },
          { fr: 'Vous avez ma taille ?', en: 'Do you have my size?', pt: 'Você tem o meu tamanho?' },
        ],
        lessonId: 'nantes-1',
        quiz: { question: 'The Passage Pommeraye is a 19th-century covered shopping…?', questionPt: 'A Passage Pommeraye é uma… de compras coberta do século 19?', options: ['Arcade', 'Market', 'Station'], correct: 'Arcade', explanation: 'Opened in 1843, it is one of France\'s most beautiful covered shopping arcades.', explanationPt: 'Inaugurada em 1843, é uma das galerias de compras cobertas mais bonitas da França.' },
      },
      {
        id: 'nte-ile', name: "Île de Nantes (le matin)", icon: '🌅',
        coords: [47.2030, -1.5620], wikiTitle: 'Île de Nantes',
        narrative: 'Morning on the Île de Nantes: coffee by the river, then off to explore the regenerated docks.',
        narrativePt: 'Manhã na Île de Nantes: café à beira do rio e, em seguida, explorar as docas revitalizadas.',
        phrases: [
          { fr: 'Le matin, je bois un café.', en: 'In the morning, I have a coffee.', pt: 'De manhã, eu tomo um café.' },
          { fr: 'On commence par ici.', en: "Let's start here.", pt: 'Vamos começar por aqui.' },
        ],
        lessonId: 'nantes-2',
        quiz: { question: 'Nantes sits on the banks of which river?', questionPt: 'Nantes fica às margens de qual rio?', options: ['The Loire', 'The Rhône', 'The Seine'], correct: 'The Loire', explanation: 'Nantes lies on the Loire, near where it meets the Atlantic.', explanationPt: 'Nantes fica às margens do Loire, perto de onde ele encontra o Atlântico.' },
      },
      {
        id: 'nte-jardin', name: 'Jardin des Plantes', icon: '🌳',
        coords: [47.2185, -1.5420], wikiTitle: 'Jardin des plantes de Nantes',
        narrative: 'You end among the greenhouses and giant flowerbeds of the Jardin des Plantes.',
        narrativePt: 'Você termina entre as estufas e os canteiros gigantes do Jardin des Plantes.',
        phrases: [
          { fr: 'On se repose un peu ?', en: 'Shall we rest a bit?', pt: 'Vamos descansar um pouco?' },
          { fr: 'Quel beau jardin !', en: 'What a lovely garden!', pt: 'Que jardim lindo!' },
        ],
        quiz: { question: 'Nantes was named European Green… in 2013?', questionPt: 'Nantes foi nomeada… Verde Europeia em 2013?', options: ['Capital', 'Olympics', 'Festival'], correct: 'Capital', explanation: 'Nantes won the European Green Capital award in 2013 for its eco-friendly city planning.', explanationPt: 'Nantes ganhou o prêmio de Capital Verde Europeia em 2013 pelo seu planejamento urbano ecológico.' },
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
    grammarTopicPt: 'Dizer as horas + advérbios de frequência',
    lessons: [
      {
        id: 'lille-1',
        title: 'What Time Is It?',
        titlePt: 'Que horas são?',
        description: 'Telling and asking the time.',
        descriptionPt: 'Dizer e perguntar as horas.',
        steps: [
          { type: 'vocab', word: "l'heure", article: 'la', english: 'hour / time', portuguese: 'hora / horário', example: 'Quelle heure est-il ?' },
          { type: 'vocab', word: 'midi', article: null, english: 'noon', portuguese: 'meio-dia', example: 'On se retrouve à midi ?' },
          { type: 'vocab', word: 'minuit', article: null, english: 'midnight', portuguese: 'meia-noite', example: 'Il est minuit.' },
          { type: 'vocab', word: 'et demie', article: null, english: 'half past', portuguese: 'e meia', example: 'Il est deux heures et demie.' },
          { type: 'vocab', word: 'en retard', article: null, english: 'late', portuguese: 'atrasado', example: 'Je suis en retard !' },
          { type: 'vocab', word: 'le rendez-vous', article: 'le', english: 'appointment', portuguese: 'compromisso', example: "J'ai un rendez-vous à 15h." },
          { type: 'grammar', title: "Dire l'heure", titlePt: 'Dizer as horas', explanation: 'Use "il est + number + heure(s)". Minutes: et quart (:15), et demie (:30), moins le quart (:45). Schedules use the 24-hour clock.', explanationPt: 'Use "il est + número + heure(s)". Minutos: et quart (:15), et demie (:30), moins le quart (:45). Os horários usam o relógio de 24 horas.', examples: ['Il est une heure.', 'Il est deux heures et demie.', 'Le train part à seize heures trente.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "et demie"?', questionPt: 'O que significa "et demie"?', options: ['quarter past', 'half past', 'quarter to', 'noon'], correct: 'half past' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Quelle ___ est-il ? (hour / time)', questionPt: 'Quelle ___ est-il ? (hora / horário)', correct: 'heure' },
        ],
      },
      {
        id: 'lille-2',
        title: 'Planning and Schedule',
        titlePt: 'Planejamento e agenda',
        description: 'Frequency words and planning the trip.',
        descriptionPt: 'Palavras de frequência e planejamento da viagem.',
        steps: [
          { type: 'vocab', word: 'le voyage', article: 'le', english: 'trip / journey', portuguese: 'viagem', example: 'Le voyage est long.' },
          { type: 'vocab', word: 'souvent', article: null, english: 'often', portuguese: 'frequentemente', example: 'Je visite Lille souvent.' },
          { type: 'vocab', word: 'parfois', article: null, english: 'sometimes', portuguese: 'às vezes', example: 'Il prend parfois le bus.' },
          { type: 'vocab', word: 'toujours', article: null, english: 'always', portuguese: 'sempre', example: 'Je prends toujours le train.' },
          { type: 'vocab', word: 'réserver', article: null, english: 'to book', portuguese: 'reservar', example: 'Je voudrais réserver une place.' },
          { type: 'vocab', word: 'le départ', article: 'le', english: 'departure', portuguese: 'partida', example: 'Le départ est à 9h.' },
          { type: 'grammar', title: 'Adverbes de fréquence', titlePt: 'Advérbios de frequência', explanation: 'toujours (always), souvent (often), parfois (sometimes), rarement (rarely) go after the verb. jamais wraps the verb: ne…jamais.', explanationPt: 'toujours (sempre), souvent (frequentemente), parfois (às vezes), rarement (raramente) vêm depois do verbo. jamais envolve o verbo: ne…jamais.', examples: ['Je visite toujours la boulangerie le matin.', 'Il prend parfois le bus.', 'Je ne prends jamais le taxi.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "souvent" mean?', questionPt: 'O que significa "souvent"?', options: ['always', 'often', 'sometimes', 'never'], correct: 'often' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je voudrais ___ une place pour Bruxelles. (to book)', questionPt: 'Je voudrais ___ une place pour Bruxelles. (reservar)', correct: 'réserver' },
        ],
      },
    ],
    descriptionEn:
      "North to Lille, a lively city with strong Belgian and Flemish influences. The traveller " +
      "visits the Grand-Place, tastes carbonnade flamande and prepares the final leg to Brussels.",
    descriptionPt:
      "Rumo ao norte, até Lille, uma cidade animada com fortes influências belgas e flamengas. O viajante " +
      "visita a Grand-Place, prova a carbonnade flamande e se prepara para o trecho final até Bruxelas.",
    places: [
      {
        id: 'lil-gare', name: 'Gare Lille-Flandres', icon: '🚆',
        coords: [50.6365, 3.0707], wikiTitle: 'Gare de Lille-Flandres',
        narrative: 'You step off at Lille-Flandres, the bustling station that ties the north of Europe together.',
        narrativePt: 'Você desce em Lille-Flandres, a movimentada estação que conecta o norte da Europa.',
        phrases: [
          { fr: 'Le train pour Bruxelles ?', en: 'The train to Brussels?', pt: 'O trem para Bruxelas?' },
          { fr: 'À quelle heure ?', en: 'At what time?', pt: 'A que horas?' },
        ],
        quiz: { question: 'Lille is a major rail hub linking Paris, Brussels and…?', questionPt: 'Lille é um importante entroncamento ferroviário que liga Paris, Bruxelas e…?', options: ['London', 'Madrid', 'Rome'], correct: 'London', explanation: 'Eurostar and Thalys make Lille a crossroads between Paris, Brussels and London.', explanationPt: 'O Eurostar e o Thalys fazem de Lille um cruzamento entre Paris, Bruxelas e Londres.' },
      },
      {
        id: 'lil-grand-place', name: 'Grand-Place', icon: '🏛️',
        coords: [50.6366, 3.0635], image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Lille_vue_gd_place.JPG',
        narrative: 'You reach the Grand-Place, ringed by Flemish façades and crowned by the old stock-exchange belfry.',
        narrativePt: 'Você chega à Grand-Place, cercada por fachadas flamengas e coroada pelo antigo campanário da bolsa de valores.',
        phrases: [
          { fr: 'Quelle heure est-il ?', en: 'What time is it?', pt: 'Que horas são?' },
          { fr: 'On se retrouve à midi.', en: "Let's meet at noon.", pt: 'A gente se encontra ao meio-dia.' },
        ],
        lessonId: 'lille-1',
        quiz: { question: "Lille's Grand-Place is officially named after which leader, born in the city?", questionPt: 'A Grand-Place de Lille tem o nome oficial de qual líder, nascido na cidade?', options: ['Charles de Gaulle', 'Napoleon', 'Louis XIV'], correct: 'Charles de Gaulle', explanation: 'It is officially Place du Général-de-Gaulle — he was born in Lille in 1890.', explanationPt: 'Oficialmente é a Place du Général-de-Gaulle, ele nasceu em Lille em 1890.' },
      },
      {
        id: 'lil-vieux', name: 'Vieux-Lille', icon: '🏘️',
        coords: [50.6420, 3.0640], wikiTitle: 'Vieux-Lille',
        narrative: 'You wander Vieux-Lille\'s cobbled lanes, red-brick gables and tempting pastry shops.',
        narrativePt: 'Você perambula pelas ruas de paralelepípedos do Vieux-Lille, com suas empenas de tijolo vermelho e tentadoras confeitarias.',
        phrases: [
          { fr: 'C\'est par ici ?', en: 'Is it this way?', pt: 'É por aqui?' },
          { fr: "J'aime ce quartier.", en: 'I like this district.', pt: 'Eu gosto deste bairro.' },
        ],
        quiz: { question: "Lille's architecture shows a strong… influence?", questionPt: 'A arquitetura de Lille mostra uma forte influência…?', options: ['Flemish', 'Greek', 'Moorish'], correct: 'Flemish', explanation: 'Centuries in the Flemish and Spanish Netherlands shaped its brick-and-gable look.', explanationPt: 'Séculos sob os Países Baixos flamengos e espanhóis moldaram seu visual de tijolo e empenas.' },
      },
      {
        id: 'lil-beaux-arts', name: 'Palais des Beaux-Arts', icon: '🖼️',
        coords: [50.6310, 3.0625], wikiTitle: 'Palais des Beaux-Arts de Lille',
        narrative: 'You take in the Palais des Beaux-Arts, a grand museum of paintings second only to the Louvre.',
        narrativePt: 'Você aprecia o Palais des Beaux-Arts, um grandioso museu de pinturas que só fica atrás do Louvre.',
        phrases: [
          { fr: 'Un billet pour le musée.', en: 'A ticket for the museum.', pt: 'Uma entrada para o museu.' },
          { fr: "C'est ouvert maintenant ?", en: 'Is it open now?', pt: 'Está aberto agora?' },
        ],
        quiz: { question: 'The Palais des Beaux-Arts is one of France\'s largest museums after the…?', questionPt: 'O Palais des Beaux-Arts é um dos maiores museus da França depois do…?', options: ['Louvre', 'Orsay', 'Pompidou'], correct: 'Louvre', explanation: 'It is often called the largest French fine-arts museum outside Paris.', explanationPt: 'Costuma ser chamado de o maior museu de belas-artes da França fora de Paris.' },
      },
      {
        id: 'lil-braderie', name: 'La Braderie de Lille', icon: '🛍️',
        coords: [50.6330, 3.0590], wikiTitle: 'Braderie de Lille',
        narrative: 'You plan the trip around the Braderie, when the whole city turns into a giant street market.',
        narrativePt: 'Você planeja a viagem em torno da Braderie, quando a cidade inteira se transforma em um gigantesco mercado de rua.',
        phrases: [
          { fr: "C'est combien ?", en: 'How much is it?', pt: 'Quanto custa?' },
          { fr: 'Je regarde, merci.', en: "I'm just looking, thanks.", pt: 'Só estou olhando, obrigado.' },
        ],
        lessonId: 'lille-2',
        quiz: { question: 'The Braderie de Lille is one of Europe\'s largest…?', questionPt: 'A Braderie de Lille é um dos maiores… da Europa?', options: ['Flea markets', 'Concerts', 'Parades'], correct: 'Flea markets', explanation: 'Every September millions come for this centuries-old giant flea market.', explanationPt: 'Todo mês de setembro, milhões de pessoas vêm para esse gigantesco brechó centenário.' },
      },
      {
        id: 'lil-carbonnade', name: 'Carbonnade flamande', icon: '🍲',
        coords: [50.6400, 3.0625], wikiTitle: 'Carbonnade',
        narrative: 'Before the last leg you settle into an estaminet for carbonnade flamande, the north\'s cosy beef stew.',
        narrativePt: 'Antes do último trecho, você se acomoda em um estaminet para saborear a carbonnade flamande, o aconchegante ensopado de carne do norte.',
        phrases: [
          { fr: 'Une carbonnade, s\'il vous plaît.', en: 'A carbonnade, please.', pt: 'Uma carbonnade, por favor.' },
          { fr: "C'est délicieux !", en: "It's delicious!", pt: 'Está delicioso!' },
        ],
        quiz: { question: 'Carbonnade flamande is beef slow-cooked in…?', questionPt: 'A carbonnade flamande é carne cozida lentamente em…?', options: ['Beer', 'Wine', 'Milk'], correct: 'Beer', explanation: 'This Flemish classic braises beef in dark beer — a taste of nearby Belgium.', explanationPt: 'Esse clássico flamengo refoga a carne em cerveja escura, um gostinho da vizinha Bélgica.' },
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
    grammarTopicPt: 'O futuro próximo (aller + infinitivo)',
    lessons: [
      {
        id: 'brussels-1',
        title: 'Belgian Specialties',
        titlePt: 'Especialidades belgas',
        description: 'Waffles, chocolate, and ordering to take away.',
        descriptionPt: 'Waffles, chocolate e pedir para viagem.',
        steps: [
          { type: 'vocab', word: 'la gaufre', article: 'la', english: 'waffle', portuguese: 'waffle', example: 'Une gaufre au chocolat.' },
          { type: 'vocab', word: 'le chocolat', article: 'le', english: 'chocolate', portuguese: 'chocolate', example: 'Le chocolat belge est incroyable.' },
          { type: 'vocab', word: 'les frites', article: 'les', english: 'fries', portuguese: 'batatas fritas', example: 'Les moules-frites !' },
          { type: 'vocab', word: 'à emporter', article: null, english: 'to take away', portuguese: 'para viagem', example: "C'est à emporter ?" },
          { type: 'vocab', word: 'sur place', article: null, english: 'to eat in', portuguese: 'para comer no local', example: 'Sur place ou à emporter ?' },
          { type: 'vocab', word: "c'est délicieux", article: null, english: "it's delicious", portuguese: 'está delicioso', example: "C'est délicieux !" },
          { type: 'grammar', title: 'Le futur proche (aller + infinitif)', titlePt: 'O futuro próximo (aller + infinitivo)', explanation: 'The near future: conjugate aller (je vais, tu vas, il va, nous allons, vous allez, ils vont) + infinitive.', explanationPt: 'O futuro próximo: conjugue aller (je vais, tu vas, il va, nous allons, vous allez, ils vont) + infinitivo.', examples: ['Je vais visiter la Grand-Place.', 'Nous allons manger des frites.', 'Il va acheter du chocolat.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "to take away"?', questionPt: 'Como se diz "para viagem"?', options: ['sur place', 'à emporter', 'une portion', 'à droite'], correct: 'à emporter' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Je ___ acheter des pralines. (aller: I am going to)', questionPt: 'Je ___ acheter des pralines. (aller: eu vou)', correct: 'vais' },
        ],
      },
      {
        id: 'brussels-2',
        title: 'Future Plans and Review',
        titlePt: 'Planos futuros e revisão',
        description: 'Talking about plans and wrapping up the journey.',
        descriptionPt: 'Falar sobre planos e encerrar a viagem.',
        steps: [
          { type: 'vocab', word: 'le projet', article: 'le', english: 'plan / project', portuguese: 'plano / projeto', example: "J'ai un projet." },
          { type: 'vocab', word: "l'avenir", article: 'le', english: 'the future', portuguese: 'o futuro', example: "Pour l'avenir." },
          { type: 'vocab', word: 'apprendre', article: null, english: 'to learn', portuguese: 'aprender', example: 'Je vais continuer à apprendre.' },
          { type: 'vocab', word: 'revenir', article: null, english: 'to come back', portuguese: 'voltar', example: "J'espère revenir en France." },
          { type: 'vocab', word: 'peut-être', article: null, english: 'maybe', portuguese: 'talvez', example: 'Peut-être un jour.' },
          { type: 'vocab', word: 'à la prochaine !', article: null, english: 'until next time!', portuguese: 'até a próxima!', example: 'Merci pour tout, à la prochaine !' },
          { type: 'grammar', title: 'Futur proche : négation & question', titlePt: 'Futuro próximo: negação e pergunta', explanation: 'Negative: ne + aller + pas + infinitive. Question: est-ce que + aller + infinitive.', explanationPt: 'Negativa: ne + aller + pas + infinitivo. Pergunta: est-ce que + aller + infinitivo.', examples: ['Je ne vais pas partir demain.', 'Est-ce que tu vas visiter le Manneken Pis ?', "Je vais continuer à apprendre le français."] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "apprendre" mean?', questionPt: 'O que significa "apprendre"?', options: ['to come back', 'to learn', 'to plan', 'to leave'], correct: 'to learn' },
          { type: 'exercise', subtype: 'fill-blank', question: "J'espère ___ en France un jour. (to come back)", questionPt: "J'espère ___ en France un jour. (voltar)", correct: 'revenir' },
        ],
      },
    ],
    descriptionEn:
      "The final destination. Brussels, in Belgium, officially bilingual French-Dutch. Capital of " +
      "the European Union, home of the waffle and chocolate. The traveller looks back on the " +
      "journey and already dreams of the future.",
    descriptionPt:
      "O destino final. Bruxelas, na Bélgica, oficialmente bilíngue francês-holandês. Capital da " +
      "União Europeia, terra do waffle e do chocolate. O viajante faz um balanço da jornada e " +
      "já sonha com o futuro.",
    places: [
      {
        id: 'bru-grand-place', name: 'Grand-Place de Bruxelles', icon: '🏛️',
        coords: [50.8467, 4.3525], wikiTitle: 'Grand-Place',
        narrative: 'You step into the Grand-Place, a square of gilded guildhalls glittering in the late sun — journey\'s end.',
        narrativePt: 'Você entra na Grand-Place, uma praça de casas de guildas douradas que brilham ao sol do fim de tarde: o fim da jornada.',
        phrases: [
          { fr: "C'est splendide !", en: "It's splendid!", pt: 'Que esplêndido!' },
          { fr: 'On prend une photo ?', en: 'Shall we take a photo?', pt: 'Vamos tirar uma foto?' },
        ],
        quiz: { question: 'The Grand-Place of Brussels is a UNESCO World…?', questionPt: 'A Grand-Place de Bruxelas é um... Mundial da UNESCO?', options: ['Heritage Site', 'Wonder', 'Capital'], correct: 'Heritage Site', explanation: 'Its ensemble of baroque guildhalls has been UNESCO-listed since 1998.', explanationPt: 'Seu conjunto de casas de guildas barrocas está na lista da UNESCO desde 1998.' },
      },
      {
        id: 'bru-manneken', name: 'Manneken Pis', icon: '💦',
        coords: [50.8450, 4.3500], wikiTitle: 'Manneken Pis',
        narrative: 'Around the corner you find the tiny Manneken Pis — far smaller than you imagined, and often in costume.',
        narrativePt: 'Virando a esquina você encontra o pequenino Manneken Pis: bem menor do que imaginava, e muitas vezes fantasiado.',
        phrases: [
          { fr: 'Où est la statue ?', en: 'Where is the statue?', pt: 'Onde fica a estátua?' },
          { fr: 'Il est tout petit !', en: "It's tiny!", pt: 'Ele é pequenininho!' },
        ],
        quiz: { question: 'The Manneken Pis is a small statue of a…?', questionPt: 'O Manneken Pis é uma pequena estátua de um...?', options: ['Boy', 'Lion', 'King'], correct: 'Boy', explanation: 'A 61 cm bronze boy — the city dresses him in hundreds of different costumes.', explanationPt: 'Um menino de bronze de 61 cm: a cidade o veste com centenas de fantasias diferentes.' },
      },
      {
        id: 'bru-gaufre', name: 'Une gaufre belge', icon: '🧇',
        coords: [50.8466, 4.3528], wikiTitle: 'Belgian waffle',
        narrative: 'You treat yourself to a hot Belgian waffle from a street stand — eat in or take away?',
        narrativePt: 'Você se presenteia com um waffle belga quentinho de uma barraca de rua: comer no local ou levar para viagem?',
        phrases: [
          { fr: 'Une gaufre, s\'il vous plaît.', en: 'A waffle, please.', pt: 'Um waffle, por favor.' },
          { fr: 'Sur place ou à emporter ?', en: 'Eat in or take away?', pt: 'Para comer no local ou para viagem?' },
        ],
        lessonId: 'brussels-1',
        quiz: { question: 'Belgium is world-famous for waffles and…?', questionPt: 'A Bélgica é mundialmente famosa por waffles e...?', options: ['Chocolate', 'Cheese', 'Tea'], correct: 'Chocolate', explanation: 'Belgian chocolate and pralines are prized around the world.', explanationPt: 'O chocolate e os pralinés belgas são valorizados no mundo todo.' },
      },
      {
        id: 'bru-ue', name: 'Quartier européen', icon: '🇪🇺',
        coords: [50.8389, 4.3750], wikiTitle: 'European Quarter, Brussels',
        narrative: 'You visit the European Quarter, flags of every member state snapping in the wind — and make plans for the future.',
        narrativePt: 'Você visita o Bairro Europeu, com bandeiras de cada Estado-membro tremulando ao vento, e faz planos para o futuro.',
        phrases: [
          { fr: 'Je vais visiter le parlement.', en: "I'm going to visit the parliament.", pt: 'Eu vou visitar o parlamento.' },
          { fr: 'C\'est par où ?', en: 'Which way is it?', pt: 'É para que lado?' },
        ],
        lessonId: 'brussels-2',
        quiz: { question: 'Brussels is the de facto capital of the…?', questionPt: 'Bruxelas é a capital de facto da...?', options: ['European Union', 'United States', 'United Kingdom'], correct: 'European Union', explanation: 'It hosts the European Commission, Council and Parliament.', explanationPt: 'Ela sedia a Comissão, o Conselho e o Parlamento Europeus.' },
      },
      {
        id: 'bru-atomium', name: 'Atomium', icon: '⚛️',
        coords: [50.8949, 4.3415], wikiTitle: 'Atomium',
        narrative: 'You finish at the Atomium\'s shining spheres — a fitting, futuristic end to your French-speaking adventure.',
        narrativePt: 'Você termina nas esferas reluzentes do Atomium: um final futurista e à altura da sua aventura pela língua francesa.',
        phrases: [
          { fr: 'Deux billets, s\'il vous plaît.', en: 'Two tickets, please.', pt: 'Dois ingressos, por favor.' },
          { fr: 'Quel voyage incroyable !', en: 'What an incredible journey!', pt: 'Que viagem incrível!' },
        ],
        quiz: { question: 'The Atomium, built for Expo 58, represents a magnified iron…?', questionPt: 'O Atomium, construído para a Expo 58, representa um... de ferro ampliado?', options: ['Crystal', 'Snowflake', 'Star'], correct: 'Crystal', explanation: 'It models a unit cell of an iron crystal, enlarged 165 billion times.', explanationPt: 'Ele reproduz uma célula unitária de um cristal de ferro, ampliada 165 bilhões de vezes.' },
      },
    ],
  },

];

export default cities;
