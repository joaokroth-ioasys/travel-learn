// City Life content for the German journey.
// Each location is a mini-journey: a sequence of `stages` the learner walks
// through (RouteJourney shape — see RouteJourney.jsx). `pos` places the pin on
// the illustrated city map (percent of the map box). Stages have no photo or
// lesson — WikiPhoto falls back to an accent hero, RouteJourney hides the lesson
// CTA. Stage ids are globally unique (routeDone is one flat set per journey).

const LOCATIONS = [
  {
    id: 'airport', name: 'Airport', icon: '✈️', accent: '#3a7bd5',
    tagline: 'From check-in to taxi', pos: { x: 15, y: 12 },
    stages: [
      {
        id: 'cl-airport-checkin', name: 'Check-in', icon: '🛄',
        narrative: 'You arrive at the terminal. First stop: the check-in counter to drop your bag and get your boarding pass.',
        phrases: [
          { de: 'Ich möchte einchecken.', en: "I'd like to check in." },
          { de: 'Hier ist mein Reisepass.', en: 'Here is my passport.' },
          { de: 'Einen Fensterplatz, bitte.', en: 'A window seat, please.' },
          { de: 'Einen Gangplatz, bitte.', en: 'An aisle seat, please.' },
        ],
        quiz: {
          question: 'How do you ask for a window seat?',
          options: ['Einen Fensterplatz, bitte.', 'Einen Gangplatz, bitte.', 'Wo ist das Gate?'],
          correct: 'Einen Fensterplatz, bitte.',
          explanation: 'das Fenster = window, der Gang = aisle.',
        },
      },
      {
        id: 'cl-airport-security', name: 'Security', icon: '🛂',
        narrative: 'Boarding pass in hand, you head to the security check.',
        phrases: [
          { de: 'Bitte legen Sie Ihre Tasche aufs Band.', en: 'Please put your bag on the belt.' },
          { de: 'Haben Sie Flüssigkeiten dabei?', en: 'Do you have any liquids with you?' },
          { de: 'Muss ich meine Schuhe ausziehen?', en: 'Do I have to take off my shoes?' },
        ],
        quiz: {
          question: '"Haben Sie Flüssigkeiten dabei?" asks about…',
          options: ['liquids', 'shoes', 'your laptop'],
          correct: 'liquids',
          explanation: 'die Flüssigkeiten = liquids — limited in hand luggage.',
        },
      },
      {
        id: 'cl-airport-gate', name: 'Boarding', icon: '🎫',
        narrative: 'You find your gate and wait for boarding to begin.',
        phrases: [
          { de: 'Wo ist das Gate?', en: 'Where is the gate?' },
          { de: 'Ihre Bordkarte, bitte.', en: 'Your boarding pass, please.' },
          { de: 'Das Boarding beginnt um 10 Uhr.', en: 'Boarding begins at 10.' },
        ],
        quiz: {
          question: 'Your "Bordkarte" is your…',
          options: ['boarding pass', 'suitcase', 'passport'],
          correct: 'boarding pass',
          explanation: 'die Bordkarte = boarding pass.',
        },
      },
      {
        id: 'cl-airport-baggage', name: 'Baggage', icon: '🧳',
        narrative: 'After landing you go to baggage claim to pick up your suitcase.',
        phrases: [
          { de: 'Wo ist die Gepäckausgabe?', en: 'Where is baggage claim?' },
          { de: 'Mein Koffer ist nicht angekommen.', en: "My suitcase didn't arrive." },
          { de: 'Mein Gepäck ist beschädigt.', en: 'My luggage is damaged.' },
        ],
        quiz: {
          question: 'How do you say your suitcase did not arrive?',
          options: ['Mein Koffer ist nicht angekommen.', 'Wo ist die Gepäckausgabe?', 'Ich brauche ein Taxi.'],
          correct: 'Mein Koffer ist nicht angekommen.',
          explanation: 'der Koffer = suitcase; angekommen = arrived.',
        },
      },
      {
        id: 'cl-airport-money', name: 'Cash', icon: '💶',
        narrative: 'You need some cash before leaving the airport.',
        phrases: [
          { de: 'Wo ist der Geldautomat?', en: 'Where is the ATM?' },
          { de: 'Wo kann ich Geld wechseln?', en: 'Where can I exchange money?' },
          { de: 'Ich möchte Geld abheben.', en: "I'd like to withdraw money." },
        ],
        quiz: {
          question: '"der Geldautomat" is a…',
          options: ['cash machine (ATM)', 'exchange office', 'bank teller'],
          correct: 'cash machine (ATM)',
          explanation: 'der Geldautomat = ATM; Geld abheben = to withdraw money.',
        },
      },
      {
        id: 'cl-airport-taxi', name: 'Taxi', icon: '🚕',
        narrative: 'Finally you grab a taxi into the city.',
        phrases: [
          { de: 'Ich brauche ein Taxi.', en: 'I need a taxi.' },
          { de: 'Zum Stadtzentrum, bitte.', en: 'To the city centre, please.' },
          { de: 'Was kostet die Fahrt?', en: 'How much is the ride?' },
        ],
        quiz: {
          question: '"Was kostet die Fahrt?" asks about the…',
          options: ['price of the ride', 'direction', 'time'],
          correct: 'price of the ride',
          explanation: 'die Fahrt = the ride/trip; Was kostet…? = How much is…?',
        },
      },
    ],
  },

  {
    id: 'restaurant', name: 'Restaurant', icon: '🍽️', accent: '#c0504d',
    tagline: 'A table, a meal, the bill', pos: { x: 60, y: 15 },
    stages: [
      {
        id: 'cl-rest-arrive', name: 'Arrive', icon: '🪑',
        narrative: 'You walk in for dinner.',
        phrases: [
          { de: 'Ich habe einen Tisch reserviert.', en: 'I have a reservation.' },
          { de: 'Ein Tisch für zwei, bitte.', en: 'A table for two, please.' },
        ],
        quiz: {
          question: '"Ein Tisch für zwei" is a table for…',
          options: ['two', 'ten', 'one'],
          correct: 'two',
          explanation: 'zwei = two; reservieren = to reserve.',
        },
      },
      {
        id: 'cl-rest-menu', name: 'The menu', icon: '📖',
        narrative: 'The waiter brings the menus.',
        phrases: [
          { de: 'Die Speisekarte, bitte.', en: 'The menu, please.' },
          { de: 'Die Getränkekarte, bitte.', en: 'The drinks menu, please.' },
          { de: 'Was ist das Tagesgericht?', en: "What's the dish of the day?" },
        ],
        quiz: {
          question: '"die Getränkekarte" is the…',
          options: ['drinks menu', 'food menu', 'bill'],
          correct: 'drinks menu',
          explanation: 'Getränke = drinks; die Speisekarte = food menu.',
        },
      },
      {
        id: 'cl-rest-order', name: 'Order by course', icon: '🍲',
        narrative: 'Courses: Vorspeise (Suppe, Salat), Hauptgericht (Schnitzel, Bratwurst, Pasta), Nachtisch (Eis, Apfelstrudel), plus Getränke (Bier, Wein, Wasser, Apfelschorle).',
        phrases: [
          { de: 'Als Vorspeise nehme ich die Suppe.', en: "As a starter I'll have the soup." },
          { de: 'Als Hauptgericht das Schnitzel.', en: 'For the main, the schnitzel.' },
          { de: 'Zum Nachtisch ein Eis.', en: 'For dessert, ice cream.' },
        ],
        quiz: {
          question: '"die Vorspeise" is the…',
          options: ['starter', 'main course', 'dessert'],
          correct: 'starter',
          explanation: 'Vorspeise = starter, Hauptgericht = main, Nachtisch = dessert.',
        },
      },
      {
        id: 'cl-rest-special', name: 'Special requests', icon: '🥗',
        narrative: 'You have a few dietary needs.',
        phrases: [
          { de: 'Ich bin Vegetarier.', en: "I'm vegetarian." },
          { de: 'Ich habe eine Allergie.', en: 'I have an allergy.' },
          { de: 'Ohne Zwiebeln, bitte.', en: 'Without onions, please.' },
        ],
        quiz: {
          question: '"Ohne Zwiebeln, bitte." means without…',
          options: ['onions', 'salt', 'meat'],
          correct: 'onions',
          explanation: 'ohne = without; die Zwiebel = onion.',
        },
      },
      {
        id: 'cl-rest-pay', name: 'Pay', icon: '🧾',
        narrative: 'Great meal. Time to settle up.',
        phrases: [
          { de: 'Die Rechnung, bitte.', en: 'The bill, please.' },
          { de: 'Getrennt, bitte.', en: 'Separately, please.' },
          { de: 'Das Essen war köstlich.', en: 'The food was delicious.' },
        ],
        quiz: {
          question: '"Die Rechnung, bitte." asks for the…',
          options: ['bill', 'menu', 'waiter'],
          correct: 'bill',
          explanation: 'die Rechnung = the bill; köstlich = delicious.',
        },
      },
    ],
  },

  {
    id: 'train-station', name: 'Train Station', icon: '🚉', accent: '#5b8c5a',
    tagline: 'Find your way and board', pos: { x: 85, y: 23 },
    stages: [
      {
        id: 'cl-train-orient', name: 'Orient yourself', icon: '🧭',
        narrative: 'The station is huge. You stop someone to ask the way.',
        phrases: [
          { de: 'Entschuldigung, wie komme ich zu Gleis 7?', en: 'Excuse me, how do I get to platform 7?' },
          { de: 'Wo ist der Fahrkartenautomat?', en: 'Where is the ticket machine?' },
          { de: 'Können Sie mir helfen?', en: 'Can you help me?' },
        ],
        quiz: {
          question: 'A "Gleis" is a…',
          options: ['platform / track', 'ticket', 'exit'],
          correct: 'platform / track',
          explanation: 'das Gleis = the platform/track your train departs from.',
        },
      },
      {
        id: 'cl-train-ticket', name: 'Buy a ticket', icon: '🎟️',
        narrative: 'At the counter you buy your ticket.',
        phrases: [
          { de: 'Eine Fahrkarte nach Berlin, bitte.', en: 'A ticket to Berlin, please.' },
          { de: 'Einfach oder hin und zurück?', en: 'One-way or return?' },
          { de: 'Was kostet eine Fahrkarte?', en: 'How much is a ticket?' },
        ],
        quiz: {
          question: '"hin und zurück" means…',
          options: ['return / round trip', 'one-way', 'first class'],
          correct: 'return / round trip',
          explanation: 'hin und zurück = there and back; einfach = one-way.',
        },
      },
      {
        id: 'cl-train-platform', name: 'Find the platform', icon: '🚏',
        narrative: 'Ticket in hand, you check which platform your train leaves from.',
        phrases: [
          { de: 'Von welchem Gleis fährt der Zug?', en: 'Which platform does the train leave from?' },
          { de: 'Der Zug fährt auf Gleis 3.', en: 'The train leaves from platform 3.' },
        ],
        quiz: {
          question: 'How do you ask which platform the train leaves from?',
          options: ['Von welchem Gleis fährt der Zug?', 'Was kostet die Fahrt?', 'Muss ich umsteigen?'],
          correct: 'Von welchem Gleis fährt der Zug?',
          explanation: 'fahren = to depart/go; von welchem Gleis = from which platform.',
        },
      },
      {
        id: 'cl-train-boarding', name: 'Waiting to board', icon: '⏳',
        narrative: 'You wait on the platform. Announcements crackle overhead.',
        phrases: [
          { de: 'Der Zug hat 10 Minuten Verspätung.', en: 'The train is 10 minutes late.' },
          { de: 'Bitte einsteigen!', en: 'All aboard!' },
          { de: 'Vorsicht, die Türen schließen.', en: 'Careful, the doors are closing.' },
        ],
        quiz: {
          question: '"Verspätung" means…',
          options: ['delay', 'platform', 'ticket'],
          correct: 'delay',
          explanation: 'die Verspätung = delay; einsteigen = to board.',
        },
      },
      {
        id: 'cl-train-transfer', name: 'Changing trains', icon: '🔀',
        narrative: 'Your route needs a change midway.',
        phrases: [
          { de: 'Muss ich umsteigen?', en: 'Do I have to change trains?' },
          { de: 'Ich steige in Köln um.', en: 'I change in Cologne.' },
        ],
        quiz: {
          question: '"umsteigen" means…',
          options: ['to change trains', 'to get off for good', 'to buy a ticket'],
          correct: 'to change trains',
          explanation: 'umsteigen = to transfer/change trains.',
        },
      },
    ],
  },

  {
    id: 'doctor', name: 'Doctor & Hospital', icon: '🏥', accent: '#d06b8c',
    tagline: 'Feeling ill and getting help', pos: { x: 85, y: 45 },
    stages: [
      {
        id: 'cl-doc-reception', name: 'Reception', icon: '🪪',
        narrative: 'You check in at the desk.',
        phrases: [
          { de: 'Ich habe einen Termin.', en: 'I have an appointment.' },
          { de: 'Hier ist meine Versichertenkarte.', en: 'Here is my insurance card.' },
          { de: 'Ich brauche einen Arzt.', en: 'I need a doctor.' },
        ],
        quiz: {
          question: '"die Versichertenkarte" is your…',
          options: ['insurance card', 'prescription', 'appointment'],
          correct: 'insurance card',
          explanation: 'die Versicherung = insurance; die Karte = card.',
        },
      },
      {
        id: 'cl-doc-triage', name: 'Triage', icon: '🤒',
        narrative: 'A nurse asks what is wrong.',
        phrases: [
          { de: 'Ich habe Fieber.', en: 'I have a fever.' },
          { de: 'Ich habe Kopfschmerzen.', en: 'I have a headache.' },
          { de: 'Ich habe Bauchschmerzen.', en: 'I have a stomach ache.' },
          { de: 'Ich habe mir das Bein verletzt.', en: 'I hurt my leg.' },
          { de: 'Ich hatte einen Unfall.', en: 'I had an accident.' },
        ],
        quiz: {
          question: '"Ich habe Kopfschmerzen." means I have a…',
          options: ['headache', 'stomach ache', 'fever'],
          correct: 'headache',
          explanation: 'der Kopf = head; die Schmerzen = pain. Bauch = belly.',
        },
      },
      {
        id: 'cl-doc-exam', name: 'The exam', icon: '🩺',
        narrative: 'The doctor examines you.',
        phrases: [
          { de: 'Wo tut es weh?', en: 'Where does it hurt?' },
          { de: 'Seit wann haben Sie das?', en: 'Since when have you had this?' },
          { de: 'Atmen Sie tief ein.', en: 'Breathe in deeply.' },
        ],
        quiz: {
          question: '"Wo tut es weh?" asks…',
          options: ['where it hurts', 'since when', 'your name'],
          correct: 'where it hurts',
          explanation: 'weh tun = to hurt; wo = where.',
        },
      },
      {
        id: 'cl-doc-medicine', name: 'Medicine', icon: '💊',
        narrative: 'You get a prescription for the pharmacy.',
        phrases: [
          { de: 'Ich brauche ein Rezept.', en: 'I need a prescription.' },
          { de: 'Nehmen Sie die Tablette dreimal am Tag.', en: 'Take the tablet three times a day.' },
          { de: 'Wo ist die Apotheke?', en: 'Where is the pharmacy?' },
        ],
        quiz: {
          question: '"die Apotheke" is the…',
          options: ['pharmacy', 'hospital', 'doctor'],
          correct: 'pharmacy',
          explanation: 'die Apotheke = pharmacy; das Rezept = prescription.',
        },
      },
      {
        id: 'cl-doc-note', name: 'Sick note', icon: '📄',
        narrative: 'You need proof for work.',
        phrases: [
          { de: 'Ich brauche eine Krankschreibung.', en: 'I need a sick note.' },
          { de: 'Können Sie mir ein Attest ausstellen?', en: 'Can you issue me a medical certificate?' },
        ],
        quiz: {
          question: '"die Krankschreibung" is a…',
          options: ['sick note', 'prescription', 'bill'],
          correct: 'sick note',
          explanation: 'krank = sick; das Attest = medical certificate.',
        },
      },
    ],
  },

  {
    id: 'tourist-guide', name: 'Tourist Guide', icon: '🗺️', accent: '#3a9188',
    tagline: 'The tour and the sights', pos: { x: 53, y: 46 },
    stages: [
      {
        id: 'cl-tour-info', name: 'Tour info', icon: '🕒',
        narrative: 'You meet the guide and get the plan for the day.',
        phrases: [
          { de: 'Wann beginnt die Führung?', en: 'When does the tour start?' },
          { de: 'Wohin gehen wir?', en: 'Where are we going?' },
          { de: 'Wie lange dauert die Tour?', en: 'How long does the tour take?' },
        ],
        quiz: {
          question: '"die Führung" is a…',
          options: ['guided tour', 'map', 'ticket'],
          correct: 'guided tour',
          explanation: 'die Führung = guided tour; führen = to lead.',
        },
      },
      {
        id: 'cl-tour-getthere', name: 'Getting there', icon: '🚶',
        narrative: 'You ask how to reach the first stop.',
        phrases: [
          { de: 'Wie komme ich zum Museum?', en: 'How do I get to the museum?' },
          { de: 'Ist es zu Fuß erreichbar?', en: 'Is it reachable on foot?' },
          { de: 'Nehmen Sie die U-Bahn.', en: 'Take the subway.' },
        ],
        quiz: {
          question: '"zu Fuß" means…',
          options: ['on foot', 'by subway', 'by taxi'],
          correct: 'on foot',
          explanation: 'zu Fuß = on foot; die U-Bahn = subway.',
        },
      },
      {
        id: 'cl-tour-sights', name: 'The sights', icon: '📸',
        narrative: 'Famous German landmarks: das Brandenburger Tor, der Kölner Dom, Schloss Neuschwanstein, die Berliner Mauer, der Reichstag.',
        phrases: [
          { de: 'Das Brandenburger Tor ist berühmt.', en: 'The Brandenburg Gate is famous.' },
          { de: 'Der Kölner Dom ist beeindruckend.', en: 'Cologne Cathedral is impressive.' },
          { de: 'Ich möchte Schloss Neuschwanstein besuchen.', en: "I'd like to visit Neuschwanstein Castle." },
        ],
        quiz: {
          question: 'Which is a famous Berlin landmark?',
          options: ['das Brandenburger Tor', 'der Kölner Dom', 'Schloss Neuschwanstein'],
          correct: 'das Brandenburger Tor',
          explanation: 'The Brandenburger Tor is in Berlin; the Kölner Dom is in Cologne.',
        },
      },
      {
        id: 'cl-tour-ticket', name: 'Buy entry', icon: '🎫',
        narrative: 'At the entrance you buy tickets.',
        phrases: [
          { de: 'Zwei Tickets für die Führung, bitte.', en: 'Two tickets for the tour, please.' },
          { de: 'Gibt es eine Ermäßigung?', en: 'Is there a discount?' },
          { de: 'Der Eintritt ist frei.', en: 'Admission is free.' },
        ],
        quiz: {
          question: '"Gibt es eine Ermäßigung?" asks about a…',
          options: ['discount', 'tour guide', 'free map'],
          correct: 'discount',
          explanation: 'die Ermäßigung = discount; der Eintritt = admission.',
        },
      },
    ],
  },

  {
    id: 'gym', name: 'Gym', icon: '🏋️', accent: '#7a5cc0',
    tagline: 'Join, train, share the machines', pos: { x: 21, y: 84 },
    stages: [
      {
        id: 'cl-gym-join', name: 'Sign up', icon: '📝',
        narrative: 'First visit. You go to the front desk to become a member.',
        phrases: [
          { de: 'Ich möchte mich anmelden.', en: "I'd like to sign up." },
          { de: 'Was kostet die Mitgliedschaft?', en: 'How much is the membership?' },
          { de: 'Gibt es einen Probetag?', en: 'Is there a trial day?' },
        ],
        quiz: {
          question: '"die Mitgliedschaft" means…',
          options: ['membership', 'trial day', 'locker'],
          correct: 'membership',
          explanation: 'die Mitgliedschaft = membership; sich anmelden = to sign up.',
        },
      },
      {
        id: 'cl-gym-locker', name: 'Changing room', icon: '🔑',
        narrative: 'You look for somewhere to change and stash your things.',
        phrases: [
          { de: 'Wo ist die Umkleide?', en: 'Where is the changing room?' },
          { de: 'Wo sind die Schließfächer?', en: 'Where are the lockers?' },
          { de: 'Haben Sie ein Schloss?', en: 'Do you have a lock?' },
        ],
        quiz: {
          question: '"die Schließfächer" are…',
          options: ['lockers', 'towels', 'showers'],
          correct: 'lockers',
          explanation: 'das Schließfach = locker; die Umkleide = changing room.',
        },
      },
      {
        id: 'cl-gym-plan', name: 'Ask for a plan', icon: '📈',
        narrative: 'A trainer offers to put together a routine for you.',
        phrases: [
          { de: 'Können Sie mir einen Trainingsplan erstellen?', en: 'Can you make me a training plan?' },
          { de: 'Ich bin Anfänger.', en: "I'm a beginner." },
          { de: 'Ich möchte Muskeln aufbauen.', en: 'I want to build muscle.' },
          { de: 'Ich möchte abnehmen.', en: 'I want to lose weight.' },
        ],
        quiz: {
          question: '"Ich möchte abnehmen." means…',
          options: ['I want to lose weight', 'I want to build muscle', "I'm a beginner"],
          correct: 'I want to lose weight',
          explanation: 'abnehmen = to lose weight; Muskeln aufbauen = to build muscle.',
        },
      },
      {
        id: 'cl-gym-share', name: 'Share a machine', icon: '🔁',
        narrative: 'The machine you want is in use. You ask to work in.',
        phrases: [
          { de: 'Ist das Gerät frei?', en: 'Is this machine free?' },
          { de: 'Darf ich mich dazwischen einschieben?', en: 'Can I work in between your sets?' },
          { de: 'Wie viele Sätze noch?', en: 'How many sets left?' },
        ],
        quiz: {
          question: '"Ist das Gerät frei?" asks if the machine is…',
          options: ['free / available', 'broken', 'heavy'],
          correct: 'free / available',
          explanation: 'das Gerät = the machine; frei = free/available.',
        },
      },
      {
        id: 'cl-gym-exercises', name: 'The exercises', icon: '💪',
        narrative: 'By muscle group — Rücken (back), Brust (chest), Beine (legs), Schultern (shoulders). Common lifts follow.',
        phrases: [
          { de: 'Rudern und Latzug für den Rücken.', en: 'Rows and lat pulldown for the back.' },
          { de: 'Bankdrücken und Butterfly für die Brust.', en: 'Bench press and fly for the chest.' },
          { de: 'Kniebeugen und Kreuzheben für die Beine.', en: 'Squats and deadlifts for the legs.' },
          { de: 'Drei Sätze mit zwölf Wiederholungen.', en: 'Three sets of twelve reps.' },
        ],
        quiz: {
          question: 'Which German word is the "squat"?',
          options: ['die Kniebeuge', 'das Bankdrücken', 'das Rudern'],
          correct: 'die Kniebeuge',
          explanation: 'Kniebeuge = squat, Kreuzheben = deadlift, Bankdrücken = bench press.',
        },
      },
    ],
  },

  {
    id: 'public-services', name: 'Public Services', icon: '🏛️', accent: '#4a7a8c',
    tagline: 'Registration, visa, paperwork', pos: { x: 65, y: 80 },
    stages: [
      {
        id: 'cl-pub-appointment', name: 'Book an appointment', icon: '📅',
        narrative: 'Almost everything here needs a Termin first.',
        phrases: [
          { de: 'Ich möchte einen Termin vereinbaren.', en: "I'd like to make an appointment." },
          { de: 'Haben Sie einen Termin frei?', en: 'Do you have an appointment available?' },
        ],
        quiz: {
          question: '"der Termin" means…',
          options: ['appointment', 'form', 'ID card'],
          correct: 'appointment',
          explanation: 'einen Termin vereinbaren = to make an appointment.',
        },
      },
      {
        id: 'cl-pub-anmeldung', name: 'City registration', icon: '🏠',
        narrative: 'In Germany you must register your address (Anmeldung) after moving in.',
        phrases: [
          { de: 'Ich möchte mich anmelden.', en: "I'd like to register." },
          { de: 'Hier ist mein Mietvertrag.', en: 'Here is my rental contract.' },
          { de: 'Ich brauche eine Meldebescheinigung.', en: 'I need a registration certificate.' },
        ],
        quiz: {
          question: '"der Mietvertrag" is your…',
          options: ['rental contract', 'ID card', 'passport'],
          correct: 'rental contract',
          explanation: 'die Miete = rent; der Vertrag = contract.',
        },
      },
      {
        id: 'cl-pub-visa', name: 'Visa & residence', icon: '🛃',
        narrative: 'For a longer stay you deal with the immigration office.',
        phrases: [
          { de: 'Ich brauche eine Aufenthaltserlaubnis.', en: 'I need a residence permit.' },
          { de: 'Wo ist die Ausländerbehörde?', en: 'Where is the immigration office?' },
          { de: 'Welches Visum brauche ich?', en: 'Which visa do I need?' },
        ],
        quiz: {
          question: '"die Aufenthaltserlaubnis" is a…',
          options: ['residence permit', 'driving licence', 'health insurance'],
          correct: 'residence permit',
          explanation: 'Aufenthalt = stay; Erlaubnis = permit.',
        },
      },
      {
        id: 'cl-pub-problems', name: 'Sort out a problem', icon: '❓',
        narrative: 'Something is off with your paperwork.',
        phrases: [
          { de: 'Welche Unterlagen brauche ich?', en: 'Which documents do I need?' },
          { de: 'Ich habe das falsche Formular.', en: 'I have the wrong form.' },
          { de: 'Können Sie das erklären?', en: 'Can you explain that?' },
        ],
        quiz: {
          question: '"die Unterlagen" are…',
          options: ['documents', 'appointments', 'offices'],
          correct: 'documents',
          explanation: 'die Unterlagen = documents/paperwork; das Formular = form.',
        },
      },
    ],
  },

];

// dev guard: stage ids must be globally unique — routeDone is one flat set per
// journey, so a duplicate id would mark two stages complete at once.
if (import.meta.env?.DEV) {
  const ids = LOCATIONS.flatMap((l) => l.stages.map((s) => s.id));
  const dup = ids.find((id, i) => ids.indexOf(id) !== i);
  if (dup) console.error('[CityLife] duplicate stage id:', dup);
}

export default LOCATIONS;
