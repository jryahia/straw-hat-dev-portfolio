const projectsData = [
  // ===== LUFFY'S TREASURE — Flagship Projects =====
  {
    id: 1,
    category: 'ai',
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
    category: 'ai',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
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
    category: 'ai',
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
    category: 'automation',
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
    category: 'automation',
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
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    bounty: '🔥 ZORO\'S TREASURE',
    name: 'n8n Workflow Agent',
    shortDesc: 'AI agent that generates and manages n8n automation workflows.',
    fullDesc: 'An intelligent automation agent that creates, validates, exports, and manages n8n workflows through natural language commands. Features a FastAPI backend with a Flet desktop UI for workflow generation and management, supporting complex multi-step automations.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800',
    tech: ['Python', 'Flet', 'FastAPI', 'n8n API', 'LLM'],
    features: ['Natural language workflow creation', 'Workflow validation', 'Export/import', 'Template library', 'Desktop UI'],
    github: 'https://github.com/jryahia/n8n-workflow-agent',
    demo: 'https://jryahia.github.io/n8n-workflow-agent/',
    status: 'done'
  },

  // ===== NAMI'S TREASURE — Financial / Crypto =====
  {
    id: 7,
    category: 'ai',
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
    category: 'automation',
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
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
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
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3c0 2.5-2 5-4 5-2.5 0-4-2.5-4-5 0-2.5 2-5 4-5 2.5 0 4 2.5 4 5z"/><path d="M9 12c0 2.5 2 5 4 5 2.5 0 4-2.5 4-5 0-2.5-2-5-4-5-2.5 0-4 2.5-4 5z"/><path d="M15 21c0 2.5-2 5-4 5-2.5 0-4-2.5-4-5 0-2.5 2-5 4-5 2.5 0 4 2.5 4 5z"/></svg>',
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
    category: 'web',
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
    category: 'web',
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
    category: 'ai',
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
    category: 'ai',
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
    category: 'ai',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>',
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
    category: 'ai',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
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
    category: 'ai',
    character: '🤖',
    bounty: '📚 ROBIN\'S TREASURE',
    name: 'AI Chatbot Builder',
    shortDesc: 'RAG chatbot desktop app with Flet UI, ChromaDB, multi-LLM support.',
    fullDesc: 'A desktop application for building custom AI chatbots trained on your documents. Supports PDF, DOCX, TXT, and website ingestion with a full RAG pipeline using ChromaDB vector store and multi-LLM integration (OpenAI, Anthropic, local models).',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    tech: ['Python', 'Flet', 'ChromaDB', 'LLM', 'RAG'],
    features: ['Document ingestion', 'RAG chatbot engine', 'Multi-LLM support', 'Project management', 'Embeddable widget'],
    github: 'https://github.com/jryahia/ai-chatbot-builder',
    demo: 'https://jryahia.github.io/ai-chatbot-builder/',
    status: 'done'
  },
  {
    id: 18,
    category: 'ai',
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
    category: 'automation',
    character: '🤖',
    bounty: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> FRANKY\'S TREASURE',
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
    category: 'automation',
    character: '📅',
    bounty: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> FRANKY\'S TREASURE',
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
    category: 'automation',
    character: '📋',
    bounty: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> FRANKY\'S TREASURE',
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
    category: 'ai',
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
    category: 'ai',
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
    category: 'web',
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
    category: 'automation',
    character: '💼',
    bounty: '🌊 JINBE\'S TREASURE',
    name: 'Dedutto',
    shortDesc: 'Privacy-first expense management for Italian Partita IVA freelancers.',
    fullDesc: 'A privacy-first expense management application specifically designed for Italian Partita IVA freelancers. Tracks business expenses, generates tax reports, manages receipts, and keeps all data local for maximum privacy. Clean tkinter desktop experience.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
    tech: ['Python', 'tkinter', 'SQLite', 'Pandas', 'ReportLab'],
    features: ['Expense tracking', 'Tax report generation', 'Receipt management', 'Partita IVA optimized', 'Local privacy'],
    github: 'https://github.com/jryahia/dedutto',
    demo: 'https://jryahia.github.io/dedutto/',
    status: 'done'
  },
  {
    id: 26,
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    bounty: '🌊 JINBE\'S TREASURE',
    name: 'Business Analytics Dashboard',
    shortDesc: 'Full-stack BI dashboard with real-time analytics and Docker deployment.',
    fullDesc: 'A comprehensive business intelligence dashboard with FastAPI backend, React/TypeScript frontend, and a Flet desktop companion app. Features real-time analytics, interactive KPI tracking, data filtering, report export, and Docker Compose deployment.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker'],
    features: ['Real-time analytics', 'Interactive dashboards', 'Data export', 'Docker deployment', 'Flet desktop app'],
    github: 'https://github.com/jryahia/business-analytics-dashboard',
    demo: 'https://jryahia.github.io/business-analytics-dashboard/',
    status: 'done'
  },
  {
    id: 27,
    category: 'ai',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
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
  },
  {
    id: 28,
    category: 'ai',
    character: '🧠',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'AI Agent Dashboard',
    shortDesc: 'Reusable dashboard for configuring custom AI agents — personality, guardrails, business rules.',
    fullDesc: 'A template-driven dashboard that lets non-technical operators configure a production AI agent without touching code: personality sliders, keyword guardrails, business rules, live response preview, and full export/import of the agent config. FastAPI + SQLModel, cosmic-purple themed UI.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    tech: ['Python', 'FastAPI', 'SQLModel', 'Jinja2', 'LLM'],
    features: ['Agent personality config', 'Keyword guardrails', 'Business rules engine', 'Live response preview', 'Config export/import'],
    github: 'https://github.com/jryahia/ai-agent-dashboard',
    demo: '',
    status: 'done'
  },
  {
    id: 29,
    category: 'ai',
    character: '🎯',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'AI Lead Scoring',
    shortDesc: 'Weighted lead scoring with rule-based + AI criteria, auto-written back to the CRM.',
    fullDesc: 'Pulls leads from a CRM, scores them across engagement, intent, firmographic, and behavioral criteria using a transparent rule engine with an optional AI pass, then writes scores and tiers back automatically. Tiered prioritization with actionable recommendations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['Python', 'FastAPI', 'HubSpot', 'Salesforce', 'LLM'],
    features: ['Transparent weighted scores', 'Rule-based + AI scoring', 'CRM write-back', 'Lead tiers', 'Recommendations engine'],
    github: 'https://github.com/jryahia/ai-lead-scoring',
    demo: '',
    status: 'done'
  },
  {
    id: 30,
    category: 'ai',
    character: '🗂️',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'AI Productivity Hub',
    shortDesc: 'Consolidate notes, meetings, and tasks from six tools into one hub with automation rules.',
    fullDesc: 'Syncs Apple Notes, Notion, Airtable, Gmail, Calendly, and Fireflies.ai into a single dashboard. A rule engine turns meeting action items into tasks, auto-tags incoming notes, and an optional AI layer handles tagging and summarization, with all credentials encrypted at rest.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    tech: ['Python', 'FastAPI', 'SQLModel', 'APIs', 'LLM'],
    features: ['6-platform sync', 'Automation rule engine', 'AI tagging/summary', 'Encrypted credentials', 'Unified dashboard'],
    github: 'https://github.com/jryahia/ai-productivity-hub',
    demo: '',
    status: 'done'
  },
  {
    id: 31,
    category: 'ai',
    character: '🎙️',
    bounty: '📚 ROBIN\'S TREASURE',
    name: 'Brand Voice System',
    shortDesc: 'Prompt-engineering framework that enforces consistent brand voice across AI chatbots.',
    fullDesc: 'Turns brand tone and style guidelines into structured system prompts and few-shot examples ready for OpenAI, Anthropic, or generic LLM formats. Includes a prebuilt template library, live prompt preview, and token estimation for a consistent voice across every AI touchpoint.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'Jinja2', 'Prompt engineering'],
    features: ['Structured prompt generation', 'Few-shot examples', 'OpenAI/Anthropic/generic output', 'Template library', 'Token estimation'],
    github: 'https://github.com/jryahia/brand-voice-system',
    demo: '',
    status: 'done'
  },
  {
    id: 32,
    category: 'automation',
    character: '📇',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'CRM Data Enrichment',
    shortDesc: 'Automatically enrich incomplete CRM records with company and contact data.',
    fullDesc: 'Takes incomplete CRM records, a name and email, and fills in company info, job titles, and contact details via AI-powered lookups with confidence scoring. Single and batch enrichment endpoints, plus a dashboard tracking coverage and enrichment quality.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'Clearbit', 'Apollo'],
    features: ['Single + batch enrichment', 'Confidence scoring', 'Company/contact lookup', 'Coverage dashboard', 'Audit logging'],
    github: 'https://github.com/jryahia/crm-data-enrichment',
    demo: '',
    status: 'done'
  },
  {
    id: 33,
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'GHL Appointment Setter',
    shortDesc: 'AI chatbot that qualifies leads and books calls straight into a GoHighLevel calendar.',
    fullDesc: 'An AI chat assistant that replaces an initial-contact SDR: it qualifies incoming leads conversationally, collects contact details, and books calls into the GoHighLevel calendar, with smart slot selection, conflict and blackout checks, and a full audit trail.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tech: ['Python', 'FastAPI', 'GoHighLevel', 'LLM', 'SQLAlchemy'],
    features: ['Conversational qualification', 'GHL calendar booking', 'Smart slot selection', 'Conflict/blackout checks', 'Audit trail'],
    github: 'https://github.com/jryahia/ghl-appointment-setter',
    demo: '',
    status: 'done'
  },
  {
    id: 34,
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'GHL Lead Follow-Up',
    shortDesc: 'AI-qualifies inbound leads and triggers the right follow-up sequence in GoHighLevel.',
    fullDesc: 'When a new lead arrives, an AI qualification pass scores it by budget, intent, and timeline into Hot/Warm/Cold tiers, tags it in GoHighLevel, and fires the appropriate SMS/email/call follow-up sequence, with a keyword-rules fallback when no LLM is configured.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tech: ['Python', 'FastAPI', 'GoHighLevel', 'DeepSeek', 'LLM'],
    features: ['AI lead qualification', 'Hot/Warm/Cold tiers', 'GHL auto-tagging', 'Per-tier SMS/email/call', 'Webhook entry'],
    github: 'https://github.com/jryahia/ghl-lead-followup',
    demo: '',
    status: 'done'
  },
  {
    id: 35,
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'GHL Missed-Call Text-Back',
    shortDesc: 'Catches lost leads: detects missed calls and follows up by SMS within seconds.',
    fullDesc: 'Detects unanswered inbound calls, sends a configurable follow-up SMS within seconds, and logs the lead in GoHighLevel so no prospect slips through. Includes a full dashboard, delivery stats, and a demo mode that runs with no phone lines.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tech: ['Python', 'FastAPI', 'Twilio', 'GoHighLevel', 'SQLAlchemy'],
    features: ['Missed-call detection', 'Instant SMS follow-up', 'GHL lead creation', 'Delivery stats', 'Demo mode'],
    github: 'https://github.com/jryahia/ghl-missed-call-textback',
    demo: '',
    status: 'done'
  },
  {
    id: 36,
    category: 'automation',
    character: '⭐',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'GHL Review Automation',
    shortDesc: 'Auto-requests Google/Facebook/Yelp reviews after a completed job with smart follow-up.',
    fullDesc: 'When a job is marked complete in GoHighLevel, it automatically sends a review request via SMS for Google, Facebook, or Yelp, with smart follow-up, expiry, and a clear lifecycle from pending to submitted. Builds online reputation on autopilot.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
    tech: ['Python', 'FastAPI', 'GoHighLevel', 'SMS', 'SQLAlchemy'],
    features: ['Job-complete webhook', 'Multi-platform reviews', 'Template system', 'Smart follow-up', 'Lifecycle tracking'],
    github: 'https://github.com/jryahia/ghl-review-automation',
    demo: '',
    status: 'done'
  },
  {
    id: 37,
    category: 'automation',
    character: '🔄',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'HubSpot API Integration',
    shortDesc: 'Direct custom API syncing an app with HubSpot CRM for clients who outgrew no-code tools.',
    fullDesc: 'A direct API integration that syncs contacts, deals, and companies with HubSpot CRM for clients who have outgrown Zapier/Make. Full CRUD, search, and bulk sync, with a mock mode that returns realistic data so it runs without keys, plus a kanban pipeline dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['Python', 'FastAPI', 'HubSpot API', 'SQLAlchemy', 'Docker'],
    features: ['Full CRM CRUD + search', 'Bulk contact sync', 'Mock + live modes', 'Kanban pipeline dashboard', '59+ tests'],
    github: 'https://github.com/jryahia/hubspot-api-integration',
    demo: '',
    status: 'done'
  },
  {
    id: 38,
    category: 'automation',
    character: '🔁',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Make CRM Sync',
    shortDesc: 'Webhook receiver syncing web forms to HubSpot CRM with intelligent deduplication.',
    fullDesc: 'A Make.com-style multi-step CRM sync: receives form submissions on a webhook, normalizes the fields, de-duplicates by email/phone/name, and upserts to HubSpot, with configurable field mappings and a live sync dashboard.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
    tech: ['Python', 'FastAPI', 'HubSpot', 'SQLAlchemy', 'Docker'],
    features: ['Form webhook receiver', 'Intelligent deduplication', 'Field mapping', 'Two-way CRM sync', 'Live dashboard'],
    github: 'https://github.com/jryahia/make-crm-sync',
    demo: '',
    status: 'done'
  },
  {
    id: 39,
    category: 'automation',
    character: '🔔',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'E-Commerce Notifications',
    shortDesc: 'One endpoint fans order notifications out to Slack, Telegram, WhatsApp, and email.',
    fullDesc: 'A unified order-notification hub: receives new orders from Shopify, WooCommerce, Amazon, Facebook, and TikTok on one webhook, then fans them out to Slack, Telegram, WhatsApp, and branded HTML email, with high-value alerts and full order-timeline tracking.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
    tech: ['Python', 'FastAPI', 'Slack', 'Telegram', 'Email'],
    features: ['Unified order webhook', 'Slack/Telegram/WhatsApp', 'High-value alerts', 'Order timeline', 'Reprocessing'],
    github: 'https://github.com/jryahia/make-ecommerce-notifications',
    demo: '',
    status: 'done'
  },
  {
    id: 40,
    category: 'automation',
    character: '🧾',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Invoice Automation',
    shortDesc: 'Parse invoices from email and export structured data to accounting.',
    fullDesc: 'Automates invoice-to-accounting bookkeeping: receives invoice emails via a Make.com-style webhook, extracts structured data with an AI-first parser and regex fallback, stores it, and exports to accounting, removing manual data entry.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'SQLAlchemy', 'Docker'],
    features: ['Email webhook ingestion', 'AI + regex parsing', 'Structured extraction', 'Accounting export', 'Vendor registry'],
    github: 'https://github.com/jryahia/make-invoice-automation',
    demo: '',
    status: 'done'
  },
  {
    id: 41,
    category: 'automation',
    character: '🌍',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Social Media Pipeline',
    shortDesc: 'Repurpose one content idea into platform-ready posts across LinkedIn, X, Instagram, and more.',
    fullDesc: 'Turns a single content idea into platform-appropriate posts with the right character limits, tones, and hashtag counts for LinkedIn, X, Instagram, Facebook, and blog formats, then previews and schedules them, with a template-driven generator and optional AI.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'LLM', 'Jinja2'],
    features: ['Multi-platform variants', 'Per-platform profiles', 'Template generation', 'Mock publish/schedule', 'Content stats'],
    github: 'https://github.com/jryahia/make-social-media-pipeline',
    demo: '',
    status: 'done'
  },
  {
    id: 42,
    category: 'automation',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    bounty: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> FRANKY\'S TREASURE',
    name: 'n8n Reporting Agent',
    shortDesc: 'Automated weekly/daily business reports delivered via email or Slack.',
    fullDesc: 'Pulls data from multiple sources including CRM leads, web analytics, and revenue on a schedule, summarizes trends, and sends formatted reports via email or Slack. On-demand report generation, trend labeling, and cron scheduling, as an agent that works alongside n8n.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['Python', 'FastAPI', 'SMTP', 'Slack', 'Cron'],
    features: ['Multi-source data collection', 'AI-style trend summaries', 'Email/Slack delivery', 'Cron scheduling', 'On-demand reports'],
    github: 'https://github.com/jryahia/n8n-reporting-agent',
    demo: '',
    status: 'done'
  },
  {
    id: 43,
    category: 'ai',
    character: '📥',
    bounty: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> FRANKY\'S TREASURE',
    name: 'n8n Support Inbox',
    shortDesc: 'Unifies WhatsApp, email, and web chat into one AI-assisted support inbox.',
    fullDesc: 'A multi-channel support inbox where the AI drafts suggested replies that a human must approve before sending, AI-assisted rather than autonomous. Unifies WhatsApp, email, and website chat, with a keyword rules fallback and full conversation management.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    tech: ['Python', 'FastAPI', 'WhatsApp', 'Email', 'LLM'],
    features: ['Multi-channel inbox', 'AI-drafted replies', 'Human approval gate', 'Keyword rules fallback', 'Conversation history'],
    github: 'https://github.com/jryahia/n8n-support-inbox',
    demo: '',
    status: 'done'
  },
  {
    id: 44,
    category: 'ai',
    character: '🛒',
    bounty: '🎵 BROOK\'S TREASURE',
    name: 'WhatsApp Sales Agent',
    shortDesc: 'A configurable WhatsApp AI sales agent for small businesses, end to end.',
    fullDesc: 'A production-grade WhatsApp business assistant that handles product Q&A, order building, and price negotiation over WhatsApp via Twilio, with guardrail-based human handoff, a server-side negotiation validator that never trusts LLM math for money, encrypted keys, and a full admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556147023-43c64727d0f4?w=800',
    tech: ['Python', 'FastAPI', 'Twilio', 'DeepSeek', 'SQLAlchemy'],
    features: ['Zero-hardcodes config', 'Guardrail handoff', 'Negotiation validator', 'Encrypted API keys', 'Admin dashboard'],
    github: 'https://github.com/jryahia/whatsapp-sales-agent',
    demo: '',
    status: 'done'
  },
  // ===== ROME GRA CLIENT SITES — Real client websites =====
  {
    id: 45,
    category: 'web',
    character: '🖥️',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'AM Technology',
    shortDesc: 'Client website for a Rome East IT repair business — dark cyber-tech design.',
    fullDesc: 'A self-contained client website for AM Technology, computer repair and IT assistance in Rome East. Dark cyber-tech design with glassmorphism, FAQ accordion, mobile menu, JSON-LD structured data, and click-to-call + WhatsApp click-to-chat. One HTML file, zero dependencies, verified at 360/768/1200px.',
    image: 'images/clients/amtechnology.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Click-to-call + WhatsApp CTA', 'JSON-LD structured data', 'Reveal-on-scroll animations', 'FAQ accordion', 'Responsive 360/768/1200'],
    github: 'https://github.com/jryahia/amtechnology',
    demo: 'https://jryahia.github.io/amtechnology/',
    status: 'done'
  },
  {
    id: 46,
    category: 'web',
    character: '🏬',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Datamatic Cash&Carry',
    shortDesc: 'B2B wholesale IT distributor website — catalog, search and trade tone.',
    fullDesc: 'A client website for Datamatic Cash&Carry, Rome\'s IT wholesale distributor. Warm off-white and amber warehouse design with product catalog cards, search, B2B wholesale tone, click-to-call + WhatsApp, Google Maps and JSON-LD structured data. Single-file, zero dependencies.',
    image: 'images/clients/datamatic.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Product catalog cards', 'B2B wholesale messaging', 'WhatsApp click-to-chat', 'Google Maps integration', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/datamatic',
    demo: 'https://jryahia.github.io/datamatic/',
    status: 'done'
  },
  {
    id: 47,
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'H2S Computer',
    shortDesc: 'Local computer shop website — transparent price list, testimonials, opening hours.',
    fullDesc: 'A client website for H2S Computer, a neighborhood computer shop in Rome. Friendly warm design with a transparent price list card, customer testimonials, opening hours, mobile call bar, click-to-call + WhatsApp and JSON-LD structured data. Single-file, zero dependencies.',
    image: 'images/clients/h2s.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Transparent price list', 'Customer testimonials', 'Opening hours', 'Mobile call bar', 'WhatsApp click-to-chat'],
    github: 'https://github.com/jryahia/h2s',
    demo: 'https://jryahia.github.io/h2s/',
    status: 'done'
  },
  {
    id: 48,
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'I-node',
    shortDesc: 'IT consultancy website — cloud, cybersecurity, software development.',
    fullDesc: 'A client website for I-node, an IT consultancy in Rome EUR. Clean corporate trust-focused design with deep navy, service breakdowns, a clear methodology, email CTA with prefilled subject, Google Maps and JSON-LD structured data. Single-file, zero dependencies.',
    image: 'images/clients/inode.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Corporate trust design', 'Services + methodology', 'Email CTA with prefilled subject', 'Google Maps integration', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/inode',
    demo: 'https://jryahia.github.io/inode/',
    status: 'done'
  },
  {
    id: 49,
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'inTown',
    shortDesc: 'Digital studio website — bold playful bento-grid SaaS design.',
    fullDesc: 'A client website for inTown, a digital studio in Rome EUR. Bold playful bento-grid SaaS design with cream, hot pink/orange/teal accents and gradient mesh, covering branding, web, marketing, e-commerce and automation, with click-to-call + WhatsApp. Single-file, zero dependencies.',
    image: 'images/clients/intown.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Bento-grid design', 'Service showcase', 'WhatsApp click-to-chat', 'Google Maps integration', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/intown',
    demo: 'https://jryahia.github.io/intown/',
    status: 'done'
  },
  {
    id: 50,
    category: 'web',
    character: '✒️',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Nuovi Spazi Advertising',
    shortDesc: 'Advertising agency website — minimal editorial with kinetic typography.',
    fullDesc: 'A client website for Nuovi Spazi Advertising, a Rome ad agency. Minimal editorial design with near-white background, serif type, oversized outlined headlines, red accent, marquee and award-show feel. Email CTA with prefilled subject/body, Google Maps and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/nuovispazi.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Kinetic typography', 'Editorial serif design', 'Marquee strips', 'Email CTA with prefilled message', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/nuovispazi',
    demo: 'https://jryahia.github.io/nuovispazi/',
    status: 'done'
  }
