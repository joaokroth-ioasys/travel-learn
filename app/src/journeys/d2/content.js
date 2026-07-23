// content.js
// Photo URLs use Wikimedia Commons Special:FilePath redirects (freely licensed).
// Each resolves to the actual image file; swap any URL in photos[] if one fails to load.

const cities = [
  {
    id: 'frankfurt',
    name: 'Frankfurt',
    tagline: 'Willkommen in Deutschland!',
    theme: 'Airport & Trains',
    accentColor: '#3a7bd5',
    icon: '✈️',
    description:
      'Frankfurt am Main ist die Finanzmetropole Deutschlands und das Tor zur Welt. ' +
      'Mit seiner beeindruckenden Skyline, dem historischen Römerberg und dem größten Flughafen des Landes ' +
      'ist Frankfurt oft der erste Eindruck, den Reisende von Deutschland bekommen. ' +
      'Hier beginnt unsere Reise.',
    descriptionEn:
      'Frankfurt am Main is Germany\'s financial capital and its gateway to the world. ' +
      'With its striking skyline, the historic Römerberg and the country\'s largest airport, ' +
      'Frankfurt is often the first impression travellers get of Germany. ' +
      'Our journey begins here.',
    descriptionPt:
      'Frankfurt am Main é a capital financeira da Alemanha e seu portão de entrada para o mundo. ' +
      'Com sua impressionante silhueta de arranha-céus, o histórico Römerberg e o maior aeroporto do país, ' +
      'Frankfurt costuma ser a primeira impressão que os viajantes têm da Alemanha. ' +
      'Nossa viagem começa aqui.',
    photos: [
      { wikiTitle: 'Frankfurt', alt: 'Frankfurt skyline', caption: 'Die Frankfurter Skyline, einzigartig in Deutschland' },
      { wikiTitle: 'Römer', alt: 'Römerberg historic square', caption: 'Der Römerberg, das historische Herz der Stadt' },
      { wikiTitle: 'Lufthansa', alt: 'Frankfurt Airport terminal', caption: 'Der Flughafen Frankfurt, größter Flughafen Deutschlands' },
    ],
    vocabTopics: ['Airport', 'Train travel', 'Immigration'],
    grammarTopic: 'Modal verbs (müssen, können, dürfen)',
    grammarTopicPt: 'Verbos modais (müssen, können, dürfen)',
    lessons: [
      {
        id: 'frankfurt-1',
        title: 'At the Airport',
        titlePt: 'No aeroporto',
        description: 'Arriving at Frankfurt Airport: signs, counters, gates.',
        descriptionPt: 'Chegando ao aeroporto de Frankfurt: placas, balcões, portões.',
        steps: [
          { type: 'vocab', word: 'der Flughafen', article: 'der', english: 'airport', portuguese: 'aeroporto', example: 'Der Flughafen ist sehr groß.' },
          { type: 'vocab', word: 'die Passkontrolle', article: 'die', english: 'passport control', portuguese: 'controle de passaportes', example: 'Ich gehe zur Passkontrolle.' },
          { type: 'vocab', word: 'das Gepäck', article: 'das', english: 'luggage', portuguese: 'bagagem', example: 'Mein Gepäck ist am Band.' },
          { type: 'vocab', word: 'der Ausgang', article: 'der', english: 'exit / gate', portuguese: 'saída / portão', example: 'Der Ausgang ist links.' },
          { type: 'vocab', word: 'die Ankunft', article: 'die', english: 'arrival', portuguese: 'chegada', example: 'Die Ankunft ist um 14 Uhr.' },
          { type: 'vocab', word: 'der Abflug', article: 'der', english: 'departure', portuguese: 'partida', example: 'Der Abflug ist pünktlich.' },
          { type: 'grammar', title: 'Modal verbs: müssen & können', titlePt: 'Verbos modais: müssen & können', explanation: 'Modal verbs modify another verb. They come second in the sentence; the main verb goes to the end in infinitive form.', explanationPt: 'Verbos modais modificam outro verbo. Eles vêm em segundo lugar na frase; o verbo principal vai para o final na forma infinitiva.', examples: ['Ich muss meinen Pass zeigen.', 'Kannst du mir helfen?', 'Sie müssen zum Gate A3 gehen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "luggage" in German?', questionPt: 'Como se diz "bagagem" em alemão?', options: ['der Ausgang', 'das Gepäck', 'die Ankunft', 'der Abflug'], correct: 'das Gepäck' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich ___ meinen Pass zeigen. (must)', questionPt: 'Ich ___ meinen Pass zeigen. (dever)', correct: 'muss' },
        ],
      },
      {
        id: 'frankfurt-2',
        title: 'Train to the City',
        titlePt: 'Trem para a cidade',
        description: 'From the airport to Frankfurt Hauptbahnhof by S-Bahn.',
        descriptionPt: 'Do aeroporto até a Hauptbahnhof de Frankfurt de S-Bahn.',
        steps: [
          { type: 'vocab', word: 'der Bahnhof', article: 'der', english: 'train station', portuguese: 'estação de trem', example: 'Der Hauptbahnhof ist im Zentrum.' },
          { type: 'vocab', word: 'das Gleis', article: 'das', english: 'platform / track', portuguese: 'plataforma / via', example: 'Der Zug fährt auf Gleis 7 ab.' },
          { type: 'vocab', word: 'die Fahrkarte', article: 'die', english: 'ticket', portuguese: 'passagem', example: 'Ich brauche eine Fahrkarte.' },
          { type: 'vocab', word: 'der Zug', article: 'der', english: 'train', portuguese: 'trem', example: 'Der Zug kommt in 5 Minuten.' },
          { type: 'vocab', word: 'einsteigen', article: null, english: 'to board / get on', portuguese: 'embarcar / entrar', example: 'Bitte einsteigen!' },
          { type: 'vocab', word: 'aussteigen', article: null, english: 'to get off', portuguese: 'descer / desembarcar', example: 'Ich muss hier aussteigen.' },
          { type: 'grammar', title: 'Separable verbs (Trennbare Verben)', titlePt: 'Verbos separáveis (Trennbare Verben)', explanation: 'Many German verbs have a prefix that separates in main clauses. The prefix goes to the end.', explanationPt: 'Muitos verbos alemães têm um prefixo que se separa em orações principais. O prefixo vai para o final.', examples: ['Ich steige am Hauptbahnhof aus.', 'Wann fährt der Zug ab?', 'Er steigt in Frankfurt ein.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "platform"?', questionPt: 'Qual palavra significa "plataforma"?', options: ['der Zug', 'die Fahrkarte', 'das Gleis', 'der Bahnhof'], correct: 'das Gleis' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich muss am Hauptbahnhof ___. (get off)', questionPt: 'Ich muss am Hauptbahnhof ___. (descer)', correct: 'aussteigen' },
        ],
      },
    ],
    // ── Immersive route: ordered stops (array order IS the route order). ──
    places: [
      {
        id: 'fra-airport', name: 'Frankfurt Airport', icon: '✈️',
        coords: [50.0379, 8.5622], wikiTitle: 'Lufthansa',
        narrative: "Your plane touches down at Frankfurt Airport, Germany's largest. Passport stamped and luggage collected, you follow the signs toward the trains into the city.",
        narrativePt: "Seu avião pousa no aeroporto de Frankfurt, o maior da Alemanha. Com o passaporte carimbado e a bagagem recolhida, você segue as placas em direção aos trens rumo à cidade.",
        phrases: [
          { de: 'Wo ist der Ausgang?', en: 'Where is the exit?', pt: 'Onde fica a saída?' },
          { de: 'Wo ist mein Gepäck?', en: 'Where is my luggage?', pt: 'Onde está a minha bagagem?' },
          { de: 'Ich gehe zur Passkontrolle.', en: 'I am going to passport control.', pt: 'Estou indo para o controle de passaportes.' },
        ],
        lessonId: 'frankfurt-1',
        quiz: {
          question: 'Frankfurt Airport is the largest in which country?',
          questionPt: 'O aeroporto de Frankfurt é o maior de qual país?',
          options: ['Germany', 'Austria', 'Switzerland'],
          correct: 'Germany',
          explanation: 'Flughafen Frankfurt is the busiest airport in Germany and a major European hub.',
          explanationPt: 'O Flughafen Frankfurt é o aeroporto mais movimentado da Alemanha e um importante hub europeu.',
        },
      },
      {
        id: 'fra-hbf', name: 'Frankfurt Hauptbahnhof', icon: '🚉',
        coords: [50.1072, 8.6638], wikiTitle: 'Frankfurt (Main) Hauptbahnhof',
        narrative: 'The S-Bahn whisks you to the Hauptbahnhof, a vast iron-and-glass hall where ICE trains fan out across Germany. You find your platform and step into the city.',
        narrativePt: 'O S-Bahn o leva rapidamente até a Hauptbahnhof, um vasto salão de ferro e vidro de onde os trens ICE se espalham por toda a Alemanha. Você encontra sua plataforma e entra na cidade.',
        phrases: [
          { de: 'Auf welchem Gleis fährt der Zug?', en: 'Which platform does the train leave from?', pt: 'De qual plataforma o trem parte?' },
          { de: 'Eine Fahrkarte, bitte.', en: 'One ticket, please.', pt: 'Uma passagem, por favor.' },
          { de: 'Wann fährt der nächste Zug?', en: 'When does the next train leave?', pt: 'Quando parte o próximo trem?' },
        ],
        lessonId: 'frankfurt-2',
        quiz: {
          question: 'A "Gleis" at a German station is a…?',
          questionPt: 'Um "Gleis" em uma estação alemã é um(a)…?',
          options: ['platform / track', 'ticket', 'exit'],
          correct: 'platform / track',
          explanation: '"Gleis" is the platform/track number where your train departs.',
          explanationPt: '"Gleis" é o número da plataforma/via de onde o seu trem parte.',
        },
      },
      {
        id: 'fra-roemerberg', name: 'Römerberg', icon: '🏛️',
        coords: [50.1106, 8.6820], wikiTitle: 'Römer',
        narrative: 'In the old town you reach the Römerberg, a square of half-timbered façades around the medieval city hall, the historic heart of Frankfurt.',
        narrativePt: 'Na cidade velha você chega ao Römerberg, uma praça de fachadas de enxaimel ao redor da prefeitura medieval, o coração histórico de Frankfurt.',
        quiz: {
          question: "The Römerberg is Frankfurt's historic…?",
          questionPt: 'O Römerberg é o(a) histórico(a)… de Frankfurt?',
          options: ['town square', 'airport', 'river port'],
          correct: 'town square',
          explanation: "The Römerberg has been Frankfurt's central square since the Middle Ages, home to the Römer city hall.",
          explanationPt: 'O Römerberg é a praça central de Frankfurt desde a Idade Média, onde fica a prefeitura Römer.',
        },
      },
      {
        id: 'fra-skyline', name: 'Bankenviertel', icon: '🏙️',
        coords: [50.1122, 8.6722], wikiTitle: 'Frankfurt',
        narrative: "Glass towers rise above the rooftops, the Bankenviertel. Frankfurt's skyline is so distinctive that locals nicknamed the city 'Mainhattan'.",
        narrativePt: "Torres de vidro se erguem acima dos telhados, o Bankenviertel. A silhueta de Frankfurt é tão distinta que os moradores apelidaram a cidade de 'Mainhattan'.",
        quiz: {
          question: "Frankfurt's skyline earned it which nickname?",
          questionPt: 'A silhueta de Frankfurt lhe rendeu qual apelido?',
          options: ['Mainhattan', 'Klein-Paris', 'Elbflorenz'],
          correct: 'Mainhattan',
          explanation: '"Mainhattan" blends the river Main with Manhattan, a nod to the high-rise skyline.',
          explanationPt: '"Mainhattan" combina o rio Main com Manhattan, uma referência à silhueta de arranha-céus.',
        },
      },
      {
        id: 'fra-dom', name: 'Kaiserdom St. Bartholomäus', icon: '⛪',
        coords: [50.1106, 8.6852], wikiTitle: 'Frankfurt Cathedral',
        narrative: 'You end at the Kaiserdom, where Holy Roman Emperors were once elected and crowned. From its tower the whole city spreads out below.',
        narrativePt: 'Você termina no Kaiserdom, onde os imperadores do Sacro Império Romano-Germânico eram outrora eleitos e coroados. Da sua torre, toda a cidade se estende lá embaixo.',
        quiz: {
          question: "Frankfurt's Kaiserdom was the site of imperial…?",
          questionPt: 'O Kaiserdom de Frankfurt foi o local de… imperiais?',
          options: ['coronations', 'Olympics', 'carnival'],
          correct: 'coronations',
          explanation: "Holy Roman Emperors were elected and, from 1562, crowned in Frankfurt's cathedral.",
          explanationPt: 'Os imperadores do Sacro Império Romano-Germânico eram eleitos e, a partir de 1562, coroados na catedral de Frankfurt.',
        },
      },
    ],
  },


  {
    id: 'stuttgart',
    name: 'Stuttgart',
    tagline: 'Auf Jobsuche in der Schwabenmetropole',
    theme: 'Work & City Life',
    accentColor: '#2d7a4f',
    icon: '💼',
    description:
      'Stuttgart, die Hauptstadt Baden-Württembergs, ist bekannt als Wiege der Automobilindustrie, ' +
      'Heimat von Mercedes-Benz und Porsche. Die Stadt liegt in einem malerischen Talkessel, ' +
      'umgeben von Weinbergen und grünen Hügeln. ' +
      'Wer hier Arbeit sucht, findet eine der wirtschaftsstärksten Regionen Europas.',
    descriptionEn:
      'Stuttgart, the capital of Baden-Württemberg, is known as the cradle of the automobile, ' +
      'home to Mercedes-Benz and Porsche. The city lies in a scenic basin, ' +
      'surrounded by vineyards and green hills. ' +
      'Those who look for work here find one of Europe\'s strongest economic regions.',
    descriptionPt:
      'Stuttgart, a capital de Baden-Württemberg, é conhecida como o berço do automóvel, ' +
      'sede da Mercedes-Benz e da Porsche. A cidade fica em uma bacia pitoresca, ' +
      'cercada por vinhedos e colinas verdes. ' +
      'Quem procura trabalho aqui encontra uma das regiões econômicas mais fortes da Europa.',
    photos: [
      { wikiTitle: 'Stuttgart', alt: 'Stuttgart city panorama', caption: 'Stuttgart: Metropole im Talkessel, umgeben von Weinbergen' },
      { wikiTitle: 'Mercedes-Benz Museum', alt: 'Mercedes-Benz Museum Stuttgart', caption: 'Das Mercedes-Benz Museum, Ikone der Automobilgeschichte' },
      { wikiTitle: 'Stuttgart Television Tower', alt: 'Stuttgart TV Tower', caption: 'Der Fernsehturm, der erste seiner Art weltweit (1956)' },
    ],
    vocabTopics: ['Job applications', 'Office', 'City living'],
    grammarTopic: 'Konjunktiv II (würden, hätten, wären) for polite requests',
    grammarTopicPt: 'Konjunktiv II (würden, hätten, wären) para pedidos educados',
    lessons: [
      {
        id: 'stuttgart-1',
        title: 'Job Application',
        titlePt: 'Candidatura a emprego',
        description: 'Applying for a job: CVs, interviews, office vocabulary.',
        descriptionPt: 'Candidatar-se a um emprego: currículos, entrevistas, vocabulário de escritório.',
        steps: [
          { type: 'vocab', word: 'die Bewerbung', article: 'die', english: 'job application', portuguese: 'candidatura a emprego', example: 'Ich schicke meine Bewerbung heute.' },
          { type: 'vocab', word: 'der Lebenslauf', article: 'der', english: 'CV / résumé', portuguese: 'currículo', example: 'Mein Lebenslauf ist aktuell.' },
          { type: 'vocab', word: 'das Vorstellungsgespräch', article: 'das', english: 'job interview', portuguese: 'entrevista de emprego', example: 'Das Vorstellungsgespräch ist morgen.' },
          { type: 'vocab', word: 'die Stelle', article: 'die', english: 'position / job opening', portuguese: 'vaga / cargo', example: 'Die Stelle ist noch frei.' },
          { type: 'vocab', word: 'der Arbeitgeber', article: 'der', english: 'employer', portuguese: 'empregador', example: 'Der Arbeitgeber ist sehr nett.' },
          { type: 'vocab', word: 'die Gehaltsvorstellung', article: 'die', english: 'salary expectation', portuguese: 'expectativa salarial', example: 'Was ist Ihre Gehaltsvorstellung?' },
          { type: 'grammar', title: 'Konjunktiv II: polite requests', titlePt: 'Konjunktiv II: pedidos educados', explanation: 'Use würden + infinitive for polite requests, similar to "would" in English. Hätten and wären are common irregular forms.', explanationPt: 'Use würden + infinitivo para pedidos educados, semelhante a "would" em inglês. Hätten e wären são formas irregulares comuns.', examples: ['Würden Sie mir bitte helfen?', 'Ich hätte gerne mehr Informationen.', 'Wären Sie morgen verfügbar?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "Vorstellungsgespräch"?', questionPt: 'O que é "Vorstellungsgespräch"?', options: ['CV', 'job interview', 'salary', 'employer'], correct: 'job interview' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ Sie mir bitte den Vertrag schicken? (polite: would)', questionPt: '___ Sie mir bitte den Vertrag schicken? (educado: would)', correct: 'Würden' },
        ],
      },
      {
        id: 'stuttgart-2',
        title: 'Finding a Flat',
        titlePt: 'Procurar um apartamento',
        description: 'Renting an apartment: contracts, landlords, and moving in.',
        descriptionPt: 'Alugar um apartamento: contratos, proprietários e mudança.',
        steps: [
          { type: 'vocab', word: 'die Wohnung', article: 'die', english: 'apartment / flat', portuguese: 'apartamento', example: 'Die Wohnung hat drei Zimmer.' },
          { type: 'vocab', word: 'die Miete', article: 'die', english: 'rent', portuguese: 'aluguel', example: 'Die Miete beträgt 900 Euro.' },
          { type: 'vocab', word: 'der Vermieter', article: 'der', english: 'landlord', portuguese: 'proprietário / locador', example: 'Der Vermieter ist freundlich.' },
          { type: 'vocab', word: 'der Mietvertrag', article: 'der', english: 'rental contract', portuguese: 'contrato de aluguel', example: 'Ich unterschreibe den Mietvertrag.' },
          { type: 'vocab', word: 'die Kaution', article: 'die', english: 'deposit', portuguese: 'caução / depósito', example: 'Die Kaution ist drei Monatsmieten.' },
          { type: 'vocab', word: 'anmelden', article: null, english: 'to register (at city hall)', portuguese: 'registrar-se (na prefeitura)', example: 'Ich muss mich beim Einwohnermeldeamt anmelden.' },
          { type: 'grammar', title: 'Reflexive verbs', titlePt: 'Verbos reflexivos', explanation: 'Some German verbs require a reflexive pronoun (mich, dich, sich…) that refers back to the subject.', explanationPt: 'Alguns verbos alemães exigem um pronome reflexivo (mich, dich, sich…) que se refere de volta ao sujeito.', examples: ['Ich melde mich an.', 'Er bewirbt sich um die Stelle.', 'Wir freuen uns auf die Wohnung.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "die Kaution"?', questionPt: 'O que é "die Kaution"?', options: ['rent', 'deposit', 'contract', 'landlord'], correct: 'deposit' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich muss ___ beim Einwohnermeldeamt anmelden. (myself)', questionPt: 'Ich muss ___ beim Einwohnermeldeamt anmelden. (eu mesmo)', correct: 'mich' },
        ],
      },
    ],
    places: [
      {
        id: 'stu-schlossplatz', name: 'Schlossplatz', icon: '🏛️',
        coords: [48.7784, 9.1800], wikiTitle: 'Stuttgart',
        narrative: 'You arrive in the heart of Stuttgart at Schlossplatz, the grand baroque square framed by the New Palace, a fine place to get your bearings.',
        narrativePt: 'Você chega ao coração de Stuttgart na Schlossplatz, a grandiosa praça barroca emoldurada pelo Novo Palácio, um ótimo lugar para se situar.',
        quiz: {
          question: "Schlossplatz is dominated by Stuttgart's…?",
          questionPt: 'A Schlossplatz é dominada por qual construção de Stuttgart?',
          options: ['New Palace', 'harbour', 'cathedral'],
          correct: 'New Palace',
          explanation: 'The Neues Schloss (New Palace) is the baroque centrepiece of Schlossplatz.',
          explanationPt: 'O Neues Schloss (Novo Palácio) é a peça central barroca da Schlossplatz.',
        },
      },
      {
        id: 'stu-bewerbung', name: 'Bewerbungsgespräch', icon: '💼',
        coords: [48.7758, 9.1770], wikiTitle: 'Job interview',
        narrative: 'Stuttgart means business. You head to an interview in the city centre, CV in hand, ready to make your case in German.',
        narrativePt: 'Stuttgart é negócios a sério. Você vai a uma entrevista no centro da cidade, currículo em mãos, pronto para se apresentar em alemão.',
        phrases: [
          { de: 'Ich interessiere mich für die Stelle.', en: 'I am interested in the position.', pt: 'Estou interessado na vaga.' },
          { de: 'Hier ist mein Lebenslauf.', en: 'Here is my CV.', pt: 'Aqui está o meu currículo.' },
          { de: 'Wann kann ich anfangen?', en: 'When can I start?', pt: 'Quando posso começar?' },
        ],
        lessonId: 'stuttgart-1',
        quiz: {
          question: 'Stuttgart is the home base of which carmaker?',
          questionPt: 'Stuttgart é a sede de qual montadora de automóveis?',
          options: ['Mercedes-Benz', 'Volkswagen', 'BMW'],
          correct: 'Mercedes-Benz',
          explanation: 'Both Mercedes-Benz and Porsche are headquartered in the Stuttgart area.',
          explanationPt: 'Tanto a Mercedes-Benz quanto a Porsche têm sede na região de Stuttgart.',
        },
      },
      {
        id: 'stu-wohnung', name: 'Wohnungssuche', icon: '🏠',
        coords: [48.7700, 9.1650], wikiTitle: 'Apartment',
        narrative: 'With a job offer in hand you go flat-hunting. The landlord wants references, a deposit, and a signed contract before you get the keys.',
        narrativePt: 'Com uma oferta de emprego em mãos, você sai à procura de apartamento. O proprietário quer referências, uma caução e um contrato assinado antes de lhe entregar as chaves.',
        phrases: [
          { de: 'Wie hoch ist die Miete?', en: 'How high is the rent?', pt: 'Qual é o valor do aluguel?' },
          { de: 'Ist die Wohnung noch frei?', en: 'Is the flat still available?', pt: 'O apartamento ainda está disponível?' },
          { de: 'Ich möchte den Mietvertrag unterschreiben.', en: 'I would like to sign the rental contract.', pt: 'Eu gostaria de assinar o contrato de aluguel.' },
        ],
        lessonId: 'stuttgart-2',
        quiz: {
          question: 'In Germany, the "Kaution" you pay for a flat is the…?',
          questionPt: 'Na Alemanha, a "Kaution" que você paga por um apartamento é a…?',
          options: ['deposit', 'rent', 'agent fee'],
          correct: 'deposit',
          explanation: "The Kaution is a security deposit, often up to three months' rent.",
          explanationPt: 'A Kaution é uma caução de segurança, muitas vezes de até três meses de aluguel.',
        },
      },
      {
        id: 'stu-mercedes', name: 'Mercedes-Benz Museum', icon: '🚗',
        coords: [48.7889, 9.2342], wikiTitle: 'Mercedes-Benz Museum',
        narrative: 'On your day off you tour the Mercedes-Benz Museum, spiralling down through 130 years of automobile history.',
        narrativePt: 'No seu dia de folga, você visita o Museu Mercedes-Benz, descendo em espiral por 130 anos de história do automóvel.',
        quiz: {
          question: 'Stuttgart is often called the cradle of the…?',
          questionPt: 'Stuttgart é frequentemente chamada de berço do…?',
          options: ['automobile', 'printing press', 'aspirin'],
          correct: 'automobile',
          explanation: 'Karl Benz and Gottlieb Daimler built early automobiles in the Stuttgart area in the 1880s.',
          explanationPt: 'Karl Benz e Gottlieb Daimler construíram os primeiros automóveis na região de Stuttgart na década de 1880.',
        },
      },
      {
        id: 'stu-porsche', name: 'Porsche Museum', icon: '🏎️',
        coords: [48.8345, 9.1520], wikiTitle: 'Porsche Museum',
        narrative: "A short S-Bahn ride to Zuffenhausen brings you to the Porsche Museum, where gleaming sports cars trace the marque's racing heritage.",
        narrativePt: 'Uma curta viagem de S-Bahn até Zuffenhausen leva você ao Museu Porsche, onde carros esportivos reluzentes traçam a herança de corridas da marca.',
        quiz: {
          question: "The Porsche Museum sits in which Stuttgart district, home to Porsche's HQ?",
          questionPt: 'O Museu Porsche fica em qual bairro de Stuttgart, sede da Porsche?',
          options: ['Zuffenhausen', 'Degerloch', 'Bad Cannstatt'],
          correct: 'Zuffenhausen',
          explanation: 'Porsche is headquartered in Stuttgart-Zuffenhausen, where the museum opened in 2009.',
          explanationPt: 'A Porsche tem sede em Stuttgart-Zuffenhausen, onde o museu foi inaugurado em 2009.',
        },
      },
      {
        id: 'stu-fernsehturm', name: 'Fernsehturm', icon: '🗼',
        coords: [48.7561, 9.1900], wikiTitle: 'Stuttgart TV Tower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Fernsehturm_Stuttgart_and_Full_Moon_Summer_2013_06.jpg',
        fit: 'contain',
        narrative: 'You climb the Fernsehturm as the sun sets over the vine-covered hills, the world\'s first TV tower and a Stuttgart icon.',
        narrativePt: 'Você sobe o Fernsehturm enquanto o sol se põe sobre as colinas cobertas de vinhas, a primeira torre de TV do mundo e um ícone de Stuttgart.',
        quiz: {
          question: "Stuttgart's Fernsehturm (1956) was the world's first such tower built from…?",
          questionPt: 'O Fernsehturm de Stuttgart (1956) foi a primeira torre desse tipo no mundo construída em…?',
          options: ['reinforced concrete', 'timber', 'glass'],
          correct: 'reinforced concrete',
          explanation: 'Opened in 1956, it was the first telecommunications tower built from reinforced concrete.',
          explanationPt: 'Inaugurada em 1956, foi a primeira torre de telecomunicações construída em concreto armado.',
        },
      },
    ],
  },


  {
    id: 'munich',
    name: 'Munich',
    tagline: 'Prost! Oktober in München',
    theme: 'Oktoberfest & Social',
    accentColor: '#d4820a',
    icon: '🍺',
    description:
      'München ist die Hauptstadt Bayerns und die drittgrößte Stadt Deutschlands. ' +
      'Weltberühmt für das Oktoberfest, die gotische Frauenkirche und den Englischen Garten, ' +
      'vereint München bayerische Tradition mit modernem Stadtleben. ' +
      'Hier trifft Gemütlichkeit auf Weltoffenheit, Servus und willkommen!',
    descriptionEn:
      'Munich is the capital of Bavaria and Germany\'s third-largest city. ' +
      'World-famous for the Oktoberfest, the Gothic Frauenkirche and the Englischer Garten, ' +
      'Munich blends Bavarian tradition with modern city life. ' +
      'Here Gemütlichkeit meets cosmopolitan flair, Servus and welcome!',
    descriptionPt:
      'Munique é a capital da Baviera e a terceira maior cidade da Alemanha. ' +
      'Mundialmente famosa pela Oktoberfest, pela gótica Frauenkirche e pelo Englischer Garten, ' +
      'Munique combina a tradição bávara com a vida urbana moderna. ' +
      'Aqui a Gemütlichkeit encontra o ar cosmopolita, Servus e bem-vindo!',
    photos: [
      { wikiTitle: 'Marienplatz', alt: 'Marienplatz in Munich', caption: 'Der Marienplatz, das Herz Münchens' },
      { wikiTitle: 'Oktoberfest', alt: 'Oktoberfest beer tents', caption: 'Das Oktoberfest, das größte Volksfest der Welt' },
      { wikiTitle: 'Frauenkirche, Munich', alt: 'Frauenkirche cathedral in Munich', caption: 'Die Frauenkirche, das Wahrzeichen Münchens' },
    ],
    vocabTopics: ['Oktoberfest', 'Food & drink', 'Social interactions'],
    grammarTopic: 'Adjective endings in nominative & accusative',
    grammarTopicPt: 'Terminações de adjetivos no nominativo e acusativo',
    lessons: [
      {
        id: 'munich-1',
        title: 'At the Oktoberfest',
        titlePt: 'Na Oktoberfest',
        description: 'Beer tents, rides, and traditional Bavarian vocabulary.',
        descriptionPt: 'Tendas de cerveja, brinquedos e vocabulário bávaro tradicional.',
        steps: [
          { type: 'vocab', word: 'das Zelt', article: 'das', english: 'tent / beer hall', portuguese: 'tenda / cervejaria', example: 'Das Zelt ist sehr voll.' },
          { type: 'vocab', word: 'die Maß', article: 'die', english: 'one-litre beer mug', portuguese: 'caneca de cerveja de um litro', example: 'Ich hätte gerne eine Maß Bier.' },
          { type: 'vocab', word: 'die Brezn', article: 'die', english: 'pretzel (Bavarian)', portuguese: 'pretzel (bávaro)', example: 'Die Brezn ist frisch und warm.' },
          { type: 'vocab', word: 'die Tracht', article: 'die', english: 'traditional costume', portuguese: 'traje tradicional', example: 'Alle tragen Tracht.' },
          { type: 'vocab', word: 'das Fahrgeschäft', article: 'das', english: 'fairground ride', portuguese: 'brinquedo de parque de diversões', example: 'Das Fahrgeschäft ist aufregend.' },
          { type: 'vocab', word: 'anstoßen', article: null, english: 'to clink glasses / toast', portuguese: 'brindar / fazer um brinde', example: 'Lasst uns anstoßen!' },
          { type: 'grammar', title: 'Adjective endings (nominative & accusative)', titlePt: 'Terminações de adjetivos (nominativo e acusativo)', explanation: 'Adjectives change their endings depending on the article and case. After der/die/das: add -e. After ein/eine: add -er/-e/-es.', explanationPt: 'Os adjetivos mudam suas terminações conforme o artigo e o caso. Após der/die/das: adicione -e. Após ein/eine: adicione -er/-e/-es.', examples: ['Das große Zelt ist toll.', 'Ich trinke ein kaltes Bier.', 'Sie trägt ein schönes Dirndl.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "die Maß"?', questionPt: 'O que é "die Maß"?', options: ['a pretzel', 'a tent', 'a one-litre beer mug', 'a ride'], correct: 'a one-litre beer mug' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich trinke ein kalt___ Bier. (accusative neuter)', questionPt: 'Ich trinke ein kalt___ Bier. (acusativo neutro)', correct: 'kaltes' },
        ],
      },
      {
        id: 'munich-2',
        title: 'Making Friends',
        titlePt: 'Fazendo amigos',
        description: 'Small talk, introductions, and social German.',
        descriptionPt: 'Conversa fiada, apresentações e alemão para situações sociais.',
        steps: [
          { type: 'vocab', word: 'sich vorstellen', article: null, english: 'to introduce oneself', portuguese: 'apresentar-se', example: 'Darf ich mich vorstellen?' },
          { type: 'vocab', word: 'die Unterhaltung', article: 'die', english: 'conversation', portuguese: 'conversa', example: 'Die Unterhaltung macht Spaß.' },
          { type: 'vocab', word: 'begeistert', article: null, english: 'enthusiastic / excited', portuguese: 'entusiasmado / animado', example: 'Ich bin begeistert vom Fest.' },
          { type: 'vocab', word: 'gemeinsam', article: null, english: 'together / shared', portuguese: 'juntos / compartilhado', example: 'Wir feiern gemeinsam.' },
          { type: 'vocab', word: 'die Feier', article: 'die', english: 'celebration / party', portuguese: 'celebração / festa', example: 'Die Feier dauert bis Mitternacht.' },
          { type: 'vocab', word: 'herzlich', article: null, english: 'warm / heartfelt', portuguese: 'caloroso / cordial', example: 'Herzlich willkommen!' },
          { type: 'grammar', title: 'Two-way prepositions (Wechselpräpositionen)', titlePt: 'Preposições de duplo caso (Wechselpräpositionen)', explanation: 'Prepositions like in, an, auf, über take accusative for movement and dative for location.', explanationPt: 'Preposições como in, an, auf, über usam o acusativo para movimento e o dativo para localização.', examples: ['Ich gehe ins Zelt. (movement → acc)', 'Ich sitze im Zelt. (location → dat)', 'Leg das Glas auf den Tisch.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: '"Herzlich" means?', questionPt: 'O que significa "Herzlich"?', options: ['warm / heartfelt', 'together', 'enthusiastic', 'celebration'], correct: 'warm / heartfelt' },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Movement uses which case with "in"?', questionPt: 'Movimento usa qual caso com "in"?', options: ['dative', 'genitive', 'accusative', 'nominative'], correct: 'accusative' },
        ],
      },
    ],
    places: [
      {
        id: 'mun-marienplatz', name: 'Marienplatz', icon: '🏛️',
        coords: [48.1374, 11.5755], wikiTitle: 'Marienplatz',
        narrative: 'You arrive at Marienplatz just as the Glockenspiel chimes from the New Town Hall, the bustling heart of Munich.',
        narrativePt: 'Você chega à Marienplatz justo quando o Glockenspiel toca no Novo Edifício da Prefeitura, o coração agitado de Munique.',
        quiz: {
          question: 'The Glockenspiel that draws crowds at Marienplatz is on the…?',
          questionPt: 'O Glockenspiel que atrai multidões na Marienplatz fica em qual construção?',
          options: ['New Town Hall', 'Frauenkirche', 'train station'],
          correct: 'New Town Hall',
          explanation: 'The Rathaus-Glockenspiel performs daily on the tower of the Neues Rathaus.',
          explanationPt: 'O Rathaus-Glockenspiel toca diariamente na torre do Neues Rathaus.',
        },
      },
      {
        id: 'mun-oktoberfest', name: 'Theresienwiese (Oktoberfest)', icon: '🍺',
        coords: [48.1316, 11.5497], wikiTitle: 'Oktoberfest',
        narrative: 'You step into a roaring beer tent on the Theresienwiese. A litre Maß lands in front of you and the whole bench breaks into song.',
        narrativePt: 'Você entra numa tenda de cerveja barulhenta na Theresienwiese. Uma Maß de um litro aterrissa à sua frente e a mesa inteira começa a cantar.',
        phrases: [
          { de: 'Eine Maß Bier, bitte.', en: 'A litre of beer, please.', pt: 'Um litro de cerveja, por favor.' },
          { de: 'Prost!', en: 'Cheers!', pt: 'Saúde!' },
          { de: 'Wo sind die Toiletten?', en: 'Where are the toilets?', pt: 'Onde ficam os banheiros?' },
        ],
        lessonId: 'munich-1',
        quiz: {
          question: 'A "Maß" at Oktoberfest is…?',
          questionPt: 'Uma "Maß" na Oktoberfest é o quê?',
          options: ['a one-litre beer', 'a pretzel', 'a ride'],
          correct: 'a one-litre beer',
          explanation: 'A Maß is the traditional one-litre mug of beer served in the tents.',
          explanationPt: 'Uma Maß é a tradicional caneca de um litro de cerveja servida nas tendas.',
        },
      },
      {
        id: 'mun-frauenkirche', name: 'Frauenkirche', icon: '⛪',
        coords: [48.1385, 11.5736], wikiTitle: 'Frauenkirche, Munich',
        narrative: 'The twin onion domes of the Frauenkirche rise above the city, Munich\'s landmark, visible from every direction.',
        narrativePt: 'As duas cúpulas em forma de cebola da Frauenkirche se erguem acima da cidade, o marco de Munique, visível de todas as direções.',
        quiz: {
          question: 'The Frauenkirche is famous for its two distinctive…?',
          questionPt: 'A Frauenkirche é famosa por seus dois característicos…?',
          options: ['onion domes', 'glass pyramids', 'golden spires'],
          correct: 'onion domes',
          explanation: 'Its two domed towers are protected, no central building may rise above them.',
          explanationPt: 'Suas duas torres com cúpula são protegidas, nenhum edifício no centro pode se elevar acima delas.',
        },
      },
      {
        id: 'mun-hofbraeuhaus', name: 'Hofbräuhaus', icon: '🍻',
        coords: [48.1376, 11.5797], wikiTitle: 'Hofbräuhaus am Platzl',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Hofbrauhaus.JPG',
        narrative: 'At the Hofbräuhaus you share a long table with strangers who quickly become friends. Time to introduce yourself and join the conversation.',
        narrativePt: 'No Hofbräuhaus você divide uma mesa comprida com estranhos que logo viram amigos. Hora de se apresentar e entrar na conversa.',
        phrases: [
          { de: 'Darf ich mich vorstellen?', en: 'May I introduce myself?', pt: 'Posso me apresentar?' },
          { de: 'Wie heißt du?', en: "What's your name?", pt: 'Como você se chama?' },
          { de: 'Woher kommst du?', en: 'Where are you from?', pt: 'De onde você é?' },
        ],
        lessonId: 'munich-2',
        quiz: {
          question: 'The friendly Bavarian word "Servus" can mean…?',
          questionPt: 'A simpática palavra bávara "Servus" pode significar…?',
          options: ['both hello and goodbye', 'only sorry', 'only cheers'],
          correct: 'both hello and goodbye',
          explanation: '"Servus" is an informal greeting used for both hello and goodbye in Bavaria and Austria.',
          explanationPt: '"Servus" é uma saudação informal usada tanto para olá quanto para tchau na Baviera e na Áustria.',
        },
      },
      {
        id: 'mun-allianz-arena', name: 'Allianz Arena', icon: '⚽',
        coords: [48.2188, 11.6247], wikiTitle: 'Allianz Arena',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Allianz_Arena_2008-02-09.jpg',
        narrative: 'North of the city glows the Allianz Arena, home of FC Bayern München. On match day the whole stadium turns red and 75,000 fans roar for every Tor.',
        narrativePt: 'Ao norte da cidade brilha a Allianz Arena, casa do FC Bayern München. Em dia de jogo o estádio inteiro fica vermelho e 75.000 torcedores gritam a cada Tor.',
        phrases: [
          { de: 'Ich hätte gerne eine Karte für das Spiel.', en: "I'd like a ticket for the match.", pt: 'Eu gostaria de um ingresso para o jogo.' },
          { de: 'Wer spielt heute?', en: 'Who is playing today?', pt: 'Quem joga hoje?' },
          { de: 'Tor! Wir haben gewonnen!', en: 'Goal! We won!', pt: 'Gol! Nós ganhamos!' },
        ],
        quiz: {
          question: 'The Allianz Arena is the home stadium of which club?',
          questionPt: 'A Allianz Arena é o estádio de qual clube?',
          options: ['FC Bayern München', 'Borussia Dortmund', 'Hamburger SV'],
          correct: 'FC Bayern München',
          explanation: 'FC Bayern München plays at the Allianz Arena, famous for its glowing inflatable façade.',
          explanationPt: 'O FC Bayern München joga na Allianz Arena, famosa por sua fachada inflável iluminada.',
        },
      },
      {
        id: 'mun-bmw-museum', name: 'BMW Museum', icon: '🚗',
        coords: [48.1772, 11.5586], wikiTitle: 'BMW Museum',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Mus%C3%A9e_BMW_004.jpg',
        narrative: 'Beside the four-cylinder BMW tower you step into the BMW Museum, tracing a century of Bavarian engineering from motorcycles to electric concept cars.',
        narrativePt: 'Ao lado da torre de quatro cilindros da BMW você entra no BMW Museum, percorrendo um século de engenharia bávara, de motocicletas a carros-conceito elétricos.',
        phrases: [
          { de: 'Wie viel kostet der Eintritt?', en: 'How much is admission?', pt: 'Quanto custa a entrada?' },
          { de: 'Wo ist der Eingang?', en: 'Where is the entrance?', pt: 'Onde fica a entrada?' },
        ],
        quiz: {
          question: 'What does the "B" in BMW stand for?',
          questionPt: 'O que significa o "B" em BMW?',
          options: ['Bayerische', 'Berliner', 'Bremer'],
          correct: 'Bayerische',
          explanation: 'BMW stands for Bayerische Motoren Werke, "Bavarian Motor Works", founded in Munich in 1916.',
          explanationPt: 'BMW significa Bayerische Motoren Werke, "Fábrica Bávara de Motores", fundada em Munique em 1916.',
        },
      },
      {
        id: 'mun-englischergarten', name: 'Englischer Garten', icon: '🌳',
        coords: [48.1642, 11.6056], wikiTitle: 'Englischer Garten',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Englischer_garten_fg02.jpg',
        narrative: 'You wander into the Englischer Garten, where surfers ride a standing river wave and beer gardens hum under the trees.',
        narrativePt: 'Você entra no Englischer Garten, onde surfistas pegam uma onda estacionária do rio e os beer gardens fervilham sob as árvores.',
        quiz: {
          question: "Surprisingly, Munich's Englischer Garten is famous for year-round…?",
          questionPt: 'Surpreendentemente, o Englischer Garten de Munique é famoso o ano todo por…?',
          options: ['river surfing', 'skiing', 'sailing'],
          correct: 'river surfing',
          explanation: 'Surfers ride the Eisbach standing wave in the park all year round.',
          explanationPt: 'Os surfistas pegam a onda estacionária do Eisbach no parque o ano inteiro.',
        },
      },
      {
        id: 'mun-eisbach', name: 'Eisbach', icon: '🏄',
        coords: [48.1436, 11.5872], wikiTitle: 'Eisbach (Isar)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Eisbach_die_Welle_Surfer.JPG',
        narrative: 'At the southern tip of the Englischer Garten a crowd gathers on the bridge to watch surfers take turns on the Eisbachwelle, a standing wave on a man-made stream, right in the middle of the city.',
        narrativePt: 'Na ponta sul do Englischer Garten uma multidão se reúne na ponte para ver os surfistas se revezarem na Eisbachwelle, uma onda estacionária num riacho artificial, bem no meio da cidade.',
        phrases: [
          { de: 'Schau mal, ein Surfer!', en: 'Look, a surfer!', pt: 'Olha, um surfista!' },
          { de: 'Ist das Wasser kalt?', en: 'Is the water cold?', pt: 'A água está fria?' },
        ],
        quiz: {
          question: 'What makes the Eisbachwelle so unusual?',
          questionPt: 'O que torna a Eisbachwelle tão incomum?',
          options: ['it is a river surf wave in the city centre', 'it is the largest lake in Bavaria', 'it freezes into an ice rink'],
          correct: 'it is a river surf wave in the city centre',
          explanation: 'The Eisbach forms a permanent standing wave that surfers ride year-round in the heart of Munich.',
          explanationPt: 'O Eisbach forma uma onda estacionária permanente que os surfistas pegam o ano todo no coração de Munique.',
        },
      },
      {
        id: 'mun-eibsee', name: 'Eibsee', icon: '🏞️',
        coords: [47.4575, 10.9803], wikiTitle: 'Eibsee',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Eibsee_im_Winter.jpg',
        narrative: 'A day trip south brings you to the Eibsee, an alpine lake at the foot of the Zugspitze, Germany\'s highest mountain, its shores draped in winter snow.',
        narrativePt: 'Uma excursão de um dia rumo ao sul leva você ao Eibsee, um lago alpino ao pé da Zugspitze, a montanha mais alta da Alemanha, com suas margens cobertas de neve no inverno.',
        quiz: {
          question: 'The Eibsee lies at the foot of which peak, the highest in Germany?',
          questionPt: 'O Eibsee fica ao pé de qual pico, o mais alto da Alemanha?',
          options: ['the Zugspitze', 'the Brocken', 'the Watzmann'],
          correct: 'the Zugspitze',
          explanation: 'The Eibsee sits below the Zugspitze (2,962 m), the highest mountain in Germany.',
          explanationPt: 'O Eibsee fica abaixo da Zugspitze (2.962 m), a montanha mais alta da Alemanha.',
        },
      },
      {
        id: 'mun-neuschwanstein', name: 'Schloss Neuschwanstein', icon: '🏰',
        coords: [47.5576, 10.7498], wikiTitle: 'Neuschwanstein Castle',
        narrative: 'You round a bend and there it is: Schloss Neuschwanstein, the fairy-tale castle of King Ludwig II, perched dramatically against the Alps.',
        narrativePt: 'Você faz uma curva e lá está ele: o Schloss Neuschwanstein, o castelo de conto de fadas do rei Ludwig II, empoleirado dramaticamente contra os Alpes.',
        quiz: {
          question: 'Neuschwanstein Castle was built by which Bavarian king?',
          questionPt: 'O castelo de Neuschwanstein foi construído por qual rei bávaro?',
          options: ['Ludwig II', 'Friedrich I', 'Maximilian III'],
          correct: 'Ludwig II',
          explanation: "King Ludwig II built Neuschwanstein in the 1800s; it later inspired Disney's castle.",
          explanationPt: 'O rei Ludwig II construiu Neuschwanstein no século XIX; mais tarde ele inspirou o castelo da Disney.',
        },
      },
    ],
  },


  {
    id: 'berlin',
    name: 'Berlin',
    tagline: 'Geschichte und Kultur in der Hauptstadt',
    theme: 'Tourism & Culture',
    accentColor: '#c0392b',
    icon: '🏛️',
    description:
      'Berlin ist die Hauptstadt und das kulturelle Herz Deutschlands. ' +
      'Die Stadt trägt die Narben ihrer bewegten Geschichte, Weltkrieg, Teilung, Mauer, Wiedervereinigung, ' +
      'und hat sich in eine der kreativsten und vielfältigsten Metropolen Europas verwandelt. ' +
      'Kein Ort erzählt die deutsche Geschichte so direkt wie Berlin.',
    descriptionEn:
      'Berlin is Germany\'s capital and cultural heart. ' +
      'The city still bears the scars of its turbulent history, war, division, the Wall, reunification, ' +
      'and has reinvented itself as one of Europe\'s most creative and diverse metropolises. ' +
      'Nowhere tells German history as directly as Berlin.',
    descriptionPt:
      'Berlim é a capital e o coração cultural da Alemanha. ' +
      'A cidade ainda carrega as cicatrizes de sua história turbulenta, guerra, divisão, o Muro, reunificação, ' +
      'e se reinventou como uma das metrópoles mais criativas e diversas da Europa. ' +
      'Nenhum outro lugar conta a história alemã de forma tão direta quanto Berlim.',
    photos: [
      { wikiTitle: 'Brandenburg Gate', alt: 'Brandenburg Gate in Berlin', caption: 'Das Brandenburger Tor, Symbol der Wiedervereinigung' },
      { wikiTitle: 'Reichstag building', alt: 'Reichstag building Berlin', caption: 'Der Reichstag, Sitz des Deutschen Bundestages' },
      { wikiTitle: 'East Side Gallery', alt: 'East Side Gallery Berlin Wall', caption: 'Die East Side Gallery, Kunst auf der ehemaligen Mauer' },
    ],
    vocabTopics: ['Tourism', 'History', 'Culture & art'],
    grammarTopic: 'Relative clauses (Relativsätze)',
    grammarTopicPt: 'Orações relativas (Relativsätze)',
    lessons: [
      {
        id: 'berlin-1',
        title: 'Sightseeing',
        titlePt: 'Passeios turísticos',
        description: 'Famous landmarks, museums, and getting around Berlin.',
        descriptionPt: 'Pontos turísticos famosos, museus e como se locomover por Berlim.',
        steps: [
          { type: 'vocab', word: 'das Brandenburger Tor', article: 'das', english: 'Brandenburg Gate', portuguese: 'Portão de Brandemburgo', example: 'Das Brandenburger Tor ist ein Symbol Berlins.' },
          { type: 'vocab', word: 'die Museumsinsel', article: 'die', english: 'Museum Island', portuguese: 'Ilha dos Museus', example: 'Die Museumsinsel liegt im Zentrum.' },
          { type: 'vocab', word: 'die Führung', article: 'die', english: 'guided tour', portuguese: 'visita guiada', example: 'Die Führung beginnt um 10 Uhr.' },
          { type: 'vocab', word: 'das Denkmal', article: 'das', english: 'memorial / monument', portuguese: 'memorial / monumento', example: 'Das Denkmal erinnert an die Geschichte.' },
          { type: 'vocab', word: 'der Eintritt', article: 'der', english: 'admission / entry fee', portuguese: 'entrada / ingresso', example: 'Der Eintritt ist kostenlos.' },
          { type: 'vocab', word: 'besichtigen', article: null, english: 'to visit / sightsee', portuguese: 'visitar / conhecer (pontos turísticos)', example: 'Wir besichtigen das Reichstagsgebäude.' },
          { type: 'grammar', title: 'Relative clauses (Relativsätze)', titlePt: 'Orações relativas (Relativsätze)', explanation: 'A relative clause describes a noun. The relative pronoun (der, die, das) agrees in gender with the noun it refers to. The verb goes to the end of the clause.', explanationPt: 'Uma oração relativa descreve um substantivo. O pronome relativo (der, die, das) concorda em gênero com o substantivo ao qual se refere. O verbo vai para o fim da oração.', examples: ['Das Museum, das wir besuchen, ist toll.', 'Der Guide, der uns führt, spricht Englisch.', 'Die Stadt, die ich liebe, ist Berlin.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Eintritt"?', questionPt: 'O que é "der Eintritt"?', options: ['guided tour', 'monument', 'admission fee', 'museum'], correct: 'admission fee' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Das Museum, ___ wir besuchen, ist berühmt. (relative pronoun, neuter)', questionPt: 'Das Museum, ___ wir besuchen, ist berühmt. (pronome relativo, neutro)', correct: 'das' },
        ],
      },
      {
        id: 'berlin-2',
        title: 'History & Culture',
        titlePt: 'História e Cultura',
        description: 'The Berlin Wall, Cold War history, and cultural vocabulary.',
        descriptionPt: 'O Muro de Berlim, a história da Guerra Fria e vocabulário cultural.',
        steps: [
          { type: 'vocab', word: 'die Mauer', article: 'die', english: 'the Wall (Berlin Wall)', portuguese: 'o Muro (Muro de Berlim)', example: 'Die Mauer fiel 1989.' },
          { type: 'vocab', word: 'die Geschichte', article: 'die', english: 'history / story', portuguese: 'história / relato', example: 'Berlin hat eine bewegte Geschichte.' },
          { type: 'vocab', word: 'die Ausstellung', article: 'die', english: 'exhibition', portuguese: 'exposição', example: 'Die Ausstellung ist sehr interessant.' },
          { type: 'vocab', word: 'das Gemälde', article: 'das', english: 'painting', portuguese: 'pintura / quadro', example: 'Das Gemälde ist aus dem 18. Jahrhundert.' },
          { type: 'vocab', word: 'der Künstler', article: 'der', english: 'artist', portuguese: 'artista', example: 'Der Künstler ist weltbekannt.' },
          { type: 'vocab', word: 'beeindruckend', article: null, english: 'impressive', portuguese: 'impressionante', example: 'Das Denkmal ist sehr beeindruckend.' },
          { type: 'grammar', title: 'Passive voice (Passiv)', titlePt: 'Voz passiva (Passiv)', explanation: 'The passive shifts focus from the doer to the action. Form: werden + past participle. The agent is introduced with "von".', explanationPt: 'A voz passiva desloca o foco de quem pratica a ação para a própria ação. Forma: werden + particípio passado. O agente é introduzido com "von".', examples: ['Die Mauer wurde 1961 gebaut.', 'Das Museum wird von vielen besucht.', 'Die Ausstellung wurde gut bewertet.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'When did the Wall fall?', questionPt: 'Quando o Muro caiu?', options: ['1961', '1989', '1945', '2000'], correct: '1989' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Die Mauer ___ 1961 gebaut. (passive past)', questionPt: 'Die Mauer ___ 1961 gebaut. (passado na voz passiva)', correct: 'wurde' },
        ],
      },
    ],
    places: [
      {
        id: 'ber-brandenburg', name: 'Brandenburger Tor', icon: '🏛️',
        coords: [52.5163, 13.3777], wikiTitle: 'Brandenburg Gate',
        narrative: "You begin at the Brandenburg Gate, the neoclassical arch that once stood walled off in no-man's-land and now symbolises a reunited Germany.",
        narrativePt: 'Você começa no Portão de Brandemburgo, o arco neoclássico que um dia ficou isolado por muros em terra de ninguém e hoje simboliza uma Alemanha reunificada.',
        phrases: [
          { de: 'Wo ist der Eingang?', en: 'Where is the entrance?', pt: 'Onde fica a entrada?' },
          { de: 'Wann beginnt die Führung?', en: 'When does the guided tour start?', pt: 'Quando começa a visita guiada?' },
          { de: 'Was kostet der Eintritt?', en: 'How much is admission?', pt: 'Quanto custa a entrada?' },
        ],
        lessonId: 'berlin-1',
        quiz: {
          question: 'The Brandenburg Gate became a symbol of German…?',
          questionPt: 'O Portão de Brandemburgo tornou-se um símbolo de qual acontecimento alemão…?',
          options: ['reunification', 'independence', 'monarchy'],
          correct: 'reunification',
          explanation: 'Walled off during the division, it became the icon of reunification in 1989/90.',
          explanationPt: 'Isolado por muros durante a divisão, tornou-se o ícone da reunificação em 1989/90.',
        },
      },
      {
        id: 'ber-eastside', name: 'East Side Gallery', icon: '🎨',
        coords: [52.5050, 13.4399], wikiTitle: 'East Side Gallery',
        narrative: 'Along the Spree you walk the East Side Gallery, the longest surviving stretch of the Berlin Wall, now painted end to end by artists.',
        narrativePt: 'Ao longo do Spree você percorre a East Side Gallery, o trecho mais longo que restou do Muro de Berlim, hoje pintado de ponta a ponta por artistas.',
        phrases: [
          { de: 'Die Mauer fiel 1989.', en: 'The Wall fell in 1989.', pt: 'O Muro caiu em 1989.' },
          { de: 'Das ist sehr beeindruckend.', en: 'That is very impressive.', pt: 'Isso é muito impressionante.' },
          { de: 'Die Geschichte ist überall.', en: 'History is everywhere.', pt: 'A história está por toda parte.' },
        ],
        lessonId: 'berlin-2',
        quiz: {
          question: 'In which year did the Berlin Wall fall?',
          questionPt: 'Em que ano caiu o Muro de Berlim?',
          options: ['1989', '1961', '1945'],
          correct: '1989',
          explanation: 'The Wall, built in 1961, fell on 9 November 1989.',
          explanationPt: 'O Muro, construído em 1961, caiu em 9 de novembro de 1989.',
        },
      },
      {
        id: 'ber-reichstag', name: 'Reichstag', icon: '🏛️',
        coords: [52.5186, 13.3762], wikiTitle: 'Reichstag building',
        narrative: "You ride up into the Reichstag's glass dome, looking down onto the parliament chamber where Germany is governed.",
        narrativePt: 'Você sobe até a cúpula de vidro do Reichstag, olhando para baixo, para o plenário do parlamento onde a Alemanha é governada.',
        quiz: {
          question: 'The Reichstag is the seat of the German…?',
          questionPt: 'O Reichstag é a sede de qual instituição alemã…?',
          options: ['parliament (Bundestag)', 'royal family', 'supreme court'],
          correct: 'parliament (Bundestag)',
          explanation: "The Reichstag building houses the Bundestag, Germany's federal parliament.",
          explanationPt: 'O edifício do Reichstag abriga o Bundestag, o parlamento federal da Alemanha.',
        },
      },
      {
        id: 'ber-museuminsel', name: 'Museumsinsel', icon: '🖼️',
        coords: [52.5169, 13.4019], wikiTitle: 'Museum Island',
        narrative: 'On the Museumsinsel you lose an afternoon among ancient gates and busts, five world-class museums on a single island in the Spree.',
        narrativePt: 'Na Museumsinsel você perde uma tarde entre portões e bustos antigos, cinco museus de nível mundial em uma única ilha no rio Spree.',
        quiz: {
          question: "Berlin's Museumsinsel is a UNESCO site made up of how many great museums?",
          questionPt: 'A Museumsinsel de Berlim é um sítio da UNESCO formado por quantos grandes museus?',
          options: ['five', 'two', 'ten'],
          correct: 'five',
          explanation: 'The Museum Island holds five museums and is a UNESCO World Heritage Site.',
          explanationPt: 'A Ilha dos Museus abriga cinco museus e é Patrimônio Mundial da UNESCO.',
        },
      },
      {
        id: 'ber-checkpoint', name: 'Checkpoint Charlie', icon: '🪖',
        coords: [52.5076, 13.3904], wikiTitle: 'Checkpoint Charlie',
        narrative: 'You end at Checkpoint Charlie, the Cold War crossing between East and West, where the world once held its breath.',
        narrativePt: 'Você termina no Checkpoint Charlie, a passagem da Guerra Fria entre o Leste e o Oeste, onde o mundo um dia prendeu a respiração.',
        quiz: {
          question: 'Checkpoint Charlie was a famous crossing point during the…?',
          questionPt: 'O Checkpoint Charlie foi um famoso ponto de passagem durante qual período…?',
          options: ['Cold War', 'World War I', "Thirty Years' War"],
          correct: 'Cold War',
          explanation: 'It was the best-known crossing between East and West Berlin during the Cold War.',
          explanationPt: 'Era a passagem mais conhecida entre o Leste e o Oeste de Berlim durante a Guerra Fria.',
        },
      },
      {
        id: 'ber-fernsehturm', name: 'Fernsehturm (Alexanderplatz)', icon: '📡',
        coords: [52.5208, 13.4094], wikiTitle: 'Fernsehturm Berlin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Berlin_Fernsehturm.jpg',
        narrative: 'Above Alexanderplatz the Fernsehturm needles into the sky, the tallest structure in Germany and a relic of East Berlin.',
        narrativePt: 'Acima da Alexanderplatz, a Fernsehturm perfura o céu como uma agulha, a estrutura mais alta da Alemanha e uma relíquia de Berlim Oriental.',
        quiz: {
          question: "Berlin's Fernsehturm is the tallest structure in…?",
          questionPt: 'A Fernsehturm de Berlim é a estrutura mais alta de…?',
          options: ['Germany', 'the European Union', 'the world'],
          correct: 'Germany',
          explanation: 'At 368 m, the TV tower at Alexanderplatz is the tallest structure in Germany.',
          explanationPt: 'Com 368 m, a torre de TV na Alexanderplatz é a estrutura mais alta da Alemanha.',
        },
      },
      {
        id: 'ber-dom', name: 'Berliner Dom', icon: '⛪',
        coords: [52.5191, 13.4010], wikiTitle: 'Berlin Cathedral',
        narrative: 'On the edge of the Museumsinsel the Berliner Dom raises its great green dome, the grandest Protestant church in the city.',
        narrativePt: 'Na borda da Museumsinsel, o Berliner Dom ergue sua grande cúpula verde, a mais imponente igreja protestante da cidade.',
        quiz: {
          question: 'The Berliner Dom is the main church of which Christian tradition?',
          questionPt: 'O Berliner Dom é a principal igreja de qual tradição cristã?',
          options: ['Protestant', 'Catholic', 'Orthodox'],
          correct: 'Protestant',
          explanation: 'The Berlin Cathedral is the largest Protestant church in Germany.',
          explanationPt: 'A Catedral de Berlim é a maior igreja protestante da Alemanha.',
        },
      },
      {
        id: 'ber-mahnmal', name: 'Holocaust-Mahnmal', icon: '🕯️',
        coords: [52.5139, 13.3784], wikiTitle: 'Memorial to the Murdered Jews of Europe',
        narrative: 'Near the Brandenburg Gate you walk among 2,711 grey concrete slabs, the Holocaust Memorial, a silent field of remembrance.',
        narrativePt: 'Perto do Portão de Brandemburgo você caminha entre 2.711 blocos de concreto cinza, o Memorial do Holocausto, um silencioso campo de memória.',
        quiz: {
          question: "Berlin's Holocaust-Mahnmal is a field of grey concrete…?",
          questionPt: 'O Holocaust-Mahnmal de Berlim é um campo de concreto cinza formado por…?',
          options: ['slabs (stelae)', 'fountains', 'statues'],
          correct: 'slabs (stelae)',
          explanation: 'The Memorial to the Murdered Jews of Europe is made up of 2,711 concrete stelae.',
          explanationPt: 'O Memorial aos Judeus Assassinados da Europa é formado por 2.711 estelas de concreto.',
        },
      },
      {
        id: 'ber-clubs', name: 'Clubs & Nightlife', icon: '🎧',
        coords: [52.5111, 13.4430],
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Cookies_Nightclub_Berlin_Dancing.jpg',
        narrative: 'When night falls Berlin comes alive. From Berghain to countless techno cellars, the city dances until well past sunrise, its club culture famous the world over.',
        narrativePt: 'Quando a noite cai, Berlim ganha vida. Do Berghain a incontáveis porões de techno, a cidade dança até bem depois do amanhecer, com uma cultura de clubes famosa no mundo inteiro.',
        phrases: [
          { de: 'Wo geht ihr heute Abend aus?', en: 'Where are you going out tonight?', pt: 'Para onde vocês vão sair hoje à noite?' },
          { de: 'Der Club macht erst um Mitternacht auf.', en: "The club doesn't open until midnight.", pt: 'A balada só abre à meia-noite.' },
          { de: 'Lass uns tanzen gehen!', en: "Let's go dancing!", pt: 'Vamos dançar!' },
        ],
        quiz: {
          question: 'Berlin is world-famous for which kind of nightlife?',
          questionPt: 'Berlim é mundialmente famosa por qual tipo de vida noturna?',
          options: ['techno clubs', 'jazz bars', 'opera houses'],
          correct: 'techno clubs',
          explanation: "Berlin's techno scene, anchored by clubs like Berghain, is renowned worldwide.",
          explanationPt: 'A cena techno de Berlim, ancorada em clubes como o Berghain, é renomada no mundo todo.',
        },
      },
    ],
  },


  {
    id: 'hamburg',
    name: 'Hamburg',
    tagline: 'Moin! Deutschlands Tor zur Welt',
    theme: 'Port & Nightlife',
    accentColor: '#1a6b8a',
    icon: '⚓',
    description:
      'Hamburg ist Deutschlands Tor zur Welt und nach Berlin die zweitgrößte Stadt des Landes. ' +
      'Der Hafen, einer der größten Europas, prägt das Stadtbild ebenso wie die historische Speicherstadt ' +
      'und die moderne Elbphilharmonie. ' +
      '"Moin!" So begrüßen die Hamburger ihre Gäste, zu jeder Tageszeit.',
    descriptionEn:
      'Hamburg is Germany\'s gateway to the world and, after Berlin, the country\'s second-largest city. ' +
      'The port, one of Europe\'s biggest, shapes the cityscape as much as the historic Speicherstadt ' +
      'and the modern Elbphilharmonie. ' +
      '"Moin!" That is how Hamburgers greet their guests, at any time of day.',
    descriptionPt:
      'Hamburgo é a porta de entrada da Alemanha para o mundo e, depois de Berlim, a segunda maior cidade do país. ' +
      'O porto, um dos maiores da Europa, molda a paisagem urbana tanto quanto a histórica Speicherstadt ' +
      'e a moderna Elbphilharmonie. ' +
      '"Moin!" É assim que os hamburgueses cumprimentam seus visitantes, a qualquer hora do dia.',
    photos: [
      { wikiTitle: 'Speicherstadt', alt: 'Hamburg Speicherstadt warehouse district', caption: 'Die Speicherstadt, UNESCO-Welterbe und Hamburgs Wahrzeichen' },
      { wikiTitle: 'Elbphilharmonie', alt: 'Elbphilharmonie concert hall', caption: 'Die Elbphilharmonie, ein Meisterwerk moderner Architektur' },
      { wikiTitle: 'Hamburg', alt: 'Hamburg harbor and city', caption: 'Der Hamburger Hafen, Deutschlands Tor zur Welt' },
    ],
    vocabTopics: ['Port & maritime', 'Weather', 'Nightlife & Reeperbahn'],
    grammarTopic: 'Infinitivkonstruktionen (um…zu, ohne…zu, anstatt…zu)',
    grammarTopicPt: 'Construções com infinitivo (um…zu, ohne…zu, anstatt…zu)',
    lessons: [
      {
        id: 'hamburg-1',
        title: 'The Harbor',
        titlePt: 'O Porto',
        description: 'Ships, ferries, and the vocabulary of Hamburg\'s waterfront.',
        descriptionPt: 'Navios, balsas e o vocabulário da orla marítima de Hamburgo.',
        steps: [
          { type: 'vocab', word: 'der Hafen', article: 'der', english: 'harbor / port', portuguese: 'porto', example: 'Der Hamburger Hafen ist riesig.' },
          { type: 'vocab', word: 'die Fähre', article: 'die', english: 'ferry', portuguese: 'balsa', example: 'Die Fähre fährt zur Insel.' },
          { type: 'vocab', word: 'das Schiff', article: 'das', english: 'ship', portuguese: 'navio', example: 'Das Schiff legt um 9 Uhr ab.' },
          { type: 'vocab', word: 'anlegen', article: null, english: 'to dock', portuguese: 'atracar', example: 'Die Fähre legt am Kai an.' },
          { type: 'vocab', word: 'die Speicherstadt', article: 'die', english: 'warehouse district', portuguese: 'bairro dos armazéns', example: 'Die Speicherstadt ist ein UNESCO-Welterbe.' },
          { type: 'vocab', word: 'auslaufen', article: null, english: 'to set sail / leave port', portuguese: 'zarpar / partir do porto', example: 'Das Schiff läuft um Mitternacht aus.' },
          { type: 'grammar', title: 'um…zu (in order to)', titlePt: 'um…zu (para / a fim de)', explanation: 'Express purpose: um + other elements + zu + infinitive at the end. Both clauses must share the same subject.', explanationPt: 'Expressa finalidade: um + outros elementos + zu + infinitivo no final. As duas orações devem ter o mesmo sujeito.', examples: ['Er ging zum Hafen, um die Fähre zu sehen.', 'Ich lerne Deutsch, um in Hamburg zu arbeiten.', 'Sie stand früh auf, um den Fischmarkt zu besuchen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "die Fähre"?', questionPt: 'O que é "die Fähre"?', options: ['harbor', 'ferry', 'ship', 'dock'], correct: 'ferry' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Er ging zum Hafen, ___ die Fähre zu sehen. (in order to)', questionPt: 'Er ging zum Hafen, ___ die Fähre zu sehen. (para)', correct: 'um' },
        ],
      },
      {
        id: 'hamburg-2',
        title: 'Moin! Hamburg Culture',
        titlePt: 'Moin! A cultura de Hamburgo',
        description: 'Low German greetings, the Reeperbahn, and Hamburg\'s character.',
        descriptionPt: 'Saudações do baixo-alemão, a Reeperbahn e o caráter de Hamburgo.',
        steps: [
          { type: 'vocab', word: 'Moin!', article: null, english: 'Hello! (Hamburg greeting, any time of day)', portuguese: 'Olá! (saudação de Hamburgo, a qualquer hora do dia)', example: 'Moin! Wie geht\'s?' },
          { type: 'vocab', word: 'die Reeperbahn', article: 'die', english: 'Reeperbahn (famous nightlife street)', portuguese: 'Reeperbahn (famosa rua da vida noturna)', example: 'Die Reeperbahn ist das Zentrum des Nachtlebens.' },
          { type: 'vocab', word: 'stürmisch', article: null, english: 'stormy', portuguese: 'tempestuoso', example: 'Das Wetter in Hamburg ist oft stürmisch.' },
          { type: 'vocab', word: 'der Regen', article: 'der', english: 'rain', portuguese: 'chuva', example: 'Vergiss deinen Regenschirm nicht!' },
          { type: 'vocab', word: 'ausgehen', article: null, english: 'to go out', portuguese: 'sair', example: 'Heute Abend gehen wir aus.' },
          { type: 'vocab', word: 'das Konzert', article: 'das', english: 'concert', portuguese: 'concerto / show', example: 'Das Konzert beginnt um 21 Uhr.' },
          { type: 'grammar', title: 'ohne…zu & anstatt…zu', titlePt: 'ohne…zu & anstatt…zu', explanation: 'ohne…zu = without doing; anstatt…zu = instead of doing. Same structure as um...zu: same subject, infinitive at end.', explanationPt: 'ohne…zu = sem fazer; anstatt…zu = em vez de fazer. Mesma estrutura de um...zu: mesmo sujeito, infinitivo no final.', examples: ['Er ging raus, ohne einen Mantel anzuziehen.', 'Sie nahm ein Taxi, anstatt zu Fuß zu gehen.', 'Er blieb zuhause, anstatt auszugehen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "Moin!" mean?', questionPt: 'O que significa "Moin!"?', options: ['Goodbye', 'Hello (any time)', 'Good evening', 'Thank you'], correct: 'Hello (any time)' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Er ging raus, ___ einen Mantel anzuziehen. (without)', questionPt: 'Er ging raus, ___ einen Mantel anzuziehen. (sem)', correct: 'ohne' },
        ],
      },
    ],
    places: [
      {
        id: 'ham-hafen', name: 'Hamburger Hafen', icon: '⚓',
        coords: [53.5455, 9.9668], wikiTitle: 'Port of Hamburg',
        narrative: 'You start at the harbour, where container ships and ferries crowd the Elbe. From the Landungsbrücken the whole port spreads out before you.',
        narrativePt: 'Você começa no porto, onde navios de contêineres e balsas lotam o Elba. Das Landungsbrücken, todo o porto se estende diante de você.',
        phrases: [
          { de: 'Wann fährt die Fähre?', en: 'When does the ferry leave?', pt: 'Quando parte a balsa?' },
          { de: 'Wo legt das Schiff an?', en: 'Where does the ship dock?', pt: 'Onde o navio atraca?' },
          { de: 'Eine Hafenrundfahrt, bitte.', en: 'One harbour tour, please.', pt: 'Um passeio pelo porto, por favor.' },
        ],
        lessonId: 'hamburg-1',
        quiz: {
          question: "Hamburg's harbour sits on which river?",
          questionPt: 'O porto de Hamburgo fica em qual rio?',
          options: ['the Elbe', 'the Rhine', 'the Danube'],
          correct: 'the Elbe',
          explanation: 'The Port of Hamburg lies on the river Elbe, about 100 km from the North Sea.',
          explanationPt: 'O Porto de Hamburgo fica no rio Elba, a cerca de 100 km do Mar do Norte.',
        },
      },
      {
        id: 'ham-reeperbahn', name: 'Reeperbahn', icon: '🌃',
        coords: [53.5497, 9.9596], wikiTitle: 'Reeperbahn',
        narrative: 'As night falls you reach the Reeperbahn, Hamburg\'s neon-lit nightlife mile, where the Beatles once cut their teeth in tiny clubs.',
        narrativePt: 'Ao cair da noite, você chega à Reeperbahn, a milha da vida noturna de Hamburgo iluminada por neon, onde os Beatles um dia deram seus primeiros passos em pequenos clubes.',
        phrases: [
          { de: 'Moin!', en: 'Hello! (any time of day)', pt: 'Olá! (a qualquer hora do dia)' },
          { de: 'Gehen wir heute Abend aus?', en: 'Shall we go out tonight?', pt: 'Vamos sair hoje à noite?' },
          { de: 'Das Konzert beginnt um neun.', en: 'The concert starts at nine.', pt: 'O concerto começa às nove.' },
        ],
        lessonId: 'hamburg-2',
        quiz: {
          question: 'The Hamburg greeting "Moin!" can be used…?',
          questionPt: 'A saudação de Hamburgo "Moin!" pode ser usada…?',
          options: ['at any time of day', 'only in the morning', 'only at night'],
          correct: 'at any time of day',
          explanation: 'Despite sounding like "morning", "Moin" is used as a greeting around the clock.',
          explanationPt: 'Apesar de soar como "manhã", "Moin" é usado como saudação a qualquer hora do dia.',
        },
      },
      {
        id: 'ham-speicherstadt', name: 'Speicherstadt', icon: '🧱',
        coords: [53.5439, 9.9889], wikiTitle: 'Speicherstadt',
        narrative: 'You drift through the Speicherstadt, a labyrinth of red-brick warehouses on oak piles, laced with canals.',
        narrativePt: 'Você passeia pela Speicherstadt, um labirinto de armazéns de tijolos vermelhos sobre estacas de carvalho, entrecortado por canais.',
        quiz: {
          question: "The Speicherstadt is the world's largest warehouse district built on…?",
          questionPt: 'A Speicherstadt é o maior bairro de armazéns do mundo construído sobre…?',
          options: ['timber-pile foundations', 'floating pontoons', 'solid rock'],
          correct: 'timber-pile foundations',
          explanation: "Its brick warehouses stand on thousands of oak piles; it's a UNESCO World Heritage Site.",
          explanationPt: 'Seus armazéns de tijolos se apoiam em milhares de estacas de carvalho; é um Patrimônio Mundial da UNESCO.',
        },
      },
      {
        id: 'ham-elbphilharmonie', name: 'Elbphilharmonie', icon: '🎼',
        coords: [53.5413, 9.9842], wikiTitle: 'Elbphilharmonie',
        narrative: 'The Elbphilharmonie rises from an old warehouse like a glass wave. You ride the curved escalator up to its public plaza for the view.',
        narrativePt: 'A Elbphilharmonie ergue-se de um antigo armazém como uma onda de vidro. Você sobe pela escada rolante curva até sua praça pública para apreciar a vista.',
        quiz: {
          question: 'The Elbphilharmonie is primarily a…?',
          questionPt: 'A Elbphilharmonie é principalmente um…?',
          options: ['concert hall', 'train station', 'football stadium'],
          correct: 'concert hall',
          explanation: "Opened in 2017, the 'Elphi' is one of the world's largest and most advanced concert halls.",
          explanationPt: 'Inaugurada em 2017, a "Elphi" é uma das maiores e mais avançadas salas de concerto do mundo.',
        },
      },
      {
        id: 'ham-rathaus', name: 'Hamburger Rathaus', icon: '🏛️',
        coords: [53.5503, 9.9925], wikiTitle: 'Hamburg City Hall',
        narrative: 'You finish at the grand Rathaus, its neo-Renaissance façade a reminder that Hamburg is both a city and a federal state.',
        narrativePt: 'Você termina no grandioso Rathaus, cuja fachada neorrenascentista lembra que Hamburgo é ao mesmo tempo uma cidade e um estado federado.',
        quiz: {
          question: 'Hamburg is unusual because it is both a city and a…?',
          questionPt: 'Hamburgo é peculiar porque é ao mesmo tempo uma cidade e um…?',
          options: ['federal state', 'kingdom', 'national capital'],
          correct: 'federal state',
          explanation: "Hamburg is a city-state (Stadtstaat), one of Germany's 16 federal states.",
          explanationPt: 'Hamburgo é uma cidade-estado (Stadtstaat), um dos 16 estados federados da Alemanha.',
        },
      },
    ],
  },


  {
    id: 'cologne',
    name: 'Köln',
    tagline: 'Kölle Alaaf! Karneval am Rhein',
    theme: 'Karneval & Culture',
    accentColor: '#8b2fc9',
    icon: '🎭',
    description:
      'Köln ist die größte Stadt Nordrhein-Westfalens und eine der ältesten Städte Deutschlands. ' +
      'Der gotische Dom, die lebhafte Rheinpromenade und das weltberühmte Karneval machen Köln zu einem unvergesslichen Reiseziel. ' +
      'Hier lebt man nach dem Kölner Motto: "Et kütt wie et kütt", es kommt, wie es kommt.',
    descriptionEn:
      'Cologne is the largest city in North Rhine-Westphalia and one of Germany\'s oldest. ' +
      'Its Gothic cathedral, lively Rhine promenade and world-famous carnival ' +
      'make Cologne an unforgettable destination. ' +
      'Here people live by the local motto: "Et kütt wie et kütt", what comes, comes.',
    descriptionPt:
      'Colônia é a maior cidade da Renânia do Norte-Vestfália e uma das mais antigas da Alemanha. ' +
      'Sua catedral gótica, a animada orla do Reno e o carnaval mundialmente famoso ' +
      'fazem de Colônia um destino inesquecível. ' +
      'Aqui as pessoas vivem segundo o lema local: "Et kütt wie et kütt", o que tiver de vir, vem.',
    photos: [
      { wikiTitle: 'Cologne Cathedral', alt: 'Cologne Cathedral', caption: 'Der Kölner Dom, UNESCO-Welterbe und Wahrzeichen der Stadt' },
      { wikiTitle: 'Cologne', alt: 'Cologne panorama with Rhine', caption: 'Köln am Rhein, Dom und Fluss im Abendlicht' },
      { wikiTitle: 'Rose Monday', alt: 'Cologne Karneval Rose Monday parade', caption: 'Der Rosenmontagszug, Höhepunkt des Kölner Karnevals' },
    ],
    vocabTopics: ['Karneval', 'Kölsch beer culture', 'Rheinland expressions'],
    grammarTopic: 'Adjektivdeklination (adjective endings) + Konzessivsätze (obwohl)',
    grammarTopicPt: 'Declinação de adjetivos (terminações dos adjetivos) + orações concessivas (obwohl)',
    lessons: [
      {
        id: 'cologne-1',
        title: 'Karneval!',
        titlePt: 'Carnaval!',
        description: 'Costumes, parades, and the vocabulary of Cologne\'s famous carnival.',
        descriptionPt: 'Fantasias, desfiles e o vocabulário do famoso carnaval de Colônia.',
        steps: [
          { type: 'vocab', word: 'der Karneval', article: 'der', english: 'carnival (Cologne term)', portuguese: 'carnaval (termo de Colônia)', example: 'Der Karneval beginnt am 11.11.' },
          { type: 'vocab', word: 'das Kostüm', article: 'das', english: 'costume', portuguese: 'fantasia', example: 'Sein Kostüm ist sehr kreativ.' },
          { type: 'vocab', word: 'sich verkleiden', article: null, english: 'to dress up / disguise', portuguese: 'fantasiar-se / disfarçar-se', example: 'Ich verkleidete mich als Pirat.' },
          { type: 'vocab', word: 'jeck', article: null, english: 'in the carnival spirit / crazy (Cologne word)', portuguese: 'no espírito do carnaval / animado (palavra de Colônia)', example: 'Bist du auch jeck?' },
          { type: 'vocab', word: 'schunkeln', article: null, english: 'to sway side-to-side with arms linked', portuguese: 'balançar de um lado para o outro de braços dados', example: 'Alle schunkeln zusammen.' },
          { type: 'vocab', word: 'die Kamelle', article: 'die', english: 'candy thrown from Karneval floats', portuguese: 'balas jogadas dos carros alegóricos do carnaval', example: 'Die Kamelle fliegen vom Wagen!' },
          { type: 'grammar', title: 'Adjective endings after definite article', titlePt: 'Terminações dos adjetivos após o artigo definido', explanation: 'After der/die/das, adjective ending is -e (nom/acc neuter/feminine) or -en (all other positions).', explanationPt: 'Depois de der/die/das, a terminação do adjetivo é -e (nom./acus. neutro/feminino) ou -en (todas as outras posições).', examples: ['Der große Zug beginnt um 10 Uhr.', 'Das bunte Kostüm ist sehr schön.', 'Die lustige Feier dauert bis Mitternacht.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "jeck" mean in Cologne?', questionPt: 'O que significa "jeck" em Colônia?', options: ['bored', 'in the carnival spirit', 'tired', 'hungry'], correct: 'in the carnival spirit' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Der groß___ Zug beginnt um 10 Uhr. (nom. masc.)', questionPt: 'Der groß___ Zug beginnt um 10 Uhr. (nom. masc.)', correct: 'große' },
        ],
      },
      {
        id: 'cologne-2',
        title: 'Kölsch Culture',
        titlePt: 'Cultura Kölsch',
        description: 'The Dom, Kölsch beer, and Rheinland dialect quirks.',
        descriptionPt: 'A catedral, a cerveja Kölsch e as peculiaridades do dialeto da Renânia.',
        steps: [
          { type: 'vocab', word: 'der Dom', article: 'der', english: 'Cologne Cathedral', portuguese: 'Catedral de Colônia', example: 'Der Dom ist das Wahrzeichen Kölns.' },
          { type: 'vocab', word: 'das Kölsch', article: 'das', english: 'Cologne\'s beer (also its dialect)', portuguese: 'a cerveja de Colônia (também seu dialeto)', example: 'Ein Kölsch, bitte!' },
          { type: 'vocab', word: 'der Köbes', article: 'der', english: 'traditional Kölsch waiter', portuguese: 'garçom tradicional do Kölsch', example: 'Der Köbes bringt automatisch ein neues Kölsch.' },
          { type: 'vocab', word: 'das Veedel', article: 'das', english: 'neighborhood (Cologne dialect for Viertel)', portuguese: 'bairro (dialeto de Colônia para Viertel)', example: 'Das Veedel ist sehr gemütlich.' },
          { type: 'vocab', word: 'et kütt wie et kütt', article: null, english: 'what comes, comes (Cologne motto)', portuguese: 'o que tiver de vir, vem (lema de Colônia)', example: '"Et kütt wie et kütt", typisch kölnisch!' },
          { type: 'vocab', word: 'anstoßen', article: null, english: 'to clink glasses', portuguese: 'brindar (tilintar os copos)', example: 'Stoßen wir an!' },
          { type: 'grammar', title: 'Konzessivsätze: obwohl (even though)', titlePt: 'Orações concessivas: obwohl (embora)', explanation: 'Obwohl introduces a subordinate clause (verb goes to end). Trotzdem starts a main clause (verb-subject inversion).', explanationPt: 'Obwohl introduz uma oração subordinada (o verbo vai para o fim). Trotzdem inicia uma oração principal (inversão verbo-sujeito).', examples: ['Obwohl es spät war, blieben wir noch.', 'Obwohl er kein Kölsch mochte, trank er ein Glas.', 'Es regnete. Trotzdem fand der Zug statt.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Köbes"?', questionPt: 'O que é "der Köbes"?', options: ['a Kölsch beer', 'a traditional Kölsch waiter', 'a neighborhood', 'the Dom'], correct: 'a traditional Kölsch waiter' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ es spät war, blieben wir noch. (even though)', questionPt: '___ es spät war, blieben wir noch. (embora)', correct: 'Obwohl' },
        ],
      },
    ],
    places: [
      {
        id: 'kln-dom', name: 'Kölner Dom', icon: '⛪',
        coords: [50.9413, 6.9583], image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/K%C3%B6lner_Dom_von_Deutz_aus_gesehen_-_panoramio.jpg/1024px-K%C3%B6lner_Dom_von_Deutz_aus_gesehen_-_panoramio.jpg',
        narrative: 'You step out of the station and the Kölner Dom looms straight ahead, twin Gothic spires that took over 600 years to finish.',
        narrativePt: 'Você sai da estação e a Kölner Dom surge bem à sua frente, duas torres góticas gêmeas que levaram mais de 600 anos para serem concluídas.',
        quiz: {
          question: 'Cologne Cathedral took roughly how long to complete?',
          questionPt: 'Aproximadamente quanto tempo levou para concluir a Catedral de Colônia?',
          options: ['over 600 years', '20 years', '100 years'],
          correct: 'over 600 years',
          explanation: 'Begun in 1248, it was only completed in 1880, more than 600 years later.',
          explanationPt: 'Iniciada em 1248, só foi concluída em 1880, mais de 600 anos depois.',
        },
      },
      {
        id: 'kln-karneval', name: 'Karneval am Alter Markt', icon: '🎭',
        coords: [50.9376, 6.9608], image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/K%C3%B6ln-Rosenmontag-Neumarkt-1836.JPG/1024px-K%C3%B6ln-Rosenmontag-Neumarkt-1836.JPG',
        narrative: "The square erupts in colour and song, it's Karneval. Strangers in costume sway arm-in-arm and sweets rain down from a passing float.",
        narrativePt: 'A praça explode em cores e música, é Karneval. Desconhecidos fantasiados balançam de braços dados e doces caem de um carro alegórico que passa.',
        phrases: [
          { de: 'Kölle Alaaf!', en: 'Cologne hooray! (carnival cry)', pt: 'Viva Colônia! (grito de carnaval)' },
          { de: 'Schönes Kostüm!', en: 'Nice costume!', pt: 'Bela fantasia!' },
          { de: 'Bist du auch jeck?', en: 'Are you in the carnival spirit too?', pt: 'Você também está no espírito do carnaval?' },
        ],
        lessonId: 'cologne-1',
        quiz: {
          question: 'The Cologne carnival rallying cry is…?',
          questionPt: 'O grito de guerra do carnaval de Colônia é…?',
          options: ['Kölle Alaaf!', 'Helau!', 'Prost!'],
          correct: 'Kölle Alaaf!',
          explanation: '"Kölle Alaaf!" is Cologne\'s carnival shout; "Helau!" belongs to Düsseldorf and Mainz.',
          explanationPt: '"Kölle Alaaf!" é o grito de carnaval de Colônia; "Helau!" pertence a Düsseldorf e Mainz.',
        },
      },
      {
        id: 'kln-brauhaus', name: 'Brauhaus (Kölsch)', icon: '🍺',
        coords: [50.9385, 6.9590], image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Peters_Brauhaus%2C_K%C3%B6ln-8848.jpg/1024px-Peters_Brauhaus%2C_K%C3%B6ln-8848.jpg',
        narrative: 'In a snug brewhouse the Köbes keeps swapping your empty glass for a fresh Kölsch, without ever being asked.',
        narrativePt: 'Numa cervejaria aconchegante, o Köbes fica trocando seu copo vazio por um Kölsch fresco, sem nunca ser pedido.',
        phrases: [
          { de: 'Ein Kölsch, bitte.', en: 'A Kölsch, please.', pt: 'Um Kölsch, por favor.' },
          { de: 'Zahlen, bitte.', en: 'The bill, please.', pt: 'A conta, por favor.' },
          { de: 'Es war sehr lecker.', en: 'It was delicious.', pt: 'Estava muito gostoso.' },
        ],
        lessonId: 'cologne-2',
        quiz: {
          question: 'A "Köbes" in a Cologne brewhouse is a…?',
          questionPt: 'Um "Köbes" numa cervejaria de Colônia é um…?',
          options: ['traditional waiter', 'type of beer', 'neighbourhood'],
          correct: 'traditional waiter',
          explanation: 'The Köbes is the traditional Kölsch waiter who keeps refilling the small 0.2 l glasses.',
          explanationPt: 'O Köbes é o garçom tradicional do Kölsch que fica reabastecendo os pequenos copos de 0,2 l.',
        },
      },
      {
        id: 'kln-rhein', name: 'Rheinpromenade', icon: '🌉',
        coords: [50.9413, 6.9650], wikiTitle: 'Hohenzollern Bridge',
        narrative: "You stroll the Rhine promenade to the Hohenzollern Bridge, its railings glittering with thousands of lovers' padlocks.",
        narrativePt: 'Você caminha pela orla do Reno até a Ponte Hohenzollern, cujas grades brilham com milhares de cadeados de casais apaixonados.',
        quiz: {
          question: "Cologne's Hohenzollern Bridge is famous for being covered in…?",
          questionPt: 'A Ponte Hohenzollern de Colônia é famosa por estar coberta de…?',
          options: ['love padlocks', 'graffiti', 'flowers'],
          correct: 'love padlocks',
          explanation: 'Couples attach "love locks" to the bridge and throw the key into the Rhine.',
          explanationPt: 'Os casais prendem "cadeados do amor" na ponte e jogam a chave no Reno.',
        },
      },
      {
        id: 'kln-veedel', name: 'Altstadt-Veedel', icon: '🏘️',
        coords: [50.9380, 6.9600], wikiTitle: 'Cologne',
        narrative: "You end in a cosy Veedel, the colourful old-town quarter where Cologne's easy-going Rhineland spirit feels most at home.",
        narrativePt: 'Você termina num aconchegante Veedel, o colorido bairro da cidade velha onde o espírito descontraído da Renânia de Colônia se sente mais em casa.',
        quiz: {
          question: 'In Cologne dialect, a "Veedel" is a…?',
          questionPt: 'No dialeto de Colônia, um "Veedel" é um…?',
          options: ['neighbourhood', 'beer', 'cathedral'],
          correct: 'neighbourhood',
          explanation: '"Veedel" is the Kölsch word for a city quarter or neighbourhood.',
          explanationPt: '"Veedel" é a palavra em Kölsch para um bairro ou quarteirão da cidade.',
        },
      },
    ],
  },


  {
    id: 'dresden',
    name: 'Dresden',
    tagline: 'Die Elbflorenz: Kunst, Barock und Geschichte',
    theme: 'Art & History',
    accentColor: '#a0522d',
    icon: '🎨',
    description:
      'Dresden, die "Elbflorenz", ist für ihre barocke Architektur und ihre weltberühmten Kunstschätze bekannt. ' +
      'Nach der schweren Zerstörung im Zweiten Weltkrieg wurde die Stadt mit großer Sorgfalt wieder aufgebaut, ' +
      'ein Symbol für Resilienz und Versöhnung. ' +
      'Die Frauenkirche, die Semperoper und der Zwinger machen Dresden zu einem der schönsten Stadtbilder Europas.',
    descriptionEn:
      'Dresden, the "Florence on the Elbe", is renowned for its baroque architecture and world-famous art treasures. ' +
      'After heavy destruction in the Second World War, the city was rebuilt with great care, ' +
      'a symbol of resilience and reconciliation. ' +
      'The Frauenkirche, the Semper Opera and the Zwinger make Dresden one of Europe\'s most beautiful cityscapes.',
    descriptionPt:
      'Dresden, a "Florença do Elba", é famosa por sua arquitetura barroca e por seus tesouros artísticos mundialmente conhecidos. ' +
      'Após a grande destruição na Segunda Guerra Mundial, a cidade foi reconstruída com muito cuidado, ' +
      'um símbolo de resiliência e reconciliação. ' +
      'A Frauenkirche, a Ópera Semper e o Zwinger fazem de Dresden uma das paisagens urbanas mais bonitas da Europa.',
    photos: [
      { wikiTitle: 'Dresden', alt: 'Dresden skyline with Frauenkirche', caption: 'Dresden, die Elbflorenz mit ihrem barocken Stadtbild' },
      { wikiTitle: 'Semperoper', alt: 'Semper Opera House Dresden', caption: 'Die Semperoper, eine der bedeutendsten Opernbühnen der Welt' },
      { wikiTitle: 'Zwinger (Dresden)', alt: 'Zwinger palace Dresden', caption: 'Der Zwinger, barockes Meisterwerk am Theaterplatz' },
    ],
    vocabTopics: ['Baroque architecture', 'Art & museums', 'WWII history & reconstruction'],
    grammarTopic: 'Plusquamperfekt (past perfect) + Kausalsätze (weil vs. da vs. denn)',
    grammarTopicPt: 'Plusquamperfekt (mais-que-perfeito) + orações causais (weil vs. da vs. denn)',
    lessons: [
      {
        id: 'dresden-1',
        title: 'Baroque Dresden',
        titlePt: 'Dresden barroca',
        description: 'Architecture, reconstruction, and the vocabulary of Dresden\'s grand buildings.',
        descriptionPt: 'Arquitetura, reconstrução e o vocabulário dos grandiosos edifícios de Dresden.',
        steps: [
          { type: 'vocab', word: 'die Frauenkirche', article: 'die', english: 'Church of Our Lady', portuguese: 'Igreja de Nossa Senhora', example: 'Die Frauenkirche wurde 2005 fertiggestellt.' },
          { type: 'vocab', word: 'barock', article: null, english: 'baroque', portuguese: 'barroco', example: 'Die barocke Architektur ist wunderschön.' },
          { type: 'vocab', word: 'der Wiederaufbau', article: 'der', english: 'reconstruction', portuguese: 'reconstrução', example: 'Der Wiederaufbau dauerte viele Jahrzehnte.' },
          { type: 'vocab', word: 'zerstört', article: null, english: 'destroyed', portuguese: 'destruído', example: 'Die Stadt wurde im Krieg zerstört.' },
          { type: 'vocab', word: 'restauriert', article: null, english: 'restored', portuguese: 'restaurado', example: 'Die Oper wurde vollständig restauriert.' },
          { type: 'vocab', word: 'prächtig', article: null, english: 'magnificent', portuguese: 'magnífico', example: 'Das Stadtbild ist sehr prächtig.' },
          { type: 'grammar', title: 'Plusquamperfekt (past perfect)', titlePt: 'Plusquamperfekt (mais-que-perfeito)', explanation: 'For events that happened before another past event. Formed with hatte/war (Präteritum) + Partizip II.', explanationPt: 'Para eventos que aconteceram antes de outro evento passado. Formado com hatte/war (Präteritum) + Partizip II.', examples: ['Nachdem die Bombe gefallen war, brannte die Stadt.', 'Er hatte die Frauenkirche noch nie gesehen.', 'Bevor der Krieg begann, war Dresden berühmt.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Wiederaufbau"?', questionPt: 'O que é "der Wiederaufbau"?', options: ['destruction', 'reconstruction', 'monument', 'architecture'], correct: 'reconstruction' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Nachdem die Stadt zerstört worden ___, begann der Wiederaufbau. (war/hatte)', questionPt: 'Nachdem die Stadt zerstört worden ___, begann der Wiederaufbau. (war/hatte)', correct: 'war' },
        ],
      },
      {
        id: 'dresden-2',
        title: 'Art & History',
        titlePt: 'Arte e história',
        description: 'Museums, paintings, WWII history, and the Saxon dialect.',
        descriptionPt: 'Museus, pinturas, a história da Segunda Guerra Mundial e o dialeto saxão.',
        steps: [
          { type: 'vocab', word: 'die Sammlung', article: 'die', english: 'collection', portuguese: 'coleção', example: 'Die Gemäldegalerie hat eine berühmte Sammlung.' },
          { type: 'vocab', word: 'das Meisterwerk', article: 'das', english: 'masterpiece', portuguese: 'obra-prima', example: 'Das ist ein echtes Meisterwerk.' },
          { type: 'vocab', word: 'die Versöhnung', article: 'die', english: 'reconciliation', portuguese: 'reconciliação', example: 'Dresden ist ein Symbol der Versöhnung.' },
          { type: 'vocab', word: 'die Trümmer', article: 'die', english: 'rubble / debris', portuguese: 'escombros / entulho', example: 'Die Stadt wurde aus den Trümmern aufgebaut.' },
          { type: 'vocab', word: 'Sächsisch', article: null, english: 'Saxon dialect', portuguese: 'dialeto saxão', example: '"Ich" klingt auf Sächsisch wie "isch".' },
          { type: 'vocab', word: 'bezeugen', article: null, english: 'to witness', portuguese: 'testemunhar', example: 'Er konnte die Geschichte persönlich bezeugen.' },
          { type: 'grammar', title: 'Kausalsätze: weil vs. da vs. denn', titlePt: 'Orações causais: weil vs. da vs. denn', explanation: 'All mean "because" but differ: weil/da → verb to end (subordinate clause); denn → verb stays 2nd (main clause). Da is more formal.', explanationPt: 'Todas significam "porque", mas diferem: weil/da → verbo vai para o fim (oração subordinada); denn → verbo permanece na 2ª posição (oração principal). Da é mais formal.', examples: ['Ich blieb, weil die Ausstellung so gut war.', 'Da das Museum kostenlos war, gingen viele hin.', 'Das Gemälde ist wertvoll, denn es stammt aus dem 17. Jh.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which conjunction keeps the verb in second position?', questionPt: 'Qual conjunção mantém o verbo na segunda posição?', options: ['weil', 'da', 'denn', 'obwohl'], correct: 'denn' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich blieb lange, ___ die Ausstellung so beeindruckend war. (because, subordinate)', questionPt: 'Ich blieb lange, ___ die Ausstellung so beeindruckend war. (porque, subordinada)', correct: 'weil' },
        ],
      },
    ],
    places: [
      {
        id: 'dre-frauenkirche', name: 'Frauenkirche', icon: '⛪',
        coords: [51.0519, 13.7414], wikiTitle: 'Dresden Frauenkirche',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Dresden_Germany_Exterior-of-Frauenkirche-04.jpg',
        narrative: 'You stand before the Frauenkirche, rebuilt stone by stone from wartime rubble and reopened in 2005, Dresden\'s emblem of reconciliation.',
        narrativePt: 'Você está diante da Frauenkirche, reconstruída pedra por pedra a partir dos escombros da guerra e reaberta em 2005, o emblema de reconciliação de Dresden.',
        phrases: [
          { de: 'Die Kirche wurde wieder aufgebaut.', en: 'The church was rebuilt.', pt: 'A igreja foi reconstruída.' },
          { de: 'Die Architektur ist barock.', en: 'The architecture is baroque.', pt: 'A arquitetura é barroca.' },
          { de: 'Das ist wunderschön.', en: 'That is beautiful.', pt: 'Isso é lindo.' },
        ],
        lessonId: 'dresden-1',
        quiz: {
          question: "Dresden's Frauenkirche reopened in 2005 after being…?",
          questionPt: 'A Frauenkirche de Dresden reabriu em 2005 depois de ter sido…?',
          options: ['rebuilt from wartime rubble', 'moved across the river', 'painted gold'],
          correct: 'rebuilt from wartime rubble',
          explanation: 'Destroyed in 1945, it was painstakingly reconstructed using many original stones.',
          explanationPt: 'Destruída em 1945, ela foi meticulosamente reconstruída usando muitas pedras originais.',
        },
      },
      {
        id: 'dre-galerie', name: 'Gemäldegalerie Alte Meister', icon: '🖼️',
        coords: [51.0535, 13.7331], wikiTitle: 'Old Masters Gallery',
        narrative: "Inside the Zwinger you find Raphael's Sistine Madonna, its two little angels gazing out from one of the world's great art collections.",
        narrativePt: 'Dentro do Zwinger você encontra a Madona Sistina de Rafael, com seus dois anjinhos olhando para fora, parte de uma das grandes coleções de arte do mundo.',
        phrases: [
          { de: 'Wo ist die Sammlung?', en: 'Where is the collection?', pt: 'Onde está a coleção?' },
          { de: 'Das ist ein Meisterwerk.', en: 'That is a masterpiece.', pt: 'Isso é uma obra-prima.' },
          { de: 'Darf ich fotografieren?', en: 'May I take photos?', pt: 'Posso tirar fotos?' },
        ],
        lessonId: 'dresden-2',
        quiz: {
          question: "Which painter's 'Sistine Madonna' hangs in Dresden's Old Masters Gallery?",
          questionPt: 'A "Madona Sistina" de qual pintor está exposta na Galeria dos Antigos Mestres de Dresden?',
          options: ['Raphael', 'Picasso', 'Dürer'],
          correct: 'Raphael',
          explanation: "Raphael's Sistine Madonna, with its famous cherubs, is the gallery's star work.",
          explanationPt: 'A Madona Sistina de Rafael, com seus famosos querubins, é a obra de destaque da galeria.',
        },
      },
      {
        id: 'dre-zwinger', name: 'Zwinger', icon: '🏛️',
        coords: [51.0532, 13.7335], wikiTitle: 'Zwinger (Dresden)',
        narrative: "You wander the Zwinger's courtyard, a baroque masterpiece of pavilions, fountains and the Nymphenbad.",
        narrativePt: 'Você passeia pelo pátio do Zwinger, uma obra-prima barroca de pavilhões, fontes e o Nymphenbad.',
        quiz: {
          question: 'The Dresden Zwinger is an example of which architectural style?',
          questionPt: 'O Zwinger de Dresden é um exemplo de qual estilo arquitetônico?',
          options: ['Baroque', 'Gothic', 'Bauhaus'],
          correct: 'Baroque',
          explanation: "The Zwinger is one of Germany's most important baroque buildings.",
          explanationPt: 'O Zwinger é um dos edifícios barrocos mais importantes da Alemanha.',
        },
      },
      {
        id: 'dre-semperoper', name: 'Semperoper', icon: '🎭',
        coords: [51.0544, 13.7355], wikiTitle: 'Semperoper',
        narrative: 'On Theaterplatz the Semperoper glows at dusk, one of the world\'s great opera houses, twice rebuilt after fire and war.',
        narrativePt: 'Na Theaterplatz, a Semperoper brilha ao entardecer, uma das grandes casas de ópera do mundo, reconstruída duas vezes após incêndio e guerra.',
        quiz: {
          question: "The Semperoper is one of the world's most famous…?",
          questionPt: 'A Semperoper é uma das mais famosas do mundo em quê…?',
          options: ['opera houses', 'train stations', 'palaces'],
          correct: 'opera houses',
          explanation: 'Home of the Saxon State Opera, it was rebuilt after both an 1869 fire and WWII.',
          explanationPt: 'Sede da Ópera Estadual da Saxônia, foi reconstruída tanto após um incêndio em 1869 quanto após a Segunda Guerra Mundial.',
        },
      },
      {
        id: 'dre-bruehl', name: 'Brühlsche Terrasse', icon: '🌅',
        coords: [51.0540, 13.7390], wikiTitle: "Brühl's Terrace",
        narrative: "You finish on the Brühlsche Terrasse above the Elbe, a riverside promenade so lovely it was nicknamed the 'Balcony of Europe'.",
        narrativePt: 'Você termina na Brühlsche Terrasse, acima do Elba, um calçadão à beira-rio tão bonito que foi apelidado de "Varanda da Europa".',
        quiz: {
          question: "Dresden's Brühlsche Terrasse is nicknamed the 'Balcony of…'?",
          questionPt: 'A Brühlsche Terrasse de Dresden é apelidada de "Varanda de…"?',
          options: ['Europe', 'the Alps', 'the Sea'],
          correct: 'Europe',
          explanation: 'The elevated riverside terrace has long been called the "Balcony of Europe".',
          explanationPt: 'O terraço elevado à beira-rio há muito tempo é chamado de "Varanda da Europa".',
        },
      },
    ],
  },


  {
    id: 'nuremberg',
    name: 'Nürnberg',
    tagline: 'Mittelalter, Märkte und Weihnachtszauber',
    theme: 'Christmas Market & History',
    accentColor: '#b5451b',
    icon: '🎄',
    description:
      'Nürnberg ist eine mittelalterliche Kaiserstadt mit einer tiefen Geschichte, ' +
      'von den Reichstagen des Heiligen Römischen Reiches bis zu den Nürnberger Prozessen nach 1945. ' +
      'Heute ist die Stadt vor allem für ihren Christkindlesmarkt bekannt, einen der ältesten der Welt. ' +
      'Im Advent verwandelt sich die Altstadt in ein leuchtendes Märchen aus Lebkuchen und Glühwein.',
    descriptionEn:
      'Nuremberg is a medieval imperial city with a deep history, ' +
      'from the diets of the Holy Roman Empire to the Nuremberg Trials after 1945. ' +
      'Today the city is best known for its Christkindlesmarkt, one of the oldest in the world. ' +
      'In Advent the old town turns into a glowing fairy tale of gingerbread and mulled wine.',
    descriptionPt:
      'Nuremberg é uma cidade imperial medieval com uma história profunda, ' +
      'das dietas do Sacro Império Romano-Germânico até os Julgamentos de Nuremberg após 1945. ' +
      'Hoje a cidade é mais conhecida por seu Christkindlesmarkt, um dos mais antigos do mundo. ' +
      'No Advento, o centro histórico se transforma num conto de fadas resplandecente de pão de mel e vinho quente.',
    photos: [
      { wikiTitle: 'Nuremberg Castle', alt: 'Nuremberg Imperial Castle', caption: 'Die Nürnberger Burg, Symbol der mittelalterlichen Kaiserstadt' },
      { wikiTitle: 'Christkindlesmarkt, Nuremberg', alt: 'Nuremberg Christmas market', caption: 'Der Christkindlesmarkt, einer der bekanntesten der Welt' },
      { wikiTitle: 'Nuremberg', alt: 'Nuremberg old town', caption: 'Die Nürnberger Altstadt, mittelalterliches Flair seit dem 13. Jahrhundert' },
    ],
    vocabTopics: ['Christmas market', 'Shopping & gifts', 'Medieval history'],
    grammarTopic: 'Komparativ & Superlativ + Finalsätze (damit / um…zu)',
    grammarTopicPt: 'Comparativo e superlativo + orações finais (damit / um…zu)',
    lessons: [
      {
        id: 'nuremberg-1',
        title: 'The Christmas Market',
        titlePt: 'O Mercado de Natal',
        description: 'Glühwein, Lebkuchen, and holiday vocabulary at Germany\'s most famous market.',
        descriptionPt: 'Glühwein, Lebkuchen e vocabulário natalino no mercado mais famoso da Alemanha.',
        steps: [
          { type: 'vocab', word: 'der Weihnachtsmarkt', article: 'der', english: 'Christmas market', portuguese: 'mercado de Natal', example: 'Der Weihnachtsmarkt öffnet im Dezember.' },
          { type: 'vocab', word: 'der Glühwein', article: 'der', english: 'mulled wine', portuguese: 'vinho quente', example: 'Ein Glühwein wärmt bei Kälte.' },
          { type: 'vocab', word: 'der Lebkuchen', article: 'der', english: 'gingerbread', portuguese: 'pão de mel', example: 'Nürnberger Lebkuchen sind weltberühmt.' },
          { type: 'vocab', word: 'das Christkind', article: 'das', english: 'Christ child (opens the Nürnberg market)', portuguese: 'Menino Jesus (abre o mercado de Nuremberg)', example: 'Das Christkind eröffnet den Markt.' },
          { type: 'vocab', word: 'die Kerze', article: 'die', english: 'candle', portuguese: 'vela', example: 'Die Kerzen leuchten in der Nacht.' },
          { type: 'vocab', word: 'besinnlich', article: null, english: 'reflective / contemplative (Christmas mood)', portuguese: 'reflexivo / contemplativo (clima natalino)', example: 'Die Stimmung ist sehr besinnlich.' },
          { type: 'grammar', title: 'Komparativ & Superlativ', titlePt: 'Comparativo e superlativo', explanation: 'Add -er for comparative, am …sten for superlative predicate, or der/die/das …ste attributively. Many one-syllable adjectives umlaut.', explanationPt: 'Acrescente -er para o comparativo, am …sten para o superlativo predicativo, ou der/die/das …ste no uso atributivo. Muitos adjetivos de uma sílaba recebem trema.', examples: ['Dieser Markt ist größer als der andere.', 'Das ist der bekannteste Weihnachtsmarkt Deutschlands.', 'Der Glühwein hier ist wärmer.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Lebkuchen"?', questionPt: 'O que é "der Lebkuchen"?', options: ['mulled wine', 'gingerbread', 'candle', 'Christmas tree'], correct: 'gingerbread' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Das ist der bekannt___ Weihnachtsmarkt Deutschlands. (superlative)', questionPt: 'Das ist der bekannt___ Weihnachtsmarkt Deutschlands. (superlativo)', correct: 'bekannteste' },
        ],
      },
      {
        id: 'nuremberg-2',
        title: 'Shopping & History',
        titlePt: 'Compras e história',
        description: 'Buying gifts, exploring the medieval castle, and Nuremberg\'s complex past.',
        descriptionPt: 'Comprar presentes, explorar o castelo medieval e o passado complexo de Nuremberg.',
        steps: [
          { type: 'vocab', word: 'das Souvenir', article: 'das', english: 'souvenir', portuguese: 'lembrança', example: 'Ich kaufe ein Souvenir für meine Familie.' },
          { type: 'vocab', word: 'das Geschenk', article: 'das', english: 'gift', portuguese: 'presente', example: 'Das Geschenk ist für meinen Freund.' },
          { type: 'vocab', word: 'die Burg', article: 'die', english: 'castle', portuguese: 'castelo', example: 'Die Burg überblickt die ganze Stadt.' },
          { type: 'vocab', word: 'mittelalterlich', article: null, english: 'medieval', portuguese: 'medieval', example: 'Die Altstadt hat einen mittelalterlichen Charme.' },
          { type: 'vocab', word: 'die Gerechtigkeit', article: 'die', english: 'justice', portuguese: 'justiça', example: 'Die Nürnberger Prozesse standen für Gerechtigkeit.' },
          { type: 'vocab', word: 'die Stadtmauer', article: 'die', english: 'city wall', portuguese: 'muralha da cidade', example: 'Die Stadtmauer ist sehr gut erhalten.' },
          { type: 'grammar', title: 'Finalsätze: damit vs. um…zu', titlePt: 'Orações finais: damit vs. um…zu', explanation: 'Both express purpose. Use um…zu when both clauses share a subject. Use damit when the subjects are different.', explanationPt: 'Ambas exprimem finalidade. Use um…zu quando as duas orações têm o mesmo sujeito. Use damit quando os sujeitos são diferentes.', examples: ['Ich kaufe Handschuhe, um nicht zu frieren. (same subject)', 'Ich kaufe Handschuhe, damit du nicht frierst. (different subjects)', 'Er machte ein Feuer, damit alle sich wärmen konnten.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'When do you use "damit" instead of "um…zu"?', questionPt: 'Quando você usa "damit" em vez de "um…zu"?', options: ['When it\'s the past', 'When the subjects are different', 'When it\'s a question', 'When the verb is irregular'], correct: 'When the subjects are different' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich kaufe Handschuhe, ___ nicht zu frieren. (same subject, in order to)', questionPt: 'Ich kaufe Handschuhe, ___ nicht zu frieren. (mesmo sujeito, a fim de)', correct: 'um' },
        ],
      },
    ],
    places: [
      {
        id: 'nrn-markt', name: 'Christkindlesmarkt', icon: '🎄',
        coords: [49.4541, 11.0775], wikiTitle: 'Nuremberg Christmas Market',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Christkindlesmarkt_Nuernberg.jpg',
        narrative: 'Snow drifts over the Hauptmarkt as you enter the Christkindlesmarkt, wooden stalls, the scent of Glühwein, and Lebkuchen stacked high.',
        narrativePt: 'A neve cai sobre o Hauptmarkt enquanto você entra no Christkindlesmarkt, com barracas de madeira, o aroma de Glühwein e Lebkuchen empilhados bem alto.',
        phrases: [
          { de: 'Einen Glühwein, bitte.', en: 'A mulled wine, please.', pt: 'Um vinho quente, por favor.' },
          { de: 'Wie viel kostet das?', en: 'How much does that cost?', pt: 'Quanto custa isso?' },
          { de: 'Frohe Weihnachten!', en: 'Merry Christmas!', pt: 'Feliz Natal!' },
        ],
        lessonId: 'nuremberg-1',
        quiz: {
          question: "Nuremberg's Christmas market is opened each year by the…?",
          questionPt: 'O mercado de Natal de Nuremberg é aberto todos os anos pelo…?',
          options: ['Christkind', 'Mayor', 'Köbes'],
          correct: 'Christkind',
          explanation: 'A young woman playing the "Christkind" (Christ child) opens the market with a prologue.',
          explanationPt: 'Uma jovem que interpreta o "Christkind" (Menino Jesus) abre o mercado com um prólogo.',
        },
      },
      {
        id: 'nrn-handwerkerhof', name: 'Handwerkerhof', icon: '🛍️',
        coords: [49.4520, 11.0810], wikiTitle: 'Nuremberg',
        narrative: "In the craftsmen's courtyard you hunt for gifts, carved toys, tin figures and the famous Nürnberger Lebkuchen to take home.",
        narrativePt: 'No pátio dos artesãos você caça presentes, brinquedos entalhados, figuras de estanho e o famoso Nürnberger Lebkuchen para levar para casa.',
        phrases: [
          { de: 'Ich suche ein Geschenk.', en: 'I am looking for a gift.', pt: 'Estou procurando um presente.' },
          { de: 'Haben Sie ein Souvenir?', en: 'Do you have a souvenir?', pt: 'Você tem uma lembrança?' },
          { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?', pt: 'Posso pagar com cartão?' },
        ],
        lessonId: 'nuremberg-2',
        quiz: {
          question: 'A traditional edible souvenir from Nuremberg is…?',
          questionPt: 'Uma lembrança comestível tradicional de Nuremberg é…?',
          options: ['Lebkuchen (gingerbread)', 'Sachertorte', 'Brezn'],
          correct: 'Lebkuchen (gingerbread)',
          explanation: 'Nürnberger Lebkuchen is a protected speciality, baked here since the Middle Ages.',
          explanationPt: 'O Nürnberger Lebkuchen é uma especialidade com denominação protegida, assada aqui desde a Idade Média.',
        },
      },
      {
        id: 'nrn-burg', name: 'Kaiserburg', icon: '🏰',
        coords: [49.4577, 11.0764], wikiTitle: 'Nuremberg Castle',
        narrative: 'You climb to the Kaiserburg, the imperial castle on the hill, where medieval emperors once held court above the red rooftops.',
        narrativePt: 'Você sobe até o Kaiserburg, o castelo imperial na colina, onde imperadores medievais outrora mantinham corte acima dos telhados vermelhos.',
        quiz: {
          question: 'The Kaiserburg shows that Nuremberg was an important city of which empire?',
          questionPt: 'O Kaiserburg mostra que Nuremberg foi uma cidade importante de qual império?',
          options: ['the Holy Roman Empire', 'the Roman Empire', 'the Ottoman Empire'],
          correct: 'the Holy Roman Empire',
          explanation: 'Imperial diets of the Holy Roman Empire were held at Nuremberg Castle.',
          explanationPt: 'As dietas imperiais do Sacro Império Romano-Germânico eram realizadas no Castelo de Nuremberg.',
        },
      },
      {
        id: 'nrn-mauer', name: 'Stadtmauer', icon: '🧱',
        coords: [49.4530, 11.0680], wikiTitle: 'Nuremberg',
        narrative: 'You trace the old Stadtmauer, the largely intact medieval city wall studded with towers that still rings the old town.',
        narrativePt: 'Você percorre a antiga Stadtmauer, a muralha medieval em grande parte intacta, cravejada de torres, que ainda cerca o centro histórico.',
        quiz: {
          question: "Nuremberg's old town is still encircled by a well-preserved medieval…?",
          questionPt: 'O centro histórico de Nuremberg ainda é cercado por uma bem preservada… medieval?',
          options: ['city wall', 'canal', 'railway'],
          correct: 'city wall',
          explanation: "Nuremberg retains one of Europe's most complete medieval city walls.",
          explanationPt: 'Nuremberg conserva uma das muralhas medievais mais completas da Europa.',
        },
      },
      {
        id: 'nrn-prozesse', name: 'Memorium Nürnberger Prozesse', icon: '⚖️',
        coords: [49.4530, 11.0490], wikiTitle: 'Nuremberg trials',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Memorium_N%C3%BCrnberger_Prozesse_-_Blick_in_den_Saal_600_%282%29.jpg/1280px-Memorium_N%C3%BCrnberger_Prozesse_-_Blick_in_den_Saal_600_%282%29.jpg',
        narrative: 'At Courtroom 600 you reach a sombre chapter: here the Nuremberg Trials brought leading war criminals to justice after 1945.',
        narrativePt: 'Na Sala 600 você chega a um capítulo sombrio: aqui os Julgamentos de Nuremberg levaram os principais criminosos de guerra à justiça após 1945.',
        quiz: {
          question: 'The Nuremberg Trials after WWII were about establishing…?',
          questionPt: 'Os Julgamentos de Nuremberg após a Segunda Guerra Mundial tratavam de estabelecer…?',
          options: ['justice for war crimes', 'new trade laws', 'city taxes'],
          correct: 'justice for war crimes',
          explanation: "In 1945–46, leading Nazis were tried for war crimes in Nuremberg's Courtroom 600.",
          explanationPt: 'Em 1945–46, os principais nazistas foram julgados por crimes de guerra na Sala 600 de Nuremberg.',
        },
      },
    ],
  },


  {
    id: 'vienna',
    name: 'Wien',
    tagline: 'Grüß Gott! Willkommen in Österreich',
    theme: 'Austrian German & Coffeehouse Culture',
    accentColor: '#c0722a',
    icon: '☕',
    description:
      'Wien, die Hauptstadt Österreichs, war jahrhundertelang das Herz eines mächtigen Kaiserreichs. ' +
      'Die prachtvolle Architektur, die weltberühmte Kaffeehauskultur, die Staatsoper und die kaiserlichen Museen ' +
      'machen Wien zu einer der schönsten Städte der Welt. ' +
      'Hier spricht man Deutsch, aber etwas anders als in Deutschland. Grüß Gott!',
    descriptionEn:
      'Vienna, the capital of Austria, was for centuries the heart of a mighty empire. ' +
      'Its magnificent architecture, world-famous coffee-house culture, the State Opera and the imperial museums ' +
      'make Vienna one of the most beautiful cities in the world. ' +
      'German is spoken here, but a little differently than in Germany. Grüß Gott!',
    descriptionPt:
      'Viena, a capital da Áustria, foi durante séculos o coração de um poderoso império. ' +
      'Sua arquitetura magnífica, a mundialmente famosa cultura dos cafés, a Ópera Estatal e os museus imperiais ' +
      'fazem de Viena uma das cidades mais bonitas do mundo. ' +
      'Aqui se fala alemão, mas um pouco diferente da Alemanha. Grüß Gott!',
    photos: [
      { wikiTitle: 'Stephansdom', alt: 'Stephansdom Vienna', caption: 'Der Stephansdom, das Herz Wiens seit dem 12. Jahrhundert' },
      { wikiTitle: 'Schönbrunn Palace', alt: 'Schönbrunn Palace Vienna', caption: 'Schloss Schönbrunn, Sommerresidenz der Habsburger Kaiser' },
      { wikiTitle: 'Vienna State Opera', alt: 'Vienna State Opera', caption: 'Die Wiener Staatsoper, eine der bedeutendsten Opernbühnen der Welt' },
    ],
    vocabTopics: ['Austrian German vocabulary', 'Coffeehouse culture', 'Opera & imperial culture'],
    grammarTopic: 'Modalpartikeln (doch, ja, mal, eigentlich, halt, schon)',
    grammarTopicPt: 'Partículas modais (doch, ja, mal, eigentlich, halt, schon)',
    lessons: [
      {
        id: 'vienna-1',
        title: 'Austrian German',
        titlePt: 'Alemão austríaco',
        description: 'When "Kartoffel" becomes "Erdapfel": key Austrian-German vocabulary differences.',
        descriptionPt: 'Quando "Kartoffel" vira "Erdapfel": as principais diferenças de vocabulário do alemão austríaco.',
        steps: [
          { type: 'vocab', word: 'Grüß Gott!', article: null, english: 'Hello! (Austrian/Bavarian greeting)', portuguese: 'Olá! (saudação austríaca/bávara)', example: 'Grüß Gott! Wie geht es Ihnen?' },
          { type: 'vocab', word: 'der Erdapfel', article: 'der', english: 'potato (Austrian for Kartoffel)', portuguese: 'batata (termo austríaco para Kartoffel)', example: 'Erdäpfel sind sehr lecker.' },
          { type: 'vocab', word: 'der Paradeiser', article: 'der', english: 'tomato (Austrian for Tomate)', portuguese: 'tomate (termo austríaco para Tomate)', example: 'Der Paradeiser ist frisch vom Markt.' },
          { type: 'vocab', word: 'die Marille', article: 'die', english: 'apricot (Austrian for Aprikose)', portuguese: 'damasco (termo austríaco para Aprikose)', example: 'Die Marillen sind sehr süß.' },
          { type: 'vocab', word: 'auf Wiederschauen', article: null, english: 'goodbye (Austrian for auf Wiedersehen)', portuguese: 'tchau (termo austríaco para auf Wiedersehen)', example: 'Auf Wiederschauen! Bis morgen!' },
          { type: 'vocab', word: 'Jänner', article: null, english: 'January (Austrian for Januar)', portuguese: 'janeiro (termo austríaco para Januar)', example: 'Im Jänner ist es sehr kalt.' },
          { type: 'grammar', title: 'Modalpartikeln: doch, ja, mal', titlePt: 'Partículas modais: doch, ja, mal', explanation: 'Small particles that color tone. doch = contradiction/encouragement. ja = shared knowledge/mild surprise. mal = softens a request.', explanationPt: 'Pequenas partículas que dão cor ao tom. doch = contradição/incentivo. ja = conhecimento compartilhado/leve surpresa. mal = suaviza um pedido.', examples: ['Komm doch mit! (encouragement)', 'Das ist ja interessant! (shared surprise)', 'Schau mal hier. (casual softening)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Erdapfel" in Standard German?', questionPt: 'O que é "der Erdapfel" em alemão padrão?', options: ['der Apfel', 'die Tomate', 'die Kartoffel', 'die Karotte'], correct: 'die Kartoffel' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Komm ___ mit! (encouragement particle)', questionPt: 'Komm ___ mit! (partícula de incentivo)', correct: 'doch' },
        ],
      },
      {
        id: 'vienna-2',
        title: 'Coffeehouse & Opera',
        titlePt: 'Café e Ópera',
        description: 'The Viennese Melange, the Staatsoper, and Austria\'s imperial grandeur.',
        descriptionPt: 'O Melange vienense, a Staatsoper e a grandiosidade imperial da Áustria.',
        steps: [
          { type: 'vocab', word: 'das Kaffeehaus', article: 'das', english: 'Viennese coffee house', portuguese: 'café vienense (casa de café)', example: 'Das Wiener Kaffeehaus hat eine lange Tradition.' },
          { type: 'vocab', word: 'der Melange', article: 'der', english: 'Viennese coffee with steamed milk', portuguese: 'café vienense com leite vaporizado', example: 'Einen Melange, bitte.' },
          { type: 'vocab', word: 'die Sachertorte', article: 'die', english: 'Sacher torte (famous Viennese cake)', portuguese: 'torta Sacher (famoso bolo vienense)', example: 'Die Sachertorte ist eine Wiener Spezialität.' },
          { type: 'vocab', word: 'der Stehplatz', article: 'der', english: 'standing room (at the opera)', portuguese: 'lugar em pé (na ópera)', example: 'Ein Stehplatz kostet nur 3 Euro.' },
          { type: 'vocab', word: 'kaiserlich', article: null, english: 'imperial', portuguese: 'imperial', example: 'Die kaiserliche Residenz ist beeindruckend.' },
          { type: 'vocab', word: 'verweilen', article: null, english: 'to linger / stay a while', portuguese: 'demorar-se / ficar um tempo', example: 'Im Kaffeehaus kann man stundenlang verweilen.' },
          { type: 'grammar', title: 'Modalpartikeln: eigentlich, halt, schon', titlePt: 'Partículas modais: eigentlich, halt, schon', explanation: 'eigentlich = "actually" (mild reframe). halt = resignation/that\'s how it is (South German/Austrian). schon = concession ("yes, but…").', explanationPt: 'eigentlich = "na verdade" (leve reformulação). halt = resignação/é assim mesmo (sul da Alemanha/Áustria). schon = concessão ("sim, mas…").', examples: ['Ich wollte eigentlich früher kommen.', 'Das dauert halt ein bisschen länger.', 'Das stimmt schon, aber...'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Melange"?', questionPt: 'O que é "der Melange"?', options: ['a type of cake', 'Viennese coffee with milk', 'standing room ticket', 'a palace'], correct: 'Viennese coffee with milk' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich wollte ___ früher kommen. (actually)', questionPt: 'Ich wollte ___ früher kommen. (na verdade)', correct: 'eigentlich' },
        ],
      },
    ],
    places: [
      {
        id: 'wie-stephansdom', name: 'Stephansdom', icon: '⛪',
        coords: [48.2085, 16.3731], wikiTitle: "St. Stephen's Cathedral, Vienna",
        narrative: "You arrive beneath the Stephansdom, its tiled roof gleaming over the old town. A passer-by greets you with 'Grüß Gott!', your first taste of Austrian German.",
        narrativePt: "Você chega ao pé da Stephansdom, com seu telhado de azulejos reluzindo sobre a cidade antiga. Um transeunte o cumprimenta com 'Grüß Gott!', seu primeiro contato com o alemão austríaco.",
        phrases: [
          { de: 'Grüß Gott!', en: 'Hello! (Austrian/Bavarian greeting)', pt: 'Olá! (saudação austríaca/bávara)' },
          { de: 'Auf Wiederschauen!', en: 'Goodbye! (Austrian)', pt: 'Tchau! (austríaco)' },
          { de: 'Einen Erdäpfelsalat, bitte.', en: 'A potato salad, please.', pt: 'Uma salada de batata, por favor.' },
        ],
        lessonId: 'vienna-1',
        quiz: {
          question: 'The Austrian greeting "Grüß Gott!" is used to say…?',
          questionPt: 'A saudação austríaca "Grüß Gott!" é usada para dizer…?',
          options: ['hello', 'thank you', 'cheers'],
          correct: 'hello',
          explanation: '"Grüß Gott" is the standard hello in Austria and Bavaria.',
          explanationPt: '"Grüß Gott" é o "olá" padrão na Áustria e na Baviera.',
        },
      },
      {
        id: 'wie-kaffeehaus', name: 'Café Central', icon: '☕',
        coords: [48.2106, 16.3656], wikiTitle: 'Café Central',
        narrative: 'You sink into a marble-topped table at Café Central, order a Melange and a slice of Sachertorte, and let the afternoon drift by.',
        narrativePt: 'Você se acomoda em uma mesa de tampo de mármore no Café Central, pede um Melange e uma fatia de Sachertorte, e deixa a tarde passar.',
        phrases: [
          { de: 'Einen Melange, bitte.', en: 'A Viennese milk coffee, please.', pt: 'Um café com leite vienense, por favor.' },
          { de: 'Ein Stück Sachertorte, bitte.', en: 'A piece of Sacher torte, please.', pt: 'Uma fatia de torta Sacher, por favor.' },
          { de: 'Die Rechnung, bitte.', en: 'The bill, please.', pt: 'A conta, por favor.' },
        ],
        lessonId: 'vienna-2',
        quiz: {
          question: 'A Viennese "Melange" is a kind of…?',
          questionPt: 'Um "Melange" vienense é um tipo de…?',
          options: ['coffee', 'cake', 'wine'],
          correct: 'coffee',
          explanation: 'A Melange is a Viennese coffee with steamed, foamed milk, similar to a cappuccino.',
          explanationPt: 'Um Melange é um café vienense com leite vaporizado e espumado, parecido com um cappuccino.',
        },
      },
      {
        id: 'wie-staatsoper', name: 'Wiener Staatsoper', icon: '🎭',
        coords: [48.2030, 16.3690], wikiTitle: 'Vienna State Opera',
        narrative: "At the Staatsoper you grab a cheap standing-room ticket and join the city's great love affair with music.",
        narrativePt: "Na Staatsoper você pega um ingresso barato para lugar em pé e se junta ao grande caso de amor da cidade com a música.",
        quiz: {
          question: 'At the Vienna State Opera, a "Stehplatz" is a…?',
          questionPt: 'Na Ópera Estatal de Viena, um "Stehplatz" é um…?',
          options: ['standing-room ticket', 'royal box', 'backstage pass'],
          correct: 'standing-room ticket',
          explanation: 'Stehplätze are inexpensive standing-room tickets, a Viennese tradition.',
          explanationPt: 'Stehplätze são ingressos baratos para lugar em pé, uma tradição vienense.',
        },
      },
      {
        id: 'wie-schoenbrunn', name: 'Schloss Schönbrunn', icon: '👑',
        coords: [48.1858, 16.3122], wikiTitle: 'Schönbrunn Palace',
        narrative: "You spend the morning at Schönbrunn, the Habsburgs' yellow summer palace, wandering its endless rooms and manicured gardens.",
        narrativePt: "Você passa a manhã em Schönbrunn, o palácio de verão amarelo dos Habsburgo, percorrendo seus incontáveis salões e jardins bem cuidados.",
        quiz: {
          question: 'Schönbrunn Palace was the summer residence of which imperial dynasty?',
          questionPt: 'O Palácio de Schönbrunn foi a residência de verão de qual dinastia imperial?',
          options: ['the Habsburgs', 'the Hohenzollerns', 'the Wittelsbachs'],
          correct: 'the Habsburgs',
          explanation: 'Schönbrunn was the summer palace of the Habsburg emperors.',
          explanationPt: 'Schönbrunn foi o palácio de verão dos imperadores Habsburgo.',
        },
      },
      {
        id: 'wie-hofburg', name: 'Hofburg', icon: '🏛️',
        coords: [48.2065, 16.3656], wikiTitle: 'Hofburg',
        narrative: 'You finish at the Hofburg, the sprawling winter palace from which the Habsburgs ruled their empire for centuries.',
        narrativePt: 'Você termina no Hofburg, o vasto palácio de inverno de onde os Habsburgo governaram seu império por séculos.',
        quiz: {
          question: 'For centuries the Hofburg was the imperial seat of power in…?',
          questionPt: 'Por séculos, o Hofburg foi a sede imperial do poder em…?',
          options: ['Austria', 'Prussia', 'Bavaria'],
          correct: 'Austria',
          explanation: 'The Hofburg was the principal imperial palace of the Habsburg rulers of Austria.',
          explanationPt: 'O Hofburg foi o principal palácio imperial dos governantes Habsburgo da Áustria.',
        },
      },
      {
        id: 'wie-prater', name: 'Wiener Prater', icon: '🎡',
        coords: [48.2167, 16.3958], wikiTitle: 'Wiener Riesenrad',
        narrative: 'In the Prater you board the Riesenrad, the giant Ferris wheel from 1897, and watch Vienna turn slowly beneath you.',
        narrativePt: 'No Prater você embarca na Riesenrad, a roda-gigante de 1897, e vê Viena girar lentamente abaixo de você.',
        quiz: {
          question: "The Riesenrad in Vienna's Prater is a giant…?",
          questionPt: "A Riesenrad no Prater de Viena é uma gigantesca…?",
          options: ['Ferris wheel', 'roller coaster', 'carousel'],
          correct: 'Ferris wheel',
          explanation: 'The Wiener Riesenrad, built in 1897, is one of the oldest Ferris wheels in the world.',
          explanationPt: 'A Wiener Riesenrad, construída em 1897, é uma das rodas-gigantes mais antigas do mundo.',
        },
      },
      {
        id: 'wie-belvedere', name: 'Schloss Belvedere', icon: '🖼️',
        coords: [48.1915, 16.3809], wikiTitle: 'Belvedere, Vienna',
        narrative: 'At the baroque Belvedere palace you stand before Gustav Klimt\'s shimmering golden painting, "The Kiss".',
        narrativePt: 'No palácio barroco Belvedere você se posta diante da cintilante pintura dourada de Gustav Klimt, "O Beijo".',
        quiz: {
          question: 'Which famous golden painting by Gustav Klimt hangs in the Belvedere?',
          questionPt: 'Qual famosa pintura dourada de Gustav Klimt está pendurada no Belvedere?',
          options: ['The Kiss', 'The Scream', 'Starry Night'],
          correct: 'The Kiss',
          explanation: "Klimt's gold-leaf masterpiece 'The Kiss' (1908) is the Belvedere's most famous work.",
          explanationPt: "A obra-prima em folha de ouro de Klimt, 'O Beijo' (1908), é a peça mais famosa do Belvedere.",
        },
      },
      {
        id: 'wie-naschmarkt', name: 'Naschmarkt', icon: '🍽️',
        coords: [48.1985, 16.3625], wikiTitle: 'Naschmarkt',
        narrative: 'You end at the Naschmarkt, Vienna\'s liveliest market, where spice stalls, cheese counters and tiny restaurants spill into the lanes.',
        narrativePt: 'Você termina no Naschmarkt, o mercado mais animado de Viena, onde bancas de especiarias, balcões de queijos e pequenos restaurantes se espalham pelas ruelas.',
        quiz: {
          question: 'The Naschmarkt in Vienna is a famous…?',
          questionPt: 'O Naschmarkt em Viena é um famoso…?',
          options: ['food market', 'opera house', 'palace'],
          correct: 'food market',
          explanation: "The Naschmarkt is Vienna's best-known market, packed with food stalls and eateries.",
          explanationPt: "O Naschmarkt é o mercado mais conhecido de Viena, repleto de bancas de comida e restaurantes.",
        },
      },
    ],
  },


  {
    id: 'zurich',
    name: 'Zürich',
    tagline: 'Grüezi! Schweizerdeutsch und Alpenluft',
    theme: 'Swiss German & Alpine Culture',
    accentColor: '#2e6b4f',
    icon: '🏔️',
    description:
      'Zürich ist die größte Stadt der Schweiz und eines der wichtigsten Finanzzentren der Welt. ' +
      'Die malerische Altstadt, der Zürichsee und die schneebedeckten Alpen am Horizont schaffen eine einzigartige Kulisse. ' +
      'Hier spricht man Schweizerdeutsch, das klingt wie Deutsch, ist aber manchmal kaum zu verstehen. ' +
      'Grüezi!',
    descriptionEn:
      'Zurich is Switzerland\'s largest city and one of the world\'s leading financial centres. ' +
      'The picturesque old town, Lake Zurich and the snow-capped Alps on the horizon create a unique backdrop. ' +
      'Here people speak Swiss German, it sounds like German, but is sometimes hard to understand. ' +
      'Grüezi!',
    descriptionPt:
      'Zurique é a maior cidade da Suíça e um dos principais centros financeiros do mundo. ' +
      'A pitoresca cidade antiga, o Lago de Zurique e os Alpes cobertos de neve no horizonte criam um cenário único. ' +
      'Aqui se fala o alemão suíço, que soa como alemão, mas às vezes é difícil de entender. ' +
      'Grüezi!',
    photos: [
      { wikiTitle: 'Grossmünster', alt: 'Grossmünster Zurich', caption: 'Das Grossmünster, romanisches Wahrzeichen der Zürcher Altstadt' },
      { wikiTitle: 'Lake Zurich', alt: 'Lake Zurich with Alps', caption: 'Der Zürichsee, mit den Alpen im Hintergrund' },
      { wikiTitle: 'Zurich', alt: 'Zurich old town', caption: 'Zürich, charmante Altstadt am Ufer der Limmat' },
    ],
    vocabTopics: ['Swiss German vocabulary', 'Banking & finance', 'Alps & nature'],
    grammarTopic: 'Konditionalsätze with Konjunktiv II (wenn/falls + würde/hätte/wäre)',
    grammarTopicPt: 'Orações condicionais com Konjunktiv II (wenn/falls + würde/hätte/wäre)',
    lessons: [
      {
        id: 'zurich-1',
        title: 'Swiss German',
        titlePt: 'Alemão suíço',
        description: 'Grüezi, Velo, z\'Nacht, key Swiss German words and the dialect arc finale.',
        descriptionPt: 'Grüezi, Velo, z\'Nacht, palavras-chave do alemão suíço e o final do arco dos dialetos.',
        steps: [
          { type: 'vocab', word: 'Grüezi!', article: null, english: 'Hello! (Swiss German)', portuguese: 'Olá! (alemão suíço)', example: 'Grüezi! Wie geht es Ihnen?' },
          { type: 'vocab', word: 'das Velo', article: 'das', english: 'bicycle (Swiss for Fahrrad)', portuguese: 'bicicleta (termo suíço para Fahrrad)', example: 'Ich fahre mit dem Velo zur Arbeit.' },
          { type: 'vocab', word: 'z\'Nacht', article: null, english: 'dinner (Swiss for Abendessen)', portuguese: 'jantar (termo suíço para Abendessen)', example: 'Was gibt es zum z\'Nacht?' },
          { type: 'vocab', word: 'der Rüebli', article: 'der', english: 'carrot (Swiss for Karotte)', portuguese: 'cenoura (termo suíço para Karotte)', example: 'Der Rüeblisalat schmeckt gut.' },
          { type: 'vocab', word: 'schaffe', article: null, english: 'to work (Swiss for arbeiten)', portuguese: 'trabalhar (termo suíço para arbeiten)', example: 'Er schafft von 8 bis 17 Uhr.' },
          { type: 'vocab', word: 'Ade!', article: null, english: 'Goodbye! (Swiss for Tschüss)', portuguese: 'Tchau! (termo suíço para Tschüss)', example: 'Ade! Bis morgen!' },
          { type: 'grammar', title: 'Konditionalsätze: real conditions', titlePt: 'Orações condicionais: condições reais', explanation: 'Real conditions (likely to happen): wenn + indicative. Both clauses use normal tenses.', explanationPt: 'Condições reais (que provavelmente acontecem): wenn + indicativo. Ambas as orações usam tempos normais.', examples: ['Wenn du Zeit hast, besuche die Altstadt.', 'Wenn es schönes Wetter ist, kann man die Alpen sehen.', 'Falls du Zeit hast, komm vorbei.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "das Velo" in Standard German?', questionPt: 'O que é "das Velo" em alemão padrão?', options: ['das Auto', 'das Fahrrad', 'der Bus', 'die Straßenbahn'], correct: 'das Fahrrad' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ du Zeit hast, besuche die Altstadt. (if)', questionPt: '___ du Zeit hast, besuche die Altstadt. (se)', correct: 'Wenn' },
        ],
      },
      {
        id: 'zurich-2',
        title: 'Alps & Final Reflections',
        titlePt: 'Alpes e reflexões finais',
        description: 'Hiking vocabulary, Swiss punctuality culture, and the full grammar journey recap.',
        descriptionPt: 'Vocabulário de caminhada, a cultura suíça da pontualidade e a recapitulação de toda a jornada gramatical.',
        steps: [
          { type: 'vocab', word: 'die Alpen', article: 'die', english: 'the Alps', portuguese: 'os Alpes', example: 'Die Alpen sind von Zürich aus zu sehen.' },
          { type: 'vocab', word: 'wandern', article: null, english: 'to hike', portuguese: 'caminhar (fazer trilha)', example: 'Wir wandern jeden Samstag.' },
          { type: 'vocab', word: 'die Aussicht', article: 'die', english: 'view', portuguese: 'vista', example: 'Die Aussicht vom Gipfel ist atemberaubend.' },
          { type: 'vocab', word: 'pünktlich', article: null, english: 'punctual', portuguese: 'pontual', example: 'Der Zug ist immer pünktlich.' },
          { type: 'vocab', word: 'atemberaubend', article: null, english: 'breathtaking', portuguese: 'de tirar o fôlego', example: 'Die Berglandschaft ist atemberaubend.' },
          { type: 'vocab', word: 'die Pünktlichkeit', article: 'die', english: 'punctuality', portuguese: 'pontualidade', example: 'Pünktlichkeit ist in der Schweiz sehr wichtig.' },
          { type: 'grammar', title: 'Konditionalsätze: unreal conditions (Konjunktiv II)', titlePt: 'Orações condicionais: condições irreais (Konjunktiv II)', explanation: 'Unreal/hypothetical: wenn + Konjunktiv II (hätte/wäre/würde). For past unreal: wenn + hätte/wäre + Partizip II.', explanationPt: 'Irreais/hipotéticas: wenn + Konjunktiv II (hätte/wäre/würde). Para o passado irreal: wenn + hätte/wäre + Partizip II.', examples: ['Wenn ich mehr Zeit hätte, würde ich länger bleiben.', 'Wenn das Wetter besser wäre, könnten wir wandern.', 'Wenn ich früher gekommen wäre, hätte ich mehr gesehen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "atemberaubend"?', questionPt: 'O que é "atemberaubend"?', options: ['boring', 'breathtaking', 'cold', 'distant'], correct: 'breathtaking' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Wenn ich mehr Zeit ___, würde ich länger bleiben. (Konjunktiv II of haben)', questionPt: 'Wenn ich mehr Zeit ___, würde ich länger bleiben. (Konjunktiv II de haben)', correct: 'hätte' },
        ],
      },
    ],
    places: [
      {
        id: 'zur-altstadt', name: 'Altstadt (Grüezi!)', icon: '🏘️',
        coords: [47.3717, 8.5392], wikiTitle: 'Zürich',
        narrative: "You arrive in Zürich's old town. 'Grüezi!' calls a shopkeeper, the Swiss German greeting that signals you've crossed one more border.",
        narrativePt: "Você chega à cidade antiga de Zurique. 'Grüezi!' grita um comerciante, a saudação em alemão suíço que sinaliza que você cruzou mais uma fronteira.",
        phrases: [
          { de: 'Grüezi!', en: 'Hello! (Swiss German)', pt: 'Olá! (alemão suíço)' },
          { de: 'Ich fahre mit dem Velo.', en: 'I go by bike.', pt: 'Eu vou de bicicleta.' },
          { de: 'Ade!', en: 'Goodbye! (Swiss)', pt: 'Tchau! (suíço)' },
        ],
        lessonId: 'zurich-1',
        quiz: {
          question: 'The Swiss German greeting "Grüezi!" means…?',
          questionPt: 'A saudação em alemão suíço "Grüezi!" significa…?',
          options: ['hello', 'goodbye', 'thank you'],
          correct: 'hello',
          explanation: '"Grüezi" is the everyday Swiss German hello.',
          explanationPt: '"Grüezi" é o "olá" do dia a dia em alemão suíço.',
        },
      },
      {
        id: 'zur-uetliberg', name: 'Uetliberg (die Alpen)', icon: '🏔️',
        coords: [47.3497, 8.4914], wikiTitle: 'Uetliberg',
        narrative: 'You ride up the Uetliberg for the grand finale: the whole city, the lake and the snow-capped Alps laid out in one breathtaking view.',
        narrativePt: 'Você sobe o Uetliberg para o grande final: a cidade inteira, o lago e os Alpes cobertos de neve dispostos em uma vista de tirar o fôlego.',
        phrases: [
          { de: 'Die Aussicht ist atemberaubend.', en: 'The view is breathtaking.', pt: 'A vista é de tirar o fôlego.' },
          { de: 'Wir gehen wandern.', en: 'We are going hiking.', pt: 'Nós vamos fazer trilha.' },
          { de: 'Der Zug ist pünktlich.', en: 'The train is punctual.', pt: 'O trem é pontual.' },
        ],
        lessonId: 'zurich-2',
        quiz: {
          question: "From Zurich's Uetliberg you can see the city, the lake and the…?",
          questionPt: 'Do Uetliberg de Zurique você pode ver a cidade, o lago e os…?',
          options: ['Alps', 'North Sea', 'Black Forest'],
          correct: 'Alps',
          explanation: "The Uetliberg is Zurich's local mountain, with sweeping views to the Alps.",
          explanationPt: 'O Uetliberg é a montanha local de Zurique, com vistas amplas para os Alpes.',
        },
      },
      {
        id: 'zur-grossmuenster', name: 'Grossmünster', icon: '⛪',
        coords: [47.3700, 8.5440], wikiTitle: 'Grossmünster',
        narrative: 'Back in town you reach the twin towers of the Grossmünster, the Romanesque church where Huldrych Zwingli launched the Swiss Reformation.',
        narrativePt: 'De volta à cidade, você chega às torres gêmeas do Grossmünster, a igreja românica onde Huldrych Zwingli iniciou a Reforma Suíça.',
        quiz: {
          question: "Zurich's Grossmünster is linked to which historical movement?",
          questionPt: 'O Grossmünster de Zurique está ligado a qual movimento histórico?',
          options: ['the Swiss Reformation', 'the Renaissance', 'the Enlightenment'],
          correct: 'the Swiss Reformation',
          explanation: 'Huldrych Zwingli began the Swiss-German Reformation from the Grossmünster in the 1520s.',
          explanationPt: 'Huldrych Zwingli deu início à Reforma suíço-alemã a partir do Grossmünster na década de 1520.',
        },
      },
      {
        id: 'zur-see', name: 'Zürichsee', icon: '⛵',
        coords: [47.3600, 8.5417], wikiTitle: 'Lake Zurich',
        narrative: 'You take a boat onto the Zürichsee, the long blue lake stretching south toward the mountains.',
        narrativePt: 'Você pega um barco no Zürichsee, o longo lago azul que se estende para o sul em direção às montanhas.',
        quiz: {
          question: 'The Zürichsee is a…?',
          questionPt: 'O Zürichsee é um…?',
          options: ['lake', 'sea', 'river'],
          correct: 'lake',
          explanation: 'The Zürichsee (Lake Zurich) is a lake stretching south-east from the city.',
          explanationPt: 'O Zürichsee (Lago de Zurique) é um lago que se estende para sudeste a partir da cidade.',
        },
      },
      {
        id: 'zur-bahnhofstrasse', name: 'Bahnhofstrasse', icon: '🛍️',
        coords: [47.3723, 8.5390], wikiTitle: 'Bahnhofstrasse',
        narrative: "You end on the Bahnhofstrasse, one of the world's most exclusive shopping streets, and, beneath it, vaults of Swiss gold.",
        narrativePt: 'Você termina na Bahnhofstrasse, uma das ruas comerciais mais exclusivas do mundo e, sob ela, cofres de ouro suíço.',
        quiz: {
          question: "Zurich's Bahnhofstrasse is famous as one of the world's most exclusive…?",
          questionPt: 'A Bahnhofstrasse de Zurique é famosa como uma das mais exclusivas do mundo em quê…?',
          options: ['shopping streets', 'harbours', 'ski runs'],
          correct: 'shopping streets',
          explanation: 'The Bahnhofstrasse is among the most expensive and exclusive shopping avenues in the world.',
          explanationPt: 'A Bahnhofstrasse está entre as avenidas comerciais mais caras e exclusivas do mundo.',
        },
      },
      {
        id: 'zur-fifa', name: 'FIFA Museum', icon: '⚽',
        coords: [47.3661, 8.5325], wikiTitle: 'FIFA World Football Museum',
        narrative: 'Near the lake you step into the FIFA Museum, three floors of football history crowned by the original World Cup trophy.',
        narrativePt: 'Perto do lago, você entra no Museu da FIFA, três andares de história do futebol coroados pelo troféu original da Copa do Mundo.',
        quiz: {
          question: 'Zurich is home to the headquarters and museum of which sport\'s governing body?',
          questionPt: 'Zurique abriga a sede e o museu do órgão dirigente de qual esporte?',
          options: ['football (FIFA)', 'tennis', 'skiing'],
          correct: 'football (FIFA)',
          explanation: 'FIFA, world football\'s governing body, is based in Zurich and runs the FIFA World Football Museum there.',
          explanationPt: 'A FIFA, órgão dirigente do futebol mundial, tem sede em Zurique e administra ali o Museu do Futebol Mundial da FIFA.',
        },
      },
    ],
  },

  {
    id: 'luxembourg',
    name: 'Luxemburg',
    tagline: 'Willkommen im Großherzogtum!',
    theme: 'Fortress & Old Town',
    accentColor: '#0a7e8c',
    icon: '🌉',
    description:
      'Luxemburg-Stadt ist die Hauptstadt des kleinen Großherzogtums und liegt dramatisch ' +
      'auf Felsen über den Tälern der Alzette und der Petrusse. ' +
      'Mit ihren Festungsmauern, der UNESCO-Altstadt und den tiefen Kasematten ist die Stadt ' +
      'ein Treffpunkt der Kulturen, wo man Deutsch, Französisch und Luxemburgisch hört.',
    descriptionEn:
      'Luxembourg City is the capital of the small Grand Duchy, set dramatically ' +
      'on cliffs above the valleys of the Alzette and Petrusse rivers. ' +
      'With its fortress walls, UNESCO old town and deep casemates, the city is ' +
      'a meeting point of cultures, where you hear German, French and Luxembourgish.',
    descriptionPt:
      'A cidade de Luxemburgo é a capital do pequeno Grão-Ducado, situada de forma dramática ' +
      'sobre penhascos acima dos vales dos rios Alzette e Petrusse. ' +
      'Com suas muralhas de fortaleza, a cidade antiga tombada pela UNESCO e as casamatas profundas, a cidade é ' +
      'um ponto de encontro de culturas, onde se ouve alemão, francês e luxemburguês.',
    photos: [
      { wikiTitle: 'Luxembourg City', alt: 'Luxembourg City old town', caption: 'Die Altstadt von Luxemburg, hoch über dem Tal' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bockfiels_and_Schlassbr%C3%A9ck%2C_Luxembourg_City.JPG/1280px-Bockfiels_and_Schlassbr%C3%A9ck%2C_Luxembourg_City.JPG', fit: 'contain', wikiTitle: 'Bock (Luxembourg)', alt: 'Bock casemates', caption: 'Die Bock-Kasematten, ein Tunnelnetz im Fels' },
      { wikiTitle: 'Adolphe Bridge', alt: 'Pont Adolphe', caption: 'Die Adolphe-Brücke über das Petrusse-Tal' },
    ],
    vocabTopics: ['Directions', 'Old town & sights', 'Border crossing'],
    grammarTopic: 'Prepositions of place (in, auf, über, unter)',
    grammarTopicPt: 'Preposições de lugar (in, auf, über, unter)',
    lessons: [
      {
        id: 'luxembourg-1',
        title: 'Crossing the Border',
        titlePt: 'Atravessando a Fronteira',
        description: 'Arriving from Germany into the Grand Duchy: borders and directions.',
        descriptionPt: 'Chegando da Alemanha ao Grão-Ducado: fronteiras e direções.',
        steps: [
          { type: 'vocab', word: 'die Grenze', article: 'die', english: 'border', portuguese: 'fronteira', example: 'Wir überqueren die Grenze nach Luxemburg.' },
          { type: 'vocab', word: 'das Land', article: 'das', english: 'country', portuguese: 'país', example: 'Luxemburg ist ein kleines Land.' },
          { type: 'vocab', word: 'die Hauptstadt', article: 'die', english: 'capital', portuguese: 'capital', example: 'Die Hauptstadt heißt auch Luxemburg.' },
          { type: 'vocab', word: 'der Bahnhof', article: 'der', english: 'train station', portuguese: 'estação de trem', example: 'Der Zug hält am Bahnhof.' },
          { type: 'vocab', word: 'die Richtung', article: 'die', english: 'direction', portuguese: 'direção', example: 'In welche Richtung muss ich gehen?' },
          { type: 'vocab', word: 'geradeaus', article: null, english: 'straight ahead', portuguese: 'em frente', example: 'Gehen Sie geradeaus.' },
          { type: 'grammar', title: 'Prepositions of place: in & auf', titlePt: 'Preposições de lugar: in e auf', explanation: 'With location, in and auf take the dative case. Luxemburg sits on cliffs, so things stand "auf dem Felsen" (on the rock) and "in der Stadt" (in the city).', explanationPt: 'Ao indicar localização, in e auf pedem o caso dativo. Luxemburgo fica sobre penhascos, então as coisas estão "auf dem Felsen" (sobre a rocha) e "in der Stadt" (na cidade).', examples: ['Die Stadt liegt auf einem Felsen.', 'Wir sind in der Altstadt.', 'Der Palast steht in der Hauptstadt.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "border" in German?', questionPt: 'Como se diz "fronteira" em alemão?', options: ['das Land', 'die Grenze', 'die Richtung', 'der Bahnhof'], correct: 'die Grenze' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Gehen Sie ___. (straight ahead)', questionPt: 'Gehen Sie ___. (em frente)', correct: 'geradeaus' },
        ],
      },
      {
        id: 'luxembourg-2',
        title: 'Through the Old Town',
        titlePt: 'Pela Cidade Antiga',
        description: 'Exploring the UNESCO old town: squares, bridges and casemates.',
        descriptionPt: 'Explorando a cidade antiga da UNESCO: praças, pontes e casamatas.',
        steps: [
          { type: 'vocab', word: 'die Altstadt', article: 'die', english: 'old town', portuguese: 'cidade antiga', example: 'Die Altstadt ist sehr alt und schön.' },
          { type: 'vocab', word: 'die Brücke', article: 'die', english: 'bridge', portuguese: 'ponte', example: 'Die Brücke führt über das Tal.' },
          { type: 'vocab', word: 'die Festung', article: 'die', english: 'fortress', portuguese: 'fortaleza', example: 'Die Festung schützte die Stadt.' },
          { type: 'vocab', word: 'der Platz', article: 'der', english: 'square', portuguese: 'praça', example: 'Auf dem Platz sind viele Cafés.' },
          { type: 'vocab', word: 'das Tal', article: 'das', english: 'valley', portuguese: 'vale', example: 'Tief unten liegt das Tal.' },
          { type: 'vocab', word: 'der Palast', article: 'der', english: 'palace', portuguese: 'palácio', example: 'Der Großherzog wohnt im Palast.' },
          { type: 'grammar', title: 'Prepositions of place: über & unter', titlePt: 'Preposições de lugar: über e unter', explanation: 'über (over/above) and unter (under/below) describe vertical position; with location they take the dative. The bridge is über dem Tal, the casemates run unter der Stadt.', explanationPt: 'über (sobre/acima) e unter (sob/abaixo) descrevem posição vertical; ao indicar localização, pedem o dativo. A ponte fica über dem Tal, as casamatas passam unter der Stadt.', examples: ['Die Brücke geht über das Tal.', 'Die Kasematten liegen unter der Stadt.', 'Über der Altstadt steht die Festung.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "bridge"?', questionPt: 'Qual palavra significa "ponte"?', options: ['die Festung', 'der Platz', 'die Brücke', 'das Tal'], correct: 'die Brücke' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Die Kasematten liegen ___ der Stadt. (under)', questionPt: 'Die Kasematten liegen ___ der Stadt. (sob)', correct: 'unter' },
        ],
      },
    ],
    // ── Immersive route: ordered stops (array order IS the route order). ──
    places: [
      {
        id: 'lux-gare', name: 'Gare de Luxembourg', icon: '🚉',
        coords: [49.6000, 6.1342], wikiTitle: 'Luxembourg railway station',
        narrative: 'Your train from Germany rolls into the Gare de Luxembourg, the city\'s grand main station. You step out into a country where German is one of three official languages.',
        narrativePt: 'Seu trem vindo da Alemanha entra na Gare de Luxembourg, a grandiosa estação central da cidade. Você desce em um país onde o alemão é uma das três línguas oficiais.',
        phrases: [
          { de: 'Wo ist die Altstadt?', en: 'Where is the old town?', pt: 'Onde fica a cidade antiga?' },
          { de: 'In welche Richtung muss ich gehen?', en: 'Which direction do I go?', pt: 'Em que direção devo ir?' },
          { de: 'Ist es weit zu Fuß?', en: 'Is it far on foot?', pt: 'É longe a pé?' },
        ],
        lessonId: 'luxembourg-1',
        quiz: {
          question: 'German is one of how many official languages in Luxembourg?',
          questionPt: 'O alemão é uma de quantas línguas oficiais em Luxemburgo?',
          options: ['three', 'one', 'two'],
          correct: 'three',
          explanation: 'Luxembourg has three official languages: Luxembourgish, French and German.',
          explanationPt: 'Luxemburgo tem três línguas oficiais: luxemburguês, francês e alemão.',
        },
      },
      {
        id: 'lux-adolphe', name: 'Pont Adolphe', icon: '🌉',
        coords: [49.6097, 6.1281], wikiTitle: 'Adolphe Bridge',
        narrative: 'You cross the Pont Adolphe, a great stone arch leaping over the green Petrusse valley. From the middle, the cliffs and ramparts of the old city open up below you.',
        narrativePt: 'Você atravessa a Pont Adolphe, um grande arco de pedra que salta sobre o verde vale do Petrusse. Do meio, os penhascos e as muralhas da cidade antiga se abrem abaixo de você.',
        phrases: [
          { de: 'Die Brücke ist sehr hoch.', en: 'The bridge is very high.', pt: 'A ponte é muito alta.' },
          { de: 'Was für eine schöne Aussicht!', en: 'What a beautiful view!', pt: 'Que vista linda!' },
        ],
        quiz: {
          question: 'The Pont Adolphe crosses which valley?',
          questionPt: 'A Pont Adolphe atravessa qual vale?',
          options: ['the Petrusse valley', 'the Rhine valley', 'the Moselle valley'],
          correct: 'the Petrusse valley',
          explanation: 'The Adolphe Bridge spans the Petrusse valley in the heart of Luxembourg City.',
          explanationPt: 'A ponte Adolphe atravessa o vale do Petrusse no coração da cidade de Luxemburgo.',
        },
      },
      {
        id: 'lux-place-guillaume', name: 'Place Guillaume II', icon: '🏛️',
        coords: [49.6107, 6.1300], wikiTitle: 'Place Guillaume II',
        narrative: 'In the old town you reach the Place Guillaume II, a broad square ringed by cafés and the town hall, where markets fill the cobblestones twice a week.',
        narrativePt: 'Na cidade antiga você chega à Place Guillaume II, uma ampla praça cercada por cafés e pela prefeitura, onde feiras tomam as pedras do calçamento duas vezes por semana.',
        phrases: [
          { de: 'Auf dem Platz sind viele Cafés.', en: 'There are many cafés on the square.', pt: 'Há muitos cafés na praça.' },
          { de: 'Wann ist hier Markt?', en: 'When is the market here?', pt: 'Quando é a feira aqui?' },
        ],
        lessonId: 'luxembourg-2',
        quiz: {
          question: 'The Place Guillaume II is a…?',
          questionPt: 'A Place Guillaume II é uma…?',
          options: ['town square', 'train station', 'fortress'],
          correct: 'town square',
          explanation: 'The Place Guillaume II is one of the main public squares in Luxembourg City\'s old town.',
          explanationPt: 'A Place Guillaume II é uma das principais praças públicas da cidade antiga de Luxemburgo.',
        },
      },
      {
        id: 'lux-palais', name: 'Großherzoglicher Palast', icon: '👑',
        coords: [49.6116, 6.1319], wikiTitle: 'Grand Ducal Palace, Luxembourg',
        narrative: 'A short walk brings you to the Großherzoglicher Palast, the city residence of the Grand Duke, its ornate Renaissance façade guarded by soldiers.',
        narrativePt: 'Uma curta caminhada leva você ao Großherzoglicher Palast, a residência urbana do Grão-Duque, com sua ornamentada fachada renascentista guardada por soldados.',
        quiz: {
          question: 'Luxembourg is ruled by a…?',
          questionPt: 'Luxemburgo é governado por um…?',
          options: ['Grand Duke', 'King', 'President'],
          correct: 'Grand Duke',
          explanation: 'Luxembourg is the world\'s only Grand Duchy, headed by a Grand Duke.',
          explanationPt: 'Luxemburgo é o único Grão-Ducado do mundo, chefiado por um Grão-Duque.',
        },
      },
      {
        id: 'lux-bock', name: 'Bock-Kasematten', icon: '🏰',
        coords: [49.6113, 6.1349], wikiTitle: 'Bock (Luxembourg)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bockfiels_and_Schlassbr%C3%A9ck%2C_Luxembourg_City.JPG/1280px-Bockfiels_and_Schlassbr%C3%A9ck%2C_Luxembourg_City.JPG',
        fit: 'contain',
        narrative: 'You end at the Bock, the rocky promontory where the city was founded. Beneath your feet wind the Kasematten, kilometres of defensive tunnels carved into the cliff.',
        narrativePt: 'Você termina no Bock, o promontório rochoso onde a cidade foi fundada. Sob seus pés serpenteiam as Kasematten, quilômetros de túneis defensivos escavados no penhasco.',
        quiz: {
          question: 'The Bock Casemates are a network of…?',
          questionPt: 'As Casamatas do Bock são uma rede de…?',
          options: ['defensive tunnels', 'wine cellars', 'subway lines'],
          correct: 'defensive tunnels',
          explanation: 'The Bock Casemates are underground defensive galleries carved into the rock, part of Luxembourg\'s former fortress.',
          explanationPt: 'As Casamatas do Bock são galerias defensivas subterrâneas escavadas na rocha, parte da antiga fortaleza de Luxemburgo.',
        },
      },
    ],
  },

]

export default cities
