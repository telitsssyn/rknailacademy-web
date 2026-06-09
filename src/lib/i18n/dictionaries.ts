// All translatable strings for the website, organised by section.

export type Locale = "ru" | "en" | "kk";

type ServiceCategory = "all" | "manicure" | "pedicure";

export type Dictionary = {
  nav: { portfolio: string; training: string; services: string; about: string; contacts: string };
  hero: {
    title: string;
    titleAccent: string;
    subtitle: string;
    stats: readonly { value: string; label: string }[];
    heroImageAlt: string;
  };
  features: {
    heading: string;
    items: readonly { num: string; title: string; text: string }[];
  };
  reels: { heading: string; action: string };
  reviews: {
    heading: string;
    action: string;
    items: readonly { author: string; date: string; rating: number; text: string }[];
  };
  gallery: { heading: string; action: string; itemAlt: string };
  courses: {
    heading: string;
    action: string;
    detailsBtn: string;
    items: readonly { name: string; description: string; price: string; image: string }[];
  };
  services: {
    heading: string;
    action: string;
    bookBtn: string;
    categories: readonly { id: ServiceCategory; label: string }[];
    items: readonly { name: string; price: string; category: "manicure" | "pedicure"; image: string }[];
  };
  about: { heading: string; paragraphs: readonly string[]; photoAlt: string };
  location: { heading: string; mapTitle: string };
  footer: { privacy: string; madeBy: string };
  buttons: { bookTraining: string; bookService: string; signUp: string };
  whatsapp: {
    bookTraining: string;
    bookService: string;
    bookServiceFor: string;
    bookCourse: string;
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    sections: readonly {
      title: string;
      paragraphs: readonly string[];
      bullets?: readonly string[];
    }[];
    lastUpdated: string;
  };
  site: {
    brandTop: string;
    brandAccent: string;
    addressLine1: string;
    addressLine2: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  /* ─────────────────────────── RUSSIAN ─────────────────────────── */
  ru: {
    /* Navigation */
    nav: {
      portfolio: "Портфолио",
      training: "Обучение",
      services: "Услуги",
      about: "Обо мне",
      contacts: "Контакты",
    },

    /* Hero */
    hero: {
      title: "Авторская академия",
      titleAccent: "Раймы Курашовны",
      subtitle:
        "20+ лет опыта, индивидуальный подход и методика, которая превращает новичков в уверенных профессионалов. А ещё ногтевой сервис для ваших рук.",
      stats: [
        { value: "20+", label: "лет опыта" },
        { value: "100+", label: "выпускников" },
        { value: "✓", label: "Сертификаты" },
      ],
      heroImageAlt: "Райма Курашовна в академии",
    },

    /* Features */
    features: {
      heading: "Почему выбирают нас",
      items: [
        {
          num: "01",
          title: "Опыт, которому можно доверять",
          text: "Райма Курашовна — мастер с многолетней практикой и постоянно совершенствует свои навыки.",
        },
        {
          num: "02",
          title: "Сертификат об окончании обучения",
          text: "После курса вы получаете документ, подтверждающий вашу квалификацию.",
        },
        {
          num: "03",
          title: "Индивидуальный подход к каждому",
          text: "Программа подстраивается под ваш уровень — от новичка до опытного мастера.",
        },
        {
          num: "04",
          title: "Поддержка после обучения",
          text: "Остаёмся на связи и помогаем в первые самостоятельные шаги в профессии.",
        },
      ],
    },

    /* Instagram Reels */
    reels: {
      heading: "Как это выглядит",
      action: "Смотреть в Instagram",
    },

    /* Reviews */
    reviews: {
      heading: "Отзывы",
      action: "Смотреть все отзывы в 2ГИС",
      items: [
        {
          author: "Салтанат Шайнурат",
          date: "27 июня 2024 года",
          rating: 5,
          text: "Была на маникюре, мастер Рай, отличное обслуживание. Комфортное место. Качественная работа, рекомендую.",
        },
        {
          author: "Т Т",
          date: "27 июня 2024 года",
          rating: 5,
          text: "Была на маникюре перед Новым Годом. Делала без покрытия. Всё аккуратно. Очень довольна, обязательно приду ещё.",
        },
        {
          author: "Elena Klova",
          date: "27 июня 2024 года",
          rating: 5,
          text: "Так хорошо, что хочется вернуться. Профессиональный мастер, приятный интерьер, всё стерильно. Рекомендую.",
        },
      ],
    },

    /* Gallery */
    gallery: {
      heading: "Наши работы",
      action: "Вся галерея",
      itemAlt: "Работа",
    },

    /* Courses */
    courses: {
      heading: "Каталог курсов",
      action: "Все курсы",
      detailsBtn: "Подробнее",
      items: [
        {
          name: "Профи старт",
          description:
            "Начните путь мастера с правильного — даже если никогда не держали в руках фрезу. База, отработка на практике и уверенность в каждом движении.",
          price: "100 000 тг",
          image: "/courses/course-1.jpg",
        },
        {
          name: "Базовый педикюр",
          description:
            "Освойте профессиональную и востребованную профессию с нуля: техника, безопасность и работа с разными типами стоп. Наш курс подойдет как для новичков, так и для тех, кто хочет повысить свою квалификацию.",
          price: "100 000 тг",
          image: "/courses/course-2.jpg",
        },
      ],
    },

    /* Services */
    services: {
      heading: "Запишитесь к мастеру",
      action: "Весь прайс",
      bookBtn: "Записаться",
      categories: [
        { id: "all" as const, label: "Все" },
        { id: "manicure" as const, label: "Маникюр" },
        { id: "pedicure" as const, label: "Педикюр" },
      ],
      items: [
        { name: "Японский маникюр", price: "7 000 тг", category: "manicure" as const, image: "/services/service-1.jpg" },
        { name: "Маникюр без покрытия", price: "От 3 500 тг", category: "manicure" as const, image: "/services/service-2.jpg" },
        { name: "Наращивание ногтей", price: "От 9 000 тг", category: "manicure" as const, image: "/services/service-3.jpg" },
        { name: "Любой дизайн ногтя", price: "От 1 000 тг", category: "manicure" as const, image: "/services/service-4.jpg" },
        { name: "Ремонт ногтя", price: "От 1 000 тг", category: "manicure" as const, image: "/services/service-5.jpg" },
        { name: "Коррекция искусственных ногтей", price: "От 6 000 тг", category: "manicure" as const, image: "/services/service-6.jpg" },
        { name: "Маникюр с покрытием гель-лак", price: "От 7 000 тг", category: "manicure" as const, image: "/services/service-7.jpg" },
        { name: "Мужской маникюр", price: "От 4 000 тг", category: "manicure" as const, image: "/services/service-8.jpg" },
        { name: "Педикюр без покрытия", price: "От 8 000 тг", category: "pedicure" as const, image: "/services/service-9.jpg" },
        { name: "Педикюр с покрытием гель-лак", price: "От 9 000 тг", category: "pedicure" as const, image: "/services/service-10.jpg" },
      ],
    },

    /* About */
    about: {
      heading: "Обо мне",
      paragraphs: [
        "Меня зовут Райма, и я – наставник и практикующий мастер в мире маникюра. За 20 лет работы я помогла многим мастерам выйти на новый уровень, научиться тонкостям техники и построить успешную карьеру.",
        "Моя цель – не просто обучить вас технике, а помочь стать уверенным мастером, который привлекает клиентов и развивается в профессии. Я верю, что качественный маникюр – это сочетание знаний, практики и любви к своему делу.",
        "Если вы хотите освоить современные техники, прокачать навыки и выйти на новый уровень в профессии, буду рада помочь вам на этом пути!",
      ],
      photoAlt: "Райма Курашовна",
    },

    /* Location */
    location: {
      heading: "Где нас найти",
      mapTitle: "Карта проезда",
    },

    /* Footer */
    footer: {
      privacy: "Условия и конфиденциальность",
      madeBy: "Разработано с ♥",
    },

    /* Buttons (shared across sections) */
    buttons: {
      bookTraining: "Записаться на обучение",
      bookService: "Записаться на услугу",
      signUp: "Записаться",
    },

    /* WhatsApp pre-filled messages */
    whatsapp: {
      bookTraining: "Здравствуйте! Хочу записаться на обучение в RK Nail Academy.",
      bookService: "Здравствуйте! Хочу записаться на услугу в RK Nail Academy.",
      bookServiceFor: "Здравствуйте! Хочу записаться на услугу: {name}.",
      bookCourse: "Здравствуйте! Хочу узнать подробнее о курсе: {name}.",
    },

    /* Privacy page */
    privacy: {
      metaTitle: "Условия и конфиденциальность",
      metaDescription: "Пользовательское соглашение и политика конфиденциальности.",
      heading: "Условия и политика конфиденциальности",
      sections: [
        {
          title: "1. Общие положения",
          paragraphs: [
            "Настоящий документ регулирует отношения между посетителями сайта и администрацией ресурса. Информация, размещенная на данном сайте, включая описания услуг, курсов и цены, носит исключительно информационно-ознакомительный характер и не является публичной офертой. Окончательная стоимость и условия предоставления услуг определяются мастером индивидуально после консультации и записи.",
          ],
        },
        {
          title: "2. Сбор и использование данных",
          paragraphs: [
            "Мы уважаем вашу приватность. Наш сайт не собирает личные данные посетителей (такие как ФИО, номера банковских карт) напрямую через скрытые формы или личные кабинеты.",
            "Вся запись на услуги и курсы осуществляется путем добровольного перехода пользователя в сторонние мессенджеры (например, WhatsApp или Telegram). Предоставляя свои контактные данные в мессенджере, вы соглашаетесь на их обработку с целью обратной связи и записи на процедуру.",
          ],
        },
        {
          title: "3. Файлы cookie и сторонние сервисы",
          paragraphs: [
            "Подобно большинству современных веб-ресурсов, наш сайт может использовать файлы cookie, а также системы веб-аналитики и виджеты (например, Яндекс.Метрика, Facebook Pixel, карты 2ГИС).",
          ],
          bullets: [
            "Эти данные являются обезличенными и собираются автоматически для улучшения маркетинговых кампаний и технической работы сайта.",
            "Вы всегда можете отключить сохранение файлов cookie в настройках вашего браузера.",
          ],
        },
        {
          title: "4. Изменения в условиях",
          paragraphs: [
            "Мы оставляем за собой право вносить изменения в настоящую политику в любое время без предварительного уведомления пользователей. Обновленная версия публикуется на этой странице.",
          ],
        },
      ],
      lastUpdated: "Последнее обновление:",
    },

    /* Site-level (for address display, etc.) */
    site: {
      brandTop: "Авторская академия",
      brandAccent: "Раймы Курашовны",
      addressLine1: "Улица Лермонтова, дом 46, 2 этаж",
      addressLine2: "Остановка «Гульдер», пересечение Лермонтова · Сатпаева",
    },
  },

  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    /* Navigation */
    nav: {
      portfolio: "Portfolio",
      training: "Training",
      services: "Services",
      about: "About",
      contacts: "Contacts",
    },

    /* Hero */
    hero: {
      title: "Academy by",
      titleAccent: "Raima Kurashovna",
      subtitle:
        "20+ years of experience, an individual approach, and a methodology that turns beginners into confident professionals. Plus a nail service for your hands.",
      stats: [
        { value: "20+", label: "years of experience" },
        { value: "100+", label: "graduates" },
        { value: "✓", label: "Certificates" },
      ],
      heroImageAlt: "Raima Kurashovna at the academy",
    },

    /* Features */
    features: {
      heading: "Why Choose Us",
      items: [
        {
          num: "01",
          title: "Experience You Can Trust",
          text: "Raima Kurashovna is a master with many years of practice who constantly improves her skills.",
        },
        {
          num: "02",
          title: "Completion Certificate",
          text: "After the course you receive a document confirming your qualifications.",
        },
        {
          num: "03",
          title: "Individual Approach",
          text: "The programme adapts to your level — from beginner to experienced professional.",
        },
        {
          num: "04",
          title: "Post-Training Support",
          text: "We stay in touch and help with your first independent steps in the profession.",
        },
      ],
    },

    /* Instagram Reels */
    reels: {
      heading: "See How It Looks",
      action: "Watch on Instagram",
    },

    /* Reviews */
    reviews: {
      heading: "Reviews",
      action: "See all reviews on 2GIS",
      items: [
        {
          author: "Saltanat Shainurat",
          date: "June 27, 2024",
          rating: 5,
          text: "Had a manicure, master Rai — excellent service. Comfortable place. High-quality work, I recommend it.",
        },
        {
          author: "T T",
          date: "June 27, 2024",
          rating: 5,
          text: "Had a manicure before New Year's. Without coating. Everything was neat. Very satisfied, will definitely come again.",
        },
        {
          author: "Elena Klova",
          date: "June 27, 2024",
          rating: 5,
          text: "So good you want to come back. Professional master, pleasant interior, everything is sterile. I recommend it.",
        },
      ],
    },

    /* Gallery */
    gallery: {
      heading: "Our Work",
      action: "Full Gallery",
      itemAlt: "Work",
    },

    /* Courses */
    courses: {
      heading: "Course Catalogue",
      action: "All Courses",
      detailsBtn: "Details",
      items: [
        {
          name: "Pro Start",
          description:
            "Start your journey the right way — even if you've never held a nail drill before. Fundamentals, hands-on practice, and confidence in every move.",
          price: "100,000 KZT",
          image: "/courses/course-1.jpg",
        },
        {
          name: "Basic Pedicure",
          description:
            "Master a professional and in-demand skill from scratch: technique, safety, and working with different foot types. Our course suits both beginners and those looking to upgrade their qualifications.",
          price: "100,000 KZT",
          image: "/courses/course-2.jpg",
        },
      ],
    },

    /* Services */
    services: {
      heading: "Book an Appointment",
      action: "Full Price List",
      bookBtn: "Book Now",
      categories: [
        { id: "all" as const, label: "All" },
        { id: "manicure" as const, label: "Manicure" },
        { id: "pedicure" as const, label: "Pedicure" },
      ],
      items: [
        { name: "Japanese Manicure", price: "7,000 KZT", category: "manicure" as const, image: "/services/service-1.jpg" },
        { name: "Manicure without Coating", price: "From 3,500 KZT", category: "manicure" as const, image: "/services/service-2.jpg" },
        { name: "Nail Extensions", price: "From 9,000 KZT", category: "manicure" as const, image: "/services/service-3.jpg" },
        { name: "Any Nail Design", price: "From 1,000 KZT", category: "manicure" as const, image: "/services/service-4.jpg" },
        { name: "Nail Repair", price: "From 1,000 KZT", category: "manicure" as const, image: "/services/service-5.jpg" },
        { name: "Artificial Nail Correction", price: "From 6,000 KZT", category: "manicure" as const, image: "/services/service-6.jpg" },
        { name: "Manicure with Gel Polish", price: "From 7,000 KZT", category: "manicure" as const, image: "/services/service-7.jpg" },
        { name: "Men's Manicure", price: "From 4,000 KZT", category: "manicure" as const, image: "/services/service-8.jpg" },
        { name: "Pedicure without Coating", price: "From 8,000 KZT", category: "pedicure" as const, image: "/services/service-9.jpg" },
        { name: "Pedicure with Gel Polish", price: "From 9,000 KZT", category: "pedicure" as const, image: "/services/service-10.jpg" },
      ],
    },

    /* About */
    about: {
      heading: "About Me",
      paragraphs: [
        "My name is Raima, and I am a mentor and practising nail master. Over 20 years I have helped many professionals reach the next level, learn the finer points of technique, and build a successful career.",
        "My goal is not just to teach you technique, but to help you become a confident master who attracts clients and grows in the profession. I believe that quality manicure is a combination of knowledge, practice, and passion for the craft.",
        "If you want to master modern techniques, level up your skills, and reach new heights in your career, I would be happy to help you on this journey!",
      ],
      photoAlt: "Raima Kurashovna",
    },

    /* Location */
    location: {
      heading: "How to Find Us",
      mapTitle: "Directions map",
    },

    /* Footer */
    footer: {
      privacy: "Terms & Privacy",
      madeBy: "Made with ♥ by",
    },

    /* Buttons */
    buttons: {
      bookTraining: "Enrol for Training",
      bookService: "Book a Service",
      signUp: "Book Now",
    },

    /* WhatsApp pre-filled messages */
    whatsapp: {
      bookTraining: "Hello! I would like to enrol for training at RK Nail Academy.",
      bookService: "Hello! I would like to book a service at RK Nail Academy.",
      bookServiceFor: "Hello! I would like to book a service: {name}.",
      bookCourse: "Hello! I would like to learn more about the course: {name}.",
    },

    /* Privacy page */
    privacy: {
      metaTitle: "Terms & Privacy",
      metaDescription: "Terms of service and privacy policy.",
      heading: "Terms of Service & Privacy Policy",
      sections: [
        {
          title: "1. General Provisions",
          paragraphs: [
            "This document governs the relationship between visitors to the RK Nail Academy website and its administration. The information published on this website, including descriptions of services, courses, and prices, is for informational purposes only and does not constitute a public offer. Final pricing and service conditions are determined individually by the master after consultation and booking.",
          ],
        },
        {
          title: "2. Data Collection & Use",
          paragraphs: [
            "We respect your privacy. Our website does not collect personal data (such as full name or bank card numbers) directly through hidden forms or personal accounts.",
            "All bookings for services and courses are made by the user voluntarily navigating to third-party messengers (e.g. WhatsApp or Telegram). By providing your contact information in the messenger, you agree to its processing for the purpose of communication and appointment booking.",
          ],
        },
        {
          title: "3. Cookies & Third-Party Services",
          paragraphs: [
            "Like most modern websites, our site may use cookies as well as web analytics systems and widgets (e.g. Yandex.Metrica, Facebook Pixel, 2GIS maps).",
          ],
          bullets: [
            "This data is anonymised and collected automatically to improve marketing campaigns and the technical operation of the website.",
            "You can always disable cookies in your browser settings.",
          ],
        },
        {
          title: "4. Changes to Terms",
          paragraphs: [
            "We reserve the right to amend this policy at any time without prior notice to users. The updated version is published on this page.",
          ],
        },
      ],
      lastUpdated: "Last updated:",
    },

    /* Site-level */
    site: {
      brandTop: "Academy by",
      brandAccent: "Raima Kurashovna",
      addressLine1: "46 Lermontov Street, 2nd floor",
      addressLine2: "Gulder bus stop, intersection of Lermontov & Satpayev St.",
    },
  },

  /* ─────────────────────────── KAZAKH ──────────────────────────── */
  kk: {
    /* Navigation */
    nav: {
      portfolio: "Портфолио",
      training: "Оқыту",
      services: "Қызметтер",
      about: "Мен туралы",
      contacts: "Байланыс",
    },

    /* Hero */
    hero: {
      title: "Авторлық академия",
      titleAccent: "Райма Құрашқызы",
      subtitle:
        "20+ жыл тәжірибе, жеке көзқарас және жаңадан бастағандарды сенімді мамандарға айналдыратын әдістеме. Сондай-ақ қолдарыңыз үшін тырнақ сервисі.",
      stats: [
        { value: "20+", label: "жыл тәжірибе" },
        { value: "100+", label: "түлек" },
        { value: "✓", label: "Сертификаттар" },
      ],
      heroImageAlt: "Райма Құрашқызы академияда",
    },

    /* Features */
    features: {
      heading: "Неге бізді таңдайды",
      items: [
        {
          num: "01",
          title: "Сенуге болатын тәжірибе",
          text: "Райма Құрашқызы — көп жылдық тәжірибесі бар және дағдыларын үнемі жетілдіретін шебер.",
        },
        {
          num: "02",
          title: "Оқуды аяқтау сертификаты",
          text: "Курстан кейін біліктілігіңізді растайтын құжат аласыз.",
        },
        {
          num: "03",
          title: "Әркімге жеке көзқарас",
          text: "Бағдарлама сіздің деңгейіңізге бейімделеді — жаңадан бастаушыдан тәжірибелі шеберге дейін.",
        },
        {
          num: "04",
          title: "Оқудан кейінгі қолдау",
          text: "Байланыста қаламыз және мамандықтағы алғашқы өз бетінше қадамдарыңызға көмектесеміз.",
        },
      ],
    },

    /* Instagram Reels */
    reels: {
      heading: "Бұл қалай көрінеді",
      action: "Instagram-да қарау",
    },

    /* Reviews */
    reviews: {
      heading: "Пікірлер",
      action: "2ГИС-тегі барлық пікірлерді қарау",
      items: [
        {
          author: "Салтанат Шайнұрат",
          date: "2024 жылғы 27 маусым",
          rating: 5,
          text: "Маникюрде болдым, шебер Рай, тамаша қызмет көрсету. Жайлы орын. Сапалы жұмыс, ұсынамын.",
        },
        {
          author: "Т Т",
          date: "2024 жылғы 27 маусым",
          rating: 5,
          text: "Жаңа жыл алдында маникюрде болдым. Жабынсыз жасаттым. Бәрі ұқыпты. Өте ризамын, міндетті түрде тағы келемін.",
        },
        {
          author: "Elena Klova",
          date: "2024 жылғы 27 маусым",
          rating: 5,
          text: "Соншалықты жақсы, қайта келгің келеді. Кәсіби шебер, жағымды интерьер, бәрі стерильді. Ұсынамын.",
        },
      ],
    },

    /* Gallery */
    gallery: {
      heading: "Біздің жұмыстар",
      action: "Толық галерея",
      itemAlt: "Жұмыс",
    },

    /* Courses */
    courses: {
      heading: "Курстар каталогы",
      action: "Барлық курстар",
      detailsBtn: "Толығырақ",
      items: [
        {
          name: "Кәсіби старт",
          description:
            "Шебер жолын дұрыс бастаңыз — бұрын фрезді қолға алмаған болсаңыз да. Негіздер, тәжірибеде жаттығу және әрбір қозғалыста сенімділік.",
          price: "100 000 тг",
          image: "/courses/course-1.jpg",
        },
        {
          name: "Негізгі педикюр",
          description:
            "Кәсіби және сұранысқа ие мамандықты нөлден меңгеріңіз: техника, қауіпсіздік және табанның әр түрлі түрлерімен жұмыс. Біздің курс жаңадан бастаушыларға да, біліктілігін арттырғысы келетіндерге де қолайлы.",
          price: "100 000 тг",
          image: "/courses/course-2.jpg",
        },
      ],
    },

    /* Services */
    services: {
      heading: "Шеберге жазылыңыз",
      action: "Толық прайс",
      bookBtn: "Жазылу",
      categories: [
        { id: "all" as const, label: "Барлығы" },
        { id: "manicure" as const, label: "Маникюр" },
        { id: "pedicure" as const, label: "Педикюр" },
      ],
      items: [
        { name: "Жапон маникюрі", price: "7 000 тг", category: "manicure" as const, image: "/services/service-1.jpg" },
        { name: "Жабынсыз маникюр", price: "3 500 тг-ден", category: "manicure" as const, image: "/services/service-2.jpg" },
        { name: "Тырнақ ұзарту", price: "9 000 тг-ден", category: "manicure" as const, image: "/services/service-3.jpg" },
        { name: "Кез келген тырнақ дизайны", price: "1 000 тг-ден", category: "manicure" as const, image: "/services/service-4.jpg" },
        { name: "Тырнақ жөндеу", price: "1 000 тг-ден", category: "manicure" as const, image: "/services/service-5.jpg" },
        { name: "Жасанды тырнақ түзету", price: "6 000 тг-ден", category: "manicure" as const, image: "/services/service-6.jpg" },
        { name: "Гель-лак жабынды маникюр", price: "7 000 тг-ден", category: "manicure" as const, image: "/services/service-7.jpg" },
        { name: "Ер адам маникюрі", price: "4 000 тг-ден", category: "manicure" as const, image: "/services/service-8.jpg" },
        { name: "Жабынсыз педикюр", price: "8 000 тг-ден", category: "pedicure" as const, image: "/services/service-9.jpg" },
        { name: "Гель-лак жабынды педикюр", price: "9 000 тг-ден", category: "pedicure" as const, image: "/services/service-10.jpg" },
      ],
    },

    /* About */
    about: {
      heading: "Мен туралы",
      paragraphs: [
        "Менің атым Райма, мен — маникюр әлеміндегі тәлімгер және тәжірибелі шебермін. 20 жыл жұмыс барысында мен көптеген шеберлерге жаңа деңгейге шығуға, техника нәзіктіктерін үйренуге және табысты мансап құруға көмектестім.",
        "Менің мақсатым — сізге тек техниканы үйрету емес, клиенттерді тартатын және мамандықта дамитын сенімді шебер болуға көмектесу. Мен сапалы маникюр — білім, тәжірибе және ісіңізге деген сүйіспеншіліктің үйлесімі деп сенемін.",
        "Егер сіз заманауи техникаларды меңгергіңіз, дағдыларыңызды жетілдіргіңіз және мамандықта жаңа деңгейге шыққыңыз келсе, бұл жолда сізге көмектесуге қуаныштымын!",
      ],
      photoAlt: "Райма Құрашқызы",
    },

    /* Location */
    location: {
      heading: "Бізді қайдан табуға болады",
      mapTitle: "Жол картасы",
    },

    /* Footer */
    footer: {
      privacy: "Шарттар мен құпиялылық",
      madeBy: "♥ жасаған",
    },

    /* Buttons */
    buttons: {
      bookTraining: "Оқуға жазылу",
      bookService: "Қызметке жазылу",
      signUp: "Жазылу",
    },

    /* WhatsApp pre-filled messages */
    whatsapp: {
      bookTraining: "Сәлеметсіз бе! RK Nail Academy оқуға жазылғым келеді.",
      bookService: "Сәлеметсіз бе! RK Nail Academy қызметіне жазылғым келеді.",
      bookServiceFor: "Сәлеметсіз бе! Қызметке жазылғым келеді: {name}.",
      bookCourse: "Сәлеметсіз бе! Курс туралы толығырақ білгім келеді: {name}.",
    },

    /* Privacy page */
    privacy: {
      metaTitle: "Шарттар мен құпиялылық",
      metaDescription: "Пайдаланушы келісімі және құпиялылық саясаты.",
      heading: "Қызмет көрсету шарттары мен құпиялылық саясаты",
      sections: [
        {
          title: "1. Жалпы ережелер",
          paragraphs: [
            "Осы құжат RK Nail Academy веб-сайтына кірушілер мен оның әкімшілігі арасындағы қатынастарды реттейді. Осы веб-сайтта жарияланған ақпарат, соның ішінде қызметтер, курстар сипаттамалары мен бағалар тек ақпараттық-танысу сипатында болып табылады және жариялы оферта емес. Қызмет көрсетудің түпкілікті құны мен шарттары кеңесу мен жазылғаннан кейін шебермен жеке анықталады.",
          ],
        },
        {
          title: "2. Деректерді жинау және пайдалану",
          paragraphs: [
            "Біз сіздің жеке өміріңізді құрметтейміз. Біздің веб-сайт жасырын формалар немесе жеке кабинеттер арқылы кірушілердің жеке деректерін (аты-жөні, банк карталарының нөмірлері сияқты) тікелей жинамайды.",
            "Қызметтер мен курстарға барлық жазылу пайдаланушының үшінші тарап мессенджерлеріне (мысалы, WhatsApp немесе Telegram) ерікті түрде өтуі арқылы жүзеге асырылады. Мессенджерде байланыс деректеріңізді бере отырып, сіз оларды кері байланыс және процедураға жазылу мақсатында өңдеуге келісесіз.",
          ],
        },
        {
          title: "3. Cookie файлдары мен үшінші тарап қызметтері",
          paragraphs: [
            "Көптеген заманауи веб-ресурстар сияқты, біздің сайт cookie файлдарын, сондай-ақ веб-аналитика жүйелері мен виджеттерді (мысалы, Яндекс.Метрика, Facebook Pixel, 2ГИС карталары) пайдалана алады.",
          ],
          bullets: [
            "Бұл деректер обезличенді болып табылады және маркетингтік науқандар мен сайттың техникалық жұмысын жақсарту үшін автоматты түрде жиналады.",
            "Сіз әрқашан браузеріңіздің баптауларында cookie файлдарын сақтауды өшіре аласыз.",
          ],
        },
        {
          title: "4. Шарттардағы өзгерістер",
          paragraphs: [
            "Біз осы саясатқа пайдаланушыларды алдын ала хабардар етпестен кез келген уақытта өзгерістер енгізу құқығын өзімізде қалдырамыз. Жаңартылған нұсқа осы бетте жарияланады.",
          ],
        },
      ],
      lastUpdated: "Соңғы жаңарту:",
    },

    /* Site-level */
    site: {
      brandTop: "Авторлық академия",
      brandAccent: "Райма Құрашқызы",
      addressLine1: "Лермонтов көшесі, 46-үй, 2-қабат",
      addressLine2: "«Гүлдер» аялдамасы, Лермонтов · Сәтбаев қиылысы",
    },
  },
};

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.ru;
