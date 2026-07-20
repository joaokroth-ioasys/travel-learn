// China journey content (A1 Mandarin Chinese). Same shape as the ja/fr/es packs:
// an array of cities, each with .lessons and an immersive .places[] route.
// PassportTab also reads these cities (id/name/icon/lessons) for the passport.
//
// China-specific notes:
//   • article is null on every vocab step, Chinese has no articles, so the
//     gender badge in LessonView never shows.
//   • vocab `word` holds the Chinese characters; the pinyin reading rides along
//     in `english` and `example` so an A1 learner can still read everything.
//   • route phrases use { zh, pinyin, en }. RouteJourney renders zh as the native
//     line and pinyin underneath (same slot as Japanese romaji).
//
// Descriptions stay in English (an A1 learner doesn't read ZH prose yet);
// descriptionEn mirrors them so the CityPage toggle is harmless. Readings use
// parentheses, e.g. "hello (nǐ hǎo)", per the no-em-dash house style.

const cities = [
  {
    id: 'beijing',
    name: 'Beijing',
    tagline: '你好，北京！(Nǐ hǎo, Běijīng!)',
    theme: 'Greetings & the basics',
    accentColor: '#DE2910',
    icon: '\u{1F3EF}',
    description:
      'The journey begins in the capital, where imperial history meets a modern ' +
      'megacity. Between the Great Wall snaking over the hills and the vast courtyards ' +
      'of the Forbidden City, the traveller learns the first words every visitor needs: ' +
      'how to say hello, thank you, and goodbye, and how to turn a sentence into a question.',
    descriptionEn:
      'The journey begins in the capital, where imperial history meets a modern ' +
      'megacity. Between the Great Wall snaking over the hills and the vast courtyards ' +
      'of the Forbidden City, the traveller learns the first words every visitor needs: ' +
      'how to say hello, thank you, and goodbye, and how to turn a sentence into a question.',
    vocabTopics: ['Greetings', 'Please & thank you', 'Yes / no questions'],
    grammarTopic: 'Yes/no questions with 吗 (ma)',
    lessons: [
      {
        id: 'beijing-1',
        title: 'First words',
        description: 'Hello, thank you, goodbye, and asking a simple question.',
        steps: [
          { type: 'vocab', word: '你好', article: null, english: 'hello (nǐ hǎo)', example: '你好！(Nǐ hǎo!) Hello!' },
          { type: 'vocab', word: '谢谢', article: null, english: 'thank you (xièxie)', example: '谢谢你。(Xièxie nǐ.) Thank you.' },
          { type: 'vocab', word: '再见', article: null, english: 'goodbye (zàijiàn)', example: '再见！(Zàijiàn!) Goodbye!' },
          { type: 'vocab', word: '请', article: null, english: 'please (qǐng)', example: '请喝茶。(Qǐng hē chá.) Please drink tea.' },
          { type: 'vocab', word: '是', article: null, english: 'to be / yes (shì)', example: '我是学生。(Wǒ shì xuésheng.) I am a student.' },
          {
            type: 'grammar',
            title: 'Yes/no questions with 吗 (ma)',
            explanation: 'To turn any statement into a yes/no question, add 吗 (ma) to the end. The word order does not change.',
            examples: [
              '你好吗？(Nǐ hǎo ma?) How are you?',
              '你是学生吗？(Nǐ shì xuésheng ma?) Are you a student?',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'How do you say "thank you"?', options: ['你好', '谢谢', '再见'], correct: '谢谢' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete the question "Are you well?": 你好___？', correct: '吗' },
        ],
      },
    ],
    places: [
      {
        id: 'beijing-greatwall',
        name: 'The Great Wall',
        icon: '🧱',
        coords: [40.356, 116.008],
        wikiTitle: 'Great Wall of China',
        narrative:
          'Climbing the stone ramparts at Badaling, the wall runs to the horizon in both ' +
          'directions. This is where most travellers say their first Chinese words to a fellow hiker.',
        phrases: [
          { zh: '你好！', pinyin: 'Nǐ hǎo!', en: 'Hello!' },
          { zh: '长城很长。', pinyin: 'Chángchéng hěn cháng.', en: 'The Great Wall is very long.' },
          { zh: '谢谢！', pinyin: 'Xièxie!', en: 'Thank you!' },
        ],
        lessonId: 'beijing-1',
        quiz: {
          question: 'What does 长城 (Chángchéng) mean?',
          options: ['Great Wall', 'Forbidden City', 'Temple'],
          correct: 'Great Wall',
          explanation: '长 (cháng) means "long" and 城 (chéng) means "wall/city", so 长城 is the "Long Wall", the Great Wall.',
        },
      },
      {
        id: 'beijing-forbiddencity',
        name: 'Forbidden City',
        icon: '\u{1F3EF}',
        coords: [39.9163, 116.3972],
        wikiTitle: 'Forbidden City',
        narrative:
          'Through the red gates lies the palace of the emperors, courtyard after courtyard ' +
          'of golden roofs. A guide greets the group and offers to show the way.',
        phrases: [
          { zh: '请进。', pinyin: 'Qǐng jìn.', en: 'Please come in.' },
          { zh: '这是故宫。', pinyin: 'Zhè shì Gùgōng.', en: 'This is the Forbidden City.' },
          { zh: '很漂亮！', pinyin: 'Hěn piàoliàng!', en: 'Very beautiful!' },
        ],
        lessonId: 'beijing-1',
        quiz: {
          question: 'What does 请进 (qǐng jìn) mean?',
          options: ['Please come in', 'Thank you', 'Goodbye'],
          correct: 'Please come in',
          explanation: '请 (qǐng) is "please" and 进 (jìn) is "to enter", so 请进 is a polite "please come in".',
        },
      },
      {
        id: 'beijing-tiananmen',
        name: 'Tiananmen Square',
        icon: '🚩',
        coords: [39.9055, 116.3976],
        wikiTitle: 'Tiananmen Square',
        narrative:
          'The huge open square at the heart of the city, framed by flags and monuments. ' +
          'A good place to practise a simple question with a passer-by.',
        phrases: [
          { zh: '你好吗？', pinyin: 'Nǐ hǎo ma?', en: 'How are you?' },
          { zh: '我很好。', pinyin: 'Wǒ hěn hǎo.', en: 'I am very well.' },
          { zh: '你呢？', pinyin: 'Nǐ ne?', en: 'And you?' },
        ],
        lessonId: 'beijing-1',
        quiz: {
          question: 'Which word turns 你好 into the question "How are you?"',
          options: ['吗 (ma)', '是 (shì)', '请 (qǐng)'],
          correct: '吗 (ma)',
          explanation: 'Adding 吗 (ma) to the end of a statement makes it a yes/no question: 你好吗？',
        },
      },
      {
        id: 'beijing-templeofheaven',
        name: 'Temple of Heaven',
        icon: '🛕',
        coords: [39.8822, 116.4066],
        wikiTitle: 'Temple of Heaven',
        narrative:
          'In the park around the round blue-tiled temple, locals practise tai chi at dawn. ' +
          'The traveller says goodbye to Beijing before boarding the train west.',
        phrases: [
          { zh: '再见，北京！', pinyin: 'Zàijiàn, Běijīng!', en: 'Goodbye, Beijing!' },
          { zh: '这是天坛。', pinyin: 'Zhè shì Tiāntán.', en: 'This is the Temple of Heaven.' },
          { zh: '谢谢你。', pinyin: 'Xièxie nǐ.', en: 'Thank you.' },
        ],
        lessonId: 'beijing-1',
        quiz: {
          question: 'What does 再见 (zàijiàn) mean?',
          options: ['Goodbye', 'Hello', 'Please'],
          correct: 'Goodbye',
          explanation: '再 (zài) means "again" and 见 (jiàn) means "to see", so 再见 literally means "see you again".',
        },
      },
    ],
  },

  {
    id: 'xian',
    name: "Xi'an",
    tagline: '西安，古城 (Xī’ān, gǔchéng)',
    theme: 'Numbers & history',
    accentColor: '#B8860B',
    icon: '\u{1F3FA}',
    description:
      'Once the eastern end of the Silk Road, Xi’an is where the traveller meets the ' +
      'Terracotta Army and walks the ancient city wall. Surrounded by thousands of clay ' +
      'soldiers, this is the perfect place to learn to count and to talk about how many.',
    descriptionEn:
      'Once the eastern end of the Silk Road, Xi’an is where the traveller meets the ' +
      'Terracotta Army and walks the ancient city wall. Surrounded by thousands of clay ' +
      'soldiers, this is the perfect place to learn to count and to talk about how many.',
    vocabTopics: ['Numbers 1-10', 'How many (几 / 多少)', 'Measure word 个'],
    grammarTopic: 'Counting with measure words: number + 个 + noun',
    lessons: [
      {
        id: 'xian-1',
        title: 'Counting',
        description: 'Numbers one to ten and asking how many.',
        steps: [
          { type: 'vocab', word: '一', article: null, english: 'one (yī)', example: '一个人。(Yí ge rén.) One person.' },
          { type: 'vocab', word: '二', article: null, english: 'two (èr)', example: '二号。(Èr hào.) Number two.' },
          { type: 'vocab', word: '三', article: null, english: 'three (sān)', example: '三个茶。(Sān ge chá.) Three teas.' },
          { type: 'vocab', word: '十', article: null, english: 'ten (shí)', example: '十个兵马俑。(Shí ge bīngmǎyǒng.) Ten terracotta warriors.' },
          { type: 'vocab', word: '多少', article: null, english: 'how many / how much (duōshao)', example: '多少钱？(Duōshao qián?) How much money?' },
          {
            type: 'grammar',
            title: 'Measure word 个 (ge)',
            explanation: 'Chinese counts nouns with a measure word between the number and the noun. 个 (ge) is the general, all-purpose one: number + 个 + noun.',
            examples: [
              '一个人 (yí ge rén) one person',
              '三个学生 (sān ge xuésheng) three students',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which number is 三 (sān)?', options: ['one', 'three', 'ten'], correct: 'three' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Fill the measure word: 两___茶 (two teas)', correct: '个' },
        ],
      },
    ],
    places: [
      {
        id: 'xian-terracotta',
        name: 'Terracotta Army',
        icon: '🗿',
        coords: [34.3853, 109.2785],
        wikiTitle: 'Terracotta Army',
        narrative:
          'Row upon row of life-size clay soldiers stand in the excavation pits, each with a ' +
          'different face. A guide explains just how many there are.',
        phrases: [
          { zh: '这里有很多兵马俑。', pinyin: 'Zhèlǐ yǒu hěn duō bīngmǎyǒng.', en: 'There are many terracotta warriors here.' },
          { zh: '有多少个？', pinyin: 'Yǒu duōshao ge?', en: 'How many are there?' },
          { zh: '太厉害了！', pinyin: 'Tài lìhai le!', en: 'So impressive!' },
        ],
        lessonId: 'xian-1',
        quiz: {
          question: 'What does 多少 (duōshao) mean?',
          options: ['How many / how much', 'Very good', 'Goodbye'],
          correct: 'How many / how much',
          explanation: '多少 (duōshao) asks about quantity, "how many" or "how much".',
        },
      },
      {
        id: 'xian-citywall',
        name: 'City Wall',
        icon: '🧱',
        coords: [34.2612, 108.9398],
        wikiTitle: "Fortifications of Xi'an",
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/City_wall_of_Xi%27an_51550-Xian_%2827959363326%29.jpg',
        narrative:
          'The traveller rents a bike and rides the full loop atop the 600-year-old wall, ' +
          'one of the best preserved in China.',
        phrases: [
          { zh: '我要一辆自行车。', pinyin: 'Wǒ yào yí liàng zìxíngchē.', en: 'I want one bicycle.' },
          { zh: '城墙很老。', pinyin: 'Chéngqiáng hěn lǎo.', en: 'The city wall is very old.' },
          { zh: '多少钱？', pinyin: 'Duōshao qián?', en: 'How much money?' },
        ],
        lessonId: 'xian-1',
        quiz: {
          question: 'What does 多少钱 (duōshao qián) ask?',
          options: ['How much money?', 'What time?', 'Where is it?'],
          correct: 'How much money?',
          explanation: '钱 (qián) means "money", so 多少钱 is the everyday way to ask a price.',
        },
      },
      {
        id: 'xian-muslimquarter',
        name: 'Muslim Quarter',
        icon: '🍢',
        coords: [34.2667, 108.9400],
        wikiTitle: "Muslim Quarter, Xi'an",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/1_xian_muslim_quarter_china_2011.JPG/1280px-1_xian_muslim_quarter_china_2011.JPG',
        narrative:
          'Lantern-lit lanes packed with food stalls: hand-pulled noodles, roujiamo, and ' +
          'skewers sizzling over coals. Time to count out an order.',
        phrases: [
          { zh: '我要两个。', pinyin: 'Wǒ yào liǎng ge.', en: 'I want two.' },
          { zh: '这个多少钱？', pinyin: 'Zhège duōshao qián?', en: 'How much is this one?' },
          { zh: '很好吃！', pinyin: 'Hěn hǎochī!', en: 'Very tasty!' },
        ],
        lessonId: 'xian-1',
        quiz: {
          question: 'Chinese uses 两 (liǎng) instead of 二 (èr) for "two" when...',
          options: ['counting things with a measure word', 'saying a phone number', 'never'],
          correct: 'counting things with a measure word',
          explanation: 'Before a measure word, "two" is 两 (liǎng), e.g. 两个 (liǎng ge), not 二个.',
        },
      },
      {
        id: 'xian-belltower',
        name: 'Bell Tower',
        icon: '🔔',
        coords: [34.2610, 108.9530],
        wikiTitle: "Bell Tower of Xi'an",
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Xi%27an_Bell_Tower_2024.10.jpg',
        narrative:
          'The great wooden Bell Tower marks the exact centre of the old city, glowing gold ' +
          'at night above the traffic circle.',
        phrases: [
          { zh: '这是钟楼。', pinyin: 'Zhè shì Zhōnglóu.', en: 'This is the Bell Tower.' },
          { zh: '很漂亮！', pinyin: 'Hěn piàoliàng!', en: 'Very beautiful!' },
          { zh: '再见，西安！', pinyin: 'Zàijiàn, Xī’ān!', en: "Goodbye, Xi'an!" },
        ],
        lessonId: 'xian-1',
        quiz: {
          question: 'What does 这 (zhè) mean?',
          options: ['this', 'that', 'here'],
          correct: 'this',
          explanation: '这 (zhè) means "this"; its opposite is 那 (nà), "that".',
        },
      },
    ],
  },

  {
    id: 'chengdu',
    name: 'Chengdu',
    tagline: '熊猫的家 (Xióngmāo de jiā)',
    theme: 'Food & animals',
    accentColor: '#2E7D32',
    icon: '\u{1F43C}',
    description:
      'Laid-back capital of Sichuan, famous for giant pandas and mouth-numbing spicy food. ' +
      'The traveller meets pandas at the breeding base and dives into a bubbling hotpot, ' +
      'learning the words for animals, food, and saying what they like.',
    descriptionEn:
      'Laid-back capital of Sichuan, famous for giant pandas and mouth-numbing spicy food. ' +
      'The traveller meets pandas at the breeding base and dives into a bubbling hotpot, ' +
      'learning the words for animals, food, and saying what they like.',
    vocabTopics: ['Animals', 'Food & flavours', 'Likes with 喜欢'],
    grammarTopic: 'Expressing likes: 我喜欢 + noun/verb',
    lessons: [
      {
        id: 'chengdu-1',
        title: 'Pandas & hotpot',
        description: 'Animals, food, and saying what you like.',
        steps: [
          { type: 'vocab', word: '熊猫', article: null, english: 'panda (xióngmāo)', example: '熊猫很可爱。(Xióngmāo hěn kě’ài.) Pandas are very cute.' },
          { type: 'vocab', word: '吃', article: null, english: 'to eat (chī)', example: '我想吃火锅。(Wǒ xiǎng chī huǒguō.) I want to eat hotpot.' },
          { type: 'vocab', word: '辣', article: null, english: 'spicy (là)', example: '这个很辣。(Zhège hěn là.) This is very spicy.' },
          { type: 'vocab', word: '喜欢', article: null, english: 'to like (xǐhuan)', example: '我喜欢熊猫。(Wǒ xǐhuan xióngmāo.) I like pandas.' },
          { type: 'vocab', word: '茶', article: null, english: 'tea (chá)', example: '我喝茶。(Wǒ hē chá.) I drink tea.' },
          {
            type: 'grammar',
            title: 'Saying what you like: 喜欢 (xǐhuan)',
            explanation: 'Use 我喜欢 (wǒ xǐhuan, "I like") followed by a noun or a verb phrase. Negate it with 不: 我不喜欢 (wǒ bù xǐhuan, "I do not like").',
            examples: [
              '我喜欢茶。(Wǒ xǐhuan chá.) I like tea.',
              '我不喜欢辣。(Wǒ bù xǐhuan là.) I do not like spicy food.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "panda"?', options: ['熊猫', '火锅', '喜欢'], correct: '熊猫' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "I like tea": 我___茶。', correct: '喜欢' },
        ],
      },
    ],
    places: [
      {
        id: 'chengdu-pandabase',
        name: 'Panda Base',
        icon: '\u{1F43C}',
        coords: [30.7333, 104.1500],
        wikiTitle: 'Chengdu Research Base of Giant Panda Breeding',
        narrative:
          'In the misty bamboo groves of the research base, giant pandas munch, tumble, and ' +
          'nap. Cubs roll in a nursery yard while visitors coo from the walkways.',
        phrases: [
          { zh: '熊猫很可爱！', pinyin: 'Xióngmāo hěn kě’ài!', en: 'The pandas are so cute!' },
          { zh: '我喜欢熊猫。', pinyin: 'Wǒ xǐhuan xióngmāo.', en: 'I like pandas.' },
          { zh: '它在吃竹子。', pinyin: 'Tā zài chī zhúzi.', en: 'It is eating bamboo.' },
        ],
        lessonId: 'chengdu-1',
        quiz: {
          question: 'What does 我喜欢 (wǒ xǐhuan) mean?',
          options: ['I like', 'I want', 'I have'],
          correct: 'I like',
          explanation: '我 (wǒ) is "I" and 喜欢 (xǐhuan) is "to like", so 我喜欢 means "I like".',
        },
      },
      {
        id: 'chengdu-jinli',
        name: 'Jinli Street',
        icon: '🏮',
        coords: [30.6467, 104.0486],
        wikiTitle: 'Jinli',
        narrative:
          'A restored ancient street strung with red lanterns, crammed with snack stalls, ' +
          'tea houses, and craft shops. A great spot to try a little of everything.',
        phrases: [
          { zh: '我想吃这个。', pinyin: 'Wǒ xiǎng chī zhège.', en: 'I want to eat this.' },
          { zh: '好吃吗？', pinyin: 'Hǎochī ma?', en: 'Is it tasty?' },
          { zh: '很好吃！', pinyin: 'Hěn hǎochī!', en: 'Very tasty!' },
        ],
        lessonId: 'chengdu-1',
        quiz: {
          question: 'What does 好吃 (hǎochī) mean?',
          options: ['Tasty', 'Expensive', 'Big'],
          correct: 'Tasty',
          explanation: '好 (hǎo) means "good" and 吃 (chī) means "to eat", so 好吃 literally means "good to eat", tasty.',
        },
      },
      {
        id: 'chengdu-hotpot',
        name: 'Sichuan Hotpot',
        icon: '🌶️',
        coords: [30.5728, 104.0668],
        wikiTitle: 'Sichuan cuisine',
        narrative:
          'A red, oil-slicked broth bubbles in the middle of the table, loaded with chilli ' +
          'and numbing peppercorns. The traveller learns fast how to say "not too spicy".',
        phrases: [
          { zh: '太辣了！', pinyin: 'Tài là le!', en: 'Too spicy!' },
          { zh: '不要太辣。', pinyin: 'Bú yào tài là.', en: 'Not too spicy, please.' },
          { zh: '我要一杯水。', pinyin: 'Wǒ yào yì bēi shuǐ.', en: 'I want a glass of water.' },
        ],
        lessonId: 'chengdu-1',
        quiz: {
          question: 'What does 辣 (là) mean?',
          options: ['Spicy', 'Sweet', 'Cold'],
          correct: 'Spicy',
          explanation: '辣 (là) means "spicy", the signature flavour of Sichuan cooking.',
        },
      },
      {
        id: 'chengdu-wuhou',
        name: 'Wuhou Shrine',
        icon: '🛕',
        coords: [30.6464, 104.0483],
        wikiTitle: 'Wuhou District',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Chengdu_Wuhou_ci.jpg/1280px-Chengdu_Wuhou_ci.jpg',
        narrative:
          'A tranquil temple and garden honouring the heroes of the Three Kingdoms, shaded ' +
          'by old cypress trees, a calm end to a spicy day.',
        phrases: [
          { zh: '这里很安静。', pinyin: 'Zhèlǐ hěn ānjìng.', en: 'It is very quiet here.' },
          { zh: '我喜欢这里。', pinyin: 'Wǒ xǐhuan zhèlǐ.', en: 'I like it here.' },
          { zh: '再见，成都！', pinyin: 'Zàijiàn, Chéngdū!', en: 'Goodbye, Chengdu!' },
        ],
        lessonId: 'chengdu-1',
        quiz: {
          question: 'How do you say "I do not like" in Chinese?',
          options: ['我不喜欢', '我喜欢', '我想'],
          correct: '我不喜欢',
          explanation: 'Put 不 (bù, "not") before the verb: 我不喜欢 (wǒ bù xǐhuan), "I do not like".',
        },
      },
    ],
  },

  {
    id: 'shanghai',
    name: 'Shanghai',
    tagline: '东方明珠 (Dōngfāng Míngzhū)',
    theme: 'The city & getting around',
    accentColor: '#0277BD',
    icon: '\u{1F306}',
    description:
      'China’s dazzling financial hub, where colonial-era waterfront buildings face a ' +
      'skyline of futuristic towers across the river. The traveller rides the metro, admires ' +
      'the Bund at night, and learns to ask where things are and how to get around.',
    descriptionEn:
      'China’s dazzling financial hub, where colonial-era waterfront buildings face a ' +
      'skyline of futuristic towers across the river. The traveller rides the metro, admires ' +
      'the Bund at night, and learns to ask where things are and how to get around.',
    vocabTopics: ['Places in the city', 'Asking where (在哪儿)', 'Transport'],
    grammarTopic: 'Location questions with 在哪儿 (zài nǎr)',
    lessons: [
      {
        id: 'shanghai-1',
        title: 'Getting around',
        description: 'Places, transport, and asking where something is.',
        steps: [
          { type: 'vocab', word: '在', article: null, english: 'to be at / in (zài)', example: '我在上海。(Wǒ zài Shànghǎi.) I am in Shanghai.' },
          { type: 'vocab', word: '哪儿', article: null, english: 'where (nǎr)', example: '地铁站在哪儿？(Dìtiězhàn zài nǎr?) Where is the metro station?' },
          { type: 'vocab', word: '地铁', article: null, english: 'metro / subway (dìtiě)', example: '我坐地铁。(Wǒ zuò dìtiě.) I take the metro.' },
          { type: 'vocab', word: '这里', article: null, english: 'here (zhèlǐ)', example: '外滩在这里。(Wàitān zài zhèlǐ.) The Bund is here.' },
          { type: 'vocab', word: '那里', article: null, english: 'there (nàlǐ)', example: '厕所在那里。(Cèsuǒ zài nàlǐ.) The toilet is over there.' },
          {
            type: 'grammar',
            title: 'Asking where: 在哪儿 (zài nǎr)',
            explanation: 'To ask where something is, use: [thing] + 在哪儿？The answer replaces 哪儿 with a location: [thing] + 在 + [place].',
            examples: [
              '地铁站在哪儿？(Dìtiězhàn zài nǎr?) Where is the metro station?',
              '在那里。(Zài nàlǐ.) It is over there.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "where"?', options: ['哪儿', '这里', '地铁'], correct: '哪儿' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "Where is the metro?": 地铁___哪儿？', correct: '在' },
        ],
      },
    ],
    places: [
      {
        id: 'shanghai-bund',
        name: 'The Bund',
        icon: '🌃',
        coords: [31.2397, 121.4900],
        wikiTitle: 'The Bund',
        narrative:
          'On the riverside promenade, historic stone facades line the water while the neon ' +
          'towers of Pudong blaze across the river. The city’s most famous view.',
        phrases: [
          { zh: '外滩在哪儿？', pinyin: 'Wàitān zài nǎr?', en: 'Where is the Bund?' },
          { zh: '在这里！', pinyin: 'Zài zhèlǐ!', en: 'It is here!' },
          { zh: '夜景很美。', pinyin: 'Yèjǐng hěn měi.', en: 'The night view is beautiful.' },
        ],
        lessonId: 'shanghai-1',
        quiz: {
          question: 'What does 在哪儿 (zài nǎr) mean?',
          options: ['Where is it?', 'How much?', 'What time?'],
          correct: 'Where is it?',
          explanation: '在 (zài) is "to be at" and 哪儿 (nǎr) is "where", so 在哪儿 asks "where is it?".',
        },
      },
      {
        id: 'shanghai-yugarden',
        name: 'Yu Garden',
        icon: '\u{1F3EF}',
        coords: [31.2270, 121.4920],
        wikiTitle: 'Yu Garden',
        narrative:
          'A classical Ming-dynasty garden of rockeries, ponds, and zigzag bridges, tucked ' +
          'inside the old town bazaar. A pocket of calm amid the crowds.',
        phrases: [
          { zh: '厕所在哪儿？', pinyin: 'Cèsuǒ zài nǎr?', en: 'Where is the toilet?' },
          { zh: '在那里。', pinyin: 'Zài nàlǐ.', en: 'It is over there.' },
          { zh: '谢谢！', pinyin: 'Xièxie!', en: 'Thank you!' },
        ],
        lessonId: 'shanghai-1',
        quiz: {
          question: 'What does 那里 (nàlǐ) mean?',
          options: ['There', 'Here', 'Where'],
          correct: 'There',
          explanation: '那里 (nàlǐ) means "there"; 这里 (zhèlǐ) means "here".',
        },
      },
      {
        id: 'shanghai-nanjingroad',
        name: 'Nanjing Road',
        icon: '🛍️',
        coords: [31.2354, 121.4737],
        wikiTitle: 'Nanjing Road',
        narrative:
          'China’s busiest shopping street, a river of people flowing past glowing ' +
          'storefronts. The traveller hops off the metro right into the crowd.',
        phrases: [
          { zh: '我坐地铁。', pinyin: 'Wǒ zuò dìtiě.', en: 'I take the metro.' },
          { zh: '地铁站在哪儿？', pinyin: 'Dìtiězhàn zài nǎr?', en: 'Where is the metro station?' },
          { zh: '一直走。', pinyin: 'Yìzhí zǒu.', en: 'Go straight ahead.' },
        ],
        lessonId: 'shanghai-1',
        quiz: {
          question: 'What does 地铁 (dìtiě) mean?',
          options: ['Metro / subway', 'Taxi', 'Airport'],
          correct: 'Metro / subway',
          explanation: '地铁 (dìtiě) is the underground metro, the fastest way around Shanghai.',
        },
      },
      {
        id: 'shanghai-pearl',
        name: 'Oriental Pearl Tower',
        icon: '🗼',
        coords: [31.2397, 121.4998],
        wikiTitle: 'Oriental Pearl Tower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Shanghai-Skyline-52-Flusspanorama_mit_Oriental_Pearl_Tower-2012-gje.jpg/1920px-Shanghai-Skyline-52-Flusspanorama_mit_Oriental_Pearl_Tower-2012-gje.jpg',
        narrative:
          'The pink-orbed TV tower that defines the Pudong skyline. From the glass sky-deck, ' +
          'the whole city unrolls beneath the traveller’s feet.',
        phrases: [
          { zh: '这是东方明珠。', pinyin: 'Zhè shì Dōngfāng Míngzhū.', en: 'This is the Oriental Pearl.' },
          { zh: '很高！', pinyin: 'Hěn gāo!', en: 'Very tall!' },
          { zh: '再见，上海！', pinyin: 'Zàijiàn, Shànghǎi!', en: 'Goodbye, Shanghai!' },
        ],
        lessonId: 'shanghai-1',
        quiz: {
          question: 'What does 很高 (hěn gāo) mean?',
          options: ['Very tall', 'Very cheap', 'Very fast'],
          correct: 'Very tall',
          explanation: '高 (gāo) means "tall/high", and 很 (hěn) means "very".',
        },
      },
    ],
  },

  {
    id: 'hangzhou',
    name: 'Hangzhou',
    tagline: '上有天堂，下有苏杭 (Shàng yǒu tiāntáng, xià yǒu Sū-Háng)',
    theme: 'Nature & tea',
    accentColor: '#00897B',
    icon: '\u{1F375}',
    description:
      'A short hop from Shanghai, Hangzhou is famous for the serene West Lake and the green ' +
      'tea grown on its surrounding hills. The traveller strolls the causeways, visits a ' +
      'tea village, and learns to order a drink and describe the scenery.',
    descriptionEn:
      'A short hop from Shanghai, Hangzhou is famous for the serene West Lake and the green ' +
      'tea grown on its surrounding hills. The traveller strolls the causeways, visits a ' +
      'tea village, and learns to order a drink and describe the scenery.',
    vocabTopics: ['Nature & scenery', 'Drinks & tea', 'Ordering with 要'],
    grammarTopic: 'Ordering with 我要 (wǒ yào) + noun',
    lessons: [
      {
        id: 'hangzhou-1',
        title: 'Tea by the lake',
        description: 'Nature words, drinks, and ordering what you want.',
        steps: [
          { type: 'vocab', word: '茶', article: null, english: 'tea (chá)', example: '我要一杯绿茶。(Wǒ yào yì bēi lǜchá.) I want a cup of green tea.' },
          { type: 'vocab', word: '湖', article: null, english: 'lake (hú)', example: '西湖很大。(Xīhú hěn dà.) West Lake is very big.' },
          { type: 'vocab', word: '水', article: null, english: 'water (shuǐ)', example: '水很清。(Shuǐ hěn qīng.) The water is very clear.' },
          { type: 'vocab', word: '美', article: null, english: 'beautiful (měi)', example: '风景很美。(Fēngjǐng hěn měi.) The scenery is beautiful.' },
          { type: 'vocab', word: '要', article: null, english: 'to want (yào)', example: '我要茶。(Wǒ yào chá.) I want tea.' },
          {
            type: 'grammar',
            title: 'Ordering with 我要 (wǒ yào)',
            explanation: 'To order or request, use 我要 (wǒ yào, "I want") + the thing. Add a number and measure word for a quantity: 我要一杯茶 (a cup of tea).',
            examples: [
              '我要一杯绿茶。(Wǒ yào yì bēi lǜchá.) I want a cup of green tea.',
              '我要两个。(Wǒ yào liǎng ge.) I want two.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "lake"?', options: ['湖', '茶', '水'], correct: '湖' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "I want tea": 我___茶。', correct: '要' },
        ],
      },
    ],
    places: [
      {
        id: 'hangzhou-westlake',
        name: 'West Lake',
        icon: '🏞️',
        coords: [30.2416, 120.1490],
        wikiTitle: 'West Lake',
        narrative:
          'Willow-lined causeways, arched bridges, and mist drifting over the water: West ' +
          'Lake has inspired Chinese poets for a thousand years. A boat glides past a pagoda.',
        phrases: [
          { zh: '西湖很美。', pinyin: 'Xīhú hěn měi.', en: 'West Lake is beautiful.' },
          { zh: '风景很好。', pinyin: 'Fēngjǐng hěn hǎo.', en: 'The scenery is lovely.' },
          { zh: '我喜欢这里。', pinyin: 'Wǒ xǐhuan zhèlǐ.', en: 'I like it here.' },
        ],
        lessonId: 'hangzhou-1',
        quiz: {
          question: 'What does 美 (měi) mean?',
          options: ['Beautiful', 'Big', 'Old'],
          correct: 'Beautiful',
          explanation: '美 (měi) means "beautiful"; 很美 (hěn měi) is "very beautiful".',
        },
      },
      {
        id: 'hangzhou-lingyin',
        name: 'Lingyin Temple',
        icon: '🛕',
        coords: [30.2410, 120.1010],
        wikiTitle: 'Lingyin Temple',
        narrative:
          'One of China’s oldest Buddhist temples, set against a hillside carved with ' +
          'ancient stone Buddhas, incense smoke curling through the trees.',
        phrases: [
          { zh: '这是灵隐寺。', pinyin: 'Zhè shì Língyǐn Sì.', en: 'This is Lingyin Temple.' },
          { zh: '这里很安静。', pinyin: 'Zhèlǐ hěn ānjìng.', en: 'It is very quiet here.' },
          { zh: '很老。', pinyin: 'Hěn lǎo.', en: 'Very old.' },
        ],
        lessonId: 'hangzhou-1',
        quiz: {
          question: 'What does 安静 (ānjìng) mean?',
          options: ['Quiet', 'Busy', 'Cold'],
          correct: 'Quiet',
          explanation: '安静 (ānjìng) means "quiet/peaceful".',
        },
      },
      {
        id: 'hangzhou-longjing',
        name: 'Longjing Tea Village',
        icon: '\u{1F375}',
        coords: [30.2100, 120.1300],
        wikiTitle: 'Longjing tea',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Longjing_Tea_field%2C_Dragon_Well_area%2C_Meijiawu_China.jpg/1920px-Longjing_Tea_field%2C_Dragon_Well_area%2C_Meijiawu_China.jpg',
        narrative:
          'Terraced tea bushes climb the misty hills of Meijiawu. A farmer pours a glass of ' +
          'freshly pan-roasted Longjing, the famous "Dragon Well" green tea.',
        phrases: [
          { zh: '我要一杯茶。', pinyin: 'Wǒ yào yì bēi chá.', en: 'I want a cup of tea.' },
          { zh: '龙井茶很有名。', pinyin: 'Lóngjǐng chá hěn yǒumíng.', en: 'Longjing tea is very famous.' },
          { zh: '真好喝！', pinyin: 'Zhēn hǎohē!', en: 'Really delicious!' },
        ],
        lessonId: 'hangzhou-1',
        quiz: {
          question: 'What does 我要一杯茶 (wǒ yào yì bēi chá) mean?',
          options: ['I want a cup of tea', 'I like tea', 'Where is the tea?'],
          correct: 'I want a cup of tea',
          explanation: '我要 (wǒ yào) "I want" + 一杯 (yì bēi) "one cup" + 茶 (chá) "tea".',
        },
      },
      {
        id: 'hangzhou-leifeng',
        name: 'Leifeng Pagoda',
        icon: '🗼',
        coords: [30.2310, 120.1480],
        wikiTitle: 'Leifeng Pagoda',
        narrative:
          'Rebuilt on its lakeside hill, the pagoda glows at sunset and offers a sweeping ' +
          'view back over the whole of West Lake, the perfect farewell.',
        phrases: [
          { zh: '风景很美。', pinyin: 'Fēngjǐng hěn měi.', en: 'The scenery is beautiful.' },
          { zh: '我要拍照。', pinyin: 'Wǒ yào pāizhào.', en: 'I want to take a photo.' },
          { zh: '再见，杭州！', pinyin: 'Zàijiàn, Hángzhōu!', en: 'Goodbye, Hangzhou!' },
        ],
        lessonId: 'hangzhou-1',
        quiz: {
          question: 'What does 我要 (wǒ yào) express?',
          options: ['I want', 'I am', 'I like'],
          correct: 'I want',
          explanation: '我要 (wǒ yào) means "I want", used for requests and orders.',
        },
      },
    ],
  },

  {
    id: 'guilin',
    name: 'Guilin',
    tagline: '桂林山水甲天下 (Guìlín shānshuǐ jiǎ tiānxià)',
    theme: 'Directions & nature',
    accentColor: '#558B2F',
    icon: '🏞️',
    description:
      'Famous for its dreamlike karst mountains rising straight out of the rice paddies, ' +
      'Guilin is best seen from a bamboo raft on the Li River. The traveller cruises to ' +
      'Yangshuo and learns directions and the words for the landscape.',
    descriptionEn:
      'Famous for its dreamlike karst mountains rising straight out of the rice paddies, ' +
      'Guilin is best seen from a bamboo raft on the Li River. The traveller cruises to ' +
      'Yangshuo and learns directions and the words for the landscape.',
    vocabTopics: ['Mountains & rivers', 'Directions (left / right)', 'This / that'],
    grammarTopic: 'Directions: 往 (wǎng) + direction + 走 (zǒu)',
    lessons: [
      {
        id: 'guilin-1',
        title: 'Rivers & directions',
        description: 'Landscape words and how to give simple directions.',
        steps: [
          { type: 'vocab', word: '山', article: null, english: 'mountain (shān)', example: '山很高。(Shān hěn gāo.) The mountains are high.' },
          { type: 'vocab', word: '河', article: null, english: 'river (hé)', example: '漓江是一条河。(Líjiāng shì yì tiáo hé.) The Li River is a river.' },
          { type: 'vocab', word: '左', article: null, english: 'left (zuǒ)', example: '往左走。(Wǎng zuǒ zǒu.) Go left.' },
          { type: 'vocab', word: '右', article: null, english: 'right (yòu)', example: '往右走。(Wǎng yòu zǒu.) Go right.' },
          { type: 'vocab', word: '走', article: null, english: 'to walk / go (zǒu)', example: '一直走。(Yìzhí zǒu.) Go straight.' },
          {
            type: 'grammar',
            title: 'Giving directions: 往 ... 走',
            explanation: 'Use 往 (wǎng, "toward") + a direction + 走 (zǒu, "go"): 往左走 (turn/go left), 往右走 (go right), 一直走 (go straight).',
            examples: [
              '往左走。(Wǎng zuǒ zǒu.) Go left.',
              '一直走。(Yìzhí zǒu.) Go straight ahead.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "left"?', options: ['左', '右', '山'], correct: '左' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "go right": 往___走。', correct: '右' },
        ],
      },
    ],
    places: [
      {
        id: 'guilin-liriver',
        name: 'Li River Cruise',
        icon: '⛵',
        coords: [25.2000, 110.4000],
        wikiTitle: 'Li River',
        narrative:
          'Drifting downstream, jagged green peaks slide past on both banks, water buffalo ' +
          'wading in the shallows. This view is on the back of the 20-yuan note.',
        phrases: [
          { zh: '山很美。', pinyin: 'Shān hěn měi.', en: 'The mountains are beautiful.' },
          { zh: '这是漓江。', pinyin: 'Zhè shì Líjiāng.', en: 'This is the Li River.' },
          { zh: '我喜欢坐船。', pinyin: 'Wǒ xǐhuan zuò chuán.', en: 'I like taking the boat.' },
        ],
        lessonId: 'guilin-1',
        quiz: {
          question: 'What does 山 (shān) mean?',
          options: ['Mountain', 'River', 'Lake'],
          correct: 'Mountain',
          explanation: '山 (shān) means "mountain"; 河 (hé) means "river".',
        },
      },
      {
        id: 'guilin-reedflute',
        name: 'Reed Flute Cave',
        icon: '🕳️',
        coords: [25.3050, 110.2760],
        wikiTitle: 'Reed Flute Cave',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Reed_Flute_Cave_89130-Guilin_%2831110901268%29.jpg/1920px-Reed_Flute_Cave_89130-Guilin_%2831110901268%29.jpg',
        narrative:
          'A vast limestone cave lit in electric colours, its stalactites and columns ' +
          'reflected in still underground pools.',
        phrases: [
          { zh: '往左走。', pinyin: 'Wǎng zuǒ zǒu.', en: 'Go left.' },
          { zh: '洞里很大。', pinyin: 'Dòng lǐ hěn dà.', en: 'It is very big inside the cave.' },
          { zh: '小心！', pinyin: 'Xiǎoxīn!', en: 'Careful!' },
        ],
        lessonId: 'guilin-1',
        quiz: {
          question: 'What does 往左走 (wǎng zuǒ zǒu) mean?',
          options: ['Go left', 'Go right', 'Stop here'],
          correct: 'Go left',
          explanation: '往 (wǎng) "toward" + 左 (zuǒ) "left" + 走 (zǒu) "go" = "go left".',
        },
      },
      {
        id: 'guilin-elephanthill',
        name: 'Elephant Trunk Hill',
        icon: '🐘',
        coords: [25.2620, 110.2930],
        wikiTitle: 'Elephant Trunk Hill',
        narrative:
          'A rock formation that looks exactly like an elephant dipping its trunk into the ' +
          'river, the enduring symbol of Guilin.',
        phrases: [
          { zh: '像一只大象。', pinyin: 'Xiàng yì zhī dàxiàng.', en: 'It looks like an elephant.' },
          { zh: '在哪儿？', pinyin: 'Zài nǎr?', en: 'Where is it?' },
          { zh: '在右边。', pinyin: 'Zài yòubian.', en: 'It is on the right.' },
        ],
        lessonId: 'guilin-1',
        quiz: {
          question: 'What does 右 (yòu) mean?',
          options: ['Right', 'Left', 'Straight'],
          correct: 'Right',
          explanation: '右 (yòu) means "right"; 左 (zuǒ) means "left".',
        },
      },
      {
        id: 'guilin-yangshuo',
        name: 'Yangshuo',
        icon: '🚲',
        coords: [24.7784, 110.4960],
        wikiTitle: 'Yangshuo County',
        narrative:
          'A backpacker town ringed by peaks and rice fields, where the traveller cycles ' +
          'country lanes past farmers and buffalo before saying farewell.',
        phrases: [
          { zh: '一直走。', pinyin: 'Yìzhí zǒu.', en: 'Go straight ahead.' },
          { zh: '风景真美！', pinyin: 'Fēngjǐng zhēn měi!', en: 'The scenery is really beautiful!' },
          { zh: '再见，桂林！', pinyin: 'Zàijiàn, Guìlín!', en: 'Goodbye, Guilin!' },
        ],
        lessonId: 'guilin-1',
        quiz: {
          question: 'What does 一直走 (yìzhí zǒu) mean?',
          options: ['Go straight ahead', 'Turn left', 'Come back'],
          correct: 'Go straight ahead',
          explanation: '一直 (yìzhí) means "straight/continuously" and 走 (zǒu) is "go", so 一直走 is "go straight ahead".',
        },
      },
    ],
  },

  {
    id: 'guangzhou',
    name: 'Guangzhou',
    tagline: '食在广州 (Shí zài Guǎngzhōu)',
    theme: 'Shopping & money',
    accentColor: '#E65100',
    icon: '🏙️',
    description:
      'A sprawling southern trade hub and the home of Cantonese cuisine, Guangzhou has been ' +
      'a merchant city for centuries. The traveller shops the markets, sips tea over dim sum, ' +
      'and learns to talk about money, prices, and bargaining.',
    descriptionEn:
      'A sprawling southern trade hub and the home of Cantonese cuisine, Guangzhou has been ' +
      'a merchant city for centuries. The traveller shops the markets, sips tea over dim sum, ' +
      'and learns to talk about money, prices, and bargaining.',
    vocabTopics: ['Money & prices', 'Shopping', 'Too expensive / cheap'],
    grammarTopic: 'Prices and 太 ... 了 (tài ... le, "too ...")',
    lessons: [
      {
        id: 'guangzhou-1',
        title: 'Money talk',
        description: 'Prices, buying, and saying something is too expensive.',
        steps: [
          { type: 'vocab', word: '钱', article: null, english: 'money (qián)', example: '多少钱？(Duōshao qián?) How much money?' },
          { type: 'vocab', word: '块', article: null, english: 'yuan / kuai (kuài)', example: '十块。(Shí kuài.) Ten yuan.' },
          { type: 'vocab', word: '买', article: null, english: 'to buy (mǎi)', example: '我买这个。(Wǒ mǎi zhège.) I will buy this one.' },
          { type: 'vocab', word: '贵', article: null, english: 'expensive (guì)', example: '太贵了！(Tài guì le!) Too expensive!' },
          { type: 'vocab', word: '便宜', article: null, english: 'cheap (piányi)', example: '便宜一点。(Piányi yìdiǎn.) A little cheaper, please.' },
          {
            type: 'grammar',
            title: 'Saying "too ...": 太 ... 了',
            explanation: 'Wrap an adjective in 太 (tài) ... 了 (le) to say "too ...": 太贵了 (too expensive), 太辣了 (too spicy), 太好了 (great, "too good").',
            examples: [
              '太贵了！(Tài guì le!) Too expensive!',
              '太好了！(Tài hǎo le!) Great!',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "expensive"?', options: ['贵', '便宜', '买'], correct: '贵' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "too expensive": 太___了！', correct: '贵' },
        ],
      },
    ],
    places: [
      {
        id: 'guangzhou-cantontower',
        name: 'Canton Tower',
        icon: '🗼',
        coords: [23.1066, 113.3245],
        wikiTitle: 'Canton Tower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/GuangzhouSkyline2020.jpg/1920px-GuangzhouSkyline2020.jpg',
        narrative:
          'The slim, twisting tower glows through changing colours at night above the Pearl ' +
          'River, one of the tallest structures in the world.',
        phrases: [
          { zh: '这是广州塔。', pinyin: 'Zhè shì Guǎngzhōu Tǎ.', en: 'This is the Canton Tower.' },
          { zh: '票多少钱？', pinyin: 'Piào duōshao qián?', en: 'How much is a ticket?' },
          { zh: '很高！', pinyin: 'Hěn gāo!', en: 'Very tall!' },
        ],
        lessonId: 'guangzhou-1',
        quiz: {
          question: 'What does 多少钱 (duōshao qián) mean?',
          options: ['How much money?', 'Where is it?', 'What is this?'],
          correct: 'How much money?',
          explanation: '多少 (duōshao) "how much" + 钱 (qián) "money" = "how much does it cost?".',
        },
      },
      {
        id: 'guangzhou-shamian',
        name: 'Shamian Island',
        icon: '🏛️',
        coords: [23.1080, 113.2430],
        wikiTitle: 'Shamian Island',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Shamian_Island_03162-Guangzhou_%2832234637813%29.jpg/1920px-Shamian_Island_03162-Guangzhou_%2832234637813%29.jpg',
        narrative:
          'A leafy sandbank of European colonial villas and quiet tree-lined avenues, a ' +
          'peaceful contrast to the roaring city around it.',
        phrases: [
          { zh: '我想买明信片。', pinyin: 'Wǒ xiǎng mǎi míngxìnpiàn.', en: 'I want to buy a postcard.' },
          { zh: '多少钱？', pinyin: 'Duōshao qián?', en: 'How much?' },
          { zh: '便宜一点。', pinyin: 'Piányi yìdiǎn.', en: 'A little cheaper, please.' },
        ],
        lessonId: 'guangzhou-1',
        quiz: {
          question: 'What does 便宜 (piányi) mean?',
          options: ['Cheap', 'Expensive', 'Beautiful'],
          correct: 'Cheap',
          explanation: '便宜 (piányi) means "cheap/inexpensive"; its opposite is 贵 (guì), "expensive".',
        },
      },
      {
        id: 'guangzhou-chenclan',
        name: 'Chen Clan Ancestral Hall',
        icon: '\u{1F3EF}',
        coords: [23.1290, 113.2440],
        wikiTitle: 'Chen Clan Ancestral Hall',
        narrative:
          'A masterpiece of Cantonese craftsmanship: carved wood, stone, and ceramic figures ' +
          'crowd every roofline of this 19th-century academy, now a folk art museum.',
        phrases: [
          { zh: '我买这个。', pinyin: 'Wǒ mǎi zhège.', en: 'I will buy this one.' },
          { zh: '太贵了！', pinyin: 'Tài guì le!', en: 'Too expensive!' },
          { zh: '好，谢谢。', pinyin: 'Hǎo, xièxie.', en: 'Okay, thank you.' },
        ],
        lessonId: 'guangzhou-1',
        quiz: {
          question: 'What does 太贵了 (tài guì le) mean?',
          options: ['Too expensive', 'Very cheap', 'How much?'],
          correct: 'Too expensive',
          explanation: 'The pattern 太 ... 了 means "too ...", so 太贵了 is "too expensive!".',
        },
      },
      {
        id: 'guangzhou-dimsum',
        name: 'Dim Sum (Yum Cha)',
        icon: '🥟',
        coords: [23.1291, 113.2644],
        wikiTitle: 'Dim sum',
        narrative:
          'In a bustling tea house, carts rattle past stacked with bamboo steamers: shrimp ' +
          'dumplings, barbecue pork buns, and endless pots of tea. The heart of Cantonese life.',
        phrases: [
          { zh: '我要一笼虾饺。', pinyin: 'Wǒ yào yì lóng xiājiǎo.', en: 'I want a basket of shrimp dumplings.' },
          { zh: '很好吃！', pinyin: 'Hěn hǎochī!', en: 'Very tasty!' },
          { zh: '再见，广州！', pinyin: 'Zàijiàn, Guǎngzhōu!', en: 'Goodbye, Guangzhou!' },
        ],
        lessonId: 'guangzhou-1',
        quiz: {
          question: 'What does 买 (mǎi) mean?',
          options: ['To buy', 'To sell', 'To eat'],
          correct: 'To buy',
          explanation: '买 (mǎi) means "to buy". Be careful: 卖 (mài, falling tone) means "to sell".',
        },
      },
    ],
  },

  {
    id: 'hongkong',
    name: 'Hong Kong',
    tagline: '東方之珠 (Dōngfāng zhī zhū)',
    theme: 'The modern city & directions',
    accentColor: '#6A1B9A',
    icon: '\u{1F303}',
    description:
      'The final stop: a vertical city of skyscrapers, harbour views, and neon markets where ' +
      'East meets West. The traveller rides the tram up the Peak, crosses the harbour by ' +
      'ferry, and wraps up the journey with time, directions, and city life.',
    descriptionEn:
      'The final stop: a vertical city of skyscrapers, harbour views, and neon markets where ' +
      'East meets West. The traveller rides the tram up the Peak, crosses the harbour by ' +
      'ferry, and wraps up the journey with time, directions, and city life.',
    vocabTopics: ['Telling the time', 'Transport', 'Review greetings & directions'],
    grammarTopic: 'Telling the time: 点 (diǎn) for the hour',
    lessons: [
      {
        id: 'hongkong-1',
        title: 'City & time',
        description: 'Telling the time, transport, and putting it all together.',
        steps: [
          { type: 'vocab', word: '点', article: null, english: "o'clock (diǎn)", example: '三点。(Sān diǎn.) Three o’clock.' },
          { type: 'vocab', word: '现在', article: null, english: 'now (xiànzài)', example: '现在几点？(Xiànzài jǐ diǎn?) What time is it now?' },
          { type: 'vocab', word: '船', article: null, english: 'boat / ferry (chuán)', example: '我坐船。(Wǒ zuò chuán.) I take the ferry.' },
          { type: 'vocab', word: '车', article: null, english: 'car / vehicle (chē)', example: '车站在哪儿？(Chēzhàn zài nǎr?) Where is the station?' },
          { type: 'vocab', word: '几', article: null, english: 'how many / what (number) (jǐ)', example: '几点？(Jǐ diǎn?) What time?' },
          {
            type: 'grammar',
            title: 'Telling the time with 点 (diǎn)',
            explanation: 'Say the hour with a number + 点 (diǎn, "o’clock"). Ask the time with 几点 (jǐ diǎn, "what time"). 几 (jǐ) asks for a small number.',
            examples: [
              '现在几点？(Xiànzài jǐ diǎn?) What time is it now?',
              '现在三点。(Xiànzài sān diǎn.) It is three o’clock now.',
            ],
          },
          { type: 'exercise', subtype: 'multiple-choice', question: 'Which word means "o’clock"?', options: ['点', '车', '船'], correct: '点' },
          { type: 'exercise', subtype: 'fill-blank', question: 'Complete "What time now?": 现在___点？', correct: '几' },
        ],
      },
    ],
    places: [
      {
        id: 'hongkong-victoriapeak',
        name: 'Victoria Peak',
        icon: '🚡',
        coords: [22.2759, 114.1455],
        wikiTitle: 'Victoria Peak',
        narrative:
          'The historic Peak Tram hauls up an impossibly steep track to the summit, where the ' +
          'whole skyline and harbour spread out far below.',
        phrases: [
          { zh: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', en: 'What time is it now?' },
          { zh: '风景太美了！', pinyin: 'Fēngjǐng tài měi le!', en: 'The view is so beautiful!' },
          { zh: '我坐缆车。', pinyin: 'Wǒ zuò lǎnchē.', en: 'I take the tram.' },
        ],
        lessonId: 'hongkong-1',
        quiz: {
          question: 'What does 现在几点 (xiànzài jǐ diǎn) mean?',
          options: ['What time is it now?', 'Where are we now?', 'How much is it?'],
          correct: 'What time is it now?',
          explanation: '现在 (xiànzài) "now" + 几点 (jǐ diǎn) "what time" = "what time is it now?".',
        },
      },
      {
        id: 'hongkong-starferry',
        name: 'Star Ferry',
        icon: '⛴️',
        coords: [22.2940, 114.1687],
        wikiTitle: 'Star Ferry',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Central_Skyline_with_IFC_building_from_Star_Ferry_in_Victoria_Harbour%2C_Hong_Kong_2.jpg/1920px-Central_Skyline_with_IFC_building_from_Star_Ferry_in_Victoria_Harbour%2C_Hong_Kong_2.jpg',
        narrative:
          'A green-and-white ferry has crossed Victoria Harbour for over a century. For a few ' +
          'coins, the traveller glides between Kowloon and Hong Kong Island.',
        phrases: [
          { zh: '我坐船。', pinyin: 'Wǒ zuò chuán.', en: 'I take the ferry.' },
          { zh: '票多少钱？', pinyin: 'Piào duōshao qián?', en: 'How much is a ticket?' },
          { zh: '很便宜！', pinyin: 'Hěn piányi!', en: 'Very cheap!' },
        ],
        lessonId: 'hongkong-1',
        quiz: {
          question: 'What does 船 (chuán) mean?',
          options: ['Boat / ferry', 'Car', 'Train'],
          correct: 'Boat / ferry',
          explanation: '船 (chuán) means "boat" or "ferry"; 坐船 (zuò chuán) is "to take the boat".',
        },
      },
      {
        id: 'hongkong-tsimshatsui',
        name: 'Tsim Sha Tsui',
        icon: '🌆',
        coords: [22.2977, 114.1722],
        wikiTitle: 'Tsim Sha Tsui',
        narrative:
          'On the Kowloon waterfront, the Avenue of Stars faces the nightly Symphony of ' +
          'Lights as laser beams dance across the harbour towers.',
        phrases: [
          { zh: '车站在哪儿？', pinyin: 'Chēzhàn zài nǎr?', en: 'Where is the station?' },
          { zh: '往右走。', pinyin: 'Wǎng yòu zǒu.', en: 'Go right.' },
          { zh: '夜景很美。', pinyin: 'Yèjǐng hěn měi.', en: 'The night view is beautiful.' },
        ],
        lessonId: 'hongkong-1',
        quiz: {
          question: 'What does 车站在哪儿 (chēzhàn zài nǎr) mean?',
          options: ['Where is the station?', 'What time is the train?', 'How much is it?'],
          correct: 'Where is the station?',
          explanation: '车站 (chēzhàn) "station" + 在哪儿 (zài nǎr) "where is it" = "where is the station?".',
        },
      },
      {
        id: 'hongkong-templestreet',
        name: 'Temple Street Market',
        icon: '🏮',
        coords: [22.3110, 114.1700],
        wikiTitle: 'Temple Street, Hong Kong',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mercado_en_Temple_St.%2C_Hong_Kong%2C_2013-08-11%2C_DD_02.JPG/1920px-Mercado_en_Temple_St.%2C_Hong_Kong%2C_2013-08-11%2C_DD_02.JPG',
        narrative:
          'After dark the street fills with stalls, fortune tellers, and open-air seafood ' +
          'restaurants. The perfect neon-lit finale to the whole journey across China.',
        phrases: [
          { zh: '太贵了，便宜一点。', pinyin: 'Tài guì le, piányi yìdiǎn.', en: 'Too expensive, a bit cheaper please.' },
          { zh: '谢谢你，再见！', pinyin: 'Xièxie nǐ, zàijiàn!', en: 'Thank you, goodbye!' },
          { zh: '我爱中国！', pinyin: 'Wǒ ài Zhōngguó!', en: 'I love China!' },
        ],
        lessonId: 'hongkong-1',
        quiz: {
          question: 'You have reached the last stop. What does 再见 (zàijiàn) mean?',
          options: ['Goodbye', 'Hello', 'Thank you'],
          correct: 'Goodbye',
          explanation: 'Full circle from Beijing: 再见 (zàijiàn) means "goodbye". 谢谢 for travelling along!',
        },
      },
    ],
  },
];

export default cities;
