// Italian journey content (A1) for a Portuguese-speaking learner. Same shape as
// the French/German packs: an array of cities, each with .lessons and an
// immersive .places[] route. PassportTab also reads these cities
// (id/name/icon/lessons) for the passport.
//
// article: 'il' | 'la' | 'lo' | "l'" | 'i' | 'le' | 'gli' drives the coloured
// gender badge in LessonView; null for words that take no article. Route phrases
// use { it, en } — RouteJourney renders `it` as the native (Italian) line and
// `en` as its translation; here the `en` field holds the Portuguese gloss.
// Descriptions, explanations, questions and translations are in Portuguese (the
// learner's language); Italian words, examples and phrases stay in Italian.

const cities = [
  {
    id: 'rome',
    name: 'Roma',
    tagline: 'Benvenuti a Roma!',
    theme: 'Saudações & apresentações',
    accentColor: '#009246',
    icon: '🏛️',
    description:
      'A viagem começa na Cidade Eterna. Entre o Coliseu, o Vaticano e as moedas ' +
      'atiradas na Fontana di Trevi, o viajante aprende as primeiras palavras de que ' +
      'todo visitante precisa: como dizer olá, obrigado e tchau, e como se apresentar.',
    vocabTopics: ['Saudações', 'Por favor & obrigado', 'Apresentar-se'],
    grammarTopic: 'O verbo essere (ser/estar) no presente',
    lessons: [
      {
        id: 'rome-1',
        title: 'Primeiras palavras',
        description: 'Olá, obrigado, tchau e dizer o seu nome.',
        steps: [
          { type: 'vocab', word: 'ciao', article: null, english: 'oi / tchau (informal)', example: 'Ciao! Come stai? Oi! Tudo bem?' },
          { type: 'vocab', word: 'buongiorno', article: null, english: 'bom dia / olá', example: 'Buongiorno, signora! Bom dia, senhora!' },
          { type: 'vocab', word: 'grazie', article: null, english: 'obrigado', example: 'Grazie mille! Muito obrigado!' },
          { type: 'vocab', word: 'per favore', article: null, english: 'por favor', example: 'Un caffè, per favore. Um café, por favor.' },
          { type: 'vocab', word: 'mi chiamo…', article: null, english: 'meu nome é…', example: 'Mi chiamo Marco. Meu nome é Marco.' },
          {
            type: 'grammar',
            title: 'O verbo essere (ser/estar)',
            explanation: 'Essere é o verbo italiano mais essencial e é irregular. As formas do presente são: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.',
            examples: [
              'Io sono di Roma. Eu sou de Roma.',
              'Tu sei italiano? Você é italiano?',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Como se diz "obrigado"?', options: ['ciao', 'grazie', 'per favore'], correct: 'grazie' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "Eu sou de Roma": Io ___ di Roma.', correct: 'sono' },
        ],
      },
      {
        id: 'rome-2',
        title: 'Números & pedidos',
        description: 'Contar até dez e pedir um café no bar.',
        steps: [
          { type: 'vocab', word: 'uno', article: null, english: 'um', example: 'Un caffè, per favore. Um café, por favor.' },
          { type: 'vocab', word: 'due', article: null, english: 'dois', example: 'Due cornetti. Dois croissants.' },
          { type: 'vocab', word: 'tre', article: null, english: 'três', example: 'Sono le tre. São três horas.' },
          { type: 'vocab', word: 'quanto costa?', article: null, english: 'quanto custa?', example: 'Quanto costa un gelato? Quanto custa um sorvete?' },
          { type: 'vocab', word: 'il conto', article: 'il', english: 'a conta', example: 'Il conto, per favore. A conta, por favor.' },
          {
            type: 'grammar',
            title: 'O verbo avere (ter)',
            explanation: 'Avere significa "ter" e é usado para idade, fome e sede. As formas do presente são: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno.',
            examples: [
              'Ho fame. Estou com fome (literalmente "tenho fome").',
              'Quanti anni hai? Quantos anos você tem (literalmente "quantos anos você tem")?',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Qual número é "due"?', options: ['um', 'dois', 'três'], correct: 'dois' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Peça a conta: Il ___, per favore.', correct: 'conto' },
        ],
      },
    ],
    places: [
      {
        id: 'rome-colosseum',
        name: 'Colosseo',
        icon: '🏟️',
        coords: [41.8902, 12.4922],
        wikiTitle: 'Colosseum',
        narrative:
          'Diante dos imensos arcos do Coliseu, com dois mil anos, o viajante puxa ' +
          'conversa com outro visitante na fila.',
        phrases: [
          { it: 'Buongiorno!', en: 'Bom dia!' },
          { it: 'Il Colosseo è enorme.', en: 'O Coliseu é enorme.' },
          { it: 'Grazie mille!', en: 'Muito obrigado!' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'O que significa "buongiorno"?',
          options: ['Bom dia / olá', 'Tchau', 'Obrigado'],
          correct: 'Bom dia / olá',
          explanation: 'Buongiorno (literalmente "bom dia") é a saudação educada padrão até a tarde.',
        },
      },
      {
        id: 'rome-vatican',
        name: 'Basilica di San Pietro',
        icon: '⛪',
        coords: [41.9022, 12.4539],
        wikiTitle: "St. Peter's Basilica",
        narrative:
          'Do outro lado da fronteira, na Cidade do Vaticano, o viajante atravessa a ' +
          'grande praça com colunatas e cumprimenta um guia antes de começar o tour.',
        phrases: [
          { it: 'Ciao, mi chiamo Anna.', en: 'Oi, meu nome é Anna.' },
          { it: 'Piacere!', en: 'Prazer!' },
          { it: 'Sono di São Paulo.', en: 'Eu sou de São Paulo.' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'Como se diz "meu nome é Anna"?',
          options: ['Mi chiamo Anna.', 'Grazie, Anna.', 'Ciao, Anna.'],
          correct: 'Mi chiamo Anna.',
          explanation: '"Mi chiamo…" significa literalmente "eu me chamo…", o jeito comum de dizer o seu nome.',
        },
      },
      {
        id: 'rome-trevi',
        name: 'Fontana di Trevi',
        icon: '⛲',
        coords: [41.9009, 12.4833],
        wikiTitle: 'Trevi Fountain',
        narrative:
          'Na barroca Fontana di Trevi, o viajante joga uma moeda por cima do ombro, a ' +
          'tradição que promete um retorno a Roma, e agradece ao transeunte que tirou a foto.',
        phrases: [
          { it: 'Per favore, una foto?', en: 'Uma foto, por favor?' },
          { it: 'Grazie!', en: 'Obrigado!' },
          { it: 'Prego.', en: 'De nada.' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'Alguém diz "grazie". Você responde…',
          options: ['Prego.', 'Ciao.', 'Sono.'],
          correct: 'Prego.',
          explanation: '"Prego" é a resposta padrão a "grazie", significando "de nada".',
        },
      },
      {
        id: 'rome-pantheon',
        name: 'Pantheon',
        icon: '🏛️',
        coords: [41.8986, 12.4769],
        wikiTitle: 'Pantheon, Rome',
        narrative:
          'Sob o grande óculo aberto do Pantheon, a luz cai sobre o piso de mármore. ' +
          'O viajante se despede de um novo amigo antes de pegar o trem para o norte.',
        phrases: [
          { it: 'Tu sei di Roma?', en: 'Você é de Roma?' },
          { it: 'Sì, sono romano.', en: 'Sim, sou romano.' },
          { it: 'Arrivederci!', en: 'Até logo!' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'Qual palavra é o verbo "ser/estar" (ele/ela é)?',
          options: ['è', 'ciao', 'mi'],
          correct: 'è',
          explanation: 'De essere: lui/lei è = "ele/ela é". Repare que o acento distingue è (é) de e (e).',
        },
      },
      {
        id: 'rome-forum',
        name: 'Foro Romano',
        icon: '🏛️',
        coords: [41.8925, 12.4853],
        wikiTitle: 'Roman Forum',
        narrative:
          'Caminhando pelas pedras antigas do Foro, outrora o coração pulsante do império, ' +
          'o viajante pede a um guia que passa indicações para o Monte Palatino.',
        phrases: [
          { it: 'Scusi, dov’è il Palatino?', en: 'Com licença, onde fica o Palatino?' },
          { it: 'È sempre dritto.', en: 'É sempre em frente.' },
          { it: 'Grazie, molto gentile!', en: 'Obrigado, muito gentil!' },
        ],
        lessonId: 'rome-1',
        quiz: {
          question: 'Como dizer educadamente "com licença" para chamar a atenção?',
          options: ['Scusi', 'Prego', 'Arrivederci'],
          correct: 'Scusi',
          explanation: '"Scusi" é o "com licença" formal, usado com estranhos; a forma informal é "scusa".',
        },
      },
      {
        id: 'rome-spagna',
        name: 'Piazza di Spagna',
        icon: '🪜',
        coords: [41.9058, 12.4823],
        wikiTitle: 'Spanish Steps',
        narrative:
          'Sentado na ampla escadaria da Piazza di Spagna sob o sol da tarde, o viajante ' +
          'compra duas bolas de sorvete numa barraca próxima e pratica os números.',
        phrases: [
          { it: 'Due gelati, per favore.', en: 'Dois sorvetes, por favor.' },
          { it: 'Quanto costa?', en: 'Quanto custa?' },
          { it: 'Sei euro.', en: 'Seis euros.' },
        ],
        lessonId: 'rome-2',
        quiz: {
          question: 'Como se pergunta "quanto custa?"',
          options: ['Quanto costa?', 'Come stai?', 'Dov’è?'],
          correct: 'Quanto costa?',
          explanation: '"Quanto costa?" significa literalmente "quanto custa?", a frase para qualquer preço.',
        },
      },
      {
        id: 'rome-navona',
        name: 'Piazza Navona',
        icon: '⛲',
        coords: [41.8992, 12.4731],
        wikiTitle: 'Piazza Navona',
        narrative:
          'Na animada Piazza Navona, cercada pelas fontes de Bernini e mesas de café, o ' +
          'viajante se senta e pede um café, depois pede a conta.',
        phrases: [
          { it: 'Un caffè, per favore.', en: 'Um café, por favor.' },
          { it: 'Il conto, per favore.', en: 'A conta, por favor.' },
          { it: 'Ecco a lei.', en: 'Aqui está.' },
        ],
        lessonId: 'rome-2',
        quiz: {
          question: 'Você terminou de comer. Como pede a conta?',
          options: ['Il conto, per favore.', 'Un caffè, per favore.', 'Buongiorno!'],
          correct: 'Il conto, per favore.',
          explanation: '"Il conto" é a conta; acrescentar "per favore" mantém a educação.',
        },
      },
      {
        id: 'rome-trastevere',
        name: 'Trastevere',
        icon: '🍝',
        coords: [41.8896, 12.4695],
        wikiTitle: 'Trastevere',
        narrative:
          'Ao cair da noite sobre as ruelas de pedra de Trastevere, o viajante encontra ' +
          'uma trattoria, pede um prato de massa e brinda com um novo amigo.',
        phrases: [
          { it: 'Ho fame!', en: 'Estou com fome!' },
          { it: 'Una pasta, per favore.', en: 'Um prato de massa, por favor.' },
          { it: 'Salute!', en: 'Saúde!' },
        ],
        lessonId: 'rome-2',
        quiz: {
          question: 'Qual frase significa "estou com fome"?',
          options: ['Ho fame!', 'Ho sete!', 'Sto bene!'],
          correct: 'Ho fame!',
          explanation: 'O italiano usa avere (ter) para a fome: "ho fame" é literalmente "tenho fome".',
        },
      },
    ],
  },

  {
    id: 'florence',
    name: 'Firenze',
    tagline: 'La culla del Rinascimento',
    theme: 'Comida, bebida & os artigos',
    accentColor: '#B8860B',
    icon: '🎨',
    description:
      'O berço do Renascimento, onde a cúpula de Brunelleschi coroa a cidade e a Ponte ' +
      'Vecchio cruza o Arno. Entre um café no bar e um almoço toscano, o viajante aprende ' +
      'a pedir comida e bebida e a lidar com os artigos de gênero do italiano.',
    vocabTopics: ['Comida & bebida', 'Pedir com vorrei', 'O artigo definido'],
    grammarTopic: 'O artigo definido: il / la / lo / l’',
    lessons: [
      {
        id: 'florence-1',
        title: 'No bar',
        description: 'Café, comida e como pedir o que você quer.',
        steps: [
          { type: 'vocab', word: 'il caffè', article: 'il', english: 'café', example: 'Un caffè, per favore. Um café, por favor.' },
          { type: 'vocab', word: 'la pizza', article: 'la', english: 'pizza', example: 'La pizza è buonissima. A pizza está deliciosa.' },
          { type: 'vocab', word: 'il vino', article: 'il', english: 'vinho', example: 'Il vino rosso, per favore. Vinho tinto, por favor.' },
          { type: 'vocab', word: "l'acqua", article: "l'", english: 'água', example: "Vorrei dell'acqua. Eu queria um pouco de água." },
          { type: 'vocab', word: 'vorrei', article: null, english: 'eu queria / gostaria', example: 'Vorrei un gelato. Eu queria um sorvete.' },
          {
            type: 'grammar',
            title: 'O artigo definido (o/a)',
            explanation: 'O "o/a" italiano muda conforme o substantivo. Masculino: il (antes da maioria das consoantes), lo (antes de s+consoante, z), l’ (antes de vogal). Feminino: la, l’ (antes de vogal).',
            examples: [
              'il vino, lo studente, l’amico (masculino)',
              'la pizza, l’acqua (feminino)',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Qual palavra significa "vinho"?', options: ['il caffè', 'il vino', "l'acqua"], correct: 'il vino' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "a pizza" (feminino): ___ pizza', correct: 'la' },
        ],
      },
    ],
    places: [
      {
        id: 'florence-duomo',
        name: 'Duomo',
        icon: '⛪',
        coords: [43.7731, 11.2560],
        wikiTitle: 'Florence Cathedral',
        narrative:
          'O viajante sobe até o topo da cúpula de telhas vermelhas de Brunelleschi, com ' +
          'toda Florença aos seus pés, e depois para num café na piazza.',
        phrases: [
          { it: 'Un caffè, per favore.', en: 'Um café, por favor.' },
          { it: 'Il Duomo è bellissimo.', en: 'O Duomo é lindíssimo.' },
          { it: 'Quanto costa?', en: 'Quanto custa?' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'Como pedir "um café, por favor"?',
          options: ['Un caffè, per favore.', 'Il vino, grazie.', 'Vorrei l’acqua.'],
          correct: 'Un caffè, per favore.',
          explanation: 'Un caffè = "um café"; per favore = "por favor".',
        },
      },
      {
        id: 'florence-pontevecchio',
        name: 'Ponte Vecchio',
        icon: '🌉',
        coords: [43.7680, 11.2531],
        wikiTitle: 'Ponte Vecchio',
        narrative:
          'Na ponte medieval repleta de ourivesarias, o viajante para para ver o Arno ' +
          'passar e pede uma taça de Chianti numa pequena janela de vinho.',
        phrases: [
          { it: 'Vorrei un vino rosso.', en: 'Eu queria um vinho tinto.' },
          { it: "L'acqua, per favore.", en: 'Água, por favor.' },
          { it: 'Grazie, buonissimo!', en: 'Obrigado, delicioso!' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'O que significa "vorrei"?',
          options: ['Eu queria', 'Quanto', 'Obrigado'],
          correct: 'Eu queria',
          explanation: '"Vorrei" é o jeito educado de pedir algo: "eu queria…".',
        },
      },
      {
        id: 'florence-uffizi',
        name: 'Galleria degli Uffizi',
        icon: '🖼️',
        coords: [43.7678, 11.2551],
        wikiTitle: 'Uffizi',
        narrative:
          'Dentro dos Uffizi, o Nascimento de Vênus de Botticelli brilha na parede. O ' +
          'viajante pergunta ao atendente onde comprar o ingresso.',
        phrases: [
          { it: 'Vorrei un biglietto.', en: 'Eu queria um ingresso.' },
          { it: 'Dov’è la Venere?', en: 'Onde fica a Vênus?' },
          { it: 'È bellissima!', en: 'É lindíssima!' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'Qual artigo vai com "acqua" (feminino, começa com vogal)?',
          options: ["l'", 'il', 'lo'],
          correct: "l'",
          explanation: 'Antes de vogal, ambos os gêneros usam l’, então é l’acqua.',
        },
      },
      {
        id: 'florence-signoria',
        name: 'Piazza della Signoria',
        icon: '🗿',
        coords: [43.7696, 11.2558],
        wikiTitle: 'Piazza della Signoria',
        narrative:
          'No museu a céu aberto da Piazza della Signoria, uma cópia do David de ' +
          'Michelangelo monta guarda. O viajante para numa mesa de café e pede algo gelado.',
        phrases: [
          { it: 'Vorrei un tè freddo.', en: 'Eu queria um chá gelado.' },
          { it: 'Con ghiaccio, per favore.', en: 'Com gelo, por favor.' },
          { it: 'Il David è enorme!', en: 'O David é enorme!' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'Qual artigo vai com "vino" (masculino, antes de consoante)?',
          options: ['il', 'la', "l'"],
          correct: 'il',
          explanation: 'Substantivos masculinos antes da maioria das consoantes usam "il": il vino, il caffè.',
        },
      },
      {
        id: 'florence-mercato',
        name: 'Mercato Centrale',
        icon: '🍅',
        coords: [43.7766, 11.2536],
        wikiTitle: 'Mercato Centrale (Florence)',
        narrative:
          'Sob o teto de ferro e vidro do Mercato Centrale, as bancas transbordam de queijo, ' +
          'pão e salame toscano. O viajante compra o almoço e pratica os nomes dos alimentos.',
        phrases: [
          { it: 'Vorrei del pane.', en: 'Eu queria um pouco de pão.' },
          { it: 'Il formaggio è buonissimo.', en: 'O queijo é delicioso.' },
          { it: 'Quanto costa al chilo?', en: 'Quanto custa o quilo?' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'O que significa "vorrei del pane"?',
          options: ['Eu queria um pouco de pão', 'Onde fica o pão', 'O pão é bom'],
          correct: 'Eu queria um pouco de pão',
          explanation: '"Del" combina di + il e significa "um pouco de" para substantivos masculinos: del pane = um pouco de pão.',
        },
      },
      {
        id: 'florence-santacroce',
        name: 'Basilica di Santa Croce',
        icon: '⛪',
        coords: [43.7686, 11.2624],
        wikiTitle: 'Santa Croce, Florence',
        narrative:
          'Dentro de Santa Croce estão os túmulos de Michelangelo, Galileu e Maquiavel. O ' +
          'viajante se demora ali e depois encontra uma gelateria próxima para algo doce.',
        phrases: [
          { it: 'Vorrei un gelato, per favore.', en: 'Eu queria um sorvete, por favor.' },
          { it: 'Alla fragola.', en: 'De morango.' },
          { it: 'La chiesa è bellissima.', en: 'A igreja é lindíssima.' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'Qual artigo vai com "acqua" e "amico" (ambos começam com vogal)?',
          options: ["l'", 'il', 'la'],
          correct: "l'",
          explanation: 'Antes de vogal, ambos os gêneros usam o artigo elidido l’: l’acqua, l’amico.',
        },
      },
      {
        id: 'florence-michelangelo',
        name: 'Piazzale Michelangelo',
        icon: '🌇',
        coords: [43.7629, 11.2650],
        wikiTitle: 'Piazzale Michelangelo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Panorama_di_Firenze_centro_visto_dal_Piazzale_Michelangelo.jpg/1280px-Panorama_di_Firenze_centro_visto_dal_Piazzale_Michelangelo.jpg',
        narrative:
          'Ao pôr do sol o viajante sobe até o terraço para a vista clássica sobre os ' +
          'telhados e o rio, sorvete na mão, antes do trem para Veneza.',
        phrases: [
          { it: 'Vorrei un gelato.', en: 'Eu queria um sorvete.' },
          { it: 'Il panorama è bellissimo.', en: 'O panorama é lindíssimo.' },
          { it: 'Arrivederci, Firenze!', en: 'Até logo, Firenze!' },
        ],
        lessonId: 'florence-1',
        quiz: {
          question: 'O que significa "il gelato"?',
          options: ['Sorvete', 'Vinho', 'Ingresso'],
          correct: 'Sorvete',
          explanation: 'Il gelato é o sorvete italiano; "il" é o "o" masculino.',
        },
      },
    ],
  },

  {
    id: 'venice',
    name: 'Venezia',
    tagline: 'La città sull’acqua',
    theme: 'Como se locomover & direções',
    accentColor: '#1a6b8a',
    icon: '🚤',
    description:
      'Uma cidade construída sobre a água, entrelaçada por canais e cruzada por centenas ' +
      'de pontes. Sem carros e com um labirinto de vielas, Veneza é o lugar perfeito para ' +
      'aprender a perguntar onde ficam as coisas e a dar e seguir direções simples.',
    vocabTopics: ['Perguntar onde (dov’è)', 'Esquerda / direita / em frente', 'Lugares na cidade'],
    grammarTopic: 'Perguntar localização com dov’è + substantivo',
    lessons: [
      {
        id: 'venice-1',
        title: 'Encontrando o caminho',
        description: 'Perguntar onde algo fica e entender a resposta.',
        steps: [
          { type: 'vocab', word: 'dov’è…?', article: null, english: 'onde fica…?', example: 'Dov’è il ponte? Onde fica a ponte?' },
          { type: 'vocab', word: 'a destra', article: null, english: 'à direita', example: 'Il museo è a destra. O museu fica à direita.' },
          { type: 'vocab', word: 'a sinistra', article: null, english: 'à esquerda', example: 'La chiesa è a sinistra. A igreja fica à esquerda.' },
          { type: 'vocab', word: 'sempre dritto', article: null, english: 'sempre em frente', example: 'Vai sempre dritto. Vá sempre em frente.' },
          { type: 'vocab', word: 'il ponte', article: 'il', english: 'ponte', example: 'Il ponte di Rialto è famoso. A Ponte de Rialto é famosa.' },
          {
            type: 'grammar',
            title: 'Perguntar onde: dov’è',
            explanation: 'Dov’è é uma contração de "dove è" (onde é/fica). Use dov’è + um substantivo para perguntar uma localização. A resposta geralmente dá uma direção: a destra, a sinistra, sempre dritto.',
            examples: [
              'Dov’è la stazione? Onde fica a estação?',
              'È a destra. Fica à direita.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Como se diz "à direita"?', options: ['a destra', 'a sinistra', 'sempre dritto'], correct: 'a destra' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "Onde fica a ponte?": ___ il ponte?', correct: 'dov’è' },
        ],
      },
    ],
    places: [
      {
        id: 'venice-sanmarco',
        name: 'Piazza San Marco',
        icon: '🕊️',
        coords: [45.4341, 12.3388],
        wikiTitle: "Piazza San Marco",
        narrative:
          'Na grande praça, os pombos se dispersam diante da basílica dourada e o ' +
          'campanário se ergue ao alto. O viajante para um morador para perguntar o caminho.',
        phrases: [
          { it: 'Scusi, dov’è il Ponte di Rialto?', en: 'Com licença, onde fica a Ponte de Rialto?' },
          { it: 'Sempre dritto.', en: 'Sempre em frente.' },
          { it: 'Grazie mille!', en: 'Muito obrigado!' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'O que significa "dov’è"?',
          options: ['Onde fica', 'Quanto', 'Obrigado'],
          correct: 'Onde fica',
          explanation: 'Dov’è = dove + è, "onde fica". Comece as perguntas de localização com ele.',
        },
      },
      {
        id: 'venice-rialto',
        name: 'Ponte di Rialto',
        icon: '🌉',
        coords: [45.4380, 12.3358],
        wikiTitle: 'Rialto Bridge',
        narrative:
          'No arco de mármore sobre o Grande Canal, as bancas do mercado se aglomeram dos ' +
          'dois lados. O viajante segue as indicações e chega bem na hora.',
        phrases: [
          { it: 'Il mercato è a destra.', en: 'O mercado fica à direita.' },
          { it: 'La chiesa è a sinistra.', en: 'A igreja fica à esquerda.' },
          { it: 'Perfetto, grazie!', en: 'Perfeito, obrigado!' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'Como se diz "à esquerda"?',
          options: ['a sinistra', 'a destra', 'sempre dritto'],
          correct: 'a sinistra',
          explanation: 'A sinistra = "à esquerda"; a destra = "à direita".',
        },
      },
      {
        id: 'venice-canalgrande',
        name: 'Canal Grande',
        icon: '🚤',
        coords: [45.4408, 12.3155],
        wikiTitle: 'Grand Canal (Venice)',
        narrative:
          'O viajante embarca num vaporetto, o ônibus aquático que serpenteia pelo Grande ' +
          'Canal diante de palácios desbotados, e pergunta se é o barco certo.',
        phrases: [
          { it: 'Dov’è il vaporetto?', en: 'Onde fica o ônibus aquático?' },
          { it: 'Vai sempre dritto.', en: 'Vá sempre em frente.' },
          { it: 'È lontano?', en: 'É longe?' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'O que significa "sempre dritto"?',
          options: ['Sempre em frente', 'À direita', 'Volte atrás'],
          correct: 'Sempre em frente',
          explanation: 'Sempre dritto, literalmente "sempre reto", ou seja, siga sempre em frente.',
        },
      },
      {
        id: 'venice-sospiri',
        name: 'Ponte dei Sospiri',
        icon: '🌉',
        coords: [45.4342, 12.3410],
        wikiTitle: 'Bridge of Sighs',
        narrative:
          'A ponte branca fechada já levou prisioneiros às suas celas, com o último suspiro ' +
          'diante da vista da lagoa. O viajante pergunta a um gondoleiro como chegar até ela.',
        phrases: [
          { it: 'Scusi, dov’è il Ponte dei Sospiri?', en: 'Com licença, onde fica a Ponte dos Suspiros?' },
          { it: 'È dietro l’angolo.', en: 'É logo ali na esquina.' },
          { it: 'A sinistra, poi dritto.', en: 'À esquerda, depois em frente.' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'O que significa "dietro l’angolo"?',
          options: ['Logo ali na esquina', 'À direita', 'Longe'],
          correct: 'Logo ali na esquina',
          explanation: 'Dietro = atrás, l’angolo = a esquina; juntos, "logo ali na esquina".',
        },
      },
      {
        id: 'venice-accademia',
        name: 'Gallerie dell’Accademia',
        icon: '🖼️',
        coords: [45.4314, 12.3280],
        wikiTitle: 'Gallerie dell\'Accademia',
        narrative:
          'Atravessando uma ponte de madeira na outra margem, a Accademia guarda as maiores ' +
          'pinturas de Veneza. O viajante pergunta por onde entrar e onde deixar a bolsa.',
        phrases: [
          { it: 'Dov’è la biglietteria?', en: 'Onde fica a bilheteria?' },
          { it: 'È al primo piano.', en: 'Fica no primeiro andar.' },
          { it: 'Il guardaroba è a destra.', en: 'O guarda-volumes fica à direita.' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'Qual frase pergunta "onde fica a bilheteria?"',
          options: ['Dov’è la biglietteria?', 'Quanto costa?', 'A che ora?'],
          correct: 'Dov’è la biglietteria?',
          explanation: 'Dov’è + substantivo pergunta uma localização; la biglietteria é a bilheteria.',
        },
      },
      {
        id: 'venice-burano',
        name: 'Burano',
        icon: '🎨',
        coords: [45.4853, 12.4170],
        wikiTitle: 'Burano',
        narrative:
          'Uma viagem de vaporetto lagoa adentro chega a Burano, com suas casas pintadas de ' +
          'todas as cores. O viajante se perde um pouco nas vielas e pergunta pelo barco de volta.',
        phrases: [
          { it: 'Dov’è il vaporetto per Venezia?', en: 'Onde fica o barco para Veneza?' },
          { it: 'Vada sempre dritto.', en: 'Vá sempre em frente.' },
          { it: 'È lontano da qui?', en: 'É longe daqui?' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'O que significa "è lontano?"',
          options: ['É longe?', 'É aqui?', 'Está aberto?'],
          correct: 'É longe?',
          explanation: 'Lontano = longe; vicino é o oposto, "perto".',
        },
      },
      {
        id: 'venice-palazzoducale',
        name: 'Palazzo Ducale',
        icon: '🏰',
        coords: [45.4337, 12.3401],
        wikiTitle: "Doge's Palace",
        narrative:
          'Ao lado da lagoa, o palácio rosa e branco reluz ao sol. O viajante encontra a ' +
          'entrada após uma última pergunta e segue para o trem a Milão.',
        phrases: [
          { it: 'Dov’è l’entrata?', en: 'Onde fica a entrada?' },
          { it: 'È a destra del ponte.', en: 'Fica à direita da ponte.' },
          { it: 'Arrivederci, Venezia!', en: 'Até logo, Venezia!' },
        ],
        lessonId: 'venice-1',
        quiz: {
          question: 'Qual palavra significa "ponte"?',
          options: ['il ponte', 'la chiesa', 'il mercato'],
          correct: 'il ponte',
          explanation: 'Il ponte = a ponte; Veneza é famosa por ter mais de 400 delas.',
        },
      },
    ],
  },

  {
    id: 'milan',
    name: 'Milano',
    tagline: 'Moda, design e numeri',
    theme: 'Compras, preços & números',
    accentColor: '#C8102E',
    icon: '🛍️',
    description:
      'A capital italiana da moda e das finanças, onde o Duomo gótico encara a Galleria de ' +
      'teto de vidro. Entre as butiques e as vitrines, o viajante aprende os números, como ' +
      'perguntar um preço e como fazer compras.',
    vocabTopics: ['Números 1-10', 'Perguntar o preço', 'Compras'],
    grammarTopic: 'Números e "quanto costa?"',
    lessons: [
      {
        id: 'milan-1',
        title: 'Quanto custa?',
        description: 'Contar, preços e comprar algo.',
        steps: [
          { type: 'vocab', word: 'uno', article: null, english: 'um', example: 'Un caffè, uno solo. Um café, só um.' },
          { type: 'vocab', word: 'due', article: null, english: 'dois', example: 'Due biglietti, per favore. Dois ingressos, por favor.' },
          { type: 'vocab', word: 'tre', article: null, english: 'três', example: 'Sono le tre. São três horas.' },
          { type: 'vocab', word: 'quanto costa?', article: null, english: 'quanto custa?', example: 'Quanto costa la borsa? Quanto custa a bolsa?' },
          { type: 'vocab', word: "l'euro", article: "l'", english: 'euro', example: 'Costa dieci euro. Custa dez euros.' },
          {
            type: 'grammar',
            title: 'Números de 1 a 10',
            explanation: 'uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci. Para perguntar um preço: "Quanto costa?" (para uma coisa) ou "Quanto costano?" (para várias).',
            examples: [
              'Quanto costa? — Dieci euro. Quanto custa? — Dez euros.',
              'Cinque, sei, sette… cinco, seis, sete…',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Como se pergunta "quanto custa?"', options: ['Quanto costa?', 'Dov’è?', 'Come stai?'], correct: 'Quanto costa?' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "___ costa?" (quanto)', correct: 'quanto' },
        ],
      },
    ],
    places: [
      {
        id: 'milan-duomo',
        name: 'Duomo di Milano',
        icon: '⛪',
        coords: [45.4642, 9.1919],
        wikiTitle: 'Milan Cathedral',
        narrative:
          'Uma floresta de pináculos de mármore se ergue contra o céu. O viajante compra um ' +
          'ingresso para os terraços do telhado e pergunta quanto custa.',
        phrases: [
          { it: 'Quanto costa il biglietto?', en: 'Quanto custa o ingresso?' },
          { it: 'Due biglietti, per favore.', en: 'Dois ingressos, por favor.' },
          { it: 'Ecco a lei.', en: 'Aqui está.' },
        ],
        lessonId: 'milan-1',
        quiz: {
          question: 'O que significa "quanto costa?"',
          options: ['Quanto custa?', 'Onde fica?', 'O que é?'],
          correct: 'Quanto custa?',
          explanation: 'Quanto = quanto; costa = custa. Juntos: "quanto custa?".',
        },
      },
      {
        id: 'milan-galleria',
        name: 'Galleria Vittorio Emanuele II',
        icon: '🛍️',
        coords: [45.4659, 9.1899],
        wikiTitle: 'Galleria Vittorio Emanuele II',
        narrative:
          'Sob a grande cúpula de vidro da mais antiga galeria comercial do mundo, o ' +
          'viajante passa vitrines de butiques de luxo e pergunta o preço de uma bolsa de couro.',
        phrases: [
          { it: 'Quanto costa questa borsa?', en: 'Quanto custa esta bolsa?' },
          { it: 'Costa cinquanta euro.', en: 'Custa cinquenta euros.' },
          { it: 'È troppo caro!', en: 'É caro demais!' },
        ],
        lessonId: 'milan-1',
        quiz: {
          question: 'Qual palavra significa "euro"?',
          options: ["l'euro", 'il ponte', 'la borsa'],
          correct: "l'euro",
          explanation: 'L’euro é a moeda; leva l’ porque começa com vogal.',
        },
      },
      {
        id: 'milan-scala',
        name: 'La Scala',
        icon: '🎭',
        coords: [45.4674, 9.1895],
        wikiTitle: 'La Scala',
        narrative:
          'Na casa de ópera mundialmente famosa, o viajante confere a programação e conta o ' +
          'preço de dois lugares para a apresentação da noite.',
        phrases: [
          { it: 'Vorrei due biglietti.', en: 'Eu queria dois ingressos.' },
          { it: 'Quanto costano?', en: 'Quanto custam?' },
          { it: 'Trenta euro in tutto.', en: 'Trinta euros no total.' },
        ],
        lessonId: 'milan-1',
        quiz: {
          question: 'Como se diz "dois"?',
          options: ['due', 'tre', 'uno'],
          correct: 'due',
          explanation: 'uno (1), due (2), tre (3). "Due biglietti" = dois ingressos.',
        },
      },
      {
        id: 'milan-castello',
        name: 'Castello Sforzesco',
        icon: '🏰',
        coords: [45.4705, 9.1794],
        wikiTitle: 'Sforzesco Castle',
        narrative:
          'Nos pátios do Castello Sforzesco de tijolos vermelhos, o viajante relaxa no parque ' +
          'antes da última etapa rumo ao sul, até Nápoles.',
        phrases: [
          { it: 'Un gelato, quanto costa?', en: 'Um sorvete, quanto custa?' },
          { it: 'Tre euro.', en: 'Três euros.' },
          { it: 'Arrivederci, Milano!', en: 'Até logo, Milano!' },
        ],
        lessonId: 'milan-1',
        quiz: {
          question: 'O que significa "tre"?',
          options: ['Três', 'Dois', 'Um'],
          correct: 'Três',
          explanation: 'tre = três, o terceiro dos números uno, due, tre.',
        },
      },
    ],
  },

  {
    id: 'naples',
    name: 'Napoli',
    tagline: 'Vedi Napoli e poi mori',
    theme: 'Comer fora & dizer do que você gosta',
    accentColor: '#E65100',
    icon: '🍕',
    description:
      'O sul caótico e ensolarado, berço da pizza e porta de entrada para o Vesúvio. Nas ' +
      'trattorias da cidade velha o viajante aprende a comer fora, a dizer do que gosta e a ' +
      'pedir a conta, um final digno para a viagem pela Itália.',
    vocabTopics: ['No restaurante', 'Dizer do que você gosta', 'Pedir a conta'],
    grammarTopic: 'Expressar gostos: mi piace / mi piacciono',
    lessons: [
      {
        id: 'naples-1',
        title: 'No restaurante',
        description: 'Pedir, dizer do que você gosta e pagar.',
        steps: [
          { type: 'vocab', word: 'il ristorante', article: 'il', english: 'restaurante', example: 'Il ristorante è aperto. O restaurante está aberto.' },
          { type: 'vocab', word: 'il conto', article: 'il', english: 'a conta', example: 'Il conto, per favore. A conta, por favor.' },
          { type: 'vocab', word: 'mi piace', article: null, english: 'eu gosto (disso)', example: 'Mi piace la pizza. Eu gosto de pizza.' },
          { type: 'vocab', word: 'buonissimo', article: null, english: 'delicioso', example: 'Che buonissimo! Que delícia!' },
          { type: 'vocab', word: 'arrivederci', article: null, english: 'até logo / tchau', example: 'Arrivederci e grazie! Até logo e obrigado!' },
          {
            type: 'grammar',
            title: 'Dizer do que você gosta: mi piace',
            explanation: 'Use "mi piace" + uma coisa no singular ("eu gosto de…") e "mi piacciono" + uma coisa no plural. Negue com non: "non mi piace" (eu não gosto disso).',
            examples: [
              'Mi piace la pizza. Eu gosto de pizza.',
              'Mi piacciono gli spaghetti. Eu gosto de espaguete.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Como você pede a conta?', options: ['Il conto, per favore.', 'Dov’è il ponte?', 'Quanto costa?'], correct: 'Il conto, per favore.' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "Eu gosto de pizza": Mi ___ la pizza.', correct: 'piace' },
        ],
      },
    ],
    places: [
      {
        id: 'naples-plebiscito',
        name: 'Piazza del Plebiscito',
        icon: '🏛️',
        coords: [40.8358, 14.2488],
        wikiTitle: 'Piazza del Plebiscito',
        narrative:
          'A vasta praça semicircular se abre entre o palácio real e a igreja de cúpula. ' +
          'O viajante a atravessa procurando um lugar para comer.',
        phrases: [
          { it: 'Dov’è un buon ristorante?', en: 'Onde fica um bom restaurante?' },
          { it: 'Mi piace la cucina napoletana.', en: 'Eu gosto da cozinha napolitana.' },
          { it: 'Grazie mille!', en: 'Muito obrigado!' },
        ],
        lessonId: 'naples-1',
        quiz: {
          question: 'O que significa "mi piace"?',
          options: ['Eu gosto (disso)', 'Eu queria', 'Quanto'],
          correct: 'Eu gosto (disso)',
          explanation: '"Mi piace" literalmente "isso me agrada", ou seja, "eu gosto disso".',
        },
      },
      {
        id: 'naples-spaccanapoli',
        name: 'Spaccanapoli',
        icon: '🍕',
        coords: [40.8494, 14.2570],
        wikiTitle: 'Spaccanapoli',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/View_of_Spaccanapoli_and_the_Centro_Direzionale_from_Castel_Sant%27Elmo%2C_Naples%2C_2010.jpg/1280px-View_of_Spaccanapoli_and_the_Centro_Direzionale_from_Castel_Sant%27Elmo%2C_Naples%2C_2010.jpg',
        narrative:
          'Descendo a estreita rua reta que corta a cidade velha, o cheiro de pizza feita em ' +
          'forno a lenha puxa o viajante para uma pequena pizzaria em busca da coisa de verdade.',
        phrases: [
          { it: 'Vorrei una pizza margherita.', en: 'Eu queria uma pizza margherita.' },
          { it: 'Buonissima!', en: 'Deliciosa!' },
          { it: 'Il conto, per favore.', en: 'A conta, por favor.' },
        ],
        lessonId: 'naples-1',
        quiz: {
          question: 'Como você pede a conta?',
          options: ['Il conto, per favore.', 'Mi piace, grazie.', 'Dov’è il conto costa?'],
          correct: 'Il conto, per favore.',
          explanation: 'Il conto = a conta; acrescente "per favore" para ser educado.',
        },
      },
      {
        id: 'naples-vesuvio',
        name: 'Vesuvio',
        icon: '🌋',
        coords: [40.8210, 14.4260],
        wikiTitle: 'Mount Vesuvius',
        narrative:
          'O viajante pega o ônibus subindo as encostas do famoso vulcão que soterrou Pompeia ' +
          'e olha para trás, sobre toda a baía de Nápoles.',
        phrases: [
          { it: 'Mi piace il panorama.', en: 'Eu gosto da vista.' },
          { it: 'Il vulcano è enorme.', en: 'O vulcão é enorme.' },
          { it: 'Che bello!', en: 'Que lindo!' },
        ],
        lessonId: 'naples-1',
        quiz: {
          question: 'Para dizer que você gosta de várias coisas você usa…',
          options: ['mi piacciono', 'mi piace', 'vorrei'],
          correct: 'mi piacciono',
          explanation: 'Coisa no singular → mi piace; coisas no plural → mi piacciono.',
        },
      },
      {
        id: 'naples-lungomare',
        name: 'Lungomare',
        icon: '🌊',
        coords: [40.8290, 14.2470],
        wikiTitle: 'Naples',
        narrative:
          'No calçadão à beira-mar ao pôr do sol, com o Vesúvio do outro lado da baía, o ' +
          'viajante aproveita uma última refeição napolitana antes de pegar a balsa rumo às ilhas do sul.',
        phrases: [
          { it: 'Mi piace molto Napoli!', en: 'Eu gosto muito de Nápoles!' },
          { it: 'Grazie di tutto.', en: 'Obrigado por tudo.' },
          { it: 'A presto!', en: 'Até breve!' },
        ],
        lessonId: 'naples-1',
        quiz: {
          question: 'Para dizer que você gosta de várias coisas você usa…',
          options: ['mi piacciono', 'mi piace molto', 'vorrei'],
          correct: 'mi piacciono',
          explanation: 'Coisa no singular → mi piace; coisas no plural → mi piacciono.',
        },
      },
    ],
  },

  {
    id: 'sicilia',
    name: 'Sicilia',
    tagline: 'L’isola del sole e dei vulcani',
    theme: 'O tempo & as estações',
    accentColor: '#8E24AA',
    icon: '🍋',
    description:
      'Uma balsa rumo ao sul, cruzando o estreito, leva o viajante à Sicília, a grande ilha ' +
      'do sol, dos limões, dos templos gregos e do cone fumegante do Etna. Entre mercados e ' +
      'ruínas, o viajante aprende a falar sobre o tempo e as estações.',
    vocabTopics: ['O tempo', 'As estações', 'Quente & frio'],
    grammarTopic: 'O tempo com fare: che tempo fa?',
    lessons: [
      {
        id: 'sicilia-1',
        title: 'Che tempo fa?',
        description: 'O tempo, as estações e dizer que está quente ou frio.',
        steps: [
          { type: 'vocab', word: 'il sole', article: 'il', english: 'o sol', example: 'C’è il sole. Está ensolarado.' },
          { type: 'vocab', word: 'la pioggia', article: 'la', english: 'a chuva', example: 'Non mi piace la pioggia. Eu não gosto da chuva.' },
          { type: 'vocab', word: 'fa caldo', article: null, english: 'está quente', example: 'Oggi fa caldo. Hoje está quente.' },
          { type: 'vocab', word: 'fa freddo', article: null, english: 'está frio', example: 'In inverno fa freddo. No inverno faz frio.' },
          { type: 'vocab', word: 'l’estate', article: "l'", english: 'o verão', example: 'In estate vado al mare. No verão eu vou à praia.' },
          {
            type: 'grammar',
            title: 'Falar sobre o tempo com fare',
            explanation: 'Para perguntar sobre o tempo, diga "Che tempo fa?" (Como está o tempo?). Responda com fare: "fa caldo" (está quente), "fa freddo" (está frio), "fa bel tempo" (está um tempo bom). Para sol e chuva use "c’è il sole" (está ensolarado) e "piove" (está chovendo).',
            examples: [
              'Che tempo fa oggi? Como está o tempo hoje?',
              'Fa caldo e c’è il sole. Está quente e ensolarado.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Como se diz "está quente"?', options: ['fa freddo', 'fa caldo', 'piove'], correct: 'fa caldo' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "Como está o tempo?": Che tempo ___?', correct: 'fa' },
        ],
      },
    ],
    places: [
      {
        id: 'sicilia-ballaro',
        name: 'Mercato di Ballarò',
        icon: '🍋',
        coords: [38.1112, 13.3524],
        wikiTitle: 'Ballarò',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ballar%C3%B2%2C_gente_en_el_mercado%2C_Palermo%2C_Sicilia%2C_Italia%2C_2015.JPG/1280px-Ballar%C3%B2%2C_gente_en_el_mercado%2C_Palermo%2C_Sicilia%2C_Italia%2C_2015.JPG',
        narrative:
          'No mais antigo mercado de rua de Palermo, o viajante passeia entre pirâmides de ' +
          'limões e peixes no gelo, enquanto os vendedores gritam sob um sol escaldante.',
        phrases: [
          { it: 'Oggi fa molto caldo.', en: 'Hoje está muito quente.' },
          { it: 'C’è il sole.', en: 'Está ensolarado.' },
          { it: 'Mi piacciono i limoni.', en: 'Eu gosto dos limões.' },
        ],
        lessonId: 'sicilia-1',
        quiz: {
          question: 'O que significa "c’è il sole"?',
          options: ['Está ensolarado', 'Está chovendo', 'Está frio'],
          correct: 'Está ensolarado',
          explanation: '"C’è il sole" literalmente "há o sol", ou seja, está ensolarado.',
        },
      },
      {
        id: 'sicilia-etna',
        name: 'Etna',
        icon: '🌋',
        coords: [37.7510, 14.9934],
        wikiTitle: 'Mount Etna',
        narrative:
          'O viajante sobe as encostas do maior vulcão ativo da Europa. Lá em cima, acima do ' +
          'calor de verão da costa, o ar de repente fica frio.',
        phrases: [
          { it: 'Quassù fa freddo.', en: 'Aqui em cima está frio.' },
          { it: 'Il vulcano è enorme.', en: 'O vulcão é enorme.' },
          { it: 'Che tempo fa in cima?', en: 'Como está o tempo no topo?' },
        ],
        lessonId: 'sicilia-1',
        quiz: {
          question: 'Como se diz "está frio"?',
          options: ['fa freddo', 'fa caldo', 'c’è il sole'],
          correct: 'fa freddo',
          explanation: 'fa freddo = está frio; fa caldo = está quente.',
        },
      },
      {
        id: 'sicilia-taormina',
        name: 'Teatro Antico di Taormina',
        icon: '🏛️',
        coords: [37.8525, 15.2919],
        wikiTitle: 'Taormina',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Sicily_Taormina_Teatro_Greco_Etna.jpg/1280px-Sicily_Taormina_Teatro_Greco_Etna.jpg',
        narrative:
          'Do antigo teatro grego esculpido na encosta, o viajante contempla o mar e o Etna ' +
          'juntos numa tarde clara e quente.',
        phrases: [
          { it: 'Fa bel tempo oggi.', en: 'Está um tempo bom hoje.' },
          { it: 'Mi piace l’estate in Sicilia.', en: 'Eu gosto do verão na Sicília.' },
          { it: 'Che bel panorama!', en: 'Que panorama lindo!' },
        ],
        lessonId: 'sicilia-1',
        quiz: {
          question: '"Fa bel tempo" significa…',
          options: ['Está um tempo bom', 'Está chovendo', 'É inverno'],
          correct: 'Está um tempo bom',
          explanation: '"Fa bel tempo" = o tempo está bom / agradável.',
        },
      },
      {
        id: 'sicilia-templi',
        name: 'Valle dei Templi',
        icon: '🏛️',
        coords: [37.2900, 13.5850],
        wikiTitle: 'Valle dei Templi',
        narrative:
          'Entre os dourados templos gregos de Agrigento, o viajante se despede da Sicília ' +
          'antes de embarcar na balsa noturna rumo ao oeste, à Sardenha.',
        phrases: [
          { it: 'In estate fa molto caldo qui.', en: 'No verão faz muito calor aqui.' },
          { it: 'D’inverno piove.', en: 'No inverno chove.' },
          { it: 'Arrivederci, Sicilia!', en: 'Até logo, Sicilia!' },
        ],
        lessonId: 'sicilia-1',
        quiz: {
          question: 'Qual palavra significa "verão"?',
          options: ['l’estate', 'l’inverno', 'la pioggia'],
          correct: 'l’estate',
          explanation: 'l’estate = verão; l’inverno = inverno.',
        },
      },
    ],
  },

  {
    id: 'sardegna',
    name: 'Sardegna',
    tagline: 'Mare cristallino e spiagge bianche',
    theme: 'Na praia & verbos do dia a dia',
    accentColor: '#0097A7',
    icon: '🏖️',
    description:
      'A última parada é a Sardenha, uma ilha de mar turquesa, praias brancas e misteriosas ' +
      'torres de pedra. Na areia e na água o viajante aprende os verbos do dia a dia que ' +
      'encerram a viagem pela Itália.',
    vocabTopics: ['Na praia', 'O mar', 'Atividades do dia a dia'],
    grammarTopic: 'Verbos regulares em -are no presente',
    lessons: [
      {
        id: 'sardegna-1',
        title: 'In spiaggia',
        description: 'A praia, o mar e os verbos regulares em -are.',
        steps: [
          { type: 'vocab', word: 'la spiaggia', article: 'la', english: 'a praia', example: 'La spiaggia è bianca. A praia é branca.' },
          { type: 'vocab', word: 'il mare', article: 'il', english: 'o mar', example: 'Il mare è cristallino. O mar é cristalino.' },
          { type: 'vocab', word: 'la sabbia', article: 'la', english: 'a areia', example: 'La sabbia è calda. A areia está quente.' },
          { type: 'vocab', word: 'nuotare', article: null, english: 'nadar', example: 'Mi piace nuotare. Eu gosto de nadar.' },
          { type: 'vocab', word: 'camminare', article: null, english: 'caminhar', example: 'Cammino sulla spiaggia. Eu caminho na praia.' },
          {
            type: 'grammar',
            title: 'Verbos regulares em -are no presente',
            explanation: 'A maioria dos verbos italianos termina em -are. Tire o -are e acrescente as terminações: io -o, tu -i, lui/lei -a, noi -iamo, voi -ate, loro -ano. Então nuotare → io nuoto, tu nuoti, lui nuota, noi nuotiamo, voi nuotate, loro nuotano.',
            examples: [
              'Io nuoto nel mare. Eu nado no mar.',
              'Noi camminiamo sulla spiaggia. Nós caminhamos na praia.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Como se diz "nadar"?', options: ['camminare', 'nuotare', 'parlare'], correct: 'nuotare' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "Eu nado no mar": Io ___ nel mare.', correct: 'nuoto' },
        ],
      },
    ],
    places: [
      {
        id: 'sardegna-poetto',
        name: 'Spiaggia del Poetto',
        icon: '🏖️',
        coords: [39.2016, 9.1699],
        wikiTitle: 'Poetto',
        narrative:
          'A balsa atraca em Cagliari e o viajante vai direto para o Poetto, a longa praia ' +
          'urbana onde os moradores nadam e passeiam na areia morna.',
        phrases: [
          { it: 'Mi piace la spiaggia.', en: 'Eu gosto da praia.' },
          { it: 'Io nuoto nel mare.', en: 'Eu nado no mar.' },
          { it: 'La sabbia è bianca.', en: 'A areia é branca.' },
        ],
        lessonId: 'sardegna-1',
        quiz: {
          question: 'O que significa "nuoto"?',
          options: ['Eu nado', 'Eu caminho', 'Eu falo'],
          correct: 'Eu nado',
          explanation: 'De nuotare (nadar): io nuoto = eu nado.',
        },
      },
      {
        id: 'sardegna-costasmeralda',
        name: 'Costa Smeralda',
        icon: '🐚',
        coords: [41.1300, 9.5300],
        wikiTitle: 'Costa Smeralda',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Costa_Smeralda_1.jpg/1280px-Costa_Smeralda_1.jpg',
        narrative:
          'Ao longo da costa esmeralda o viajante caminha entre enseadas de água ' +
          'incrivelmente turquesa e iates reluzentes.',
        phrases: [
          { it: 'Il mare è cristallino.', en: 'O mar é cristalino.' },
          { it: 'Cammino sulla spiaggia.', en: 'Eu caminho na praia.' },
          { it: 'Che bel mare!', en: 'Que mar lindo!' },
        ],
        lessonId: 'sardegna-1',
        quiz: {
          question: 'Qual é a forma "noi" (nós) de camminare?',
          options: ['camminiamo', 'cammino', 'camminano'],
          correct: 'camminiamo',
          explanation: 'Verbos em -are, forma noi: camminare → camminiamo (nós caminhamos).',
        },
      },
      {
        id: 'sardegna-alghero',
        name: 'Alghero',
        icon: '🏰',
        coords: [40.5589, 8.3190],
        wikiTitle: 'Alghero',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Alghero_-_Panorama_%2802%29.jpg/1280px-Alghero_-_Panorama_%2802%29.jpg',
        narrative:
          'Na cidade catalã amuralhada de Alghero, o viajante percorre as muralhas à ' +
          'beira-mar ao pôr do sol e pede um último prato de frutos do mar.',
        phrases: [
          { it: 'Passeggio sulle mura.', en: 'Eu passeio pelas muralhas.' },
          { it: 'Mi piace questa città.', en: 'Eu gosto desta cidade.' },
          { it: 'Il mare è bellissimo.', en: 'O mar é lindíssimo.' },
        ],
        lessonId: 'sardegna-1',
        quiz: {
          question: 'A terminação -o num verbo em -are (io nuoto) marca qual pessoa?',
          options: ['io (eu)', 'tu (você)', 'loro (eles)'],
          correct: 'io (eu)',
          explanation: 'io -o, tu -i, lui/lei -a: a terminação -o é a forma "io" (eu).',
        },
      },
      {
        id: 'sardegna-nuraghe',
        name: 'Su Nuraxi',
        icon: '🗿',
        coords: [39.7050, 8.9930],
        wikiTitle: 'Su Nuraxi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nuraghe_Su_Nuraxi_-_Barumini_-_Sardinia_-_Italy_-_06.jpg/1280px-Nuraghe_Su_Nuraxi_-_Barumini_-_Sardinia_-_Italy_-_06.jpg',
        narrative:
          'Na antiga torre de pedra de Su Nuraxi, com três mil anos, o viajante encerra a ' +
          'longa viagem pela Itália, de Milão ao coração da Sardenha.',
        phrases: [
          { it: 'Mi piace molto la Sardegna!', en: 'Eu gosto muito da Sardenha!' },
          { it: 'Grazie di tutto, Italia.', en: 'Obrigado por tudo, Itália.' },
          { it: 'Arrivederci!', en: 'Até logo!' },
        ],
        lessonId: 'sardegna-1',
        quiz: {
          question: 'Qual verbo significa "caminhar"?',
          options: ['camminare', 'nuotare', 'piove'],
          correct: 'camminare',
          explanation: 'camminare = caminhar; nuotare = nadar.',
        },
      },
    ],
  },
];

export default cities;
