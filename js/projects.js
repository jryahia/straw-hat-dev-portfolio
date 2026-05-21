const projectsData = [
  // ===== LUFFY'S TREASURE — Flagship Projects =====
  {
    id: 1,
    character: '🧠',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'Agent Orchestrator',
    shortDesc: 'Multi-Agent Workflow System — master orchestrator delegates to specialized worker agents.',
    fullDesc: 'A powerful multi-agent orchestration system where a master planner breaks down goals into subtasks, dispatches to specialized agents (Researcher, Writer, Reviewer, Deliverer), tracks progress with retry logic, and delivers final results. Features a FastAPI server, SQLite memory, and CLI interface.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'SQLite', 'Docker'],
    features: ['LLM-powered goal decomposition', '4 worker agents with retry logic', 'SQLite task memory', 'FastAPI REST API', 'CLI + batch mode'],
    github: 'https://github.com/jryahia/agent-orchestrator',
    demo: 'https://jryahia.github.io/agent-orchestrator/',
    status: 'done'
  },
  {
    id: 2,
    character: '📊',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'Data Enricher',
    shortDesc: 'AI Data Enrichment Pipeline — Upload CSV/JSON, enrich with AI, export enriched data.',
    fullDesc: 'A complete data enrichment pipeline that takes raw CSV/JSON data, runs it through LLM-powered enrichment (classify, describe, sentiment, extract entities), and exports the enriched results. Features batch processing, cost estimator, web UI, and FastAPI server.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'Pandas', 'Docker'],
    features: ['5 enrichment types', 'Batch async processing', 'Cost estimator', 'CSV/JSON/XLSX export', 'Dark-themed web UI'],
    github: 'https://github.com/jryahia/data-enricher',
    demo: 'https://jryahia.github.io/data-enricher/',
    status: 'done'
  },
  {
    id: 3,
    character: '🤖',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'BrowserBot',
    shortDesc: 'BrowserBot — Autonomous AI browser agent with Playwright.',
    fullDesc: 'An autonomous AI browser agent that uses Playwright to control a web browser and an LLM to make decisions. The observe-think-act loop navigates websites, fills forms, extracts data, and completes multi-step tasks autonomously. Supports OpenAI, DeepSeek, Anthropic, and has a demo mode with heuristics.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800',
    tech: ['Python', 'Playwright', 'LLM', 'FastAPI', 'Docker'],
    features: ['Observe-Think-Act loop', '9 action types', 'Multi-LLM support', 'Stealth anti-detection', 'Task queue API'],
    github: 'https://github.com/jryahia/browser-agent',
    demo: 'https://jryahia.github.io/browser-agent/',
    status: 'done'
  },

  // ===== ZORO'S TREASURE — Powerful Tools =====
  {
    id: 4,
    character: '💳',
    bounty: '🔥 ZORO\'S TREASURE',
    name: 'Wallet Analyzer',
    shortDesc: 'Multi-chain wallet analyzer — portfolio, trades, whale score, risk flags.',
    fullDesc: 'A comprehensive crypto wallet analysis tool supporting both Solana and EVM chains. Paste any wallet address and instantly get portfolio breakdown, transaction history, whale scoring, risk flag detection, and profit/loss calculations. Built with Flet for a polished desktop experience.',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800',
    tech: ['Python', 'Flet', 'Web3', 'Solana RPC', 'CoinGecko'],
    features: ['Multi-chain support', 'Whale scoring system', 'Risk flag detection', 'P&L tracking', '30+ RPC endpoints'],
    github: 'https://github.com/jryahia/wallet-analyzer',
    demo: 'https://jryahia.github.io/wallet-analyzer/',
    status: 'done'
  },
  {
    id: 5,
    character: '🕷️',
    bounty: '🔥 ZORO\'S TREASURE',
    name: 'Scraper Platform',
    shortDesc: 'Production-grade async scraping platform with proxy rotation and scheduling.',
    fullDesc: 'A modular multi-source web scraping and data collection platform featuring proxy rotation, captcha solving, scheduling, and API-based delivery. Supports Amazon, social media, job boards, and custom sources with configurable pipelines and a web UI dashboard.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tech: ['Python', 'FastAPI', 'SQLite', 'Docker', 'BeautifulSoup'],
    features: ['Multi-source scraping', 'Proxy rotation', 'Configurable pipelines', 'Web UI dashboard', 'Scheduled scraping'],
    github: 'https://github.com/jryahia/scraper-platform',
    demo: 'https://jryahia.github.io/scraper-platform/',
    status: 'done'
  },
  {
    id: 6,
    character: '⚡',
    bounty: '🔥 ZORO\'S TREASURE',
    name: 'n8n Workflow Agent',
    shortDesc: 'AI agent that generates and manages n8n automation workflows.',
    fullDesc: 'An intelligent automation agent that creates, validates, exports, and manages n8n workflows through natural language commands. Features a FastAPI backend with a Flet desktop UI for workflow generation and management, supporting complex multi-step automations.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800',
    tech: ['Python', 'Flet', 'FastAPI', 'n8n API', 'LLM'],
    features: ['Natural language workflow creation', 'Workflow validation', 'Export/import', 'Template library', 'Desktop UI'],
    github: 'https://github.com/jryahia/n8n-workflow-agent',
    demo: 'https://jryahia.github.io/n8n-workflow-agent/',
    status: 'done'
  },

  // ===== NAMI'S TREASURE — Financial / Crypto =====
  {
    id: 7,
    character: '🪙',
    bounty: '💰 NAMI\'S TREASURE',
    name: 'Crypto & Polymarket Bot',
    shortDesc: 'Autonomous trading bot with memory, soul, and adaptive skills.',
    fullDesc: 'A sophisticated LLM-powered trading bot for crypto and Polymarket prediction markets. Features a persistent memory system, adaptive skill scripts, soul module for personality, multi-source signal aggregation, portfolio management, and a risk engine.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    tech: ['Python', 'Web3', 'Polymarket API', 'LLM', 'SQLite'],
    features: ['Multi-source signals', 'Soul personality module', 'Adaptive skills', 'Portfolio management', 'Risk engine'],
    github: 'https://github.com/jryahia/crypto-polymarket-bot',
    demo: 'https://jryahia.github.io/crypto-polymarket-bot/',
    status: 'in-progress'
  },
  {
    id: 8,
    character: '🐋',
    bounty: '💰 NAMI\'S TREASURE',
    name: 'Smart Wallet Tracker',
    shortDesc: 'Track whale wallets and smart money in real-time with copy-trade.',
    fullDesc: 'Monitor large crypto wallet movements and smart money transactions in real-time. Get alerts when whales buy new tokens, track portfolio changes, analyze on-chain behavior patterns, and one-click copy-trade via Jupiter DEX.',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800',
    tech: ['Python', 'Web3', 'DEX APIs', 'SQLite', 'Async'],
    features: ['Whale alerts', 'Portfolio tracking', 'Copy-trade via Jupiter', 'Multi-chain support', 'Real-time monitoring'],
    github: 'https://github.com/jryahia/smart-wallet-tracker',
    demo: 'https://jryahia.github.io/smart-wallet-tracker/',
    status: 'done'
  },
  {
    id: 9,
    character: '🚀',
    bounty: '💰 NAMI\'S TREASURE',
    name: 'Meme Coin Scanner',
    shortDesc: 'Multi-source meme coin scanner — discover tokens before they pump.',
    fullDesc: 'A Flet-based desktop application that scans across DexScreener, Birdeye, Pump.fun, DEXTools, and Solscan to discover trending meme coins early. Analyzes liquidity pools, tracks price movements, and surfaces high-potential tokens with real-time data.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
    tech: ['Python', 'Flet', 'DEX APIs', 'Async', 'Web3'],
    features: ['5-source scanning', 'Early token detection', 'Liquidity analysis', 'Price tracking', '30+ profile search'],
    github: 'https://github.com/jryahia/meme-coin-scanner',
    demo: 'https://jryahia.github.io/meme-coin-scanner/',
    status: 'done'
  },

  // ===== SANJI'S TREASURE — Business / Web =====
  {
    id: 10,
    character: '🍝',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'La Bontà Ristorante',
    shortDesc: 'Premium Italian restaurant website with reservations and WhatsApp ordering.',
    fullDesc: 'A stunning premium Italian restaurant website with online reservations, photo gallery, WhatsApp ordering, Google Maps integration, and mobile-responsive design. Built for a real client with production deployment.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Google Maps API'],
    features: ['Online reservations', 'WhatsApp ordering', 'Photo gallery', 'Google Maps', 'Mobile responsive'],
    github: 'https://github.com/jryahia/la-bonta-ristorante',
    demo: 'https://jryahia.github.io/la-bonta-ristorante/',
    status: 'done'
  },
  {
    id: 11,
    character: '🏪',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'E-Commerce System',
    shortDesc: 'Full-stack E-commerce Management System with admin panel.',
    fullDesc: 'A complete e-commerce management system with product catalog, shopping cart, checkout flow, user management, and a comprehensive admin dashboard. Built with FastAPI backend and React frontend in Docker containers.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    features: ['Product management', 'Shopping cart', 'Admin dashboard', 'Order tracking', 'User management'],
    github: 'https://github.com/jryahia/ecommerce-management-system',
    demo: 'https://jryahia.github.io/ecommerce-management-system/',
    status: 'done'
  },
  {
    id: 12,
    character: '🏠',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'AffittoBot',
    shortDesc: 'Rental contract analyzer for the Italian market.',
    fullDesc: 'AffittoBot is a rental contract analysis tool built for the Italian market. Analyzes lease agreements, extracts key terms, and provides insights for tenants and landlords. FastAPI backend with Next.js frontend.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    tech: ['JavaScript', 'Next.js', 'FastAPI', 'Python', 'LLM'],
    features: ['Contract analysis', 'Key term extraction', 'Italian market focused', 'FastAPI + Next.js', 'Docker ready'],
    github: 'https://github.com/jryahia/affittobot',
    demo: 'https://jryahia.github.io/affittobot/',
    status: 'done'
  },

  // ===== CHOPPER'S TREASURE — AI / Document Processing =====
  {
    id: 13,
    character: '📄',
    bounty: '🌟 CHOPPER\'S TREASURE',
    name: 'AI Document Processor',
    shortDesc: 'Upload documents, extract data with OCR + AI, search and generate reports.',
    fullDesc: 'An AI-powered document processing SaaS platform that extracts text from PDFs, scans, and images using OCR. Organizes content intelligently with AI, enables semantic search across your document library, and generates AI-powered reports.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800',
    tech: ['TypeScript', 'React', 'FastAPI', 'OCR', 'Vector DB'],
    features: ['PDF/image OCR', 'Semantic search', 'Document organization', 'Batch processing', 'AI report generation'],
    github: 'https://github.com/jryahia/ai-document-processing',
    demo: 'https://jryahia.github.io/ai-document-processing/',
    status: 'done'
  },
  {
    id: 14,
    character: '📑',
    bounty: '🌟 CHOPPER\'S TREASURE',
    name: 'Invoice Extractor',
    shortDesc: 'B2B PDF invoice extractor for Italian fatture and ricevute.',
    fullDesc: 'A specialized PDF invoice extraction tool that batch processes Italian B2B invoices (fatture/ricevute). Extracts invoice number, date, total amount, supplier name, VAT number, and line items. Built using OCR and pattern matching with AI fallback.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    tech: ['Python', 'FastAPI', 'OCR', 'PDF', 'LLM'],
    features: ['Batch invoice extraction', 'Italian tax compliance', 'OCR + AI fallback', 'CSV/JSON export', 'VAT detection'],
    github: 'https://github.com/jryahia/invoice-extractor',
    demo: 'https://jryahia.github.io/invoice-extractor/',
    status: 'done'
  },
  {
    id: 15,
    character: '🍽️',
    bounty: '🌟 CHOPPER\'S TREASURE',
    name: 'Menu Analyzer SDK',
    shortDesc: 'AI Menu Analyzer — OCR + 64-language dish analysis via GPT-4 Vision.',
    fullDesc: 'An AI-powered menu analysis SDK that uses OCR and GPT-4 Vision to analyze restaurant menus in 64 languages. Detects dish names, descriptions, prices, dietary information, and generates multilingual translations.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    tech: ['Python', 'GPT-4 Vision', 'OCR', 'FastAPI', 'SDK'],
    features: ['64-language support', 'Dish detection', 'Price extraction', 'Dietary info', 'Multilingual output'],
    github: 'https://github.com/jryahia/menu-analyzer-sdk',
    demo: 'https://jryahia.github.io/menu-analyzer-sdk/',
    status: 'done'
  },

  // ===== ROBIN'S TREASURE — Research / Intelligence =====
  {
    id: 16,
    character: '🔍',
    bounty: '📚 ROBIN\'S TREASURE',
    name: 'Code Review Assistant',
    shortDesc: 'AI-powered code review automation with LLM analysis.',
    fullDesc: 'An intelligent code review assistant that analyzes pull requests, detects bugs, suggests improvements, and enforces coding standards using LLM-powered analysis. Integrates with GitHub API for automated PR reviews with 77 passing tests.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'GitHub API', 'Pytest'],
    features: ['Automated PR reviews', 'Bug detection', 'Style enforcement', '77 passing tests', 'GitHub integration'],
    github: 'https://github.com/jryahia/code-review-assistant',
    demo: 'https://jryahia.github.io/code-review-assistant/',
    status: 'done'
  },
  {
    id: 17,
    character: '🤖',
    bounty: '📚 ROBIN\'S TREASURE',
    name: 'AI Chatbot Builder',
    shortDesc: 'RAG chatbot desktop app with Flet UI, ChromaDB, multi-LLM support.',
    fullDesc: 'A desktop application for building custom AI chatbots trained on your documents. Supports PDF, DOCX, TXT, and website ingestion with a full RAG pipeline using ChromaDB vector store and multi-LLM integration (OpenAI, Anthropic, local models).',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tech: ['Python', 'Flet', 'ChromaDB', 'LLM', 'RAG'],
    features: ['Document ingestion', 'RAG chatbot engine', 'Multi-LLM support', 'Project management', 'Embeddable widget'],
    github: 'https://github.com/jryahia/ai-chatbot-builder',
    demo: 'https://jryahia.github.io/ai-chatbot-builder/',
    status: 'done'
  },
  {
    id: 18,
    character: '🧠',
    bounty: '📚 ROBIN\'S TREASURE',
    name: 'AI Chatbot Builder Pro',
    shortDesc: 'Production RAG chatbot — documents, widgets, multi-LLM, project management.',
    fullDesc: 'The pro version of AI Chatbot Builder with enhanced features: advanced document ingestion pipeline, production-ready RAG engine, embeddable chat widgets for websites, multi-LLM support, and full project management system with a FastAPI backend.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    tech: ['Python', 'Flet', 'FastAPI', 'ChromaDB', 'LLM'],
    features: ['Advanced RAG pipeline', 'Embeddable widgets', 'Project management', 'Multi-LLM', 'API backend'],
    github: 'https://github.com/jryahia/ai-chatbot-builder-pro',
    demo: 'https://jryahia.github.io/ai-chatbot-builder-pro/',
    status: 'done'
  },

  // ===== FRANKY'S TREASURE — Tools / Build =====
  {
    id: 19,
    character: '🤖',
    bounty: '🔧 FRANKY\'S TREASURE',
    name: 'Competitor Monitor Bot',
    shortDesc: 'E-commerce competitor surveillance with Playwright + OpenAI + Telegram.',
    fullDesc: 'An automated e-commerce competitor monitoring bot that uses Playwright for stealth browsing, OpenAI for analysis, and Telegram for alerts. Tracks competitor pricing, product changes, stock status, and sends real-time notifications with a Flet desktop dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['Python', 'Flet', 'Playwright', 'OpenAI', 'Telegram'],
    features: ['Competitor price tracking', 'Playwright stealth', 'AI analysis', 'Telegram alerts', 'Desktop dashboard'],
    github: 'https://github.com/jryahia/competitor-monitor-bot',
    demo: 'https://jryahia.github.io/competitor-monitor-bot/',
    status: 'done'
  },
  {
    id: 20,
    character: '📅',
    bounty: '🔧 FRANKY\'S TREASURE',
    name: 'Social Media Scheduler',
    shortDesc: 'Cross-platform scheduler — post to Twitter, Telegram, Reddit, Discord, Instagram.',
    fullDesc: 'A powerful cross-platform social media scheduler that lets you create, schedule, and auto-post content across Twitter/X, Telegram, Reddit, Discord, and Instagram from one dashboard. Features content calendars, analytics, team collaboration, and Flet desktop UI.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tech: ['Python', 'Flet', 'FastAPI', 'Social APIs', 'SQLite'],
    features: ['5 platform support', 'Content calendar', 'Auto-posting', 'Analytics dashboard', 'Team collaboration'],
    github: 'https://github.com/jryahia/social-media-scheduler',
    demo: 'https://jryahia.github.io/social-media-scheduler/',
    status: 'done'
  },
  {
    id: 21,
    character: '📋',
    bounty: '🔧 FRANKY\'S TREASURE',
    name: 'Appointment Booker',
    shortDesc: 'Python appointment booking bot with Playwright async and health checks.',
    fullDesc: 'An automated appointment booking bot that uses Playwright async for browser automation, httpx for health checks, and pydantic for configuration. Can autonomously navigate booking portals, fill forms, and secure appointments with retry logic.',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
    tech: ['Python', 'Playwright', 'Pydantic', 'Async', 'httpx'],
    features: ['Autonomous booking', 'Playwright async', 'Health checks', 'Retry logic', 'Configurable'],
    github: 'https://github.com/jryahia/appointment-booker',
    demo: 'https://jryahia.github.io/appointment-booker/',
    status: 'done'
  },

  // ===== BROOK'S TREASURE — Communication =====
  {
    id: 22,
    character: '🎵',
    bounty: '🎵 BROOK\'S TREASURE',
    name: 'WhatsApp Voice Clone',
    shortDesc: 'AI that clones your WhatsApp communication style with 6D voice profiling.',
    fullDesc: 'An AI-powered communication assistant that clones any small business owner\'s WhatsApp communication style. Features 6D voice profiling across tone, formality, urgency, empathy, clarity, and directness. Uses GPT-4o-mini for auto-reply generation with Twilio integration and a knowledge base.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800',
    tech: ['Python', 'Twilio', 'GPT-4o', 'FastAPI', 'SQLite'],
    features: ['6D voice profiling', 'GPT-4o-mini replies', 'Twilio integration', 'Knowledge base', 'Business auto-reply'],
    github: 'https://github.com/jryahia/whatsapp-voice-clone',
    demo: 'https://jryahia.github.io/whatsapp-voice-clone/',
    status: 'done'
  },
  {
    id: 23,
    character: '🔐',
    bounty: '🎵 BROOK\'S TREASURE',
    name: 'Lost Password AI',
    shortDesc: 'LLM-driven password recovery assistant — recover access intelligently.',
    fullDesc: 'An AI-powered password recovery assistant that uses LLM reasoning to help users recover lost passwords through intelligent questioning, security analysis, and step-by-step recovery guidance. Supports multiple account types and recovery methods.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'SQLite', 'Pydantic'],
    features: ['Intelligent recovery flow', 'LLM reasoning', 'Multi-account support', 'Security analysis', 'Step-by-step guidance'],
    github: 'https://github.com/jryahia/lost-password-ai',
    demo: 'https://jryahia.github.io/lost-password-ai/',
    status: 'done'
  },
  {
    id: 24,
    character: '🏥',
    bounty: '🎵 BROOK\'S TREASURE',
    name: 'Doctor Website',
    shortDesc: 'Professional doctor website with booking and AI chat assistant.',
    fullDesc: 'A professional doctor/medical clinic website with appointment booking, contact forms, service showcases, and an AI chat assistant powered by OpenAI. Built with FastAPI + SQLite backend, featuring a clean, trustworthy design optimized for patient conversion.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    tech: ['Python', 'FastAPI', 'SQLite', 'OpenAI', 'HTML/CSS'],
    features: ['Appointment booking', 'AI chat assistant', 'Service pages', 'Contact forms', 'Mobile responsive'],
    github: 'https://github.com/jryahia/doctor-website',
    demo: 'https://jryahia.github.io/doctor-website/',
    status: 'done'
  },

  // ===== JINBE'S TREASURE — Infrastructure / Structure =====
  {
    id: 25,
    character: '💼',
    bounty: '🌊 JINBE\'S TREASURE',
    name: 'Dedutto',
    shortDesc: 'Privacy-first expense management for Italian Partita IVA freelancers.',
    fullDesc: 'A privacy-first expense management application specifically designed for Italian Partita IVA freelancers. Tracks business expenses, generates tax reports, manages receipts, and keeps all data local for maximum privacy. Clean tkinter desktop experience.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    tech: ['Python', 'tkinter', 'SQLite', 'Pandas', 'ReportLab'],
    features: ['Expense tracking', 'Tax report generation', 'Receipt management', 'Partita IVA optimized', 'Local privacy'],
    github: 'https://github.com/jryahia/dedutto',
    demo: 'https://jryahia.github.io/dedutto/',
    status: 'done'
  },
  {
    id: 26,
    character: '📈',
    bounty: '🌊 JINBE\'S TREASURE',
    name: 'Business Analytics Dashboard',
    shortDesc: 'Full-stack BI dashboard with real-time analytics and Docker deployment.',
    fullDesc: 'A comprehensive business intelligence dashboard with FastAPI backend, React/TypeScript frontend, and a Flet desktop companion app. Features real-time analytics, interactive KPI tracking, data filtering, report export, and Docker Compose deployment.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker'],
    features: ['Real-time analytics', 'Interactive dashboards', 'Data export', 'Docker deployment', 'Flet desktop app'],
    github: 'https://github.com/jryahia/business-analytics-dashboard',
    demo: 'https://jryahia.github.io/business-analytics-dashboard/',
    status: 'done'
  },
  {
    id: 27,
    character: '🎨',
    bounty: '🌊 JINBE\'S TREASURE',
    name: 'AI Room Designer',
    shortDesc: 'AI-powered interior room design and visualization tool.',
    fullDesc: 'An AI-powered interior design application that generates room layouts, suggests furniture arrangements, and visualizes design concepts. Uses LLM reasoning to understand room dimensions, style preferences, and functional requirements.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'SQLite', 'Pydantic'],
    features: ['AI room layout generation', 'Style suggestions', 'Furniture arrangement', 'Visualization', 'Design export'],
    github: 'https://github.com/jryahia/ai-room-designer',
    demo: 'https://jryahia.github.io/ai-room-designer/',
    status: 'done'
  }
];

