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
    descriptionPt:
      'Bem ao norte, na ilha de Hokkaidō, Sapporo é onde a jornada começa no ' +
      'frio. O viajante mergulha na neve profunda do inverno, se aquece com uma tigela de ' +
      'ramen de missô e uma cerveja local, e aprende a falar sobre o clima e as estações. ' +
      'O desafio: está congelante — samui desu ne!',
    photos: [
      { wikiTitle: 'Sapporo Snow Festival', alt: 'Snow sculptures at the Sapporo Snow Festival', caption: 'The Sapporo Snow Festival — giant snow and ice sculptures' },
      { wikiTitle: 'Sapporo', alt: 'Sapporo city in winter', caption: 'Sapporo, capital of snowy Hokkaidō' },
    ],
    vocabTopics: ['Weather & snow', 'Seasons', 'Adjectives'],
    grammarTopic: 'i-adjectives + 〜です／〜ね',
    grammarTopicPt: 'adjetivos em -i + 〜です／〜ね',
    lessons: [
      {
        id: 'sapporo-1',
        title: 'Snow and weather',
        titlePt: 'Neve e clima',
        description: 'Arriving in the cold: weather words and describing things with adjectives.',
        descriptionPt: 'Chegando no frio: palavras sobre o clima e como descrever as coisas com adjetivos.',
        steps: [
          { type: 'vocab', word: '雪', article: null, english: 'snow — yuki', portuguese: 'neve — yuki', example: '雪が きれいです。(Yuki ga kirei desu.) — The snow is beautiful.', examplePt: '雪が きれいです。(Yuki ga kirei desu.) — A neve é linda.' },
          { type: 'vocab', word: '寒い', article: null, english: 'cold (weather) — samui', portuguese: 'frio (clima) — samui', example: '今日は 寒いです。(Kyō wa samui desu.) — It is cold today.', examplePt: '今日は 寒いです。(Kyō wa samui desu.) — Está frio hoje.' },
          { type: 'vocab', word: '天気', article: null, english: 'weather — tenki', portuguese: 'clima / tempo — tenki', example: '天気は どうですか？(Tenki wa dō desu ka?) — How is the weather?', examplePt: '天気は どうですか？(Tenki wa dō desu ka?) — Como está o tempo?' },
          { type: 'vocab', word: '白い', article: null, english: 'white — shiroi', portuguese: 'branco — shiroi', example: '町は 白いです。(Machi wa shiroi desu.) — The town is white.', examplePt: '町は 白いです。(Machi wa shiroi desu.) — A cidade está branca.' },
          { type: 'vocab', word: '冬', article: null, english: 'winter — fuyu', portuguese: 'inverno — fuyu', example: '冬は 寒いです。(Fuyu wa samui desu.) — Winter is cold.', examplePt: '冬は 寒いです。(Fuyu wa samui desu.) — O inverno é frio.' },
          { type: 'vocab', word: 'きれい', article: null, english: 'pretty / clean — kirei', portuguese: 'bonito / limpo — kirei', example: 'とても きれいです。(Totemo kirei desu.) — It is very pretty.', examplePt: 'とても きれいです。(Totemo kirei desu.) — É muito bonito.' },
          { type: 'grammar', title: 'i-adjectives + です／〜ね', titlePt: 'adjetivos em -i + です／〜ね', explanation: 'An i-adjective (ending in い) goes straight before です: samui desu = "it is cold". No article, no extra verb. Add 〜ね (ne) on the end to invite agreement, like "isn’t it": Samui desu ne = "It’s cold, isn’t it."', explanationPt: 'Um adjetivo em -i (terminado em い) vem direto antes de です: samui desu = "está frio". Sem artigo, sem verbo extra. Adicione 〜ね (ne) no fim para convidar à concordância, como "não é?": Samui desu ne = "Está frio, não é?"', examples: ['雪が 白いです。(Yuki ga shiroi desu.) — The snow is white.', '寒いですね。(Samui desu ne.) — It’s cold, isn’t it.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "cold (weather)"?', questionPt: 'Qual palavra significa "frio (clima)"?', options: ['samui', 'shiroi', 'kirei', 'atsui'], correct: 'samui' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Samui desu ___. (invite agreement — "isn’t it")', questionPt: 'Samui desu ___. (convide à concordância — "não é?")', correct: 'ne' },
        ],
      },
      {
        id: 'sapporo-2',
        title: 'Seasons and festivals',
        titlePt: 'Estações e festivais',
        description: 'The Snow Festival, the four seasons, and saying what you like.',
        descriptionPt: 'O Festival da Neve, as quatro estações e como dizer o que você gosta.',
        steps: [
          { type: 'vocab', word: '春・夏・秋・冬', article: null, english: 'spring, summer, autumn, winter — haru, natsu, aki, fuyu', portuguese: 'primavera, verão, outono, inverno — haru, natsu, aki, fuyu', example: '春・夏・秋・冬。(Haru, natsu, aki, fuyu.) — The four seasons.', examplePt: '春・夏・秋・冬。(Haru, natsu, aki, fuyu.) — As quatro estações.' },
          { type: 'vocab', word: '祭り', article: null, english: 'festival — matsuri', portuguese: 'festival — matsuri', example: '雪祭りは 有名です。(Yuki matsuri wa yūmei desu.) — The Snow Festival is famous.', examplePt: '雪祭りは 有名です。(Yuki matsuri wa yūmei desu.) — O Festival da Neve é famoso.' },
          { type: 'vocab', word: 'ラーメン', article: null, english: 'ramen — rāmen', portuguese: 'ramen — rāmen', example: 'みそラーメンを ください。(Miso rāmen o kudasai.) — Miso ramen, please.', examplePt: 'みそラーメンを ください。(Miso rāmen o kudasai.) — Ramen de missô, por favor.' },
          { type: 'vocab', word: 'ビール', article: null, english: 'beer — bīru', portuguese: 'cerveja — bīru', example: 'ビールが すきです。(Bīru ga suki desu.) — I like beer.', examplePt: 'ビールが すきです。(Bīru ga suki desu.) — Eu gosto de cerveja.' },
          { type: 'vocab', word: 'おいしい', article: null, english: 'delicious — oishii', portuguese: 'delicioso — oishii', example: 'とても おいしいです！(Totemo oishii desu!) — It is very delicious!', examplePt: 'とても おいしいです！(Totemo oishii desu!) — Está muito delicioso!' },
          { type: 'vocab', word: 'すき', article: null, english: 'like / fond of — suki', portuguese: 'gostar de / apreciar — suki', example: '冬が すきです。(Fuyu ga suki desu.) — I like winter.', examplePt: '冬が すきです。(Fuyu ga suki desu.) — Eu gosto do inverno.' },
          { type: 'grammar', title: '〜が すきです (ga suki desu)', titlePt: '〜が すきです (ga suki desu)', explanation: '[thing] ga suki desu = "I like [thing]". が (ga) marks what is liked; suki desu = "is liked / I like it". For dislike, use きらい (kirai): [thing] ga kirai desu.', explanationPt: '[coisa] ga suki desu = "Eu gosto de [coisa]". が (ga) marca o que se gosta; suki desu = "é apreciado / eu gosto". Para dizer que não gosta, use きらい (kirai): [coisa] ga kirai desu.', examples: ['ラーメンが すきです。(Rāmen ga suki desu.) — I like ramen.', '夏が すきです。(Natsu ga suki desu.) — I like summer.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "festival"?', questionPt: 'Qual palavra significa "festival"?', options: ['matsuri', 'tenki', 'bīru', 'yuki'], correct: 'matsuri' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Rāmen ___ suki desu. (particle marking what is liked)', questionPt: 'Rāmen ___ suki desu. (partícula que marca o que se gosta)', correct: 'ga' },
        ],
      },
    ],
    places: [
      {
        id: 'sap-odori', name: 'Ōdori Park', icon: '⛄',
        coords: [43.0605, 141.3469], wikiTitle: 'Sapporo Snow Festival',
        narrative: 'Ōdori Park runs like a green — now white — ribbon through the city. Each February it fills with the Sapporo Snow Festival: huge sculptures carved from snow and ice, lit up against the dark.',
        narrativePt: 'O Parque Ōdori se estende como uma faixa verde, agora branca, pela cidade. Todo fevereiro ele se enche com o Festival da Neve de Sapporo: esculturas enormes talhadas em neve e gelo, iluminadas contra a escuridão.',
        phrases: [
          { ja: '雪が きれいです。', romaji: 'Yuki ga kirei desu.', en: 'The snow is beautiful.', pt: 'A neve é linda.' },
          { ja: '寒いですね。', romaji: 'Samui desu ne.', en: 'It’s cold, isn’t it.', pt: 'Está frio, não é?' },
        ],
        lessonId: 'sapporo-1',
        quiz: {
          question: 'The Sapporo Snow Festival is famous for sculptures made of what?',
          questionPt: 'O Festival da Neve de Sapporo é famoso por esculturas feitas de quê?',
          options: ['Snow and ice', 'Sand', 'Wood'],
          correct: 'Snow and ice',
          explanation: 'Every February artists carve enormous statues from snow and ice in Ōdori Park, drawing millions of visitors.',
          explanationPt: 'Todo fevereiro, artistas talham estátuas enormes de neve e gelo no Parque Ōdori, atraindo milhões de visitantes.',
        },
      },
      {
        id: 'sap-clock', name: 'Sapporo Clock Tower', icon: '🕰️',
        coords: [43.0628, 141.3536], wikiTitle: 'Sapporo Clock Tower',
        narrative: 'The old wooden Clock Tower is one of Sapporo’s few surviving early-Meiji buildings — a piece of the American-style frontier town the city once was.',
        narrativePt: 'A antiga Torre do Relógio de madeira é um dos poucos prédios do início da era Meiji que sobreviveram em Sapporo: um pedaço da cidade de fronteira ao estilo americano que ela já foi.',
        phrases: [
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?', pt: 'O que é isto?' },
          { ja: 'ふるいですね。', romaji: 'Furui desu ne.', en: 'It’s old, isn’t it.', pt: 'É antigo, não é?' },
        ],
        quiz: {
          question: 'The Sapporo Clock Tower is notable as one of the city’s few surviving what?',
          questionPt: 'A Torre do Relógio de Sapporo é notável como um dos poucos exemplares sobreviventes de quê na cidade?',
          options: ['Old wooden buildings', 'Skyscrapers', 'Castles'],
          correct: 'Old wooden buildings',
          explanation: 'Built in 1878, it is a rare survivor from Sapporo’s frontier-era, American-influenced architecture.',
          explanationPt: 'Construída em 1878, é uma rara sobrevivente da arquitetura de influência americana da era de fronteira de Sapporo.',
        },
      },
      {
        id: 'sap-tvtower', name: 'Sapporo TV Tower', icon: '🗼',
        coords: [43.0608, 141.3565], wikiTitle: 'Sapporo TV Tower',
        narrative: 'At the east end of Ōdori the TV Tower rises red against the snow. From its deck the whole festival, and the white grid of the city, stretches out below.',
        narrativePt: 'Na ponta leste do Ōdori, a Torre de TV se ergue vermelha contra a neve. Do seu mirante, todo o festival e a malha branca da cidade se estendem lá embaixo.',
        phrases: [
          { ja: 'たかいです。', romaji: 'Takai desu.', en: 'It’s tall.', pt: 'É alta.' },
          { ja: 'きれいですね！', romaji: 'Kirei desu ne!', en: 'It’s beautiful, isn’t it!', pt: 'É linda, não é?' },
        ],
        quiz: {
          question: 'The Sapporo TV Tower stands at the end of which park?',
          questionPt: 'A Torre de TV de Sapporo fica no fim de qual parque?',
          options: ['Ōdori Park', 'Ueno Park', 'Lake Ashi'],
          correct: 'Ōdori Park',
          explanation: 'The 147 m tower marks the eastern end of Ōdori Park and overlooks the Snow Festival grounds.',
          explanationPt: 'A torre de 147 m marca a extremidade leste do Parque Ōdori e tem vista para os terrenos do Festival da Neve.',
        },
      },
      {
        id: 'sap-susukino', name: 'Susukino', icon: '🍜',
        coords: [43.0548, 141.3535], wikiTitle: 'Susukino',
        narrative: 'After dark you dive into Susukino, a blaze of neon and the heart of Sapporo nightlife. Down Ramen Alley you slide open a door and order a steaming bowl of miso ramen — Sapporo’s gift to the world.',
        narrativePt: 'Ao anoitecer, você mergulha em Susukino, um mar de neon e o coração da vida noturna de Sapporo. No Beco do Ramen, você desliza uma porta e pede uma tigela fumegante de ramen de missô: o presente de Sapporo ao mundo.',
        phrases: [
          { ja: 'みそラーメンを ください。', romaji: 'Miso rāmen o kudasai.', en: 'Miso ramen, please.', pt: 'Ramen de missô, por favor.' },
          { ja: 'とても おいしいです！', romaji: 'Totemo oishii desu!', en: 'It’s very delicious!', pt: 'Está muito delicioso!' },
        ],
        lessonId: 'sapporo-2',
        quiz: {
          question: 'Which style of ramen was made famous in Sapporo?',
          questionPt: 'Qual estilo de ramen ficou famoso em Sapporo?',
          options: ['Miso ramen', 'Tonkotsu ramen', 'Shōyu ramen'],
          correct: 'Miso ramen',
          explanation: 'Sapporo is the birthplace of miso (soybean-paste) ramen, rich and warming for the Hokkaidō winter.',
          explanationPt: 'Sapporo é o berço do ramen de missô (pasta de soja), encorpado e reconfortante para o inverno de Hokkaidō.',
        },
      },
      {
        id: 'sap-beer', name: 'Sapporo Beer Museum', icon: '🍺',
        coords: [43.0707, 141.3709], wikiTitle: 'Sapporo Beer Museum',
        narrative: 'In a red-brick former brewery you learn how Sapporo Beer — Japan’s oldest brand — was born here in 1876. A cold glass to finish, then south toward Tokyo.',
        narrativePt: 'Numa antiga cervejaria de tijolos vermelhos, você descobre como a Cerveja Sapporo, a marca mais antiga do Japão, nasceu aqui em 1876. Um copo gelado para encerrar e, então, rumo ao sul, em direção a Tóquio.',
        phrases: [
          { ja: 'ビールが すきです。', romaji: 'Bīru ga suki desu.', en: 'I like beer.', pt: 'Eu gosto de cerveja.' },
          { ja: 'かんぱい！', romaji: 'Kanpai!', en: 'Cheers!', pt: 'Saúde!' },
        ],
        quiz: {
          question: 'Sapporo Beer holds what distinction in Japan?',
          questionPt: 'Que distinção a Cerveja Sapporo detém no Japão?',
          options: ['Japan’s oldest beer brand', 'Japan’s only wheat beer', 'A wine brand'],
          correct: 'Japan’s oldest beer brand',
          explanation: 'Founded in 1876, Sapporo is the oldest beer brand in Japan; the museum sits in its original brick brewery.',
          explanationPt: 'Fundada em 1876, a Sapporo é a marca de cerveja mais antiga do Japão; o museu fica em sua cervejaria de tijolos original.',
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
    descriptionPt:
      'Tóquio, a capital, é onde a jornada começa. O viajante desembarca, pega os ' +
      'trens mais movimentados do mundo rumo à cidade e faz sua primeira reverência com cuidado. ' +
      'O desafio: se virar com konnichiwa, arigatō e muitos gestos apontando.',
    photos: [
      { wikiTitle: 'Tokyo', alt: 'Tokyo skyline', caption: 'Tokyo, the world’s largest metropolis' },
      { wikiTitle: 'Shibuya Crossing', alt: 'Shibuya scramble crossing', caption: 'Shibuya — the busiest crossing on earth' },
    ],
    vocabTopics: ['Airport', 'Greetings', 'Self-introduction'],
    grammarTopic: 'X は Y です (desu) + watashi',
    grammarTopicPt: 'X は Y です (desu) + watashi',
    lessons: [
      {
        id: 'tokyo-1',
        title: 'Arriving in Japan',
        titlePt: 'Chegando ao Japão',
        description: 'At the airport: customs, the first bow, finding the train.',
        descriptionPt: 'No aeroporto: a alfândega, a primeira reverência, encontrar o trem.',
        steps: [
          { type: 'vocab', word: '空港', article: null, english: 'airport — kūkō', portuguese: 'aeroporto — kūkō', example: '空港は 大きいです。(Kūkō wa ōkii desu.) — The airport is big.', examplePt: '空港は 大きいです。(Kūkō wa ōkii desu.) — O aeroporto é grande.' },
          { type: 'vocab', word: 'パスポート', article: null, english: 'passport — pasupōto', portuguese: 'passaporte — pasupōto', example: 'パスポートを お願いします。(Pasupōto o onegai shimasu.) — Passport, please.', examplePt: 'パスポートを お願いします。(Pasupōto o onegai shimasu.) — Passaporte, por favor.' },
          { type: 'vocab', word: 'こんにちは', article: null, english: 'hello / good day — konnichiwa', portuguese: 'olá / bom dia — konnichiwa', example: 'こんにちは！(Konnichiwa!) — Hello!', examplePt: 'こんにちは！(Konnichiwa!) — Olá!' },
          { type: 'vocab', word: 'ありがとう', article: null, english: 'thank you — arigatō', portuguese: 'obrigado — arigatō', example: 'ありがとう ございます。(Arigatō gozaimasu.) — Thank you very much.', examplePt: 'ありがとう ございます。(Arigatō gozaimasu.) — Muito obrigado.' },
          { type: 'vocab', word: 'すみません', article: null, english: 'excuse me / sorry — sumimasen', portuguese: 'com licença / desculpe — sumimasen', example: 'すみません、駅は？(Sumimasen, eki wa?) — Excuse me, the station?', examplePt: 'すみません、駅は？(Sumimasen, eki wa?) — Com licença, a estação?' },
          { type: 'vocab', word: 'わたし', article: null, english: 'I / me — watashi', portuguese: 'eu / me — watashi', example: 'わたしは ブラジル人です。(Watashi wa Burajiru-jin desu.) — I am Brazilian.', examplePt: 'わたしは ブラジル人です。(Watashi wa Burajiru-jin desu.) — Eu sou brasileiro.' },
          { type: 'grammar', title: 'X は Y です (desu)', titlePt: 'X は Y です (desu)', explanation: 'The basic sentence: [topic] wa [thing] desu = "[topic] is [thing]". は (written ha, read "wa") marks the topic; です (desu) is the polite "is/am/are". Drop nothing, add no article.', explanationPt: 'A frase básica: [tópico] wa [coisa] desu = "[tópico] é [coisa]". は (escrito ha, lido "wa") marca o tópico; です (desu) é o "é/sou/são" formal. Não omita nada e não adicione artigo.', examples: ['わたしは 学生です。(Watashi wa gakusei desu.) — I am a student.', 'これは ペンです。(Kore wa pen desu.) — This is a pen.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you" in Japanese?', questionPt: 'Como se diz "obrigado" em japonês?', options: ['konnichiwa', 'arigatō', 'sumimasen', 'sayōnara'], correct: 'arigatō' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Watashi ___ Burajiru-jin desu. (topic particle)', questionPt: 'Watashi ___ Burajiru-jin desu. (partícula de tópico)', correct: 'wa' },
        ],
      },
      {
        id: 'tokyo-2',
        title: 'Names and introductions',
        titlePt: 'Nomes e apresentações',
        description: 'At Shibuya: saying your name, where you are from, nice to meet you.',
        descriptionPt: 'Em Shibuya: dizer seu nome, de onde você é, prazer em conhecer.',
        steps: [
          { type: 'vocab', word: '名前', article: null, english: 'name — namae', portuguese: 'nome — namae', example: 'お名前は？(O-namae wa?) — Your name?', examplePt: 'お名前は？(O-namae wa?) — Seu nome?' },
          { type: 'vocab', word: 'はじめまして', article: null, english: 'how do you do (first meeting) — hajimemashite', portuguese: 'muito prazer (primeiro encontro) — hajimemashite', example: 'はじめまして。(Hajimemashite.) — Nice to meet you.', examplePt: 'はじめまして。(Hajimemashite.) — Prazer em conhecer.' },
          { type: 'vocab', word: 'よろしく', article: null, english: 'pleased to meet you — yoroshiku', portuguese: 'é um prazer conhecê-lo — yoroshiku', example: 'どうぞ よろしく。(Dōzo yoroshiku.) — Pleased to meet you.', examplePt: 'どうぞ よろしく。(Dōzo yoroshiku.) — É um prazer conhecê-lo.' },
          { type: 'vocab', word: '日本', article: null, english: 'Japan — Nihon', portuguese: 'Japão — Nihon', example: '日本は すてきです。(Nihon wa suteki desu.) — Japan is wonderful.', examplePt: '日本は すてきです。(Nihon wa suteki desu.) — O Japão é maravilhoso.' },
          { type: 'vocab', word: 'ブラジル', article: null, english: 'Brazil — Burajiru', portuguese: 'Brasil — Burajiru', example: 'ブラジルから 来ました。(Burajiru kara kimashita.) — I came from Brazil.', examplePt: 'ブラジルから 来ました。(Burajiru kara kimashita.) — Eu vim do Brasil.' },
          { type: 'vocab', word: 'さようなら', article: null, english: 'goodbye — sayōnara', portuguese: 'adeus — sayōnara', example: 'さようなら！(Sayōnara!) — Goodbye!', examplePt: 'さようなら！(Sayōnara!) — Adeus!' },
          { type: 'grammar', title: '〜から 来ました (kara kimashita)', titlePt: '〜から 来ました (kara kimashita)', explanation: '[place] kara kimashita = "I came from [place]". から (kara) = "from". Pair it with the introduction set: Hajimemashite, [name] desu, [country] kara kimashita, dōzo yoroshiku.', explanationPt: '[lugar] kara kimashita = "Eu vim de [lugar]". から (kara) = "de". Combine com o conjunto de apresentação: Hajimemashite, [nome] desu, [país] kara kimashita, dōzo yoroshiku.', examples: ['ブラジルから 来ました。(Burajiru kara kimashita.)', '東京から 来ました。(Tōkyō kara kimashita.)'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'You meet someone for the first time. What do you say?', questionPt: 'Você conhece alguém pela primeira vez. O que você diz?', options: ['Sayōnara', 'Hajimemashite', 'Arigatō', 'Itadakimasu'], correct: 'Hajimemashite' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Burajiru ___ kimashita. (from)', questionPt: 'Burajiru ___ kimashita. (de)', correct: 'kara' },
        ],
      },
    ],
    places: [
      {
        id: 'tok-narita', name: 'Narita Airport', icon: '✈️',
        coords: [35.772, 140.392], wikiTitle: 'Narita International Airport',
        narrative: 'Your plane touches down at Narita. You clear immigration, bow back when the officer bows, and follow the signs for the train into the city.',
        narrativePt: 'Seu avião pousa em Narita. Você passa pela imigração, retribui a reverência quando o oficial se curva e segue as placas em direção ao trem para a cidade.',
        phrases: [
          { ja: 'こんにちは。', romaji: 'Konnichiwa.', en: 'Hello.', pt: 'Olá.' },
          { ja: 'パスポートを お願いします。', romaji: 'Pasupōto o onegai shimasu.', en: 'Passport, please.', pt: 'Passaporte, por favor.' },
          { ja: '駅は どこですか？', romaji: 'Eki wa doko desu ka?', en: 'Where is the station?', pt: 'Onde fica a estação?' },
        ],
        lessonId: 'tokyo-1',
        quiz: {
          question: 'Bowing (お辞儀, ojigi) in Japan mainly expresses what?',
          questionPt: 'A reverência (お辞儀, ojigi) no Japão expressa principalmente o quê?',
          options: ['Respect and greeting', 'Disagreement', 'Hunger'],
          correct: 'Respect and greeting',
          explanation: 'A bow can mean hello, thank you, sorry or respect — the depth signals how formal it is.',
          explanationPt: 'Uma reverência pode significar olá, obrigado, desculpe ou respeito: a profundidade indica o quão formal ela é.',
        },
      },
      {
        id: 'tok-shinjuku', name: 'Shinjuku Station', icon: '\u{1F684}',
        coords: [35.690, 139.700], wikiTitle: 'Shinjuku Station',
        narrative: 'Shinjuku is the busiest railway station in the world — over three million people a day. You find your platform among hundreds and feel the city’s pulse.',
        narrativePt: 'Shinjuku é a estação ferroviária mais movimentada do mundo: mais de três milhões de pessoas por dia. Você encontra sua plataforma entre centenas e sente o pulsar da cidade.',
        phrases: [
          { ja: 'すみません。', romaji: 'Sumimasen.', en: 'Excuse me.', pt: 'Com licença.' },
          { ja: 'この 電車ですか？', romaji: 'Kono densha desu ka?', en: 'Is it this train?', pt: 'É este trem?' },
        ],
        quiz: {
          question: 'Shinjuku Station holds what world record?',
          questionPt: 'A Estação de Shinjuku detém qual recorde mundial?',
          options: ['Busiest station on earth', 'Oldest station in Asia', 'Highest station'],
          correct: 'Busiest station on earth',
          explanation: 'It handles more passengers per day than any other station — a Guinness record.',
          explanationPt: 'Ela atende mais passageiros por dia do que qualquer outra estação: um recorde do Guinness.',
        },
      },
      {
        id: 'tok-shibuya', name: 'Shibuya Crossing', icon: '\u{1F6CD}️',
        coords: [35.6595, 139.7005], wikiTitle: 'Shibuya Crossing',
        narrative: 'At the Shibuya scramble, every light turns red at once and a thousand people cross from all sides. You step in, swept along, and practise your first introduction.',
        narrativePt: 'No cruzamento de Shibuya, todos os sinais ficam vermelhos de uma vez e mil pessoas atravessam de todos os lados. Você entra, levado pela multidão, e pratica sua primeira apresentação.',
        phrases: [
          { ja: 'はじめまして。', romaji: 'Hajimemashite.', en: 'Nice to meet you.', pt: 'Prazer em conhecer.' },
          { ja: 'わたしは マリアです。', romaji: 'Watashi wa Maria desu.', en: 'I am Maria.', pt: 'Eu sou a Maria.' },
          { ja: 'どうぞ よろしく。', romaji: 'Dōzo yoroshiku.', en: 'Pleased to meet you.', pt: 'É um prazer conhecê-lo.' },
        ],
        lessonId: 'tokyo-2',
        quiz: {
          question: 'Shibuya Crossing is famous as the world’s busiest what?',
          questionPt: 'O cruzamento de Shibuya é famoso por ser o mais movimentado do mundo em quê?',
          options: ['Pedestrian crossing', 'Fish market', 'Airport'],
          correct: 'Pedestrian crossing',
          explanation: 'Up to ~3,000 people cross at a time when the signals stop traffic on every side.',
          explanationPt: 'Até cerca de 3.000 pessoas atravessam de uma vez quando os sinais param o trânsito em todos os lados.',
        },
      },
      {
        id: 'tok-meiji', name: 'Meiji Jingu', icon: '⛩️',
        coords: [35.6764, 139.6993], wikiTitle: 'Meiji Shrine',
        narrative: 'Through a giant wooden torii the noise fades into forest. At Meiji Jingu you learn the shrine etiquette: bow, toss a coin, two bows, two claps, one bow.',
        narrativePt: 'Ao passar por um torii de madeira gigante, o barulho se dissipa na floresta. No Meiji Jingu você aprende a etiqueta do santuário: reverência, jogar uma moeda, duas reverências, duas palmas, uma reverência.',
        phrases: [
          { ja: 'お参りします。', romaji: 'O-mairi shimasu.', en: 'I’ll pay my respects.', pt: 'Vou prestar minhas homenagens.' },
          { ja: 'すてきですね。', romaji: 'Suteki desu ne.', en: 'It’s lovely, isn’t it.', pt: 'É lindo, não é?' },
        ],
        quiz: {
          question: 'A torii gate marks the entrance to what?',
          questionPt: 'Um portão torii marca a entrada de quê?',
          options: ['A Shinto shrine', 'A subway', 'A market'],
          correct: 'A Shinto shrine',
          explanation: 'The torii separates the everyday world from the sacred grounds of a Shinto shrine.',
          explanationPt: 'O torii separa o mundo cotidiano do terreno sagrado de um santuário xintoísta.',
        },
      },
      {
        id: 'tok-asakusa', name: 'Sensō-ji, Asakusa', icon: '\u{1F3EF}',
        coords: [35.7148, 139.7967], wikiTitle: 'Sensō-ji',
        narrative: 'Asakusa keeps old Tokyo alive. You pass the great red lantern of Kaminarimon to Sensō-ji, the city’s oldest temple, and draw a paper fortune.',
        narrativePt: 'Asakusa mantém viva a velha Tóquio. Você passa pela grande lanterna vermelha de Kaminarimon rumo ao Sensō-ji, o templo mais antigo da cidade, e tira uma sorte em papel.',
        phrases: [
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?', pt: 'O que é isto?' },
          { ja: 'きれいです。', romaji: 'Kirei desu.', en: 'It’s beautiful.', pt: 'É lindo.' },
        ],
        quiz: {
          question: 'Sensō-ji in Asakusa is Tokyo’s oldest what?',
          questionPt: 'O Sensō-ji em Asakusa é o mais antigo de Tóquio em quê?',
          options: ['Temple', 'Train line', 'Skyscraper'],
          correct: 'Temple',
          explanation: 'Founded in 645, Sensō-ji is the oldest temple in Tokyo.',
          explanationPt: 'Fundado em 645, o Sensō-ji é o templo mais antigo de Tóquio.',
        },
      },
      {
        id: 'tok-tower', name: 'Tokyo Tower', icon: '\u{1F5FC}',
        coords: [35.6586, 139.7454], wikiTitle: 'Tokyo Tower',
        narrative: 'As dusk falls you ride up Tokyo Tower. The metropolis spreads out endlessly, lights to the horizon — the biggest city on earth.',
        narrativePt: 'Ao cair do anoitecer, você sobe a Torre de Tóquio. A metrópole se estende sem fim, luzes até o horizonte: a maior cidade do mundo.',
        phrases: [
          { ja: 'たかいです。', romaji: 'Takai desu.', en: 'It’s tall / high.', pt: 'É alta.' },
          { ja: 'すごいですね！', romaji: 'Sugoi desu ne!', en: 'Amazing, isn’t it!', pt: 'Incrível, não é?' },
        ],
        quiz: {
          question: 'Tokyo Tower’s design is based on which European landmark?',
          questionPt: 'O design da Torre de Tóquio é baseado em qual marco europeu?',
          options: ['The Eiffel Tower', 'Big Ben', 'The Colosseum'],
          correct: 'The Eiffel Tower',
          explanation: 'Built in 1958, it echoes the Eiffel Tower but is painted white and orange and is slightly taller.',
          explanationPt: 'Construída em 1958, ela lembra a Torre Eiffel, mas é pintada de branco e laranja e é um pouco mais alta.',
        },
      },
      {
        id: 'tok-akihabara', name: 'Akihabara', icon: '\u{1F3AE}',
        coords: [35.6984, 139.7731], wikiTitle: 'Akihabara',
        narrative: 'Akihabara blazes with neon and electronics, arcades and anime. You wander floors of games and gadgets, the soundtrack of modern Japan.',
        narrativePt: 'Akihabara resplandece com neon e eletrônicos, fliperamas e anime. Você percorre andares de jogos e gadgets, a trilha sonora do Japão moderno.',
        phrases: [
          { ja: 'いくらですか？', romaji: 'Ikura desu ka?', en: 'How much is it?', pt: 'Quanto custa?' },
          { ja: '面白いです。', romaji: 'Omoshiroi desu.', en: 'It’s interesting / fun.', pt: 'É interessante / divertido.' },
        ],
        quiz: {
          question: 'Akihabara is best known as the centre of what culture?',
          questionPt: 'Akihabara é mais conhecida como o centro de qual cultura?',
          options: ['Electronics & anime', 'Tea ceremony', 'Sumo'],
          correct: 'Electronics & anime',
          explanation: '“Akiba” is the hub of Japan’s electronics, gaming and otaku (anime/manga) culture.',
          explanationPt: '“Akiba” é o polo da cultura de eletrônicos, games e otaku (anime/mangá) do Japão.',
        },
      },
      {
        id: 'tok-ueno', name: 'Ueno Park', icon: '\u{1F338}',
        coords: [35.7156, 139.7745], wikiTitle: 'Ueno Park',
        narrative: 'In spring Ueno Park turns pink with cherry blossom. Families picnic under the trees for hanami — a gentle farewell to Tokyo before the road south.',
        narrativePt: 'Na primavera, o Parque Ueno fica rosa com as flores de cerejeira. Famílias fazem piquenique sob as árvores para o hanami: uma despedida suave de Tóquio antes da estrada rumo ao sul.',
        phrases: [
          { ja: '桜が きれいです。', romaji: 'Sakura ga kirei desu.', en: 'The cherry blossoms are beautiful.', pt: 'As flores de cerejeira estão lindas.' },
          { ja: 'さようなら、東京。', romaji: 'Sayōnara, Tōkyō.', en: 'Goodbye, Tokyo.', pt: 'Adeus, Tóquio.' },
        ],
        quiz: {
          question: 'Viewing cherry blossoms in spring is called what?',
          questionPt: 'Contemplar as flores de cerejeira na primavera se chama o quê?',
          options: ['Hanami', 'Onsen', 'Karaoke'],
          correct: 'Hanami',
          explanation: 'Hanami (“flower viewing”) is the custom of picnicking under blossoming sakura trees.',
          explanationPt: 'Hanami (“contemplação das flores”) é o costume de fazer piquenique sob as cerejeiras em flor.',
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
    descriptionPt:
      'A oeste de Tóquio a terra sobe até Hakone, a porta de entrada para o Monte Fuji. ' +
      'Entre vales vulcânicos e um lago de cratera, o viajante se banha numa fonte termal, ' +
      'conta em japonês e aprende a apontar: este aqui, esse aí, aquele lá.',
    photos: [
      { wikiTitle: 'Mount Fuji', alt: 'Mount Fuji', caption: 'Mt Fuji — Japan’s highest mountain (3,776 m)' },
      { wikiTitle: 'Onsen', alt: 'Japanese hot spring', caption: 'An onsen, a volcanic hot-spring bath' },
    ],
    vocabTopics: ['Nature', 'Numbers 1–10', 'kore / sore / are'],
    grammarTopic: 'kore / sore / are + numbers',
    grammarTopicPt: 'kore / sore / are + números',
    lessons: [
      {
        id: 'fuji-1',
        title: 'The mountain and numbers',
        titlePt: 'A montanha e os números',
        description: 'Facing Mt Fuji: nature words and counting from one to ten.',
        descriptionPt: 'Diante do Monte Fuji: palavras da natureza e contar de um a dez.',
        steps: [
          { type: 'vocab', word: '山', article: null, english: 'mountain — yama', portuguese: 'montanha — yama', example: '富士山は 高いです。(Fujisan wa takai desu.) — Mt Fuji is high.', examplePt: '富士山は 高いです。(Fujisan wa takai desu.) — O Monte Fuji é alto.' },
          { type: 'vocab', word: '湖', article: null, english: 'lake — mizuumi', portuguese: 'lago — mizuumi', example: '湖は きれいです。(Mizuumi wa kirei desu.) — The lake is beautiful.', examplePt: '湖は きれいです。(Mizuumi wa kirei desu.) — O lago é bonito.' },
          { type: 'vocab', word: '一、二、三', article: null, english: 'one, two, three — ichi, ni, san', portuguese: 'um, dois, três — ichi, ni, san', example: '一、二、三！(Ichi, ni, san!) — One, two, three!', examplePt: '一、二、三！(Ichi, ni, san!) — Um, dois, três!' },
          { type: 'vocab', word: '四、五、六', article: null, english: 'four, five, six — shi/yon, go, roku', portuguese: 'quatro, cinco, seis — shi/yon, go, roku', example: '四、五、六。(Yon, go, roku.) — Four, five, six.', examplePt: '四、五、六。(Yon, go, roku.) — Quatro, cinco, seis.' },
          { type: 'vocab', word: '七、八、九、十', article: null, english: 'seven, eight, nine, ten — nana, hachi, kyū, jū', portuguese: 'sete, oito, nove, dez — nana, hachi, kyū, jū', example: '七、八、九、十。(Nana, hachi, kyū, jū.) — 7, 8, 9, 10.', examplePt: '七、八、九、十。(Nana, hachi, kyū, jū.) — 7, 8, 9, 10.' },
          { type: 'vocab', word: '高い', article: null, english: 'high / tall / expensive — takai', portuguese: 'alto / elevado / caro — takai', example: 'とても 高いです。(Totemo takai desu.) — It is very high.', examplePt: 'とても 高いです。(Totemo takai desu.) — É muito alto.' },
          { type: 'grammar', title: 'Numbers 1–10', titlePt: 'Números 1–10', explanation: 'ichi (1), ni (2), san (3), yon/shi (4), go (5), roku (6), nana/shichi (7), hachi (8), kyū/ku (9), jū (10). Four and seven have two readings; yon and nana are the safe, common ones.', explanationPt: 'ichi (1), ni (2), san (3), yon/shi (4), go (5), roku (6), nana/shichi (7), hachi (8), kyū/ku (9), jū (10). Quatro e sete têm duas leituras; yon e nana são as seguras e mais comuns.', examples: ['コーヒーを 一つ。(Kōhī o hitotsu.) — One coffee.', '十分。(Jūppun.) — Ten minutes.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "three"?', questionPt: 'Qual palavra significa "três"?', options: ['ni', 'san', 'go', 'jū'], correct: 'san' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Fujisan wa ___ desu. (high / tall)', questionPt: 'Fujisan wa ___ desu. (alto / elevado)', correct: 'takai' },
        ],
      },
      {
        id: 'fuji-2',
        title: 'At the onsen',
        titlePt: 'No onsen',
        description: 'Hot-spring etiquette and pointing: this, that, that over there.',
        descriptionPt: 'Etiqueta da fonte termal e como apontar: este, esse, aquele lá.',
        steps: [
          { type: 'vocab', word: '温泉', article: null, english: 'hot spring — onsen', portuguese: 'fonte termal — onsen', example: '温泉は 気持ちいいです。(Onsen wa kimochi ii desu.) — The hot spring feels good.', examplePt: '温泉は 気持ちいいです。(Onsen wa kimochi ii desu.) — A fonte termal é gostosa.' },
          { type: 'vocab', word: 'お湯', article: null, english: 'hot water / bath — o-yu', portuguese: 'água quente / banho — o-yu', example: 'お湯は あついです。(O-yu wa atsui desu.) — The water is hot.', examplePt: 'お湯は あついです。(O-yu wa atsui desu.) — A água está quente.' },
          { type: 'vocab', word: 'これ', article: null, english: 'this one (near me) — kore', portuguese: 'este aqui (perto de mim) — kore', example: 'これは 何ですか？(Kore wa nan desu ka?) — What is this?', examplePt: 'これは 何ですか？(Kore wa nan desu ka?) — O que é isto?' },
          { type: 'vocab', word: 'それ', article: null, english: 'that one (near you) — sore', portuguese: 'esse aí (perto de você) — sore', example: 'それを ください。(Sore o kudasai.) — That one, please.', examplePt: 'それを ください。(Sore o kudasai.) — Esse aí, por favor.' },
          { type: 'vocab', word: 'あれ', article: null, english: 'that one over there — are', portuguese: 'aquele lá — are', example: 'あれは 富士山です。(Are wa Fujisan desu.) — That over there is Mt Fuji.', examplePt: 'あれは 富士山です。(Are wa Fujisan desu.) — Aquilo lá é o Monte Fuji.' },
          { type: 'vocab', word: 'あつい', article: null, english: 'hot (to touch) — atsui', portuguese: 'quente (ao toque) — atsui', example: 'とても あついです！(Totemo atsui desu!) — It is very hot!', examplePt: 'とても あついです！(Totemo atsui desu!) — Está muito quente!' },
          { type: 'grammar', title: 'kore / sore / are', titlePt: 'kore / sore / are', explanation: 'Three pointing words by distance: kore = this (near me), sore = that (near you), are = that over there (away from both). They replace a noun: Kore wa pen desu = "This is a pen".', explanationPt: 'Três palavras para apontar conforme a distância: kore = este (perto de mim), sore = esse (perto de você), are = aquele lá (longe dos dois). Elas substituem um substantivo: Kore wa pen desu = "Isto é uma caneta".', examples: ['これは わたしのです。(Kore wa watashi no desu.) — This is mine.', 'あれは 何ですか？(Are wa nan desu ka?) — What is that over there?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'You point at something far from both of you. Which word?', questionPt: 'Você aponta para algo longe de vocês dois. Qual palavra?', options: ['kore', 'sore', 'are', 'dore'], correct: 'are' },
          { type: 'exercise', subtype: 'fill-blank', question: '___ o kudasai. (that one, near you)', questionPt: '___ o kudasai. (esse aí, perto de você)', correct: 'sore' },
        ],
      },
    ],
    places: [
      {
        id: 'hak-fuji', name: 'Mt Fuji viewpoint', icon: '\u{1F5FB}',
        coords: [35.3606, 138.7274], wikiTitle: 'Mount Fuji',
        narrative: 'The clouds part and Mt Fuji appears, perfect and snow-capped above the lakes — Japan’s highest mountain and a sacred volcano.',
        narrativePt: 'As nuvens se abrem e o Monte Fuji aparece, perfeito e coberto de neve acima dos lagos: a montanha mais alta do Japão e um vulcão sagrado.',
        phrases: [
          { ja: 'あれは 富士山です。', romaji: 'Are wa Fujisan desu.', en: 'That over there is Mt Fuji.', pt: 'Aquilo lá é o Monte Fuji.' },
          { ja: 'とても 高いです。', romaji: 'Totemo takai desu.', en: 'It is very high.', pt: 'É muito alto.' },
        ],
        lessonId: 'fuji-1',
        quiz: {
          question: 'Mt Fuji is Japan’s highest mountain — and also a what?',
          questionPt: 'O Monte Fuji é a montanha mais alta do Japão: e também é o quê?',
          options: ['Volcano', 'Glacier', 'Waterfall'],
          correct: 'Volcano',
          explanation: 'Fuji is an active stratovolcano, 3,776 m high; its last eruption was in 1707.',
          explanationPt: 'O Fuji é um estratovulcão ativo, com 3.776 m de altura; sua última erupção foi em 1707.',
        },
      },
      {
        id: 'hak-onsen', name: 'Hakone onsen', icon: '♨️',
        coords: [35.2328, 139.1069], wikiTitle: 'Hakone, Kanagawa',
        narrative: 'You wash first, then sink into the steaming onsen, Fuji somewhere beyond the steam. The rule: clean before you soak, and no towel in the water.',
        narrativePt: 'Você se lava primeiro e depois mergulha no onsen fumegante, com o Fuji em algum lugar além do vapor. A regra: limpe-se antes de mergulhar e nada de toalha na água.',
        phrases: [
          { ja: '気持ちいいです。', romaji: 'Kimochi ii desu.', en: 'It feels wonderful.', pt: 'É maravilhoso.' },
          { ja: 'お湯は あついです。', romaji: 'O-yu wa atsui desu.', en: 'The water is hot.', pt: 'A água está quente.' },
        ],
        lessonId: 'fuji-2',
        quiz: {
          question: 'Before entering an onsen bath, you must always do what?',
          questionPt: 'Antes de entrar num banho de onsen, você deve sempre fazer o quê?',
          options: ['Wash your body first', 'Wear a swimsuit', 'Bring soap into the water'],
          correct: 'Wash your body first',
          explanation: 'You scrub and rinse at the showers first; the bath itself is only for soaking, kept clean for all.',
          explanationPt: 'Você se esfrega e se enxágua nos chuveiros primeiro; o banho em si é só para relaxar, mantido limpo para todos.',
        },
      },
      {
        id: 'hak-owakudani', name: 'Owakudani ropeway', icon: '\u{1F6A0}',
        coords: [35.2445, 139.0193], wikiTitle: 'Ōwakudani',
        narrative: 'A cable car lifts you over Owakudani, a steaming volcanic valley where sulphur vents hiss yellow from the earth.',
        narrativePt: 'Um teleférico te leva sobre Owakudani, um vale vulcânico fumegante onde fendas de enxofre sibilam amarelas da terra.',
        phrases: [
          { ja: 'すごいですね！', romaji: 'Sugoi desu ne!', en: 'Incredible, isn’t it!', pt: 'Incrível, não é!' },
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?', pt: 'O que é isto?' },
        ],
        quiz: {
          question: 'Owakudani is a valley shaped by what natural force?',
          questionPt: 'Owakudani é um vale moldado por qual força natural?',
          options: ['Volcanic activity', 'Ocean tides', 'Glaciers'],
          correct: 'Volcanic activity',
          explanation: 'It was created by an eruption of Mt Hakone ~3,000 years ago; sulphurous steam still rises today.',
          explanationPt: 'Foi criado por uma erupção do Monte Hakone há cerca de 3.000 anos; o vapor sulfuroso ainda sobe hoje.',
        },
      },
      {
        id: 'hak-ashi', name: 'Lake Ashi', icon: '⛵',
        coords: [35.2033, 139.0247], wikiTitle: 'Lake Ashi',
        narrative: 'On Lake Ashi a red “pirate ship” ferries you across calm water to a torii gate that stands in the lake itself, Fuji reflected behind it.',
        narrativePt: 'No Lago Ashi, um “navio pirata” vermelho te leva pelas águas calmas até um portal torii que se ergue no próprio lago, com o Fuji refletido atrás dele.',
        phrases: [
          { ja: '湖は 静かです。', romaji: 'Mizuumi wa shizuka desu.', en: 'The lake is calm.', pt: 'O lago está tranquilo.' },
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.', pt: 'É bonito, não é.' },
        ],
        quiz: {
          question: 'What stands in the water of Lake Ashi as a famous photo spot?',
          questionPt: 'O que se ergue nas águas do Lago Ashi como um famoso ponto de fotos?',
          options: ['A red torii gate', 'A lighthouse', 'A windmill'],
          correct: 'A red torii gate',
          explanation: 'The torii of Hakone Shrine rises from the lake, with Mt Fuji often framed behind it.',
          explanationPt: 'O torii do Santuário de Hakone se ergue do lago, com o Monte Fuji muitas vezes emoldurado atrás dele.',
        },
      },
      {
        id: 'hak-eggs', name: 'Black eggs', icon: '\u{1F95A}',
        coords: [35.2440, 139.0200], wikiTitle: 'Ōwakudani',
        narrative: 'Back at Owakudani you try kuro-tamago: eggs boiled in the sulphur springs until their shells turn jet black. One egg, they say, adds seven years to your life.',
        narrativePt: 'De volta a Owakudani você prova o kuro-tamago: ovos cozidos nas fontes de enxofre até a casca ficar preta como carvão. Dizem que um ovo acrescenta sete anos à sua vida.',
        phrases: [
          { ja: '一つ ください。', romaji: 'Hitotsu kudasai.', en: 'One, please.', pt: 'Um, por favor.' },
          { ja: 'おいしいです！', romaji: 'Oishii desu!', en: 'It’s delicious!', pt: 'Está delicioso!' },
        ],
        quiz: {
          question: 'Owakudani’s black eggs get their colour from what?',
          questionPt: 'De onde vem a cor dos ovos pretos de Owakudani?',
          options: ['Sulphur in the spring water', 'Black paint', 'Soy sauce'],
          correct: 'Sulphur in the spring water',
          explanation: 'Boiling in the iron- and sulphur-rich hot spring blackens the shells; locals say one adds 7 years of life.',
          explanationPt: 'O cozimento na fonte termal rica em ferro e enxofre escurece as cascas; os moradores dizem que um ovo acrescenta 7 anos de vida.',
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
    descriptionPt:
      'Kyoto foi a capital imperial por mil anos: uma cidade de templos, ' +
      'jardins e gueixas. Aqui o viajante aprende a pedir informações com educação, com ' +
      'um sumimasen nos lábios e uma reverência a postos.',
    photos: [
      { wikiTitle: 'Fushimi Inari-taisha', alt: 'Torii gates of Fushimi Inari', caption: 'Fushimi Inari — thousands of vermilion torii' },
      { wikiTitle: 'Kinkaku-ji', alt: 'Golden Pavilion', caption: 'Kinkaku-ji, the Golden Pavilion' },
    ],
    vocabTopics: ['Directions', 'Politeness', 'Places in town'],
    grammarTopic: 'doko / migi / hidari + ~wa doko desu ka',
    grammarTopicPt: 'doko / migi / hidari + ~wa doko desu ka',
    lessons: [
      {
        id: 'kyoto-1',
        title: 'Asking the way',
        titlePt: 'Pedindo informações',
        description: 'Directions through the torii: where, right, left, straight on.',
        descriptionPt: 'Direções pelos torii: onde, direita, esquerda, em frente.',
        steps: [
          { type: 'vocab', word: 'どこ', article: null, english: 'where — doko', portuguese: 'onde — doko', example: 'トイレは どこですか？(Toire wa doko desu ka?) — Where is the toilet?', examplePt: 'トイレは どこですか？(Toire wa doko desu ka?) — Onde fica o banheiro?' },
          { type: 'vocab', word: '右', article: null, english: 'right — migi', portuguese: 'direita — migi', example: '右に あります。(Migi ni arimasu.) — It’s on the right.', examplePt: '右に あります。(Migi ni arimasu.) — Fica à direita.' },
          { type: 'vocab', word: '左', article: null, english: 'left — hidari', portuguese: 'esquerda — hidari', example: '左へ どうぞ。(Hidari e dōzo.) — To the left, please.', examplePt: '左へ どうぞ。(Hidari e dōzo.) — Para a esquerda, por favor.' },
          { type: 'vocab', word: 'まっすぐ', article: null, english: 'straight ahead — massugu', portuguese: 'em frente — massugu', example: 'まっすぐです。(Massugu desu.) — It’s straight ahead.', examplePt: 'まっすぐです。(Massugu desu.) — É em frente.' },
          { type: 'vocab', word: '駅', article: null, english: 'station — eki', portuguese: 'estação — eki', example: '駅は あそこです。(Eki wa asoko desu.) — The station is over there.', examplePt: '駅は あそこです。(Eki wa asoko desu.) — A estação é ali.' },
          { type: 'vocab', word: 'お寺', article: null, english: 'temple — o-tera', portuguese: 'templo — o-tera', example: 'お寺は 静かです。(O-tera wa shizuka desu.) — The temple is quiet.', examplePt: 'お寺は 静かです。(O-tera wa shizuka desu.) — O templo é tranquilo.' },
          { type: 'grammar', title: '〜は どこですか？', titlePt: '〜は どこですか？', explanation: '[place] wa doko desu ka? = "Where is [place]?" Start with Sumimasen (excuse me). Answers use migi (right), hidari (left), massugu (straight), asoko (over there) + ni arimasu (it is/exists there).', explanationPt: '[lugar] wa doko desu ka? = "Onde fica [lugar]?" Comece com Sumimasen (com licença). As respostas usam migi (direita), hidari (esquerda), massugu (em frente), asoko (ali) + ni arimasu (está/fica ali).', examples: ['駅は どこですか？(Eki wa doko desu ka?) — Where is the station?', '右に あります。(Migi ni arimasu.) — It’s on the right.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "right" (direction)?', questionPt: 'Qual palavra significa "direita" (direção)?', options: ['hidari', 'migi', 'massugu', 'doko'], correct: 'migi' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Eki wa ___ desu ka? (where)', questionPt: 'Eki wa ___ desu ka? (onde)', correct: 'doko' },
        ],
      },
      {
        id: 'kyoto-2',
        title: 'Courtesy in Gion',
        titlePt: 'Cortesia em Gion',
        description: 'Polite words in the geisha district: excuse me, please, sorry.',
        descriptionPt: 'Palavras educadas no distrito das gueixas: com licença, por favor, desculpe.',
        steps: [
          { type: 'vocab', word: 'すみません', article: null, english: 'excuse me / sorry — sumimasen', portuguese: 'com licença / desculpe — sumimasen', example: 'すみません、ちょっと…(Sumimasen, chotto…) — Excuse me, just a moment…', examplePt: 'すみません、ちょっと…(Sumimasen, chotto…) — Com licença, só um momento…' },
          { type: 'vocab', word: 'お願いします', article: null, english: 'please (a request) — onegai shimasu', portuguese: 'por favor (um pedido) — onegai shimasu', example: 'これを お願いします。(Kore o onegai shimasu.) — This one, please.', examplePt: 'これを お願いします。(Kore o onegai shimasu.) — Este, por favor.' },
          { type: 'vocab', word: 'ごめんなさい', article: null, english: 'I’m sorry — gomen nasai', portuguese: 'me desculpe — gomen nasai', example: 'ごめんなさい。(Gomen nasai.) — I’m sorry.', examplePt: 'ごめんなさい。(Gomen nasai.) — Me desculpe.' },
          { type: 'vocab', word: 'だいじょうぶ', article: null, english: 'it’s okay / fine — daijōbu', portuguese: 'está tudo bem / tudo certo — daijōbu', example: '大丈夫です。(Daijōbu desu.) — It’s fine.', examplePt: '大丈夫です。(Daijōbu desu.) — Está tudo bem.' },
          { type: 'vocab', word: 'ちょっと', article: null, english: 'a little / a bit — chotto', portuguese: 'um pouco / um pouquinho — chotto', example: 'ちょっと 待ってください。(Chotto matte kudasai.) — Wait a moment, please.', examplePt: 'ちょっと 待ってください。(Chotto matte kudasai.) — Espere um momento, por favor.' },
          { type: 'vocab', word: 'いいですか', article: null, english: 'is it okay? / may I? — ii desu ka', portuguese: 'tudo bem? / posso? — ii desu ka', example: '写真、いいですか？(Shashin, ii desu ka?) — Is a photo okay?', examplePt: '写真、いいですか？(Shashin, ii desu ka?) — Posso tirar uma foto?' },
          { type: 'grammar', title: 'sumimasen — the all-purpose word', titlePt: 'sumimasen — a palavra para tudo', explanation: 'Sumimasen does triple duty: “excuse me” (to get attention), “sorry” (light apology) and even “thank you” (for trouble caused). For a sincere apology use gomen nasai; to ask permission, end with ii desu ka?', explanationPt: 'Sumimasen faz três papéis: “com licença” (para chamar a atenção), “desculpe” (uma desculpa leve) e até “obrigado” (pelo incômodo causado). Para um pedido de desculpas sincero, use gomen nasai; para pedir permissão, termine com ii desu ka?', examples: ['すみません！(Sumimasen!) — Excuse me! / Sorry!', '写真、いいですか？(Shashin, ii desu ka?) — May I take a photo?'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'You want to get a waiter’s attention politely. What do you say?', questionPt: 'Você quer chamar a atenção de um garçom com educação. O que você diz?', options: ['Sayōnara', 'Sumimasen', 'Oishii', 'Daijōbu'], correct: 'Sumimasen' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Kore o ___ shimasu. (please / request)', questionPt: 'Kore o ___ shimasu. (por favor / pedido)', correct: 'onegai' },
        ],
      },
    ],
    places: [
      {
        id: 'kyo-fushimi', name: 'Fushimi Inari', icon: '⛩️',
        coords: [34.9671, 135.7727], wikiTitle: 'Fushimi Inari-taisha',
        narrative: 'You climb through thousands of vermilion torii at Fushimi Inari, an endless tunnel of gates winding up the sacred mountain.',
        narrativePt: 'Você sobe por milhares de torii vermelhos em Fushimi Inari, um túnel infinito de portais que serpenteia montanha sagrada acima.',
        phrases: [
          { ja: 'すみません、頂上は どこですか？', romaji: 'Sumimasen, chōjō wa doko desu ka?', en: 'Excuse me, where is the summit?', pt: 'Com licença, onde fica o cume?' },
          { ja: 'まっすぐですか？', romaji: 'Massugu desu ka?', en: 'Is it straight ahead?', pt: 'É em frente?' },
        ],
        lessonId: 'kyoto-1',
        quiz: {
          question: 'Fushimi Inari is famous for thousands of what?',
          questionPt: 'Fushimi Inari é famoso por milhares de quê?',
          options: ['Vermilion torii gates', 'Stone lanterns', 'Golden statues'],
          correct: 'Vermilion torii gates',
          explanation: 'Some 10,000 torii, donated by worshippers, form tunnels up Mt Inari, shrine of the rice deity.',
          explanationPt: 'Cerca de 10.000 torii, doados por devotos, formam túneis subindo o Monte Inari, santuário da divindade do arroz.',
        },
      },
      {
        id: 'kyo-kinkakuji', name: 'Kinkaku-ji', icon: '\u{1F3EF}',
        coords: [35.0394, 135.7292], wikiTitle: 'Kinkaku-ji',
        narrative: 'Across a still pond the Golden Pavilion glows, its top two floors covered in gold leaf and mirrored perfectly in the water.',
        narrativePt: 'Do outro lado de um lago sereno o Pavilhão Dourado reluz, seus dois andares superiores cobertos de folha de ouro e refletidos perfeitamente na água.',
        phrases: [
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.', pt: 'É lindo, não é?' },
          { ja: '写真、いいですか？', romaji: 'Shashin, ii desu ka?', en: 'May I take a photo?', pt: 'Posso tirar uma foto?' },
        ],
        quiz: {
          question: 'Kinkaku-ji is covered in what material?',
          questionPt: 'Kinkaku-ji é coberto de qual material?',
          options: ['Gold leaf', 'Silver', 'Bamboo'],
          correct: 'Gold leaf',
          explanation: 'The Golden Pavilion’s upper floors are coated in real gold leaf, reflected in the surrounding pond.',
          explanationPt: 'Os andares superiores do Pavilhão Dourado são revestidos de folha de ouro de verdade, refletida no lago ao redor.',
        },
      },
      {
        id: 'kyo-arashiyama', name: 'Arashiyama bamboo', icon: '\u{1F38B}',
        coords: [35.0170, 135.6716], wikiTitle: 'Arashiyama',
        narrative: 'In the Arashiyama grove, towering green bamboo creaks and sways overhead, the light falling in soft stripes onto the path.',
        narrativePt: 'No bosque de Arashiyama, altíssimos bambus verdes rangem e balançam lá em cima, e a luz cai em suaves faixas sobre a trilha.',
        phrases: [
          { ja: '静かですね。', romaji: 'Shizuka desu ne.', en: 'It’s peaceful, isn’t it.', pt: 'É tranquilo, não é?' },
          { ja: 'すごいです！', romaji: 'Sugoi desu!', en: 'Wow / amazing!', pt: 'Uau / incrível!' },
        ],
        quiz: {
          question: 'The Arashiyama grove is made of what plant?',
          questionPt: 'O bosque de Arashiyama é feito de qual planta?',
          options: ['Bamboo', 'Cherry trees', 'Pine'],
          correct: 'Bamboo',
          explanation: 'Its towering bamboo stalks form one of Japan’s most photographed natural corridors.',
          explanationPt: 'Seus altíssimos troncos de bambu formam um dos corredores naturais mais fotografados do Japão.',
        },
      },
      {
        id: 'kyo-gion', name: 'Gion', icon: '\u{1F458}',
        coords: [35.0037, 135.7752], wikiTitle: 'Gion',
        narrative: 'At dusk in Gion, lanterns light wooden teahouses and — if you are lucky — a geiko hurries by in silk. You step aside politely, sumimasen.',
        narrativePt: 'Ao entardecer em Gion, lanternas iluminam as casas de chá de madeira e, se você tiver sorte, uma geiko passa apressada em seda. Você se afasta com educação, sumimasen.',
        phrases: [
          { ja: 'すみません。', romaji: 'Sumimasen.', en: 'Excuse me / sorry.', pt: 'Com licença / desculpe.' },
          { ja: '写真、いいですか？', romaji: 'Shashin, ii desu ka?', en: 'Is a photo okay?', pt: 'Posso tirar uma foto?' },
          { ja: 'ありがとう ございます。', romaji: 'Arigatō gozaimasu.', en: 'Thank you very much.', pt: 'Muito obrigado.' },
        ],
        lessonId: 'kyoto-2',
        quiz: {
          question: 'Gion is Kyoto’s historic district famous for whom?',
          questionPt: 'Gion é o distrito histórico de Kyoto famoso por quem?',
          options: ['Geisha (geiko & maiko)', 'Samurai armies', 'Sumo wrestlers'],
          correct: 'Geisha (geiko & maiko)',
          explanation: 'Gion is the best-known hanamachi, the quarter where geiko and apprentice maiko live and perform.',
          explanationPt: 'Gion é o hanamachi mais conhecido, o bairro onde as geiko e as maiko aprendizes vivem e se apresentam.',
        },
      },
      {
        id: 'kyo-kiyomizu', name: 'Kiyomizu-dera', icon: '\u{1F6D5}',
        coords: [34.9949, 135.7851], wikiTitle: 'Kiyomizu-dera',
        narrative: 'Kiyomizu-dera’s vast wooden stage juts out over the hillside, built without a single nail, the whole city of Kyoto spread below.',
        narrativePt: 'O vasto palco de madeira de Kiyomizu-dera se projeta sobre a encosta, construído sem um único prego, com toda a cidade de Kyoto estendida lá embaixo.',
        phrases: [
          { ja: 'ここは どこですか？', romaji: 'Koko wa doko desu ka?', en: 'Where are we (what place is this)?', pt: 'Onde estamos (que lugar é este)?' },
          { ja: '高いですね！', romaji: 'Takai desu ne!', en: 'It’s high up, isn’t it!', pt: 'É bem alto, não é?!' },
        ],
        quiz: {
          question: 'Kiyomizu-dera’s famous stage was built using no what?',
          questionPt: 'O famoso palco de Kiyomizu-dera foi construído sem usar o quê?',
          options: ['Nails', 'Wood', 'Stone'],
          correct: 'Nails',
          explanation: 'Its huge wooden stage is held together by joinery alone — not a single nail was used.',
          explanationPt: 'Seu enorme palco de madeira é sustentado apenas por encaixes: nenhum prego foi usado.',
        },
      },
      {
        id: 'kyo-tea', name: 'Tea ceremony', icon: '\u{1F375}',
        coords: [34.9858, 135.7588], wikiTitle: 'Japanese tea ceremony',
        narrative: 'In a quiet tatami room you kneel for a tea ceremony. The host whisks matcha to a green froth; you turn the bowl, bow, and drink in three sips.',
        narrativePt: 'Em uma sala tranquila de tatame você se ajoelha para uma cerimônia do chá. O anfitrião bate o matcha até formar uma espuma verde; você gira a tigela, faz uma reverência e bebe em três goles.',
        phrases: [
          { ja: 'いただきます。', romaji: 'Itadakimasu.', en: 'I gratefully receive (before consuming).', pt: 'Recebo com gratidão (antes de consumir).' },
          { ja: 'おいしいです。', romaji: 'Oishii desu.', en: 'It’s delicious.', pt: 'Está delicioso.' },
        ],
        quiz: {
          question: 'The green tea whisked in a Japanese tea ceremony is called what?',
          questionPt: 'Como se chama o chá verde batido em uma cerimônia do chá japonesa?',
          options: ['Matcha', 'Sencha', 'Sake'],
          correct: 'Matcha',
          explanation: 'Matcha, a powdered green tea, is whisked with hot water into a froth in the chadō ceremony.',
          explanationPt: 'O matcha, um chá verde em pó, é batido com água quente até virar espuma na cerimônia chadō.',
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
    descriptionPt:
      'Osaka é a cozinha do Japão: barulhenta, calorosa e faminta. Sob o neon de ' +
      'Dōtonbori, o viajante come pela cidade inteira, aprendendo a pedir, ' +
      'a contar coisas e a dizer a palavra mais importante: oishii, delicioso.',
    photos: [
      { wikiTitle: 'Dōtonbori', alt: 'Dōtonbori neon', caption: 'Dōtonbori — Osaka’s neon food street' },
      { wikiTitle: 'Takoyaki', alt: 'Takoyaki octopus balls', caption: 'Takoyaki, Osaka’s octopus dumplings' },
    ],
    vocabTopics: ['Food', 'Ordering', 'Counting things'],
    grammarTopic: '〜を ください (kudasai) + counters',
    grammarTopicPt: '〜を ください (kudasai) + contadores',
    lessons: [
      {
        id: 'osaka-1',
        title: 'Ordering food',
        titlePt: 'Pedindo comida',
        description: 'In Dōtonbori: asking for things with kudasai, paying the bill.',
        descriptionPt: 'Em Dōtonbori: pedindo coisas com kudasai, pagando a conta.',
        steps: [
          { type: 'vocab', word: 'たべもの', article: null, english: 'food — tabemono', portuguese: 'comida — tabemono', example: '大阪の たべものは おいしいです。(Ōsaka no tabemono wa oishii desu.) — Osaka’s food is delicious.', examplePt: '大阪の たべものは おいしいです。(Ōsaka no tabemono wa oishii desu.) — A comida de Osaka é deliciosa.' },
          { type: 'vocab', word: '水', article: null, english: 'water — mizu', portuguese: 'água — mizu', example: 'お水を ください。(O-mizu o kudasai.) — Water, please.', examplePt: 'お水を ください。(O-mizu o kudasai.) — Água, por favor.' },
          { type: 'vocab', word: 'お茶', article: null, english: 'tea — o-cha', portuguese: 'chá — o-cha', example: 'お茶を 一つ ください。(O-cha o hitotsu kudasai.) — One tea, please.', examplePt: 'お茶を 一つ ください。(O-cha o hitotsu kudasai.) — Um chá, por favor.' },
          { type: 'vocab', word: 'ください', article: null, english: 'please (give me) — kudasai', portuguese: 'por favor (me dê) — kudasai', example: 'これを ください。(Kore o kudasai.) — This one, please.', examplePt: 'これを ください。(Kore o kudasai.) — Este aqui, por favor.' },
          { type: 'vocab', word: 'いくら', article: null, english: 'how much — ikura', portuguese: 'quanto (custa) — ikura', example: 'いくらですか？(Ikura desu ka?) — How much is it?', examplePt: 'いくらですか？(Ikura desu ka?) — Quanto custa?' },
          { type: 'vocab', word: 'おいしい', article: null, english: 'delicious — oishii', portuguese: 'delicioso — oishii', example: 'とても おいしいです！(Totemo oishii desu!) — Very delicious!', examplePt: 'とても おいしいです！(Totemo oishii desu!) — Muito delicioso!' },
          { type: 'grammar', title: '〜を ください (o kudasai)', titlePt: '〜を ください (o kudasai)', explanation: '[thing] o kudasai = "[thing], please / give me [thing]". を (o) marks the object you want. Add a number+counter before kudasai to say how many: Bīru o futatsu kudasai = "Two beers, please".', explanationPt: '[coisa] o kudasai = "[coisa], por favor / me dê [coisa]". を (o) marca o objeto que você quer. Adicione um número+contador antes de kudasai para dizer quantos: Bīru o futatsu kudasai = "Duas cervejas, por favor".', examples: ['コーヒーを ください。(Kōhī o kudasai.) — A coffee, please.', 'お勘定を お願いします。(O-kanjō o onegai shimasu.) — The bill, please.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "delicious"?', questionPt: 'Como se diz "delicioso"?', options: ['oishii', 'ikura', 'mizu', 'takai'], correct: 'oishii' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Kore o ___. (please give me)', questionPt: 'Kore o ___. (me dê, por favor)', correct: 'kudasai' },
        ],
      },
      {
        id: 'osaka-2',
        title: 'Counting things',
        titlePt: 'Contando coisas',
        description: 'At a takoyaki stall: counting one, two, three of something.',
        descriptionPt: 'Numa barraca de takoyaki: contando um, dois, três de alguma coisa.',
        steps: [
          { type: 'vocab', word: '一つ', article: null, english: 'one (thing) — hitotsu', portuguese: 'um (coisa) — hitotsu', example: '一つ ください。(Hitotsu kudasai.) — One, please.', examplePt: '一つ ください。(Hitotsu kudasai.) — Um, por favor.' },
          { type: 'vocab', word: '二つ', article: null, english: 'two (things) — futatsu', portuguese: 'dois (coisas) — futatsu', example: '二つ お願いします。(Futatsu onegai shimasu.) — Two, please.', examplePt: '二つ お願いします。(Futatsu onegai shimasu.) — Dois, por favor.' },
          { type: 'vocab', word: '三つ', article: null, english: 'three (things) — mittsu', portuguese: 'três (coisas) — mittsu', example: '三つ ください。(Mittsu kudasai.) — Three, please.', examplePt: '三つ ください。(Mittsu kudasai.) — Três, por favor.' },
          { type: 'vocab', word: 'たこ焼き', article: null, english: 'takoyaki (octopus balls) — takoyaki', portuguese: 'takoyaki (bolinhos de polvo) — takoyaki', example: 'たこ焼きを 一つ。(Takoyaki o hitotsu.) — One takoyaki.', examplePt: 'たこ焼きを 一つ。(Takoyaki o hitotsu.) — Um takoyaki.' },
          { type: 'vocab', word: 'ビール', article: null, english: 'beer — bīru', portuguese: 'cerveja — bīru', example: 'ビールを 二つ ください。(Bīru o futatsu kudasai.) — Two beers, please.', examplePt: 'ビールを 二つ ください。(Bīru o futatsu kudasai.) — Duas cervejas, por favor.' },
          { type: 'vocab', word: '全部で', article: null, english: 'in total / all together — zenbu de', portuguese: 'no total / tudo junto — zenbu de', example: '全部で いくらですか？(Zenbu de ikura desu ka?) — How much in total?', examplePt: '全部で いくらですか？(Zenbu de ikura desu ka?) — Quanto é no total?' },
          { type: 'grammar', title: 'Counting things: hitotsu, futatsu…', titlePt: 'Contando coisas: hitotsu, futatsu…', explanation: 'The all-purpose counter for objects: hitotsu (1), futatsu (2), mittsu (3), yottsu (4), itsutsu (5)… tō (10). Use it for food and most countable things when you don’t know the special counter. Number comes after the noun: Takoyaki o futatsu kudasai.', explanationPt: 'O contador de uso geral para objetos: hitotsu (1), futatsu (2), mittsu (3), yottsu (4), itsutsu (5)… tō (10). Use-o para comida e para a maioria das coisas contáveis quando você não sabe o contador específico. O número vem depois do substantivo: Takoyaki o futatsu kudasai.', examples: ['ビールを 三つ ください。(Bīru o mittsu kudasai.) — Three beers, please.', '一つ ください。(Hitotsu kudasai.) — One, please.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which means "two (things)"?', questionPt: 'Qual significa "dois (coisas)"?', options: ['hitotsu', 'futatsu', 'mittsu', 'itsutsu'], correct: 'futatsu' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Takoyaki o ___ kudasai. (one thing)', questionPt: 'Takoyaki o ___ kudasai. (uma coisa)', correct: 'hitotsu' },
        ],
      },
    ],
    places: [
      {
        id: 'osa-castle', name: 'Osaka Castle', icon: '\u{1F3EF}',
        coords: [34.6873, 135.5259], wikiTitle: 'Osaka Castle',
        narrative: 'Osaka Castle rises white and green-gold above its moat, a samurai-era stronghold ringed by cherry trees and stone walls.',
        narrativePt: 'O Castelo de Osaka se ergue branco e verde-dourado acima do seu fosso, uma fortaleza da era dos samurais cercada por cerejeiras e muralhas de pedra.',
        phrases: [
          { ja: 'ここは 大阪城です。', romaji: 'Koko wa Ōsaka-jō desu.', en: 'This is Osaka Castle.', pt: 'Este é o Castelo de Osaka.' },
          { ja: '古いですね。', romaji: 'Furui desu ne.', en: 'It’s old, isn’t it.', pt: 'É antigo, não é?' },
        ],
        quiz: {
          question: 'Osaka Castle dates from which era of Japanese history?',
          questionPt: 'O Castelo de Osaka data de qual era da história japonesa?',
          options: ['The samurai era (16th c.)', 'The 20th century', 'Ancient Jomon times'],
          correct: 'The samurai era (16th c.)',
          explanation: 'It was built in the 1580s by warlord Toyotomi Hideyoshi as he unified Japan.',
          explanationPt: 'Foi construído na década de 1580 pelo senhor da guerra Toyotomi Hideyoshi enquanto ele unificava o Japão.',
        },
      },
      {
        id: 'osa-dotonbori', name: 'Dōtonbori', icon: '\u{1F361}',
        coords: [34.6687, 135.5013], wikiTitle: 'Dōtonbori',
        narrative: 'Night in Dōtonbori: canalside neon, the running Glico man, giant mechanical crabs, and the smell of grilling street food everywhere.',
        narrativePt: 'Noite em Dōtonbori: neon à beira do canal, o homem correndo da Glico, caranguejos mecânicos gigantes e o cheiro de comida de rua grelhando por toda parte.',
        phrases: [
          { ja: 'これを ください。', romaji: 'Kore o kudasai.', en: 'This one, please.', pt: 'Este aqui, por favor.' },
          { ja: 'いくらですか？', romaji: 'Ikura desu ka?', en: 'How much is it?', pt: 'Quanto custa?' },
        ],
        lessonId: 'osaka-1',
        quiz: {
          question: 'Osaka is nicknamed “the nation’s ___” because of its food.',
          questionPt: 'Osaka é apelidada de “a ___ da nação” por causa da sua comida.',
          options: ['Kitchen', 'Library', 'Garden'],
          correct: 'Kitchen',
          explanation: 'Tenka no daidokoro — “the nation’s kitchen” — reflects Osaka’s long love of eating well.',
          explanationPt: 'Tenka no daidokoro — “a cozinha da nação” — reflete o antigo amor de Osaka por comer bem.',
        },
      },
      {
        id: 'osa-takoyaki', name: 'Takoyaki stall', icon: '\u{1F419}',
        coords: [34.6686, 135.5030], wikiTitle: 'Takoyaki',
        narrative: 'At a street stall a cook turns rows of takoyaki in their molds, crisp outside and molten in, each hiding a piece of octopus. You order two.',
        narrativePt: 'Numa barraca de rua, um cozinheiro vira fileiras de takoyaki em suas formas, crocantes por fora e derretidos por dentro, cada um escondendo um pedaço de polvo. Você pede dois.',
        phrases: [
          { ja: 'たこ焼きを 二つ ください。', romaji: 'Takoyaki o futatsu kudasai.', en: 'Two takoyaki, please.', pt: 'Dois takoyaki, por favor.' },
          { ja: 'おいしいです！', romaji: 'Oishii desu!', en: 'It’s delicious!', pt: 'Está delicioso!' },
        ],
        lessonId: 'osaka-2',
        quiz: {
          question: 'What is hidden inside a ball of takoyaki?',
          questionPt: 'O que está escondido dentro de uma bolinha de takoyaki?',
          options: ['A piece of octopus', 'Cheese', 'Red bean paste'],
          correct: 'A piece of octopus',
          explanation: 'Tako means octopus; each batter ball wraps a chunk of it — Osaka’s signature snack.',
          explanationPt: 'Tako significa polvo; cada bolinha de massa envolve um pedaço dele: o petisco típico de Osaka.',
        },
      },
      {
        id: 'osa-kuromon', name: 'Kuromon Market', icon: '\u{1F6D2}',
        coords: [34.6647, 135.5063], wikiTitle: 'Kuromon Ichiba',
        narrative: 'Kuromon Market is a covered street of stalls — fresh fish on ice, fruit, grilled scallops — “Osaka’s kitchen” at its busiest.',
        narrativePt: 'O Mercado Kuromon é uma rua coberta de barracas: peixe fresco no gelo, frutas, vieiras grelhadas — “a cozinha de Osaka” no seu momento mais movimentado.',
        phrases: [
          { ja: 'これは 何ですか？', romaji: 'Kore wa nan desu ka?', en: 'What is this?', pt: 'O que é isto?' },
          { ja: '一つ ください。', romaji: 'Hitotsu kudasai.', en: 'One, please.', pt: 'Um, por favor.' },
        ],
        quiz: {
          question: 'Kuromon Ichiba is what kind of place?',
          questionPt: 'Que tipo de lugar é o Kuromon Ichiba?',
          options: ['A food market', 'A temple', 'A train depot'],
          correct: 'A food market',
          explanation: 'A 600 m covered market of ~150 stalls, famous for fresh seafood and street eats.',
          explanationPt: 'Um mercado coberto de 600 m com cerca de 150 barracas, famoso por frutos do mar frescos e comida de rua.',
        },
      },
      {
        id: 'osa-shinsekai', name: 'Shinsekai', icon: '\u{1F3A2}',
        coords: [34.6524, 135.5063], wikiTitle: 'Shinsekai',
        narrative: 'Retro Shinsekai gathers around Tsutenkaku tower, its old streets lined with kushikatsu stalls — deep-fried skewers, dipped once in shared sauce (never twice!).',
        narrativePt: 'A retrô Shinsekai se agrupa em torno da torre Tsutenkaku, com suas ruas antigas cheias de barracas de kushikatsu: espetinhos fritos, mergulhados uma vez no molho compartilhado (nunca duas vezes!).',
        phrases: [
          { ja: 'ビールを 一つ ください。', romaji: 'Bīru o hitotsu kudasai.', en: 'One beer, please.', pt: 'Uma cerveja, por favor.' },
          { ja: '全部で いくらですか？', romaji: 'Zenbu de ikura desu ka?', en: 'How much in total?', pt: 'Quanto é no total?' },
        ],
        quiz: {
          question: 'The big rule at a kushikatsu stall is:',
          questionPt: 'A grande regra numa barraca de kushikatsu é:',
          options: ['No double-dipping the sauce', 'Always tip 20%', 'Eat with chopsticks only'],
          correct: 'No double-dipping the sauce',
          explanation: 'The dipping sauce is shared, so you dip each skewer once — never a second time.',
          explanationPt: 'O molho é compartilhado, então você mergulha cada espetinho uma vez: nunca uma segunda vez.',
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
    descriptionPt:
      'Hiroshima é uma cidade de paz, reconstruída após a bomba atômica de 1945. O viajante ' +
      'percorre o Parque da Paz em silêncio, depois atravessa até o torii flutuante de Miyajima ' +
      'e aprende a falar do que aconteceu, no passado.',
    photos: [
      { wikiTitle: 'Hiroshima Peace Memorial', alt: 'Genbaku Dome', caption: 'The Genbaku Dome, Hiroshima Peace Memorial' },
      { wikiTitle: 'Itsukushima Shrine', alt: 'Floating torii of Miyajima', caption: 'Miyajima’s floating torii at high tide' },
    ],
    vocabTopics: ['History & peace', 'Past tense', 'Feelings'],
    grammarTopic: '〜でした / 〜ました (past tense)',
    grammarTopicPt: '〜でした / 〜ました (tempo passado)',
    lessons: [
      {
        id: 'hiroshima-1',
        title: 'Speaking of the past',
        titlePt: 'Falando do passado',
        description: 'At the Peace Park: it was, it happened — the polite past tense.',
        descriptionPt: 'No Parque da Paz: foi, aconteceu — o tempo passado polido.',
        steps: [
          { type: 'vocab', word: '平和', article: null, english: 'peace — heiwa', portuguese: 'paz — heiwa', example: '平和が 大切です。(Heiwa ga taisetsu desu.) — Peace is important.', examplePt: '平和が 大切です。(Heiwa ga taisetsu desu.) — A paz é importante.' },
          { type: 'vocab', word: '戦争', article: null, english: 'war — sensō', portuguese: 'guerra — sensō', example: '戦争は 悲しいです。(Sensō wa kanashii desu.) — War is sad.', examplePt: '戦争は 悲しいです。(Sensō wa kanashii desu.) — A guerra é triste.' },
          { type: 'vocab', word: '昔', article: null, english: 'long ago / the past — mukashi', portuguese: 'há muito tempo / o passado — mukashi', example: '昔の ことです。(Mukashi no koto desu.) — It is a thing of the past.', examplePt: '昔の ことです。(Mukashi no koto desu.) — É coisa do passado.' },
          { type: 'vocab', word: 'でした', article: null, english: 'was / were (polite past) — deshita', portuguese: 'era / foi (passado polido) — deshita', example: 'いい 天気でした。(Ii tenki deshita.) — The weather was good.', examplePt: 'いい 天気でした。(Ii tenki deshita.) — O tempo estava bom.' },
          { type: 'vocab', word: '行きました', article: null, english: 'went — ikimashita', portuguese: 'fui / foi — ikimashita', example: '公園に 行きました。(Kōen ni ikimashita.) — I went to the park.', examplePt: '公園に 行きました。(Kōen ni ikimashita.) — Eu fui ao parque.' },
          { type: 'vocab', word: '見ました', article: null, english: 'saw / watched — mimashita', portuguese: 'vi / assisti — mimashita', example: '写真を 見ました。(Shashin o mimashita.) — I saw the photographs.', examplePt: '写真を 見ました。(Shashin o mimashita.) — Eu vi as fotografias.' },
          { type: 'grammar', title: 'Past tense: ~deshita / ~mashita', titlePt: 'Tempo passado: ~deshita / ~mashita', explanation: 'To put a polite sentence in the past: desu → deshita (was/were); and a verb’s ~masu → ~mashita (did). So ikimasu (go) → ikimashita (went); mimasu (see) → mimashita (saw).', explanationPt: 'Para colocar uma frase polida no passado: desu → deshita (era/foi); e o ~masu de um verbo → ~mashita (fez). Assim ikimasu (ir) → ikimashita (fui); mimasu (ver) → mimashita (vi).', examples: ['静かでした。(Shizuka deshita.) — It was quiet.', '平和公園に 行きました。(Heiwa-kōen ni ikimashita.) — I went to the Peace Park.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'What is the past form of desu ("is")?', questionPt: 'Qual é a forma passada de desu ("é")?', options: ['deshita', 'desu ka', 'masu', 'mashita'], correct: 'deshita' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Kōen ni iki___. (went — past of ikimasu)', questionPt: 'Kōen ni iki___. (fui — passado de ikimasu)', correct: 'mashita' },
        ],
      },
      {
        id: 'hiroshima-2',
        title: 'Miyajima and okonomiyaki',
        titlePt: 'Miyajima e okonomiyaki',
        description: 'The floating shrine, the deer, and Hiroshima’s layered pancake.',
        descriptionPt: 'O santuário flutuante, os veados e a panqueca em camadas de Hiroshima.',
        steps: [
          { type: 'vocab', word: '海', article: null, english: 'sea — umi', portuguese: 'mar — umi', example: '海は きれいでした。(Umi wa kirei deshita.) — The sea was beautiful.', examplePt: '海は きれいでした。(Umi wa kirei deshita.) — O mar estava lindo.' },
          { type: 'vocab', word: '鳥居', article: null, english: 'torii (shrine gate) — torii', portuguese: 'torii (portão de santuário) — torii', example: '鳥居は 海の 中です。(Torii wa umi no naka desu.) — The torii is in the sea.', examplePt: '鳥居は 海の 中です。(Torii wa umi no naka desu.) — O torii está no mar.' },
          { type: 'vocab', word: '鹿', article: null, english: 'deer — shika', portuguese: 'veado — shika', example: '鹿が います。(Shika ga imasu.) — There are deer.', examplePt: '鹿が います。(Shika ga imasu.) — Há veados.' },
          { type: 'vocab', word: 'お好み焼き', article: null, english: 'okonomiyaki (savoury pancake) — okonomiyaki', portuguese: 'okonomiyaki (panqueca salgada) — okonomiyaki', example: 'お好み焼きを 食べました。(Okonomiyaki o tabemashita.) — I ate okonomiyaki.', examplePt: 'お好み焼きを 食べました。(Okonomiyaki o tabemashita.) — Eu comi okonomiyaki.' },
          { type: 'vocab', word: '食べました', article: null, english: 'ate — tabemashita', portuguese: 'comi / comeu — tabemashita', example: 'とても 食べました。(Totemo tabemashita.) — I ate a lot.', examplePt: 'とても 食べました。(Totemo tabemashita.) — Eu comi muito.' },
          { type: 'vocab', word: '楽しい', article: null, english: 'fun / enjoyable — tanoshii', portuguese: 'divertido / agradável — tanoshii', example: '楽しかったです。(Tanoshikatta desu.) — It was fun.', examplePt: '楽しかったです。(Tanoshikatta desu.) — Foi divertido.' },
          { type: 'grammar', title: 'Past of verbs: ~mashita', titlePt: 'Passado dos verbos: ~mashita', explanation: 'Polite verbs end in ~masu (do) and ~mashita (did): tabemasu (eat) → tabemashita (ate); mimasu (see) → mimashita (saw). For i-adjectives the past is ~katta desu: tanoshii → tanoshikatta desu (was fun).', explanationPt: 'Os verbos polidos terminam em ~masu (faço) e ~mashita (fiz): tabemasu (comer) → tabemashita (comi); mimasu (ver) → mimashita (vi). Para os adjetivos em -i, o passado é ~katta desu: tanoshii → tanoshikatta desu (foi divertido).', examples: ['お好み焼きを 食べました。(Okonomiyaki o tabemashita.) — I ate okonomiyaki.', '楽しかったです。(Tanoshikatta desu.) — It was fun.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which means "ate" (past of tabemasu)?', questionPt: 'Qual significa "comi" (passado de tabemasu)?', options: ['tabemasu', 'tabemashita', 'tabemasen', 'tabete'], correct: 'tabemashita' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Umi wa kirei ___. (was — past of desu)', questionPt: 'Umi wa kirei ___. (estava — passado de desu)', correct: 'deshita' },
        ],
      },
    ],
    places: [
      {
        id: 'hir-peacepark', name: 'Peace Memorial Park', icon: '\u{1F54A}️',
        coords: [34.3955, 132.4536], wikiTitle: 'Hiroshima Peace Memorial Park',
        narrative: 'You walk the Peace Memorial Park in silence. The skeletal Genbaku Dome, left as it stood after 6 August 1945, watches over a city that chose peace.',
        narrativePt: 'Você percorre o Parque Memorial da Paz em silêncio. O esquelético Domo Genbaku, deixado como ficou após 6 de agosto de 1945, vigia uma cidade que escolheu a paz.',
        phrases: [
          { ja: '平和が 大切です。', romaji: 'Heiwa ga taisetsu desu.', en: 'Peace is important.', pt: 'A paz é importante.' },
          { ja: '静かでした。', romaji: 'Shizuka deshita.', en: 'It was quiet.', pt: 'Estava silencioso.' },
        ],
        lessonId: 'hiroshima-1',
        quiz: {
          question: 'The Genbaku Dome is preserved as a memorial of what 1945 event?',
          questionPt: 'O Domo Genbaku é preservado como memorial de qual evento de 1945?',
          options: ['The atomic bombing', 'A great earthquake', 'A volcanic eruption'],
          correct: 'The atomic bombing',
          explanation: 'It is the one structure left standing near the hypocenter, kept as a UNESCO peace memorial.',
          explanationPt: 'É a única estrutura que permaneceu de pé perto do hipocentro, mantida como memorial da paz da UNESCO.',
        },
      },
      {
        id: 'hir-bell', name: 'Peace Bell', icon: '\u{1F514}',
        coords: [34.3935, 132.4530], wikiTitle: 'Hiroshima Peace Memorial Park',
        narrative: 'Visitors ring the Peace Bell, its low tone carrying across the park — a wish for a world without nuclear weapons.',
        narrativePt: 'Os visitantes tocam o Sino da Paz, cujo tom grave se espalha pelo parque, um desejo por um mundo sem armas nucleares.',
        phrases: [
          { ja: '鐘を 鳴らしました。', romaji: 'Kane o narashimashita.', en: 'I rang the bell.', pt: 'Eu toquei o sino.' },
          { ja: '平和を 願います。', romaji: 'Heiwa o negaimasu.', en: 'I wish for peace.', pt: 'Eu desejo paz.' },
        ],
        quiz: {
          question: 'Anyone may ring the Peace Bell to express what?',
          questionPt: 'Qualquer pessoa pode tocar o Sino da Paz para expressar o quê?',
          options: ['A wish for peace', 'The lunch hour', 'A train’s arrival'],
          correct: 'A wish for peace',
          explanation: 'The bell invites every visitor to sound a hope for lasting world peace.',
          explanationPt: 'O sino convida cada visitante a soar uma esperança por uma paz mundial duradoura.',
        },
      },
      {
        id: 'hir-itsukushima', name: 'Floating torii, Miyajima', icon: '⛩️',
        coords: [34.2959, 132.3199], wikiTitle: 'Itsukushima Shrine',
        narrative: 'A ferry carries you to Miyajima, where the great vermilion torii of Itsukushima seems to float on the sea at high tide.',
        narrativePt: 'Uma balsa leva você até Miyajima, onde o grande torii vermelho de Itsukushima parece flutuar sobre o mar na maré alta.',
        phrases: [
          { ja: '鳥居は 海の 中です。', romaji: 'Torii wa umi no naka desu.', en: 'The torii is in the sea.', pt: 'O torii está no mar.' },
          { ja: 'きれいでした。', romaji: 'Kirei deshita.', en: 'It was beautiful.', pt: 'Estava lindo.' },
        ],
        quiz: {
          question: 'At high tide, the great torii of Itsukushima appears to do what?',
          questionPt: 'Na maré alta, o grande torii de Itsukushima parece fazer o quê?',
          options: ['Float on the sea', 'Spin around', 'Light up red'],
          correct: 'Float on the sea',
          explanation: 'Built over a tidal flat, the torii and shrine seem to float when the tide comes in.',
          explanationPt: 'Construídos sobre uma planície de maré, o torii e o santuário parecem flutuar quando a maré sobe.',
        },
      },
      {
        id: 'hir-deer', name: 'Miyajima deer', icon: '\u{1F98C}',
        coords: [34.2967, 132.3196], wikiTitle: 'Sika deer',
        narrative: 'Tame deer roam Miyajima’s lanes, nosing at maps and sleeves. Locals consider them messengers of the gods — gentle, but don’t feed them.',
        narrativePt: 'Veados mansos percorrem as ruelas de Miyajima, fuçando mapas e mangas. Os moradores os consideram mensageiros dos deuses: dóceis, mas não os alimente.',
        phrases: [
          { ja: '鹿が います。', romaji: 'Shika ga imasu.', en: 'There are deer.', pt: 'Há veados.' },
          { ja: 'かわいいですね。', romaji: 'Kawaii desu ne.', en: 'They’re cute, aren’t they.', pt: 'Eles são fofos, não são.' },
        ],
        quiz: {
          question: 'On Miyajima, the wild deer are traditionally seen as what?',
          questionPt: 'Em Miyajima, os veados selvagens são tradicionalmente vistos como o quê?',
          options: ['Messengers of the gods', 'Pests to be removed', 'Farm animals'],
          correct: 'Messengers of the gods',
          explanation: 'In Shinto belief the sacred deer are messengers of the kami, so they roam freely.',
          explanationPt: 'Na crença xintoísta, os veados sagrados são mensageiros dos kami, por isso circulam livremente.',
        },
      },
      {
        id: 'hir-okonomiyaki', name: 'Hiroshima okonomiyaki', icon: '\u{1F95E}',
        coords: [34.3920, 132.4612], wikiTitle: 'Okonomiyaki',
        narrative: 'Back in the city you sit at a hot griddle counter. Hiroshima-style okonomiyaki is built in layers — batter, cabbage, noodles, egg — and flipped before you.',
        narrativePt: 'De volta à cidade, você se senta a um balcão de chapa quente. O okonomiyaki ao estilo de Hiroshima é montado em camadas — massa, repolho, macarrão, ovo — e virado na sua frente.',
        phrases: [
          { ja: 'お好み焼きを 食べました。', romaji: 'Okonomiyaki o tabemashita.', en: 'I ate okonomiyaki.', pt: 'Eu comi okonomiyaki.' },
          { ja: '楽しかったです。', romaji: 'Tanoshikatta desu.', en: 'It was fun.', pt: 'Foi divertido.' },
        ],
        lessonId: 'hiroshima-2',
        quiz: {
          question: 'How does Hiroshima-style okonomiyaki differ from Osaka’s?',
          questionPt: 'Como o okonomiyaki ao estilo de Hiroshima difere do de Osaka?',
          options: ['It is layered (with noodles)', 'It is a cold dessert', 'It has no vegetables'],
          correct: 'It is layered (with noodles)',
          explanation: 'Hiroshima builds the ingredients in layers and adds fried noodles; Osaka mixes them together.',
          explanationPt: 'Hiroshima monta os ingredientes em camadas e adiciona macarrão frito; Osaka os mistura.',
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
    descriptionPt:
      'Bem ao sul ficam as ilhas tropicais de Ryukyu. Okinawa, que já foi um ' +
      'reino próprio, tem mares de coral e um calor todo seu. No fim da jornada, o ' +
      'viajante fala sobre o tempo, assiste a um último pôr do sol e se despede.',
    photos: [
      { wikiTitle: 'Okinawa Island', alt: 'Okinawa beach', caption: 'Okinawa — tropical seas at Japan’s southern edge' },
      { wikiTitle: 'Shuri Castle', alt: 'Shuri Castle', caption: 'Shuri Castle, seat of the old Ryukyu Kingdom' },
    ],
    vocabTopics: ['Weather', 'The sea', 'Farewell'],
    grammarTopic: 'weather adjectives + farewell set',
    grammarTopicPt: 'adjetivos de clima + conjunto de despedidas',
    lessons: [
      {
        id: 'okinawa-1',
        title: 'The weather here',
        titlePt: 'O tempo por aqui',
        description: 'Arriving in Naha: hot, sunny, the blue sea — describing the day.',
        descriptionPt: 'Chegando em Naha: quente, ensolarado, o mar azul — descrevendo o dia.',
        steps: [
          { type: 'vocab', word: '天気', article: null, english: 'weather — tenki', portuguese: 'tempo (clima) — tenki', example: 'いい 天気ですね。(Ii tenki desu ne.) — Nice weather, isn’t it.', examplePt: 'いい 天気ですね。(Ii tenki desu ne.) — Que tempo bom, não é.' },
          { type: 'vocab', word: '暑い', article: null, english: 'hot (weather) — atsui', portuguese: 'quente (clima) — atsui', example: '今日は 暑いです。(Kyō wa atsui desu.) — Today is hot.', examplePt: '今日は 暑いです。(Kyō wa atsui desu.) — Hoje está quente.' },
          { type: 'vocab', word: '晴れ', article: null, english: 'sunny / clear — hare', portuguese: 'ensolarado / limpo — hare', example: '今日は 晴れです。(Kyō wa hare desu.) — Today is sunny.', examplePt: '今日は 晴れです。(Kyō wa hare desu.) — Hoje está ensolarado.' },
          { type: 'vocab', word: '海', article: null, english: 'sea — umi', portuguese: 'mar — umi', example: '海は 青いです。(Umi wa aoi desu.) — The sea is blue.', examplePt: '海は 青いです。(Umi wa aoi desu.) — O mar está azul.' },
          { type: 'vocab', word: '青い', article: null, english: 'blue — aoi', portuguese: 'azul — aoi', example: '空が 青いです。(Sora ga aoi desu.) — The sky is blue.', examplePt: '空が 青いです。(Sora ga aoi desu.) — O céu está azul.' },
          { type: 'vocab', word: '今日', article: null, english: 'today — kyō', portuguese: 'hoje — kyō', example: '今日は いい 日です。(Kyō wa ii hi desu.) — Today is a good day.', examplePt: '今日は いい 日です。(Kyō wa ii hi desu.) — Hoje é um bom dia.' },
          { type: 'grammar', title: 'Talking about the weather', titlePt: 'Falando sobre o tempo', explanation: 'Weather is easy small talk: Ii tenki desu ne (nice weather, isn’t it). Use desu with a noun (hare = sunny, ame = rain) or an i-adjective (atsui = hot, samui = cold). Add ~ne to invite agreement.', explanationPt: 'O tempo é um assunto fácil para puxar conversa: Ii tenki desu ne (que tempo bom, não é). Use desu com um substantivo (hare = ensolarado, ame = chuva) ou um adjetivo em -i (atsui = quente, samui = frio). Acrescente ~ne para convidar à concordância.', examples: ['今日は 暑いですね。(Kyō wa atsui desu ne.) — It’s hot today, isn’t it.', 'いい 天気です。(Ii tenki desu.) — The weather is nice.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "hot (weather)"?', questionPt: 'Qual palavra significa "quente (clima)"?', options: ['samui', 'atsui', 'aoi', 'hare'], correct: 'atsui' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Ii ___ desu ne. (weather)', questionPt: 'Ii ___ desu ne. (tempo/clima)', correct: 'tenki' },
        ],
      },
      {
        id: 'okinawa-2',
        title: 'Saying goodbye',
        titlePt: 'Dizendo adeus',
        description: 'A last sunset: thank you, take care, until we meet again.',
        descriptionPt: 'Um último pôr do sol: obrigado, se cuide, até a próxima.',
        steps: [
          { type: 'vocab', word: 'さようなら', article: null, english: 'goodbye — sayōnara', portuguese: 'adeus — sayōnara', example: 'さようなら、日本。(Sayōnara, Nihon.) — Goodbye, Japan.', examplePt: 'さようなら、日本。(Sayōnara, Nihon.) — Adeus, Japão.' },
          { type: 'vocab', word: 'また ね', article: null, english: 'see you / again, then — mata ne', portuguese: 'até mais / até a próxima — mata ne', example: 'じゃあ、またね。(Jā, mata ne.) — Well, see you.', examplePt: 'じゃあ、またね。(Jā, mata ne.) — Então, até mais.' },
          { type: 'vocab', word: 'お元気で', article: null, english: 'take care / keep well — o-genki de', portuguese: 'se cuide / fique bem — o-genki de', example: 'どうぞ お元気で。(Dōzo o-genki de.) — Please take care.', examplePt: 'どうぞ お元気で。(Dōzo o-genki de.) — Por favor, se cuide.' },
          { type: 'vocab', word: '楽しかった', article: null, english: 'it was fun — tanoshikatta', portuguese: 'foi divertido — tanoshikatta', example: 'とても 楽しかったです。(Totemo tanoshikatta desu.) — It was so much fun.', examplePt: 'とても 楽しかったです。(Totemo tanoshikatta desu.) — Foi muito divertido.' },
          { type: 'vocab', word: '夕日', article: null, english: 'sunset / evening sun — yūhi', portuguese: 'pôr do sol / sol da tarde — yūhi', example: '夕日が きれいです。(Yūhi ga kirei desu.) — The sunset is beautiful.', examplePt: '夕日が きれいです。(Yūhi ga kirei desu.) — O pôr do sol está lindo.' },
          { type: 'vocab', word: 'ありがとう', article: null, english: 'thank you — arigatō', portuguese: 'obrigado — arigatō', example: '日本、ありがとう！(Nihon, arigatō!) — Thank you, Japan!', examplePt: '日本、ありがとう！(Nihon, arigatō!) — Obrigado, Japão!' },
          { type: 'grammar', title: 'The farewell set', titlePt: 'O conjunto de despedidas', explanation: 'Sayōnara is a firm goodbye (you won’t meet soon). For casual partings use mata ne or jā ne (see you). Wish someone well with o-genki de (take care). Cap the trip with arigatō gozaimashita — “thank you (for everything that happened)”.', explanationPt: 'Sayōnara é um adeus definitivo (você não vai se encontrar tão cedo). Para despedidas casuais, use mata ne ou jā ne (até mais). Deseje o bem a alguém com o-genki de (se cuide). Encerre a viagem com arigatō gozaimashita — “obrigado (por tudo que aconteceu)”.', examples: ['じゃあ、またね！(Jā, mata ne!) — Well, see you!', 'お元気で。(O-genki de.) — Take care.'] },
          { type: 'exercise', subtype: 'multiple-choice', question: 'A casual "see you (again)" is:', questionPt: 'Um "até mais (de novo)" casual é:', options: ['mata ne', 'sumimasen', 'itadakimasu', 'ikura'], correct: 'mata ne' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Dōzo o-genki ___. (take care: ... de)', questionPt: 'Dōzo o-genki ___. (se cuide: ... de)', correct: 'de' },
        ],
      },
    ],
    places: [
      {
        id: 'oki-kokusai', name: 'Naha, Kokusai-dōri', icon: '\u{1F3D6}️',
        coords: [26.2150, 127.6792], wikiTitle: 'Kokusai-dōri',
        narrative: 'You land in warm, breezy Naha and walk Kokusai-dōri, “International Street” — shops, shisa lion statues, and a softer southern dialect on the air.',
        narrativePt: 'Você desembarca na Naha quente e ventilada e caminha pela Kokusai-dōri, a “Rua Internacional” — lojas, estátuas de leões shisa e um dialeto sulista mais suave no ar.',
        phrases: [
          { ja: 'いい 天気ですね。', romaji: 'Ii tenki desu ne.', en: 'Nice weather, isn’t it.', pt: 'Que tempo bom, não é.' },
          { ja: '今日は 暑いです。', romaji: 'Kyō wa atsui desu.', en: 'It’s hot today.', pt: 'Está quente hoje.' },
        ],
        lessonId: 'okinawa-1',
        quiz: {
          question: 'Okinawa was historically an independent kingdom called what?',
          questionPt: 'Historicamente, Okinawa era um reino independente chamado como?',
          options: ['The Ryukyu Kingdom', 'The Edo Shogunate', 'The Yamato State'],
          correct: 'The Ryukyu Kingdom',
          explanation: 'For centuries Okinawa was the Ryukyu Kingdom, with its own kings, trade and culture.',
          explanationPt: 'Durante séculos, Okinawa foi o Reino de Ryukyu, com seus próprios reis, comércio e cultura.',
        },
      },
      {
        id: 'oki-shuri', name: 'Shuri Castle', icon: '\u{1F3EF}',
        coords: [26.2170, 127.7195], wikiTitle: 'Shuri Castle',
        narrative: 'Shuri Castle, painted Chinese-red, was the royal seat of the Ryukyu kings — a blend of Japanese and Chinese styles found nowhere else in Japan.',
        narrativePt: 'O Castelo de Shuri, pintado de vermelho-chinês, foi a sede real dos reis de Ryukyu — uma mistura de estilos japonês e chinês que não se encontra em nenhum outro lugar do Japão.',
        phrases: [
          { ja: 'ここは 首里城です。', romaji: 'Koko wa Shuri-jō desu.', en: 'This is Shuri Castle.', pt: 'Este é o Castelo de Shuri.' },
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.', pt: 'É lindo, não é.' },
        ],
        quiz: {
          question: 'Shuri Castle’s style is a blend of Japanese and which other influence?',
          questionPt: 'O estilo do Castelo de Shuri é uma mistura do japonês com qual outra influência?',
          options: ['Chinese', 'Korean', 'Portuguese'],
          correct: 'Chinese',
          explanation: 'As capital of a kingdom trading with China, Shuri fused Chinese and Japanese architecture.',
          explanationPt: 'Como capital de um reino que comerciava com a China, Shuri fundiu as arquiteturas chinesa e japonesa.',
        },
      },
      {
        id: 'oki-churaumi', name: 'Churaumi Aquarium', icon: '\u{1F988}',
        coords: [26.6944, 127.8779], wikiTitle: 'Okinawa Churaumi Aquarium',
        narrative: 'At Churaumi Aquarium you stand before a colossal tank where whale sharks glide overhead — the gentle giants of Okinawa’s seas.',
        narrativePt: 'No Aquário de Churaumi, você fica diante de um tanque colossal onde tubarões-baleia deslizam acima de você — os gigantes gentis dos mares de Okinawa.',
        phrases: [
          { ja: '大きいですね！', romaji: 'Ōkii desu ne!', en: 'It’s huge, isn’t it!', pt: 'É enorme, não é!' },
          { ja: 'すごいです！', romaji: 'Sugoi desu!', en: 'Amazing!', pt: 'Incrível!' },
        ],
        quiz: {
          question: 'Churaumi Aquarium’s giant tank is famous for which animal?',
          questionPt: 'O tanque gigante do Aquário de Churaumi é famoso por qual animal?',
          options: ['Whale sharks', 'Penguins', 'Polar bears'],
          correct: 'Whale sharks',
          explanation: 'Its huge “Kuroshio Sea” tank holds whale sharks, the largest fish in the world.',
          explanationPt: 'Seu enorme tanque “Mar de Kuroshio” abriga tubarões-baleia, os maiores peixes do mundo.',
        },
      },
      {
        id: 'oki-beach', name: 'Coral beaches', icon: '\u{1FAB8}',
        coords: [26.6950, 127.8780], wikiTitle: 'Coral reef',
        narrative: 'You snorkel over coral gardens in water so clear it disappears, bright fish darting below — the warm heart of the subtropical islands.',
        narrativePt: 'Você mergulha de snorkel sobre jardins de coral em uma água tão clara que parece sumir, peixes coloridos passando velozes por baixo — o coração quente das ilhas subtropicais.',
        phrases: [
          { ja: '海は 青いです。', romaji: 'Umi wa aoi desu.', en: 'The sea is blue.', pt: 'O mar está azul.' },
          { ja: 'きれいですね。', romaji: 'Kirei desu ne.', en: 'It’s beautiful, isn’t it.', pt: 'É lindo, não é.' },
        ],
        quiz: {
          question: 'Okinawa’s seas are known for what underwater feature?',
          questionPt: 'Os mares de Okinawa são conhecidos por qual característica submarina?',
          options: ['Coral reefs', 'Icebergs', 'Kelp forests'],
          correct: 'Coral reefs',
          explanation: 'The subtropical waters host rich coral reefs, a haven for divers and snorkellers.',
          explanationPt: 'As águas subtropicais abrigam ricos recifes de coral, um refúgio para mergulhadores e praticantes de snorkel.',
        },
      },
      {
        id: 'oki-sunset', name: 'Farewell sunset', icon: '\u{1F305}',
        coords: [26.2178, 127.6675], wikiTitle: 'Naminoue Shrine',
        narrative: 'On a cliff above the sea you watch the sun sink into the Pacific. The journey ends here, at Japan’s southern edge — arigatō, and sayōnara.',
        narrativePt: 'Em um penhasco sobre o mar, você observa o sol mergulhar no Pacífico. A jornada termina aqui, no extremo sul do Japão — arigatō e sayōnara.',
        phrases: [
          { ja: '夕日が きれいです。', romaji: 'Yūhi ga kirei desu.', en: 'The sunset is beautiful.', pt: 'O pôr do sol está lindo.' },
          { ja: 'とても 楽しかったです。', romaji: 'Totemo tanoshikatta desu.', en: 'It was so much fun.', pt: 'Foi muito divertido.' },
          { ja: 'さようなら、日本！', romaji: 'Sayōnara, Nihon!', en: 'Goodbye, Japan!', pt: 'Adeus, Japão!' },
        ],
        lessonId: 'okinawa-2',
        quiz: {
          question: 'Okinawa is Japan’s southernmost what?',
          questionPt: 'Okinawa é o quê mais ao sul do Japão?',
          options: ['Prefecture', 'Mountain', 'Capital'],
          correct: 'Prefecture',
          explanation: 'Okinawa Prefecture, a chain of subtropical islands, is the southernmost part of Japan.',
          explanationPt: 'A Província de Okinawa, uma cadeia de ilhas subtropicais, é a parte mais ao sul do Japão.',
        },
      },
    ],
  },

];

export default cities;
