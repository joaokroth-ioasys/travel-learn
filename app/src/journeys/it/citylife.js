// City Life content for the Italian journey (Portuguese-speaking learner).
// Each location is a mini-journey: a sequence of `stages` the learner walks
// through (RouteJourney shape — see RouteJourney.jsx). `pos` places the pin on
// the illustrated city map (percent of the map box). Stages have no photo or
// lesson — WikiPhoto falls back to an accent hero, RouteJourney hides the lesson
// CTA. Phrases are { it, en }: `it` is the Italian line, `en` its Portuguese
// gloss. Stage ids are globally unique (routeDone is one flat set per journey).
// Italian text stays Italian; questions, options and glosses are in Portuguese.

const LOCATIONS = [
  {
    id: 'airport', name: 'Aeroporto', icon: '✈️', accent: '#3a7bd5',
    tagline: 'Dal check-in al taxi', pos: { x: 70, y: 12 },
    stages: [
      {
        id: 'cl-airport-checkin', name: 'Check-in', icon: '🛄',
        narrative: 'Arrivi al terminal. Prima tappa: il banco del check-in per lasciare il bagaglio e ritirare la carta d’imbarco.',
        phrases: [
          { it: 'Vorrei fare il check-in.', en: 'Eu queria fazer o check-in.' },
          { it: 'Ecco il mio passaporto.', en: 'Aqui está o meu passaporte.' },
          { it: 'Vorrei un posto vicino al finestrino.', en: 'Um lugar na janela, por favor.' },
          { it: 'Vorrei un posto vicino al corridoio.', en: 'Um lugar no corredor, por favor.' },
        ],
        quiz: {
          question: 'Como se pede um lugar na janela?',
          options: ['Vorrei un posto vicino al finestrino.', 'Vorrei un posto vicino al corridoio.', 'Dov’è il gate?'],
          correct: 'Vorrei un posto vicino al finestrino.',
          explanation: 'finestrino = janela, corridoio = corredor.',
        },
      },
      {
        id: 'cl-airport-security', name: 'Sicurezza', icon: '🛂',
        narrative: 'Carta d’imbarco in mano, vai al controllo di sicurezza.',
        phrases: [
          { it: 'Metta la borsa sul nastro, per favore.', en: 'Coloque a bolsa na esteira, por favor.' },
          { it: 'Ha dei liquidi con sé?', en: 'Você tem líquidos com você?' },
          { it: 'Devo togliermi le scarpe?', en: 'Preciso tirar os sapatos?' },
        ],
        quiz: {
          question: '"Ha dei liquidi con sé?" pergunta sobre…',
          options: ['líquidos', 'sapatos', 'seu notebook'],
          correct: 'líquidos',
          explanation: 'liquidi = líquidos — limitados na bagagem de mão.',
        },
      },
      {
        id: 'cl-airport-gate', name: 'Imbarco', icon: '🎫',
        narrative: 'Trovi il gate e aspetti l’inizio dell’imbarco.',
        phrases: [
          { it: 'Dov’è il gate?', en: 'Onde fica o portão?' },
          { it: 'La carta d’imbarco, per favore.', en: 'Seu cartão de embarque, por favor.' },
          { it: 'L’imbarco inizia alle dieci.', en: 'O embarque começa às dez.' },
        ],
        quiz: {
          question: 'A sua "carta d’imbarco" é o seu…',
          options: ['cartão de embarque', 'mala', 'passaporte'],
          correct: 'cartão de embarque',
          explanation: 'la carta d’imbarco = cartão de embarque.',
        },
      },
      {
        id: 'cl-airport-baggage', name: 'Bagagli', icon: '🧳',
        narrative: 'Dopo l’atterraggio vai al ritiro bagagli per prendere la valigia.',
        phrases: [
          { it: 'Dov’è il ritiro bagagli?', en: 'Onde fica a esteira de bagagem?' },
          { it: 'La mia valigia non è arrivata.', en: 'A minha mala não chegou.' },
          { it: 'Il mio bagaglio è danneggiato.', en: 'A minha bagagem está danificada.' },
        ],
        quiz: {
          question: 'Como você diz que a sua mala não chegou?',
          options: ['La mia valigia non è arrivata.', 'Dov’è il ritiro bagagli?', 'Ho bisogno di un taxi.'],
          correct: 'La mia valigia non è arrivata.',
          explanation: 'la valigia = mala; non è arrivata = não chegou.',
        },
      },
      {
        id: 'cl-airport-money', name: 'Contanti', icon: '💶',
        narrative: 'Ti servono dei contanti prima di lasciare l’aeroporto.',
        phrases: [
          { it: 'Dov’è il bancomat?', en: 'Onde fica o caixa eletrônico?' },
          { it: 'Dove posso cambiare i soldi?', en: 'Onde posso trocar dinheiro?' },
          { it: 'Vorrei prelevare dei contanti.', en: 'Eu queria sacar dinheiro.' },
        ],
        quiz: {
          question: '"il bancomat" é um…',
          options: ['caixa eletrônico', 'casa de câmbio', 'caixa do banco'],
          correct: 'caixa eletrônico',
          explanation: 'il bancomat = caixa eletrônico; cambiare i soldi = trocar dinheiro.',
        },
      },
      {
        id: 'cl-airport-taxi', name: 'Taxi', icon: '🚕',
        narrative: 'Infine prendi un taxi per andare in centro.',
        phrases: [
          { it: 'Ho bisogno di un taxi.', en: 'Eu preciso de um táxi.' },
          { it: 'In centro, per favore.', en: 'Para o centro, por favor.' },
          { it: 'Quanto costa la corsa?', en: 'Quanto custa a corrida?' },
        ],
        quiz: {
          question: '"Quanto costa la corsa?" pergunta sobre o…',
          options: ['preço da corrida', 'caminho', 'horário'],
          correct: 'preço da corrida',
          explanation: 'la corsa = a corrida/tarifa; quanto costa = quanto custa.',
        },
      },
    ],
  },
  {
    id: 'train-station', name: 'Stazione', icon: '🚉', accent: '#5b8c5a',
    tagline: 'Il Frecciarossa: trova il binario e sali', pos: { x: 28, y: 22 },
    stages: [
      {
        id: 'cl-train-orient', name: 'Orientarsi', icon: '🧭',
        narrative: 'La stazione è enorme. Fermi qualcuno per chiedere la strada.',
        phrases: [
          { it: 'Scusi, dov’è la biglietteria?', en: 'Com licença, onde fica a bilheteria?' },
          { it: 'Dove sono le macchinette dei biglietti?', en: 'Onde ficam as máquinas de bilhete?' },
          { it: 'Mi può aiutare?', en: 'Você pode me ajudar?' },
        ],
        quiz: {
          question: 'Uma "biglietteria" é uma…',
          options: ['bilheteria', 'sala de espera', 'plataforma'],
          correct: 'bilheteria',
          explanation: 'la biglietteria = bilheteria; il biglietto = bilhete.',
        },
      },
      {
        id: 'cl-train-ticket', name: 'Il biglietto', icon: '🎟️',
        narrative: 'Compri un biglietto per la prossima città.',
        phrases: [
          { it: 'Un biglietto per Firenze, per favore.', en: 'Um bilhete para Florença, por favor.' },
          { it: 'Solo andata o andata e ritorno?', en: 'Só ida ou ida e volta?' },
          { it: 'Solo andata, grazie.', en: 'Só ida, obrigado.' },
          { it: 'A che ora parte il prossimo treno?', en: 'A que horas sai o próximo trem?' },
        ],
        quiz: {
          question: 'Como se pede um bilhete só de ida?',
          options: ['Solo andata, grazie.', 'Andata e ritorno.', 'Dov’è il binario?'],
          correct: 'Solo andata, grazie.',
          explanation: 'solo andata = só ida; andata e ritorno = ida e volta.',
        },
      },
      {
        id: 'cl-train-platform', name: 'Il binario', icon: '🚆',
        narrative: 'Biglietto in mano, cerchi il binario giusto.',
        phrases: [
          { it: 'Da quale binario parte il treno?', en: 'De qual plataforma o trem sai?' },
          { it: 'Il treno è in ritardo?', en: 'O trem está atrasado?' },
          { it: 'Devo convalidare il biglietto?', en: 'Preciso validar o bilhete?' },
        ],
        quiz: {
          question: '"il binario" é a…',
          options: ['plataforma / trilho', 'bilhete', 'horário'],
          correct: 'plataforma / trilho',
          explanation: 'il binario = plataforma/trilho; in ritardo = atrasado.',
        },
      },
      {
        id: 'cl-train-onboard', name: 'A bordo', icon: '💺',
        narrative: 'Sali sul treno e cerchi il tuo posto.',
        phrases: [
          { it: 'Scusi, questo è il mio posto.', en: 'Com licença, este é o meu lugar.' },
          { it: 'È libero questo posto?', en: 'Este lugar está livre?' },
          { it: 'Questo treno ferma a Bologna?', en: 'Este trem para em Bolonha?' },
        ],
        quiz: {
          question: 'Como se pergunta se um lugar está livre?',
          options: ['È libero questo posto?', 'Questo è il mio posto.', 'Dov’è il vagone ristorante?'],
          correct: 'È libero questo posto?',
          explanation: 'libero = livre/disponível; il posto = o lugar.',
        },
      },
    ],
  },
  {
    id: 'doctor', name: 'Medico e Ospedale', icon: '🏥', accent: '#d06b8c',
    tagline: 'Sentirsi male e farsi aiutare', pos: { x: 80, y: 34 },
    stages: [
      {
        id: 'cl-doctor-symptom', name: 'I sintomi', icon: '🤒',
        narrative: 'Non ti senti bene. Vai in farmacia per spiegare cos’hai.',
        phrases: [
          { it: 'Non mi sento bene.', en: 'Não estou me sentindo bem.' },
          { it: 'Ho mal di testa.', en: 'Estou com dor de cabeça.' },
          { it: 'Ho la febbre.', en: 'Estou com febre.' },
          { it: 'Mi fa male lo stomaco.', en: 'Meu estômago está doendo.' },
        ],
        quiz: {
          question: 'Como você diz "estou com dor de cabeça"?',
          options: ['Ho mal di testa.', 'Ho la febbre.', 'Mi fa male lo stomaco.'],
          correct: 'Ho mal di testa.',
          explanation: 'mal di testa = dor de cabeça; la febbre = febre.',
        },
      },
      {
        id: 'cl-doctor-pharmacy', name: 'La farmacia', icon: '💊',
        narrative: 'Il farmacista ti chiede qualche dettaglio.',
        phrases: [
          { it: 'Ha qualcosa per il raffreddore?', en: 'Você tem algo para resfriado?' },
          { it: 'È senza ricetta?', en: 'É sem receita?' },
          { it: 'Quante volte al giorno?', en: 'Quantas vezes por dia?' },
        ],
        quiz: {
          question: '"È senza ricetta?" pergunta se precisa de uma…',
          options: ['receita', 'farmácia', 'consulta'],
          correct: 'receita',
          explanation: 'la ricetta = receita; senza = sem.',
        },
      },
      {
        id: 'cl-doctor-appointment', name: 'Dal medico', icon: '🩺',
        narrative: 'Serve un medico. Prendi un appuntamento.',
        phrases: [
          { it: 'Ho bisogno di un medico.', en: 'Eu preciso de um médico.' },
          { it: 'Vorrei un appuntamento.', en: 'Eu queria uma consulta.' },
          { it: 'È urgente.', en: 'É urgente.' },
        ],
        quiz: {
          question: 'Como você diz "eu preciso de um médico"?',
          options: ['Ho bisogno di un medico.', 'Vorrei un appuntamento.', 'Chiami un’ambulanza!'],
          correct: 'Ho bisogno di un medico.',
          explanation: 'il medico = médico; ho bisogno di = eu preciso de.',
        },
      },
      {
        id: 'cl-doctor-emergency', name: 'Emergenza', icon: '🚑',
        narrative: 'In caso di emergenza, devi saper chiedere aiuto in fretta.',
        phrases: [
          { it: 'Chiami un’ambulanza!', en: 'Chame uma ambulância!' },
          { it: 'È un’emergenza.', en: 'É uma emergência.' },
          { it: 'Dov’è il pronto soccorso?', en: 'Onde fica o pronto-socorro?' },
        ],
        quiz: {
          question: '"il pronto soccorso" é o…',
          options: ['pronto-socorro', 'farmácia', 'recepção'],
          correct: 'pronto-socorro',
          explanation: 'il pronto soccorso = pronto-socorro. Número de emergência na Itália: 112.',
        },
      },
    ],
  },
  {
    id: 'restaurant', name: 'Ristorante', icon: '🍽️', accent: '#c0504d',
    tagline: 'Un tavolo, un pasto, il conto', pos: { x: 30, y: 52 },
    stages: [
      {
        id: 'cl-rest-table', name: 'Il tavolo', icon: '🪑',
        narrative: 'Entri nel ristorante e chiedi un tavolo.',
        phrases: [
          { it: 'Un tavolo per due, per favore.', en: 'Uma mesa para dois, por favor.' },
          { it: 'Avete un tavolo libero?', en: 'Vocês têm uma mesa livre?' },
          { it: 'Abbiamo prenotato.', en: 'Temos reserva.' },
        ],
        quiz: {
          question: 'Como se pede uma mesa para dois?',
          options: ['Un tavolo per due, per favore.', 'Il conto, per favore.', 'Avete un menù?'],
          correct: 'Un tavolo per due, per favore.',
          explanation: 'un tavolo per due = uma mesa para dois.',
        },
      },
      {
        id: 'cl-rest-menu', name: 'Il menù', icon: '📋',
        narrative: 'Il cameriere porta il menù e tu dai un’occhiata.',
        phrases: [
          { it: 'Il menù, per favore.', en: 'O cardápio, por favor.' },
          { it: 'Cosa mi consiglia?', en: 'O que você recomenda?' },
          { it: 'Qual è il piatto del giorno?', en: 'Qual é o prato do dia?' },
        ],
        quiz: {
          question: '"Cosa mi consiglia?" pede ao garçom para…',
          options: ['recomendar algo', 'trazer a conta', 'limpar a mesa'],
          correct: 'recomendar algo',
          explanation: 'consigliare = recomendar/aconselhar.',
        },
      },
      {
        id: 'cl-rest-order', name: 'Ordinare', icon: '🍝',
        narrative: 'Hai scelto. Ora ordini il pasto.',
        phrases: [
          { it: 'Vorrei la pasta, per favore.', en: 'Eu queria a massa, por favor.' },
          { it: 'Per me una pizza margherita.', en: 'Para mim uma pizza margherita.' },
          { it: 'Da bere, un bicchiere di vino rosso.', en: 'Para beber, uma taça de vinho tinto.' },
          { it: 'Sono vegetariano.', en: 'Eu sou vegetariano.' },
        ],
        quiz: {
          question: 'Como você pede uma taça de vinho tinto?',
          options: ['Un bicchiere di vino rosso.', 'Un caffè, per favore.', 'Dell’acqua naturale.'],
          correct: 'Un bicchiere di vino rosso.',
          explanation: 'vino rosso = vinho tinto; un bicchiere = uma taça.',
        },
      },
      {
        id: 'cl-rest-coffee', name: 'Il caffè', icon: '☕',
        narrative: 'A fine pasto, il rituale italiano: il caffè.',
        phrases: [
          { it: 'Un caffè, per favore.', en: 'Um espresso, por favor.' },
          { it: 'Un cappuccino, grazie.', en: 'Um cappuccino, obrigado.' },
          { it: 'Un caffè macchiato.', en: 'Um espresso com um pouco de leite.' },
        ],
        quiz: {
          question: 'Na Itália, "un caffè" geralmente significa…',
          options: ['um espresso', 'um café coado grande', 'um cappuccino'],
          correct: 'um espresso',
          explanation: 'un caffè = um espresso por padrão. O cappuccino é uma bebida da manhã.',
        },
      },
      {
        id: 'cl-rest-bill', name: 'Il conto', icon: '🧾',
        narrative: 'È ora di pagare. Chiami il cameriere.',
        phrases: [
          { it: 'Il conto, per favore.', en: 'A conta, por favor.' },
          { it: 'Possiamo pagare con la carta?', en: 'Podemos pagar com cartão?' },
          { it: 'È tutto compreso?', en: 'Está tudo incluído?' },
        ],
        quiz: {
          question: 'Como você pede a conta?',
          options: ['Il conto, per favore.', 'Il menù, per favore.', 'Un tavolo, per favore.'],
          correct: 'Il conto, per favore.',
          explanation: 'il conto = a conta; pagare con la carta = pagar com cartão.',
        },
      },
    ],
  },
  {
    id: 'gym', name: 'Palestra', icon: '🏋️', accent: '#7a5cc0',
    tagline: 'Iscriversi, allenarsi, condividere gli attrezzi', pos: { x: 72, y: 56 },
    stages: [
      {
        id: 'cl-gym-join', name: 'Iscriversi', icon: '📝',
        narrative: 'Vuoi allenarti durante il viaggio. Chiedi come iscriverti.',
        phrases: [
          { it: 'Vorrei iscrivermi.', en: 'Eu queria me inscrever.' },
          { it: 'Quanto costa al mese?', en: 'Quanto custa por mês?' },
          { it: 'Avete un abbonamento giornaliero?', en: 'Vocês têm passe diário?' },
        ],
        quiz: {
          question: 'Como se pede um passe diário?',
          options: ['Avete un abbonamento giornaliero?', 'Vorrei iscrivermi.', 'Dov’è lo spogliatoio?'],
          correct: 'Avete un abbonamento giornaliero?',
          explanation: 'l’abbonamento = assinatura/passe; giornaliero = diário.',
        },
      },
      {
        id: 'cl-gym-locker', name: 'Spogliatoio', icon: '🚪',
        narrative: 'Prima di allenarti, cerchi lo spogliatoio.',
        phrases: [
          { it: 'Dov’è lo spogliatoio?', en: 'Onde fica o vestiário?' },
          { it: 'Ci sono gli armadietti?', en: 'Tem armários?' },
          { it: 'Dove sono le docce?', en: 'Onde ficam os chuveiros?' },
        ],
        quiz: {
          question: '"lo spogliatoio" é o…',
          options: ['vestiário', 'chuveiro', 'recepção'],
          correct: 'vestiário',
          explanation: 'lo spogliatoio = vestiário; l’armadietto = armário.',
        },
      },
      {
        id: 'cl-gym-machines', name: 'Gli attrezzi', icon: '🏃',
        narrative: 'La palestra è piena. Devi condividere gli attrezzi.',
        phrases: [
          { it: 'Sta usando questo attrezzo?', en: 'Você está usando este aparelho?' },
          { it: 'Posso fare un turno?', en: 'Posso revezar?' },
          { it: 'Ho quasi finito.', en: 'Já estou quase terminando.' },
        ],
        quiz: {
          question: 'Como se pergunta se alguém está usando um aparelho?',
          options: ['Sta usando questo attrezzo?', 'Ho quasi finito.', 'Dov’è lo spogliatoio?'],
          correct: 'Sta usando questo attrezzo?',
          explanation: 'l’attrezzo = o aparelho/equipamento; usare = usar.',
        },
      },
    ],
  },
  {
    id: 'public-services', name: 'Servizi Pubblici', icon: '🏛️', accent: '#4a7a8c',
    tagline: 'Registrazione, visto, burocrazia', pos: { x: 24, y: 74 },
    stages: [
      {
        id: 'cl-public-find', name: "L'ufficio", icon: '🏢',
        narrative: 'Ti serve un documento. Cerchi l’ufficio giusto.',
        phrases: [
          { it: 'Dov’è l’ufficio comunale?', en: 'Onde fica a repartição da prefeitura?' },
          { it: 'Devo prendere un numero?', en: 'Preciso pegar uma senha?' },
          { it: 'A che sportello devo andare?', en: 'Para qual guichê eu devo ir?' },
        ],
        quiz: {
          question: '"lo sportello" é o…',
          options: ['guichê / balcão', 'sala de espera', 'formulário'],
          correct: 'guichê / balcão',
          explanation: 'lo sportello = guichê de atendimento; il numero = senha.',
        },
      },
      {
        id: 'cl-public-forms', name: 'I moduli', icon: '📄',
        narrative: 'L’impiegato ti dà dei moduli da compilare.',
        phrases: [
          { it: 'Devo compilare questo modulo?', en: 'Preciso preencher este formulário?' },
          { it: 'Quali documenti servono?', en: 'Quais documentos são necessários?' },
          { it: 'Ho il passaporto e il codice fiscale.', en: 'Eu tenho o passaporte e o código fiscal.' },
        ],
        quiz: {
          question: '"compilare un modulo" significa…',
          options: ['preencher um formulário', 'assinar um contrato', 'pagar uma taxa'],
          correct: 'preencher um formulário',
          explanation: 'compilare = preencher; il modulo = formulário. Il codice fiscale = código fiscal italiano.',
        },
      },
      {
        id: 'cl-public-visa', name: 'Permesso', icon: '🛂',
        narrative: 'Chiedi informazioni sul permesso di soggiorno.',
        phrases: [
          { it: 'Vorrei informazioni sul permesso di soggiorno.', en: 'Eu queria informações sobre a autorização de residência.' },
          { it: 'Quanto tempo ci vuole?', en: 'Quanto tempo demora?' },
          { it: 'Devo tornare domani?', en: 'Preciso voltar amanhã?' },
        ],
        quiz: {
          question: '"il permesso di soggiorno" é uma…',
          options: ['autorização de residência', 'passaporte', 'carteira de motorista'],
          correct: 'autorização de residência',
          explanation: 'il permesso di soggiorno = autorização de residência; quanto tempo ci vuole = quanto tempo demora.',
        },
      },
    ],
  },
  {
    id: 'tourist-guide', name: 'Guida Turistica', icon: '🗺️', accent: '#3a9188',
    tagline: 'Il giro e i monumenti', pos: { x: 52, y: 40 },
    stages: [
      {
        id: 'cl-tour-info', name: 'Informazioni', icon: 'ℹ️',
        narrative: 'Vai all’ufficio informazioni turistiche per iniziare.',
        phrases: [
          { it: 'Avete una cartina della città?', en: 'Vocês têm um mapa da cidade?' },
          { it: 'Cosa c’è da vedere?', en: 'O que há para ver?' },
          { it: 'C’è una visita guidata?', en: 'Tem visita guiada?' },
        ],
        quiz: {
          question: 'Como se pede um mapa da cidade?',
          options: ['Avete una cartina della città?', 'Quanto costa il biglietto?', 'Dov’è l’uscita?'],
          correct: 'Avete una cartina della città?',
          explanation: 'la cartina = mapa; la visita guidata = visita guiada.',
        },
      },
      {
        id: 'cl-tour-ticket', name: 'Il biglietto', icon: '🎫',
        narrative: 'Vuoi visitare un museo. Compri il biglietto.',
        phrases: [
          { it: 'Quanto costa il biglietto?', en: 'Quanto custa o ingresso?' },
          { it: 'C’è uno sconto per studenti?', en: 'Tem desconto para estudante?' },
          { it: 'Due biglietti, per favore.', en: 'Dois ingressos, por favor.' },
        ],
        quiz: {
          question: '"C’è uno sconto per studenti?" pergunta sobre um…',
          options: ['desconto para estudante', 'visita guiada', 'horário de fechamento'],
          correct: 'desconto para estudante',
          explanation: 'lo sconto = desconto; per studenti = para estudantes.',
        },
      },
      {
        id: 'cl-tour-sights', name: 'I monumenti', icon: '🏛️',
        narrative: 'Durante il giro, fai domande sui monumenti.',
        phrases: [
          { it: 'Cos’è quell’edificio?', en: 'O que é aquele edifício?' },
          { it: 'Quanto è antico?', en: 'Que idade tem?' },
          { it: 'Posso fare una foto?', en: 'Posso tirar uma foto?' },
        ],
        quiz: {
          question: 'Como se pergunta "posso tirar uma foto?"',
          options: ['Posso fare una foto?', 'Cos’è quell’edificio?', 'Dov’è l’uscita?'],
          correct: 'Posso fare una foto?',
          explanation: 'fare una foto = tirar uma foto; l’edificio = edifício.',
        },
      },
      {
        id: 'cl-tour-lost', name: 'Perdersi', icon: '🧭',
        narrative: 'Ti sei perso tra le vie del centro. Chiedi indicazioni.',
        phrases: [
          { it: 'Mi sono perso.', en: 'Eu me perdi.' },
          { it: 'Come arrivo alla piazza?', en: 'Como eu chego à praça?' },
          { it: 'È lontano da qui?', en: 'É longe daqui?' },
        ],
        quiz: {
          question: 'Como você diz "eu me perdi"?',
          options: ['Mi sono perso.', 'È lontano da qui?', 'Posso fare una foto?'],
          correct: 'Mi sono perso.',
          explanation: 'perdersi = se perder; la piazza = praça.',
        },
      },
    ],
  },
];

export default LOCATIONS;
