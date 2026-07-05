// Japan journey content (A1 Japanese). Same shape as the de/fr/cl packs: an
// array of cities, each with .lessons and a Paris-style .places[] route.
//
// Two Japan-specific notes (see japan.md):
//   • article is null on every vocab step — Japanese has no articles, so the
//     gender badge in LessonView never shows.
//   • route phrases use { ja, romaji, en } instead of { es/fr/de, en }. The
//     native line falls back to ph.ja in RouteJourney and the romaji shows under
//     it. Vocab `word` holds kana/kanji; the romaji reading rides along in
//     `english` and `example` so an A1 learner can still read everything.
//
// ponytail: descriptions/narratives stay in English (an A1 learner doesn't read
// JA prose yet); descriptionEn mirrors them so the CityPage toggle is harmless.
// Add JA descriptions + the toggle once kana reading is taught.

const cities = [
  {
    id: 'sapporo',
    name: 'Sapporo',
    tagline: '雪まつりへ！ (Yuki matsuri e!)',
    theme: 'Snow, seasons & weather',
    accentColor: '#FF6D00',
    icon: '❄️',
    description:
      'Far north on the island of Hokkaidō, Sapporo is where the journey begins in ' +
      'the cold. The traveller steps into deep winter snow, warms up with a bowl of ' +
      'miso ramen and a local beer, and learns to talk about the weather and the seasons. ' +
      'The challenge: it’s freezing — samui desu ne!',
    descriptionEn:
      'Far north on the island of Hokkaidō, Sapporo is where the journey begins in ' +
      'the cold. The traveller steps into deep winter snow, warms up with a bowl of ' +
      'miso ramen and a local beer, and learns to talk about the weather and the seasons. ' +
      'The challenge: it’s freezing — samui desu ne!',
    photos: [
      { wikiTitle: 'Sapporo Snow Festival', alt: 'Snow sculptures at the Sapporo Snow Festival', caption: 'The Sapporo Snow Festival — giant snow and ice sculptures' },
      { wikiTitle: 'Sapporo', alt: 'Sapporo city in winter', caption: 'Sapporo, capital of snowy Hokkaidō' },
    ],
    vocabTopics: ['Weather & snow', 'Seasons', 'Adjectives'],
    grammarTopic: 'i-adjectives + 〜です／〜ね',
    lessons: [
      {
        id: 'sapporo-1',
        title: 'Snow and weather',
        description: 'Arriving in the cold: weather words and describing things with adjectives.',
        steps: [
          { type: 'vocab', word: '雪', article: null, english: 'snow — yuki', example: '雪が きれいです。(Yuki ga kirei desu.) — The snow is beautiful.' },
          { type: 'vocab', word: '寒い', article: null, english: 'cold (weather) — samui', example: '今日は 寒いです。(Kyō wa samui desu.) — It is cold today.' },
          { type: 'vocab', word: '天気', article: null, english: 'weather — tenki', example: '天気は どうですか？(Tenki wa dō desu ka?) — How is the weather?' },
          { type: 'vocab', word: '白い', article: null, english: 'white — shiroi', example: '町は 白いです。(Machi wa shiroi desu.) — The town is white.' },
          { type: 'vocab', word: '冬', article: null, english: 'winter — fuyu', example: '冬は 寒いです。(Fuyu wa samui desu.) — Winter is cold.' },
          { type: 'vocab', word: 'きれい', article: null, english: 'pretty / clean — kirei', example: 'とても きれいです。(Totemo kirei desu.) — It is very pretty.' },
          { type: 'grammar', title: 'i-adjectives + です／〜ね', explanation: 'An i-adjective (ending in い) goes straight before です: samui desu = "it is cold". No article, no extra verb. Add 〜ね (ne) on the end to invite agreement, like "isn’t it": Samui desu ne = "It’s cold, isn’t it."', examples: ['雪が 白いです。(Yuki ga shiroi desu.) — The snow is white.', '寒いですね。(Samui desu ne.) — It’s cold, isn’t it.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "cold (weather)"?', options: ['samui', 'shiroi', 'kirei', 'atsui'], correct: 'samui' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Samui desu ___. (invite agreement — "isn’t it")', correct: 'ne' },
        ],
      },
      {
        id: 'sapporo-2',
        title: 'Seasons and festivals',
        description: 'The Snow Festival, the four seasons, and saying what you like.',
        steps: [
          { type: 'vocab', word: '春・夏・秋・冬', article: null, english: 'spring, summer, autumn, winter — haru, natsu, aki, fuyu', example: '春・夏・秋・冬。(Haru, natsu, aki, fuyu.) — The four seasons.' },
          { type: 'vocab', word: '祭り', article: null, english: 'festival — matsuri', example: '雪祭りは 有名です。(Yuki matsuri wa yūmei desu.) — The Snow Festival is famous.' },
          { type: 'vocab', word: 'ラーメン', article: null, english: 'ramen — rāmen', example: 'みそラーメンを ください。(Miso rāmen o kudasai.) — Miso ramen, please.' },
          { type: 'vocab', word: 'ビール', article: null, english: 'beer — bīru', example: 'ビールが すきです。(Bīru ga suki desu.) — I like beer.' },
          { type: 'vocab', word: 'おいしい', article: null, english: 'delicious — oishii', example: 'とても おいしいです！(Totemo oishii desu!) — It is very delicious!' },
          { type: 'vocab', word: 'すき', article: null, english: 'like / fond of — suki', example: '冬が すきです。(Fuyu ga suki desu.) — I like winter.' },
          { type: 'grammar', title: '〜が すきです (ga suki desu)', explanation: '[thing] ga suki desu = "I like [thing]". が (ga) marks what is liked; suki desu = "is liked / I like it". For dislike, use きらい (kirai): [thing] ga kirai desu.', examples: ['ラーメンが すきです。(Rāmen ga suki desu.) — I like ramen.', '夏が すきです。(Natsu ga suki desu.) — I like summer.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "festival"?', options: ['matsuri', 'tenki', 'bīru', 'yuki'], correct: 'matsuri' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Rāmen ___ suki desu. (particle marking what is liked)', correct: 'ga' },
        ],
      },
    ],
    places: [
      {
        id: 'sap-odori', name: 'Ōdori Park', icon: '⛄',
        coords: [43.0605, 141.3469], wikiTitle: 'Sapporo Snow Festival',
        narrative: 'Ōdori Park runs like a green — now white — ribbon through the city. Each February it fills with the Sapporo Snow Festival: huge sculptures carved from snow and ice, lit up against the dark.',
        phrases: [
          { ja: '雪が きれいです。', romaji: 'Yuki ga kirei desu.', en: 'The snow is beautiful.' },
          { ja: '寒いですね。', romaji: 'Samui desu ne.', en: 'It’s cold, isn’t it.' },
        ],
        lessonId: 'sapporo-1',
        quiz: {
          question: 'The Sapporo Snow Festival is famous for sculptures made of what?',
          options: ['Snow and ice', 'Sand', 'Wood'],
          correct: 'Snow and ice',
          explanation: 'Every February artists carve enormous statues from snow and ice in Ōdori Park, drawing millions of visitors.',
        },
      },
      {
        id: 'sap-clock', name: 'Sapporo Clock Tower', icon: '🕰️',
        coords: [43.0628, 141.3536], wikiTitle: 'Sapporo Clock Tower',
        narrative: 'The old wooden Clock Tower is one of Sapporo’s few surviving early-Meiji buildings — a piece of the American-style frontier town the city once was.',
        phrases: [
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?' },
          { ja: 'ふるいですね。', romaji: 'Furui desu ne.', en: 'It’s old, isn’t it.' },
        ],
        quiz: {
          question: 'The Sapporo Clock Tower is notable as one of the city’s few surviving what?',
          options: ['Old wooden buildings', 'Skyscrapers', 'Castles'],
          correct: 'Old wooden buildings',
          explanation: 'Built in 1878, it is a rare survivor from Sapporo’s frontier-era, American-influenced architecture.',
        },
      },
      {
        id: 'sap-tvtower', name: 'Sapporo TV Tower', icon: '🗼',
        coords: [43.0608, 141.3565], wikiTitle: 'Sapporo TV Tower',
        narrative: 'At the east end of Ōdori the TV Tower rises red against the snow. From its deck the whole festival, and the white grid of the city, stretches out below.',
        phrases: [
          { ja: 'たかいです。', romaji: 'Takai desu.', en: 'It’s tall.' },
          { ja: 'きれいですね！', romaji: 'Kirei desu ne!', en: 'It’s beautiful, isn’t it!' },
        ],
        quiz: {
          question: 'The Sapporo TV Tower stands at the end of which park?',
          options: ['Ōdori Park', 'Ueno Park', 'Lake Ashi'],
          correct: 'Ōdori Park',
          explanation: 'The 147 m tower marks the eastern end of Ōdori Park and overlooks the Snow Festival grounds.',
        },
      },
      {
        id: 'sap-susukino', name: 'Susukino', icon: '🍜',
        coords: [43.0548, 141.3535], wikiTitle: 'Susukino',
        narrative: 'After dark you dive into Susukino, a blaze of neon and the heart of Sapporo nightlife. Down Ramen Alley you slide open a door and order a steaming bowl of miso ramen — Sapporo’s gift to the world.',
        phrases: [
          { ja: 'みそラーメンを ください。', romaji: 'Miso rāmen o kudasai.', en: 'Miso ramen, please.' },
          { ja: 'とても おいしいです！', romaji: 'Totemo oishii desu!', en: 'It’s very delicious!' },
        ],
        lessonId: 'sapporo-2',
        quiz: {
          question: 'Which style of ramen was made famous in Sapporo?',
          options: ['Miso ramen', 'Tonkotsu ramen', 'Shōyu ramen'],
          correct: 'Miso ramen',
          explanation: 'Sapporo is the birthplace of miso (soybean-paste) ramen, rich and warming for the Hokkaidō winter.',
        },
      },
      {
        id: 'sap-beer', name: 'Sapporo Beer Museum', icon: '🍺',
        coords: [43.0707, 141.3709], wikiTitle: 'Sapporo Beer Museum',
        narrative: 'In a red-brick former brewery you learn how Sapporo Beer — Japan’s oldest brand — was born here in 1876. A cold glass to finish, then south toward Tokyo.',
        phrases: [
          { ja: 'ビールが すきです。', romaji: 'Bīru ga suki desu.', en: 'I like beer.' },
          { ja: 'かんぱい！', romaji: 'Kanpai!', en: 'Cheers!' },
        ],
        quiz: {
          question: 'Sapporo Beer holds what distinction in Japan?',
          options: ['Japan’s oldest beer brand', 'Japan’s only wheat beer', 'A wine brand'],
          correct: 'Japan’s oldest beer brand',
          explanation: 'Founded in 1876, Sapporo is the oldest beer brand in Japan; the museum sits in its original brick brewery.',
        },
      },
    ],
  },

  {
    id: 'tokyo',
    name: 'Tokyo',
    tagline: 'ようこそ、日本へ！ (Yōkoso, Nihon e!)',
    theme: 'Arrival & greetings',
    accentColor: '#E60012',
    icon: '🗼',
    description:
      'Tokyo, the capital, is where the journey begins. The traveller lands, rides ' +
      'the busiest trains in the world into the city, and takes a first careful bow. ' +
      'The challenge: getting by with こんにちは, ありがとう and a lot of pointing.',
    descriptionEn:
      'Tokyo, the capital, is where the journey begins. The traveller lands, rides ' +
      'the busiest trains in the world into the city, and takes a first careful bow. ' +
      'The challenge: getting by with konnichiwa, arigatō and a lot of pointing.',
    photos: [
      { wikiTitle: 'Tokyo', alt: 'Tokyo skyline', caption: 'Tokyo, the world’s largest metropolis' },
      { wikiTitle: 'Shibuya Crossing', alt: 'Shibuya scramble crossing', caption: 'Shibuya — the busiest crossing on earth' },
    ],
    vocabTopics: ['Airport', 'Greetings', 'Self-introduction'],
    grammarTopic: 'X は Y です (desu) + watashi',
    lessons: [
      {
        id: 'tokyo-1',
        title: 'Arriving in Japan',
        description: 'At the airport: customs, the first bow, finding the train.',
        steps: [
          { type: 'vocab', word: '空港', article: null, english: 'airport — kūkō', example: '空港は 大きいです。(Kūkō wa ōkii desu.) — The airport is big.' },
          { type: 'vocab', word: 'パスポート', article: null, english: 'passport — pasupōto', example: 'パスポートを お願いします。(Pasupōto o onegai shimasu.) — Passport, please.' },
          { type: 'vocab', word: 'こんにちは', article: null, english: 'hello / good day — konnichiwa', example: 'こんにちは！(Konnichiwa!) — Hello!' },
          { type: 'vocab', word: 'ありがとう', article: null, english: 'thank you — arigatō', example: 'ありがとう ございます。(Arigatō gozaimasu.) — Thank you very much.' },
          { type: 'vocab', word: 'すみません', article: null, english: 'excuse me / sorry — sumimasen', example: 'すみません、駅は？(Sumimasen, eki wa?) — Excuse me, the station?' },
          { type: 'vocab', word: 'わたし', article: null, english: 'I / me — watashi', example: 'わたしは ブラジル人です。(Watashi wa Burajiru-jin desu.) — I am Brazilian.' },
          { type: 'grammar', title: 'X は Y です (desu)', explanation: 'The basic sentence: [topic] wa [thing] desu = "[topic] is [thing]". は (written ha, read "wa") marks the topic; です (desu) is the polite "is/am/are". Drop nothing, add no article.', examples: ['わたしは 学生です。(Watashi wa gakusei desu.) — I am a student.', 'これは ペンです。(Kore wa pen desu.) — This is a pen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you" in Japanese?', options: ['konnichiwa', 'arigatō', 'sumimasen', 'sayōnara'], correct: 'arigatō' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Watashi ___ Burajiru-jin desu. (topic particle)', correct: 'wa' },
        ],
      },
      {
        id: 'tokyo-2',
        title: 'Names and introductions',
        description: 'At Shibuya: saying your name, where you are from, nice to meet you.',
        steps: [
          { type: 'vocab', word: '名前', article: null, english: 'name — namae', example: 'お名前は？(O-namae wa?) — Your name?' },
          { type: 'vocab', word: 'はじめまして', article: null, english: 'how do you do (first meeting) — hajimemashite', example: 'はじめまして。(Hajimemashite.) — Nice to meet you.' },
          { type: 'vocab', word: 'よろしく', article: null, english: 'pleased to meet you — yoroshiku', example: 'どうぞ よろしく。(Dōzo yoroshiku.) — Pleased to meet you.' },
          { type: 'vocab', word: '日本', article: null, english: 'Japan — Nihon', example: '日本は すてきです。(Nihon wa suteki desu.) — Japan is wonderful.' },
          { type: 'vocab', word: 'ブラジル', article: null, english: 'Brazil — Burajiru', example: 'ブラジルから 来ました。(Burajiru kara kimashita.) — I came from Brazil.' },
          { type: 'vocab', word: 'さようなら', article: null, english: 'goodbye — sayōnara', example: 'さようなら！(Sayōnara!) — Goodbye!' },
          { type: 'grammar', title: '〜から 来ました (kara kimashita)', explanation: '[place] kara kimashita = "I came from [place]". から (kara) = "from". Pair it with the introduction set: Hajimemashite, [name] desu, [country] kara kimashita, dōzo yoroshiku.', examples: ['ブラジルから 来ました。(Burajiru kara kimashita.)', '東京から 来ました。(Tōkyō kara kimashita.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'You meet someone for the first time. What do you say?', options: ['Sayōnara', 'Hajimemashite', 'Arigatō', 'Itadakimasu'], correct: 'Hajimemashite' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Burajiru ___ kimashita. (from)', correct: 'kara' },
        ],
      },
    ],
    places: [
      {
        id: 'tok-narita', name: 'Narita Airport', icon: '✈️',
        coords: [35.772, 140.392], wikiTitle: 'Narita International Airport',
        narrative: 'Your plane touches down at Narita. You clear immigration, bow back when the officer bows, and follow the signs for the train into the city.',
        phrases: [
          { ja: 'こんにちは。', romaji: 'Konnichiwa.', en: 'Hello.' },
          { ja: 'パスポートを お願いします。', romaji: 'Pasupōto o onegai shimasu.', en: 'Passport, please.' },
          { ja: '駅は どこですか？', romaji: 'Eki wa doko desu ka?', en: 'Where is the station?' },
        ],
        lessonId: 'tokyo-1',
        quiz: {
          question: 'Bowing (お辞儀, ojigi) in Japan mainly expresses what?',
          options: ['Respect and greeting', 'Disagreement', 'Hunger'],
          correct: 'Respect and greeting',
          explanation: 'A bow can mean hello, thank you, sorry or respect — the depth signals how formal it is.',
        },
      },
      {
        id: 'tok-shinjuku', name: 'Shinjuku Station', icon: '\u{1F684}',
        coords: [35.690, 139.700], wikiTitle: 'Shinjuku Station',
        narrative: 'Shinjuku is the busiest railway station in the world — over three million people a day. You find your platform among hundreds and feel the city’s pulse.',
        phrases: [
          { ja: 'すみません。', romaji: 'Sumimasen.', en: 'Excuse me.' },
          { ja: 'この 電車ですか？', romaji: 'Kono densha desu ka?', en: 'Is it this train?' },
        ],
        quiz: {
          question: 'Shinjuku Station holds what world record?',
          options: ['Busiest station on earth', 'Oldest station in Asia', 'Highest station'],
          correct: 'Busiest station on earth',
          explanation: 'It handles more passengers per day than any other station — a Guinness record.',
        },
      },
      {
        id: 'tok-shibuya', name: 'Shibuya Crossing', icon: '\u{1F6CD}️',
        coords: [35.6595, 139.7005], wikiTitle: 'Shibuya Crossing',
        narrative: 'At the Shibuya scramble, every light turns red at once and a thousand people cross from all sides. You step in, swept along, and practise your first introduction.',
        phrases: [
          { ja: 'はじめまして。', romaji: 'Hajimemashite.', en: 'Nice to meet you.' },
          { ja: 'わたしは マリアです。', romaji: 'Watashi wa Maria desu.', en: 'I am Maria.' },
          { ja: 'どうぞ よろしく。', romaji: 'Dōzo yoroshiku.', en: 'Pleased to meet you.' },
        ],
        lessonId: 'tokyo-2',
        quiz: {
          question: 'Shibuya Crossing is famous as the world’s busiest what?',
          options: ['Pedestrian crossing', 'Fish market', 'Airport'],
          correct: 'Pedestrian crossing',
          explanation: 'Up to ~3,000 people cross at a time when the signals stop traffic on every side.',
        },
      },
      {
        id: 'tok-meiji', name: 'Meiji Jingu', icon: '⛩️',
        coords: [35.6764, 139.6993], wikiTitle: 'Meiji Shrine',
        narrative: 'Through a giant wooden torii the noise fades into forest. At Meiji Jingu you learn the shrine etiquette: bow, toss a coin, two bows, two claps, one bow.',
        phrases: [
          { ja: 'お参りします。', romaji: 'O-mairi shimasu.', en: 'I’ll pay my respects.' },
          { ja: 'すてきですね。', romaji: 'Suteki desu ne.', en: 'It’s lovely, isn’t it.' },
        ],
        quiz: {
          question: 'A torii gate marks the entrance to what?',
          options: ['A Shinto shrine', 'A subway', 'A market'],
          correct: 'A Shinto shrine',
          explanation: 'The torii separates the everyday world from the sacred grounds of a Shinto shrine.',
        },
      },
      {
        id: 'tok-asakusa', name: 'Sensō-ji, Asakusa', icon: '\u{1F3EF}',
        coords: [35.7148, 139.7967], wikiTitle: 'Sensō-ji',
        narrative: 'Asakusa keeps old Tokyo alive. You pass the great red lantern of Kaminarimon to Sensō-ji, the city’s oldest temple, and draw a paper fortune.',
        phrases: [
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?' },
          { ja: 'きれいです。', romaji: 'Kirei desu.', en: 'It’s beautiful.' },
        ],
        quiz: {
          question: 'Sensō-ji in Asakusa is Tokyo’s oldest what?',
          options: ['Temple', 'Train line', 'Skyscraper'],
          correct: 'Temple',
          explanation: 'Founded in 645, Sensō-ji is the oldest temple in Tokyo.',
        },
      },
      {
        id: 'tok-tower', name: 'Tokyo Tower', icon: '\u{1F5FC}',
        coords: [35.6586, 139.7454], wikiTitle: 'Tokyo Tower',
        narrative: 'As dusk falls you ride up Tokyo Tower. The metropolis spreads out endlessly, lights to the horizon — the biggest city on earth.',
        phrases: [
          { ja: 'たかいです。', romaji: 'Takai desu.', en: 'It’s tall / high.' },
          { ja: 'すごいですね！', romaji: 'Sugoi desu ne!', en: 'Amazing, isn’t it!' },
        ],
        quiz: {
          question: 'Tokyo Tower’s design is based on which European landmark?',
          options: ['The Eiffel Tower', 'Big Ben', 'The Colosseum'],
          correct: 'The Eiffel Tower',
          explanation: 'Built in 1958, it echoes the Eiffel Tower but is painted white and orange and is slightly taller.',
        },
      },
      {
        id: 'tok-akihabara', name: 'Akihabara', icon: '\u{1F3AE}',
        coords: [35.6984, 139.7731], wikiTitle: 'Akihabara',
        narrative: 'Akihabara blazes with neon and electronics, arcades and anime. You wander floors of games and gadgets, the soundtrack of modern Japan.',
        phrases: [
          { ja: 'いくらですか？', romaji: 'Ikura desu ka?', en: 'How much is it?' },
          { ja: '面白いです。', romaji: 'Omoshiroi desu.', en: 'It’s interesting / fun.' },
        ],
        quiz: {
          question: 'Akihabara is best known as the centre of what culture?',
          options: ['Electronics & anime', 'Tea ceremony', 'Sumo'],
          correct: 'Electronics & anime',
          explanation: '“Akiba” is the hub of Japan’s electronics, gaming and otaku (anime/manga) culture.',
        },
      },
      {
        id: 'tok-ueno', name: 'Ueno Park', icon: '\u{1F338}',
        coords: [35.7156, 139.7745], wikiTitle: 'Ueno Park',
        narrative: 'In spring Ueno Park turns pink with cherry blossom. Families picnic under the trees for hanami — a gentle farewell to Tokyo before the road south.',
        phrases: [
          { ja: '桜が きれいです。', romaji: 'Sakura ga kirei desu.', en: 'The cherry blossoms are beautiful.' },
          { ja: 'さようなら、東京。', romaji: 'Sayōnara, Tōkyō.', en: 'Goodbye, Tokyo.' },
        ],
        quiz: {
          question: 'Viewing cherry blossoms in spring is called what?',
          options: ['Hanami', 'Onsen', 'Karaoke'],
          correct: 'Hanami',
          explanation: 'Hanami (“flower viewing”) is the custom of picnicking under blossoming sakura trees.',
        },
      },
    ],
  },

  {
    id: 'fuji',
    name: 'Mount Fuji',
    tagline: '富士山へ！ (Fujisan e!)',
    theme: 'Nature, numbers & onsen',
    accentColor: '#65C090',
    icon: '\u{1F5FB}',
    description:
      'West of Tokyo the land rises to Hakone, gateway to Mt Fuji. Between volcanic ' +
      'valleys and a crater lake, the traveller soaks in a hot spring, counts in ' +
      'Japanese, and learns to point: this one, that one, that one over there.',
    descriptionEn:
      'West of Tokyo the land rises to Hakone, gateway to Mt Fuji. Between volcanic ' +
      'valleys and a crater lake, the traveller soaks in a hot spring, counts in ' +
      'Japanese, and learns to point: this one, that one, that one over there.',
    photos: [
      { wikiTitle: 'Mount Fuji', alt: 'Mount Fuji', caption: 'Mt Fuji — Japan’s highest mountain (3,776 m)' },
      { wikiTitle: 'Onsen', alt: 'Japanese hot spring', caption: 'An onsen, a volcanic hot-spring bath' },
    ],
    vocabTopics: ['Nature', 'Numbers 1–10', 'kore / sore / are'],
    grammarTopic: 'kore / sore / are + numbers',
    lessons: [
      {
        id: 'fuji-1',
        title: 'The mountain and numbers',
        description: 'Facing Mt Fuji: nature words and counting from one to ten.',
        steps: [
          { type: 'vocab', word: '山', article: null, english: 'mountain — yama', example: '富士山は 高いです。(Fujisan wa takai desu.) — Mt Fuji is high.' },
          { type: 'vocab', word: '湖', article: null, english: 'lake — mizuumi', example: '湖は きれいです。(Mizuumi wa kirei desu.) — The lake is beautiful.' },
          { type: 'vocab', word: '一、二、三', article: null, english: 'one, two, three — ichi, ni, san', example: '一、二、三！(Ichi, ni, san!) — One, two, three!' },
          { type: 'vocab', word: '四、五、六', article: null, english: 'four, five, six — shi/yon, go, roku', example: '四、五、六。(Yon, go, roku.) — Four, five, six.' },
          { type: 'vocab', word: '七、八、九、十', article: null, english: 'seven, eight, nine, ten — nana, hachi, kyū, jū', example: '七、八、九、十。(Nana, hachi, kyū, jū.) — 7, 8, 9, 10.' },
          { type: 'vocab', word: '高い', article: null, english: 'high / tall / expensive — takai', example: 'とても 高いです。(Totemo takai desu.) — It is very high.' },
          { type: 'grammar', title: 'Numbers 1–10', explanation: 'ichi (1), ni (2), san (3), yon/shi (4), go (5), roku (6), nana/shichi (7), hachi (8), kyū/ku (9), jū (10). Four and seven have two readings; yon and nana are the safe, common ones.', examples: ['コーヒーを 一つ。(Kōhī o hitotsu.) — One coffee.', '十分。(Jūppun.) — Ten minutes.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "three"?', options: ['ni', 'san', 'go', 'jū'], correct: 'san' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Fujisan wa ___ desu. (high / tall)', correct: 'takai' },
        ],
      },
      {
        id: 'fuji-2',
        title: 'At the onsen',
        description: 'Hot-spring etiquette and pointing: this, that, that over there.',
        steps: [
          { type: 'vocab', word: '温泉', article: null, english: 'hot spring — onsen', example: '温泉は 気持ちいいです。(Onsen wa kimochi ii desu.) — The hot spring feels good.' },
          { type: 'vocab', word: 'お湯', article: null, english: 'hot water / bath — o-yu', example: 'お湯は あついです。(O-yu wa atsui desu.) — The water is hot.' },
          { type: 'vocab', word: 'これ', article: null, english: 'this one (near me) — kore', example: 'これは 何ですか？(Kore wa nan desu ka?) — What is this?' },
          { type: 'vocab', word: 'それ', article: null, english: 'that one (near you) — sore', example: 'それを ください。(Sore o kudasai.) — That one, please.' },
          { type: 'vocab', word: 'あれ', article: null, english: 'that one over there — are', example: 'あれは 富士山です。(Are wa Fujisan desu.) — That over there is Mt Fuji.' },
          { type: 'vocab', word: 'あつい', article: null, english: 'hot (to touch) — atsui', example: 'とても あついです！(Totemo atsui desu!) — It is very hot!' },
          { type: 'grammar', title: 'kore / sore / are', explanation: 'Three pointing words by distance: kore = this (near me), sore = that (near you), are = that over there (away from both). They replace a noun: Kore wa pen desu = "This is a pen".', examples: ['これは わたしのです。(Kore wa watashi no desu.) — This is mine.', 'あれは 何ですか？(Are wa nan desu ka?) — What is that over there?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'You point at something far from both of you. Which word?', options: ['kore', 'sore', 'are', 'dore'], correct: 'are' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ o kudasai. (that one, near you)', correct: 'sore' },
        ],
      },
    ],
    places: [
      {
        id: 'hak-fuji', name: 'Mt Fuji viewpoint', icon: '\u{1F5FB}',
        coords: [35.3606, 138.7274], wikiTitle: 'Mount Fuji',
        narrative: 'The clouds part and Mt Fuji appears, perfect and snow-capped above the lakes — Japan’s highest mountain and a sacred volcano.',
        phrases: [
          { ja: 'あれは 富士山です。', romaji: 'Are wa Fujisan desu.', en: 'That over there is Mt Fuji.' },
          { ja: 'とても 高いです。', romaji: 'Totemo takai desu.', en: 'It is very high.' },
        ],
        lessonId: 'fuji-1',
        quiz: {
          question: 'Mt Fuji is Japan’s highest mountain — and also a what?',
          options: ['Volcano', 'Glacier', 'Waterfall'],
          correct: 'Volcano',
          explanation: 'Fuji is an active stratovolcano, 3,776 m high; its last eruption was in 1707.',
        },
      },
      {
        id: 'hak-onsen', name: 'Hakone onsen', icon: '♨️',
        coords: [35.2328, 139.1069], wikiTitle: 'Hakone, Kanagawa',
        narrative: 'You wash first, then sink into the steaming onsen, Fuji somewhere beyond the steam. The rule: clean before you soak, and no towel in the water.',
        phrases: [
          { ja: '気持ちいいです。', romaji: 'Kimochi ii desu.', en: 'It feels wonderful.' },
          { ja: 'お湯は あついです。', romaji: 'O-yu wa atsui desu.', en: 'The water is hot.' },
        ],
        lessonId: 'fuji-2',
        quiz: {
          question: 'Before entering an onsen bath, you must always do what?',
          options: ['Wash your body first', 'Wear a swimsuit', 'Bring soap into the water'],
          correct: 'Wash your body first',
          explanation: 'You scrub and rinse at the showers first; the bath itself is only for soaking, kept clean for all.',
        },
      },
      {
        id: 'hak-owakudani', name: 'Owakudani ropeway', icon: '\u{1F6A0}',
        coords: [35.2445, 139.0193], wikiTitle: 'Ōwakudani',
        narrative: 'A cable car lifts you over Owakudani, a steaming volcanic valley where sulphur vents hiss yellow from the earth.',
        phrases: [
          { ja: 'すごいですね！', romaji: 'Sugoi desu ne!', en: 'Incredible, isn’t it!' },
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?' },
        ],
        quiz: {
          question: 'Owakudani is a valley shaped by what natural force?',
          options: ['Volcanic activity', 'Ocean tides', 'Glaciers'],
          correct: 'Volcanic activity',
          explanation: 'It was created by an eruption of Mt Hakone ~3,000 years ago; sulphurous steam still rises today.',
        },
      },
      {
        id: 'hak-ashi', name: 'Lake Ashi', icon: '⛵',
        coords: [35.2033, 139.0247], wikiTitle: 'Lake Ashi',
        narrative: 'On Lake Ashi a red “pirate ship” ferries you across calm water to a torii gate that stands in the lake itself, Fuji reflected behind it.',
        phrases: [
          { ja: '湖は 静かです。', romaji: 'Mizuumi wa shizuka desu.', en: 'The lake is calm.' },
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.' },
        ],
        quiz: {
          question: 'What stands in the water of Lake Ashi as a famous photo spot?',
          options: ['A red torii gate', 'A lighthouse', 'A windmill'],
          correct: 'A red torii gate',
          explanation: 'The torii of Hakone Shrine rises from the lake, with Mt Fuji often framed behind it.',
        },
      },
      {
        id: 'hak-eggs', name: 'Black eggs', icon: '\u{1F95A}',
        coords: [35.2440, 139.0200], wikiTitle: 'Ōwakudani',
        narrative: 'Back at Owakudani you try kuro-tamago: eggs boiled in the sulphur springs until their shells turn jet black. One egg, they say, adds seven years to your life.',
        phrases: [
          { ja: '一つ ください。', romaji: 'Hitotsu kudasai.', en: 'One, please.' },
          { ja: 'おいしいです！', romaji: 'Oishii desu!', en: 'It’s delicious!' },
        ],
        quiz: {
          question: 'Owakudani’s black eggs get their colour from what?',
          options: ['Sulphur in the spring water', 'Black paint', 'Soy sauce'],
          correct: 'Sulphur in the spring water',
          explanation: 'Boiling in the iron- and sulphur-rich hot spring blackens the shells; locals say one adds 7 years of life.',
        },
      },
    ],
  },

  {
    id: 'kyoto',
    name: 'Kyoto',
    tagline: 'ようこそ 京都へ (Yōkoso Kyōto e)',
    theme: 'Directions & courtesy',
    accentColor: '#C84B31',
    icon: '⛩️',
    description:
      'Kyoto was the imperial capital for a thousand years — a city of temples, ' +
      'gardens and geisha. Here the traveller learns to ask the way politely, with ' +
      'sumimasen on the lips and a bow ready.',
    descriptionEn:
      'Kyoto was the imperial capital for a thousand years — a city of temples, ' +
      'gardens and geisha. Here the traveller learns to ask the way politely, with ' +
      'sumimasen on the lips and a bow ready.',
    photos: [
      { wikiTitle: 'Fushimi Inari-taisha', alt: 'Torii gates of Fushimi Inari', caption: 'Fushimi Inari — thousands of vermilion torii' },
      { wikiTitle: 'Kinkaku-ji', alt: 'Golden Pavilion', caption: 'Kinkaku-ji, the Golden Pavilion' },
    ],
    vocabTopics: ['Directions', 'Politeness', 'Places in town'],
    grammarTopic: 'doko / migi / hidari + ~wa doko desu ka',
    lessons: [
      {
        id: 'kyoto-1',
        title: 'Asking the way',
        description: 'Directions through the torii: where, right, left, straight on.',
        steps: [
          { type: 'vocab', word: 'どこ', article: null, english: 'where — doko', example: 'トイレは どこですか？(Toire wa doko desu ka?) — Where is the toilet?' },
          { type: 'vocab', word: '右', article: null, english: 'right — migi', example: '右に あります。(Migi ni arimasu.) — It’s on the right.' },
          { type: 'vocab', word: '左', article: null, english: 'left — hidari', example: '左へ どうぞ。(Hidari e dōzo.) — To the left, please.' },
          { type: 'vocab', word: 'まっすぐ', article: null, english: 'straight ahead — massugu', example: 'まっすぐです。(Massugu desu.) — It’s straight ahead.' },
          { type: 'vocab', word: '駅', article: null, english: 'station — eki', example: '駅は あそこです。(Eki wa asoko desu.) — The station is over there.' },
          { type: 'vocab', word: 'お寺', article: null, english: 'temple — o-tera', example: 'お寺は 静かです。(O-tera wa shizuka desu.) — The temple is quiet.' },
          { type: 'grammar', title: '〜は どこですか？', explanation: '[place] wa doko desu ka? = "Where is [place]?" Start with Sumimasen (excuse me). Answers use migi (right), hidari (left), massugu (straight), asoko (over there) + ni arimasu (it is/exists there).', examples: ['駅は どこですか？(Eki wa doko desu ka?) — Where is the station?', '右に あります。(Migi ni arimasu.) — It’s on the right.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "right" (direction)?', options: ['hidari', 'migi', 'massugu', 'doko'], correct: 'migi' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Eki wa ___ desu ka? (where)', correct: 'doko' },
        ],
      },
      {
        id: 'kyoto-2',
        title: 'Courtesy in Gion',
        description: 'Polite words in the geisha district: excuse me, please, sorry.',
        steps: [
          { type: 'vocab', word: 'すみません', article: null, english: 'excuse me / sorry — sumimasen', example: 'すみません、ちょっと…(Sumimasen, chotto…) — Excuse me, just a moment…' },
          { type: 'vocab', word: 'お願いします', article: null, english: 'please (a request) — onegai shimasu', example: 'これを お願いします。(Kore o onegai shimasu.) — This one, please.' },
          { type: 'vocab', word: 'ごめんなさい', article: null, english: 'I’m sorry — gomen nasai', example: 'ごめんなさい。(Gomen nasai.) — I’m sorry.' },
          { type: 'vocab', word: 'だいじょうぶ', article: null, english: 'it’s okay / fine — daijōbu', example: '大丈夫です。(Daijōbu desu.) — It’s fine.' },
          { type: 'vocab', word: 'ちょっと', article: null, english: 'a little / a bit — chotto', example: 'ちょっと 待ってください。(Chotto matte kudasai.) — Wait a moment, please.' },
          { type: 'vocab', word: 'いいですか', article: null, english: 'is it okay? / may I? — ii desu ka', example: '写真、いいですか？(Shashin, ii desu ka?) — Is a photo okay?' },
          { type: 'grammar', title: 'sumimasen — the all-purpose word', explanation: 'Sumimasen does triple duty: “excuse me” (to get attention), “sorry” (light apology) and even “thank you” (for trouble caused). For a sincere apology use gomen nasai; to ask permission, end with ii desu ka?', examples: ['すみません！(Sumimasen!) — Excuse me! / Sorry!', '写真、いいですか？(Shashin, ii desu ka?) — May I take a photo?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'You want to get a waiter’s attention politely. What do you say?', options: ['Sayōnara', 'Sumimasen', 'Oishii', 'Daijōbu'], correct: 'Sumimasen' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Kore o ___ shimasu. (please / request)', correct: 'onegai' },
        ],
      },
    ],
    places: [
      {
        id: 'kyo-fushimi', name: 'Fushimi Inari', icon: '⛩️',
        coords: [34.9671, 135.7727], wikiTitle: 'Fushimi Inari-taisha',
        narrative: 'You climb through thousands of vermilion torii at Fushimi Inari, an endless tunnel of gates winding up the sacred mountain.',
        phrases: [
          { ja: 'すみません、頂上は どこですか？', romaji: 'Sumimasen, chōjō wa doko desu ka?', en: 'Excuse me, where is the summit?' },
          { ja: 'まっすぐですか？', romaji: 'Massugu desu ka?', en: 'Is it straight ahead?' },
        ],
        lessonId: 'kyoto-1',
        quiz: {
          question: 'Fushimi Inari is famous for thousands of what?',
          options: ['Vermilion torii gates', 'Stone lanterns', 'Golden statues'],
          correct: 'Vermilion torii gates',
          explanation: 'Some 10,000 torii, donated by worshippers, form tunnels up Mt Inari, shrine of the rice deity.',
        },
      },
      {
        id: 'kyo-kinkakuji', name: 'Kinkaku-ji', icon: '\u{1F3EF}',
        coords: [35.0394, 135.7292], wikiTitle: 'Kinkaku-ji',
        narrative: 'Across a still pond the Golden Pavilion glows, its top two floors covered in gold leaf and mirrored perfectly in the water.',
        phrases: [
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.' },
          { ja: '写真、いいですか？', romaji: 'Shashin, ii desu ka?', en: 'May I take a photo?' },
        ],
        quiz: {
          question: 'Kinkaku-ji is covered in what material?',
          options: ['Gold leaf', 'Silver', 'Bamboo'],
          correct: 'Gold leaf',
          explanation: 'The Golden Pavilion’s upper floors are coated in real gold leaf, reflected in the surrounding pond.',
        },
      },
      {
        id: 'kyo-arashiyama', name: 'Arashiyama bamboo', icon: '\u{1F38B}',
        coords: [35.0170, 135.6716], wikiTitle: 'Arashiyama',
        narrative: 'In the Arashiyama grove, towering green bamboo creaks and sways overhead, the light falling in soft stripes onto the path.',
        phrases: [
          { ja: '静かですね。', romaji: 'Shizuka desu ne.', en: 'It’s peaceful, isn’t it.' },
          { ja: 'すごいです！', romaji: 'Sugoi desu!', en: 'Wow / amazing!' },
        ],
        quiz: {
          question: 'The Arashiyama grove is made of what plant?',
          options: ['Bamboo', 'Cherry trees', 'Pine'],
          correct: 'Bamboo',
          explanation: 'Its towering bamboo stalks form one of Japan’s most photographed natural corridors.',
        },
      },
      {
        id: 'kyo-gion', name: 'Gion', icon: '\u{1F458}',
        coords: [35.0037, 135.7752], wikiTitle: 'Gion',
        narrative: 'At dusk in Gion, lanterns light wooden teahouses and — if you are lucky — a geiko hurries by in silk. You step aside politely, sumimasen.',
        phrases: [
          { ja: 'すみません。', romaji: 'Sumimasen.', en: 'Excuse me / sorry.' },
          { ja: '写真、いいですか？', romaji: 'Shashin, ii desu ka?', en: 'Is a photo okay?' },
          { ja: 'ありがとう ございます。', romaji: 'Arigatō gozaimasu.', en: 'Thank you very much.' },
        ],
        lessonId: 'kyoto-2',
        quiz: {
          question: 'Gion is Kyoto’s historic district famous for whom?',
          options: ['Geisha (geiko & maiko)', 'Samurai armies', 'Sumo wrestlers'],
          correct: 'Geisha (geiko & maiko)',
          explanation: 'Gion is the best-known hanamachi, the quarter where geiko and apprentice maiko live and perform.',
        },
      },
      {
        id: 'kyo-kiyomizu', name: 'Kiyomizu-dera', icon: '\u{1F6D5}',
        coords: [34.9949, 135.7851], wikiTitle: 'Kiyomizu-dera',
        narrative: 'Kiyomizu-dera’s vast wooden stage juts out over the hillside, built without a single nail, the whole city of Kyoto spread below.',
        phrases: [
          { ja: 'ここは どこですか？', romaji: 'Koko wa doko desu ka?', en: 'Where are we (what place is this)?' },
          { ja: '高いですね！', romaji: 'Takai desu ne!', en: 'It’s high up, isn’t it!' },
        ],
        quiz: {
          question: 'Kiyomizu-dera’s famous stage was built using no what?',
          options: ['Nails', 'Wood', 'Stone'],
          correct: 'Nails',
          explanation: 'Its huge wooden stage is held together by joinery alone — not a single nail was used.',
        },
      },
      {
        id: 'kyo-tea', name: 'Tea ceremony', icon: '\u{1F375}',
        coords: [34.9858, 135.7588], wikiTitle: 'Japanese tea ceremony',
        narrative: 'In a quiet tatami room you kneel for a tea ceremony. The host whisks matcha to a green froth; you turn the bowl, bow, and drink in three sips.',
        phrases: [
          { ja: 'いただきます。', romaji: 'Itadakimasu.', en: 'I gratefully receive (before consuming).' },
          { ja: 'おいしいです。', romaji: 'Oishii desu.', en: 'It’s delicious.' },
        ],
        quiz: {
          question: 'The green tea whisked in a Japanese tea ceremony is called what?',
          options: ['Matcha', 'Sencha', 'Sake'],
          correct: 'Matcha',
          explanation: 'Matcha, a powdered green tea, is whisked with hot water into a froth in the chadō ceremony.',
        },
      },
    ],
  },

  {
    id: 'osaka',
    name: 'Osaka',
    tagline: 'めし めし！ (Meshi meshi!)',
    theme: 'Food & ordering',
    accentColor: '#F4A300',
    icon: '\u{1F35C}',
    description:
      'Osaka is Japan’s kitchen — loud, warm and hungry. Under the neon of ' +
      'Dōtonbori the traveller eats their way through the city, learning to order, ' +
      'to count things, and to say the most important word: oishii, delicious.',
    descriptionEn:
      'Osaka is Japan’s kitchen — loud, warm and hungry. Under the neon of ' +
      'Dōtonbori the traveller eats their way through the city, learning to order, ' +
      'to count things, and to say the most important word: oishii, delicious.',
    photos: [
      { wikiTitle: 'Dōtonbori', alt: 'Dōtonbori neon', caption: 'Dōtonbori — Osaka’s neon food street' },
      { wikiTitle: 'Takoyaki', alt: 'Takoyaki octopus balls', caption: 'Takoyaki, Osaka’s octopus dumplings' },
    ],
    vocabTopics: ['Food', 'Ordering', 'Counting things'],
    grammarTopic: '〜を ください (kudasai) + counters',
    lessons: [
      {
        id: 'osaka-1',
        title: 'Ordering food',
        description: 'In Dōtonbori: asking for things with kudasai, paying the bill.',
        steps: [
          { type: 'vocab', word: 'たべもの', article: null, english: 'food — tabemono', example: '大阪の たべものは おいしいです。(Ōsaka no tabemono wa oishii desu.) — Osaka’s food is delicious.' },
          { type: 'vocab', word: '水', article: null, english: 'water — mizu', example: 'お水を ください。(O-mizu o kudasai.) — Water, please.' },
          { type: 'vocab', word: 'お茶', article: null, english: 'tea — o-cha', example: 'お茶を 一つ ください。(O-cha o hitotsu kudasai.) — One tea, please.' },
          { type: 'vocab', word: 'ください', article: null, english: 'please (give me) — kudasai', example: 'これを ください。(Kore o kudasai.) — This one, please.' },
          { type: 'vocab', word: 'いくら', article: null, english: 'how much — ikura', example: 'いくらですか？(Ikura desu ka?) — How much is it?' },
          { type: 'vocab', word: 'おいしい', article: null, english: 'delicious — oishii', example: 'とても おいしいです！(Totemo oishii desu!) — Very delicious!' },
          { type: 'grammar', title: '〜を ください (o kudasai)', explanation: '[thing] o kudasai = "[thing], please / give me [thing]". を (o) marks the object you want. Add a number+counter before kudasai to say how many: Bīru o futatsu kudasai = "Two beers, please".', examples: ['コーヒーを ください。(Kōhī o kudasai.) — A coffee, please.', 'お勘定を お願いします。(O-kanjō o onegai shimasu.) — The bill, please.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "delicious"?', options: ['oishii', 'ikura', 'mizu', 'takai'], correct: 'oishii' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Kore o ___. (please give me)', correct: 'kudasai' },
        ],
      },
      {
        id: 'osaka-2',
        title: 'Counting things',
        description: 'At a takoyaki stall: counting one, two, three of something.',
        steps: [
          { type: 'vocab', word: '一つ', article: null, english: 'one (thing) — hitotsu', example: '一つ ください。(Hitotsu kudasai.) — One, please.' },
          { type: 'vocab', word: '二つ', article: null, english: 'two (things) — futatsu', example: '二つ お願いします。(Futatsu onegai shimasu.) — Two, please.' },
          { type: 'vocab', word: '三つ', article: null, english: 'three (things) — mittsu', example: '三つ ください。(Mittsu kudasai.) — Three, please.' },
          { type: 'vocab', word: 'たこ焼き', article: null, english: 'takoyaki (octopus balls) — takoyaki', example: 'たこ焼きを 一つ。(Takoyaki o hitotsu.) — One takoyaki.' },
          { type: 'vocab', word: 'ビール', article: null, english: 'beer — bīru', example: 'ビールを 二つ ください。(Bīru o futatsu kudasai.) — Two beers, please.' },
          { type: 'vocab', word: '全部で', article: null, english: 'in total / all together — zenbu de', example: '全部で いくらですか？(Zenbu de ikura desu ka?) — How much in total?' },
          { type: 'grammar', title: 'Counting things: hitotsu, futatsu…', explanation: 'The all-purpose counter for objects: hitotsu (1), futatsu (2), mittsu (3), yottsu (4), itsutsu (5)… tō (10). Use it for food and most countable things when you don’t know the special counter. Number comes after the noun: Takoyaki o futatsu kudasai.', examples: ['ビールを 三つ ください。(Bīru o mittsu kudasai.) — Three beers, please.', '一つ ください。(Hitotsu kudasai.) — One, please.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which means "two (things)"?', options: ['hitotsu', 'futatsu', 'mittsu', 'itsutsu'], correct: 'futatsu' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Takoyaki o ___ kudasai. (one thing)', correct: 'hitotsu' },
        ],
      },
    ],
    places: [
      {
        id: 'osa-castle', name: 'Osaka Castle', icon: '\u{1F3EF}',
        coords: [34.6873, 135.5259], wikiTitle: 'Osaka Castle',
        narrative: 'Osaka Castle rises white and green-gold above its moat, a samurai-era stronghold ringed by cherry trees and stone walls.',
        phrases: [
          { ja: 'ここは 大阪城です。', romaji: 'Koko wa Ōsaka-jō desu.', en: 'This is Osaka Castle.' },
          { ja: '古いですね。', romaji: 'Furui desu ne.', en: 'It’s old, isn’t it.' },
        ],
        quiz: {
          question: 'Osaka Castle dates from which era of Japanese history?',
          options: ['The samurai era (16th c.)', 'The 20th century', 'Ancient Jomon times'],
          correct: 'The samurai era (16th c.)',
          explanation: 'It was built in the 1580s by warlord Toyotomi Hideyoshi as he unified Japan.',
        },
      },
      {
        id: 'osa-dotonbori', name: 'Dōtonbori', icon: '\u{1F361}',
        coords: [34.6687, 135.5013], wikiTitle: 'Dōtonbori',
        narrative: 'Night in Dōtonbori: canalside neon, the running Glico man, giant mechanical crabs, and the smell of grilling street food everywhere.',
        phrases: [
          { ja: 'これを ください。', romaji: 'Kore o kudasai.', en: 'This one, please.' },
          { ja: 'いくらですか？', romaji: 'Ikura desu ka?', en: 'How much is it?' },
        ],
        lessonId: 'osaka-1',
        quiz: {
          question: 'Osaka is nicknamed “the nation’s ___” because of its food.',
          options: ['Kitchen', 'Library', 'Garden'],
          correct: 'Kitchen',
          explanation: 'Tenka no daidokoro — “the nation’s kitchen” — reflects Osaka’s long love of eating well.',
        },
      },
      {
        id: 'osa-takoyaki', name: 'Takoyaki stall', icon: '\u{1F419}',
        coords: [34.6686, 135.5030], wikiTitle: 'Takoyaki',
        narrative: 'At a street stall a cook turns rows of takoyaki in their molds, crisp outside and molten in, each hiding a piece of octopus. You order two.',
        phrases: [
          { ja: 'たこ焼きを 二つ ください。', romaji: 'Takoyaki o futatsu kudasai.', en: 'Two takoyaki, please.' },
          { ja: 'おいしいです！', romaji: 'Oishii desu!', en: 'It’s delicious!' },
        ],
        lessonId: 'osaka-2',
        quiz: {
          question: 'What is hidden inside a ball of takoyaki?',
          options: ['A piece of octopus', 'Cheese', 'Red bean paste'],
          correct: 'A piece of octopus',
          explanation: 'Tako means octopus; each batter ball wraps a chunk of it — Osaka’s signature snack.',
        },
      },
      {
        id: 'osa-kuromon', name: 'Kuromon Market', icon: '\u{1F6D2}',
        coords: [34.6647, 135.5063], wikiTitle: 'Kuromon Ichiba',
        narrative: 'Kuromon Market is a covered street of stalls — fresh fish on ice, fruit, grilled scallops — “Osaka’s kitchen” at its busiest.',
        phrases: [
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?' },
          { ja: '一つ ください。', romaji: 'Hitotsu kudasai.', en: 'One, please.' },
        ],
        quiz: {
          question: 'Kuromon Ichiba is what kind of place?',
          options: ['A food market', 'A temple', 'A train depot'],
          correct: 'A food market',
          explanation: 'A 600 m covered market of ~150 stalls, famous for fresh seafood and street eats.',
        },
      },
      {
        id: 'osa-shinsekai', name: 'Shinsekai', icon: '\u{1F3A2}',
        coords: [34.6524, 135.5063], wikiTitle: 'Shinsekai',
        narrative: 'Retro Shinsekai gathers around Tsutenkaku tower, its old streets lined with kushikatsu stalls — deep-fried skewers, dipped once in shared sauce (never twice!).',
        phrases: [
          { ja: 'ビールを 一つ ください。', romaji: 'Bīru o hitotsu kudasai.', en: 'One beer, please.' },
          { ja: '全部で いくらですか？', romaji: 'Zenbu de ikura desu ka?', en: 'How much in total?' },
        ],
        quiz: {
          question: 'The big rule at a kushikatsu stall is:',
          options: ['No double-dipping the sauce', 'Always tip 20%', 'Eat with chopsticks only'],
          correct: 'No double-dipping the sauce',
          explanation: 'The dipping sauce is shared, so you dip each skewer once — never a second time.',
        },
      },
    ],
  },

  {
    id: 'hiroshima',
    name: 'Hiroshima',
    tagline: '平和を (Heiwa o)',
    theme: 'History & reflection',
    accentColor: '#4F7942',
    icon: '\u{1F54A}️',
    description:
      'Hiroshima is a city of peace, rebuilt from the 1945 atomic bomb. The traveller ' +
      'walks the Peace Park in quiet, then crosses to the floating torii of Miyajima ' +
      '— and learns to speak of what happened, in the past tense.',
    descriptionEn:
      'Hiroshima is a city of peace, rebuilt from the 1945 atomic bomb. The traveller ' +
      'walks the Peace Park in quiet, then crosses to the floating torii of Miyajima ' +
      '— and learns to speak of what happened, in the past tense.',
    photos: [
      { wikiTitle: 'Hiroshima Peace Memorial', alt: 'Genbaku Dome', caption: 'The Genbaku Dome, Hiroshima Peace Memorial' },
      { wikiTitle: 'Itsukushima Shrine', alt: 'Floating torii of Miyajima', caption: 'Miyajima’s floating torii at high tide' },
    ],
    vocabTopics: ['History & peace', 'Past tense', 'Feelings'],
    grammarTopic: '〜でした / 〜ました (past tense)',
    lessons: [
      {
        id: 'hiroshima-1',
        title: 'Speaking of the past',
        description: 'At the Peace Park: it was, it happened — the polite past tense.',
        steps: [
          { type: 'vocab', word: '平和', article: null, english: 'peace — heiwa', example: '平和が 大切です。(Heiwa ga taisetsu desu.) — Peace is important.' },
          { type: 'vocab', word: '戦争', article: null, english: 'war — sensō', example: '戦争は 悲しいです。(Sensō wa kanashii desu.) — War is sad.' },
          { type: 'vocab', word: '昔', article: null, english: 'long ago / the past — mukashi', example: '昔の ことです。(Mukashi no koto desu.) — It is a thing of the past.' },
          { type: 'vocab', word: 'でした', article: null, english: 'was / were (polite past) — deshita', example: 'いい 天気でした。(Ii tenki deshita.) — The weather was good.' },
          { type: 'vocab', word: '行きました', article: null, english: 'went — ikimashita', example: '公園に 行きました。(Kōen ni ikimashita.) — I went to the park.' },
          { type: 'vocab', word: '見ました', article: null, english: 'saw / watched — mimashita', example: '写真を 見ました。(Shashin o mimashita.) — I saw the photographs.' },
          { type: 'grammar', title: 'Past tense: ~deshita / ~mashita', explanation: 'To put a polite sentence in the past: desu → deshita (was/were); and a verb’s ~masu → ~mashita (did). So ikimasu (go) → ikimashita (went); mimasu (see) → mimashita (saw).', examples: ['静かでした。(Shizuka deshita.) — It was quiet.', '平和公園に 行きました。(Heiwa-kōen ni ikimashita.) — I went to the Peace Park.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is the past form of desu ("is")?', options: ['deshita', 'desu ka', 'masu', 'mashita'], correct: 'deshita' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Kōen ni iki___. (went — past of ikimasu)', correct: 'mashita' },
        ],
      },
      {
        id: 'hiroshima-2',
        title: 'Miyajima and okonomiyaki',
        description: 'The floating shrine, the deer, and Hiroshima’s layered pancake.',
        steps: [
          { type: 'vocab', word: '海', article: null, english: 'sea — umi', example: '海は きれいでした。(Umi wa kirei deshita.) — The sea was beautiful.' },
          { type: 'vocab', word: '鳥居', article: null, english: 'torii (shrine gate) — torii', example: '鳥居は 海の 中です。(Torii wa umi no naka desu.) — The torii is in the sea.' },
          { type: 'vocab', word: '鹿', article: null, english: 'deer — shika', example: '鹿が います。(Shika ga imasu.) — There are deer.' },
          { type: 'vocab', word: 'お好み焼き', article: null, english: 'okonomiyaki (savoury pancake) — okonomiyaki', example: 'お好み焼きを 食べました。(Okonomiyaki o tabemashita.) — I ate okonomiyaki.' },
          { type: 'vocab', word: '食べました', article: null, english: 'ate — tabemashita', example: 'とても 食べました。(Totemo tabemashita.) — I ate a lot.' },
          { type: 'vocab', word: '楽しい', article: null, english: 'fun / enjoyable — tanoshii', example: '楽しかったです。(Tanoshikatta desu.) — It was fun.' },
          { type: 'grammar', title: 'Past of verbs: ~mashita', explanation: 'Polite verbs end in ~masu (do) and ~mashita (did): tabemasu (eat) → tabemashita (ate); mimasu (see) → mimashita (saw). For i-adjectives the past is ~katta desu: tanoshii → tanoshikatta desu (was fun).', examples: ['お好み焼きを 食べました。(Okonomiyaki o tabemashita.) — I ate okonomiyaki.', '楽しかったです。(Tanoshikatta desu.) — It was fun.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which means "ate" (past of tabemasu)?', options: ['tabemasu', 'tabemashita', 'tabemasen', 'tabete'], correct: 'tabemashita' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Umi wa kirei ___. (was — past of desu)', correct: 'deshita' },
        ],
      },
    ],
    places: [
      {
        id: 'hir-peacepark', name: 'Peace Memorial Park', icon: '\u{1F54A}️',
        coords: [34.3955, 132.4536], wikiTitle: 'Hiroshima Peace Memorial Park',
        narrative: 'You walk the Peace Memorial Park in silence. The skeletal Genbaku Dome, left as it stood after 6 August 1945, watches over a city that chose peace.',
        phrases: [
          { ja: '平和が 大切です。', romaji: 'Heiwa ga taisetsu desu.', en: 'Peace is important.' },
          { ja: '静かでした。', romaji: 'Shizuka deshita.', en: 'It was quiet.' },
        ],
        lessonId: 'hiroshima-1',
        quiz: {
          question: 'The Genbaku Dome is preserved as a memorial of what 1945 event?',
          options: ['The atomic bombing', 'A great earthquake', 'A volcanic eruption'],
          correct: 'The atomic bombing',
          explanation: 'It is the one structure left standing near the hypocenter, kept as a UNESCO peace memorial.',
        },
      },
      {
        id: 'hir-bell', name: 'Peace Bell', icon: '\u{1F514}',
        coords: [34.3935, 132.4530], wikiTitle: 'Hiroshima Peace Memorial Park',
        narrative: 'Visitors ring the Peace Bell, its low tone carrying across the park — a wish for a world without nuclear weapons.',
        phrases: [
          { ja: '鐘を 鳴らしました。', romaji: 'Kane o narashimashita.', en: 'I rang the bell.' },
          { ja: '平和を 願います。', romaji: 'Heiwa o negaimasu.', en: 'I wish for peace.' },
        ],
        quiz: {
          question: 'Anyone may ring the Peace Bell to express what?',
          options: ['A wish for peace', 'The lunch hour', 'A train’s arrival'],
          correct: 'A wish for peace',
          explanation: 'The bell invites every visitor to sound a hope for lasting world peace.',
        },
      },
      {
        id: 'hir-itsukushima', name: 'Floating torii, Miyajima', icon: '⛩️',
        coords: [34.2959, 132.3199], wikiTitle: 'Itsukushima Shrine',
        narrative: 'A ferry carries you to Miyajima, where the great vermilion torii of Itsukushima seems to float on the sea at high tide.',
        phrases: [
          { ja: '鳥居は 海の 中です。', romaji: 'Torii wa umi no naka desu.', en: 'The torii is in the sea.' },
          { ja: 'きれいでした。', romaji: 'Kirei deshita.', en: 'It was beautiful.' },
        ],
        quiz: {
          question: 'At high tide, the great torii of Itsukushima appears to do what?',
          options: ['Float on the sea', 'Spin around', 'Light up red'],
          correct: 'Float on the sea',
          explanation: 'Built over a tidal flat, the torii and shrine seem to float when the tide comes in.',
        },
      },
      {
        id: 'hir-deer', name: 'Miyajima deer', icon: '\u{1F98C}',
        coords: [34.2967, 132.3196], wikiTitle: 'Sika deer',
        narrative: 'Tame deer roam Miyajima’s lanes, nosing at maps and sleeves. Locals consider them messengers of the gods — gentle, but don’t feed them.',
        phrases: [
          { ja: '鹿が います。', romaji: 'Shika ga imasu.', en: 'There are deer.' },
          { ja: 'かわいいですね。', romaji: 'Kawaii desu ne.', en: 'They’re cute, aren’t they.' },
        ],
        quiz: {
          question: 'On Miyajima, the wild deer are traditionally seen as what?',
          options: ['Messengers of the gods', 'Pests to be removed', 'Farm animals'],
          correct: 'Messengers of the gods',
          explanation: 'In Shinto belief the sacred deer are messengers of the kami, so they roam freely.',
        },
      },
      {
        id: 'hir-okonomiyaki', name: 'Hiroshima okonomiyaki', icon: '\u{1F95E}',
        coords: [34.3920, 132.4612], wikiTitle: 'Okonomiyaki',
        narrative: 'Back in the city you sit at a hot griddle counter. Hiroshima-style okonomiyaki is built in layers — batter, cabbage, noodles, egg — and flipped before you.',
        phrases: [
          { ja: 'お好み焼きを 食べました。', romaji: 'Okonomiyaki o tabemashita.', en: 'I ate okonomiyaki.' },
          { ja: '楽しかったです。', romaji: 'Tanoshikatta desu.', en: 'It was fun.' },
        ],
        lessonId: 'hiroshima-2',
        quiz: {
          question: 'How does Hiroshima-style okonomiyaki differ from Osaka’s?',
          options: ['It is layered (with noodles)', 'It is a cold dessert', 'It has no vegetables'],
          correct: 'It is layered (with noodles)',
          explanation: 'Hiroshima builds the ingredients in layers and adds fried noodles; Osaka mixes them together.',
        },
      },
    ],
  },

  {
    id: 'okinawa',
    name: 'Okinawa',
    tagline: 'めんそーれー！ (Mensōre!)',
    theme: 'Weather & farewell',
    accentColor: '#00A4B4',
    icon: '\u{1F33A}',
    description:
      'Far to the south lie the tropical Ryukyu islands. Okinawa, once its own ' +
      'kingdom, has coral seas and its own warmth. At the end of the journey the ' +
      'traveller talks about the weather, watches a last sunset, and says goodbye.',
    descriptionEn:
      'Far to the south lie the tropical Ryukyu islands. Okinawa, once its own ' +
      'kingdom, has coral seas and its own warmth. At the end of the journey the ' +
      'traveller talks about the weather, watches a last sunset, and says goodbye.',
    photos: [
      { wikiTitle: 'Okinawa Island', alt: 'Okinawa beach', caption: 'Okinawa — tropical seas at Japan’s southern edge' },
      { wikiTitle: 'Shuri Castle', alt: 'Shuri Castle', caption: 'Shuri Castle, seat of the old Ryukyu Kingdom' },
    ],
    vocabTopics: ['Weather', 'The sea', 'Farewell'],
    grammarTopic: 'weather adjectives + farewell set',
    lessons: [
      {
        id: 'okinawa-1',
        title: 'The weather here',
        description: 'Arriving in Naha: hot, sunny, the blue sea — describing the day.',
        steps: [
          { type: 'vocab', word: '天気', article: null, english: 'weather — tenki', example: 'いい 天気ですね。(Ii tenki desu ne.) — Nice weather, isn’t it.' },
          { type: 'vocab', word: '暑い', article: null, english: 'hot (weather) — atsui', example: '今日は 暑いです。(Kyō wa atsui desu.) — Today is hot.' },
          { type: 'vocab', word: '晴れ', article: null, english: 'sunny / clear — hare', example: '今日は 晴れです。(Kyō wa hare desu.) — Today is sunny.' },
          { type: 'vocab', word: '海', article: null, english: 'sea — umi', example: '海は 青いです。(Umi wa aoi desu.) — The sea is blue.' },
          { type: 'vocab', word: '青い', article: null, english: 'blue — aoi', example: '空が 青いです。(Sora ga aoi desu.) — The sky is blue.' },
          { type: 'vocab', word: '今日', article: null, english: 'today — kyō', example: '今日は いい 日です。(Kyō wa ii hi desu.) — Today is a good day.' },
          { type: 'grammar', title: 'Talking about the weather', explanation: 'Weather is easy small talk: Ii tenki desu ne (nice weather, isn’t it). Use desu with a noun (hare = sunny, ame = rain) or an i-adjective (atsui = hot, samui = cold). Add ~ne to invite agreement.', examples: ['今日は 暑いですね。(Kyō wa atsui desu ne.) — It’s hot today, isn’t it.', 'いい 天気です。(Ii tenki desu.) — The weather is nice.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "hot (weather)"?', options: ['samui', 'atsui', 'aoi', 'hare'], correct: 'atsui' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ii ___ desu ne. (weather)', correct: 'tenki' },
        ],
      },
      {
        id: 'okinawa-2',
        title: 'Saying goodbye',
        description: 'A last sunset: thank you, take care, until we meet again.',
        steps: [
          { type: 'vocab', word: 'さようなら', article: null, english: 'goodbye — sayōnara', example: 'さようなら、日本。(Sayōnara, Nihon.) — Goodbye, Japan.' },
          { type: 'vocab', word: 'また ね', article: null, english: 'see you / again, then — mata ne', example: 'じゃあ、またね。(Jā, mata ne.) — Well, see you.' },
          { type: 'vocab', word: 'お元気で', article: null, english: 'take care / keep well — o-genki de', example: 'どうぞ お元気で。(Dōzo o-genki de.) — Please take care.' },
          { type: 'vocab', word: '楽しかった', article: null, english: 'it was fun — tanoshikatta', example: 'とても 楽しかったです。(Totemo tanoshikatta desu.) — It was so much fun.' },
          { type: 'vocab', word: '夕日', article: null, english: 'sunset / evening sun — yūhi', example: '夕日が きれいです。(Yūhi ga kirei desu.) — The sunset is beautiful.' },
          { type: 'vocab', word: 'ありがとう', article: null, english: 'thank you — arigatō', example: '日本、ありがとう！(Nihon, arigatō!) — Thank you, Japan!' },
          { type: 'grammar', title: 'The farewell set', explanation: 'Sayōnara is a firm goodbye (you won’t meet soon). For casual partings use mata ne or jā ne (see you). Wish someone well with o-genki de (take care). Cap the trip with arigatō gozaimashita — “thank you (for everything that happened)”.', examples: ['じゃあ、またね！(Jā, mata ne!) — Well, see you!', 'お元気で。(O-genki de.) — Take care.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'A casual "see you (again)" is:', options: ['mata ne', 'sumimasen', 'itadakimasu', 'ikura'], correct: 'mata ne' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Dōzo o-genki ___. (take care: ... de)', correct: 'de' },
        ],
      },
    ],
    places: [
      {
        id: 'oki-kokusai', name: 'Naha, Kokusai-dōri', icon: '\u{1F3D6}️',
        coords: [26.2150, 127.6792], wikiTitle: 'Kokusai-dōri',
        narrative: 'You land in warm, breezy Naha and walk Kokusai-dōri, “International Street” — shops, shisa lion statues, and a softer southern dialect on the air.',
        phrases: [
          { ja: 'いい 天気ですね。', romaji: 'Ii tenki desu ne.', en: 'Nice weather, isn’t it.' },
          { ja: '今日は 暑いです。', romaji: 'Kyō wa atsui desu.', en: 'It’s hot today.' },
        ],
        lessonId: 'okinawa-1',
        quiz: {
          question: 'Okinawa was historically an independent kingdom called what?',
          options: ['The Ryukyu Kingdom', 'The Edo Shogunate', 'The Yamato State'],
          correct: 'The Ryukyu Kingdom',
          explanation: 'For centuries Okinawa was the Ryukyu Kingdom, with its own kings, trade and culture.',
        },
      },
      {
        id: 'oki-shuri', name: 'Shuri Castle', icon: '\u{1F3EF}',
        coords: [26.2170, 127.7195], wikiTitle: 'Shuri Castle',
        narrative: 'Shuri Castle, painted Chinese-red, was the royal seat of the Ryukyu kings — a blend of Japanese and Chinese styles found nowhere else in Japan.',
        phrases: [
          { ja: 'ここは 首里城です。', romaji: 'Koko wa Shuri-jō desu.', en: 'This is Shuri Castle.' },
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.' },
        ],
        quiz: {
          question: 'Shuri Castle’s style is a blend of Japanese and which other influence?',
          options: ['Chinese', 'Korean', 'Portuguese'],
          correct: 'Chinese',
          explanation: 'As capital of a kingdom trading with China, Shuri fused Chinese and Japanese architecture.',
        },
      },
      {
        id: 'oki-churaumi', name: 'Churaumi Aquarium', icon: '\u{1F988}',
        coords: [26.6944, 127.8779], wikiTitle: 'Okinawa Churaumi Aquarium',
        narrative: 'At Churaumi Aquarium you stand before a colossal tank where whale sharks glide overhead — the gentle giants of Okinawa’s seas.',
        phrases: [
          { ja: '大きいですね！', romaji: 'Ōkii desu ne!', en: 'It’s huge, isn’t it!' },
          { ja: 'すごいです！', romaji: 'Sugoi desu!', en: 'Amazing!' },
        ],
        quiz: {
          question: 'Churaumi Aquarium’s giant tank is famous for which animal?',
          options: ['Whale sharks', 'Penguins', 'Polar bears'],
          correct: 'Whale sharks',
          explanation: 'Its huge “Kuroshio Sea” tank holds whale sharks, the largest fish in the world.',
        },
      },
      {
        id: 'oki-beach', name: 'Coral beaches', icon: '\u{1FAB8}',
        coords: [26.6950, 127.8780], wikiTitle: 'Coral reef',
        narrative: 'You snorkel over coral gardens in water so clear it disappears, bright fish darting below — the warm heart of the subtropical islands.',
        phrases: [
          { ja: '海は 青いです。', romaji: 'Umi wa aoi desu.', en: 'The sea is blue.' },
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.' },
        ],
        quiz: {
          question: 'Okinawa’s seas are known for what underwater feature?',
          options: ['Coral reefs', 'Icebergs', 'Kelp forests'],
          correct: 'Coral reefs',
          explanation: 'The subtropical waters host rich coral reefs, a haven for divers and snorkellers.',
        },
      },
      {
        id: 'oki-sunset', name: 'Farewell sunset', icon: '\u{1F305}',
        coords: [26.2178, 127.6675], wikiTitle: 'Naminoue Shrine',
        narrative: 'On a cliff above the sea you watch the sun sink into the Pacific. The journey ends here, at Japan’s southern edge — arigatō, and sayōnara.',
        phrases: [
          { ja: '夕日が きれいです。', romaji: 'Yūhi ga kirei desu.', en: 'The sunset is beautiful.' },
          { ja: 'とても 楽しかったです。', romaji: 'Totemo tanoshikatta desu.', en: 'It was so much fun.' },
          { ja: 'さようなら、日本！', romaji: 'Sayōnara, Nihon!', en: 'Goodbye, Japan!' },
        ],
        lessonId: 'okinawa-2',
        quiz: {
          question: 'Okinawa is Japan’s southernmost what?',
          options: ['Prefecture', 'Mountain', 'Capital'],
          correct: 'Prefecture',
          explanation: 'Okinawa Prefecture, a chain of subtropical islands, is the southernmost part of Japan.',
        },
      },
    ],
  },
];

export default cities;
