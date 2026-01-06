/**
 * @typedef {Object} AccountNode
 * @property {string} id — уникальный идентификатор
 * @property {string} icon — эмодзи или символ иконки
 * @property {string} name — название папки/счета
 * @property {string | null} [balance] — баланс (null/undefined = не отображается)
 * @property {AccountNode[]} [children] — вложенные элементы (для папок)
 * @property {boolean} [isFolder] — true, если это папка (для логики, опционально)
 * @property {string} [transactionId] — идентификатор для привязки к таблице транзакций
 */

/**
 * Дерево счетов — мок-данные для Sidebar
 * @type {AccountNode[]}
 */
export const MOCK_ACCOUNTS_TREE = [
  {
    id: 'default',
    icon: '📁',
    name: 'Счета',
    balance: null,
    isFolder: false,
    transactionId: 'default', // ← ссылка на таблицу
  },
  {
    id: 'cards',
    icon: '💳',
    name: 'Наши карточки',
    balance: '55 303,32',
    isFolder: true,
    children: [
      {
        id: 'tbank-premium',
        name: 'T-Банк Premium',
        balance: '38 984,59',
        transactionId: 'tbank-premium',
      },
      {
        id: 'sber-m',
        name: 'Сбербанк мужа',
        balance: '6 900,79',
        transactionId: 'sber-m',
      },
      {
        id: 'sber-m2',
        name: 'Сбербанк мужа 2',
        balance: '2 885,94',
        transactionId: 'sber-m2',
      },
      {
        id: 'sber-w',
        name: 'Сбербанк жены',
        balance: '1 444,83',
        transactionId: 'sber-w',
      },
      {
        id: 'sber-w-mir',
        name: 'Сбербанк Жены МИР',
        balance: '0,00',
        transactionId: 'sber-w-mir',
      },
      {
        id: 'vtb-kindergarten',
        name: 'ВТБ детский сад',
        balance: '1,11',
        transactionId: 'vtb-kindergarten',
      },
      {
        id: 'homecredit-m',
        name: 'HomeCredit Банк мужа',
        balance: '0,49',
        transactionId: 'homecredit-m',
      },
      {
        id: 'ozon',
        name: 'OZON карта',
        balance: '9,00',
        transactionId: 'ozon',
      },
      {
        id: 'gpb-m',
        name: 'Газпромбанк мужа',
        balance: '30,00',
        transactionId: 'gpb-m',
      },
      {
        id: 'mts-m',
        name: 'МТС банк мужа',
        balance: '0,00',
        transactionId: 'mts-m',
      },
      {
        id: 'alfa-card',
        name: 'Альфа-Банк Карта',
        balance: '2,57',
        transactionId: 'alfa-card',
      },
      {
        id: 'yandex-pay',
        name: 'Яндекс Пэй Карта',
        balance: '0,00',
        transactionId: 'yandex-pay',
      },
      {
        id: 'pochtabank-debit-m',
        name: 'ПочтаБанк - дебетовая карта мужа',
        balance: '5 044,00',
        transactionId: 'pochtabank-debit-m',
      },
    ],
    transactionId: 'cards', // ← таблица для всей папки
  },
  {
    id: 'investments',
    icon: '📈',
    name: 'Инвестиции',
    balance: '300 100,41',
    isFolder: true,
    children: [
      {
        id: 'braindox-vc',
        name: 'Braindox.VC',
        balance: '0,00',
        transactionId: 'braindox-vc',
      },
      {
        id: 'tbank-saving',
        name: 'T-Банк Накопительный счет',
        balance: '300 000,00',
        transactionId: 'tbank-saving',
      },
      {
        id: 'first-broker-cny',
        name: 'Первый брокерский (CNY)',
        balance: '8,73',
        transactionId: 'first-broker-cny',
      },
      {
        id: 'first-broker',
        name: 'Первый брокерский',
        balance: '0,00',
        transactionId: 'first-broker',
      },
      {
        id: 'target-broker-hkd',
        name: 'Целевой брокерский (HKD)',
        balance: '0,00 HKD',
        transactionId: 'target-broker-hkd',
      },
      {
        id: 'training',
        name: 'Учебный',
        balance: '0,00',
        transactionId: 'training',
      },
      {
        id: 'iis-usd',
        name: 'ИИС (USD)',
        balance: '0,00 USD',
        transactionId: 'iis-usd',
      },
      { id: 'iis', name: 'ИИС', balance: '0,00', transactionId: 'iis' },
    ],
    transactionId: 'investments', // ← таблица для всей папки
  },
  {
    id: 'credit-cards',
    icon: '🏦',
    name: 'Кредитки',
    balance: '-1 297 326,36',
    isFolder: true,
    children: [],
    transactionId: 'credit-cards', // ← таблица для всей папки
  },
  {
    id: 'big-loans',
    icon: '💸',
    name: 'Большие кредиты',
    balance: '-3 052 887,68',
    isFolder: true,
    children: [
      {
        id: 'sber-mortgage',
        name: 'Сбербанк - ипотека',
        balance: '-1 819 471,81',
        transactionId: 'sber-mortgage',
      },
      {
        id: 'tbank-loan2',
        name: 'T-Банк - Кредит БК 2',
        balance: '-665 320,00',
        transactionId: 'tbank-loan2',
      },
      {
        id: 'alfa-loan4loans',
        name: 'Альфа-Банк - Кредит на кредиты',
        balance: '-336 800,00',
        transactionId: 'alfa-loan4loans',
      },
      {
        id: 'otp-bath',
        name: 'ОТП Банк - Кредит на ванну, сантехнику',
        balance: '-122 499,87',
        transactionId: 'otp-bath',
      },
      {
        id: 'gpb-tech',
        name: 'Газпромбанк - кредит на технику',
        balance: '-108 796,00',
        transactionId: 'gpb-tech',
      },
    ],
    transactionId: 'big-loans', // ← таблица для всей папки
  },
  {
    id: 'services',
    icon: '📚',
    name: 'Сервисы',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'services', // ← таблица для всей папки
  },
  {
    id: 'courses',
    icon: '🎓',
    name: 'Расрочка и кредиты на курсы',
    balance: '-92 276,67',
    isFolder: true,
    children: [
      {
        id: 'otp-junior-fe',
        name: 'ОТП Банк - Профессия Джунior Frontend',
        balance: '-63 770,43',
        transactionId: 'otp-junior-fe',
      },
      {
        id: 'sovcom-devops',
        name: 'Совкомбанк - DevOps инженер. Нетология',
        balance: '-28 506,24',
        transactionId: 'sovcom-devops',
      },
    ],
    transactionId: 'courses', // ← таблица для всей папки
  },
  {
    id: 'network',
    icon: '🌐',
    name: 'Сеть',
    balance: '1 441,38',
    isFolder: true,
    children: [],
    transactionId: 'network', // ← таблица для всей папки
  },
  {
    id: 'pochtabank-loans',
    icon: '🏛️',
    name: 'Кредиты ПочтаБанка',
    balance: '-69 690,39',
    isFolder: true,
    children: [],
    transactionId: 'pochtabank-loans', // ← таблица для всей папки
  },
  {
    id: 'sberbank-loans',
    icon: '🏛️',
    name: 'Кредиты Сбербанка',
    balance: '-1 001 379,85',
    isFolder: true,
    children: [
      {
        id: 'sber-keyboard',
        name: 'Сбербанк - клавиатура, фонарик нал...',
        balance: '-8 453,38',
        transactionId: 'sber-keyboard',
      },
      {
        id: 'sber-nettop1',
        name: 'Сбербанк - неттоп, моник, кронштейн',
        balance: '-53 813,26',
        transactionId: 'sber-nettop1',
      },
      {
        id: 'sber-kitchen',
        name: 'Сбербанк - Кухонька, машинка, чайник',
        balance: '-16 101,63',
        transactionId: 'sber-kitchen',
      },
      {
        id: 'sber-shaver',
        name: 'Сбербанк - Бритва и Тример',
        balance: '-7 423,65',
        transactionId: 'sber-shaver',
      },
      {
        id: 'sber-synology',
        name: 'Сбербанк - Synology DS920+, Seagate',
        balance: '-47 643,97',
        transactionId: 'sber-synology',
      },
      {
        id: 'sber-ipad',
        name: 'Сбербанк - iPad Pro 12.9, чехол, Appl...',
        balance: '-65 539,09',
        transactionId: 'sber-ipad',
      },
      {
        id: 'sber-xiaomi',
        name: 'Сбербанк - Планшет и чехол Xiaomi...',
        balance: '-20 965,57',
        transactionId: 'sber-xiaomi',
      },
      {
        id: 'sber-haier',
        name: 'Сбербанк - Сплит-система Haier AS...',
        balance: '-21 405,70',
        transactionId: 'sber-haier',
      },
      {
        id: 'sber-dyson',
        name: 'Сбербанк - Мультистайлер Dyson Air...',
        balance: '-22 883,91',
        transactionId: 'sber-dyson',
      },
      {
        id: 'sber-guitar',
        name: 'Сбербанк - Акустическая гитара, сто...',
        balance: '-11 041,59',
        transactionId: 'sber-guitar',
      },
      {
        id: 'sber-audio',
        name: 'Сбербанк - Звуковая карта и микрофон...',
        balance: '-29 741,13',
        transactionId: 'sber-audio',
      },
      {
        id: 'sber-toys1',
        name: 'Сбербанк - игрушки, бижутерия, акс...',
        balance: '-22 317,95',
        transactionId: 'sber-toys1',
      },
      {
        id: 'sber-ugreen',
        name: 'Сбербанк - uGreen зарядная станция...',
        balance: '-7 239,15',
        transactionId: 'sber-ugreen',
      },
      {
        id: 'sber-stands',
        name: 'Сбербанк - подставки планшета, дат...',
        balance: '-5 636,43',
        transactionId: 'sber-stands',
      },
      {
        id: 'sber-toys2',
        name: 'Сбербанк - игрушки, мышь, коврик, т...',
        balance: '-8 644,33',
        transactionId: 'sber-toys2',
      },
      {
        id: 'sber-display',
        name: 'Сбербанк - портативный дисплей, п...',
        balance: '-12 390,75',
        transactionId: 'sber-display',
      },
      {
        id: 'sber-speakers',
        name: 'Сбербанк - колонки, стойки, провод...',
        balance: '-18 195,53',
        transactionId: 'sber-speakers',
      },
      {
        id: 'sber-guitar-case',
        name: 'Сбербанк - Кейс для электрогитары...',
        balance: '-8 218,38',
        transactionId: 'sber-guitar-case',
      },
      {
        id: 'sber-electric-guitar',
        name: 'Сбербанк - Электрогитара Caraya E2...',
        balance: '-11 629,17',
        transactionId: 'sber-electric-guitar',
      },
      {
        id: 'sber-photo1',
        name: 'Сбербанк - Фотооборудование для...',
        balance: '-24 822,97',
        transactionId: 'sber-photo1',
      },
      {
        id: 'sber-nettop2',
        name: 'Сбербанк - неттоп, подставка, памя...',
        balance: '-84 415,55',
        transactionId: 'sber-nettop2',
      },
      {
        id: 'sber-lens',
        name: 'Сбербанк - объектив, кронштейн, ка...',
        balance: '-47 381,74',
        transactionId: 'sber-lens',
      },
      {
        id: 'sber-sony',
        name: 'Сбербанк - Sony Alpha A7 III фотока...',
        balance: '-117 459,41',
        transactionId: 'sber-sony',
      },
      {
        id: 'sber-macbook',
        name: 'Сбербанк - макбук с чехлом',
        balance: '-246 412,56',
        transactionId: 'sber-macbook',
      },
    ],
    transactionId: 'sberbank-loans', // ← таблица для всей папки
  },
  {
    id: 'archive',
    icon: '📂',
    name: 'Архив',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'archive', // ← таблица для всей папки
  },
  {
    id: 'homecredit-loans',
    icon: '🏛️',
    name: 'Кредиты HomeCredit',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'homecredit-loans', // ← таблица для всей папки
  },
  {
    id: 'budgets',
    icon: '💰',
    name: 'Бюджеты',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'budgets', // ← таблица для всей папки
  },
  {
    id: 'planned',
    icon: '📅',
    name: 'Запланированные',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'planned', // ← таблица для всей папки
  },
  {
    id: 'plans',
    icon: '📊',
    name: 'Планы',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'plans', // ← таблица для всей папки
  },
  {
    id: 'reports',
    icon: '📝',
    name: 'Отчеты',
    balance: null,
    isFolder: true,
    children: [],
    transactionId: 'reports', // ← таблица для всей папки
  },
];
