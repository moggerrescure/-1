export const AVATARS = [
  {
    id: 'biologist',
    videoFocus: '45% 25%',
    name: 'Д-р Айрис Торн',
    role: 'Биолог & Исследовательница Биосферы',
    category: 'science',
    categoryLabel: 'Биология и Наука',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    videoSrc: './videos/combined_biologist_holding_first.mp4',
    thumbnailSrc: './thumbnails/biologist.jpg',
    croppedAvatarSrc: './avatars_crop/biologist_avatar.jpg',
    duration: '20 сек',
    voiceType: 'Академический, спокойный, женский',
    quote: '«Жизнь находит выход там, где законы физики предсказывают пустоту.»',
    bio: 'Специалист по экстремальным экосистемам и микробиологии. Исследует скрытые связи между почвенными бактериями и глобальным климатом Земли.',
    traits: ['Микробиом', 'Эволюция', 'Экспедиции', 'Биотехнологии'],
    stats: {
      experience: '12 лет',
      focus: 'Биоразнообразие',
      impact: '42 экспедиции'
    },
    interactiveQuestions: [
      { q: 'Что скрывают глубоководные и пещерные экосистемы?', time: 0 },
      { q: 'Как синтетическая биология изменит медицину будущего?', time: 6 },
      { q: 'Какой самый живучий микроорганизм известен науке?', time: 13 }
    ]
  },
  {
    id: 'director',
    videoFocus: '50% 30%',
    name: 'Марго Стерлинг',
    role: 'Кинорежиссёр & Визионер Кадра',
    category: 'cinema',
    categoryLabel: 'Кино и Драматургия',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    videoSrc: './videos/combined_director_swapped.mp4',
    thumbnailSrc: './thumbnails/director.jpg',
    croppedAvatarSrc: './avatars_crop/director_avatar.jpg',
    duration: '20 сек',
    voiceType: 'Выразительный, кинематографичный, женский',
    quote: '«Кадр — это не просто свет и оптика. Это способ заставить сердце зрителя биться в такт автору.»',
    bio: 'Режиссёр фестивального и фантастического кино. Исследует грань между аналоговым визуальным языком и генеративными видео-мирами.',
    traits: ['Светотень', 'Кульминация', 'Киноязык', 'Символизм'],
    stats: {
      experience: '18 лет',
      focus: 'Драматургия',
      impact: '11 кинонаград'
    },
    interactiveQuestions: [
      { q: 'Заменит ли генеративный ИИ живых режиссеров?', time: 0 },
      { q: 'В чем секрет гипнотического визуального ритма?', time: 7 },
      { q: 'Как построить сцену, которую запомнят навсегда?', time: 14 }
    ]
  },
  {
    id: 'pilot',
    videoFocus: '33% 25%',
    name: 'Капитан Скотт Хейз',
    role: 'Шеф-пилот Магистральной Авиации',
    category: 'aviation',
    categoryLabel: 'Авиация и Полёты',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    videoSrc: './videos/combined_pilot_swapped.mp4',
    thumbnailSrc: './thumbnails/pilot.jpg',
    croppedAvatarSrc: './avatars_crop/pilot_avatar.jpg',
    duration: '20 сек',
    voiceType: 'Уверенный, командирский',
    quote: '«На эшелоне 360 нет места панике: небо подчиняется только хладнокровию и строгим протоколам.»',
    bio: 'Ветеран трансатлантических рейсов. Знает аэродинамику и метеорологию так же досконально, как приборную панель своего Боинга.',
    traits: ['Авионика', 'Навигация', 'Метеорология', 'Принятие решений'],
    stats: {
      experience: '9 400 ч',
      focus: 'Трансокеанские трассы',
      impact: '100% безопасность'
    },
    interactiveQuestions: [
      { q: 'Что на самом деле происходит с самолетом в турбулентности?', time: 0 },
      { q: 'Когда пассажирские лайнеры станут полностью беспилотными?', time: 7 },
      { q: 'Как пилоты ориентируются при нулевой видимости?', time: 13 }
    ]
  },
  {
    id: 'mechanic',
    videoFocus: '48% 20%',
    name: 'Аксель Вэнс',
    role: 'Главный Инженер-Мехатроник',
    category: 'engineering',
    categoryLabel: 'Инженерия и Механика',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    videoSrc: './videos/combined_mechanic_videos.mp4',
    thumbnailSrc: './thumbnails/mechanic.jpg',
    croppedAvatarSrc: './avatars_crop/mechanic_avatar.jpg',
    duration: '20 сек',
    voiceType: 'Энергичный, технический',
    quote: '«Если механизм звучит неправильно — металл пытается тебе что-то сказать. Умей слушать.»',
    bio: 'Конструктор турбин, тюнинг-мастер и реставратор сложных силовых установок. Соединяет классическую механику и нейросетевую телеметрию.',
    traits: ['Турбины', 'Телеметрия', 'ДВС & Электротяга', 'Прецизионность'],
    stats: {
      experience: '15 лет',
      focus: 'Двигатели & Редукторы',
      impact: '300+ проектов'
    },
    interactiveQuestions: [
      { q: 'Какой двигатель переживет следующие 50 лет?', time: 0 },
      { q: 'Как выявить микротрещину в металле по звуку детонации?', time: 6 },
      { q: 'Электротяга против водорода: где реальный КПД?', time: 14 }
    ]
  },
  {
    id: 'professor',
    videoFocus: '62% 25%',
    name: 'Проф. Уолтер Финч',
    role: 'Академик & Философ Науки',
    category: 'academic',
    categoryLabel: 'Академическая Наука',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    videoSrc: './videos/combined_professor_203926_204618.mp4',
    thumbnailSrc: './thumbnails/professor.jpg',
    croppedAvatarSrc: './avatars_crop/professor_avatar.jpg',
    duration: '20 сек',
    voiceType: 'Глубокий баритон, размеренный',
    quote: '«Технологический прогресс опережает моральную зрелость человечества — в этом наш главный парадокс.»',
    bio: 'Исследователь эпистемологии и истории научной мысли. Читает лекции о том, как научные революции перекраивали карты цивилизаций.',
    traits: ['Эпистемология', 'История идей', 'Логика', 'Этика ИИ'],
    stats: {
      experience: '28 лет',
      focus: 'Философия разума',
      impact: '4 монографии'
    },
    interactiveQuestions: [
      { q: 'Может ли у искусственного интеллекта возникнуть сознание?', time: 0 },
      { q: 'Какой исторический кризис ближе всего к нашей эпохе?', time: 7 },
      { q: 'Почему человечеству так трудно мыслить на века вперед?', time: 13 }
    ]
  },
  {
    id: 'tailor',
    videoFocus: '50% 25%',
    name: 'Вивьен Сартор',
    role: 'Мастер Bespoke & Модельер',
    category: 'fashion',
    categoryLabel: 'Стиль и Высокая Мода',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    videoSrc: './videos/combined_tailoring_swapped.mp4',
    thumbnailSrc: './thumbnails/tailor.jpg',
    croppedAvatarSrc: './avatars_crop/tailor_avatar.jpg',
    duration: '18 сек',
    voiceType: 'Изысканный, мягкий, женский',
    quote: '«Костюм — это доспехи современного человека. Он формирует вашу осанку, мысли и статус.»',
    bio: 'Создательница штучных гардеробов и исследовательница традиций ручного шва Savile Row. Рассматривает текстиль как скульптуру в движении.',
    traits: ['Bespoke-крой', 'Шерсть Super 180s', 'Анатомический силуэт', 'Эстетика'],
    stats: {
      experience: '16 лет',
      focus: 'High Tailoring',
      impact: '1 200+ костюмов'
    },
    interactiveQuestions: [
      { q: 'Как ткань влияет на психологию уверенности в себе?', time: 0 },
      { q: 'В чем отличие настоящего ручного шва от фабричного?', time: 6 },
      { q: 'Почему классический крой никогда не выйдет из моды?', time: 12 }
    ]
  },
  {
    id: 'teacher',
    videoFocus: '54% 28%',
    name: 'Дана Росс',
    role: 'Вдохновляющая Наставница & Педагог',
    category: 'education',
    categoryLabel: 'Педагогика и Менторство',
    accentColor: '#84cc16',
    glowColor: 'rgba(132, 204, 22, 0.35)',
    videoSrc: './videos/combined_teacher_videos.mp4',
    thumbnailSrc: './thumbnails/teacher.jpg',
    croppedAvatarSrc: './avatars_crop/teacher_avatar.jpg',
    duration: '18 сек',
    voiceType: 'Теплый, мотивирующий, женский',
    quote: '«Учить — не значит заполнять сосуд знаниями. Это значит зажечь факел любопытства.»',
    bio: 'Преподавательница нового поколения, специализирующаяся на развитии критического мышления, адаптивности и исследовательского духа.',
    traits: ['Критическое мышление', 'Эмпатия', 'Эвристика', 'Мотивация'],
    stats: {
      experience: '10 лет',
      focus: 'Современные методики',
      impact: '5 000+ учеников'
    },
    interactiveQuestions: [
      { q: 'Как не потерять интерес к обучению во взрослом возрасте?', time: 0 },
      { q: '3 привычки, которые тренируют гибкость ума каждый день', time: 6 },
      { q: 'Как отличить полезное знание от информационного шума?', time: 12 }
    ]
  },
  {
    id: 'arborist',
    videoFocus: '50% 50%',
    name: 'Сильван Кросс',
    role: 'Дендролог & Хранитель Лесов',
    category: 'ecology',
    categoryLabel: 'Дендрология и Экология',
    accentColor: '#14b8a6',
    glowColor: 'rgba(20, 184, 166, 0.35)',
    videoSrc: './videos/combined_tree_specialist.mp4',
    thumbnailSrc: './thumbnails/arborist.jpg',
    croppedAvatarSrc: './avatars_crop/arborist_avatar.jpg',
    duration: '18 сек',
    voiceType: 'Глубокий, природный, спокойный',
    quote: '«Деревья помнят то, о чем люди давно забыли. Лес — это единая мыслящая сеть.»',
    bio: 'Специалист по здоровью древних деревьев, альпинист-арборист и эксперт по микоризным грибным сетям лесных экосистем.',
    traits: ['Микориза', 'Арбористика', 'Древние деревья', 'Климат леса'],
    stats: {
      experience: '14 лет',
      focus: 'Сохранение реликтовых рощ',
      impact: '80 000 га леса'
    },
    interactiveQuestions: [
      { q: 'Как деревья общаются и передают питательные вещества друг другу?', time: 0 },
      { q: 'В чем секрет деревьев, которые живут по 3 000 лет?', time: 6 },
      { q: 'Как помочь городским деревьям выживать в мегаполисе?', time: 12 }
    ]
  },
  {
    id: 'farmer',
    videoFocus: '52% 25%',
    name: 'Калеб Вэнс',
    role: 'Агротехник & Фермер Новой Волны',
    category: 'agriculture',
    categoryLabel: 'Агротех и Фермерство',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    videoSrc: './videos/combined_farmer_cattle.mp4',
    thumbnailSrc: './thumbnails/farmer.jpg',
    croppedAvatarSrc: './avatars_crop/farmer_avatar.jpg',
    duration: '20 сек',
    voiceType: 'Прямолинейный, искренний',
    quote: '«Земля не прощает суеты. Чтобы получить честный урожай, нужно уважать ритмы природы.»',
    bio: 'Практик регенеративного земледелия, сочетающий традиционный выпас скота со спутниковым мониторингом влажности почв.',
    traits: ['Регенерация почв', 'Животноводство', 'IoT на полях', 'Биодинамика'],
    stats: {
      experience: '20 лет',
      focus: 'Органика & Агротех',
      impact: '1 500 гектаров'
    },
    interactiveQuestions: [
      { q: 'Как технологии помогают сохранить плодородие земли без химии?', time: 0 },
      { q: 'Каково это — руководить современной фермой в XXI веке?', time: 7 },
      { q: 'Будущее натуральных продуктов в эпоху альтернативных белков', time: 14 }
    ]
  },
  {
    id: 'showreel',
    videoFocus: '50% 50%',
    name: 'Nexus All-Stars',
    role: 'Общий Шоурил Всех Аватаров',
    category: 'showcase',
    categoryLabel: 'Мультиверс Аватаров',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.35)',
    videoSrc: './videos/combined_videos.mp4',
    thumbnailSrc: './thumbnails/showreel.jpg',
    croppedAvatarSrc: './avatars_crop/showreel_avatar.jpg',
    duration: '16 сек',
    voiceType: 'Динамичный, полифонический',
    quote: '«9 экспертов, 9 миров знаний. Переключайтесь мгновенно и исследуйте грани человеческого опыта.»',
    bio: 'Объединенная компиляция всех цифровых личностей платформы: погружение в ключевые темы каждого аватара за 16 секунд.',
    traits: ['Все аватары', 'Коллаборация', 'Шоурил', 'Nexus Hub'],
    stats: {
      experience: '9 личностей',
      focus: 'Полный обзор',
      impact: 'Синхронизация'
    },
    interactiveQuestions: [
      { q: 'Какой аватар больше всего подходит под вашу задачу?', time: 0 },
      { q: 'Как происходит мгновенное переключение контекста?', time: 5 },
      { q: 'Смотреть общий микс всех персонажей', time: 10 }
    ]
  }
];
