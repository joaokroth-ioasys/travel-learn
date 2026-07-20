// City Life content for the Chinese journey.
// Each location is a mini-journey: a sequence of `stages` the learner walks
// through (RouteJourney shape — see RouteJourney.jsx). `pos` places the pin on
// the illustrated city map (percent of the map box). Stages have no photo or
// lesson — WikiPhoto falls back to an accent hero, RouteJourney hides the lesson
// CTA. Phrases are { zh, pinyin, en }. Stage ids are globally unique (routeDone
// is one flat set per journey).

const LOCATIONS = [
  {
    id: 'airport', name: 'Airport', icon: '✈️', accent: '#3a7bd5',
    tagline: 'From check-in to taxi', pos: { x: 12, y: 19 },
    stages: [
      {
        id: 'cl-airport-checkin', name: 'Check-in', icon: '🛄',
        narrative: 'You arrive at the terminal. First stop: the check-in counter to drop your bag and get your boarding pass.',
        phrases: [
          { zh: '我想办理登机手续。', pinyin: 'Wǒ xiǎng bànlǐ dēngjī shǒuxù.', en: "I'd like to check in." },
          { zh: '这是我的护照。', pinyin: 'Zhè shì wǒ de hùzhào.', en: 'Here is my passport.' },
          { zh: '我想要靠窗的座位。', pinyin: 'Wǒ xiǎng yào kào chuāng de zuòwèi.', en: 'A window seat, please.' },
          { zh: '我想要靠走道的座位。', pinyin: 'Wǒ xiǎng yào kào zǒudào de zuòwèi.', en: 'An aisle seat, please.' },
        ],
        quiz: {
          question: 'How do you ask for a window seat?',
          options: ['我想要靠窗的座位。', '我想要靠走道的座位。', '登机口在哪里？'],
          correct: '我想要靠窗的座位。',
          explanation: '窗 (chuāng) = window, 走道 (zǒudào) = aisle.',
        },
      },
      {
        id: 'cl-airport-security', name: 'Security', icon: '🛂',
        narrative: 'Boarding pass in hand, you head to the security check.',
        phrases: [
          { zh: '请把包放在传送带上。', pinyin: 'Qǐng bǎ bāo fàng zài chuánsòngdài shàng.', en: 'Please put your bag on the belt.' },
          { zh: '您带液体了吗？', pinyin: 'Nín dài yètǐ le ma?', en: 'Do you have any liquids with you?' },
          { zh: '我需要脱鞋吗？', pinyin: 'Wǒ xūyào tuō xié ma?', en: 'Do I have to take off my shoes?' },
        ],
        quiz: {
          question: '"您带液体了吗？" asks about…',
          options: ['liquids', 'shoes', 'your laptop'],
          correct: 'liquids',
          explanation: '液体 (yètǐ) = liquids — limited in hand luggage.',
        },
      },
      {
        id: 'cl-airport-gate', name: 'Boarding', icon: '🎫',
        narrative: 'You find your gate and wait for boarding to begin.',
        phrases: [
          { zh: '登机口在哪里？', pinyin: 'Dēngjīkǒu zài nǎlǐ?', en: 'Where is the gate?' },
          { zh: '请出示您的登机牌。', pinyin: 'Qǐng chūshì nín de dēngjīpái.', en: 'Your boarding pass, please.' },
          { zh: '十点开始登机。', pinyin: 'Shí diǎn kāishǐ dēngjī.', en: 'Boarding begins at 10.' },
        ],
        quiz: {
          question: 'Your "登机牌" is your…',
          options: ['boarding pass', 'suitcase', 'passport'],
          correct: 'boarding pass',
          explanation: '登机牌 (dēngjīpái) = boarding pass.',
        },
      },
      {
        id: 'cl-airport-baggage', name: 'Baggage', icon: '🧳',
        narrative: 'After landing you go to baggage claim to pick up your suitcase.',
        phrases: [
          { zh: '行李提取处在哪里？', pinyin: 'Xínglǐ tíqǔchù zài nǎlǐ?', en: 'Where is baggage claim?' },
          { zh: '我的行李箱没到。', pinyin: 'Wǒ de xínglǐxiāng méi dào.', en: "My suitcase didn't arrive." },
          { zh: '我的行李坏了。', pinyin: 'Wǒ de xínglǐ huài le.', en: 'My luggage is damaged.' },
        ],
        quiz: {
          question: 'How do you say your suitcase did not arrive?',
          options: ['我的行李箱没到。', '行李提取处在哪里？', '我需要一辆出租车。'],
          correct: '我的行李箱没到。',
          explanation: '行李箱 (xínglǐxiāng) = suitcase; 没到 = didn\'t arrive.',
        },
      },
      {
        id: 'cl-airport-money', name: 'Cash', icon: '💴',
        narrative: 'You need some cash before leaving the airport.',
        phrases: [
          { zh: '取款机在哪里？', pinyin: 'Qǔkuǎnjī zài nǎlǐ?', en: 'Where is the ATM?' },
          { zh: '哪里可以换钱？', pinyin: 'Nǎlǐ kěyǐ huàn qián?', en: 'Where can I exchange money?' },
          { zh: '我想取钱。', pinyin: 'Wǒ xiǎng qǔ qián.', en: "I'd like to withdraw money." },
        ],
        quiz: {
          question: '"取款机" is a…',
          options: ['cash machine (ATM)', 'exchange office', 'bank teller'],
          correct: 'cash machine (ATM)',
          explanation: '取款机 (qǔkuǎnjī) = ATM; 换钱 = to exchange money.',
        },
      },
      {
        id: 'cl-airport-taxi', name: 'Taxi', icon: '🚕',
        narrative: 'Finally you grab a taxi (or a DiDi) into the city.',
        phrases: [
          { zh: '我需要一辆出租车。', pinyin: 'Wǒ xūyào yí liàng chūzūchē.', en: 'I need a taxi.' },
          { zh: '请到市中心。', pinyin: 'Qǐng dào shì zhōngxīn.', en: 'To the city centre, please.' },
          { zh: '车费多少钱？', pinyin: 'Chēfèi duōshǎo qián?', en: 'How much is the ride?' },
        ],
        quiz: {
          question: '"车费多少钱？" asks about the…',
          options: ['price of the ride', 'direction', 'time'],
          correct: 'price of the ride',
          explanation: '车费 (chēfèi) = the fare; 多少钱 = how much.',
        },
      },
    ],
  },
  {
    id: 'train-station', name: 'Train Station', icon: '🚉', accent: '#5b8c5a',
    tagline: 'High-speed rail: find your way and board', pos: { x: 45, y: 20 },
    stages: [
      {
        id: 'cl-train-orient', name: 'Orient yourself', icon: '🧭',
        narrative: 'The station is huge. You stop someone to ask the way.',
        phrases: [
          { zh: '请问，检票口在哪里？', pinyin: 'Qǐngwèn, jiǎnpiàokǒu zài nǎlǐ?', en: 'Excuse me, where is the ticket gate?' },
          { zh: '售票机在哪里？', pinyin: 'Shòupiàojī zài nǎlǐ?', en: 'Where is the ticket machine?' },
          { zh: '您能帮我吗？', pinyin: 'Nín néng bāng wǒ ma?', en: 'Can you help me?' },
        ],
        quiz: {
          question: 'A "检票口" is a…',
          options: ['ticket gate', 'ticket', 'exit'],
          correct: 'ticket gate',
          explanation: '检票口 (jiǎnpiàokǒu) = the gate where your ticket is checked.',
        },
      },
      {
        id: 'cl-train-ticket', name: 'Buy a ticket', icon: '🎟️',
        narrative: 'At the counter you buy your high-speed rail ticket. You need your passport.',
        phrases: [
          { zh: '我要一张去北京的票。', pinyin: 'Wǒ yào yì zhāng qù Běijīng de piào.', en: 'A ticket to Beijing, please.' },
          { zh: '买票需要护照。', pinyin: 'Mǎi piào xūyào hùzhào.', en: 'You need a passport to buy a ticket.' },
          { zh: '一张票多少钱？', pinyin: 'Yì zhāng piào duōshǎo qián?', en: 'How much is a ticket?' },
        ],
        quiz: {
          question: 'What do you need to buy a train ticket in China?',
          options: ['passport / ID', 'a lot of cash', 'a QR code'],
          correct: 'passport / ID',
          explanation: '护照 (hùzhào) = passport; tickets are tied to your ID.',
        },
      },
      {
        id: 'cl-train-platform', name: 'Find the platform', icon: '🚏',
        narrative: 'Ticket in hand, you check which platform your train leaves from.',
        phrases: [
          { zh: '火车从哪个站台出发？', pinyin: 'Huǒchē cóng nǎ ge zhàntái chūfā?', en: 'Which platform does the train leave from?' },
          { zh: '火车在三号站台。', pinyin: 'Huǒchē zài sān hào zhàntái.', en: 'The train is at platform 3.' },
        ],
        quiz: {
          question: 'How do you ask which platform the train leaves from?',
          options: ['火车从哪个站台出发？', '车费多少钱？', '我需要换乘吗？'],
          correct: '火车从哪个站台出发？',
          explanation: '站台 (zhàntái) = platform; 出发 = to depart.',
        },
      },
      {
        id: 'cl-train-boarding', name: 'Waiting to board', icon: '⏳',
        narrative: 'You wait on the platform. Announcements crackle overhead.',
        phrases: [
          { zh: '火车晚点十分钟。', pinyin: 'Huǒchē wǎndiǎn shí fēnzhōng.', en: 'The train is 10 minutes late.' },
          { zh: '请上车。', pinyin: 'Qǐng shàng chē.', en: 'Please board.' },
          { zh: '车门要关了。', pinyin: 'Chēmén yào guān le.', en: 'The doors are closing.' },
        ],
        quiz: {
          question: '"晚点" means…',
          options: ['delayed / late', 'on time', 'cancelled'],
          correct: 'delayed / late',
          explanation: '晚点 (wǎndiǎn) = delayed; 上车 = to board.',
        },
      },
      {
        id: 'cl-train-transfer', name: 'Changing trains', icon: '🔀',
        narrative: 'Your route needs a change midway.',
        phrases: [
          { zh: '我需要换乘吗？', pinyin: 'Wǒ xūyào huànchéng ma?', en: 'Do I have to change trains?' },
          { zh: '我在西安换车。', pinyin: "Wǒ zài Xī'ān huàn chē.", en: "I change in Xi'an." },
        ],
        quiz: {
          question: '"换乘" means…',
          options: ['to change / transfer', 'to get off for good', 'to buy a ticket'],
          correct: 'to change / transfer',
          explanation: '换乘 (huànchéng) = to transfer/change trains.',
        },
      },
    ],
  },

  {
    id: 'doctor', name: 'Doctor & Hospital', icon: '🏥', accent: '#d06b8c',
    tagline: 'Feeling ill and getting help', pos: { x: 74, y: 25 },
    stages: [
      {
        id: 'cl-doc-reception', name: 'Registration', icon: '🪪',
        narrative: 'At a Chinese hospital you first 挂号 (register) at the desk before seeing a doctor.',
        phrases: [
          { zh: '我想挂号。', pinyin: 'Wǒ xiǎng guàhào.', en: "I'd like to register." },
          { zh: '这是我的护照。', pinyin: 'Zhè shì wǒ de hùzhào.', en: 'Here is my passport.' },
          { zh: '我需要看医生。', pinyin: 'Wǒ xūyào kàn yīshēng.', en: 'I need to see a doctor.' },
        ],
        quiz: {
          question: '"挂号" means to…',
          options: ['register to see a doctor', 'get a prescription', 'pay the bill'],
          correct: 'register to see a doctor',
          explanation: '挂号 (guàhào) = to register at a hospital; 医生 = doctor.',
        },
      },
      {
        id: 'cl-doc-triage', name: 'Symptoms', icon: '🤒',
        narrative: 'A nurse asks what is wrong.',
        phrases: [
          { zh: '我发烧了。', pinyin: 'Wǒ fāshāo le.', en: 'I have a fever.' },
          { zh: '我头疼。', pinyin: 'Wǒ tóu téng.', en: 'I have a headache.' },
          { zh: '我肚子疼。', pinyin: 'Wǒ dùzi téng.', en: 'I have a stomach ache.' },
          { zh: '我的腿受伤了。', pinyin: 'Wǒ de tuǐ shòushāng le.', en: 'I hurt my leg.' },
        ],
        quiz: {
          question: '"我头疼。" means I have a…',
          options: ['headache', 'stomach ache', 'fever'],
          correct: 'headache',
          explanation: '头 (tóu) = head, 疼 = pain; 肚子 = belly.',
        },
      },
      {
        id: 'cl-doc-exam', name: 'The exam', icon: '🩺',
        narrative: 'The doctor examines you.',
        phrases: [
          { zh: '哪里疼？', pinyin: 'Nǎlǐ téng?', en: 'Where does it hurt?' },
          { zh: '这样多久了？', pinyin: 'Zhèyàng duōjiǔ le?', en: 'How long has it been like this?' },
          { zh: '请深呼吸。', pinyin: 'Qǐng shēn hūxī.', en: 'Breathe in deeply.' },
        ],
        quiz: {
          question: '"哪里疼？" asks…',
          options: ['where it hurts', 'how long', 'your name'],
          correct: 'where it hurts',
          explanation: '哪里 (nǎlǐ) = where; 疼 = to hurt.',
        },
      },
      {
        id: 'cl-doc-medicine', name: 'Medicine', icon: '💊',
        narrative: 'You get a prescription for the pharmacy.',
        phrases: [
          { zh: '我需要开药。', pinyin: 'Wǒ xūyào kāi yào.', en: 'I need a prescription.' },
          { zh: '一天吃三次。', pinyin: 'Yì tiān chī sān cì.', en: 'Take it three times a day.' },
          { zh: '药房在哪里？', pinyin: 'Yàofáng zài nǎlǐ?', en: 'Where is the pharmacy?' },
        ],
        quiz: {
          question: '"药房" is the…',
          options: ['pharmacy', 'hospital', 'doctor'],
          correct: 'pharmacy',
          explanation: '药房 (yàofáng) = pharmacy; 药 = medicine.',
        },
      },
      {
        id: 'cl-doc-note', name: 'Sick note', icon: '📄',
        narrative: 'You need proof for work.',
        phrases: [
          { zh: '我需要一张病假条。', pinyin: 'Wǒ xūyào yì zhāng bìngjiàtiáo.', en: 'I need a sick note.' },
          { zh: '您能开个诊断证明吗？', pinyin: 'Nín néng kāi ge zhěnduàn zhèngmíng ma?', en: 'Can you issue a medical certificate?' },
        ],
        quiz: {
          question: '"病假条" is a…',
          options: ['sick note', 'prescription', 'bill'],
          correct: 'sick note',
          explanation: '病 (bìng) = illness; 假条 = leave note.',
        },
      },
    ],
  },
  {
    id: 'restaurant', name: 'Restaurant', icon: '🍽️', accent: '#c0504d',
    tagline: 'A table, a meal, the bill', pos: { x: 73, y: 47 },
    stages: [
      {
        id: 'cl-rest-arrive', name: 'Arrive', icon: '🪑',
        narrative: 'You walk in for dinner.',
        phrases: [
          { zh: '我订了一张桌子。', pinyin: 'Wǒ dìng le yì zhāng zhuōzi.', en: 'I have a reservation.' },
          { zh: '两个人的桌子，谢谢。', pinyin: 'Liǎng ge rén de zhuōzi, xièxie.', en: 'A table for two, please.' },
        ],
        quiz: {
          question: '"两个人的桌子" is a table for…',
          options: ['two', 'ten', 'one'],
          correct: 'two',
          explanation: '两 (liǎng) = two; 订 = to reserve.',
        },
      },
      {
        id: 'cl-rest-menu', name: 'The menu', icon: '📖',
        narrative: 'The waiter brings the menu.',
        phrases: [
          { zh: '请给我菜单。', pinyin: 'Qǐng gěi wǒ càidān.', en: 'The menu, please.' },
          { zh: '有酒水单吗？', pinyin: 'Yǒu jiǔshuǐdān ma?', en: 'Is there a drinks menu?' },
          { zh: '今天的招牌菜是什么？', pinyin: 'Jīntiān de zhāopáicài shì shénme?', en: "What's the dish of the day?" },
        ],
        quiz: {
          question: '"菜单" is the…',
          options: ['menu', 'bill', 'waiter'],
          correct: 'menu',
          explanation: '菜单 (càidān) = menu; 酒水单 = drinks menu.',
        },
      },
      {
        id: 'cl-rest-order', name: 'Order', icon: '🍲',
        narrative: 'Dishes to share: 凉菜 (cold starters), 热菜 (hot mains like 宫保鸡丁, 麻婆豆腐), 主食 (rice/noodles), plus 饮料 (tea, beer, water).',
        phrases: [
          { zh: '我要一个宫保鸡丁。', pinyin: 'Wǒ yào yí ge gōngbǎo jīdīng.', en: "I'll have kung pao chicken." },
          { zh: '来一碗米饭。', pinyin: 'Lái yì wǎn mǐfàn.', en: 'A bowl of rice, please.' },
          { zh: '再来一壶茶。', pinyin: 'Zài lái yì hú chá.', en: 'Another pot of tea, please.' },
        ],
        quiz: {
          question: '"米饭" is…',
          options: ['rice', 'tea', 'noodles'],
          correct: 'rice',
          explanation: '米饭 (mǐfàn) = cooked rice; 面 = noodles; 茶 = tea.',
        },
      },
      {
        id: 'cl-rest-special', name: 'Special requests', icon: '🥗',
        narrative: 'You have a few dietary needs.',
        phrases: [
          { zh: '我吃素。', pinyin: 'Wǒ chī sù.', en: "I'm vegetarian." },
          { zh: '请不要放辣。', pinyin: 'Qǐng bú yào fàng là.', en: 'Not spicy, please.' },
          { zh: '我对花生过敏。', pinyin: 'Wǒ duì huāshēng guòmǐn.', en: "I'm allergic to peanuts." },
        ],
        quiz: {
          question: '"请不要放辣。" means…',
          options: ['not spicy, please', 'no onions, please', 'no meat, please'],
          correct: 'not spicy, please',
          explanation: '辣 (là) = spicy; 放 = to add/put in.',
        },
      },
      {
        id: 'cl-rest-pay', name: 'Pay', icon: '🧾',
        narrative: 'Great meal. Time to settle up — often by scanning a QR code.',
        phrases: [
          { zh: '服务员，买单。', pinyin: 'Fúwùyuán, mǎidān.', en: 'Waiter, the bill please.' },
          { zh: '可以用微信支付吗？', pinyin: 'Kěyǐ yòng Wēixìn zhīfù ma?', en: 'Can I pay with WeChat?' },
          { zh: '很好吃！', pinyin: 'Hěn hǎochī!', en: 'It was delicious!' },
        ],
        quiz: {
          question: '"买单" means to…',
          options: ['pay the bill', 'order food', 'call the waiter'],
          correct: 'pay the bill',
          explanation: '买单 (mǎidān) = to pay the bill; 好吃 = delicious.',
        },
      },
    ],
  },
  
  {
    id: 'gym', name: 'Gym', icon: '🏋️', accent: '#7a5cc0',
    tagline: 'Join, train, share the machines', pos: { x: 34, y: 65 },
    stages: [
      {
        id: 'cl-gym-join', name: 'Sign up', icon: '📝',
        narrative: 'First visit. You go to the front desk to become a member.',
        phrases: [
          { zh: '我想办会员。', pinyin: 'Wǒ xiǎng bàn huìyuán.', en: "I'd like to sign up as a member." },
          { zh: '会员多少钱？', pinyin: 'Huìyuán duōshǎo qián?', en: 'How much is membership?' },
          { zh: '可以试用一天吗？', pinyin: 'Kěyǐ shìyòng yì tiān ma?', en: 'Is there a trial day?' },
        ],
        quiz: {
          question: '"会员" means…',
          options: ['membership / member', 'trial day', 'locker'],
          correct: 'membership / member',
          explanation: '会员 (huìyuán) = member/membership; 办 = to set up.',
        },
      },
      {
        id: 'cl-gym-locker', name: 'Changing room', icon: '🔑',
        narrative: 'You look for somewhere to change and stash your things.',
        phrases: [
          { zh: '更衣室在哪里？', pinyin: 'Gēngyīshì zài nǎlǐ?', en: 'Where is the changing room?' },
          { zh: '储物柜在哪里？', pinyin: 'Chǔwùguì zài nǎlǐ?', en: 'Where are the lockers?' },
          { zh: '有锁吗？', pinyin: 'Yǒu suǒ ma?', en: 'Do you have a lock?' },
        ],
        quiz: {
          question: '"储物柜" is a…',
          options: ['locker', 'towel', 'shower'],
          correct: 'locker',
          explanation: '储物柜 (chǔwùguì) = locker; 更衣室 = changing room.',
        },
      },
      {
        id: 'cl-gym-plan', name: 'Ask for a plan', icon: '📈',
        narrative: 'A trainer offers to put together a routine for you.',
        phrases: [
          { zh: '您能帮我制定训练计划吗？', pinyin: 'Nín néng bāng wǒ zhìdìng xùnliàn jìhuà ma?', en: 'Can you make me a training plan?' },
          { zh: '我是初学者。', pinyin: 'Wǒ shì chūxuézhě.', en: "I'm a beginner." },
          { zh: '我想减肥。', pinyin: 'Wǒ xiǎng jiǎnféi.', en: 'I want to lose weight.' },
          { zh: '我想增肌。', pinyin: 'Wǒ xiǎng zēngjī.', en: 'I want to build muscle.' },
        ],
        quiz: {
          question: '"我想减肥。" means…',
          options: ['I want to lose weight', 'I want to build muscle', "I'm a beginner"],
          correct: 'I want to lose weight',
          explanation: '减肥 (jiǎnféi) = to lose weight; 增肌 = to build muscle.',
        },
      },
      {
        id: 'cl-gym-share', name: 'Share a machine', icon: '🔁',
        narrative: 'The machine you want is in use. You ask to work in.',
        phrases: [
          { zh: '这个器材有人用吗？', pinyin: 'Zhè ge qìcái yǒu rén yòng ma?', en: 'Is this machine in use?' },
          { zh: '我可以一起用吗？', pinyin: 'Wǒ kěyǐ yìqǐ yòng ma?', en: 'Can I work in with you?' },
          { zh: '还有几组？', pinyin: 'Hái yǒu jǐ zǔ?', en: 'How many sets left?' },
        ],
        quiz: {
          question: '"这个器材有人用吗？" asks if the machine is…',
          options: ['in use', 'broken', 'heavy'],
          correct: 'in use',
          explanation: '器材 (qìcái) = equipment; 有人用 = someone is using it.',
        },
      },
      {
        id: 'cl-gym-exercises', name: 'The exercises', icon: '💪',
        narrative: 'By muscle group — 背 (back), 胸 (chest), 腿 (legs), 肩 (shoulders). Common lifts follow.',
        phrases: [
          { zh: '深蹲练腿。', pinyin: 'Shēndūn liàn tuǐ.', en: 'Squats for the legs.' },
          { zh: '卧推练胸。', pinyin: 'Wòtuī liàn xiōng.', en: 'Bench press for the chest.' },
          { zh: '硬拉练背。', pinyin: 'Yìnglā liàn bèi.', en: 'Deadlifts for the back.' },
          { zh: '三组，每组十二次。', pinyin: 'Sān zǔ, měi zǔ shí\'èr cì.', en: 'Three sets of twelve reps.' },
        ],
        quiz: {
          question: 'Which Chinese word is the "squat"?',
          options: ['深蹲 (shēndūn)', '卧推 (wòtuī)', '硬拉 (yìnglā)'],
          correct: '深蹲 (shēndūn)',
          explanation: '深蹲 = squat, 卧推 = bench press, 硬拉 = deadlift.',
        },
      },
    ],
  },

  {
    id: 'public-services', name: 'Public Services', icon: '🏛️', accent: '#4a7a8c',
    tagline: 'Registration, visa, paperwork', pos: { x: 78, y: 75  },
    stages: [
      {
        id: 'cl-pub-appointment', name: 'Book an appointment', icon: '📅',
        narrative: 'Many offices ask you to book a 预约 (appointment) first.',
        phrases: [
          { zh: '我想预约。', pinyin: 'Wǒ xiǎng yùyuē.', en: "I'd like to make an appointment." },
          { zh: '有空的预约时间吗？', pinyin: 'Yǒu kòng de yùyuē shíjiān ma?', en: 'Is there an appointment slot available?' },
        ],
        quiz: {
          question: '"预约" means…',
          options: ['appointment', 'form', 'ID card'],
          correct: 'appointment',
          explanation: '预约 (yùyuē) = appointment/booking.',
        },
      },
      {
        id: 'cl-pub-registration', name: 'Registration', icon: '🏠',
        narrative: 'Foreign visitors must register their address (临时住宿登记) at the local 派出所 (police station).',
        phrases: [
          { zh: '我要办临时住宿登记。', pinyin: 'Wǒ yào bàn línshí zhùsù dēngjì.', en: 'I need to do temporary residence registration.' },
          { zh: '派出所在哪里？', pinyin: 'Pàichūsuǒ zài nǎlǐ?', en: 'Where is the police station?' },
          { zh: '这是我的租房合同。', pinyin: 'Zhè shì wǒ de zūfáng hétóng.', en: 'Here is my rental contract.' },
        ],
        quiz: {
          question: 'Where do foreigners register their address?',
          options: ['派出所 (police station)', '药房 (pharmacy)', '售票处 (ticket office)'],
          correct: '派出所 (police station)',
          explanation: '临时住宿登记 (registration) is done at the 派出所.',
        },
      },
      {
        id: 'cl-pub-visa', name: 'Visa & residence', icon: '🛃',
        narrative: 'For a longer stay you deal with the exit-entry administration.',
        phrases: [
          { zh: '我需要办居留许可。', pinyin: 'Wǒ xūyào bàn jūliú xǔkě.', en: 'I need a residence permit.' },
          { zh: '出入境管理局在哪里？', pinyin: 'Chūrùjìng guǎnlǐjú zài nǎlǐ?', en: 'Where is the exit-entry office?' },
          { zh: '我需要什么签证？', pinyin: 'Wǒ xūyào shénme qiānzhèng?', en: 'Which visa do I need?' },
        ],
        quiz: {
          question: '"居留许可" is a…',
          options: ['residence permit', 'driving licence', 'health insurance'],
          correct: 'residence permit',
          explanation: '居留 (jūliú) = residence; 许可 = permit; 签证 = visa.',
        },
      },
      {
        id: 'cl-pub-problems', name: 'Sort out a problem', icon: '❓',
        narrative: 'Something is off with your paperwork.',
        phrases: [
          { zh: '我需要什么材料？', pinyin: 'Wǒ xūyào shénme cáiliào?', en: 'Which documents do I need?' },
          { zh: '我拿错表格了。', pinyin: 'Wǒ ná cuò biǎogé le.', en: 'I have the wrong form.' },
          { zh: '您能解释一下吗？', pinyin: 'Nín néng jiěshì yíxià ma?', en: 'Can you explain that?' },
        ],
        quiz: {
          question: '"材料" here means…',
          options: ['documents / paperwork', 'appointments', 'offices'],
          correct: 'documents / paperwork',
          explanation: '材料 (cáiliào) = documents/materials; 表格 = form.',
        },
      },
    ],
  },
  {
    id: 'tourist-guide', name: 'Tourist Guide', icon: '🗺️', accent: '#3a9188',
    tagline: 'The tour and the sights', pos: { x: 40, y: 85 },
    stages: [
      {
        id: 'cl-tour-info', name: 'Tour info', icon: '🕒',
        narrative: 'You meet the guide and get the plan for the day.',
        phrases: [
          { zh: '导游几点开始？', pinyin: 'Dǎoyóu jǐ diǎn kāishǐ?', en: 'When does the tour start?' },
          { zh: '我们去哪里？', pinyin: 'Wǒmen qù nǎlǐ?', en: 'Where are we going?' },
          { zh: '这个团要多久？', pinyin: 'Zhè ge tuán yào duōjiǔ?', en: 'How long does the tour take?' },
        ],
        quiz: {
          question: '"导游" is a…',
          options: ['tour guide', 'map', 'ticket'],
          correct: 'tour guide',
          explanation: '导游 (dǎoyóu) = tour guide; 团 = tour group.',
        },
      },
      {
        id: 'cl-tour-getthere', name: 'Getting there', icon: '🚶',
        narrative: 'You ask how to reach the first stop.',
        phrases: [
          { zh: '博物馆怎么走？', pinyin: 'Bówùguǎn zěnme zǒu?', en: 'How do I get to the museum?' },
          { zh: '走路能到吗？', pinyin: 'Zǒulù néng dào ma?', en: 'Can I get there on foot?' },
          { zh: '坐地铁吧。', pinyin: 'Zuò dìtiě ba.', en: 'Take the subway.' },
        ],
        quiz: {
          question: '"地铁" means…',
          options: ['subway', 'on foot', 'taxi'],
          correct: 'subway',
          explanation: '地铁 (dìtiě) = subway; 走路 = on foot.',
        },
      },
      {
        id: 'cl-tour-sights', name: 'The sights', icon: '📸',
        narrative: 'Famous Chinese landmarks: 故宫 (Forbidden City), 长城 (Great Wall), 兵马俑 (Terracotta Army), 外滩 (the Bund).',
        phrases: [
          { zh: '长城非常有名。', pinyin: 'Chángchéng fēicháng yǒumíng.', en: 'The Great Wall is very famous.' },
          { zh: '我想去故宫。', pinyin: 'Wǒ xiǎng qù Gùgōng.', en: "I'd like to visit the Forbidden City." },
          { zh: '兵马俑在西安。', pinyin: "Bīngmǎyǒng zài Xī'ān.", en: "The Terracotta Army is in Xi'an." },
        ],
        quiz: {
          question: 'Which landmark is in Beijing?',
          options: ['故宫 (Forbidden City)', '兵马俑 (Terracotta Army)', '外滩 (the Bund)'],
          correct: '故宫 (Forbidden City)',
          explanation: 'The 故宫 is in Beijing; 兵马俑 is in Xi\'an; 外滩 is in Shanghai.',
        },
      },
      {
        id: 'cl-tour-ticket', name: 'Buy entry', icon: '🎫',
        narrative: 'At the entrance you buy tickets.',
        phrases: [
          { zh: '两张门票，谢谢。', pinyin: 'Liǎng zhāng ménpiào, xièxie.', en: 'Two entry tickets, please.' },
          { zh: '有学生票吗？', pinyin: 'Yǒu xuéshēng piào ma?', en: 'Is there a student ticket?' },
          { zh: '门票免费。', pinyin: 'Ménpiào miǎnfèi.', en: 'Admission is free.' },
        ],
        quiz: {
          question: '"门票" is the…',
          options: ['entry ticket', 'tour guide', 'map'],
          correct: 'entry ticket',
          explanation: '门票 (ménpiào) = entry ticket; 免费 = free.',
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
