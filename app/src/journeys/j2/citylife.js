// City Life content for the Japan journey.
// Japanese counterpart of de/citylife.js — same 7 locations, ids, icons,
// accents and stage structure; phrases translated to Japanese ({ ja, romaji,
// en } — the shape RouteJourney's native line already renders). `pos` is
// retuned to the Japan diorama (public/city-life-map-japan.png). Quiz options
// use romaji, matching the convention in jp/content.js.

const LOCATIONS = [
  {
    id: 'airport', name: 'Airport', icon: '✈️', accent: '#3a7bd5',
    tagline: 'From check-in to taxi', pos: { x: 43, y: 14 },
    stages: [
      {
        id: 'cl-airport-checkin', name: 'Check-in', icon: '🛄',
        narrative: 'You arrive at the terminal. First stop: the check-in counter to drop your bag and get your boarding pass.',
        phrases: [
          { ja: 'チェックインを おねがいします。', romaji: 'Chekku-in o onegai shimasu.', en: "I'd like to check in." },
          { ja: 'これは わたしの パスポートです。', romaji: 'Kore wa watashi no pasupōto desu.', en: 'Here is my passport.' },
          { ja: 'まどがわの せきを おねがいします。', romaji: 'Madogawa no seki o onegai shimasu.', en: 'A window seat, please.' },
          { ja: 'つうろがわの せきを おねがいします。', romaji: 'Tsūrogawa no seki o onegai shimasu.', en: 'An aisle seat, please.' },
        ],
        quiz: {
          question: 'How do you ask for a window seat?',
          options: ['Madogawa no seki o onegai shimasu.', 'Tsūrogawa no seki o onegai shimasu.', 'Gēto wa doko desu ka?'],
          correct: 'Madogawa no seki o onegai shimasu.',
          explanation: 'mado = window, tsūro = aisle.',
        },
      },
      {
        id: 'cl-airport-security', name: 'Security', icon: '🛂',
        narrative: 'Boarding pass in hand, you head to the security check.',
        phrases: [
          { ja: 'かばんを ベルトに おいて ください。', romaji: 'Kaban o beruto ni oite kudasai.', en: 'Please put your bag on the belt.' },
          { ja: 'えきたいを もって いますか？', romaji: 'Ekitai o motte imasu ka?', en: 'Do you have any liquids with you?' },
          { ja: 'くつを ぬがなければ なりませんか？', romaji: 'Kutsu o nuganakereba narimasen ka?', en: 'Do I have to take off my shoes?' },
        ],
        quiz: {
          question: '"Ekitai o motte imasu ka?" asks about…',
          options: ['liquids', 'shoes', 'your laptop'],
          correct: 'liquids',
          explanation: 'ekitai = liquids — limited in hand luggage.',
        },
      },
      {
        id: 'cl-airport-gate', name: 'Boarding', icon: '🎫',
        narrative: 'You find your gate and wait for boarding to begin.',
        phrases: [
          { ja: 'ゲートは どこですか？', romaji: 'Gēto wa doko desu ka?', en: 'Where is the gate?' },
          { ja: 'とうじょうけんを おねがいします。', romaji: 'Tōjōken o onegai shimasu.', en: 'Your boarding pass, please.' },
          { ja: 'とうじょうは 10じに はじまります。', romaji: 'Tōjō wa jū-ji ni hajimarimasu.', en: 'Boarding begins at 10.' },
        ],
        quiz: {
          question: 'Your "tōjōken" is your…',
          options: ['boarding pass', 'suitcase', 'passport'],
          correct: 'boarding pass',
          explanation: 'tōjōken = boarding pass.',
        },
      },
      {
        id: 'cl-airport-baggage', name: 'Baggage', icon: '🧳',
        narrative: 'After landing you go to baggage claim to pick up your suitcase.',
        phrases: [
          { ja: 'にもつ うけとりじょは どこですか？', romaji: 'Nimotsu uketorijo wa doko desu ka?', en: 'Where is baggage claim?' },
          { ja: 'わたしの スーツケースが とどいて いません。', romaji: 'Watashi no sūtsukēsu ga todoite imasen.', en: "My suitcase didn't arrive." },
          { ja: 'にもつが こわれて います。', romaji: 'Nimotsu ga kowarete imasu.', en: 'My luggage is damaged.' },
        ],
        quiz: {
          question: 'How do you say your suitcase did not arrive?',
          options: ['Watashi no sūtsukēsu ga todoite imasen.', 'Nimotsu uketorijo wa doko desu ka?', 'Takushī ga hitsuyō desu.'],
          correct: 'Watashi no sūtsukēsu ga todoite imasen.',
          explanation: 'sūtsukēsu = suitcase; todoku = to arrive.',
        },
      },
      {
        id: 'cl-airport-money', name: 'Cash', icon: '💶',
        narrative: 'You need some cash before leaving the airport.',
        phrases: [
          { ja: 'ATMは どこですか？', romaji: 'ATM wa doko desu ka?', en: 'Where is the ATM?' },
          { ja: 'どこで りょうがえ できますか？', romaji: 'Doko de ryōgae dekimasu ka?', en: 'Where can I exchange money?' },
          { ja: 'おかねを ひきだしたいです。', romaji: 'Okane o hikidashitai desu.', en: "I'd like to withdraw money." },
        ],
        quiz: {
          question: 'An "ATM" is a…',
          options: ['cash machine', 'exchange office', 'bank teller'],
          correct: 'cash machine',
          explanation: 'ATM = cash machine; okane o hikidasu = to withdraw money.',
        },
      },
      {
        id: 'cl-airport-taxi', name: 'Taxi', icon: '🚕',
        narrative: 'Finally you grab a taxi into the city.',
        phrases: [
          { ja: 'タクシーが ひつようです。', romaji: 'Takushī ga hitsuyō desu.', en: 'I need a taxi.' },
          { ja: 'まちの ちゅうしんまで おねがいします。', romaji: 'Machi no chūshin made onegai shimasu.', en: 'To the city centre, please.' },
          { ja: 'りょうきんは いくらですか？', romaji: 'Ryōkin wa ikura desu ka?', en: 'How much is the ride?' },
        ],
        quiz: {
          question: '"Ryōkin wa ikura desu ka?" asks about the…',
          options: ['price of the ride', 'direction', 'time'],
          correct: 'price of the ride',
          explanation: 'ryōkin = fare; ikura = how much.',
        },
      },
    ],
  },

  {
    id: 'train-station', name: 'Train Station', icon: '🚉', accent: '#5b8c5a',
    tagline: 'Find your way and board', pos: { x: 48, y: 29 },
    stages: [
      {
        id: 'cl-train-orient', name: 'Orient yourself', icon: '🧭',
        narrative: 'The station is huge. You stop someone to ask the way.',
        phrases: [
          { ja: 'すみません、7ばんせんは どう いきますか？', romaji: 'Sumimasen, nana-bansen wa dō ikimasu ka?', en: 'Excuse me, how do I get to platform 7?' },
          { ja: 'けんばいきは どこですか？', romaji: 'Kenbaiki wa doko desu ka?', en: 'Where is the ticket machine?' },
          { ja: 'てつだって もらえますか？', romaji: 'Tetsudatte moraemasu ka?', en: 'Can you help me?' },
        ],
        quiz: {
          question: 'A "bansen" is a…',
          options: ['platform / track', 'ticket', 'exit'],
          correct: 'platform / track',
          explanation: '~bansen = the platform/track number your train departs from.',
        },
      },
      {
        id: 'cl-train-ticket', name: 'Buy a ticket', icon: '🎟️',
        narrative: 'At the counter you buy your ticket.',
        phrases: [
          { ja: 'とうきょうまでの きっぷを おねがいします。', romaji: 'Tōkyō made no kippu o onegai shimasu.', en: 'A ticket to Tokyo, please.' },
          { ja: 'かたみち ですか、おうふく ですか？', romaji: 'Katamichi desu ka, ōfuku desu ka?', en: 'One-way or return?' },
          { ja: 'きっぷは いくらですか？', romaji: 'Kippu wa ikura desu ka?', en: 'How much is a ticket?' },
        ],
        quiz: {
          question: '"ōfuku" means…',
          options: ['return / round trip', 'one-way', 'first class'],
          correct: 'return / round trip',
          explanation: 'ōfuku = round trip; katamichi = one-way.',
        },
      },
      {
        id: 'cl-train-platform', name: 'Find the platform', icon: '🚏',
        narrative: 'Ticket in hand, you check which platform your train leaves from.',
        phrases: [
          { ja: 'でんしゃは なんばんせんから でますか？', romaji: 'Densha wa nan-bansen kara demasu ka?', en: 'Which platform does the train leave from?' },
          { ja: 'でんしゃは 3ばんせんから でます。', romaji: 'Densha wa san-bansen kara demasu.', en: 'The train leaves from platform 3.' },
        ],
        quiz: {
          question: 'How do you ask which platform the train leaves from?',
          options: ['Densha wa nan-bansen kara demasu ka?', 'Ryōkin wa ikura desu ka?', 'Norikae ga hitsuyō desu ka?'],
          correct: 'Densha wa nan-bansen kara demasu ka?',
          explanation: 'nan-bansen = which platform; deru = to depart.',
        },
      },
      {
        id: 'cl-train-boarding', name: 'Waiting to board', icon: '⏳',
        narrative: 'You wait on the platform. Announcements crackle overhead.',
        phrases: [
          { ja: 'でんしゃは 10ぷん おくれて います。', romaji: 'Densha wa juppun okurete imasu.', en: 'The train is 10 minutes late.' },
          { ja: 'ごじょうしゃ ください！', romaji: 'Gojōsha kudasai!', en: 'All aboard!' },
          { ja: 'ドアが しまります、ごちゅうい ください。', romaji: 'Doa ga shimarimasu, gochūi kudasai.', en: 'Careful, the doors are closing.' },
        ],
        quiz: {
          question: '"okureru" means…',
          options: ['to be late / delayed', 'platform', 'ticket'],
          correct: 'to be late / delayed',
          explanation: 'okureru = to be delayed; jōsha = to board.',
        },
      },
      {
        id: 'cl-train-transfer', name: 'Changing trains', icon: '🔀',
        narrative: 'Your route needs a change midway.',
        phrases: [
          { ja: 'のりかえが ひつようですか？', romaji: 'Norikae ga hitsuyō desu ka?', en: 'Do I have to change trains?' },
          { ja: 'なごやで のりかえます。', romaji: 'Nagoya de norikaemasu.', en: 'I change in Nagoya.' },
        ],
        quiz: {
          question: '"norikae" means…',
          options: ['to change trains', 'to get off for good', 'to buy a ticket'],
          correct: 'to change trains',
          explanation: 'norikae = transfer/change trains.',
        },
      },
    ],
  },

  {
    id: 'restaurant', name: 'Restaurant', icon: '🍽️', accent: '#c0504d',
    tagline: 'A table, a meal, the bill', pos: { x: 70, y: 32 },
    stages: [
      {
        id: 'cl-rest-arrive', name: 'Arrive', icon: '🪑',
        narrative: 'You walk in for dinner.',
        phrases: [
          { ja: 'よやくして あります。', romaji: 'Yoyaku shite arimasu.', en: 'I have a reservation.' },
          { ja: 'ふたりぶんの せきを おねがいします。', romaji: 'Futari-bun no seki o onegai shimasu.', en: 'A table for two, please.' },
        ],
        quiz: {
          question: '"Futari" is a table for…',
          options: ['two', 'ten', 'one'],
          correct: 'two',
          explanation: 'futari = two people; yoyaku = reservation.',
        },
      },
      {
        id: 'cl-rest-menu', name: 'The menu', icon: '📖',
        narrative: 'The waiter brings the menus.',
        phrases: [
          { ja: 'メニューを おねがいします。', romaji: 'Menyū o onegai shimasu.', en: 'The menu, please.' },
          { ja: 'のみものの メニューを おねがいします。', romaji: 'Nomimono no menyū o onegai shimasu.', en: 'The drinks menu, please.' },
          { ja: 'きょうの おすすめは なんですか？', romaji: 'Kyō no osusume wa nan desu ka?', en: "What's the dish of the day?" },
        ],
        quiz: {
          question: '"nomimono no menyū" is the…',
          options: ['drinks menu', 'food menu', 'bill'],
          correct: 'drinks menu',
          explanation: 'nomimono = drinks; menyū = menu.',
        },
      },
      {
        id: 'cl-rest-order', name: 'Order by course', icon: '🍲',
        narrative: 'Courses: zensai (starter), mein (main — tonkatsu, ramen, sushi), dezāto (dessert — aisu, mochi), plus nomimono (bīru, osake, mizu, ocha).',
        phrases: [
          { ja: 'ぜんさいは スープに します。', romaji: 'Zensai wa sūpu ni shimasu.', en: "As a starter I'll have the soup." },
          { ja: 'メインは とんかつに します。', romaji: 'Mein wa tonkatsu ni shimasu.', en: 'For the main, the tonkatsu.' },
          { ja: 'デザートは アイスに します。', romaji: 'Dezāto wa aisu ni shimasu.', en: 'For dessert, ice cream.' },
        ],
        quiz: {
          question: '"zensai" is the…',
          options: ['starter', 'main course', 'dessert'],
          correct: 'starter',
          explanation: 'zensai = starter, mein = main, dezāto = dessert.',
        },
      },
      {
        id: 'cl-rest-special', name: 'Special requests', icon: '🥗',
        narrative: 'You have a few dietary needs.',
        phrases: [
          { ja: 'わたしは ベジタリアンです。', romaji: 'Watashi wa bejitarian desu.', en: "I'm vegetarian." },
          { ja: 'アレルギーが あります。', romaji: 'Arerugī ga arimasu.', en: 'I have an allergy.' },
          { ja: 'たまねぎ ぬきで おねがいします。', romaji: 'Tamanegi nuki de onegai shimasu.', en: 'Without onions, please.' },
        ],
        quiz: {
          question: '"Tamanegi nuki de onegai shimasu." means without…',
          options: ['onions', 'salt', 'meat'],
          correct: 'onions',
          explanation: '~nuki = without; tamanegi = onion.',
        },
      },
      {
        id: 'cl-rest-pay', name: 'Pay', icon: '🧾',
        narrative: 'Great meal. Time to settle up.',
        phrases: [
          { ja: 'おかいけいを おねがいします。', romaji: 'Okaikei o onegai shimasu.', en: 'The bill, please.' },
          { ja: 'べつべつで おねがいします。', romaji: 'Betsubetsu de onegai shimasu.', en: 'Separately, please.' },
          { ja: 'とても おいしかったです。', romaji: 'Totemo oishikatta desu.', en: 'The food was delicious.' },
        ],
        quiz: {
          question: '"Okaikei o onegai shimasu." asks for the…',
          options: ['bill', 'menu', 'waiter'],
          correct: 'bill',
          explanation: 'okaikei = the bill; oishii = delicious.',
        },
      },
    ],
  },

  {
    id: 'tourist-guide', name: 'Tourist Guide', icon: '🗺️', accent: '#3a9188',
    tagline: 'The tour and the sights', pos: { x: 45, y: 43 },
    stages: [
      {
        id: 'cl-tour-info', name: 'Tour info', icon: '🕒',
        narrative: 'You meet the guide and get the plan for the day.',
        phrases: [
          { ja: 'ツアーは なんじに はじまりますか？', romaji: 'Tsuā wa nan-ji ni hajimarimasu ka?', en: 'When does the tour start?' },
          { ja: 'どこへ いきますか？', romaji: 'Doko e ikimasu ka?', en: 'Where are we going?' },
          { ja: 'ツアーは どのくらい かかりますか？', romaji: 'Tsuā wa dono kurai kakarimasu ka?', en: 'How long does the tour take?' },
        ],
        quiz: {
          question: '"tsuā" is a…',
          options: ['guided tour', 'map', 'ticket'],
          correct: 'guided tour',
          explanation: 'tsuā = tour; annai = to guide.',
        },
      },
      {
        id: 'cl-tour-getthere', name: 'Getting there', icon: '🚶',
        narrative: 'You ask how to reach the first stop.',
        phrases: [
          { ja: 'はくぶつかんへは どう いきますか？', romaji: 'Hakubutsukan e wa dō ikimasu ka?', en: 'How do I get to the museum?' },
          { ja: 'あるいて いけますか？', romaji: 'Aruite ikemasu ka?', en: 'Is it reachable on foot?' },
          { ja: 'ちかてつに のって ください。', romaji: 'Chikatetsu ni notte kudasai.', en: 'Take the subway.' },
        ],
        quiz: {
          question: '"aruite" means…',
          options: ['on foot', 'by subway', 'by taxi'],
          correct: 'on foot',
          explanation: 'aruite = on foot; chikatetsu = subway.',
        },
      },
      {
        id: 'cl-tour-sights', name: 'The sights', icon: '📸',
        narrative: 'Famous Japanese landmarks: Fuji-san (Mt Fuji), Kiyomizu-dera in Kyoto, Tōkyō Tawā (Tokyo Tower), Sensō-ji in Asakusa, Kinkaku-ji (the Golden Pavilion).',
        phrases: [
          { ja: 'ふじさんは ゆうめいです。', romaji: 'Fuji-san wa yūmei desu.', en: 'Mt Fuji is famous.' },
          { ja: 'きよみずでらは すばらしいです。', romaji: 'Kiyomizu-dera wa subarashii desu.', en: 'Kiyomizu-dera is wonderful.' },
          { ja: 'きんかくじを たずねたいです。', romaji: 'Kinkaku-ji o tazunetai desu.', en: "I'd like to visit Kinkaku-ji." },
        ],
        quiz: {
          question: 'Which is a famous landmark in Tokyo?',
          options: ['Tōkyō Tawā', 'Kiyomizu-dera', 'Kinkaku-ji'],
          correct: 'Tōkyō Tawā',
          explanation: 'Tokyo Tower is in Tokyo; Kiyomizu-dera and Kinkaku-ji are in Kyoto.',
        },
      },
      {
        id: 'cl-tour-ticket', name: 'Buy entry', icon: '🎫',
        narrative: 'At the entrance you buy tickets.',
        phrases: [
          { ja: 'ツアーの チケットを 2まい おねがいします。', romaji: 'Tsuā no chiketto o ni-mai onegai shimasu.', en: 'Two tickets for the tour, please.' },
          { ja: 'わりびきは ありますか？', romaji: 'Waribiki wa arimasu ka?', en: 'Is there a discount?' },
          { ja: 'にゅうじょうは むりょうです。', romaji: 'Nyūjō wa muryō desu.', en: 'Admission is free.' },
        ],
        quiz: {
          question: '"Waribiki wa arimasu ka?" asks about a…',
          options: ['discount', 'tour guide', 'free map'],
          correct: 'discount',
          explanation: 'waribiki = discount; nyūjō = admission.',
        },
      },
    ],
  },

  {
    id: 'gym', name: 'Gym', icon: '🏋️', accent: '#7a5cc0',
    tagline: 'Join, train, share the machines', pos: { x: 16, y: 52 },
    stages: [
      {
        id: 'cl-gym-join', name: 'Sign up', icon: '📝',
        narrative: 'First visit. You go to the front desk to become a member.',
        phrases: [
          { ja: 'にゅうかい したいです。', romaji: 'Nyūkai shitai desu.', en: "I'd like to sign up." },
          { ja: 'かいひは いくらですか？', romaji: 'Kaihi wa ikura desu ka?', en: 'How much is the membership?' },
          { ja: 'たいけんは できますか？', romaji: 'Taiken wa dekimasu ka?', en: 'Is there a trial day?' },
        ],
        quiz: {
          question: '"kaihi" means…',
          options: ['membership fee', 'trial day', 'locker'],
          correct: 'membership fee',
          explanation: 'kaihi = membership fee; nyūkai = to join.',
        },
      },
      {
        id: 'cl-gym-locker', name: 'Changing room', icon: '🔑',
        narrative: 'You look for somewhere to change and stash your things.',
        phrases: [
          { ja: 'こういしつは どこですか？', romaji: 'Kōishitsu wa doko desu ka?', en: 'Where is the changing room?' },
          { ja: 'ロッカーは どこですか？', romaji: 'Rokkā wa doko desu ka?', en: 'Where are the lockers?' },
          { ja: 'かぎは ありますか？', romaji: 'Kagi wa arimasu ka?', en: 'Do you have a lock?' },
        ],
        quiz: {
          question: '"rokkā" are…',
          options: ['lockers', 'towels', 'showers'],
          correct: 'lockers',
          explanation: 'rokkā = locker; kōishitsu = changing room.',
        },
      },
      {
        id: 'cl-gym-plan', name: 'Ask for a plan', icon: '📈',
        narrative: 'A trainer offers to put together a routine for you.',
        phrases: [
          { ja: 'トレーニング メニューを つくって もらえますか？', romaji: 'Torēningu menyū o tsukutte moraemasu ka?', en: 'Can you make me a training plan?' },
          { ja: 'わたしは しょしんしゃです。', romaji: 'Watashi wa shoshinsha desu.', en: "I'm a beginner." },
          { ja: 'きんにくを つけたいです。', romaji: 'Kinniku o tsuketai desu.', en: 'I want to build muscle.' },
          { ja: 'やせたいです。', romaji: 'Yasetai desu.', en: 'I want to lose weight.' },
        ],
        quiz: {
          question: '"Yasetai desu." means…',
          options: ['I want to lose weight', 'I want to build muscle', "I'm a beginner"],
          correct: 'I want to lose weight',
          explanation: 'yaseru = to lose weight; kinniku o tsukeru = to build muscle.',
        },
      },
      {
        id: 'cl-gym-share', name: 'Share a machine', icon: '🔁',
        narrative: 'The machine you want is in use. You ask to work in.',
        phrases: [
          { ja: 'この マシンは あいて いますか？', romaji: 'Kono mashin wa aite imasu ka?', en: 'Is this machine free?' },
          { ja: 'あいだに つかっても いいですか？', romaji: 'Aida ni tsukatte mo ii desu ka?', en: 'Can I work in between your sets?' },
          { ja: 'あと なんセット ですか？', romaji: 'Ato nan-setto desu ka?', en: 'How many sets left?' },
        ],
        quiz: {
          question: '"Kono mashin wa aite imasu ka?" asks if the machine is…',
          options: ['free / available', 'broken', 'heavy'],
          correct: 'free / available',
          explanation: 'mashin = the machine; aite iru = to be free/available.',
        },
      },
      {
        id: 'cl-gym-exercises', name: 'The exercises', icon: '💪',
        narrative: 'By muscle group — senaka (back), mune (chest), ashi (legs), kata (shoulders). Common lifts follow.',
        phrases: [
          { ja: 'せなかには ローイングと ラットプルダウン。', romaji: 'Senaka ni wa rōingu to ratto-purudaun.', en: 'Rows and lat pulldown for the back.' },
          { ja: 'むねには ベンチプレスと チェストフライ。', romaji: 'Mune ni wa benchi-puresu to chesuto-furai.', en: 'Bench press and fly for the chest.' },
          { ja: 'あしには スクワットと デッドリフト。', romaji: 'Ashi ni wa sukuwatto to deddo-rifuto.', en: 'Squats and deadlifts for the legs.' },
          { ja: '12かいを 3セット。', romaji: 'Jū-ni-kai o san-setto.', en: 'Three sets of twelve reps.' },
        ],
        quiz: {
          question: 'Which Japanese word is the "squat"?',
          options: ['sukuwatto', 'benchi-puresu', 'rōingu'],
          correct: 'sukuwatto',
          explanation: 'sukuwatto = squat, deddo-rifuto = deadlift, benchi-puresu = bench press.',
        },
      },
    ],
  },

  {
    id: 'doctor', name: 'Doctor & Hospital', icon: '🏥', accent: '#d06b8c',
    tagline: 'Feeling ill and getting help', pos: { x: 54, y: 67 },
    stages: [
      {
        id: 'cl-doc-reception', name: 'Reception', icon: '🪪',
        narrative: 'You check in at the desk.',
        phrases: [
          { ja: 'よやくが あります。', romaji: 'Yoyaku ga arimasu.', en: 'I have an appointment.' },
          { ja: 'これは わたしの ほけんしょうです。', romaji: 'Kore wa watashi no hokenshō desu.', en: 'Here is my insurance card.' },
          { ja: 'いしゃに みて もらいたいです。', romaji: 'Isha ni mite moraitai desu.', en: 'I need a doctor.' },
        ],
        quiz: {
          question: '"hokenshō" is your…',
          options: ['insurance card', 'prescription', 'appointment'],
          correct: 'insurance card',
          explanation: 'hoken = insurance; ~shō = card/certificate.',
        },
      },
      {
        id: 'cl-doc-triage', name: 'Triage', icon: '🤒',
        narrative: 'A nurse asks what is wrong.',
        phrases: [
          { ja: 'ねつが あります。', romaji: 'Netsu ga arimasu.', en: 'I have a fever.' },
          { ja: 'あたまが いたいです。', romaji: 'Atama ga itai desu.', en: 'I have a headache.' },
          { ja: 'おなかが いたいです。', romaji: 'Onaka ga itai desu.', en: 'I have a stomach ache.' },
          { ja: 'あしを けがしました。', romaji: 'Ashi o kega shimashita.', en: 'I hurt my leg.' },
          { ja: 'じこに あいました。', romaji: 'Jiko ni aimashita.', en: 'I had an accident.' },
        ],
        quiz: {
          question: '"Atama ga itai desu." means I have a…',
          options: ['headache', 'stomach ache', 'fever'],
          correct: 'headache',
          explanation: 'atama = head; itai = painful. onaka = belly.',
        },
      },
      {
        id: 'cl-doc-exam', name: 'The exam', icon: '🩺',
        narrative: 'The doctor examines you.',
        phrases: [
          { ja: 'どこが いたいですか？', romaji: 'Doko ga itai desu ka?', en: 'Where does it hurt?' },
          { ja: 'いつから ですか？', romaji: 'Itsu kara desu ka?', en: 'Since when have you had this?' },
          { ja: 'ふかく いきを すって ください。', romaji: 'Fukaku iki o sutte kudasai.', en: 'Breathe in deeply.' },
        ],
        quiz: {
          question: '"Doko ga itai desu ka?" asks…',
          options: ['where it hurts', 'since when', 'your name'],
          correct: 'where it hurts',
          explanation: 'doko = where; itai = hurts.',
        },
      },
      {
        id: 'cl-doc-medicine', name: 'Medicine', icon: '💊',
        narrative: 'You get a prescription for the pharmacy.',
        phrases: [
          { ja: 'しょほうせんが ひつようです。', romaji: 'Shohōsen ga hitsuyō desu.', en: 'I need a prescription.' },
          { ja: 'くすりを 1にち 3かい のんで ください。', romaji: 'Kusuri o ichi-nichi san-kai nonde kudasai.', en: 'Take the medicine three times a day.' },
          { ja: 'やっきょくは どこですか？', romaji: 'Yakkyoku wa doko desu ka?', en: 'Where is the pharmacy?' },
        ],
        quiz: {
          question: '"yakkyoku" is the…',
          options: ['pharmacy', 'hospital', 'doctor'],
          correct: 'pharmacy',
          explanation: 'yakkyoku = pharmacy; shohōsen = prescription.',
        },
      },
      {
        id: 'cl-doc-note', name: 'Sick note', icon: '📄',
        narrative: 'You need proof for work.',
        phrases: [
          { ja: 'しんだんしょが ひつようです。', romaji: 'Shindansho ga hitsuyō desu.', en: 'I need a medical certificate.' },
          { ja: 'しんだんしょを かいて もらえますか？', romaji: 'Shindansho o kaite moraemasu ka?', en: 'Can you issue me a medical certificate?' },
        ],
        quiz: {
          question: '"shindansho" is a…',
          options: ['medical certificate', 'prescription', 'bill'],
          correct: 'medical certificate',
          explanation: 'shindansho = medical certificate / sick note.',
        },
      },
    ],
  },

  {
    id: 'public-services', name: 'Public Services', icon: '🏛️', accent: '#4a7a8c',
    tagline: 'Registration, visa, paperwork', pos: { x: 83, y: 68 },
    stages: [
      {
        id: 'cl-pub-appointment', name: 'Book an appointment', icon: '📅',
        narrative: 'Almost everything here needs a yoyaku (appointment) first.',
        phrases: [
          { ja: 'よやくを したいです。', romaji: 'Yoyaku o shitai desu.', en: "I'd like to make an appointment." },
          { ja: 'あいて いる よやくは ありますか？', romaji: 'Aite iru yoyaku wa arimasu ka?', en: 'Do you have an appointment available?' },
        ],
        quiz: {
          question: '"yoyaku" means…',
          options: ['appointment', 'form', 'ID card'],
          correct: 'appointment',
          explanation: 'yoyaku o suru = to make an appointment.',
        },
      },
      {
        id: 'cl-pub-anmeldung', name: 'City registration', icon: '🏠',
        narrative: 'In Japan you file a move-in notice (tennyū-todoke) at the city hall after moving in.',
        phrases: [
          { ja: 'てんにゅうとどけを だしたいです。', romaji: 'Tennyū-todoke o dashitai desu.', en: "I'd like to file my move-in notice." },
          { ja: 'これは わたしの ちんたい けいやくしょです。', romaji: 'Kore wa watashi no chintai keiyakusho desu.', en: 'Here is my rental contract.' },
          { ja: 'じゅうみんひょうが ひつようです。', romaji: 'Jūminhyō ga hitsuyō desu.', en: 'I need a residence certificate.' },
        ],
        quiz: {
          question: '"chintai keiyakusho" is your…',
          options: ['rental contract', 'ID card', 'passport'],
          correct: 'rental contract',
          explanation: 'chintai = rental; keiyakusho = contract.',
        },
      },
      {
        id: 'cl-pub-visa', name: 'Visa & residence', icon: '🛃',
        narrative: 'For a longer stay you deal with the immigration office.',
        phrases: [
          { ja: 'ざいりゅう カードが ひつようです。', romaji: 'Zairyū kādo ga hitsuyō desu.', en: 'I need a residence card.' },
          { ja: 'にゅうこく かんりきょくは どこですか？', romaji: 'Nyūkoku kanrikyoku wa doko desu ka?', en: 'Where is the immigration office?' },
          { ja: 'どの ビザが ひつようですか？', romaji: 'Dono biza ga hitsuyō desu ka?', en: 'Which visa do I need?' },
        ],
        quiz: {
          question: '"zairyū kādo" is a…',
          options: ['residence card', 'driving licence', 'health insurance'],
          correct: 'residence card',
          explanation: 'zairyū = residence/stay; kādo = card.',
        },
      },
      {
        id: 'cl-pub-problems', name: 'Sort out a problem', icon: '❓',
        narrative: 'Something is off with your paperwork.',
        phrases: [
          { ja: 'どの しょるいが ひつようですか？', romaji: 'Dono shorui ga hitsuyō desu ka?', en: 'Which documents do I need?' },
          { ja: 'ちがう ようしを もって います。', romaji: 'Chigau yōshi o motte imasu.', en: 'I have the wrong form.' },
          { ja: 'せつめいして もらえますか？', romaji: 'Setsumei shite moraemasu ka?', en: 'Can you explain that?' },
        ],
        quiz: {
          question: '"shorui" are…',
          options: ['documents', 'appointments', 'offices'],
          correct: 'documents',
          explanation: 'shorui = documents/paperwork; yōshi = form.',
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
