// Language Switcher and i18n System
let currentLanguage = localStorage.getItem('language') || 'en';

// Toggle language dropdown
const languageToggle = document.getElementById('language-toggle');
const languageDropdown = document.getElementById('language-dropdown');

if (languageToggle && languageDropdown) {
    languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
        }
    });

    // Language option click handlers
    const languageOptions = languageDropdown.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            languageDropdown.classList.remove('active');
        });
    });
}

// Set active language on load
function updateActiveLanguage() {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active state
    updateActiveLanguage();
    
    // Apply RTL for Arabic
    const htmlElement = document.documentElement;
    if (lang === 'ar') {
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.setAttribute('lang', 'ar');
    } else {
        htmlElement.setAttribute('dir', 'ltr');
        htmlElement.setAttribute('lang', lang);
    }
    
    // Fade transition
    const uiOverlay = document.getElementById('ui-overlay');
    if (uiOverlay) {
        uiOverlay.style.opacity = '0';
        setTimeout(() => {
            translatePage();
            uiOverlay.style.opacity = '1';
        }, 200);
    } else {
        translatePage();
    }
}

// Translate page
function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            if (/<[^>]+>/.test(translation)) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Handle placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key);
        if (translation) {
            el.placeholder = translation;
        }
    });
}

// Get translation
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

