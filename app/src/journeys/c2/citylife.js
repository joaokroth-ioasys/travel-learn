// City Life content for the Chile journey.
// Spanish counterpart of de/citylife.js — same 7 locations, ids, icons, accents
// and stage structure; phrases translated to Chilean Spanish ({ es, en } — the
// shape RouteJourney's native line already renders). `pos` is tuned to the
// Chile diorama (public/city-life-map-chile.png). Visit sequence:
// gym → tourist guide → doctor → public services → restaurant → train → airport.

const LOCATIONS = [
  {
    id: 'gym', name: 'Gym', icon: '🏋️', accent: '#7a5cc0',
    tagline: 'Join, train, share the machines', pos: { x: 15, y: 35 },
    stages: [
      {
        id: 'cl-gym-join', name: 'Sign up', icon: '📝',
        narrative: 'First visit. You go to the front desk to become a member.',
        phrases: [
          { es: 'Quisiera inscribirme.', en: "I'd like to sign up." },
          { es: '¿Cuánto cuesta la membresía?', en: 'How much is the membership?' },
          { es: '¿Hay una clase de prueba?', en: 'Is there a trial class?' },
        ],
        quiz: {
          question: '"la membresía" means…',
          options: ['membership', 'trial day', 'locker'],
          correct: 'membership',
          explanation: 'la membresía = membership; inscribirse = to sign up.',
        },
      },
      {
        id: 'cl-gym-locker', name: 'Changing room', icon: '🔑',
        narrative: 'You look for somewhere to change and stash your things.',
        phrases: [
          { es: '¿Dónde está el camarín?', en: 'Where is the changing room?' },
          { es: '¿Dónde están los casilleros?', en: 'Where are the lockers?' },
          { es: '¿Tiene un candado?', en: 'Do you have a lock?' },
        ],
        quiz: {
          question: '"los casilleros" are…',
          options: ['lockers', 'towels', 'showers'],
          correct: 'lockers',
          explanation: 'el casillero = locker; el camarín = changing room.',
        },
      },
      {
        id: 'cl-gym-plan', name: 'Ask for a plan', icon: '📈',
        narrative: 'A trainer offers to put together a routine for you.',
        phrases: [
          { es: '¿Me puede hacer una rutina de entrenamiento?', en: 'Can you make me a training plan?' },
          { es: 'Soy principiante.', en: "I'm a beginner." },
          { es: 'Quiero ganar músculo.', en: 'I want to build muscle.' },
          { es: 'Quiero bajar de peso.', en: 'I want to lose weight.' },
        ],
        quiz: {
          question: '"Quiero bajar de peso." means…',
          options: ['I want to lose weight', 'I want to build muscle', "I'm a beginner"],
          correct: 'I want to lose weight',
          explanation: 'bajar de peso = to lose weight; ganar músculo = to build muscle.',
        },
      },
      {
        id: 'cl-gym-share', name: 'Share a machine', icon: '🔁',
        narrative: 'The machine you want is in use. You ask to work in.',
        phrases: [
          { es: '¿Está libre la máquina?', en: 'Is this machine free?' },
          { es: '¿Puedo alternar con usted?', en: 'Can I work in between your sets?' },
          { es: '¿Cuántas series le quedan?', en: 'How many sets left?' },
        ],
        quiz: {
          question: '"¿Está libre la máquina?" asks if the machine is…',
          options: ['free / available', 'broken', 'heavy'],
          correct: 'free / available',
          explanation: 'la máquina = the machine; libre = free/available.',
        },
      },
      {
        id: 'cl-gym-exercises', name: 'The exercises', icon: '💪',
        narrative: 'By muscle group — la espalda (back), el pecho (chest), las piernas (legs), los hombros (shoulders). Common lifts follow.',
        phrases: [
          { es: 'El remo y el jalón para la espalda.', en: 'Rows and lat pulldown for the back.' },
          { es: 'El press de banca y las aperturas para el pecho.', en: 'Bench press and fly for the chest.' },
          { es: 'Las sentadillas y el peso muerto para las piernas.', en: 'Squats and deadlifts for the legs.' },
          { es: 'Tres series de doce repeticiones.', en: 'Three sets of twelve reps.' },
        ],
        quiz: {
          question: 'Which Spanish word is the "squat"?',
          options: ['la sentadilla', 'el press de banca', 'el remo'],
          correct: 'la sentadilla',
          explanation: 'la sentadilla = squat, el peso muerto = deadlift, el press de banca = bench press.',
        },
      },
    ],
  },

  {
    id: 'tourist-guide', name: 'Tourist Guide', icon: '🗺️', accent: '#3a9188',
    tagline: 'The tour and the sights', pos: { x: 70, y: 13 },
    stages: [
      {
        id: 'cl-tour-info', name: 'Tour info', icon: '🕒',
        narrative: 'You meet the guide and get the plan for the day.',
        phrases: [
          { es: '¿A qué hora empieza el tour?', en: 'When does the tour start?' },
          { es: '¿A dónde vamos?', en: 'Where are we going?' },
          { es: '¿Cuánto dura el tour?', en: 'How long does the tour take?' },
        ],
        quiz: {
          question: '"la visita guiada" is a…',
          options: ['guided tour', 'map', 'ticket'],
          correct: 'guided tour',
          explanation: 'la visita guiada = guided tour; el guía = the guide.',
        },
      },
      {
        id: 'cl-tour-getthere', name: 'Getting there', icon: '🚶',
        narrative: 'You ask how to reach the first stop.',
        phrases: [
          { es: '¿Cómo llego al museo?', en: 'How do I get to the museum?' },
          { es: '¿Se puede llegar a pie?', en: 'Is it reachable on foot?' },
          { es: 'Tome el metro.', en: 'Take the subway.' },
        ],
        quiz: {
          question: '"a pie" means…',
          options: ['on foot', 'by subway', 'by taxi'],
          correct: 'on foot',
          explanation: 'a pie = on foot; el metro = subway.',
        },
      },
      {
        id: 'cl-tour-sights', name: 'The sights', icon: '📸',
        narrative: 'Famous Chilean landmarks: el cerro San Cristóbal, Valparaíso, el Palacio de La Moneda, la Isla de Pascua, las Torres del Paine.',
        phrases: [
          { es: 'El cerro San Cristóbal es famoso.', en: 'Cerro San Cristóbal is famous.' },
          { es: 'Valparaíso es impresionante.', en: 'Valparaíso is impressive.' },
          { es: 'Quisiera visitar la Isla de Pascua.', en: "I'd like to visit Easter Island." },
        ],
        quiz: {
          question: 'Which is a famous landmark in Santiago?',
          options: ['el cerro San Cristóbal', 'la Isla de Pascua', 'las Torres del Paine'],
          correct: 'el cerro San Cristóbal',
          explanation: 'Cerro San Cristóbal is in Santiago; Easter Island and Torres del Paine are far from the capital.',
        },
      },
      {
        id: 'cl-tour-ticket', name: 'Buy entry', icon: '🎫',
        narrative: 'At the entrance you buy tickets.',
        phrases: [
          { es: 'Dos entradas para el tour, por favor.', en: 'Two tickets for the tour, please.' },
          { es: '¿Hay descuento?', en: 'Is there a discount?' },
          { es: 'La entrada es gratis.', en: 'Admission is free.' },
        ],
        quiz: {
          question: '"¿Hay descuento?" asks about a…',
          options: ['discount', 'tour guide', 'free map'],
          correct: 'discount',
          explanation: 'el descuento = discount; la entrada = admission.',
        },
      },
    ],
  },

  {
    id: 'doctor', name: 'Doctor & Hospital', icon: '🏥', accent: '#d06b8c',
    tagline: 'Feeling ill and getting help', pos: { x: 66, y: 38 },
    stages: [
      {
        id: 'cl-doc-reception', name: 'Reception', icon: '🪪',
        narrative: 'You check in at the desk.',
        phrases: [
          { es: 'Tengo una hora.', en: 'I have an appointment.' },
          { es: 'Aquí está mi credencial de salud.', en: 'Here is my health insurance card.' },
          { es: 'Necesito un médico.', en: 'I need a doctor.' },
        ],
        quiz: {
          question: 'La "credencial de salud" is your…',
          options: ['health insurance card', 'prescription', 'appointment'],
          correct: 'health insurance card',
          explanation: 'la credencial de salud = health insurance card (FONASA/Isapre).',
        },
      },
      {
        id: 'cl-doc-triage', name: 'Triage', icon: '🤒',
        narrative: 'A nurse asks what is wrong.',
        phrases: [
          { es: 'Tengo fiebre.', en: 'I have a fever.' },
          { es: 'Me duele la cabeza.', en: 'I have a headache.' },
          { es: 'Me duele la guata.', en: 'I have a stomach ache.' },
          { es: 'Me lesioné la pierna.', en: 'I hurt my leg.' },
          { es: 'Tuve un accidente.', en: 'I had an accident.' },
        ],
        quiz: {
          question: '"Me duele la cabeza." means I have a…',
          options: ['headache', 'stomach ache', 'fever'],
          correct: 'headache',
          explanation: 'la cabeza = head; me duele = it hurts me. la guata = belly (Chile).',
        },
      },
      {
        id: 'cl-doc-exam', name: 'The exam', icon: '🩺',
        narrative: 'The doctor examines you.',
        phrases: [
          { es: '¿Dónde le duele?', en: 'Where does it hurt?' },
          { es: '¿Desde cuándo tiene esto?', en: 'Since when have you had this?' },
          { es: 'Respire profundo.', en: 'Breathe in deeply.' },
        ],
        quiz: {
          question: '"¿Dónde le duele?" asks…',
          options: ['where it hurts', 'since when', 'your name'],
          correct: 'where it hurts',
          explanation: 'doler = to hurt; dónde = where.',
        },
      },
      {
        id: 'cl-doc-medicine', name: 'Medicine', icon: '💊',
        narrative: 'You get a prescription for the pharmacy.',
        phrases: [
          { es: 'Necesito una receta.', en: 'I need a prescription.' },
          { es: 'Tome la pastilla tres veces al día.', en: 'Take the tablet three times a day.' },
          { es: '¿Dónde está la farmacia?', en: 'Where is the pharmacy?' },
        ],
        quiz: {
          question: '"la farmacia" is the…',
          options: ['pharmacy', 'hospital', 'doctor'],
          correct: 'pharmacy',
          explanation: 'la farmacia = pharmacy; la receta = prescription.',
        },
      },
      {
        id: 'cl-doc-note', name: 'Sick note', icon: '📄',
        narrative: 'You need proof for work.',
        phrases: [
          { es: 'Necesito una licencia médica.', en: 'I need a sick note.' },
          { es: '¿Me puede dar un certificado médico?', en: 'Can you issue me a medical certificate?' },
        ],
        quiz: {
          question: '"la licencia médica" is a…',
          options: ['sick note', 'prescription', 'bill'],
          correct: 'sick note',
          explanation: 'la licencia médica = sick note; el certificado médico = medical certificate.',
        },
      },
    ],
  },

  {
    id: 'public-services', name: 'Public Services', icon: '🏛️', accent: '#4a7a8c',
    tagline: 'Registration, visa, paperwork', pos: { x: 35, y: 23 },
    stages: [
      {
        id: 'cl-pub-appointment', name: 'Book an appointment', icon: '📅',
        narrative: 'Almost everything here needs an appointment (pedir hora) first.',
        phrases: [
          { es: 'Quisiera pedir una hora.', en: "I'd like to make an appointment." },
          { es: '¿Tiene una hora disponible?', en: 'Do you have an appointment available?' },
        ],
        quiz: {
          question: '"pedir hora" means to…',
          options: ['make an appointment', 'fill a form', 'get an ID card'],
          correct: 'make an appointment',
          explanation: 'pedir hora = to make an appointment (Chile).',
        },
      },
      {
        id: 'cl-pub-anmeldung', name: 'Proof of address', icon: '🏠',
        narrative: 'For most paperwork in Chile you must prove where you live.',
        phrases: [
          { es: 'Aquí está mi contrato de arriendo.', en: 'Here is my rental contract.' },
          { es: 'Necesito un certificado de residencia.', en: 'I need proof of residence.' },
          { es: 'Aquí está mi cuenta de la luz.', en: 'Here is my electricity bill.' },
        ],
        quiz: {
          question: '"el contrato de arriendo" is your…',
          options: ['rental contract', 'ID card', 'passport'],
          correct: 'rental contract',
          explanation: 'el arriendo = rental; el contrato = contract.',
        },
      },
      {
        id: 'cl-pub-visa', name: 'Visa & residence', icon: '🛃',
        narrative: 'For a longer stay you deal with the immigration office (Extranjería).',
        phrases: [
          { es: 'Necesito un permiso de residencia.', en: 'I need a residence permit.' },
          { es: '¿Dónde está Extranjería?', en: 'Where is the immigration office?' },
          { es: '¿Qué visa necesito?', en: 'Which visa do I need?' },
        ],
        quiz: {
          question: '"el permiso de residencia" is a…',
          options: ['residence permit', 'driving licence', 'health insurance'],
          correct: 'residence permit',
          explanation: 'la residencia = residence; el permiso = permit.',
        },
      },
      {
        id: 'cl-pub-problems', name: 'Sort out a problem', icon: '❓',
        narrative: 'Something is off with your paperwork.',
        phrases: [
          { es: '¿Qué documentos necesito?', en: 'Which documents do I need?' },
          { es: 'Tengo el formulario equivocado.', en: 'I have the wrong form.' },
          { es: '¿Me lo puede explicar?', en: 'Can you explain that?' },
        ],
        quiz: {
          question: '"los documentos" are…',
          options: ['documents', 'appointments', 'offices'],
          correct: 'documents',
          explanation: 'los documentos = documents/paperwork; el formulario = form.',
        },
      },
    ],
  },

  {
    id: 'restaurant', name: 'Restaurant', icon: '🍽️', accent: '#c0504d',
    tagline: 'A table, a meal, the bill', pos: { x: 33, y: 66 },
    stages: [
      {
        id: 'cl-rest-arrive', name: 'Arrive', icon: '🪑',
        narrative: 'You walk in for dinner.',
        phrases: [
          { es: 'Tengo una reserva.', en: 'I have a reservation.' },
          { es: 'Una mesa para dos, por favor.', en: 'A table for two, please.' },
        ],
        quiz: {
          question: '"una mesa para dos" is a table for…',
          options: ['two', 'ten', 'one'],
          correct: 'two',
          explanation: 'dos = two; reservar = to reserve.',
        },
      },
      {
        id: 'cl-rest-menu', name: 'The menu', icon: '📖',
        narrative: 'The waiter brings the menus.',
        phrases: [
          { es: 'La carta, por favor.', en: 'The menu, please.' },
          { es: 'La carta de bebidas, por favor.', en: 'The drinks menu, please.' },
          { es: '¿Cuál es el plato del día?', en: "What's the dish of the day?" },
        ],
        quiz: {
          question: '"la carta de bebidas" is the…',
          options: ['drinks menu', 'food menu', 'bill'],
          correct: 'drinks menu',
          explanation: 'las bebidas = drinks; la carta = the menu.',
        },
      },
      {
        id: 'cl-rest-order', name: 'Order by course', icon: '🍲',
        narrative: 'Courses: la entrada (sopa, ensalada), el plato principal (lomo a lo pobre, cazuela, pastas), el postre (helado, torta), plus las bebidas (vino, cerveza, agua, jugo).',
        phrases: [
          { es: 'De entrada, la sopa.', en: "As a starter I'll have the soup." },
          { es: 'De plato principal, el lomo a lo pobre.', en: 'For the main, the lomo a lo pobre.' },
          { es: 'De postre, un helado.', en: 'For dessert, ice cream.' },
        ],
        quiz: {
          question: '"la entrada" is the…',
          options: ['starter', 'main course', 'dessert'],
          correct: 'starter',
          explanation: 'la entrada = starter, el plato principal = main, el postre = dessert.',
        },
      },
      {
        id: 'cl-rest-special', name: 'Special requests', icon: '🥗',
        narrative: 'You have a few dietary needs.',
        phrases: [
          { es: 'Soy vegetariano.', en: "I'm vegetarian." },
          { es: 'Tengo una alergia.', en: 'I have an allergy.' },
          { es: 'Sin cebolla, por favor.', en: 'Without onions, please.' },
        ],
        quiz: {
          question: '"Sin cebolla, por favor." means without…',
          options: ['onions', 'salt', 'meat'],
          correct: 'onions',
          explanation: 'sin = without; la cebolla = onion.',
        },
      },
      {
        id: 'cl-rest-pay', name: 'Pay', icon: '🧾',
        narrative: 'Great meal. Time to settle up.',
        phrases: [
          { es: 'La cuenta, por favor.', en: 'The bill, please.' },
          { es: 'Por separado, por favor.', en: 'Separately, please.' },
          { es: 'Estuvo delicioso.', en: 'The food was delicious.' },
        ],
        quiz: {
          question: '"La cuenta, por favor." asks for the…',
          options: ['bill', 'menu', 'waiter'],
          correct: 'bill',
          explanation: 'la cuenta = the bill; delicioso = delicious.',
        },
      },
    ],
  },

  {
    id: 'train-station', name: 'Train Station', icon: '🚉', accent: '#5b8c5a',
    tagline: 'Find your way and board', pos: { x: 56, y: 56 },
    stages: [
      {
        id: 'cl-train-orient', name: 'Orient yourself', icon: '🧭',
        narrative: 'The station is huge. You stop someone to ask the way.',
        phrases: [
          { es: 'Disculpe, ¿cómo llego al andén 7?', en: 'Excuse me, how do I get to platform 7?' },
          { es: '¿Dónde está la máquina de boletos?', en: 'Where is the ticket machine?' },
          { es: '¿Me puede ayudar?', en: 'Can you help me?' },
        ],
        quiz: {
          question: 'An "andén" is a…',
          options: ['platform', 'ticket', 'exit'],
          correct: 'platform',
          explanation: 'el andén = the platform your train departs from.',
        },
      },
      {
        id: 'cl-train-ticket', name: 'Buy a ticket', icon: '🎟️',
        narrative: 'At the counter you buy your ticket.',
        phrases: [
          { es: 'Un boleto a Santiago, por favor.', en: 'A ticket to Santiago, please.' },
          { es: '¿Ida o ida y vuelta?', en: 'One-way or return?' },
          { es: '¿Cuánto cuesta un boleto?', en: 'How much is a ticket?' },
        ],
        quiz: {
          question: '"ida y vuelta" means…',
          options: ['return / round trip', 'one-way', 'first class'],
          correct: 'return / round trip',
          explanation: 'ida y vuelta = there and back; ida = one-way.',
        },
      },
      {
        id: 'cl-train-platform', name: 'Find the platform', icon: '🚏',
        narrative: 'Ticket in hand, you check which platform your train leaves from.',
        phrases: [
          { es: '¿De qué andén sale el tren?', en: 'Which platform does the train leave from?' },
          { es: 'El tren sale del andén 3.', en: 'The train leaves from platform 3.' },
        ],
        quiz: {
          question: 'How do you ask which platform the train leaves from?',
          options: ['¿De qué andén sale el tren?', '¿Cuánto cuesta el viaje?', '¿Tengo que hacer transbordo?'],
          correct: '¿De qué andén sale el tren?',
          explanation: 'salir = to depart; de qué andén = from which platform.',
        },
      },
      {
        id: 'cl-train-boarding', name: 'Waiting to board', icon: '⏳',
        narrative: 'You wait on the platform. Announcements crackle overhead.',
        phrases: [
          { es: 'El tren tiene 10 minutos de atraso.', en: 'The train is 10 minutes late.' },
          { es: '¡Suban al tren, por favor!', en: 'All aboard!' },
          { es: 'Cuidado, las puertas se cierran.', en: 'Careful, the doors are closing.' },
        ],
        quiz: {
          question: '"el atraso" means…',
          options: ['delay', 'platform', 'ticket'],
          correct: 'delay',
          explanation: 'el atraso = delay; subir = to board.',
        },
      },
      {
        id: 'cl-train-transfer', name: 'Changing trains', icon: '🔀',
        narrative: 'Your route needs a change midway.',
        phrases: [
          { es: '¿Tengo que hacer transbordo?', en: 'Do I have to change trains?' },
          { es: 'Hago transbordo en Valparaíso.', en: 'I change in Valparaíso.' },
        ],
        quiz: {
          question: '"hacer transbordo" means…',
          options: ['to change trains', 'to get off for good', 'to buy a ticket'],
          correct: 'to change trains',
          explanation: 'el transbordo = transfer/change of trains.',
        },
      },
    ],
  },

  {
    id: 'airport', name: 'Airport', icon: '✈️', accent: '#3a7bd5',
    tagline: 'From check-in to taxi', pos: { x: 80, y: 60 },
    stages: [
      {
        id: 'cl-airport-checkin', name: 'Check-in', icon: '🛄',
        narrative: 'You arrive at the terminal. First stop: the check-in counter to drop your bag and get your boarding pass.',
        phrases: [
          { es: 'Quisiera hacer el check-in.', en: "I'd like to check in." },
          { es: 'Aquí está mi pasaporte.', en: 'Here is my passport.' },
          { es: 'Un asiento junto a la ventana, por favor.', en: 'A window seat, please.' },
          { es: 'Un asiento de pasillo, por favor.', en: 'An aisle seat, please.' },
        ],
        quiz: {
          question: 'How do you ask for a window seat?',
          options: ['Un asiento junto a la ventana, por favor.', 'Un asiento de pasillo, por favor.', '¿Dónde está la puerta de embarque?'],
          correct: 'Un asiento junto a la ventana, por favor.',
          explanation: 'la ventana = window, el pasillo = aisle.',
        },
      },
      {
        id: 'cl-airport-security', name: 'Security', icon: '🛂',
        narrative: 'Boarding pass in hand, you head to the security check.',
        phrases: [
          { es: 'Ponga su bolso en la cinta, por favor.', en: 'Please put your bag on the belt.' },
          { es: '¿Lleva líquidos consigo?', en: 'Do you have any liquids with you?' },
          { es: '¿Tengo que sacarme los zapatos?', en: 'Do I have to take off my shoes?' },
        ],
        quiz: {
          question: '"¿Lleva líquidos consigo?" asks about…',
          options: ['liquids', 'shoes', 'your laptop'],
          correct: 'liquids',
          explanation: 'los líquidos = liquids — limited in hand luggage.',
        },
      },
      {
        id: 'cl-airport-gate', name: 'Boarding', icon: '🎫',
        narrative: 'You find your gate and wait for boarding to begin.',
        phrases: [
          { es: '¿Dónde está la puerta de embarque?', en: 'Where is the gate?' },
          { es: 'Su tarjeta de embarque, por favor.', en: 'Your boarding pass, please.' },
          { es: 'El embarque comienza a las 10.', en: 'Boarding begins at 10.' },
        ],
        quiz: {
          question: 'Your "tarjeta de embarque" is your…',
          options: ['boarding pass', 'suitcase', 'passport'],
          correct: 'boarding pass',
          explanation: 'la tarjeta de embarque = boarding pass.',
        },
      },
      {
        id: 'cl-airport-baggage', name: 'Baggage', icon: '🧳',
        narrative: 'After landing you go to baggage claim to pick up your suitcase.',
        phrases: [
          { es: '¿Dónde está el retiro de equipaje?', en: 'Where is baggage claim?' },
          { es: 'Mi maleta no llegó.', en: "My suitcase didn't arrive." },
          { es: 'Mi equipaje está dañado.', en: 'My luggage is damaged.' },
        ],
        quiz: {
          question: 'How do you say your suitcase did not arrive?',
          options: ['Mi maleta no llegó.', '¿Dónde está el retiro de equipaje?', 'Necesito un taxi.'],
          correct: 'Mi maleta no llegó.',
          explanation: 'la maleta = suitcase; llegar = to arrive.',
        },
      },
      {
        id: 'cl-airport-money', name: 'Cash', icon: '💶',
        narrative: 'You need some cash before leaving the airport.',
        phrases: [
          { es: '¿Dónde está el cajero automático?', en: 'Where is the ATM?' },
          { es: '¿Dónde puedo cambiar dinero?', en: 'Where can I exchange money?' },
          { es: 'Quisiera retirar dinero.', en: "I'd like to withdraw money." },
        ],
        quiz: {
          question: 'El "cajero automático" is a…',
          options: ['cash machine (ATM)', 'exchange office', 'bank teller'],
          correct: 'cash machine (ATM)',
          explanation: 'el cajero automático = ATM; retirar dinero = to withdraw money.',
        },
      },
      {
        id: 'cl-airport-taxi', name: 'Taxi', icon: '🚕',
        narrative: 'Finally you grab a taxi into the city.',
        phrases: [
          { es: 'Necesito un taxi.', en: 'I need a taxi.' },
          { es: 'Al centro, por favor.', en: 'To the city centre, please.' },
          { es: '¿Cuánto cuesta el viaje?', en: 'How much is the ride?' },
        ],
        quiz: {
          question: '"¿Cuánto cuesta el viaje?" asks about the…',
          options: ['price of the ride', 'direction', 'time'],
          correct: 'price of the ride',
          explanation: 'el viaje = the ride/trip; ¿cuánto cuesta…? = how much is…?',
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