,
  {
    id: 51,
    category: 'web',
    character: '💻',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'PC & Smartphone',
    shortDesc: 'Riparazione computer e telefoni a Roma — design fluido e organico.',
    fullDesc: 'A self-contained client website for PC & Smartphone, computer and phone repair in Rome. Liquid organic design with morphing blob shapes, plus trust strip, 4-step process, FAQ, WhatsApp click-to-chat, sticky mobile call bar and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/pc-smartphone.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Liquid blob animations', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar', 'Magnetic buttons', 'Scroll progress bar'],
    github: 'https://github.com/jryahia/pc-smartphone',
    demo: 'https://jryahia.github.io/pc-smartphone/',
    status: 'done'
  },
  {
    id: 52,
    category: 'web',
    character: '👓',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Opto Ricci',
    shortDesc: 'Ottica e telefonia a Roma — estetica grana pellicola vintage.',
    fullDesc: 'A self-contained client website for Opto Ricci, optics and phone services in Rome. Film-grain and vignette aesthetic with editorial serif type, trust strip, process, FAQ, WhatsApp click-to-chat and JSON-LD structured data. Single-file, zero dependencies.',
    image: 'images/clients/opto-ricci.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Film grain + vignette texture', 'Editorial serif typography', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar', 'Back-to-top with progress bar'],
    github: 'https://github.com/jryahia/opto-ricci',
    demo: 'https://jryahia.github.io/opto-ricci/',
    status: 'done'
  },
  {
    id: 53,
    category: 'web',
    character: '🛒',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'SuperCosmo',
    shortDesc: 'Elettronica di consumo a Roma — design AI-first con orbs dinamici.',
    fullDesc: 'A self-contained client website for SuperCosmo, consumer electronics in Rome East. AI-first dynamic design with gradient orbs, glass cards, trust strip, process, FAQ, WhatsApp click-to-chat, magnetic CTAs and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/supercosmo.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['AI-first dynamic design', 'Gradient orb parallax', 'Trust strip + process + FAQ', 'Magnetic CTA buttons', 'Scroll progress bar'],
    github: 'https://github.com/jryahia/supercosmo',
    demo: 'https://jryahia.github.io/supercosmo/',
    status: 'done'
  },
  {
    id: 54,
    category: 'web',
    character: '🎧',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Audio Company',
    shortDesc: 'Hi-Fi e Home Theater a Roma — layout editoriale premium.',
    fullDesc: 'A self-contained client website for Audio Company, hi-fi and home theater in Rome. Editorial magazine layout with serif display type, red accents, quote block, trust strip, process, FAQ, WhatsApp and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/audio-company.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Editorial magazine layout', 'Serif display typography', 'Trust strip + process + FAQ', 'WhatsApp click-to-chat', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/audio-company',
    demo: 'https://jryahia.github.io/audio-company/',
    status: 'done'
  },
  {
    id: 55,
    category: 'web',
    character: '🔌',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Elettronova',
    shortDesc: 'Elettronica e assistenza a Roma — gradienti aurora animati.',
    fullDesc: 'A self-contained client website for Elettronova, electronics repair in Rome. Aurora gradient mesh design with animated pastel blobs, frosted cards, trust strip, process, FAQ, WhatsApp click-to-chat and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/elettronova.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Animated aurora gradient mesh', 'Frosted glass cards', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar', 'Scroll progress bar'],
    github: 'https://github.com/jryahia/elettronova',
    demo: 'https://jryahia.github.io/elettronova/',
    status: 'done'
  },
  {
    id: 56,
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Cellulopoli',
    shortDesc: 'Telefonia e accessori a Roma — glassmorphism su gradienti.',
    fullDesc: 'A self-contained client website for Cellulopoli, phone sales and repairs in Rome. Glassmorphism design with frosted panels over a vivid gradient, floating orbs, trust strip, process, FAQ, WhatsApp and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/cellulopoli.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Glassmorphism panels', 'Vivid gradient orbs', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/cellulopoli',
    demo: 'https://jryahia.github.io/cellulopoli/',
    status: 'done'
  },
  {
    id: 57,
    category: 'web',
    character: '🛍️',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'YoJa Store',
    shortDesc: 'Telefonia e gadget a Roma — stile retro-futurista neon.',
    fullDesc: 'A self-contained client website for YoJa Store, phones and gadgets in Rome. Retro-futurism Y2K design with chrome text, neon glow, marquee, trust strip, process, FAQ, WhatsApp click-to-chat and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/yoja-store.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Retro-futurism Y2K chrome', 'Neon glow effects', 'Marquee strip', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar'],
    github: 'https://github.com/jryahia/yoja-store',
    demo: 'https://jryahia.github.io/yoja-store/',
    status: 'done'
  },
  {
    id: 58,
    category: 'web',
    character: '💡',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Elettricità Lauteri',
    shortDesc: 'Elettricità dal 1960 a Roma — skeuomorphism classico moderno.',
    fullDesc: 'A self-contained client website for Elettricità Lauteri Umberto, electrical goods since 1960 in central Rome. Skeuomorphism 2.0 design with realistic plates and wood tones, trust strip, process, FAQ, WhatsApp and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/lauteri.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Skeuomorphism 2.0 textures', 'Heritage "since 1960" story', 'Trust strip + process + FAQ', 'WhatsApp click-to-chat', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/lauteri',
    demo: 'https://jryahia.github.io/lauteri/',
    status: 'done'
  },
  {
    id: 59,
    category: 'web',
    character: '🖥️',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'IBL Computer',
    shortDesc: 'Informatica e assistenza a Roma — micro-interazioni ricche.',
    fullDesc: 'A self-contained client website for IBL Computer, IT services in Rome. Micro-interaction-rich design with cursor-follow glow, magnetic buttons, icon pops, trust strip, process, FAQ, WhatsApp and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/ibl-computer.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Cursor-follow card glow', 'Magnetic hover buttons', 'Icon pop animations', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar'],
    github: 'https://github.com/jryahia/ibl-computer',
    demo: 'https://jryahia.github.io/ibl-computer/',
    status: 'done'
  },
  {
    id: 60,
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Telemania Service',
    shortDesc: 'Telefonia e riparazioni a Roma — storytelling a scorrimento.',
    fullDesc: 'A self-contained client website for Telemania Service, phone repairs in Rome East. Scrollytelling design with full-height story steps, scroll progress bar, trust strip, FAQ, WhatsApp click-to-chat and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/telemania.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Scrollytelling story steps', 'Scroll progress bar', 'Trust strip + FAQ', 'Sticky mobile call/WhatsApp bar', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/telemania',
    demo: 'https://jryahia.github.io/telemania/',
    status: 'done'
  },
  {
    id: 61,
    category: 'web',
    character: '<svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Restart Computer',
    shortDesc: 'Informatica e recupero dati a Roma — neo-brutalismo audace.',
    fullDesc: 'A self-contained client website for Restart Computer, data recovery and repairs in Rome. Neo-brutalism design with hard borders, offset shadows, marquee, trust strip, process, FAQ, WhatsApp and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/restart-computer.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Neo-brutalist hard borders', 'Offset shadow cards', 'Marquee strip', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar'],
    github: 'https://github.com/jryahia/restart-computer',
    demo: 'https://jryahia.github.io/restart-computer/',
    status: 'done'
  },
  {
    id: 62,
    category: 'web',
    character: '🔋',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Elettricità Liso',
    shortDesc: 'Elettricità ed elettronica a Roma — claymorphism morbido.',
    fullDesc: 'A self-contained client website for Elettricità Liso, electrical goods in Rome Esquilino. Claymorphism design with soft squishy shadows and pastel cards, trust strip, process, FAQ, WhatsApp click-to-chat and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/elettricita-liso.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Claymorphism soft shadows', 'Pastel clay cards', 'Trust strip + process + FAQ', 'WhatsApp click-to-chat', 'JSON-LD structured data'],
    github: 'https://github.com/jryahia/elettricita-liso',
    demo: 'https://jryahia.github.io/elettricita-liso/',
    status: 'done'
  },
  {
    id: 63,
    category: 'web',
    character: '🐴',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Pegasus',
    shortDesc: 'Servizi IT a Roma Nord — design 3D immersivo con prospettiva.',
    fullDesc: 'A self-contained client website for Pegasus, IT services for professionals in Rome North. 3D immersive design with perspective-tilted cards, floating elements, trust strip, process, FAQ, WhatsApp and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/pegasus.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['3D perspective cards', 'Floating 3D elements', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar', 'Scroll progress bar'],
    github: 'https://github.com/jryahia/pegasus',
    demo: 'https://jryahia.github.io/pegasus/',
    status: 'done'
  },
  {
    id: 64,
    category: 'web',
    character: '🎮',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Max PC',
    shortDesc: 'PC e gaming a Roma — griglia asimmetrica spezzata.',
    fullDesc: 'A self-contained client website for Max PC, gaming and IT in Rome Parioli. Asymmetric broken-grid design with rotated cards, marquee, trust strip, process, FAQ, WhatsApp click-to-chat and JSON-LD. Single-file, zero dependencies.',
    image: 'images/clients/max-pc.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Asymmetric broken grid', 'Rotated card layout', 'Marquee strip', 'Trust strip + process + FAQ', 'Sticky mobile call/WhatsApp bar'],
    github: 'https://github.com/jryahia/max-pc',
    demo: 'https://jryahia.github.io/max-pc/',
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
  const catEl = document.getElementById('modal-cat');
  if (catEl) catEl.textContent = p.category ? `${catLabel(p.category)} Project` : '';
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

