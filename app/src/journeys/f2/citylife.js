// City Life content for the France journey (f2).
// French counterpart of de/citylife.js — same 7 locations, ids, icons, accents
// and stage structure; phrases translated to French ({ fr, en } — the shape
// RouteJourney's native line already renders). `pos` is tuned to the France
// diorama (public/city-life-map-france.jpg). Sequence mirrors the Japan pack:
// airport → train → restaurant → tourist guide → gym → hospital → services.

const LOCATIONS = [
  {
    id: 'airport', name: 'Airport', icon: '✈️', accent: '#3a7bd5',
    tagline: 'From check-in to taxi', pos: { x: 50, y: 8 },
    stages: [
      {
        id: 'cl-airport-checkin', name: 'Check-in', icon: '🛄',
        narrative: 'You arrive at the terminal. First stop: the check-in counter to drop your bag and get your boarding pass.',
        phrases: [
          { fr: 'Je voudrais enregistrer mes bagages.', en: "I'd like to check in." },
          { fr: 'Voici mon passeport.', en: 'Here is my passport.' },
          { fr: 'Une place côté fenêtre, s’il vous plaît.', en: 'A window seat, please.' },
          { fr: 'Une place côté couloir, s’il vous plaît.', en: 'An aisle seat, please.' },
        ],
        quiz: {
          question: 'How do you ask for a window seat?',
          options: ['Une place côté fenêtre, s’il vous plaît.', 'Une place côté couloir, s’il vous plaît.', 'Où est la porte ?'],
          correct: 'Une place côté fenêtre, s’il vous plaît.',
          explanation: 'la fenêtre = window, le couloir = aisle.',
        },
      },
      {
        id: 'cl-airport-security', name: 'Security', icon: '🛂',
        narrative: 'Boarding pass in hand, you head to the security check.',
        phrases: [
          { fr: 'Posez votre sac sur le tapis, s’il vous plaît.', en: 'Please put your bag on the belt.' },
          { fr: 'Avez-vous des liquides sur vous ?', en: 'Do you have any liquids with you?' },
          { fr: 'Dois-je enlever mes chaussures ?', en: 'Do I have to take off my shoes?' },
        ],
        quiz: {
          question: '"Avez-vous des liquides sur vous ?" asks about…',
          options: ['liquids', 'shoes', 'your laptop'],
          correct: 'liquids',
          explanation: 'les liquides = liquids — limited in hand luggage.',
        },
      },
      {
        id: 'cl-airport-gate', name: 'Boarding', icon: '🎫',
        narrative: 'You find your gate and wait for boarding to begin.',
        phrases: [
          { fr: 'Où est la porte d’embarquement ?', en: 'Where is the gate?' },
          { fr: 'Votre carte d’embarquement, s’il vous plaît.', en: 'Your boarding pass, please.' },
          { fr: 'L’embarquement commence à 10 heures.', en: 'Boarding begins at 10.' },
        ],
        quiz: {
          question: 'Your "carte d’embarquement" is your…',
          options: ['boarding pass', 'suitcase', 'passport'],
          correct: 'boarding pass',
          explanation: 'la carte d’embarquement = boarding pass.',
        },
      },
      {
        id: 'cl-airport-baggage', name: 'Baggage', icon: '🧳',
        narrative: 'After landing you go to baggage claim to pick up your suitcase.',
        phrases: [
          { fr: 'Où est le retrait des bagages ?', en: 'Where is baggage claim?' },
          { fr: 'Ma valise n’est pas arrivée.', en: "My suitcase didn't arrive." },
          { fr: 'Mes bagages sont abîmés.', en: 'My luggage is damaged.' },
        ],
        quiz: {
          question: 'How do you say your suitcase did not arrive?',
          options: ['Ma valise n’est pas arrivée.', 'Où est le retrait des bagages ?', 'J’ai besoin d’un taxi.'],
          correct: 'Ma valise n’est pas arrivée.',
          explanation: 'la valise = suitcase; arriver = to arrive.',
        },
      },
      {
        id: 'cl-airport-money', name: 'Cash', icon: '💶',
        narrative: 'You need some cash before leaving the airport.',
        phrases: [
          { fr: 'Où est le distributeur automatique ?', en: 'Where is the ATM?' },
          { fr: 'Où puis-je changer de l’argent ?', en: 'Where can I exchange money?' },
          { fr: 'Je voudrais retirer de l’argent.', en: "I'd like to withdraw money." },
        ],
        quiz: {
          question: 'Le "distributeur automatique" is a…',
          options: ['cash machine (ATM)', 'exchange office', 'bank teller'],
          correct: 'cash machine (ATM)',
          explanation: 'le distributeur = ATM; retirer de l’argent = to withdraw money.',
        },
      },
      {
        id: 'cl-airport-taxi', name: 'Taxi', icon: '🚕',
        narrative: 'Finally you grab a taxi into the city.',
        phrases: [
          { fr: 'J’ai besoin d’un taxi.', en: 'I need a taxi.' },
          { fr: 'Au centre-ville, s’il vous plaît.', en: 'To the city centre, please.' },
          { fr: 'Combien coûte la course ?', en: 'How much is the ride?' },
        ],
        quiz: {
          question: '"Combien coûte la course ?" asks about the…',
          options: ['price of the ride', 'direction', 'time'],
          correct: 'price of the ride',
          explanation: 'la course = the ride/trip; combien coûte…? = how much is…?',
        },
      },
    ],
  },

  {
    id: 'train-station', name: 'Train Station', icon: '🚉', accent: '#5b8c5a',
    tagline: 'Find your way and board', pos: { x: 44, y: 22 },
    stages: [
      {
        id: 'cl-train-orient', name: 'Orient yourself', icon: '🧭',
        narrative: 'The station is huge. You stop someone to ask the way.',
        phrases: [
          { fr: 'Excusez-moi, comment aller au quai 7 ?', en: 'Excuse me, how do I get to platform 7?' },
          { fr: 'Où est le distributeur de billets ?', en: 'Where is the ticket machine?' },
          { fr: 'Pouvez-vous m’aider ?', en: 'Can you help me?' },
        ],
        quiz: {
          question: 'A "quai" is a…',
          options: ['platform', 'ticket', 'exit'],
          correct: 'platform',
          explanation: 'le quai = the platform your train departs from.',
        },
      },
      {
        id: 'cl-train-ticket', name: 'Buy a ticket', icon: '🎟️',
        narrative: 'At the counter you buy your ticket.',
        phrases: [
          { fr: 'Un billet pour Paris, s’il vous plaît.', en: 'A ticket to Paris, please.' },
          { fr: 'Aller simple ou aller-retour ?', en: 'One-way or return?' },
          { fr: 'Combien coûte un billet ?', en: 'How much is a ticket?' },
        ],
        quiz: {
          question: '"aller-retour" means…',
          options: ['return / round trip', 'one-way', 'first class'],
          correct: 'return / round trip',
          explanation: 'aller-retour = there and back; aller simple = one-way.',
        },
      },
      {
        id: 'cl-train-platform', name: 'Find the platform', icon: '🚏',
        narrative: 'Ticket in hand, you check which platform your train leaves from.',
        phrases: [
          { fr: 'De quel quai part le train ?', en: 'Which platform does the train leave from?' },
          { fr: 'Le train part du quai 3.', en: 'The train leaves from platform 3.' },
        ],
        quiz: {
          question: 'How do you ask which platform the train leaves from?',
          options: ['De quel quai part le train ?', 'Combien coûte la course ?', 'Dois-je changer ?'],
          correct: 'De quel quai part le train ?',
          explanation: 'partir = to depart; de quel quai = from which platform.',
        },
      },
      {
        id: 'cl-train-boarding', name: 'Waiting to board', icon: '⏳',
        narrative: 'You wait on the platform. Announcements crackle overhead.',
        phrases: [
          { fr: 'Le train a 10 minutes de retard.', en: 'The train is 10 minutes late.' },
          { fr: 'En voiture !', en: 'All aboard!' },
          { fr: 'Attention, les portes se ferment.', en: 'Careful, the doors are closing.' },
        ],
        quiz: {
          question: '"le retard" means…',
          options: ['delay', 'platform', 'ticket'],
          correct: 'delay',
          explanation: 'le retard = delay; monter = to board.',
        },
      },
      {
        id: 'cl-train-transfer', name: 'Changing trains', icon: '🔀',
        narrative: 'Your route needs a change midway.',
        phrases: [
          { fr: 'Est-ce que je dois changer ?', en: 'Do I have to change trains?' },
          { fr: 'Je change à Lyon.', en: 'I change in Lyon.' },
        ],
        quiz: {
          question: '"changer" (de train) means…',
          options: ['to change trains', 'to get off for good', 'to buy a ticket'],
          correct: 'to change trains',
          explanation: 'changer = to transfer/change trains; la correspondance = the connection.',
        },
      },
    ],
  },

  {
    id: 'restaurant', name: 'Restaurant', icon: '🍽️', accent: '#c0504d',
    tagline: 'A table, a meal, the bill', pos: { x: 16, y: 58 },
    stages: [
      {
        id: 'cl-rest-arrive', name: 'Arrive', icon: '🪑',
        narrative: 'You walk in for dinner.',
        phrases: [
          { fr: 'J’ai réservé une table.', en: 'I have a reservation.' },
          { fr: 'Une table pour deux, s’il vous plaît.', en: 'A table for two, please.' },
        ],
        quiz: {
          question: '"une table pour deux" is a table for…',
          options: ['two', 'ten', 'one'],
          correct: 'two',
          explanation: 'deux = two; réserver = to reserve.',
        },
      },
      {
        id: 'cl-rest-menu', name: 'The menu', icon: '📖',
        narrative: 'The waiter brings the menus.',
        phrases: [
          { fr: 'La carte, s’il vous plaît.', en: 'The menu, please.' },
          { fr: 'La carte des boissons, s’il vous plaît.', en: 'The drinks menu, please.' },
          { fr: 'Quel est le plat du jour ?', en: "What's the dish of the day?" },
        ],
        quiz: {
          question: '"la carte des boissons" is the…',
          options: ['drinks menu', 'food menu', 'bill'],
          correct: 'drinks menu',
          explanation: 'les boissons = drinks; la carte = the menu.',
        },
      },
      {
        id: 'cl-rest-order', name: 'Order by course', icon: '🍲',
        narrative: 'Courses: l’entrée (soupe, salade), le plat (steak-frites, confit de canard, pâtes), le dessert (glace, tarte), plus les boissons (vin, bière, eau, jus).',
        phrases: [
          { fr: 'En entrée, je prends la soupe.', en: "As a starter I'll have the soup." },
          { fr: 'Comme plat, le steak-frites.', en: 'For the main, the steak and fries.' },
          { fr: 'En dessert, une glace.', en: 'For dessert, ice cream.' },
        ],
        quiz: {
          question: '"l’entrée" is the…',
          options: ['starter', 'main course', 'dessert'],
          correct: 'starter',
          explanation: 'l’entrée = starter, le plat = main, le dessert = dessert.',
        },
      },
      {
        id: 'cl-rest-special', name: 'Special requests', icon: '🥗',
        narrative: 'You have a few dietary needs.',
        phrases: [
          { fr: 'Je suis végétarien.', en: "I'm vegetarian." },
          { fr: 'J’ai une allergie.', en: 'I have an allergy.' },
          { fr: 'Sans oignons, s’il vous plaît.', en: 'Without onions, please.' },
        ],
        quiz: {
          question: '"Sans oignons, s’il vous plaît." means without…',
          options: ['onions', 'salt', 'meat'],
          correct: 'onions',
          explanation: 'sans = without; l’oignon = onion.',
        },
      },
      {
        id: 'cl-rest-pay', name: 'Pay', icon: '🧾',
        narrative: 'Great meal. Time to settle up.',
        phrases: [
          { fr: 'L’addition, s’il vous plaît.', en: 'The bill, please.' },
          { fr: 'Séparément, s’il vous plaît.', en: 'Separately, please.' },
          { fr: 'C’était délicieux.', en: 'The food was delicious.' },
        ],
        quiz: {
          question: '"L’addition, s’il vous plaît." asks for the…',
          options: ['bill', 'menu', 'waiter'],
          correct: 'bill',
          explanation: 'l’addition = the bill; délicieux = delicious.',
        },
      },
    ],
  },

  {
    id: 'tourist-guide', name: 'Tourist Guide', icon: '🗺️', accent: '#3a9188',
    tagline: 'The tour and the sights', pos: { x: 55, y: 45 },
    stages: [
      {
        id: 'cl-tour-info', name: 'Tour info', icon: '🕒',
        narrative: 'You meet the guide and get the plan for the day.',
        phrases: [
          { fr: 'À quelle heure commence la visite ?', en: 'When does the tour start?' },
          { fr: 'Où allons-nous ?', en: 'Where are we going?' },
          { fr: 'Combien de temps dure la visite ?', en: 'How long does the tour take?' },
        ],
        quiz: {
          question: '"la visite (guidée)" is a…',
          options: ['guided tour', 'map', 'ticket'],
          correct: 'guided tour',
          explanation: 'la visite guidée = guided tour; le guide = the guide.',
        },
      },
      {
        id: 'cl-tour-getthere', name: 'Getting there', icon: '🚶',
        narrative: 'You ask how to reach the first stop.',
        phrases: [
          { fr: 'Comment aller au musée ?', en: 'How do I get to the museum?' },
          { fr: 'Est-ce accessible à pied ?', en: 'Is it reachable on foot?' },
          { fr: 'Prenez le métro.', en: 'Take the subway.' },
        ],
        quiz: {
          question: '"à pied" means…',
          options: ['on foot', 'by subway', 'by taxi'],
          correct: 'on foot',
          explanation: 'à pied = on foot; le métro = subway.',
        },
      },
      {
        id: 'cl-tour-sights', name: 'The sights', icon: '📸',
        narrative: 'Famous French landmarks: la tour Eiffel, la cathédrale Notre-Dame, le château de Versailles, l’Arc de Triomphe, le Mont-Saint-Michel.',
        phrases: [
          { fr: 'La tour Eiffel est célèbre.', en: 'The Eiffel Tower is famous.' },
          { fr: 'La cathédrale Notre-Dame est impressionnante.', en: 'Notre-Dame Cathedral is impressive.' },
          { fr: 'Je voudrais visiter le château de Versailles.', en: "I'd like to visit the Palace of Versailles." },
        ],
        quiz: {
          question: 'Which is a famous Paris landmark?',
          options: ['la tour Eiffel', 'le Mont-Saint-Michel', 'le château de Versailles'],
          correct: 'la tour Eiffel',
          explanation: 'The Eiffel Tower is in Paris; Versailles is just outside; the Mont-Saint-Michel is in Normandy.',
        },
      },
      {
        id: 'cl-tour-ticket', name: 'Buy entry', icon: '🎫',
        narrative: 'At the entrance you buy tickets.',
        phrases: [
          { fr: 'Deux billets pour la visite, s’il vous plaît.', en: 'Two tickets for the tour, please.' },
          { fr: 'Y a-t-il une réduction ?', en: 'Is there a discount?' },
          { fr: 'L’entrée est gratuite.', en: 'Admission is free.' },
        ],
        quiz: {
          question: '"Y a-t-il une réduction ?" asks about a…',
          options: ['discount', 'tour guide', 'free map'],
          correct: 'discount',
          explanation: 'la réduction = discount; l’entrée = admission.',
        },
      },
    ],
  },

  {
    id: 'gym', name: 'Gym', icon: '🏋️', accent: '#7a5cc0',
    tagline: 'Join, train, share the machines', pos: { x: 62, y: 70 },
    stages: [
      {
        id: 'cl-gym-join', name: 'Sign up', icon: '📝',
        narrative: 'First visit. You go to the front desk to become a member.',
        phrases: [
          { fr: 'Je voudrais m’inscrire.', en: "I'd like to sign up." },
          { fr: 'Combien coûte l’abonnement ?', en: 'How much is the membership?' },
          { fr: 'Y a-t-il une séance d’essai ?', en: 'Is there a trial session?' },
        ],
        quiz: {
          question: '"l’abonnement" means…',
          options: ['membership', 'trial day', 'locker'],
          correct: 'membership',
          explanation: 'l’abonnement = membership; s’inscrire = to sign up.',
        },
      },
      {
        id: 'cl-gym-locker', name: 'Changing room', icon: '🔑',
        narrative: 'You look for somewhere to change and stash your things.',
        phrases: [
          { fr: 'Où est le vestiaire ?', en: 'Where is the changing room?' },
          { fr: 'Où sont les casiers ?', en: 'Where are the lockers?' },
          { fr: 'Avez-vous un cadenas ?', en: 'Do you have a lock?' },
        ],
        quiz: {
          question: '"les casiers" are…',
          options: ['lockers', 'towels', 'showers'],
          correct: 'lockers',
          explanation: 'le casier = locker; le vestiaire = changing room.',
        },
      },
      {
        id: 'cl-gym-plan', name: 'Ask for a plan', icon: '📈',
        narrative: 'A trainer offers to put together a routine for you.',
        phrases: [
          { fr: 'Pouvez-vous me faire un programme d’entraînement ?', en: 'Can you make me a training plan?' },
          { fr: 'Je suis débutant.', en: "I'm a beginner." },
          { fr: 'Je veux prendre du muscle.', en: 'I want to build muscle.' },
          { fr: 'Je veux maigrir.', en: 'I want to lose weight.' },
        ],
        quiz: {
          question: '"Je veux maigrir." means…',
          options: ['I want to lose weight', 'I want to build muscle', "I'm a beginner"],
          correct: 'I want to lose weight',
          explanation: 'maigrir = to lose weight; prendre du muscle = to build muscle.',
        },
      },
      {
        id: 'cl-gym-share', name: 'Share a machine', icon: '🔁',
        narrative: 'The machine you want is in use. You ask to work in.',
        phrases: [
          { fr: 'Est-ce que la machine est libre ?', en: 'Is this machine free?' },
          { fr: 'Je peux alterner avec vous ?', en: 'Can I work in between your sets?' },
          { fr: 'Combien de séries encore ?', en: 'How many sets left?' },
        ],
        quiz: {
          question: '"Est-ce que la machine est libre ?" asks if the machine is…',
          options: ['free / available', 'broken', 'heavy'],
          correct: 'free / available',
          explanation: 'la machine = the machine; libre = free/available.',
        },
      },
      {
        id: 'cl-gym-exercises', name: 'The exercises', icon: '💪',
        narrative: 'By muscle group — le dos (back), la poitrine (chest), les jambes (legs), les épaules (shoulders). Common lifts follow.',
        phrases: [
          { fr: 'Le rowing et le tirage pour le dos.', en: 'Rows and lat pulldown for the back.' },
          { fr: 'Le développé couché et les écartés pour la poitrine.', en: 'Bench press and fly for the chest.' },
          { fr: 'Les squats et le soulevé de terre pour les jambes.', en: 'Squats and deadlifts for the legs.' },
          { fr: 'Trois séries de douze répétitions.', en: 'Three sets of twelve reps.' },
        ],
        quiz: {
          question: 'Which French word is the "squat"?',
          options: ['le squat', 'le développé couché', 'le rowing'],
          correct: 'le squat',
          explanation: 'le squat = squat, le soulevé de terre = deadlift, le développé couché = bench press.',
        },
      },
    ],
  },

  {
    id: 'doctor', name: 'Doctor & Hospital', icon: '🏥', accent: '#d06b8c',
    tagline: 'Feeling ill and getting help', pos: { x: 80, y: 88 },
    stages: [
      {
        id: 'cl-doc-reception', name: 'Reception', icon: '🪪',
        narrative: 'You check in at the desk.',
        phrases: [
          { fr: 'J’ai un rendez-vous.', en: 'I have an appointment.' },
          { fr: 'Voici ma carte Vitale.', en: 'Here is my health insurance card.' },
          { fr: 'J’ai besoin d’un médecin.', en: 'I need a doctor.' },
        ],
        quiz: {
          question: 'La "carte Vitale" is your…',
          options: ['health insurance card', 'prescription', 'appointment'],
          correct: 'health insurance card',
          explanation: 'la carte Vitale = French health insurance card.',
        },
      },
      {
        id: 'cl-doc-triage', name: 'Triage', icon: '🤒',
        narrative: 'A nurse asks what is wrong.',
        phrases: [
          { fr: 'J’ai de la fièvre.', en: 'I have a fever.' },
          { fr: 'J’ai mal à la tête.', en: 'I have a headache.' },
          { fr: 'J’ai mal au ventre.', en: 'I have a stomach ache.' },
          { fr: 'Je me suis blessé à la jambe.', en: 'I hurt my leg.' },
          { fr: 'J’ai eu un accident.', en: 'I had an accident.' },
        ],
        quiz: {
          question: '"J’ai mal à la tête." means I have a…',
          options: ['headache', 'stomach ache', 'fever'],
          correct: 'headache',
          explanation: 'la tête = head; avoir mal à = to have pain in. le ventre = belly.',
        },
      },
      {
        id: 'cl-doc-exam', name: 'The exam', icon: '🩺',
        narrative: 'The doctor examines you.',
        phrases: [
          { fr: 'Où avez-vous mal ?', en: 'Where does it hurt?' },
          { fr: 'Depuis quand avez-vous cela ?', en: 'Since when have you had this?' },
          { fr: 'Respirez profondément.', en: 'Breathe in deeply.' },
        ],
        quiz: {
          question: '"Où avez-vous mal ?" asks…',
          options: ['where it hurts', 'since when', 'your name'],
          correct: 'where it hurts',
          explanation: 'avoir mal = to hurt; où = where.',
        },
      },
      {
        id: 'cl-doc-medicine', name: 'Medicine', icon: '💊',
        narrative: 'You get a prescription for the pharmacy.',
        phrases: [
          { fr: 'J’ai besoin d’une ordonnance.', en: 'I need a prescription.' },
          { fr: 'Prenez le comprimé trois fois par jour.', en: 'Take the tablet three times a day.' },
          { fr: 'Où est la pharmacie ?', en: 'Where is the pharmacy?' },
        ],
        quiz: {
          question: '"la pharmacie" is the…',
          options: ['pharmacy', 'hospital', 'doctor'],
          correct: 'pharmacy',
          explanation: 'la pharmacie = pharmacy; l’ordonnance = prescription.',
        },
      },
      {
        id: 'cl-doc-note', name: 'Sick note', icon: '📄',
        narrative: 'You need proof for work.',
        phrases: [
          { fr: 'J’ai besoin d’un arrêt de travail.', en: 'I need a sick note.' },
          { fr: 'Pouvez-vous me faire un certificat médical ?', en: 'Can you issue me a medical certificate?' },
        ],
        quiz: {
          question: '"un arrêt de travail" is a…',
          options: ['sick note', 'prescription', 'bill'],
          correct: 'sick note',
          explanation: 'l’arrêt de travail = sick note; le certificat médical = medical certificate.',
        },
      },
    ],
  },

  {
    id: 'public-services', name: 'Public Services', icon: '🏛️', accent: '#4a7a8c',
    tagline: 'Registration, visa, paperwork', pos: { x: 32, y: 83 },
    stages: [
      {
        id: 'cl-pub-appointment', name: 'Book an appointment', icon: '📅',
        narrative: 'Almost everything here needs a rendez-vous first.',
        phrases: [
          { fr: 'Je voudrais prendre rendez-vous.', en: "I'd like to make an appointment." },
          { fr: 'Avez-vous un rendez-vous de libre ?', en: 'Do you have an appointment available?' },
        ],
        quiz: {
          question: '"le rendez-vous" means…',
          options: ['appointment', 'form', 'ID card'],
          correct: 'appointment',
          explanation: 'prendre rendez-vous = to make an appointment.',
        },
      },
      {
        id: 'cl-pub-anmeldung', name: 'Proof of address', icon: '🏠',
        narrative: 'For most paperwork in France you must prove where you live (justificatif de domicile).',
        phrases: [
          { fr: 'Voici mon contrat de location.', en: 'Here is my rental contract.' },
          { fr: 'J’ai besoin d’un justificatif de domicile.', en: 'I need proof of address.' },
          { fr: 'Voici ma facture d’électricité.', en: 'Here is my electricity bill.' },
        ],
        quiz: {
          question: '"le contrat de location" is your…',
          options: ['rental contract', 'ID card', 'passport'],
          correct: 'rental contract',
          explanation: 'la location = rental; le contrat = contract.',
        },
      },
      {
        id: 'cl-pub-visa', name: 'Visa & residence', icon: '🛃',
        narrative: 'For a longer stay you deal with the préfecture.',
        phrases: [
          { fr: 'J’ai besoin d’un titre de séjour.', en: 'I need a residence permit.' },
          { fr: 'Où est la préfecture ?', en: 'Where is the prefecture?' },
          { fr: 'Quel visa me faut-il ?', en: 'Which visa do I need?' },
        ],
        quiz: {
          question: '"le titre de séjour" is a…',
          options: ['residence permit', 'driving licence', 'health insurance'],
          correct: 'residence permit',
          explanation: 'le séjour = stay; le titre de séjour = residence permit.',
        },
      },
      {
        id: 'cl-pub-problems', name: 'Sort out a problem', icon: '❓',
        narrative: 'Something is off with your paperwork.',
        phrases: [
          { fr: 'Quels documents me faut-il ?', en: 'Which documents do I need?' },
          { fr: 'J’ai le mauvais formulaire.', en: 'I have the wrong form.' },
          { fr: 'Pouvez-vous m’expliquer ?', en: 'Can you explain that?' },
        ],
        quiz: {
          question: '"les documents" are…',
          options: ['documents', 'appointments', 'offices'],
          correct: 'documents',
          explanation: 'les documents = documents/paperwork; le formulaire = form.',
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
