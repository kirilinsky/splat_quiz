import image1 from '../assets/images/quiz/d-1.jpg'

import image18 from '../assets/images/quiz/q-18.jpg'

export const secondQuestions = [
  {
    id: 0,
    question: 'Сколько раз в день Вы чистите зубы?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0, yaIndex: 'question1',
    answers: [
      {
        questionId: 0,
        id: 10,
        answer: 'не чищу зубы',
        description:
          'Рекомендация стоматологов чистить зубы дважды в день основана на научных исследованиях — доказано, что патогенные бактерии в зубном налете могут спровоцировать проблемы со здоровьем всего организма.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'answer1_question1',
      },
      {
        questionId: 0,
        id: 11,
        answer: '1 раз в день',
        description:
          'Одной процедуры в день недостаточно: мягкий налет от еды через 8 часов после чистки затвердевает и превращается в зубной камень, который нельзя удалить щеткой. Зубной налет - питательная среда для бактерий, которые пагубно влияют на состояние полости рта и могут спровоцировать проблемы со здоровьем всего организма в целом. ',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'answer2_question1',
      },
      {
        questionId: 0,
        id: 12,
        answer: '2 раза в день',
        description:
          'Отлично! Вы точно следуете базовой рекомендации стоматологов — чистить зубы щеткой утром и вечером. Еще один совет специалистов: после еды используйте специализированные средства гигиены — очищающие пенки, зубную нить и ополаскиватели полости рта. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question1'
      },
      {
        questionId: 0,
        id: 13,
        answer: '3 раза в день',
        description:
          'Вы молодец! Можно даже немного расслабиться. Если вы не носите брекеты — лучше чистить зубы дважды в день, утром и вечером, чтобы не вызвать повышенную чувствительность эмали и десен. А после еды применять ополаскиватели для полости рта или очищающие пенки в сочетании с зубной нитью. ',
        correctAnswer: true,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer4_question1'
      },
      {
        questionId: 0,
        id: 14,
        answer: 'больше 3-х раз в день',
        description:
          'Стоит немного сбавить темп. Специалисты рекомендуют чистить зубы щеткой 2-3 раза в день, чтобы частое механическое воздействие не вызвало повышенную чувствительность эмали и десен. В течение дня после еды используйте ополаскиватель или очищающую пенку, а межзубные промежутки прочищайте зубной нитью или ёршиками. Но если вы носите брекеты - пожалуйста, чистите зубы и орто-конструкцию согласно рекомендациям ортодонта. ',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer5_question1'
      },
    ],
  },
  {
    id: 1,
    question: 'Сколько времени Вы тратите на чистку зубов?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question2',
    answers: [
      {
        questionId: 1,
        id: 101,
        answer: 'меньше 2 минут',
        description:
          'Стоматологи рекомендуют чистить зубы 2-3 минуты. Половина населения Земли — по данным ВОЗ —  тратит на процедуру примерно 46 секунд. Почему этого мало? Недостаточное очищение зубов приводит к образованию твердого налета и зубного камня. Бактерии в зубном налете провоцируют кариес, неприятный запах изо рта, кровоточивость десен и потемнение зубов. А в долгосрочной перспективе из-за спешки при чистке зубов может развиться гингивит и пародонтит.  ',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'answer1_question2',
      },
      {
        questionId: 1,
        id: 102,
        answer: '2 минуты',
        description:
          'Отлично, вы выполняете необходимый минимум! Осталось чуть-чуть до идеала: стоматологи советуют уделять чистке зубов не менее двух и не более трех минут. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question2'
      },
      {
        questionId: 1,
        id: 103,
        answer: 'больше 2 минут',
        description:
          'Вы точно выполняте рекомендации стоматологов — идеальный интервал для чистки зубов составляет не менее двух и не более трех минут.',
        correctAnswer: true,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question2'
      },
    ],
  },
  {
    id: 2,
    question: 'Используете ли Вы дополнительные средства гигиены?',
    sourceImage: image1,
    isSingleAnswer: false,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question3',
    answers: [
      {
        questionId: 2,
        id: 201,
        answer: 'Ополаскиватель для полости рта',
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true,
        neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question3'
      },
      {
        questionId: 2,
        id: 202,
        answer: 'Зубная нить',
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question3'
      },
      {
        questionId: 2,
        id: 203,
        answer: 'Очищающая пенка для полости рта',
        neutral: true,
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question3'
      },
      {
        questionId: 2,
        id: 204,
        answer: 'Межзубные ершики',
        neutral: true,
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer4_question3'
      },
      {
        questionId: 2,
        id: 205,
        answer: 'Отбеливающее средство для зубов',
        neutral: true,
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer5_question3'
      },
      {
        questionId: 2,
        id: 206,
        answer: 'Реминерализующий гель / паста',
        neutral: true,
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer6_question3'
      },
      {
        questionId: 2,
        id: 207,
        answer: 'Ирригатор',
        neutral: true,
        description:
          'Все правильно! Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer7_question3'
      },
      {
        questionId: 2,
        id: 208,
        answer: 'Ничем не пользуюсь',
        description:
          'Зубная нить или ершики помогут очистить межзубные промежутки после еды, а ополоскиватель и пенка смоют патогенные бактерии и уберут мягкий налет. Если у вас стоят брекет-системы, коронки, имплантаты, мостовидные протезы – используйте ирригатор для удаления остатков пищи и гидромассажа десен.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'answer8_question3'
      },
    ],
  },
  {
    id: 3,
    question: 'Какой зубной щеткой Вы чистите зубы?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: "question4",
    answers: [
      {
        questionId: 3,
        id: 301,
        answer: 'ручная',
        description: 'Обычная зубная щетка — изобретение, которое в разы повысило наш уровень гигиены. Не забывайте менять щетку каждые три месяца или чаще, если щетина изнашивается быстрее, и соблюдать правильную технику чистки зубов. Для примера мы собрали здесь движения по стандартному методу чистки зубов.',
        correctAnswer: true, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question4'
      },
      {
        questionId: 3,
        id: 302,
        answer: 'звуковая, ультразвуковая',
        description:
          'Современные гаджеты - отличный выбор! Щетинки звуковой щетки совершают до 40 тысяч колебаний в минуту, удаляя с зубов налет и остатки пищи. Ультразвуковые щетки бесшумно разрушают налет ультразвуком. Будьте внимательны — УЗ- щетки не всегда подходят обладателям чувствительной эмали, пломб и ортодонтических конструкций. Перед применением такой щетки стоит проконсультироваться со стоматологом. ',
        correctAnswer: false, neutral: true,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer2_question4'
      },
      {
        questionId: 3,
        id: 303,
        answer: 'электрическая',
        description: 'Круто, что вы вкладываетесь в гаджеты для гигиены полости рта! Электрические щетки облегчают процесс чистки зубов за счет звукового таймера и датчика давления, который дает сигнал при чересчур сильном нажатии на зубы. Это удобно.  Но электрическая щетка требует особой техники чистки — ей обучают стоматологи-гигиенисты. ',
        correctAnswer: false,
        neutral: true,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer3_question4'
      },
    ],
  },
  {
    id: 4,
    question: 'Какой зубной пастой Вы чистите зубы?',
    sourceImage: image1,
    isSingleAnswer: false,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: "question5",
    answers: [
      {
        questionId: 4,
        id: 301,
        answer: 'с фтором',
        description:
          'Фторид укрепляет эмаль, не дает размножаться патогенным бактериям и снижает чувствительность зубов. Правильно подобрать пасту с фтором поможет онлайн-опросник. ',
        correctAnswer: true,
        neutral: true,
        status: false,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer1_question5'
      },
      {
        questionId: 4,
        id: 302,
        answer: 'с кальцием',
        description:
          'Кальций укрепляет эмаль, снижает чувствительность зубов и обладает противокариесным действием.',
        correctAnswer: true, neutral: true,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer2_question5'
      },
      {
        questionId: 4,
        id: 303,
        answer: 'с травами',
        description:
          'Натуральные эфирные масла и экстракты растений обладают мягким антибактериальным действием, препятствуют образованию патогенных бактерий и освежают дыхание.',
        correctAnswer: true, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer3_question5'
      },
      {
        questionId: 4,
        id: 304,
        answer: 'с антисептиком',
        description:
          'Зубные пасты с антисептиками — хлоргексидином или триклозаном — нельзя применять без назначения специалиста. При длительном использовании такие пасты могут вызвать дисбактериоз полости рта.',
        correctAnswer: false, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'answer4_question5'
      },
      {
        questionId: 4,
        id: 305,
        answer: 'отбеливающей',
        description:
          'Безопасная отбеливающая паста должна содержать мягкие абразивы округлой формы, натуральные ферменты или пероксиды, чтобы бережно удалять налет и пигментированные пятна на зубах.',
        correctAnswer: true,
        neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer5_question5'
      },
      {
        questionId: 4,
        id: 306,
        answer: 'для чувствительных зубов',
        description:
          'Паста для чувствительных зубов должна содержать натуральные ферменты и полирующие частицы округлой формы, чтобы бережно удалять налет, а также ионы калия для снижения чувствительности зубов. ',
        correctAnswer: true,
        status: false,
        neutral: true,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer6_question5'

      },
      {
        questionId: 4,
        id: 307,
        answer: 'Затрудняюсь ответить',
        description: 'Активные компоненты пасты должны соответствовать вашим задачам - например, укрепление эмали. В состав безопасной зубной пасты входят мягкие абразивы округлой формы, натуральные ферменты или пероксиды, экстракты растений, гидроксиапатит кальция или фтор. ',
        correctAnswer: true,
        neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer7_question5'

      },
    ],
  },
  {
    id: 5,
    question: 'Ваши зубы реагируют на сладкое или кислое?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question6',
    answers: [
      {
        questionId: 5,
        id: 501,
        answer: 'да',
        description:
          'Резкая болезненная реакция зубов на кислое или сладкое может означать развитие кариеса, эрозии, очаговой деминерализации, клиновидных дефектов, гиперчувствительности зубов.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question6'
      },
      {
        questionId: 5,
        id: 502,
        answer: 'нет',
        description:
          'Отлично! Здоровые зубы не должны реагировать на кислое и сладкое.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer2_question6'

      },
      {
        questionId: 5,
        id: 503,
        answer: 'иногда',
        description:
          'Неприятная реакция зубов на кислое или сладкое может быть признаком кариеса или гиперчувствительности зубов. ',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer3_question6'

      },
    ],
  },
  {
    id: 6,
    question: 'А на холодное?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question7',
    answers: [
      {
        questionId: 6,
        id: 601,
        answer: 'нет',
        description:
          'Отлично! Здоровые зубы не должны болезненно реагировать на холодное.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer1_question7'
      },
      {
        questionId: 6,
        id: 602,
        answer: 'да, иногда',
        description:
          'Обостренная реакция на холодные напитки и продукты — возможный симптом очаговой деминерализации зубов, гиперестезии зубов, патологической стираемости зубов.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question7'
      },
      {
        questionId: 6,
        id: 603,
        answer: 'да, всегда',
        description:
          'Обостренная реакция на холодные напитки и продукты может говорить о гиперестезии зубов, патологической стираемости зубов, очаговой деминерализации зубов, клиновидных дефектах. Возможно, необходима реминерализующая терапия — укрепление эмали.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question7'
      },
    ],
  },
  {
    id: 7,
    question:
      'Ощущаете ли Вы повышенную чувствительность зубов во время их чистки?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question8',
    answers: [
      {
        questionId: 7,
        id: 701,
        answer: 'нет',
        description:
          'Рады за вас! Повышенная чувствительность — признак нарушения минерального состава эмали или ее повреждения (сколы, трещины, клиновидные дефекты). Для профилактики рекомендуем использовать курсами зубные пасты, ополаскиватели и гели с минеральным составом: кальцием, гидроксиапатитом кальция, магнием.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question8'
      },
      {
        questionId: 7,
        id: 702,
        answer: 'да, иногда',
        description:
          'Повышенная чувствительность — признак нарушения минерального состава эмали или ее повреждения (сколы, трещины, клиновидные дефекты). Для профилактики рекомендуем постоянно использовать реминерализирующие зубные пасты, ополаскиватели и гели с минеральным составом: кальцием, гидроксиапатитом кальция, магнием.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question8'
      },
      {
        questionId: 7,
        id: 703,
        answer: 'да, часто',
        description:
          'Повышенная чувствительность — признак нарушения минерального состава эмали или ее повреждения (сколы, трещины, клиновидные дефекты). Возможно, необходима реминерализующей терапии — укрепление эмали. В домашнем уходе рекомендуем использовать зубные пасты, ополаскиватели и гели с минеральным составом: кальцием, гидроксиапатитом кальция, магнием.',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question8'
      },
    ],
  },
  {
    id: 8,
    question: 'Замечали Вы у себя кровоточивость десен?',
    sourceImage: image1,
    isSingleAnswer: false,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question9',
    answers: [
      {
        questionId: 8,
        id: 801,
        answer: 'нет',
        description:
          'Замечательно! У вас нет признаков заболевания десен — пародонтита, гингивита. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question9'
      },
      {
        questionId: 8,
        id: 802,
        answer: 'да, при чистке зубов',
        description:
          'Возможно, вы слишком сильно давите щеткой или делаете неправильные движения во время чистки, что травмирует десны и вызывает кровоточивость. Технике чистки зубов вас может обучить стоматолог.',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer2_question9'
      },
      {
        questionId: 8,
        id: 803,
        answer: 'да, при приеме твердой пищи',
        description:
          'В норме здоровая десна не кровоточит при приеме твердой пищи. Такой симптом может говорить о хроническом заболевании десен —пародонтите, гингивите. ',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer3_question9'
      },
      {
        questionId: 8,
        id: 804,
        answer: 'всегда',
        description:
          'Постоянная кровоточивость говорит о хроническом заболевании десен —пародонтите, гингивите. Возможно, стоит пройти дополнительную диагностику, чтобы устранить все факторы риска, а также комплекс профессиональной гигиены полости рта и противовоспалительной терапии. ',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer4_question9'
      },
      {
        questionId: 8,
        id: 805,
        answer: 'иногда',
        description:
          'Периодическая кровоточивость может свидетельствовать заболевания десен (гингивита, пародонтита) или травмы из-за неправильных движений щеткой. Стоматолог проведет диагностику, определит причину и обучит вас технике чистки зубов.',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 1,
        hygieneLevel: 0,
        yaIndex: 'answer5_question9'
      },
    ],
  },
  {
    id: 9,
    question: 'Ваш режим питания - это... ',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question10',
    answers: [
      {
        questionId: 9,
        id: 901,
        answer: 'завтрак, обед и ужин',
        description:
          'Трехразовый режим питания полезен для зубов. Главное —  избегать частых перекусов. Стоматологи рекомендуют делать перерывы в 3–4 часа между приемами пищи, чтобы во рту успел восстановиться нормальный уровень pH и запустился процесс естественной реминерализации эмали слюной.',
        correctAnswer: true,
        neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer1_question10'
      },
      {
        questionId: 9,
        id: 902,
        answer: 'завтрак и обед / завтрак и ужин / обед и ужин',
        description:
          ' Стоматологи рекомендуют делать перерывы в 3–4 часа между приемами пищи, чтобы во рту успел восстановиться нормальный уровень pH и запустился процесс естественной реминерализации эмали слюной. При интервальной системе питания важно не перекусывать слишком часто — это вредно для зубов и повышает риск кариеса. Если вы выдерживаете рекомендованный специалистами интервал — поводов для беспокойства нет.',
        correctAnswer: false,
        status: false, neutral: true,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question10'
      },
      {
        questionId: 9,
        id: 903,
        answer: 'только завтрак/обед/ужин',
        description:
          'Стоматологи рекомендуют делать перерывы в 3–4 часа между приемами пищи, чтобы во рту успел восстановиться нормальный уровень pH и запустился процесс естественной реминерализации эмали слюной. Если вы едите раз в день, но при этом часто  перекусываете — это вредно для зубов и повышает риск кариеса. ',
        correctAnswer: false,
        status: false, neutral: true,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question10'
      },
    ],
  },
  {
    id: 10,
    question: 'Делаете ли Вы перекусы в течение дня?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question11',
    answers: [
      {
        questionId: 10,
        id: 1001,
        answer: '1 раз в день',
        description:
          'Стоматологи рекомендуют даже 2 перекуса в день. Но между приемами пищи должно пройти не менее 3–4 часов, чтобы во рту восстанавился нормальный уровень pH и запустился процесс естественной реминерализации эмали слюной. Перекус должен занимать 5–10 минут и состоять из полезных продуктов: творога, йогурта, орехов, сухофруктов, ягод, свежих овощей или фруктов.',
        correctAnswer: false, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question11'
      },
      {
        questionId: 10,
        id: 1002,
        answer: '2 раза в день',
        description:
          'Идеально! По мнению стоматологов, два перекуса в день — оптимально. Но между приемами пищи должно пройти не менее 3–4 часов, чтобы во рту восстанавился нормальный уровень pH и запустился процесс естественной реминерализации эмали слюной. Перекус должен занимать 5–10 минут и состоять из полезных продуктов: творога, йогурта, орехов, сухофруктов, ягод, свежих овощей или фруктов.',
        correctAnswer: true, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0, yaIndex: 'answer2_question11'
      },
      {
        questionId: 10,
        id: 1003,
        answer: '3 и больше раз в день',
        description:
          'Стоматологи рекомендуют 2 перекуса в день. Но между приемами пищи должно пройти не менее 3–4 часов, чтобы во рту восстанавился нормальный уровень pH и запустился процесс естественной реминерализации эмали слюной. Перекус должен занимать 5–10 минут и состоять из полезных продуктов: творога, йогурта, орехов, сухофруктов, ягод, свежих овощей или фруктов.',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question11'
      },
    ],
  },
  {
    id: 11,
    question: 'Чем вы обычно перекусываете?',
    sourceImage: image1,
    isSingleAnswer: false,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question12',
    answers: [
      {
        questionId: 11,
        id: 1101,
        answer: 'творог, натуральный йогурт, кефир, ряженка',
        description:
          'Молочные продукты обогащают организм кальцием и другими необходимыми микроэлементами.',
        correctAnswer: true,
        status: false,
        neutral: true,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question12'
      },
      {
        questionId: 11,
        id: 1102,
        answer: 'сухофрукты, орехи',
        description:
          ' Такой перекус обогащает организм витаминами и микроэлементами. Будет здорово добавить еще одну полезную привычку — споласкивать рот водой или очищающей пенкой после каждого перекуса. ',
        correctAnswer: true, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question12'
      },
      {
        questionId: 11,
        id: 1103,
        answer: 'сухарики, чипсы, соленые орешки и соленая рыбка',
        description:
          'Такой перекус - риск для  зубов. Попробуйте заменить его творогом, ягодами или сухофруктами. Еще одна полезная привычка — споласкивать рот водой или очищающей пенкой после каждого перекуса.',
        correctAnswer: false,
        status: false, neutral: true,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question12'
      },
      {
        questionId: 11,
        id: 1104,
        answer: 'торты, пирожные, конфеты и печенье',
        description:
          'Сладкая пища служит питательной средой для патогенных бактерий. Попробуйте заменить сладкое творогом, ягодами или сухофруктами. Еще одна полезная привычка — споласкивать рот водой или очищающей пенкой после каждого перекуса.',
        correctAnswer: false,
        status: false, neutral: true,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer4_question12'
      },
      {
        questionId: 11,
        id: 1105,
        answer: 'чай, кофе',
        description:
          'Постарайтесь пить 1-2 чашки чая или кофе в день - эти напитки содержат красящие и дубильные вещества, из-за которых зубная эмаль темнеет или желтеет. Возьмите за правило после красящих напитков споласкивать рот водой, а еще лучше —  очищающей пенкой. ',
        correctAnswer: false, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer5_question12'
      },
      {
        questionId: 11,
        id: 1106,
        answer: 'лапша, картошка и супы быстрого приготовления',
        description:
          'Попробуйте заменить такой перекус творогом, ягодами или сухофруктами. Еще одна полезная привычка — споласкивать рот водой или очищающей пенкой после каждого перекуса.',
        correctAnswer: false, neutral: true,
        status: false,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer6_question12'
      },
      {
        questionId: 11,
        id: 1107,
        answer: 'газировка, сладкие напитки, соки',
        description:
          'Такие напитки — источник кислоты, которая вредит зубной эмали. Попробуйте сократить потребление или отказаться от газировки. А сладких напитков споласкивать рот водой или очищающей пенкой. ',
        correctAnswer: false, neutral: true,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer7_question12'
      },
      {
        questionId: 11,
        id: 1108,
        answer: 'свежие овощи и фрукты, ягоды',
        description:
          'Твердые овощи и фрукты пополняют запас полезных веществ в организме и очищают зубы от налета. Еще одна полезная привычка — споласкивать рот водой или очищающей пенкой после каждого перекуса.',
        correctAnswer: true,
        status: false, neutral: true,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer8_question12'
      },
    ],
  },
  {
    id: 12,
    question: 'Пьете ли Вы газированные или сладкие напитки?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question13',
    answers: [
      {
        questionId: 12,
        id: 1201,
        answer: 'нет',
        description:
          'Так держать! Отказавшись от газированных и сладких напитков, вы не подкармливаете сахаром патогенные микроорганизмы. Кислоты, которые выделяют эти бактерии, разрушает зубную эмаль и приводят к кариесу, деминерализации эмали и повышению чувствительности зубов. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question13'
      },
      {
        questionId: 12,
        id: 1202,
        answer: 'да, иногда',
        description:
          'Газированные и сладкие напитки содержат сахар, углекислый газ и ортофосфорную кислоту, что пагубно влияет на зубы. Перерабатывая сахар, патогенные микроорганизмы выделяют разрушительные для зубной эмали кислоты. Чтобы сохранить здоровье зубов, мы рекомендуем сократить потребление таких напитков и перейти на обычную воду. ',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question13'
      },
      {
        questionId: 12,
        id: 1203,
        answer: 'да, часто',
        description:
          'Газированные и сладкие напитки содержат сахар, углекислый газ и ортофосфорную кислоту, что пагубно влияет на зубы. Перерабатывая сахар, патогенные микроорганизмы выделяют разрушительные для зубной эмали кислоты. Чтобы сохранить здоровье зубов, мы рекомендуем сократить потребление таких напитков и перейти на обычную воду. ',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question13'
      },
    ],
  },
  {
    id: 13,
    question: 'Употребляете ли Вы твердые фрукты и овощи?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    yaIndex: 'question14',
    answers: [
      {
        questionId: 13,
        id: 1301,
        answer: 'нет',
        description:
          'А давайте попробуем? Твердая волокнистая пища способствует очищению зубов от мягкого налета и стимулирует слюноотделение. Слюна помогает естественной реминерализации зубов и дает нагрузку для жевательных мышц. Это особенно важно для детей в период смены молочных зубов на постоянные — такая нагрузка формирует правильный прикус. Мы рекомендуем есть яблоки, груши, огурцы, редис и морковь, но обязательно в сыром виде. ',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 1,
        yaIndex: 'answer1_question14'
      },
      {
        questionId: 13,
        id: 1302,
        answer: 'да',
        description:
          'И это правильно! Твердая волокнистая пища способствует очищению зубов от мягкого налета и стимулирует слюноотделение. Слюна помогает естественной реминерализации зубов и дает нагрузку для жевательных мышц. Это особенно важно для детей в период смены молочных зубов на постоянные — такая нагрузка формирует правильный прикус. Мы рекомендуем есть яблоки, груши, огурцы, редис и морковь, но обязательно в сыром виде. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question14'
      },
      {
        questionId: 13,
        id: 1303,
        answer: 'иногда',
        description:
          ' Чем чаще, тем лучше! Твердая волокнистая пища способствует очищению зубов от мягкого налета и стимулирует слюноотделение. Слюна помогает естественной реминерализации зубов и дает нагрузку для жевательных мышц. Это особенно важно для детей в период смены молочных зубов на постоянные — такая нагрузка формирует правильный прикус. Мы рекомендуем есть яблоки, груши, огурцы, редис и морковь, но обязательно в сыром виде. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question14'
      },
    ],
  },
  {
    id: 14,
    question: 'Сколько воды вы пьете в течение дня?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,

    yaIndex: 'question15',
    answers: [
      {
        questionId: 14,
        id: 1401,
        answer: '0,5 - 1 л',
        description:
          'Недостаток воды замедляет обмен микроэлементов, которые необходимы для здоровья зубов и десен. Мы рекомендуем рассчитать вашу суточную питьевую норму по формуле: 30 мл воды на 1 кг веса тела. ',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer1_question15'
      },
      {
        questionId: 14,
        id: 1402,
        answer: '1 - 1,5 л',
        description:
          'Возможно, вы пьете недостаточно воды в день. Это замедляет обмен микроэлементов, которые необходимы для здоровья зубов и десен. Мы рекомендуем рассчитать вашу суточную питьевую норму по формуле: 30 мл воды на 1 кг веса тела. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer2_question15'
      },
      {
        questionId: 14,
        id: 1403,
        answer: '1,5 - 2 л',
        description:
          'Достаточный объем воды способствует быстрому обмену веществ и усвоению микроэлементов, которые необходимы для здоровья зубов и десен. Проверьте вашу суточную питьевую норму по формуле: 30 мл воды на 1 кг веса тела. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question15'
      },
      {
        questionId: 14,
        id: 1404,
        answer: 'Затрудняюсь ответить',
        description: 'Достаточный объем воды способствует быстрому обмену веществ и усвоению микроэлементов, которые необходимы для здоровья зубов и десен. Мы рекомендуем рассчитать вашу суточную питьевую норму по формуле: 30 мл воды на 1 кг веса тела. ',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer4_question15'
      },
    ],
  },
  {
    id: 15,
    question: 'Вы жуете жевательную резинку?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,

    yaIndex: 'question16',
    answers: [
      {
        questionId: 15,
        id: 1501,
        answer: 'нет',
        description:
          'Это не так, жвачка не может починить вред вашим зубам! Некоторые стоматологи рекомендуют жевать жевательную резинку после каждого приема пищи по 5-10 минут 6 раз в день. Но не больше. Жвачка без сахара с содержанием ксилита снижает рН слюны, способствует очищению зубов от остатков пищи и естественной реминерализации эмали. Впрочем, очищающая пенка справится с этим эффективнее, быстрее и безопаснее.',
        correctAnswer: false,
        status: false,
        sensitivity: 0,
        caries: 1,
        inflammationAndBleeding: 0,
        hygieneLevel: 1,
        yaIndex: 'answer1_question16'
      },
      {
        questionId: 15,
        id: 1502,
        answer: 'иногда бывает',
        description:
          'Некоторые стоматологи рекомендуют жевать жевательную резинку после каждого приема пищи по 5-10 минут 6 раз в день. Но не больше. Жвачка без сахара с содержанием ксилита снижает рН слюны, способствует очищению зубов от остатков пищи и естественной реминерализации эмали. Впрочем, очищающая пенка справится с этим эффективнее, быстрее и безопаснее.',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 1,
        yaIndex: 'answer2_question16'
      },
      {
        questionId: 15,
        id: 1503,
        answer: 'да, часто',
        description:
          'Некоторые стоматологи рекомендуют жевать жевательную резинку после каждого приема пищи по 5-10 минут 6 раз в день. Но не больше. Жвачка без сахара с содержанием ксилита снижает рН слюны, способствует очищению зубов от остатков пищи и естественной реминерализации эмали. Впрочем, очищающая пенка справится с этим эффективнее, быстрее и безопаснее. ',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question16'
      },
    ],
  },
  {
    id: 16,
    question: 'Курите ли вы?',
    sourceImage: image1,
    isSingleAnswer: true,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,

    yaIndex: 'question18',
    answers: [
      {
        questionId: 16,
        id: 1801,
        answer: 'да, часто',
        description:
          'наверно ашкудишки свои куришь',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'answer1_question18'
      },
      {
        questionId: 16,
        id: 1802,
        answer: 'да, редко',
        description:
          'ок да',
        correctAnswer: false,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding:1,
        hygieneLevel: 1,
        yaIndex: 'answer2_question18'
      },
      {
        questionId: 16,
        id: 1803,
        answer: 'нет',
        description:
          'это good',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'answer3_question18'
      },
    ],
  },
  {
    id: 17,
    question: 'Ваши физические параметры?',
    subtitle: 'Позволяет оценить риски развития заболеваний полости рта.',
    sourceImage: image1,
    isSingleAnswer: false,
    pointSensitivity: 0,
    pointCaries: 0,
    pointInflammationAndBleeding: 0,
    pointHygieneLevel: 0,
    required: true,
    answers: [],
    yaIndex: 'question17'
  },
  {
    id: 18,
    question: 'Укажите регион проживания',
    subtitle: 'Место вашего проживания помогает определить уровень фтора, от чего зависит риск развития кариеса',
    sourceImage: image18,
    isSingleAnswer: false,
    pointSensitivity: 1,
    pointCaries: 1,
    pointInflammationAndBleeding: 1,
    pointHygieneLevel: 1,
    yaIndex: 'question18',
    required: false,
    answers: [
      {
        questionId: 18,
        id: 1701,
        answer: 'Да 2',
        description: '',
        correctAnswer: true,
        status: false,
        sensitivity: 1,
        caries: 1,
        inflammationAndBleeding: 1,
        hygieneLevel: 1,
        yaIndex: 'yes_question18'
      },
      {
        questionId: 18,
        id: 1702,
        answer: 'Нет',
        description: '',
        correctAnswer: true,
        status: false,
        sensitivity: 0,
        caries: 0,
        inflammationAndBleeding: 0,
        hygieneLevel: 0,
        yaIndex: 'no_question18'
      },
    ],
  },
]


