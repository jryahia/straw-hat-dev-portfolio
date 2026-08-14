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
            tagline: 'I build AI-powered automation that runs real businesses. FastAPI backends that talk to GoHighLevel, Make, n8n, and HubSpot; LLM agents that qualify leads, book calls, and answer customers over WhatsApp; Python tools that turn invoices, documents, and spreadsheets into clean data. Full-stack when the job needs it, Docker-included so every ship deploys anywhere — the same kind of system that quietly powers a growing agency\'s clients.',
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
                desc: 'Learned to build. Python, APIs, and the discipline of code that doesn\'t break.'
            },
            voyage2: {
                title: 'Grand Line — The Grind',
                desc: 'Shipped for real people: client automations for GoHighLevel, HubSpot, Make, and n8n. Every deadline a boss fight won.'
            },
            voyage3: {
                title: 'New World — Present',
                desc: 'Now: AI agents that work an inbox, book a call, and write a report — a 40+ project treasure vault to prove it.'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 Treasure Vault',
            title: 'Legendary Projects',
            subtitle: 'Click any treasure to explore! 🏴☠️',
            searchPlaceholder: 'Search projects...',
            catAll: 'All', catAi: 'AI', catAutomation: 'Automation', catWeb: 'Websites',
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
            tagline: 'Je construis des automatisations propulsées par l\'IA qui font tourner de vraies entreprises. Des backends FastAPI qui connectent GoHighLevel, Make, n8n et HubSpot ; des agents LLM qui qualifient des leads, réservent des appels et répondent aux clients sur WhatsApp ; des outils Python qui transforment factures, documents et tableurs en données propres. Full-stack quand le besoin s\'en fait sentir, Docker inclus pour que chaque navire se déploie partout — le type même de système qui fait tourner en silence les clients d\'une agence en pleine croissance.',
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
                title: 'East Blue — Le Métier Commence',
                desc: 'Apprendre à construire. Python, les API et la discipline d\'un code qui ne casse pas.'
            },
            voyage2: {
                title: 'Grand Line — L\'Effort',
                desc: 'Livré pour de vraies personnes : automatisations client pour GoHighLevel, HubSpot, Make et n8n. Chaque deadline, un boss fight gagné.'
            },
            voyage3: {
                title: 'Nouveau Monde — Le Présent',
                desc: 'Maintenant, des agents IA qui gèrent une boîte mail, réservent un appel et rédigent un rapport — un coffre de 40+ projets pour le prouver.'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 Coffre aux Trésors',
            title: 'Projets Légendaires',
            subtitle: 'Cliquez sur un trésor pour explorer ! 🏴☠️',
            searchPlaceholder: 'Rechercher des projets...',
            catAll: 'Tous', catAi: 'IA', catAutomation: 'Automatisation', catWeb: 'Sites web',
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
            tagline: 'Costruisco automatizzazioni basate sull\'IA che fanno funzionare aziende vere. Backend FastAPI che dialogano con GoHighLevel, Make, n8n e HubSpot ; agenti LLM che qualificano lead, prenotano chiamate e rispondono ai clienti su WhatsApp ; strumenti Python che trasformano fatture, documenti e fogli di calcolo in dati puliti. Full-stack quando serve, Docker incluso così ogni nave si deploya ovunque — il tipo di sistema che fa funzionare in silenzio i clienti di un\'agenzia in crescita.',
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
                title: 'East Blue — L\'Arte Comincia',
                desc: 'Imparare a costruire. Python, API e la disciplina di un codice che non si rompe.'
            },
            voyage2: {
                title: 'Grand Line — La Fatica',
                desc: 'Consegnato per persone reali: automazioni client per GoHighLevel, HubSpot, Make e n8n. Ogni scadenza, un boss fight vinto.'
            },
            voyage3: {
                title: 'Nuovo Mondo — Il Presente',
                desc: 'Ora agenti IA che gestiscono una casella, prenotano una chiamata e scrivono un report — un forziere di 40+ progetti a provarlo.'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 Forziere dei Tesori',
            title: 'Progetti Leggendari',
            subtitle: 'Clicca su un tesoro per esplorare! 🏴☠️',
            searchPlaceholder: 'Cerca progetti...',
            catAll: 'Tutti', catAi: 'IA', catAutomation: 'Automazione', catWeb: 'Siti web',
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
            tagline: 'Ich baue KI-gestützte Automatisierung, die echte Unternehmen am Laufen hält. FastAPI-Backends, die GoHighLevel, Make, n8n und HubSpot verbinden; LLM-Agenten, die Leads qualifizieren, Anrufe buchen und Kunden über WhatsApp beantworten; Python-Tools, die Rechnungen, Dokumente und Tabellen in saubere Daten verwandeln. Full-Stack, wenn es die Aufgabe verlangt, Docker inklusive, damit jedes Schiff überall deployed wird — die Art von System, die im Hintergrund die Kunden einer wachsenden Agentur versorgt.',
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
                title: 'East Blue — Das Handwerk Beginnt',
                desc: 'Bauen gelernt. Python, APIs und die Disziplin von Code, der nicht bricht.'
            },
            voyage2: {
                title: 'Grand Line — Der Kampf',
                desc: 'Für echte Menschen geliefert: Kunden-Automatisierungen für GoHighLevel, HubSpot, Make und n8n. Jede Deadline ein gewonnener Boss-Kampf.'
            },
            voyage3: {
                title: 'Neue Welt — Gegenwart',
                desc: 'Jetzt KI-Agenten, die ein Postfach bearbeiten, einen Anruf buchen und einen Bericht schreiben — ein Schatzgewölbe mit 40+ Projekten als Beweis.'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 Schatzkammer',
            title: 'Legendäre Projekte',
            subtitle: 'Klicke auf einen Schatz zum Erkunden! 🏴☠️',
            searchPlaceholder: 'Projekte suchen...',
            catAll: 'Alle', catAi: 'KI', catAutomation: 'Automatisierung', catWeb: 'Websites',
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
            tagline: 'Я создаю ИИ-автоматизацию, которая по-настоящему поддерживает бизнес. Backend на FastAPI, подключающий GoHighLevel, Make, n8n и HubSpot; LLM-агенты, которые квалифицируют лиды, бронируют звонки и отвечают клиентам в WhatsApp; Python-инструменты, превращающие счета, документы и таблицы в чистые данные. Full-stack, когда это нужно, и Docker, чтобы каждый корабль разворачивался где угодно — та самая система, что тихо обслуживает клиентов растущего агентства.',
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
                desc: 'Научился строить. Python, API и дисциплина кода, который не ломается.'
            },
            voyage2: {
                title: 'Гранд Лайн — Упорство',
                desc: 'Сделано для реальных людей: клиентская автоматизация для GoHighLevel, HubSpot, Make и n8n. Каждый дедлайн — выигранный босс.'
            },
            voyage3: {
                title: 'Новый Мир — Настоящее',
                desc: 'Теперь ИИ-агенты, которые работают с почтой, бронируют звонки и пишут отчёты — сейф с 40+ проектами в доказательство.'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 Хранилище Сокровищ',
            title: 'Легендарные Проекты',
            subtitle: 'Нажмите на сокровище, чтобы исследовать! 🏴☠️',
            searchPlaceholder: 'Поиск проектов...',
            catAll: 'Все', catAi: 'ИИ', catAutomation: 'Автоматизация', catWeb: 'Сайты',
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
            tagline: '実在のビジネスを動かすAI自動化を作っています。GoHighLevel、Make、n8n、HubSpotにつなぐFastAPIバックエンド; リードを評価し、電話を予約し、WhatsAppで顧客に対応するLLMエージェント; 請求書・書類・表計算をクリーンなデータに変えるPythonツール。必要な時はフルスタック、Docker込みでどこにでも配備できる船 — 成長するエージェンシーのクライアントを静かに支えるまさにそういうシステム。',
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
                title: '東の海 — 技術のはじまり',
                desc: '作ることを学んだ。Python、API、そして壊れないコードの規律。'
            },
            voyage2: {
                title: 'グランドライン — 苦闘',
                desc: '実在のクライアントのために納品：GoHighLevel、HubSpot、Make、n8nの自動化。すべての締め切りは勝ち取ったボス戦。'
            },
            voyage3: {
                title: '新世界 — 現在',
                desc: '今は受信箱を捌き、電話を予約し、レポートを書くAIエージェント — 40以上のプロジェクトの宝の山が証拠だ。'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 宝物庫',
            title: '伝説のプロジェクト',
            subtitle: '宝物をクリックして探索！🏴☠️',
            searchPlaceholder: 'プロジェクトを検索...',
            catAll: 'すべて', catAi: 'AI', catAutomation: '自動化', catWeb: 'ウェブサイト',
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
            tagline: 'أبني أتمتة مبنية على الذكاء الاصطناعي تُشغّل أعمالاً حقيقية. خوادم FastAPI تتصل بـ GoHighLevel وMake وn8n وHubSpot؛ وكلاء LLM يقيّمون العملاء المحتملين ويحجزون المكالمات ويردّون على العملاء عبر WhatsApp؛ أدوات Python تحوّل الفواتير والمستندات وجداول البيانات إلى بيانات نظيفة. Full-stack عند الحاجة، وDocker مضمونة ليُنشر أي سفينة في أي مكان — تماماً النظام الذي يُشغّل بهدوء عملاءَ وكالةٍ نامية.',
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
                title: 'الشرق الأزرق — بداية الحرفة',
                desc: 'تعلّمت البناء. Python وAPIs وانضباط الكود الذي لا ينكسر.'
            },
            voyage2: {
                title: 'غراند لاين — الجهد',
                desc: 'سُلّمت لأشخاص حقيقيين: أتمتة للعملاء عبر GoHighLevel وHubSpot وMake وn8n. كل موعد تسليم معركة بوس مكتسبة.'
            },
            voyage3: {
                title: 'العالم الجديد — الحاضر',
                desc: 'الآن وكلاء ذكاء اصطناعي يديرون البريد، يحجزون مكالمة، ويكتبون تقريراً — خزينة أكثر من 40 مشروعاً تثبت ذلك.'
            }
        },
        skills: {
            python: 'Python',
            fastapi: 'FastAPI',
            sqlalchemy: 'SQLAlchemy',
            database: 'Postgres · SQLite',
            async_python: 'Async Python',
            llm: 'LLM Integration',
            agents: 'AI Agents',
            chatbots: 'Chatbots',
            business_automation: 'GHL · Make · n8n · HubSpot',
            whatsapp: 'WhatsApp / SMS',
            document_processing: 'Document Processing',
            docker: 'Docker',
            pytest: 'pytest',
            flet: 'Flet'
        },
        projects: {
            label: '💎 خزينة الكنوز',
            title: 'مشاريع أسطورية',
            subtitle: 'انقر على أي كنز للاستكشاف! 🏴☠️',
            searchPlaceholder: 'البحث عن مشاريع...',
            catAll: 'الكل', catAi: 'الذكاء الاصطناعي', catAutomation: 'الأتمتة', catWeb: 'المواقع',
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