// Translations object
const translations = {
    en: {
        nav: {
            home: 'Home',
            journey: 'Journey',
            treasures: 'Treasures',
            contact: 'Join Crew'
        },
        home: {
            wanted: 'WANTED',
            tagline: 'Charting the Grand Line of full-stack development with <strong>React</strong>, <strong>Node.js</strong>, and <strong>GSAP</strong> — crafting digital experiences that set sail beyond the horizon.',
            exploreBtn: 'Explore My Journey',
            stats: {
                years: 'Years',
                projects: 'Projects',
                dreams: 'Dreams'
            }
        },
        about: {
            label: '📜 Captain\'s Log',
            title: 'The <span>Dev</span> Trip',
            voyage1: {
                title: 'East Blue — The Craft Begins',
                desc: 'Built the foundation. Every legendary dev starts with curiosity, clean code, and zero sleep.'
            },
            voyage2: {
                title: 'Grand Line — The Grind',
                desc: 'Pushed through complex projects, real clients, and brutal deadlines. Every bug was a boss fight.'
            },
            voyage3: {
                title: 'New World — Present',
                desc: 'Now shipping full-stack apps. React is my sword, clean architecture my Haki.'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 Treasure Vault',
            title: 'Legendary Projects',
            subtitle: 'Click any treasure to explore! 🏴☠️',
            searchPlaceholder: 'Search projects...',
            brewing: '⚗️ Still Brewing...'
        },
        modal: {
            viewCode: 'View Code',
            liveDemo: 'Live Demo'
        },
        subProjects: {
            back: '← Back to Treasures',
            restaurantsTitle: '🍽️ Sanji\'s Kitchen — Choose Your Feast',
            doctorsTitle: '🦌 Chopper\'s Clinic — Choose Your Treatment'
        },
        contact: {
            label: '🤝 Nakama Wanted',
            title: 'Join My Crew!',
            subtitle: 'Looking for a developer who codes like Zoro fights? Let\'s conquer the New World together!',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 Den Den Mushi 📞',
            emailReveal: 'Click to reveal email',
            quote: '"I don\'t want to conquer anything.<br>The guy with the most freedom... is the Pirate King!"'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            journey: 'Parcours',
            treasures: 'Trésors',
            contact: 'Rejoindre'
        },
        home: {
            wanted: 'RECHERCHÉ',
            tagline: 'Naviguer sur la Grand Line du développement full-stack avec <strong>React</strong>, <strong>Node.js</strong> et <strong>GSAP</strong> — créer des expériences digitales qui prennent le large.',
            exploreBtn: 'Explorer Mon Parcours',
            stats: {
                years: 'Années',
                projects: 'Projets',
                dreams: 'Rêves'
            }
        },
        about: {
            label: '📜 Journal du Capitaine',
            title: 'Le <span>Trip</span> Dev',
            voyage1: {
                title: 'East Blue — Les Débuts',
                desc: 'Construire les fondations. Chaque dev légendaire commence avec curiosité, code propre et zéro sommeil.'
            },
            voyage2: {
                title: 'Grand Line — Le Combat',
                desc: 'Traverser des projets complexes, vrais clients et deadlines brutales. Chaque bug était un boss fight.'
            },
            voyage3: {
                title: 'Nouveau Monde — Présent',
                desc: 'Maintenant je livre des apps full-stack. React est mon épée, architecture propre mon Haki.'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 Coffre aux Trésors',
            title: 'Projets Légendaires',
            subtitle: 'Cliquez sur un trésor pour explorer ! 🏴☠️',
            searchPlaceholder: 'Rechercher des projets...',
            brewing: '⚗️ En Préparation...'
        },
        modal: {
            viewCode: 'Voir le Code',
            liveDemo: 'Démo Live'
        },
        subProjects: {
            back: '← Retour aux Trésors',
            restaurantsTitle: '🍽️ Cuisine de Sanji — Choisissez Votre Festin',
            doctorsTitle: '🦌 Clinique de Chopper — Choisissez Votre Traitement'
        },
        contact: {
            label: '🤝 Nakama Recherché',
            title: 'Rejoignez Mon Équipage !',
            subtitle: 'Vous cherchez un dev qui code comme Zoro se bat ? Conquérons le Nouveau Monde ensemble !',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 Den Den Mushi 📞',
            emailReveal: 'Cliquez pour révéler l\'email',
            quote: '"Je ne veux rien conquérir.<br>Celui qui a le plus de liberté... c\'est le Roi des Pirates !"'
        }
    },
    it: {
        nav: {
            home: 'Home',
            journey: 'Viaggio',
            treasures: 'Tesori',
            contact: 'Unisciti'
        },
        home: {
            wanted: 'RICERCATO',
            tagline: 'Navigare la Grand Line dello sviluppo full-stack con <strong>React</strong>, <strong>Node.js</strong> e <strong>GSAP</strong> — creare esperienze digitali che salpano oltre l\'orizzonte.',
            exploreBtn: 'Esplora Il Mio Viaggio',
            stats: {
                years: 'Anni',
                projects: 'Progetti',
                dreams: 'Sogni'
            }
        },
        about: {
            label: '📜 Diario del Capitano',
            title: 'Il <span>Trip</span> Dev',
            voyage1: {
                title: 'East Blue — L\'Inizio',
                desc: 'Costruire le fondamenta. Ogni dev leggendario inizia con curiosità, codice pulito e zero sonno.'
            },
            voyage2: {
                title: 'Grand Line — La Lotta',
                desc: 'Superare progetti complessi, clienti reali e scadenze brutali. Ogni bug era un boss fight.'
            },
            voyage3: {
                title: 'Nuovo Mondo — Presente',
                desc: 'Ora consegno app full-stack. React è la mia spada, architettura pulita il mio Haki.'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 Forziere dei Tesori',
            title: 'Progetti Leggendari',
            subtitle: 'Clicca su un tesoro per esplorare! 🏴☠️',
            searchPlaceholder: 'Cerca progetti...',
            brewing: '⚗️ In Preparazione...'
        },
        modal: {
            viewCode: 'Vedi Codice',
            liveDemo: 'Demo Live'
        },
        subProjects: {
            back: '← Torna ai Tesori',
            restaurantsTitle: '🍽️ Cucina di Sanji — Scegli Il Tuo Banchetto',
            doctorsTitle: '🦌 Clinica di Chopper — Scegli Il Tuo Trattamento'
        },
        contact: {
            label: '🤝 Nakama Ricercato',
            title: 'Unisciti Al Mio Equipaggio!',
            subtitle: 'Cerchi un dev che programma come Zoro combatte? Conquistiamo il Nuovo Mondo insieme!',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 Den Den Mushi 📞',
            emailReveal: 'Clicca per rivelare l\'email',
            quote: '"Non voglio conquistare nulla.<br>Chi ha più libertà... è il Re dei Pirati!"'
        }
    },
    de: {
        nav: {
            home: 'Start',
            journey: 'Reise',
            treasures: 'Schätze',
            contact: 'Beitreten'
        },
        home: {
            wanted: 'GESUCHT',
            tagline: 'Die Grand Line der Full-Stack-Entwicklung mit <strong>React</strong>, <strong>Node.js</strong> und <strong>GSAP</strong> navigieren — digitale Erlebnisse schaffen, die über den Horizont hinaussegeln.',
            exploreBtn: 'Meine Reise Erkunden',
            stats: {
                years: 'Jahre',
                projects: 'Projekte',
                dreams: 'Träume'
            }
        },
        about: {
            label: '📜 Kapitäns Logbuch',
            title: 'Die <span>Dev</span> Trip',
            voyage1: {
                title: 'East Blue — Der Anfang',
                desc: 'Das Fundament bauen. Jeder legendäre Dev beginnt mit Neugier, sauberem Code und null Schlaf.'
            },
            voyage2: {
                title: 'Grand Line — Der Kampf',
                desc: 'Komplexe Projekte, echte Kunden und brutale Deadlines durchstehen. Jeder Bug war ein Boss-Kampf.'
            },
            voyage3: {
                title: 'Neue Welt — Gegenwart',
                desc: 'Jetzt liefere ich Full-Stack-Apps. React ist mein Schwert, saubere Architektur mein Haki.'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 Schatzkammer',
            title: 'Legendäre Projekte',
            subtitle: 'Klicke auf einen Schatz zum Erkunden! 🏴☠️',
            searchPlaceholder: 'Projekte suchen...',
            brewing: '⚗️ In Vorbereitung...'
        },
        modal: {
            viewCode: 'Code Ansehen',
            liveDemo: 'Live Demo'
        },
        subProjects: {
            back: '← Zurück zu Schätzen',
            restaurantsTitle: '🍽️ Sanjis Küche — Wähle Dein Festmahl',
            doctorsTitle: '🦌 Choppers Klinik — Wähle Deine Behandlung'
        },
        contact: {
            label: '🤝 Nakama Gesucht',
            title: 'Tritt Meiner Crew Bei!',
            subtitle: 'Suchst du einen Dev, der wie Zoro kämpft? Lass uns die Neue Welt erobern!',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 Den Den Mushi 📞',
            emailReveal: 'Klicken um E-Mail anzuzeigen',
            quote: '"Ich will nichts erobern.<br>Wer die meiste Freiheit hat... ist der Piratenkönig!"'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            journey: 'Путь',
            treasures: 'Сокровища',
            contact: 'Присоединиться'
        },
        home: {
            wanted: 'РАЗЫСКИВАЕТСЯ',
            tagline: 'Прокладывая путь по Гранд Лайн full-stack разработки с <strong>React</strong>, <strong>Node.js</strong> и <strong>GSAP</strong> — создавая цифровые впечатления, уплывающие за горизонт.',
            exploreBtn: 'Исследовать Мой Путь',
            stats: {
                years: 'Лет',
                projects: 'Проектов',
                dreams: 'Мечты'
            }
        },
        about: {
            label: '📜 Журнал Капитана',
            title: 'The <span>Dev</span> Trip',
            voyage1: {
                title: 'Ист Блю — Начало Ремесла',
                desc: 'Построил фундамент. Каждый легендарный разработчик начинает с любопытства, чистого кода и нулевого сна.'
            },
            voyage2: {
                title: 'Гранд Лайн — Борьба',
                desc: 'Прошёл сложные проекты, реальных клиентов и жёсткие дедлайны. Каждый баг был боссом.'
            },
            voyage3: {
                title: 'Новый Мир — Настоящее',
                desc: 'Теперь выпускаю full-stack приложения. React — мой меч, чистая архитектура — мой Хаки.'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 Хранилище Сокровищ',
            title: 'Легендарные Проекты',
            subtitle: 'Нажмите на сокровище, чтобы исследовать! 🏴☠️',
            searchPlaceholder: 'Поиск проектов...',
            brewing: '⚗️ В Разработке...'
        },
        modal: {
            viewCode: 'Посмотреть Код',
            liveDemo: 'Живая Демо'
        },
        subProjects: {
            back: '← Назад к Сокровищам',
            restaurantsTitle: '🍽️ Кухня Санджи — Выберите Ваш Пир',
            doctorsTitle: '🦌 Клиника Чоппера — Выберите Ваше Лечение'
        },
        contact: {
            label: '🤝 Накама Разыскивается',
            title: 'Присоединяйся К Моей Команде!',
            subtitle: 'Ищешь разработчика, который кодит как Зоро сражается? Давай покорим Новый Мир вместе!',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 Ден Ден Муши 📞',
            emailReveal: 'Нажмите, чтобы показать email',
            quote: '"Я не хочу ничего завоёвывать.<br>Тот, у кого больше всего свободы... это Король Пиратов!"'
        }
    },
    ja: {
        nav: {
            home: 'ホーム',
            journey: '旅路',
            treasures: '宝物',
            contact: '仲間募集'
        },
        home: {
            wanted: '手配書',
            tagline: '<strong>React</strong>、<strong>Node.js</strong>、<strong>GSAP</strong>でフルスタック開発のグランドラインを航海し、地平線の彼方へ向かうデジタル体験を創造します。',
            exploreBtn: '私の旅を探索',
            stats: {
                years: '年',
                projects: 'プロジェクト',
                dreams: '夢'
            }
        },
        about: {
            label: '📜 船長の航海日誌',
            title: '<span>開発者</span>のTrip',
            voyage1: {
                title: 'イーストブルー — 技術の始まり',
                desc: '基礎を築きました。伝説の開発者は皆、好奇心、綺麗なコード、そしてゼロ睡眠から始まります。'
            },
            voyage2: {
                title: 'グランドライン — 苦闘',
                desc: '複雑なプロジェクト、実際のクライアント、厳しい締め切りを乗り越えました。すべてのバグがボス戦でした。'
            },
            voyage3: {
                title: 'ニューワールド — 現在',
                desc: '今はフルスタックアプリを出荷しています。Reactは私の剣、綺麗なアーキテクチャは私の覇気です。'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 宝物庫',
            title: '伝説のプロジェクト',
            subtitle: '宝物をクリックして探索！🏴☠️',
            searchPlaceholder: 'プロジェクトを検索...',
            brewing: '⚗️ 開発中...'
        },
        modal: {
            viewCode: 'コードを見る',
            liveDemo: 'ライブデモ'
        },
        subProjects: {
            back: '← 宝物に戻る',
            restaurantsTitle: '🍽️ サンジのキッチン — ご馳走を選んでください',
            doctorsTitle: '🦌 チョッパーの診療所 — 治療を選んでください'
        },
        contact: {
            label: '🤝 仲間募集',
            title: '私の仲間になろう！',
            subtitle: 'ゾロのように戦うコーディングができる開発者をお探しですか？一緒にニューワールドを征服しましょう！',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 電伝虫 📞',
            emailReveal: 'クリックしてメールを表示',
            quote: '"俺は何も征服したくない。<br>一番自由な奴が...海賊王だ！"'
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            journey: 'الرحلة',
            treasures: 'الكنوز',
            contact: 'انضم للطاقم'
        },
        home: {
            wanted: 'مطلوب',
            tagline: 'الإبحار في الخط الكبير لتطوير Full-Stack مع <strong>React</strong> و <strong>Node.js</strong> و <strong>GSAP</strong> — صناعة تجارب رقمية تبحر إلى ما وراء الأفق.',
            exploreBtn: 'استكشف رحلتي',
            stats: {
                years: 'سنوات',
                projects: 'مشاريع',
                dreams: 'أحلام'
            }
        },
        about: {
            label: '📜 سجل القبطان',
            title: 'رحلة <span>الديف</span>',
            voyage1: {
                title: 'البحر الشرقي — بداية الحرفة',
                desc: 'بناء الأساس. كل مطور أسطوري يبدأ بالفضول، كود نظيف، وصفر نوم.'
            },
            voyage2: {
                title: 'الخط الكبير — الكفاح',
                desc: 'تجاوزت مشاريع معقدة، عملاء حقيقيين، ومواعيد نهائية قاسية. كل خطأ برمجي كان معركة زعيم.'
            },
            voyage3: {
                title: 'العالم الجديد — الحاضر',
                desc: 'الآن أطلق تطبيقات Full-Stack. React هو سيفي، البنية النظيفة هي الهاكي الخاص بي.'
            }
        },
        skills: {
            react: 'React',
            javascript: 'JavaScript',
            nodejs: 'Node.js',
            tailwind: 'TailwindCSS',
            gsap: 'GSAP',
            threejs: 'Three.js',
            python: 'Python'
        },
        projects: {
            label: '💎 خزينة الكنوز',
            title: 'مشاريع أسطورية',
            subtitle: 'انقر على أي كنز للاستكشاف! 🏴☠️',
            searchPlaceholder: 'البحث عن مشاريع...',
            brewing: '⚗️ قيد التطوير...'
        },
        modal: {
            viewCode: 'عرض الكود',
            liveDemo: 'عرض مباشر'
        },
        subProjects: {
            back: '→ العودة للكنوز',
            restaurantsTitle: '🍽️ مطبخ سانجي — اختر وليمتك',
            doctorsTitle: '🦌 عيادة تشوبر — اختر علاجك'
        },
        contact: {
            label: '🤝 مطلوب ناكاما',
            title: 'انضم لطاقمي!',
            subtitle: 'تبحث عن مطور يبرمج مثلما يقاتل زورو؟ لنغزو العالم الجديد معاً!',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            denDenLabel: '📞 دن دن موشي 📞',
            emailReveal: 'انقر لإظهار البريد الإلكتروني',
            quote: '"لا أريد أن أغزو أي شيء.<br>الشخص الذي لديه أكبر قدر من الحرية... هو ملك القراصنة!"'
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLanguage();
    setLanguage(currentLanguage);
});