// Runs cb now if the projects panel is already active, and again every time it
// gains .active. Section switching only toggles the class — the panel and its
// cards stay in the DOM — so re-entry has to be handled explicitly.
function onProjectsPanelActive(panel, cb) {
  if (!panel) return;
  let wasActive = panel.classList.contains('active');
  if (wasActive) cb();
  if (!('MutationObserver' in window)) return;
  const watcher = new MutationObserver(() => {
    const isActive = panel.classList.contains('active');
    if (isActive && !wasActive) cb();
    wasActive = isActive;
  });
  watcher.observe(panel, { attributes: true, attributeFilter: ['class'] });
}

// Fade + slide-up the treasure cards as they scroll into the projects panel.
// #projects-content is the scroll container, so it has to be the observer root.
function revealOnScroll(grid) {
  const panel = document.getElementById('projects-content');
  const cards = grid ? Array.prototype.slice.call(grid.querySelectorAll('.treasure-card')) : [];

  // The panel keeps its scrollTop across section switches, so returning to it
  // used to drop you mid-gallery. Always land at the top.
  const resetScroll = () => {
    if (!panel) return;
    const prev = panel.style.scrollBehavior;
    panel.style.scrollBehavior = 'auto'; // beat scroll-behavior:smooth (style.css)
    panel.scrollTop = 0;
    panel.style.scrollBehavior = prev;
  };

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!grid || reduceMotion || !('IntersectionObserver' in window)) {
    onProjectsPanelActive(panel, resetScroll);
    return;
  }

  cards.forEach((card, i) => {
    card.classList.add('reveal');
    // Small cascade, capped at 160ms
    card.dataset.revealDelay = (i % 5) * 40;
  });

  let observer = null;
  let started = false;

  // The panel itself only starts fading in 550ms after it goes .active
  // (style.css), so the on-entry cascade is offset to land inside that fade
  // instead of finishing while the panel is still invisible.
  const ENTRY_DELAY = 550;

  const revealCard = (card, obs, baseDelay) => {
    const base = baseDelay || 0;
    card.style.transitionDelay = (base + Number(card.dataset.revealDelay || 0)) + 'ms';
    card.classList.add('revealed');
    // Drop the delay once revealed so it never lags the hover transition
    setTimeout(() => { card.style.transitionDelay = ''; }, 800 + base);
    if (obs) obs.unobserve(card);
  };

  // Anything already inside the panel's viewport when it opens must not wait for
  // a scroll event — that is what left cards stuck at opacity 0 on re-entry.
  const revealInView = () => {
    if (!panel) return;
    const view = panel.getBoundingClientRect();
    cards.forEach(card => {
      if (card.classList.contains('revealed')) return;
      const r = card.getBoundingClientRect();
      if (!r.height) return; // filtered out of the grid
      if (r.top < view.bottom && r.bottom > view.top) revealCard(card, observer, ENTRY_DELAY);
    });
  };

  // Re-arm from a clean slate on every activation: the observer unobserves each
  // card as it reveals, so a returning visitor needs every card observed again.
  const start = () => {
    started = true;
    if (observer) observer.disconnect();
    cards.forEach(card => {
      card.classList.remove('revealed');
      card.style.transitionDelay = '';
    });
    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) revealCard(entry.target, obs);
      });
    }, { root: panel, threshold: 0.12 });
    cards.forEach(card => observer.observe(card));
    requestAnimationFrame(revealInView);
  };

  // The panel is offscreen-but-measurable until it gets .active, so wait for it:
  // otherwise the first rows reveal while the section is still hidden.
  onProjectsPanelActive(panel, () => {
    resetScroll();
    start();
  });

  // Fail-safe: if there is nothing to hook activation on (panel missing, or no
  // MutationObserver support and the panel starts inactive), reveal anyway
  // rather than leaving the cards permanently hidden.
  if (!panel || !('MutationObserver' in window)) {
    setTimeout(() => { if (!started) start(); }, 3000);
  }
}