let cachedTreasureCards;

function openProjectModal(id) {
  const p = projectsData.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modal-character').textContent = p.character;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-subtitle').textContent = p.fullDesc;
  document.getElementById('modal-image').src = p.image;
  document.getElementById('modal-video').src = p.video || '';
  document.getElementById('modal-tech-stack').innerHTML = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
  document.getElementById('modal-features').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modal-github').href = p.github;
  document.getElementById('modal-demo').href = p.demo;
  document.getElementById('project-modal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  const videoIframe = document.getElementById('modal-video');
  if (videoIframe && videoIframe.src) {
    try { videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); } catch (e) {}
    videoIframe.src = '';
  }
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => `
    <div class="treasure-card" data-id="${p.id}">
      <div class="card-image-container">
        <img class="card-image" src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="card-overlay"><span class="view-details">View Details →</span></div>
        ${p.status === 'in-progress' ? '<div class="in-progress-stamp">⚗️ Still Brewing...</div>' : ''}
      </div>
      <div class="card-character">${p.character}</div>
      <div class="card-bounty">${p.bounty}</div>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-desc">${p.shortDesc}</p>
      <div class="card-tech">${p.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  `).join('');
  cachedTreasureCards = grid.querySelectorAll('.treasure-card');

  // Update bounty stat count
  const bountyStat = document.querySelector('.stat-value');
  if (bountyStat && bountyStat.textContent === '20+') {
    bountyStat.textContent = '28+';
  }
}

function init() {
  renderProjects();

  // Event delegation for cards
  const grid = document.getElementById('projects-grid');
  if (grid) {
    grid.addEventListener('click', e => {
      const card = e.target.closest('.treasure-card');
      if (card) openProjectModal(parseInt(card.dataset.id));
    });
  }

  // Close button
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', e => {
      e.stopPropagation();
      closeProjectModal();
    });
  }

  // Backdrop click
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target.id === 'modal-backdrop') closeProjectModal();
    });
  }

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Filter with debounce
  const filter = document.getElementById('project-filter');
  if (filter) {
    let debounceTimer;
    filter.addEventListener('input', e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const term = e.target.value.toLowerCase();
        const cards = cachedTreasureCards || document.querySelectorAll('.treasure-card');
        cards.forEach(card => {
          const id = parseInt(card.dataset.id);
          const p = projectsData.find(x => x.id === id);
          const match = p && (p.name.toLowerCase().includes(term) || p.tech.some(t => t.toLowerCase().includes(term)));
          card.style.display = match ? '' : 'none';
        });
      }, 300);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
