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
    photos: [
      { wikiTitle: 'Frankfurt', alt: 'Frankfurt skyline', caption: 'Die Frankfurter Skyline, einzigartig in Deutschland' },
      { wikiTitle: 'Römerberg', alt: 'Römerberg historic square', caption: 'Der Römerberg, das historische Herz der Stadt' },
      { wikiTitle: 'Frankfurt Airport', alt: 'Frankfurt Airport terminal', caption: 'Der Flughafen Frankfurt, größter Flughafen Deutschlands' },
    ],
    vocabTopics: ['Airport', 'Train travel', 'Immigration'],
    grammarTopic: 'Modal verbs (müssen, können, dürfen)',
    lessons: [
      {
        id: 'frankfurt-1',
        title: 'At the Airport',
        description: 'Arriving at Frankfurt Airport: signs, counters, gates.',
        steps: [
          { type: 'vocab', word: 'der Flughafen', article: 'der', english: 'airport', example: 'Der Flughafen ist sehr groß.' },
          { type: 'vocab', word: 'die Passkontrolle', article: 'die', english: 'passport control', example: 'Ich gehe zur Passkontrolle.' },
          { type: 'vocab', word: 'das Gepäck', article: 'das', english: 'luggage', example: 'Mein Gepäck ist am Band.' },
          { type: 'vocab', word: 'der Ausgang', article: 'der', english: 'exit / gate', example: 'Der Ausgang ist links.' },
          { type: 'vocab', word: 'die Ankunft', article: 'die', english: 'arrival', example: 'Die Ankunft ist um 14 Uhr.' },
          { type: 'vocab', word: 'der Abflug', article: 'der', english: 'departure', example: 'Der Abflug ist pünktlich.' },
          { type: 'grammar', title: 'Modal verbs: müssen & können', explanation: 'Modal verbs modify another verb. They come second in the sentence; the main verb goes to the end in infinitive form.', examples: ['Ich muss meinen Pass zeigen.', 'Kannst du mir helfen?', 'Sie müssen zum Gate A3 gehen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "luggage" in German?', options: ['der Ausgang', 'das Gepäck', 'die Ankunft', 'der Abflug'], correct: 'das Gepäck' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich ___ meinen Pass zeigen. (must)', correct: 'muss' },
        ],
      },
      {
        id: 'frankfurt-2',
        title: 'Train to the City',
        description: 'From the airport to Frankfurt Hauptbahnhof by S-Bahn.',
        steps: [
          { type: 'vocab', word: 'der Bahnhof', article: 'der', english: 'train station', example: 'Der Hauptbahnhof ist im Zentrum.' },
          { type: 'vocab', word: 'das Gleis', article: 'das', english: 'platform / track', example: 'Der Zug fährt auf Gleis 7 ab.' },
          { type: 'vocab', word: 'die Fahrkarte', article: 'die', english: 'ticket', example: 'Ich brauche eine Fahrkarte.' },
          { type: 'vocab', word: 'der Zug', article: 'der', english: 'train', example: 'Der Zug kommt in 5 Minuten.' },
          { type: 'vocab', word: 'einsteigen', article: null, english: 'to board / get on', example: 'Bitte einsteigen!' },
          { type: 'vocab', word: 'aussteigen', article: null, english: 'to get off', example: 'Ich muss hier aussteigen.' },
          { type: 'grammar', title: 'Separable verbs (Trennbare Verben)', explanation: 'Many German verbs have a prefix that separates in main clauses. The prefix goes to the end.', examples: ['Ich steige am Hauptbahnhof aus.', 'Wann fährt der Zug ab?', 'Er steigt in Frankfurt ein.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "platform"?', options: ['der Zug', 'die Fahrkarte', 'das Gleis', 'der Bahnhof'], correct: 'das Gleis' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich muss am Hauptbahnhof ___. (get off)', correct: 'aussteigen' },
        ],
      },
    ],
    // ── Immersive route: ordered stops (array order IS the route order). ──
    places: [
      {
        id: 'fra-airport', name: 'Frankfurt Airport', icon: '✈️',
        coords: [50.0379, 8.5622], wikiTitle: 'Frankfurt Airport',
        narrative: "Your plane touches down at Frankfurt Airport, Germany's largest. Passport stamped and luggage collected, you follow the signs toward the trains into the city.",
        phrases: [
          { de: 'Wo ist der Ausgang?', en: 'Where is the exit?' },
          { de: 'Wo ist mein Gepäck?', en: 'Where is my luggage?' },
          { de: 'Ich gehe zur Passkontrolle.', en: 'I am going to passport control.' },
        ],
        lessonId: 'frankfurt-1',
        quiz: {
          question: 'Frankfurt Airport is the largest in which country?',
          options: ['Germany', 'Austria', 'Switzerland'],
          correct: 'Germany',
          explanation: 'Flughafen Frankfurt is the busiest airport in Germany and a major European hub.',
        },
      },
      {
        id: 'fra-hbf', name: 'Frankfurt Hauptbahnhof', icon: '🚉',
        coords: [50.1072, 8.6638], wikiTitle: 'Frankfurt (Main) Hauptbahnhof',
        narrative: 'The S-Bahn whisks you to the Hauptbahnhof, a vast iron-and-glass hall where ICE trains fan out across Germany. You find your platform and step into the city.',
        phrases: [
          { de: 'Auf welchem Gleis fährt der Zug?', en: 'Which platform does the train leave from?' },
          { de: 'Eine Fahrkarte, bitte.', en: 'One ticket, please.' },
          { de: 'Wann fährt der nächste Zug?', en: 'When does the next train leave?' },
        ],
        lessonId: 'frankfurt-2',
        quiz: {
          question: 'A "Gleis" at a German station is a…?',
          options: ['platform / track', 'ticket', 'exit'],
          correct: 'platform / track',
          explanation: '"Gleis" is the platform/track number where your train departs.',
        },
      },
      {
        id: 'fra-roemerberg', name: 'Römerberg', icon: '🏛️',
        coords: [50.1106, 8.6820], wikiTitle: 'Römerberg',
        narrative: 'In the old town you reach the Römerberg, a square of half-timbered façades around the medieval city hall, the historic heart of Frankfurt.',
        quiz: {
          question: "The Römerberg is Frankfurt's historic…?",
          options: ['town square', 'airport', 'river port'],
          correct: 'town square',
          explanation: "The Römerberg has been Frankfurt's central square since the Middle Ages, home to the Römer city hall.",
        },
      },
      {
        id: 'fra-skyline', name: 'Bankenviertel', icon: '🏙️',
        coords: [50.1122, 8.6722], wikiTitle: 'Frankfurt',
        narrative: "Glass towers rise above the rooftops, the Bankenviertel. Frankfurt's skyline is so distinctive that locals nicknamed the city 'Mainhattan'.",
        quiz: {
          question: "Frankfurt's skyline earned it which nickname?",
          options: ['Mainhattan', 'Klein-Paris', 'Elbflorenz'],
          correct: 'Mainhattan',
          explanation: '"Mainhattan" blends the river Main with Manhattan, a nod to the high-rise skyline.',
        },
      },
      {
        id: 'fra-dom', name: 'Kaiserdom St. Bartholomäus', icon: '⛪',
        coords: [50.1106, 8.6852], wikiTitle: 'Frankfurt Cathedral',
        narrative: 'You end at the Kaiserdom, where Holy Roman Emperors were once elected and crowned. From its tower the whole city spreads out below.',
        quiz: {
          question: "Frankfurt's Kaiserdom was the site of imperial…?",
          options: ['coronations', 'Olympics', 'carnival'],
          correct: 'coronations',
          explanation: "Holy Roman Emperors were elected and, from 1562, crowned in Frankfurt's cathedral.",
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
    photos: [
      { wikiTitle: 'Stuttgart', alt: 'Stuttgart city panorama', caption: 'Stuttgart: Metropole im Talkessel, umgeben von Weinbergen' },
      { wikiTitle: 'Mercedes-Benz Museum', alt: 'Mercedes-Benz Museum Stuttgart', caption: 'Das Mercedes-Benz Museum, Ikone der Automobilgeschichte' },
      { wikiTitle: 'Stuttgart Television Tower', alt: 'Stuttgart TV Tower', caption: 'Der Fernsehturm, der erste seiner Art weltweit (1956)' },
    ],
    vocabTopics: ['Job applications', 'Office', 'City living'],
    grammarTopic: 'Konjunktiv II (würden, hätten, wären) for polite requests',
    lessons: [
      {
        id: 'stuttgart-1',
        title: 'Job Application',
        description: 'Applying for a job: CVs, interviews, office vocabulary.',
        steps: [
          { type: 'vocab', word: 'die Bewerbung', article: 'die', english: 'job application', example: 'Ich schicke meine Bewerbung heute.' },
          { type: 'vocab', word: 'der Lebenslauf', article: 'der', english: 'CV / résumé', example: 'Mein Lebenslauf ist aktuell.' },
          { type: 'vocab', word: 'das Vorstellungsgespräch', article: 'das', english: 'job interview', example: 'Das Vorstellungsgespräch ist morgen.' },
          { type: 'vocab', word: 'die Stelle', article: 'die', english: 'position / job opening', example: 'Die Stelle ist noch frei.' },
          { type: 'vocab', word: 'der Arbeitgeber', article: 'der', english: 'employer', example: 'Der Arbeitgeber ist sehr nett.' },
          { type: 'vocab', word: 'die Gehaltsvorstellung', article: 'die', english: 'salary expectation', example: 'Was ist Ihre Gehaltsvorstellung?' },
          { type: 'grammar', title: 'Konjunktiv II: polite requests', explanation: 'Use würden + infinitive for polite requests, similar to "would" in English. Hätten and wären are common irregular forms.', examples: ['Würden Sie mir bitte helfen?', 'Ich hätte gerne mehr Informationen.', 'Wären Sie morgen verfügbar?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "Vorstellungsgespräch"?', options: ['CV', 'job interview', 'salary', 'employer'], correct: 'job interview' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ Sie mir bitte den Vertrag schicken? (polite: would)', correct: 'Würden' },
        ],
      },
      {
        id: 'stuttgart-2',
        title: 'Finding a Flat',
        description: 'Renting an apartment: contracts, landlords, and moving in.',
        steps: [
          { type: 'vocab', word: 'die Wohnung', article: 'die', english: 'apartment / flat', example: 'Die Wohnung hat drei Zimmer.' },
          { type: 'vocab', word: 'die Miete', article: 'die', english: 'rent', example: 'Die Miete beträgt 900 Euro.' },
          { type: 'vocab', word: 'der Vermieter', article: 'der', english: 'landlord', example: 'Der Vermieter ist freundlich.' },
          { type: 'vocab', word: 'der Mietvertrag', article: 'der', english: 'rental contract', example: 'Ich unterschreibe den Mietvertrag.' },
          { type: 'vocab', word: 'die Kaution', article: 'die', english: 'deposit', example: 'Die Kaution ist drei Monatsmieten.' },
          { type: 'vocab', word: 'anmelden', article: null, english: 'to register (at city hall)', example: 'Ich muss mich beim Einwohnermeldeamt anmelden.' },
          { type: 'grammar', title: 'Reflexive verbs', explanation: 'Some German verbs require a reflexive pronoun (mich, dich, sich…) that refers back to the subject.', examples: ['Ich melde mich an.', 'Er bewirbt sich um die Stelle.', 'Wir freuen uns auf die Wohnung.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "die Kaution"?', options: ['rent', 'deposit', 'contract', 'landlord'], correct: 'deposit' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich muss ___ beim Einwohnermeldeamt anmelden. (myself)', correct: 'mich' },
        ],
      },
    ],
    places: [
      {
        id: 'stu-schlossplatz', name: 'Schlossplatz', icon: '🏛️',
        coords: [48.7784, 9.1800], wikiTitle: 'Schlossplatz, Stuttgart',
        narrative: 'You arrive in the heart of Stuttgart at Schlossplatz, the grand baroque square framed by the New Palace, a fine place to get your bearings.',
        quiz: {
          question: "Schlossplatz is dominated by Stuttgart's…?",
          options: ['New Palace', 'harbour', 'cathedral'],
          correct: 'New Palace',
          explanation: 'The Neues Schloss (New Palace) is the baroque centrepiece of Schlossplatz.',
        },
      },
      {
        id: 'stu-bewerbung', name: 'Bewerbungsgespräch', icon: '💼',
        coords: [48.7758, 9.1770], wikiTitle: 'Stuttgart',
        narrative: 'Stuttgart means business. You head to an interview in the city centre, CV in hand, ready to make your case in German.',
        phrases: [
          { de: 'Ich interessiere mich für die Stelle.', en: 'I am interested in the position.' },
          { de: 'Hier ist mein Lebenslauf.', en: 'Here is my CV.' },
          { de: 'Wann kann ich anfangen?', en: 'When can I start?' },
        ],
        lessonId: 'stuttgart-1',
        quiz: {
          question: 'Stuttgart is the home base of which carmaker?',
          options: ['Mercedes-Benz', 'Volkswagen', 'BMW'],
          correct: 'Mercedes-Benz',
          explanation: 'Both Mercedes-Benz and Porsche are headquartered in the Stuttgart area.',
        },
      },
      {
        id: 'stu-wohnung', name: 'Wohnungssuche', icon: '🏠',
        coords: [48.7700, 9.1650], wikiTitle: 'Stuttgart',
        narrative: 'With a job offer in hand you go flat-hunting. The landlord wants references, a deposit, and a signed contract before you get the keys.',
        phrases: [
          { de: 'Wie hoch ist die Miete?', en: 'How high is the rent?' },
          { de: 'Ist die Wohnung noch frei?', en: 'Is the flat still available?' },
          { de: 'Ich möchte den Mietvertrag unterschreiben.', en: 'I would like to sign the rental contract.' },
        ],
        lessonId: 'stuttgart-2',
        quiz: {
          question: 'In Germany, the "Kaution" you pay for a flat is the…?',
          options: ['deposit', 'rent', 'agent fee'],
          correct: 'deposit',
          explanation: "The Kaution is a security deposit, often up to three months' rent.",
        },
      },
      {
        id: 'stu-mercedes', name: 'Mercedes-Benz Museum', icon: '🚗',
        coords: [48.7889, 9.2342], wikiTitle: 'Mercedes-Benz Museum',
        narrative: 'On your day off you tour the Mercedes-Benz Museum, spiralling down through 130 years of automobile history.',
        quiz: {
          question: 'Stuttgart is often called the cradle of the…?',
          options: ['automobile', 'printing press', 'aspirin'],
          correct: 'automobile',
          explanation: 'Karl Benz and Gottlieb Daimler built early automobiles in the Stuttgart area in the 1880s.',
        },
      },
      {
        id: 'stu-fernsehturm', name: 'Fernsehturm', icon: '🗼',
        coords: [48.7561, 9.1900], wikiTitle: 'Stuttgart TV Tower',
        narrative: 'You climb the Fernsehturm as the sun sets over the vine-covered hills, the world\'s first TV tower and a Stuttgart icon.',
        quiz: {
          question: "Stuttgart's Fernsehturm (1956) was the world's first such tower built from…?",
          options: ['reinforced concrete', 'timber', 'glass'],
          correct: 'reinforced concrete',
          explanation: 'Opened in 1956, it was the first telecommunications tower built from reinforced concrete.',
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
    photos: [
      { wikiTitle: 'Marienplatz', alt: 'Marienplatz in Munich', caption: 'Der Marienplatz, das Herz Münchens' },
      { wikiTitle: 'Oktoberfest', alt: 'Oktoberfest beer tents', caption: 'Das Oktoberfest, das größte Volksfest der Welt' },
      { wikiTitle: 'Frauenkirche, Munich', alt: 'Frauenkirche cathedral in Munich', caption: 'Die Frauenkirche, das Wahrzeichen Münchens' },
    ],
    vocabTopics: ['Oktoberfest', 'Food & drink', 'Social interactions'],
    grammarTopic: 'Adjective endings in nominative & accusative',
    lessons: [
      {
        id: 'munich-1',
        title: 'At the Oktoberfest',
        description: 'Beer tents, rides, and traditional Bavarian vocabulary.',
        steps: [
          { type: 'vocab', word: 'das Zelt', article: 'das', english: 'tent / beer hall', example: 'Das Zelt ist sehr voll.' },
          { type: 'vocab', word: 'die Maß', article: 'die', english: 'one-litre beer mug', example: 'Ich hätte gerne eine Maß Bier.' },
          { type: 'vocab', word: 'die Brezn', article: 'die', english: 'pretzel (Bavarian)', example: 'Die Brezn ist frisch und warm.' },
          { type: 'vocab', word: 'die Tracht', article: 'die', english: 'traditional costume', example: 'Alle tragen Tracht.' },
          { type: 'vocab', word: 'das Fahrgeschäft', article: 'das', english: 'fairground ride', example: 'Das Fahrgeschäft ist aufregend.' },
          { type: 'vocab', word: 'anstoßen', article: null, english: 'to clink glasses / toast', example: 'Lasst uns anstoßen!' },
          { type: 'grammar', title: 'Adjective endings (nominative & accusative)', explanation: 'Adjectives change their endings depending on the article and case. After der/die/das: add -e. After ein/eine: add -er/-e/-es.', examples: ['Das große Zelt ist toll.', 'Ich trinke ein kaltes Bier.', 'Sie trägt ein schönes Dirndl.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "die Maß"?', options: ['a pretzel', 'a tent', 'a one-litre beer mug', 'a ride'], correct: 'a one-litre beer mug' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich trinke ein kalt___ Bier. (accusative neuter)', correct: 'kaltes' },
        ],
      },
      {
        id: 'munich-2',
        title: 'Making Friends',
        description: 'Small talk, introductions, and social German.',
        steps: [
          { type: 'vocab', word: 'sich vorstellen', article: null, english: 'to introduce oneself', example: 'Darf ich mich vorstellen?' },
          { type: 'vocab', word: 'die Unterhaltung', article: 'die', english: 'conversation', example: 'Die Unterhaltung macht Spaß.' },
          { type: 'vocab', word: 'begeistert', article: null, english: 'enthusiastic / excited', example: 'Ich bin begeistert vom Fest.' },
          { type: 'vocab', word: 'gemeinsam', article: null, english: 'together / shared', example: 'Wir feiern gemeinsam.' },
          { type: 'vocab', word: 'die Feier', article: 'die', english: 'celebration / party', example: 'Die Feier dauert bis Mitternacht.' },
          { type: 'vocab', word: 'herzlich', article: null, english: 'warm / heartfelt', example: 'Herzlich willkommen!' },
          { type: 'grammar', title: 'Two-way prepositions (Wechselpräpositionen)', explanation: 'Prepositions like in, an, auf, über take accusative for movement and dative for location.', examples: ['Ich gehe ins Zelt. (movement → acc)', 'Ich sitze im Zelt. (location → dat)', 'Leg das Glas auf den Tisch.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: '"Herzlich" means?', options: ['warm / heartfelt', 'together', 'enthusiastic', 'celebration'], correct: 'warm / heartfelt' },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Movement uses which case with "in"?', options: ['dative', 'genitive', 'accusative', 'nominative'], correct: 'accusative' },
        ],
      },
    ],
    places: [
      {
        id: 'mun-marienplatz', name: 'Marienplatz', icon: '🏛️',
        coords: [48.1374, 11.5755], wikiTitle: 'Marienplatz',
        narrative: 'You arrive at Marienplatz just as the Glockenspiel chimes from the New Town Hall, the bustling heart of Munich.',
        quiz: {
          question: 'The Glockenspiel that draws crowds at Marienplatz is on the…?',
          options: ['New Town Hall', 'Frauenkirche', 'train station'],
          correct: 'New Town Hall',
          explanation: 'The Rathaus-Glockenspiel performs daily on the tower of the Neues Rathaus.',
        },
      },
      {
        id: 'mun-oktoberfest', name: 'Theresienwiese (Oktoberfest)', icon: '🍺',
        coords: [48.1316, 11.5497], wikiTitle: 'Oktoberfest',
        narrative: 'You step into a roaring beer tent on the Theresienwiese. A litre Maß lands in front of you and the whole bench breaks into song.',
        phrases: [
          { de: 'Eine Maß Bier, bitte.', en: 'A litre of beer, please.' },
          { de: 'Prost!', en: 'Cheers!' },
          { de: 'Wo sind die Toiletten?', en: 'Where are the toilets?' },
        ],
        lessonId: 'munich-1',
        quiz: {
          question: 'A "Maß" at Oktoberfest is…?',
          options: ['a one-litre beer', 'a pretzel', 'a ride'],
          correct: 'a one-litre beer',
          explanation: 'A Maß is the traditional one-litre mug of beer served in the tents.',
        },
      },
      {
        id: 'mun-frauenkirche', name: 'Frauenkirche', icon: '⛪',
        coords: [48.1385, 11.5736], wikiTitle: 'Frauenkirche, Munich',
        narrative: 'The twin onion domes of the Frauenkirche rise above the city, Munich\'s landmark, visible from every direction.',
        quiz: {
          question: 'The Frauenkirche is famous for its two distinctive…?',
          options: ['onion domes', 'glass pyramids', 'golden spires'],
          correct: 'onion domes',
          explanation: 'Its two domed towers are protected, no central building may rise above them.',
        },
      },
      {
        id: 'mun-hofbraeuhaus', name: 'Hofbräuhaus', icon: '🍻',
        coords: [48.1376, 11.5797], wikiTitle: 'Hofbräuhaus am Platzl',
        narrative: 'At the Hofbräuhaus you share a long table with strangers who quickly become friends. Time to introduce yourself and join the conversation.',
        phrases: [
          { de: 'Darf ich mich vorstellen?', en: 'May I introduce myself?' },
          { de: 'Wie heißt du?', en: "What's your name?" },
          { de: 'Woher kommst du?', en: 'Where are you from?' },
        ],
        lessonId: 'munich-2',
        quiz: {
          question: 'The friendly Bavarian word "Servus" can mean…?',
          options: ['both hello and goodbye', 'only sorry', 'only cheers'],
          correct: 'both hello and goodbye',
          explanation: '"Servus" is an informal greeting used for both hello and goodbye in Bavaria and Austria.',
        },
      },
      {
        id: 'mun-englischergarten', name: 'Englischer Garten', icon: '🌳',
        coords: [48.1642, 11.6056], wikiTitle: 'Englischer Garten',
        narrative: 'You wander into the Englischer Garten, where surfers ride a standing river wave and beer gardens hum under the trees.',
        quiz: {
          question: "Surprisingly, Munich's Englischer Garten is famous for year-round…?",
          options: ['river surfing', 'skiing', 'sailing'],
          correct: 'river surfing',
          explanation: 'Surfers ride the Eisbach standing wave in the park all year round.',
        },
      },
      {
        id: 'mun-eibsee', name: 'Eibsee', icon: '🏞️',
        coords: [47.4575, 10.9803], wikiTitle: 'Eibsee',
        narrative: 'A day trip south brings you to the Eibsee, a turquoise alpine lake at the foot of the Zugspitze, Germany\'s highest mountain.',
        quiz: {
          question: 'The Eibsee lies at the foot of which peak, the highest in Germany?',
          options: ['the Zugspitze', 'the Brocken', 'the Watzmann'],
          correct: 'the Zugspitze',
          explanation: 'The Eibsee sits below the Zugspitze (2,962 m), the highest mountain in Germany.',
        },
      },
      {
        id: 'mun-neuschwanstein', name: 'Schloss Neuschwanstein', icon: '🏰',
        coords: [47.5576, 10.7498], wikiTitle: 'Neuschwanstein Castle',
        narrative: 'You round a bend and there it is: Schloss Neuschwanstein, the fairy-tale castle of King Ludwig II, perched dramatically against the Alps.',
        quiz: {
          question: 'Neuschwanstein Castle was built by which Bavarian king?',
          options: ['Ludwig II', 'Friedrich I', 'Maximilian III'],
          correct: 'Ludwig II',
          explanation: "King Ludwig II built Neuschwanstein in the 1800s; it later inspired Disney's castle.",
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
    photos: [
      { wikiTitle: 'Brandenburg Gate', alt: 'Brandenburg Gate in Berlin', caption: 'Das Brandenburger Tor, Symbol der Wiedervereinigung' },
      { wikiTitle: 'Reichstag building', alt: 'Reichstag building Berlin', caption: 'Der Reichstag, Sitz des Deutschen Bundestages' },
      { wikiTitle: 'East Side Gallery', alt: 'East Side Gallery Berlin Wall', caption: 'Die East Side Gallery, Kunst auf der ehemaligen Mauer' },
    ],
    vocabTopics: ['Tourism', 'History', 'Culture & art'],
    grammarTopic: 'Relative clauses (Relativsätze)',
    lessons: [
      {
        id: 'berlin-1',
        title: 'Sightseeing',
        description: 'Famous landmarks, museums, and getting around Berlin.',
        steps: [
          { type: 'vocab', word: 'das Brandenburger Tor', article: 'das', english: 'Brandenburg Gate', example: 'Das Brandenburger Tor ist ein Symbol Berlins.' },
          { type: 'vocab', word: 'die Museumsinsel', article: 'die', english: 'Museum Island', example: 'Die Museumsinsel liegt im Zentrum.' },
          { type: 'vocab', word: 'die Führung', article: 'die', english: 'guided tour', example: 'Die Führung beginnt um 10 Uhr.' },
          { type: 'vocab', word: 'das Denkmal', article: 'das', english: 'memorial / monument', example: 'Das Denkmal erinnert an die Geschichte.' },
          { type: 'vocab', word: 'der Eintritt', article: 'der', english: 'admission / entry fee', example: 'Der Eintritt ist kostenlos.' },
          { type: 'vocab', word: 'besichtigen', article: null, english: 'to visit / sightsee', example: 'Wir besichtigen das Reichstagsgebäude.' },
          { type: 'grammar', title: 'Relative clauses (Relativsätze)', explanation: 'A relative clause describes a noun. The relative pronoun (der, die, das) agrees in gender with the noun it refers to. The verb goes to the end of the clause.', examples: ['Das Museum, das wir besuchen, ist toll.', 'Der Guide, der uns führt, spricht Englisch.', 'Die Stadt, die ich liebe, ist Berlin.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Eintritt"?', options: ['guided tour', 'monument', 'admission fee', 'museum'], correct: 'admission fee' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Das Museum, ___ wir besuchen, ist berühmt. (relative pronoun, neuter)', correct: 'das' },
        ],
      },
      {
        id: 'berlin-2',
        title: 'History & Culture',
        description: 'The Berlin Wall, Cold War history, and cultural vocabulary.',
        steps: [
          { type: 'vocab', word: 'die Mauer', article: 'die', english: 'the Wall (Berlin Wall)', example: 'Die Mauer fiel 1989.' },
          { type: 'vocab', word: 'die Geschichte', article: 'die', english: 'history / story', example: 'Berlin hat eine bewegte Geschichte.' },
          { type: 'vocab', word: 'die Ausstellung', article: 'die', english: 'exhibition', example: 'Die Ausstellung ist sehr interessant.' },
          { type: 'vocab', word: 'das Gemälde', article: 'das', english: 'painting', example: 'Das Gemälde ist aus dem 18. Jahrhundert.' },
          { type: 'vocab', word: 'der Künstler', article: 'der', english: 'artist', example: 'Der Künstler ist weltbekannt.' },
          { type: 'vocab', word: 'beeindruckend', article: null, english: 'impressive', example: 'Das Denkmal ist sehr beeindruckend.' },
          { type: 'grammar', title: 'Passive voice (Passiv)', explanation: 'The passive shifts focus from the doer to the action. Form: werden + past participle. The agent is introduced with "von".', examples: ['Die Mauer wurde 1961 gebaut.', 'Das Museum wird von vielen besucht.', 'Die Ausstellung wurde gut bewertet.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'When did the Wall fall?', options: ['1961', '1989', '1945', '2000'], correct: '1989' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Die Mauer ___ 1961 gebaut. (passive past)', correct: 'wurde' },
        ],
      },
    ],
    places: [
      {
        id: 'ber-brandenburg', name: 'Brandenburger Tor', icon: '🏛️',
        coords: [52.5163, 13.3777], wikiTitle: 'Brandenburg Gate',
        narrative: "You begin at the Brandenburg Gate, the neoclassical arch that once stood walled off in no-man's-land and now symbolises a reunited Germany.",
        phrases: [
          { de: 'Wo ist der Eingang?', en: 'Where is the entrance?' },
          { de: 'Wann beginnt die Führung?', en: 'When does the guided tour start?' },
          { de: 'Was kostet der Eintritt?', en: 'How much is admission?' },
        ],
        lessonId: 'berlin-1',
        quiz: {
          question: 'The Brandenburg Gate became a symbol of German…?',
          options: ['reunification', 'independence', 'monarchy'],
          correct: 'reunification',
          explanation: 'Walled off during the division, it became the icon of reunification in 1989/90.',
        },
      },
      {
        id: 'ber-eastside', name: 'East Side Gallery', icon: '🎨',
        coords: [52.5050, 13.4399], wikiTitle: 'East Side Gallery',
        narrative: 'Along the Spree you walk the East Side Gallery, the longest surviving stretch of the Berlin Wall, now painted end to end by artists.',
        phrases: [
          { de: 'Die Mauer fiel 1989.', en: 'The Wall fell in 1989.' },
          { de: 'Das ist sehr beeindruckend.', en: 'That is very impressive.' },
          { de: 'Die Geschichte ist überall.', en: 'History is everywhere.' },
        ],
        lessonId: 'berlin-2',
        quiz: {
          question: 'In which year did the Berlin Wall fall?',
          options: ['1989', '1961', '1945'],
          correct: '1989',
          explanation: 'The Wall, built in 1961, fell on 9 November 1989.',
        },
      },
      {
        id: 'ber-reichstag', name: 'Reichstag', icon: '🏛️',
        coords: [52.5186, 13.3762], wikiTitle: 'Reichstag building',
        narrative: "You ride up into the Reichstag's glass dome, looking down onto the parliament chamber where Germany is governed.",
        quiz: {
          question: 'The Reichstag is the seat of the German…?',
          options: ['parliament (Bundestag)', 'royal family', 'supreme court'],
          correct: 'parliament (Bundestag)',
          explanation: "The Reichstag building houses the Bundestag, Germany's federal parliament.",
        },
      },
      {
        id: 'ber-museuminsel', name: 'Museumsinsel', icon: '🖼️',
        coords: [52.5169, 13.4019], wikiTitle: 'Museum Island',
        narrative: 'On the Museumsinsel you lose an afternoon among ancient gates and busts, five world-class museums on a single island in the Spree.',
        quiz: {
          question: "Berlin's Museumsinsel is a UNESCO site made up of how many great museums?",
          options: ['five', 'two', 'ten'],
          correct: 'five',
          explanation: 'The Museum Island holds five museums and is a UNESCO World Heritage Site.',
        },
      },
      {
        id: 'ber-checkpoint', name: 'Checkpoint Charlie', icon: '🪖',
        coords: [52.5076, 13.3904], wikiTitle: 'Checkpoint Charlie',
        narrative: 'You end at Checkpoint Charlie, the Cold War crossing between East and West, where the world once held its breath.',
        quiz: {
          question: 'Checkpoint Charlie was a famous crossing point during the…?',
          options: ['Cold War', 'World War I', "Thirty Years' War"],
          correct: 'Cold War',
          explanation: 'It was the best-known crossing between East and West Berlin during the Cold War.',
        },
      },
      {
        id: 'ber-fernsehturm', name: 'Fernsehturm (Alexanderplatz)', icon: '📡',
        coords: [52.5208, 13.4094], wikiTitle: 'Fernsehturm Berlin',
        narrative: 'Above Alexanderplatz the Fernsehturm needles into the sky, the tallest structure in Germany and a relic of East Berlin.',
        quiz: {
          question: "Berlin's Fernsehturm is the tallest structure in…?",
          options: ['Germany', 'the European Union', 'the world'],
          correct: 'Germany',
          explanation: 'At 368 m, the TV tower at Alexanderplatz is the tallest structure in Germany.',
        },
      },
      {
        id: 'ber-dom', name: 'Berliner Dom', icon: '⛪',
        coords: [52.5191, 13.4010], wikiTitle: 'Berlin Cathedral',
        narrative: 'On the edge of the Museumsinsel the Berliner Dom raises its great green dome, the grandest Protestant church in the city.',
        quiz: {
          question: 'The Berliner Dom is the main church of which Christian tradition?',
          options: ['Protestant', 'Catholic', 'Orthodox'],
          correct: 'Protestant',
          explanation: 'The Berlin Cathedral is the largest Protestant church in Germany.',
        },
      },
      {
        id: 'ber-mahnmal', name: 'Holocaust-Mahnmal', icon: '🕯️',
        coords: [52.5139, 13.3784], wikiTitle: 'Memorial to the Murdered Jews of Europe',
        narrative: 'Near the Brandenburg Gate you walk among 2,711 grey concrete slabs, the Holocaust Memorial, a silent field of remembrance.',
        quiz: {
          question: "Berlin's Holocaust-Mahnmal is a field of grey concrete…?",
          options: ['slabs (stelae)', 'fountains', 'statues'],
          correct: 'slabs (stelae)',
          explanation: 'The Memorial to the Murdered Jews of Europe is made up of 2,711 concrete stelae.',
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
    photos: [
      { wikiTitle: 'Speicherstadt', alt: 'Hamburg Speicherstadt warehouse district', caption: 'Die Speicherstadt, UNESCO-Welterbe und Hamburgs Wahrzeichen' },
      { wikiTitle: 'Elbphilharmonie', alt: 'Elbphilharmonie concert hall', caption: 'Die Elbphilharmonie, ein Meisterwerk moderner Architektur' },
      { wikiTitle: 'Hamburg', alt: 'Hamburg harbor and city', caption: 'Der Hamburger Hafen, Deutschlands Tor zur Welt' },
    ],
    vocabTopics: ['Port & maritime', 'Weather', 'Nightlife & Reeperbahn'],
    grammarTopic: 'Infinitivkonstruktionen (um…zu, ohne…zu, anstatt…zu)',
    lessons: [
      {
        id: 'hamburg-1',
        title: 'The Harbor',
        description: 'Ships, ferries, and the vocabulary of Hamburg\'s waterfront.',
        steps: [
          { type: 'vocab', word: 'der Hafen', article: 'der', english: 'harbor / port', example: 'Der Hamburger Hafen ist riesig.' },
          { type: 'vocab', word: 'die Fähre', article: 'die', english: 'ferry', example: 'Die Fähre fährt zur Insel.' },
          { type: 'vocab', word: 'das Schiff', article: 'das', english: 'ship', example: 'Das Schiff legt um 9 Uhr ab.' },
          { type: 'vocab', word: 'anlegen', article: null, english: 'to dock', example: 'Die Fähre legt am Kai an.' },
          { type: 'vocab', word: 'die Speicherstadt', article: 'die', english: 'warehouse district', example: 'Die Speicherstadt ist ein UNESCO-Welterbe.' },
          { type: 'vocab', word: 'auslaufen', article: null, english: 'to set sail / leave port', example: 'Das Schiff läuft um Mitternacht aus.' },
          { type: 'grammar', title: 'um…zu (in order to)', explanation: 'Express purpose: um + other elements + zu + infinitive at the end. Both clauses must share the same subject.', examples: ['Er ging zum Hafen, um die Fähre zu sehen.', 'Ich lerne Deutsch, um in Hamburg zu arbeiten.', 'Sie stand früh auf, um den Fischmarkt zu besuchen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "die Fähre"?', options: ['harbor', 'ferry', 'ship', 'dock'], correct: 'ferry' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Er ging zum Hafen, ___ die Fähre zu sehen. (in order to)', correct: 'um' },
        ],
      },
      {
        id: 'hamburg-2',
        title: 'Moin! Hamburg Culture',
        description: 'Low German greetings, the Reeperbahn, and Hamburg\'s character.',
        steps: [
          { type: 'vocab', word: 'Moin!', article: null, english: 'Hello! (Hamburg greeting, any time of day)', example: 'Moin! Wie geht\'s?' },
          { type: 'vocab', word: 'die Reeperbahn', article: 'die', english: 'Reeperbahn (famous nightlife street)', example: 'Die Reeperbahn ist das Zentrum des Nachtlebens.' },
          { type: 'vocab', word: 'stürmisch', article: null, english: 'stormy', example: 'Das Wetter in Hamburg ist oft stürmisch.' },
          { type: 'vocab', word: 'der Regen', article: 'der', english: 'rain', example: 'Vergiss deinen Regenschirm nicht!' },
          { type: 'vocab', word: 'ausgehen', article: null, english: 'to go out', example: 'Heute Abend gehen wir aus.' },
          { type: 'vocab', word: 'das Konzert', article: 'das', english: 'concert', example: 'Das Konzert beginnt um 21 Uhr.' },
          { type: 'grammar', title: 'ohne…zu & anstatt…zu', explanation: 'ohne…zu = without doing; anstatt…zu = instead of doing. Same structure as um...zu: same subject, infinitive at end.', examples: ['Er ging raus, ohne einen Mantel anzuziehen.', 'Sie nahm ein Taxi, anstatt zu Fuß zu gehen.', 'Er blieb zuhause, anstatt auszugehen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "Moin!" mean?', options: ['Goodbye', 'Hello (any time)', 'Good evening', 'Thank you'], correct: 'Hello (any time)' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Er ging raus, ___ einen Mantel anzuziehen. (without)', correct: 'ohne' },
        ],
      },
    ],
    places: [
      {
        id: 'ham-hafen', name: 'Hamburger Hafen', icon: '⚓',
        coords: [53.5455, 9.9668], wikiTitle: 'Port of Hamburg',
        narrative: 'You start at the harbour, where container ships and ferries crowd the Elbe. From the Landungsbrücken the whole port spreads out before you.',
        phrases: [
          { de: 'Wann fährt die Fähre?', en: 'When does the ferry leave?' },
          { de: 'Wo legt das Schiff an?', en: 'Where does the ship dock?' },
          { de: 'Eine Hafenrundfahrt, bitte.', en: 'One harbour tour, please.' },
        ],
        lessonId: 'hamburg-1',
        quiz: {
          question: "Hamburg's harbour sits on which river?",
          options: ['the Elbe', 'the Rhine', 'the Danube'],
          correct: 'the Elbe',
          explanation: 'The Port of Hamburg lies on the river Elbe, about 100 km from the North Sea.',
        },
      },
      {
        id: 'ham-reeperbahn', name: 'Reeperbahn', icon: '🌃',
        coords: [53.5497, 9.9596], wikiTitle: 'Reeperbahn',
        narrative: 'As night falls you reach the Reeperbahn, Hamburg\'s neon-lit nightlife mile, where the Beatles once cut their teeth in tiny clubs.',
        phrases: [
          { de: 'Moin!', en: 'Hello! (any time of day)' },
          { de: 'Gehen wir heute Abend aus?', en: 'Shall we go out tonight?' },
          { de: 'Das Konzert beginnt um neun.', en: 'The concert starts at nine.' },
        ],
        lessonId: 'hamburg-2',
        quiz: {
          question: 'The Hamburg greeting "Moin!" can be used…?',
          options: ['at any time of day', 'only in the morning', 'only at night'],
          correct: 'at any time of day',
          explanation: 'Despite sounding like "morning", "Moin" is used as a greeting around the clock.',
        },
      },
      {
        id: 'ham-speicherstadt', name: 'Speicherstadt', icon: '🧱',
        coords: [53.5439, 9.9889], wikiTitle: 'Speicherstadt',
        narrative: 'You drift through the Speicherstadt, a labyrinth of red-brick warehouses on oak piles, laced with canals.',
        quiz: {
          question: "The Speicherstadt is the world's largest warehouse district built on…?",
          options: ['timber-pile foundations', 'floating pontoons', 'solid rock'],
          correct: 'timber-pile foundations',
          explanation: "Its brick warehouses stand on thousands of oak piles; it's a UNESCO World Heritage Site.",
        },
      },
      {
        id: 'ham-elbphilharmonie', name: 'Elbphilharmonie', icon: '🎼',
        coords: [53.5413, 9.9842], wikiTitle: 'Elbphilharmonie',
        narrative: 'The Elbphilharmonie rises from an old warehouse like a glass wave. You ride the curved escalator up to its public plaza for the view.',
        quiz: {
          question: 'The Elbphilharmonie is primarily a…?',
          options: ['concert hall', 'train station', 'football stadium'],
          correct: 'concert hall',
          explanation: "Opened in 2017, the 'Elphi' is one of the world's largest and most advanced concert halls.",
        },
      },
      {
        id: 'ham-rathaus', name: 'Hamburger Rathaus', icon: '🏛️',
        coords: [53.5503, 9.9925], wikiTitle: 'Hamburg City Hall',
        narrative: 'You finish at the grand Rathaus, its neo-Renaissance façade a reminder that Hamburg is both a city and a federal state.',
        quiz: {
          question: 'Hamburg is unusual because it is both a city and a…?',
          options: ['federal state', 'kingdom', 'national capital'],
          correct: 'federal state',
          explanation: "Hamburg is a city-state (Stadtstaat), one of Germany's 16 federal states.",
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
    photos: [
      { wikiTitle: 'Cologne Cathedral', alt: 'Cologne Cathedral', caption: 'Der Kölner Dom, UNESCO-Welterbe und Wahrzeichen der Stadt' },
      { wikiTitle: 'Cologne', alt: 'Cologne panorama with Rhine', caption: 'Köln am Rhein, Dom und Fluss im Abendlicht' },
      { wikiTitle: 'Rose Monday', alt: 'Cologne Karneval Rose Monday parade', caption: 'Der Rosenmontagszug, Höhepunkt des Kölner Karnevals' },
    ],
    vocabTopics: ['Karneval', 'Kölsch beer culture', 'Rheinland expressions'],
    grammarTopic: 'Adjektivdeklination (adjective endings) + Konzessivsätze (obwohl)',
    lessons: [
      {
        id: 'cologne-1',
        title: 'Karneval!',
        description: 'Costumes, parades, and the vocabulary of Cologne\'s famous carnival.',
        steps: [
          { type: 'vocab', word: 'der Karneval', article: 'der', english: 'carnival (Cologne term)', example: 'Der Karneval beginnt am 11.11.' },
          { type: 'vocab', word: 'das Kostüm', article: 'das', english: 'costume', example: 'Sein Kostüm ist sehr kreativ.' },
          { type: 'vocab', word: 'sich verkleiden', article: null, english: 'to dress up / disguise', example: 'Ich verkleidete mich als Pirat.' },
          { type: 'vocab', word: 'jeck', article: null, english: 'in the carnival spirit / crazy (Cologne word)', example: 'Bist du auch jeck?' },
          { type: 'vocab', word: 'schunkeln', article: null, english: 'to sway side-to-side with arms linked', example: 'Alle schunkeln zusammen.' },
          { type: 'vocab', word: 'die Kamelle', article: 'die', english: 'candy thrown from Karneval floats', example: 'Die Kamelle fliegen vom Wagen!' },
          { type: 'grammar', title: 'Adjective endings after definite article', explanation: 'After der/die/das, adjective ending is -e (nom/acc neuter/feminine) or -en (all other positions).', examples: ['Der große Zug beginnt um 10 Uhr.', 'Das bunte Kostüm ist sehr schön.', 'Die lustige Feier dauert bis Mitternacht.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What does "jeck" mean in Cologne?', options: ['bored', 'in the carnival spirit', 'tired', 'hungry'], correct: 'in the carnival spirit' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Der groß___ Zug beginnt um 10 Uhr. (nom. masc.)', correct: 'große' },
        ],
      },
      {
        id: 'cologne-2',
        title: 'Kölsch Culture',
        description: 'The Dom, Kölsch beer, and Rheinland dialect quirks.',
        steps: [
          { type: 'vocab', word: 'der Dom', article: 'der', english: 'Cologne Cathedral', example: 'Der Dom ist das Wahrzeichen Kölns.' },
          { type: 'vocab', word: 'das Kölsch', article: 'das', english: 'Cologne\'s beer (also its dialect)', example: 'Ein Kölsch, bitte!' },
          { type: 'vocab', word: 'der Köbes', article: 'der', english: 'traditional Kölsch waiter', example: 'Der Köbes bringt automatisch ein neues Kölsch.' },
          { type: 'vocab', word: 'das Veedel', article: 'das', english: 'neighborhood (Cologne dialect for Viertel)', example: 'Das Veedel ist sehr gemütlich.' },
          { type: 'vocab', word: 'et kütt wie et kütt', article: null, english: 'what comes, comes (Cologne motto)', example: '"Et kütt wie et kütt", typisch kölnisch!' },
          { type: 'vocab', word: 'anstoßen', article: null, english: 'to clink glasses', example: 'Stoßen wir an!' },
          { type: 'grammar', title: 'Konzessivsätze: obwohl (even though)', explanation: 'Obwohl introduces a subordinate clause (verb goes to end). Trotzdem starts a main clause (verb-subject inversion).', examples: ['Obwohl es spät war, blieben wir noch.', 'Obwohl er kein Kölsch mochte, trank er ein Glas.', 'Es regnete. Trotzdem fand der Zug statt.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Köbes"?', options: ['a Kölsch beer', 'a traditional Kölsch waiter', 'a neighborhood', 'the Dom'], correct: 'a traditional Kölsch waiter' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ es spät war, blieben wir noch. (even though)', correct: 'Obwohl' },
        ],
      },
    ],
    places: [
      {
        id: 'kln-dom', name: 'Kölner Dom', icon: '⛪',
        coords: [50.9413, 6.9583], wikiTitle: 'Cologne Cathedral',
        narrative: 'You step out of the station and the Kölner Dom looms straight ahead, twin Gothic spires that took over 600 years to finish.',
        quiz: {
          question: 'Cologne Cathedral took roughly how long to complete?',
          options: ['over 600 years', '20 years', '100 years'],
          correct: 'over 600 years',
          explanation: 'Begun in 1248, it was only completed in 1880, more than 600 years later.',
        },
      },
      {
        id: 'kln-karneval', name: 'Karneval am Alter Markt', icon: '🎭',
        coords: [50.9376, 6.9608], wikiTitle: 'Cologne Carnival',
        narrative: "The square erupts in colour and song, it's Karneval. Strangers in costume sway arm-in-arm and sweets rain down from a passing float.",
        phrases: [
          { de: 'Kölle Alaaf!', en: 'Cologne hooray! (carnival cry)' },
          { de: 'Schönes Kostüm!', en: 'Nice costume!' },
          { de: 'Bist du auch jeck?', en: 'Are you in the carnival spirit too?' },
        ],
        lessonId: 'cologne-1',
        quiz: {
          question: 'The Cologne carnival rallying cry is…?',
          options: ['Kölle Alaaf!', 'Helau!', 'Prost!'],
          correct: 'Kölle Alaaf!',
          explanation: '"Kölle Alaaf!" is Cologne\'s carnival shout; "Helau!" belongs to Düsseldorf and Mainz.',
        },
      },
      {
        id: 'kln-brauhaus', name: 'Brauhaus (Kölsch)', icon: '🍺',
        coords: [50.9385, 6.9590], wikiTitle: 'Kölsch (beer)',
        narrative: 'In a snug brewhouse the Köbes keeps swapping your empty glass for a fresh Kölsch, without ever being asked.',
        phrases: [
          { de: 'Ein Kölsch, bitte.', en: 'A Kölsch, please.' },
          { de: 'Zahlen, bitte.', en: 'The bill, please.' },
          { de: 'Es war sehr lecker.', en: 'It was delicious.' },
        ],
        lessonId: 'cologne-2',
        quiz: {
          question: 'A "Köbes" in a Cologne brewhouse is a…?',
          options: ['traditional waiter', 'type of beer', 'neighbourhood'],
          correct: 'traditional waiter',
          explanation: 'The Köbes is the traditional Kölsch waiter who keeps refilling the small 0.2 l glasses.',
        },
      },
      {
        id: 'kln-rhein', name: 'Rheinpromenade', icon: '🌉',
        coords: [50.9413, 6.9650], wikiTitle: 'Hohenzollern Bridge',
        narrative: "You stroll the Rhine promenade to the Hohenzollern Bridge, its railings glittering with thousands of lovers' padlocks.",
        quiz: {
          question: "Cologne's Hohenzollern Bridge is famous for being covered in…?",
          options: ['love padlocks', 'graffiti', 'flowers'],
          correct: 'love padlocks',
          explanation: 'Couples attach "love locks" to the bridge and throw the key into the Rhine.',
        },
      },
      {
        id: 'kln-veedel', name: 'Altstadt-Veedel', icon: '🏘️',
        coords: [50.9380, 6.9600], wikiTitle: 'Cologne',
        narrative: "You end in a cosy Veedel, the colourful old-town quarter where Cologne's easy-going Rhineland spirit feels most at home.",
        quiz: {
          question: 'In Cologne dialect, a "Veedel" is a…?',
          options: ['neighbourhood', 'beer', 'cathedral'],
          correct: 'neighbourhood',
          explanation: '"Veedel" is the Kölsch word for a city quarter or neighbourhood.',
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
    photos: [
      { wikiTitle: 'Dresden', alt: 'Dresden skyline with Frauenkirche', caption: 'Dresden, die Elbflorenz mit ihrem barocken Stadtbild' },
      { wikiTitle: 'Semperoper', alt: 'Semper Opera House Dresden', caption: 'Die Semperoper, eine der bedeutendsten Opernbühnen der Welt' },
      { wikiTitle: 'Zwinger (Dresden)', alt: 'Zwinger palace Dresden', caption: 'Der Zwinger, barockes Meisterwerk am Theaterplatz' },
    ],
    vocabTopics: ['Baroque architecture', 'Art & museums', 'WWII history & reconstruction'],
    grammarTopic: 'Plusquamperfekt (past perfect) + Kausalsätze (weil vs. da vs. denn)',
    lessons: [
      {
        id: 'dresden-1',
        title: 'Baroque Dresden',
        description: 'Architecture, reconstruction, and the vocabulary of Dresden\'s grand buildings.',
        steps: [
          { type: 'vocab', word: 'die Frauenkirche', article: 'die', english: 'Church of Our Lady', example: 'Die Frauenkirche wurde 2005 fertiggestellt.' },
          { type: 'vocab', word: 'barock', article: null, english: 'baroque', example: 'Die barocke Architektur ist wunderschön.' },
          { type: 'vocab', word: 'der Wiederaufbau', article: 'der', english: 'reconstruction', example: 'Der Wiederaufbau dauerte viele Jahrzehnte.' },
          { type: 'vocab', word: 'zerstört', article: null, english: 'destroyed', example: 'Die Stadt wurde im Krieg zerstört.' },
          { type: 'vocab', word: 'restauriert', article: null, english: 'restored', example: 'Die Oper wurde vollständig restauriert.' },
          { type: 'vocab', word: 'prächtig', article: null, english: 'magnificent', example: 'Das Stadtbild ist sehr prächtig.' },
          { type: 'grammar', title: 'Plusquamperfekt (past perfect)', explanation: 'For events that happened before another past event. Formed with hatte/war (Präteritum) + Partizip II.', examples: ['Nachdem die Bombe gefallen war, brannte die Stadt.', 'Er hatte die Frauenkirche noch nie gesehen.', 'Bevor der Krieg begann, war Dresden berühmt.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Wiederaufbau"?', options: ['destruction', 'reconstruction', 'monument', 'architecture'], correct: 'reconstruction' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Nachdem die Stadt zerstört worden ___, begann der Wiederaufbau. (war/hatte)', correct: 'war' },
        ],
      },
      {
        id: 'dresden-2',
        title: 'Art & History',
        description: 'Museums, paintings, WWII history, and the Saxon dialect.',
        steps: [
          { type: 'vocab', word: 'die Sammlung', article: 'die', english: 'collection', example: 'Die Gemäldegalerie hat eine berühmte Sammlung.' },
          { type: 'vocab', word: 'das Meisterwerk', article: 'das', english: 'masterpiece', example: 'Das ist ein echtes Meisterwerk.' },
          { type: 'vocab', word: 'die Versöhnung', article: 'die', english: 'reconciliation', example: 'Dresden ist ein Symbol der Versöhnung.' },
          { type: 'vocab', word: 'die Trümmer', article: 'die', english: 'rubble / debris', example: 'Die Stadt wurde aus den Trümmern aufgebaut.' },
          { type: 'vocab', word: 'Sächsisch', article: null, english: 'Saxon dialect', example: '"Ich" klingt auf Sächsisch wie "isch".' },
          { type: 'vocab', word: 'bezeugen', article: null, english: 'to witness', example: 'Er konnte die Geschichte persönlich bezeugen.' },
          { type: 'grammar', title: 'Kausalsätze: weil vs. da vs. denn', explanation: 'All mean "because" but differ: weil/da → verb to end (subordinate clause); denn → verb stays 2nd (main clause). Da is more formal.', examples: ['Ich blieb, weil die Ausstellung so gut war.', 'Da das Museum kostenlos war, gingen viele hin.', 'Das Gemälde ist wertvoll, denn es stammt aus dem 17. Jh.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which conjunction keeps the verb in second position?', options: ['weil', 'da', 'denn', 'obwohl'], correct: 'denn' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich blieb lange, ___ die Ausstellung so beeindruckend war. (because, subordinate)', correct: 'weil' },
        ],
      },
    ],
    places: [
      {
        id: 'dre-frauenkirche', name: 'Frauenkirche', icon: '⛪',
        coords: [51.0519, 13.7414], wikiTitle: 'Dresden Frauenkirche',
        narrative: 'You stand before the Frauenkirche, rebuilt stone by stone from wartime rubble and reopened in 2005, Dresden\'s emblem of reconciliation.',
        phrases: [
          { de: 'Die Kirche wurde wieder aufgebaut.', en: 'The church was rebuilt.' },
          { de: 'Die Architektur ist barock.', en: 'The architecture is baroque.' },
          { de: 'Das ist wunderschön.', en: 'That is beautiful.' },
        ],
        lessonId: 'dresden-1',
        quiz: {
          question: "Dresden's Frauenkirche reopened in 2005 after being…?",
          options: ['rebuilt from wartime rubble', 'moved across the river', 'painted gold'],
          correct: 'rebuilt from wartime rubble',
          explanation: 'Destroyed in 1945, it was painstakingly reconstructed using many original stones.',
        },
      },
      {
        id: 'dre-galerie', name: 'Gemäldegalerie Alte Meister', icon: '🖼️',
        coords: [51.0535, 13.7331], wikiTitle: 'Old Masters Gallery',
        narrative: "Inside the Zwinger you find Raphael's Sistine Madonna, its two little angels gazing out from one of the world's great art collections.",
        phrases: [
          { de: 'Wo ist die Sammlung?', en: 'Where is the collection?' },
          { de: 'Das ist ein Meisterwerk.', en: 'That is a masterpiece.' },
          { de: 'Darf ich fotografieren?', en: 'May I take photos?' },
        ],
        lessonId: 'dresden-2',
        quiz: {
          question: "Which painter's 'Sistine Madonna' hangs in Dresden's Old Masters Gallery?",
          options: ['Raphael', 'Picasso', 'Dürer'],
          correct: 'Raphael',
          explanation: "Raphael's Sistine Madonna, with its famous cherubs, is the gallery's star work.",
        },
      },
      {
        id: 'dre-zwinger', name: 'Zwinger', icon: '🏛️',
        coords: [51.0532, 13.7335], wikiTitle: 'Zwinger (Dresden)',
        narrative: "You wander the Zwinger's courtyard, a baroque masterpiece of pavilions, fountains and the Nymphenbad.",
        quiz: {
          question: 'The Dresden Zwinger is an example of which architectural style?',
          options: ['Baroque', 'Gothic', 'Bauhaus'],
          correct: 'Baroque',
          explanation: "The Zwinger is one of Germany's most important baroque buildings.",
        },
      },
      {
        id: 'dre-semperoper', name: 'Semperoper', icon: '🎭',
        coords: [51.0544, 13.7355], wikiTitle: 'Semperoper',
        narrative: 'On Theaterplatz the Semperoper glows at dusk, one of the world\'s great opera houses, twice rebuilt after fire and war.',
        quiz: {
          question: "The Semperoper is one of the world's most famous…?",
          options: ['opera houses', 'train stations', 'palaces'],
          correct: 'opera houses',
          explanation: 'Home of the Saxon State Opera, it was rebuilt after both an 1869 fire and WWII.',
        },
      },
      {
        id: 'dre-bruehl', name: 'Brühlsche Terrasse', icon: '🌅',
        coords: [51.0540, 13.7390], wikiTitle: "Brühl's Terrace",
        narrative: "You finish on the Brühlsche Terrasse above the Elbe, a riverside promenade so lovely it was nicknamed the 'Balcony of Europe'.",
        quiz: {
          question: "Dresden's Brühlsche Terrasse is nicknamed the 'Balcony of…'?",
          options: ['Europe', 'the Alps', 'the Sea'],
          correct: 'Europe',
          explanation: 'The elevated riverside terrace has long been called the "Balcony of Europe".',
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
    photos: [
      { wikiTitle: 'Nuremberg Castle', alt: 'Nuremberg Imperial Castle', caption: 'Die Nürnberger Burg, Symbol der mittelalterlichen Kaiserstadt' },
      { wikiTitle: 'Christkindlesmarkt, Nuremberg', alt: 'Nuremberg Christmas market', caption: 'Der Christkindlesmarkt, einer der bekanntesten der Welt' },
      { wikiTitle: 'Nuremberg', alt: 'Nuremberg old town', caption: 'Die Nürnberger Altstadt, mittelalterliches Flair seit dem 13. Jahrhundert' },
    ],
    vocabTopics: ['Christmas market', 'Shopping & gifts', 'Medieval history'],
    grammarTopic: 'Komparativ & Superlativ + Finalsätze (damit / um…zu)',
    lessons: [
      {
        id: 'nuremberg-1',
        title: 'The Christmas Market',
        description: 'Glühwein, Lebkuchen, and holiday vocabulary at Germany\'s most famous market.',
        steps: [
          { type: 'vocab', word: 'der Weihnachtsmarkt', article: 'der', english: 'Christmas market', example: 'Der Weihnachtsmarkt öffnet im Dezember.' },
          { type: 'vocab', word: 'der Glühwein', article: 'der', english: 'mulled wine', example: 'Ein Glühwein wärmt bei Kälte.' },
          { type: 'vocab', word: 'der Lebkuchen', article: 'der', english: 'gingerbread', example: 'Nürnberger Lebkuchen sind weltberühmt.' },
          { type: 'vocab', word: 'das Christkind', article: 'das', english: 'Christ child (opens the Nürnberg market)', example: 'Das Christkind eröffnet den Markt.' },
          { type: 'vocab', word: 'die Kerze', article: 'die', english: 'candle', example: 'Die Kerzen leuchten in der Nacht.' },
          { type: 'vocab', word: 'besinnlich', article: null, english: 'reflective / contemplative (Christmas mood)', example: 'Die Stimmung ist sehr besinnlich.' },
          { type: 'grammar', title: 'Komparativ & Superlativ', explanation: 'Add -er for comparative, am …sten for superlative predicate, or der/die/das …ste attributively. Many one-syllable adjectives umlaut.', examples: ['Dieser Markt ist größer als der andere.', 'Das ist der bekannteste Weihnachtsmarkt Deutschlands.', 'Der Glühwein hier ist wärmer.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Lebkuchen"?', options: ['mulled wine', 'gingerbread', 'candle', 'Christmas tree'], correct: 'gingerbread' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Das ist der bekannt___ Weihnachtsmarkt Deutschlands. (superlative)', correct: 'bekannteste' },
        ],
      },
      {
        id: 'nuremberg-2',
        title: 'Shopping & History',
        description: 'Buying gifts, exploring the medieval castle, and Nuremberg\'s complex past.',
        steps: [
          { type: 'vocab', word: 'das Souvenir', article: 'das', english: 'souvenir', example: 'Ich kaufe ein Souvenir für meine Familie.' },
          { type: 'vocab', word: 'das Geschenk', article: 'das', english: 'gift', example: 'Das Geschenk ist für meinen Freund.' },
          { type: 'vocab', word: 'die Burg', article: 'die', english: 'castle', example: 'Die Burg überblickt die ganze Stadt.' },
          { type: 'vocab', word: 'mittelalterlich', article: null, english: 'medieval', example: 'Die Altstadt hat einen mittelalterlichen Charme.' },
          { type: 'vocab', word: 'die Gerechtigkeit', article: 'die', english: 'justice', example: 'Die Nürnberger Prozesse standen für Gerechtigkeit.' },
          { type: 'vocab', word: 'die Stadtmauer', article: 'die', english: 'city wall', example: 'Die Stadtmauer ist sehr gut erhalten.' },
          { type: 'grammar', title: 'Finalsätze: damit vs. um…zu', explanation: 'Both express purpose. Use um…zu when both clauses share a subject. Use damit when the subjects are different.', examples: ['Ich kaufe Handschuhe, um nicht zu frieren. (same subject)', 'Ich kaufe Handschuhe, damit du nicht frierst. (different subjects)', 'Er machte ein Feuer, damit alle sich wärmen konnten.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'When do you use "damit" instead of "um…zu"?', options: ['When it\'s the past', 'When the subjects are different', 'When it\'s a question', 'When the verb is irregular'], correct: 'When the subjects are different' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich kaufe Handschuhe, ___ nicht zu frieren. (same subject, in order to)', correct: 'um' },
        ],
      },
    ],
    places: [
      {
        id: 'nrn-markt', name: 'Christkindlesmarkt', icon: '🎄',
        coords: [49.4541, 11.0775], wikiTitle: 'Nuremberg Christmas Market',
        narrative: 'Snow drifts over the Hauptmarkt as you enter the Christkindlesmarkt, wooden stalls, the scent of Glühwein, and Lebkuchen stacked high.',
        phrases: [
          { de: 'Einen Glühwein, bitte.', en: 'A mulled wine, please.' },
          { de: 'Wie viel kostet das?', en: 'How much does that cost?' },
          { de: 'Frohe Weihnachten!', en: 'Merry Christmas!' },
        ],
        lessonId: 'nuremberg-1',
        quiz: {
          question: "Nuremberg's Christmas market is opened each year by the…?",
          options: ['Christkind', 'Mayor', 'Köbes'],
          correct: 'Christkind',
          explanation: 'A young woman playing the "Christkind" (Christ child) opens the market with a prologue.',
        },
      },
      {
        id: 'nrn-handwerkerhof', name: 'Handwerkerhof', icon: '🛍️',
        coords: [49.4520, 11.0810], wikiTitle: 'Nuremberg',
        narrative: "In the craftsmen's courtyard you hunt for gifts, carved toys, tin figures and the famous Nürnberger Lebkuchen to take home.",
        phrases: [
          { de: 'Ich suche ein Geschenk.', en: 'I am looking for a gift.' },
          { de: 'Haben Sie ein Souvenir?', en: 'Do you have a souvenir?' },
          { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?' },
        ],
        lessonId: 'nuremberg-2',
        quiz: {
          question: 'A traditional edible souvenir from Nuremberg is…?',
          options: ['Lebkuchen (gingerbread)', 'Sachertorte', 'Brezn'],
          correct: 'Lebkuchen (gingerbread)',
          explanation: 'Nürnberger Lebkuchen is a protected speciality, baked here since the Middle Ages.',
        },
      },
      {
        id: 'nrn-burg', name: 'Kaiserburg', icon: '🏰',
        coords: [49.4577, 11.0764], wikiTitle: 'Nuremberg Castle',
        narrative: 'You climb to the Kaiserburg, the imperial castle on the hill, where medieval emperors once held court above the red rooftops.',
        quiz: {
          question: 'The Kaiserburg shows that Nuremberg was an important city of which empire?',
          options: ['the Holy Roman Empire', 'the Roman Empire', 'the Ottoman Empire'],
          correct: 'the Holy Roman Empire',
          explanation: 'Imperial diets of the Holy Roman Empire were held at Nuremberg Castle.',
        },
      },
      {
        id: 'nrn-mauer', name: 'Stadtmauer', icon: '🧱',
        coords: [49.4530, 11.0680], wikiTitle: 'Nuremberg',
        narrative: 'You trace the old Stadtmauer, the largely intact medieval city wall studded with towers that still rings the old town.',
        quiz: {
          question: "Nuremberg's old town is still encircled by a well-preserved medieval…?",
          options: ['city wall', 'canal', 'railway'],
          correct: 'city wall',
          explanation: "Nuremberg retains one of Europe's most complete medieval city walls.",
        },
      },
      {
        id: 'nrn-prozesse', name: 'Memorium Nürnberger Prozesse', icon: '⚖️',
        coords: [49.4530, 11.0490], wikiTitle: 'Nuremberg trials',
        narrative: 'At Courtroom 600 you reach a sombre chapter: here the Nuremberg Trials brought leading war criminals to justice after 1945.',
        quiz: {
          question: 'The Nuremberg Trials after WWII were about establishing…?',
          options: ['justice for war crimes', 'new trade laws', 'city taxes'],
          correct: 'justice for war crimes',
          explanation: "In 1945–46, leading Nazis were tried for war crimes in Nuremberg's Courtroom 600.",
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
    photos: [
      { wikiTitle: 'Stephansdom', alt: 'Stephansdom Vienna', caption: 'Der Stephansdom, das Herz Wiens seit dem 12. Jahrhundert' },
      { wikiTitle: 'Schönbrunn Palace', alt: 'Schönbrunn Palace Vienna', caption: 'Schloss Schönbrunn, Sommerresidenz der Habsburger Kaiser' },
      { wikiTitle: 'Vienna State Opera', alt: 'Vienna State Opera', caption: 'Die Wiener Staatsoper, eine der bedeutendsten Opernbühnen der Welt' },
    ],
    vocabTopics: ['Austrian German vocabulary', 'Coffeehouse culture', 'Opera & imperial culture'],
    grammarTopic: 'Modalpartikeln (doch, ja, mal, eigentlich, halt, schon)',
    lessons: [
      {
        id: 'vienna-1',
        title: 'Austrian German',
        description: 'When "Kartoffel" becomes "Erdapfel": key Austrian-German vocabulary differences.',
        steps: [
          { type: 'vocab', word: 'Grüß Gott!', article: null, english: 'Hello! (Austrian/Bavarian greeting)', example: 'Grüß Gott! Wie geht es Ihnen?' },
          { type: 'vocab', word: 'der Erdapfel', article: 'der', english: 'potato (Austrian for Kartoffel)', example: 'Erdäpfel sind sehr lecker.' },
          { type: 'vocab', word: 'der Paradeiser', article: 'der', english: 'tomato (Austrian for Tomate)', example: 'Der Paradeiser ist frisch vom Markt.' },
          { type: 'vocab', word: 'die Marille', article: 'die', english: 'apricot (Austrian for Aprikose)', example: 'Die Marillen sind sehr süß.' },
          { type: 'vocab', word: 'auf Wiederschauen', article: null, english: 'goodbye (Austrian for auf Wiedersehen)', example: 'Auf Wiederschauen! Bis morgen!' },
          { type: 'vocab', word: 'Jänner', article: null, english: 'January (Austrian for Januar)', example: 'Im Jänner ist es sehr kalt.' },
          { type: 'grammar', title: 'Modalpartikeln: doch, ja, mal', explanation: 'Small particles that color tone. doch = contradiction/encouragement. ja = shared knowledge/mild surprise. mal = softens a request.', examples: ['Komm doch mit! (encouragement)', 'Das ist ja interessant! (shared surprise)', 'Schau mal hier. (casual softening)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Erdapfel" in Standard German?', options: ['der Apfel', 'die Tomate', 'die Kartoffel', 'die Karotte'], correct: 'die Kartoffel' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Komm ___ mit! (encouragement particle)', correct: 'doch' },
        ],
      },
      {
        id: 'vienna-2',
        title: 'Coffeehouse & Opera',
        description: 'The Viennese Melange, the Staatsoper, and Austria\'s imperial grandeur.',
        steps: [
          { type: 'vocab', word: 'das Kaffeehaus', article: 'das', english: 'Viennese coffee house', example: 'Das Wiener Kaffeehaus hat eine lange Tradition.' },
          { type: 'vocab', word: 'der Melange', article: 'der', english: 'Viennese coffee with steamed milk', example: 'Einen Melange, bitte.' },
          { type: 'vocab', word: 'die Sachertorte', article: 'die', english: 'Sacher torte (famous Viennese cake)', example: 'Die Sachertorte ist eine Wiener Spezialität.' },
          { type: 'vocab', word: 'der Stehplatz', article: 'der', english: 'standing room (at the opera)', example: 'Ein Stehplatz kostet nur 3 Euro.' },
          { type: 'vocab', word: 'kaiserlich', article: null, english: 'imperial', example: 'Die kaiserliche Residenz ist beeindruckend.' },
          { type: 'vocab', word: 'verweilen', article: null, english: 'to linger / stay a while', example: 'Im Kaffeehaus kann man stundenlang verweilen.' },
          { type: 'grammar', title: 'Modalpartikeln: eigentlich, halt, schon', explanation: 'eigentlich = "actually" (mild reframe). halt = resignation/that\'s how it is (South German/Austrian). schon = concession ("yes, but…").', examples: ['Ich wollte eigentlich früher kommen.', 'Das dauert halt ein bisschen länger.', 'Das stimmt schon, aber...'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "der Melange"?', options: ['a type of cake', 'Viennese coffee with milk', 'standing room ticket', 'a palace'], correct: 'Viennese coffee with milk' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ich wollte ___ früher kommen. (actually)', correct: 'eigentlich' },
        ],
      },
    ],
    places: [
      {
        id: 'wie-stephansdom', name: 'Stephansdom', icon: '⛪',
        coords: [48.2085, 16.3731], wikiTitle: "St. Stephen's Cathedral, Vienna",
        narrative: "You arrive beneath the Stephansdom, its tiled roof gleaming over the old town. A passer-by greets you with 'Grüß Gott!', your first taste of Austrian German.",
        phrases: [
          { de: 'Grüß Gott!', en: 'Hello! (Austrian/Bavarian greeting)' },
          { de: 'Auf Wiederschauen!', en: 'Goodbye! (Austrian)' },
          { de: 'Einen Erdäpfelsalat, bitte.', en: 'A potato salad, please.' },
        ],
        lessonId: 'vienna-1',
        quiz: {
          question: 'The Austrian greeting "Grüß Gott!" is used to say…?',
          options: ['hello', 'thank you', 'cheers'],
          correct: 'hello',
          explanation: '"Grüß Gott" is the standard hello in Austria and Bavaria.',
        },
      },
      {
        id: 'wie-kaffeehaus', name: 'Café Central', icon: '☕',
        coords: [48.2106, 16.3656], wikiTitle: 'Café Central',
        narrative: 'You sink into a marble-topped table at Café Central, order a Melange and a slice of Sachertorte, and let the afternoon drift by.',
        phrases: [
          { de: 'Einen Melange, bitte.', en: 'A Viennese milk coffee, please.' },
          { de: 'Ein Stück Sachertorte, bitte.', en: 'A piece of Sacher torte, please.' },
          { de: 'Die Rechnung, bitte.', en: 'The bill, please.' },
        ],
        lessonId: 'vienna-2',
        quiz: {
          question: 'A Viennese "Melange" is a kind of…?',
          options: ['coffee', 'cake', 'wine'],
          correct: 'coffee',
          explanation: 'A Melange is a Viennese coffee with steamed, foamed milk, similar to a cappuccino.',
        },
      },
      {
        id: 'wie-staatsoper', name: 'Wiener Staatsoper', icon: '🎭',
        coords: [48.2030, 16.3690], wikiTitle: 'Vienna State Opera',
        narrative: "At the Staatsoper you grab a cheap standing-room ticket and join the city's great love affair with music.",
        quiz: {
          question: 'At the Vienna State Opera, a "Stehplatz" is a…?',
          options: ['standing-room ticket', 'royal box', 'backstage pass'],
          correct: 'standing-room ticket',
          explanation: 'Stehplätze are inexpensive standing-room tickets, a Viennese tradition.',
        },
      },
      {
        id: 'wie-schoenbrunn', name: 'Schloss Schönbrunn', icon: '👑',
        coords: [48.1858, 16.3122], wikiTitle: 'Schönbrunn Palace',
        narrative: "You spend the morning at Schönbrunn, the Habsburgs' yellow summer palace, wandering its endless rooms and manicured gardens.",
        quiz: {
          question: 'Schönbrunn Palace was the summer residence of which imperial dynasty?',
          options: ['the Habsburgs', 'the Hohenzollerns', 'the Wittelsbachs'],
          correct: 'the Habsburgs',
          explanation: 'Schönbrunn was the summer palace of the Habsburg emperors.',
        },
      },
      {
        id: 'wie-hofburg', name: 'Hofburg', icon: '🏛️',
        coords: [48.2065, 16.3656], wikiTitle: 'Hofburg',
        narrative: 'You finish at the Hofburg, the sprawling winter palace from which the Habsburgs ruled their empire for centuries.',
        quiz: {
          question: 'For centuries the Hofburg was the imperial seat of power in…?',
          options: ['Austria', 'Prussia', 'Bavaria'],
          correct: 'Austria',
          explanation: 'The Hofburg was the principal imperial palace of the Habsburg rulers of Austria.',
        },
      },
      {
        id: 'wie-prater', name: 'Wiener Prater', icon: '🎡',
        coords: [48.2167, 16.3958], wikiTitle: 'Wiener Riesenrad',
        narrative: 'In the Prater you board the Riesenrad, the giant Ferris wheel from 1897, and watch Vienna turn slowly beneath you.',
        quiz: {
          question: "The Riesenrad in Vienna's Prater is a giant…?",
          options: ['Ferris wheel', 'roller coaster', 'carousel'],
          correct: 'Ferris wheel',
          explanation: 'The Wiener Riesenrad, built in 1897, is one of the oldest Ferris wheels in the world.',
        },
      },
      {
        id: 'wie-belvedere', name: 'Schloss Belvedere', icon: '🖼️',
        coords: [48.1915, 16.3809], wikiTitle: 'Belvedere, Vienna',
        narrative: 'At the baroque Belvedere palace you stand before Gustav Klimt\'s shimmering golden painting, "The Kiss".',
        quiz: {
          question: 'Which famous golden painting by Gustav Klimt hangs in the Belvedere?',
          options: ['The Kiss', 'The Scream', 'Starry Night'],
          correct: 'The Kiss',
          explanation: "Klimt's gold-leaf masterpiece 'The Kiss' (1908) is the Belvedere's most famous work.",
        },
      },
      {
        id: 'wie-naschmarkt', name: 'Naschmarkt', icon: '🍽️',
        coords: [48.1985, 16.3625], wikiTitle: 'Naschmarkt',
        narrative: 'You end at the Naschmarkt, Vienna\'s liveliest market, where spice stalls, cheese counters and tiny restaurants spill into the lanes.',
        quiz: {
          question: 'The Naschmarkt in Vienna is a famous…?',
          options: ['food market', 'opera house', 'palace'],
          correct: 'food market',
          explanation: "The Naschmarkt is Vienna's best-known market, packed with food stalls and eateries.",
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
    photos: [
      { wikiTitle: 'Grossmünster', alt: 'Grossmünster Zurich', caption: 'Das Grossmünster, romanisches Wahrzeichen der Zürcher Altstadt' },
      { wikiTitle: 'Lake Zurich', alt: 'Lake Zurich with Alps', caption: 'Der Zürichsee, mit den Alpen im Hintergrund' },
      { wikiTitle: 'Zurich', alt: 'Zurich old town', caption: 'Zürich, charmante Altstadt am Ufer der Limmat' },
    ],
    vocabTopics: ['Swiss German vocabulary', 'Banking & finance', 'Alps & nature'],
    grammarTopic: 'Konditionalsätze with Konjunktiv II (wenn/falls + würde/hätte/wäre)',
    lessons: [
      {
        id: 'zurich-1',
        title: 'Swiss German',
        description: 'Grüezi, Velo, z\'Nacht, key Swiss German words and the dialect arc finale.',
        steps: [
          { type: 'vocab', word: 'Grüezi!', article: null, english: 'Hello! (Swiss German)', example: 'Grüezi! Wie geht es Ihnen?' },
          { type: 'vocab', word: 'das Velo', article: 'das', english: 'bicycle (Swiss for Fahrrad)', example: 'Ich fahre mit dem Velo zur Arbeit.' },
          { type: 'vocab', word: 'z\'Nacht', article: null, english: 'dinner (Swiss for Abendessen)', example: 'Was gibt es zum z\'Nacht?' },
          { type: 'vocab', word: 'der Rüebli', article: 'der', english: 'carrot (Swiss for Karotte)', example: 'Der Rüeblisalat schmeckt gut.' },
          { type: 'vocab', word: 'schaffe', article: null, english: 'to work (Swiss for arbeiten)', example: 'Er schafft von 8 bis 17 Uhr.' },
          { type: 'vocab', word: 'Ade!', article: null, english: 'Goodbye! (Swiss for Tschüss)', example: 'Ade! Bis morgen!' },
          { type: 'grammar', title: 'Konditionalsätze: real conditions', explanation: 'Real conditions (likely to happen): wenn + indicative. Both clauses use normal tenses.', examples: ['Wenn du Zeit hast, besuche die Altstadt.', 'Wenn es schönes Wetter ist, kann man die Alpen sehen.', 'Falls du Zeit hast, komm vorbei.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "das Velo" in Standard German?', options: ['das Auto', 'das Fahrrad', 'der Bus', 'die Straßenbahn'], correct: 'das Fahrrad' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ du Zeit hast, besuche die Altstadt. (if)', correct: 'Wenn' },
        ],
      },
      {
        id: 'zurich-2',
        title: 'Alps & Final Reflections',
        description: 'Hiking vocabulary, Swiss punctuality culture, and the full grammar journey recap.',
        steps: [
          { type: 'vocab', word: 'die Alpen', article: 'die', english: 'the Alps', example: 'Die Alpen sind von Zürich aus zu sehen.' },
          { type: 'vocab', word: 'wandern', article: null, english: 'to hike', example: 'Wir wandern jeden Samstag.' },
          { type: 'vocab', word: 'die Aussicht', article: 'die', english: 'view', example: 'Die Aussicht vom Gipfel ist atemberaubend.' },
          { type: 'vocab', word: 'pünktlich', article: null, english: 'punctual', example: 'Der Zug ist immer pünktlich.' },
          { type: 'vocab', word: 'atemberaubend', article: null, english: 'breathtaking', example: 'Die Berglandschaft ist atemberaubend.' },
          { type: 'vocab', word: 'die Pünktlichkeit', article: 'die', english: 'punctuality', example: 'Pünktlichkeit ist in der Schweiz sehr wichtig.' },
          { type: 'grammar', title: 'Konditionalsätze: unreal conditions (Konjunktiv II)', explanation: 'Unreal/hypothetical: wenn + Konjunktiv II (hätte/wäre/würde). For past unreal: wenn + hätte/wäre + Partizip II.', examples: ['Wenn ich mehr Zeit hätte, würde ich länger bleiben.', 'Wenn das Wetter besser wäre, könnten wir wandern.', 'Wenn ich früher gekommen wäre, hätte ich mehr gesehen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is "atemberaubend"?', options: ['boring', 'breathtaking', 'cold', 'distant'], correct: 'breathtaking' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Wenn ich mehr Zeit ___, würde ich länger bleiben. (Konjunktiv II of haben)', correct: 'hätte' },
        ],
      },
    ],
    places: [
      {
        id: 'zur-altstadt', name: 'Altstadt (Grüezi!)', icon: '🏘️',
        coords: [47.3717, 8.5392], wikiTitle: 'Zürich',
        narrative: "You arrive in Zürich's old town. 'Grüezi!' calls a shopkeeper, the Swiss German greeting that signals you've crossed one more border.",
        phrases: [
          { de: 'Grüezi!', en: 'Hello! (Swiss German)' },
          { de: 'Ich fahre mit dem Velo.', en: 'I go by bike.' },
          { de: 'Ade!', en: 'Goodbye! (Swiss)' },
        ],
        lessonId: 'zurich-1',
        quiz: {
          question: 'The Swiss German greeting "Grüezi!" means…?',
          options: ['hello', 'goodbye', 'thank you'],
          correct: 'hello',
          explanation: '"Grüezi" is the everyday Swiss German hello.',
        },
      },
      {
        id: 'zur-uetliberg', name: 'Uetliberg (die Alpen)', icon: '🏔️',
        coords: [47.3497, 8.4914], wikiTitle: 'Uetliberg',
        narrative: 'You ride up the Uetliberg for the grand finale: the whole city, the lake and the snow-capped Alps laid out in one breathtaking view.',
        phrases: [
          { de: 'Die Aussicht ist atemberaubend.', en: 'The view is breathtaking.' },
          { de: 'Wir gehen wandern.', en: 'We are going hiking.' },
          { de: 'Der Zug ist pünktlich.', en: 'The train is punctual.' },
        ],
        lessonId: 'zurich-2',
        quiz: {
          question: "From Zurich's Uetliberg you can see the city, the lake and the…?",
          options: ['Alps', 'North Sea', 'Black Forest'],
          correct: 'Alps',
          explanation: "The Uetliberg is Zurich's local mountain, with sweeping views to the Alps.",
        },
      },
      {
        id: 'zur-grossmuenster', name: 'Grossmünster', icon: '⛪',
        coords: [47.3700, 8.5440], wikiTitle: 'Grossmünster',
        narrative: 'Back in town you reach the twin towers of the Grossmünster, the Romanesque church where Huldrych Zwingli launched the Swiss Reformation.',
        quiz: {
          question: "Zurich's Grossmünster is linked to which historical movement?",
          options: ['the Swiss Reformation', 'the Renaissance', 'the Enlightenment'],
          correct: 'the Swiss Reformation',
          explanation: 'Huldrych Zwingli began the Swiss-German Reformation from the Grossmünster in the 1520s.',
        },
      },
      {
        id: 'zur-see', name: 'Zürichsee', icon: '⛵',
        coords: [47.3600, 8.5417], wikiTitle: 'Lake Zurich',
        narrative: 'You take a boat onto the Zürichsee, the long blue lake stretching south toward the mountains.',
        quiz: {
          question: 'The Zürichsee is a…?',
          options: ['lake', 'sea', 'river'],
          correct: 'lake',
          explanation: 'The Zürichsee (Lake Zurich) is a lake stretching south-east from the city.',
        },
      },
      {
        id: 'zur-bahnhofstrasse', name: 'Bahnhofstrasse', icon: '🛍️',
        coords: [47.3723, 8.5390], wikiTitle: 'Bahnhofstrasse',
        narrative: "You end on the Bahnhofstrasse, one of the world's most exclusive shopping streets, and, beneath it, vaults of Swiss gold.",
        quiz: {
          question: "Zurich's Bahnhofstrasse is famous as one of the world's most exclusive…?",
          options: ['shopping streets', 'harbours', 'ski runs'],
          correct: 'shopping streets',
          explanation: 'The Bahnhofstrasse is among the most expensive and exclusive shopping avenues in the world.',
        },
      },
      {
        id: 'zur-fifa', name: 'FIFA Museum', icon: '⚽',
        coords: [47.3661, 8.5325], wikiTitle: 'FIFA World Football Museum',
        narrative: 'Near the lake you step into the FIFA Museum, three floors of football history crowned by the original World Cup trophy.',
        quiz: {
          question: 'Zurich is home to the headquarters and museum of which sport\'s governing body?',
          options: ['football (FIFA)', 'tennis', 'skiing'],
          correct: 'football (FIFA)',
          explanation: 'FIFA, world football\'s governing body, is based in Zurich and runs the FIFA World Football Museum there.',
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
    photos: [
      { wikiTitle: 'Luxembourg City', alt: 'Luxembourg City old town', caption: 'Die Altstadt von Luxemburg, hoch über dem Tal' },
      { wikiTitle: 'Bock (Luxembourg)', alt: 'Bock casemates', caption: 'Die Bock-Kasematten, ein Tunnelnetz im Fels' },
      { wikiTitle: 'Adolphe Bridge', alt: 'Pont Adolphe', caption: 'Die Adolphe-Brücke über das Petrusse-Tal' },
    ],
    vocabTopics: ['Directions', 'Old town & sights', 'Border crossing'],
    grammarTopic: 'Prepositions of place (in, auf, über, unter)',
    lessons: [
      {
        id: 'luxembourg-1',
        title: 'Crossing the Border',
        description: 'Arriving from Germany into the Grand Duchy: borders and directions.',
        steps: [
          { type: 'vocab', word: 'die Grenze', article: 'die', english: 'border', example: 'Wir überqueren die Grenze nach Luxemburg.' },
          { type: 'vocab', word: 'das Land', article: 'das', english: 'country', example: 'Luxemburg ist ein kleines Land.' },
          { type: 'vocab', word: 'die Hauptstadt', article: 'die', english: 'capital', example: 'Die Hauptstadt heißt auch Luxemburg.' },
          { type: 'vocab', word: 'der Bahnhof', article: 'der', english: 'train station', example: 'Der Zug hält am Bahnhof.' },
          { type: 'vocab', word: 'die Richtung', article: 'die', english: 'direction', example: 'In welche Richtung muss ich gehen?' },
          { type: 'vocab', word: 'geradeaus', article: null, english: 'straight ahead', example: 'Gehen Sie geradeaus.' },
          { type: 'grammar', title: 'Prepositions of place: in & auf', explanation: 'With location, in and auf take the dative case. Luxemburg sits on cliffs, so things stand "auf dem Felsen" (on the rock) and "in der Stadt" (in the city).', examples: ['Die Stadt liegt auf einem Felsen.', 'Wir sind in der Altstadt.', 'Der Palast steht in der Hauptstadt.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "border" in German?', options: ['das Land', 'die Grenze', 'die Richtung', 'der Bahnhof'], correct: 'die Grenze' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Gehen Sie ___. (straight ahead)', correct: 'geradeaus' },
        ],
      },
      {
        id: 'luxembourg-2',
        title: 'Through the Old Town',
        description: 'Exploring the UNESCO old town: squares, bridges and casemates.',
        steps: [
          { type: 'vocab', word: 'die Altstadt', article: 'die', english: 'old town', example: 'Die Altstadt ist sehr alt und schön.' },
          { type: 'vocab', word: 'die Brücke', article: 'die', english: 'bridge', example: 'Die Brücke führt über das Tal.' },
          { type: 'vocab', word: 'die Festung', article: 'die', english: 'fortress', example: 'Die Festung schützte die Stadt.' },
          { type: 'vocab', word: 'der Platz', article: 'der', english: 'square', example: 'Auf dem Platz sind viele Cafés.' },
          { type: 'vocab', word: 'das Tal', article: 'das', english: 'valley', example: 'Tief unten liegt das Tal.' },
          { type: 'vocab', word: 'der Palast', article: 'der', english: 'palace', example: 'Der Großherzog wohnt im Palast.' },
          { type: 'grammar', title: 'Prepositions of place: über & unter', explanation: 'über (over/above) and unter (under/below) describe vertical position; with location they take the dative. The bridge is über dem Tal, the casemates run unter der Stadt.', examples: ['Die Brücke geht über das Tal.', 'Die Kasematten liegen unter der Stadt.', 'Über der Altstadt steht die Festung.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "bridge"?', options: ['die Festung', 'der Platz', 'die Brücke', 'das Tal'], correct: 'die Brücke' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Die Kasematten liegen ___ der Stadt. (under)', correct: 'unter' },
        ],
      },
    ],
    // ── Immersive route: ordered stops (array order IS the route order). ──
    places: [
      {
        id: 'lux-gare', name: 'Gare de Luxembourg', icon: '🚉',
        coords: [49.6000, 6.1342], wikiTitle: 'Luxembourg railway station',
        narrative: 'Your train from Germany rolls into the Gare de Luxembourg, the city\'s grand main station. You step out into a country where German is one of three official languages.',
        phrases: [
          { de: 'Wo ist die Altstadt?', en: 'Where is the old town?' },
          { de: 'In welche Richtung muss ich gehen?', en: 'Which direction do I go?' },
          { de: 'Ist es weit zu Fuß?', en: 'Is it far on foot?' },
        ],
        lessonId: 'luxembourg-1',
        quiz: {
          question: 'German is one of how many official languages in Luxembourg?',
          options: ['three', 'one', 'two'],
          correct: 'three',
          explanation: 'Luxembourg has three official languages: Luxembourgish, French and German.',
        },
      },
      {
        id: 'lux-adolphe', name: 'Pont Adolphe', icon: '🌉',
        coords: [49.6097, 6.1281], wikiTitle: 'Adolphe Bridge',
        narrative: 'You cross the Pont Adolphe, a great stone arch leaping over the green Petrusse valley. From the middle, the cliffs and ramparts of the old city open up below you.',
        phrases: [
          { de: 'Die Brücke ist sehr hoch.', en: 'The bridge is very high.' },
          { de: 'Was für eine schöne Aussicht!', en: 'What a beautiful view!' },
        ],
        quiz: {
          question: 'The Pont Adolphe crosses which valley?',
          options: ['the Petrusse valley', 'the Rhine valley', 'the Moselle valley'],
          correct: 'the Petrusse valley',
          explanation: 'The Adolphe Bridge spans the Petrusse valley in the heart of Luxembourg City.',
        },
      },
      {
        id: 'lux-place-guillaume', name: 'Place Guillaume II', icon: '🏛️',
        coords: [49.6107, 6.1300], wikiTitle: 'Place Guillaume II',
        narrative: 'In the old town you reach the Place Guillaume II, a broad square ringed by cafés and the town hall, where markets fill the cobblestones twice a week.',
        phrases: [
          { de: 'Auf dem Platz sind viele Cafés.', en: 'There are many cafés on the square.' },
          { de: 'Wann ist hier Markt?', en: 'When is the market here?' },
        ],
        lessonId: 'luxembourg-2',
        quiz: {
          question: 'The Place Guillaume II is a…?',
          options: ['town square', 'train station', 'fortress'],
          correct: 'town square',
          explanation: 'The Place Guillaume II is one of the main public squares in Luxembourg City\'s old town.',
        },
      },
      {
        id: 'lux-palais', name: 'Großherzoglicher Palast', icon: '👑',
        coords: [49.6116, 6.1319], wikiTitle: 'Grand Ducal Palace, Luxembourg',
        narrative: 'A short walk brings you to the Großherzoglicher Palast, the city residence of the Grand Duke, its ornate Renaissance façade guarded by soldiers.',
        quiz: {
          question: 'Luxembourg is ruled by a…?',
          options: ['Grand Duke', 'King', 'President'],
          correct: 'Grand Duke',
          explanation: 'Luxembourg is the world\'s only Grand Duchy, headed by a Grand Duke.',
        },
      },
      {
        id: 'lux-bock', name: 'Bock-Kasematten', icon: '🏰',
        coords: [49.6113, 6.1349], wikiTitle: 'Bock (Luxembourg)',
        narrative: 'You end at the Bock, the rocky promontory where the city was founded. Beneath your feet wind the Kasematten, kilometres of defensive tunnels carved into the cliff.',
        quiz: {
          question: 'The Bock Casemates are a network of…?',
          options: ['defensive tunnels', 'wine cellars', 'subway lines'],
          correct: 'defensive tunnels',
          explanation: 'The Bock Casemates are underground defensive galleries carved into the rock, part of Luxembourg\'s former fortress.',
        },
      },
    ],
  },
]

export default cities