const CAT_LABELS = { ai: 'AI', automation: 'Automation', web: 'Websites' };
function catLabel(c) { return CAT_LABELS[c] || c; }

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => `
    <div class="treasure-card" data-id="${p.id}" data-cat="${p.category || ''}">
      <div class="card-image-container">
        <img class="card-image" src="${p.image}" alt="${p.name}">
        <div class="card-overlay"><span class="view-details">View Details →</span></div>
        ${p.status === 'in-progress' ? '<div class="in-progress-stamp">⚗️ Still Brewing...</div>' : ''}
        ${p.category ? `<div class="card-cat cat-${p.category}"><span>${catLabel(p.category)}</span></div>` : ''}
      </div>
      <div class="card-character">${p.character}</div>
      <div class="card-bounty">${p.bounty}</div>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-desc">${p.shortDesc}</p>
      <div class="card-tech">${p.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  `).join('');
  cachedTreasureCards = grid.querySelectorAll('.treasure-card');
  revealOnScroll(grid);

  // Fill category tab counts
  const counts = { all: projectsData.length, ai: 0, automation: 0, web: 0 };
  projectsData.forEach(p => { if (counts[p.category] !== undefined) counts[p.category]++; });
  document.querySelectorAll('.cat-count').forEach(el => {
    const tab = el.closest('.cat-tab');
    if (tab) el.textContent = counts[tab.dataset.cat] || 0;
  });

  // 3D tilt on hover — pro library browsing feel
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  cachedTreasureCards.forEach(card => {
    card.classList.add('tilt');
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${(px * 10).toFixed(2)}deg) rotateX(${(-py * 10).toFixed(2)}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  // Update bounty stat count
  const bountyStat = document.querySelector('.stat-value');
  if (bountyStat && (bountyStat.textContent === '20+' || bountyStat.textContent === '28+' || bountyStat.textContent === '34+')) {
    bountyStat.textContent = '55';
  }
}

// Combined category + search filter. Returns visible card count.
function applyFilters() {
  const filter = document.getElementById('project-filter');
  const term = (filter && filter.value ? filter.value : '').toLowerCase();
  const cards = cachedTreasureCards || document.querySelectorAll('.treasure-card');
  let visible = 0;
  cards.forEach(card => {
    const p = projectsData.find(x => x.id === parseInt(card.dataset.id));
    if (!p) { card.style.display = 'none'; return; }
    const catOk = activeCat === 'all' || p.category === activeCat;
    const termOk = !term
      || p.name.toLowerCase().includes(term)
      || p.tech.some(t => t.toLowerCase().includes(term))
      || (p.shortDesc || '').toLowerCase().includes(term);
    const show = catOk && termOk;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  return visible;
}

// Cards hidden by a filter get skipped by the reveal observer; surface them
// immediately so a filtered view never shows invisible cards.
function forceRevealVisible() {
  const cards = cachedTreasureCards || document.querySelectorAll('.treasure-card');
  cards.forEach(card => {
    if (card.style.display === 'none') return;
    if (!card.classList.contains('revealed')) card.classList.add('revealed');
  });
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

  // Category tabs
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeCat = tab.dataset.cat;
      tabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      applyFilters();
      forceRevealVisible();
      if (window.setCategoryTint) window.setCategoryTint(activeCat);
    });
  });

  // Filter with debounce
  const filter = document.getElementById('project-filter');
  if (filter) {
    let debounceTimer;
    filter.addEventListener('input', e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        applyFilters();
        forceRevealVisible();
      }, 300);
    });
  }
}

let activeCat = 'all';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
