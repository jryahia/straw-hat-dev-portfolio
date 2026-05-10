const projectsData = [
  {
    id: 1,
    character: '📊',
    bounty: '⭐ LUFFY\'S TREASURE',
    name: 'Business Insight Playground',
    shortDesc: 'Interactive data visualization & analytics dashboard.',
    fullDesc: 'A powerful business intelligence dashboard with real-time charts, KPI tracking, and interactive data exploration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tech: ['React', 'Chart.js', 'TailwindCSS', 'Data Viz'],
    features: ['Interactive charts', 'KPI dashboard', 'Data filtering', 'Export reports'],
    github: 'https://github.com/jryahia/business-insight-playground',
    demo: '#',
    status: 'in-progress'
  },
  {
    id: 2,
    character: '🧠',
    bounty: '🔥 ZORO\'S TREASURE',
    name: 'LifeOS v3',
    shortDesc: 'All-in-one personal productivity & life management app.',
    fullDesc: 'A full-featured life operating system with tasks, habits, finance tracker, and focus timer — all in one glassmorphism UI.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    tech: ['React', 'Firebase', 'TailwindCSS', 'GSAP'],
    features: ['Task & habit tracking', 'Finance dashboard', 'Focus timer', 'Multiple themes'],
    github: 'https://github.com/jryahia/lifeos-v3',
    demo: '#',
    status: 'in-progress'
  },
  {
    id: 3,
    character: '🍽️',
    bounty: '💫 SANJI\'S TREASURE',
    name: 'Restaurant Websites',
    shortDesc: 'Collection of custom restaurant web experiences.',
    fullDesc: 'A curated collection of elegant restaurant websites built for real clients.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    tech: ['JavaScript', 'React', 'Node.js', 'CSS3'],
    features: ['Multiple restaurant sites', 'Booking systems', 'Interactive menus'],
    github: '#',
    demo: '#',
    status: 'done',
    isGroup: true,
    groupType: 'restaurants',
    subProjects: [
      {
        id: 'r1',
        name: 'Resto Bonta',
        character: '🍝',
        shortDesc: 'Elegant Italian restaurant landing page with menu and reservations.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        features: ['Interactive menu', 'Reservation form', 'Mobile responsive'],
        github: 'https://github.com/jryahia/resto-bonta',
        demo: '#',
        status: 'done'
      },
      {
        id: 'r2',
        name: 'Resto Project 3',
        character: '🍕',
        shortDesc: 'Modern restaurant web experience with admin panel.',
        tech: ['React', 'Node.js', 'TailwindCSS'],
        features: ['Dynamic menu', 'Admin panel', 'Booking system'],
        github: 'https://github.com/jryahia/resto-project-3',
        demo: '#',
        status: 'in-progress'
      }
    ]
  },
  {
    id: 4,
    character: '🦌',
    bounty: '🌟 CHOPPER\'S TREASURE',
    name: 'Doctor Websites',
    shortDesc: 'Collection of custom medical & clinic web experiences.',
    fullDesc: 'Professional websites built for doctors and medical clinics — clean, trustworthy design with appointment booking and service showcases.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    tech: ['React', 'JavaScript', 'TailwindCSS', 'CSS3'],
    features: ['Multiple clinic sites', 'Appointment booking', 'Service pages'],
    github: '#',
    demo: '#',
    status: 'in-progress',
    isGroup: true,
    groupType: 'doctors',
    subProjects: [
      {
        id: 'd1',
        name: 'Doctor Website 1',
        character: '🩺',
        shortDesc: 'Clean medical clinic landing page with appointment system.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        features: ['Appointment booking', 'Services showcase', 'Mobile responsive'],
        github: '#',
        demo: '#',
        status: 'in-progress'
      },
      {
        id: 'd2',
        name: 'Doctor Website 2',
        character: '💊',
        shortDesc: 'Modern healthcare platform with patient portal.',
        tech: ['React', 'TailwindCSS', 'Node.js'],
        features: ['Patient portal', 'Doctor profiles', 'Online consultation'],
        github: '#',
        demo: '#',
        status: 'in-progress'
      }
    ]
  },
  {
    id: 5,
    character: '🚀',
    bounty: '💎 ROBIN\'S TREASURE',
    name: 'SaaS Marketing Website',
    shortDesc: 'High-converting SaaS landing page with premium animations.',
    fullDesc: 'A stunning SaaS marketing website with GSAP scroll animations, interactive pricing, and conversion-optimized sections.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    tech: ['React', 'GSAP', 'TailwindCSS', 'Node.js'],
    features: ['GSAP scroll animations', 'Pricing section', 'Auth flow', 'Admin panel'],
    github: 'https://github.com/jryahia/saas-marketing-website',
    demo: '#',
    status: 'in-progress'
  },
  {
    id: 6,
    character: '🤖',
    bounty: '⚡ FRANKY\'S TREASURE',
    name: 'AI Chatbot Builder Pro',
    shortDesc: 'Desktop app to build custom AI chatbots from your documents.',
    fullDesc: 'A production-quality desktop application for building and deploying AI chatbots trained on custom documents. Supports PDF, DOCX, TXT, and website ingestion with RAG pipeline and LLM integration.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tech: ['Python', 'Flet', 'FastAPI', 'ChromaDB', 'LLM'],
    features: ['Document ingestion', 'RAG chatbot engine', 'Embeddable widget', 'Multiple LLM support', 'Project management'],
    github: 'https://github.com/jryahia/ai-chatbot-builder-pro',
    demo: '#',
    status: 'done'
  },
  {
    id: 7,
    character: '📈',
    bounty: '💼 NAMI\'S TREASURE',
    name: 'Business Analytics Dashboard',
    shortDesc: 'Full-stack business intelligence dashboard with real-time analytics.',
    fullDesc: 'A comprehensive business analytics platform with FastAPI backend, React/Typescript frontend, and a Flet desktop companion app. Docker Compose ready.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['FastAPI', 'React', 'TypeScript', 'Flet', 'Docker'],
    features: ['Real-time analytics', 'Interactive dashboards', 'Data export', 'Docker deployment'],
    github: 'https://github.com/jryahia/business-analytics-dashboard',
    demo: '#',
    status: 'done'
  },
  {
    id: 8,
    character: '🔍',
    bounty: '📚 BROOK\'S TREASURE',
    name: 'Code Review Assistant',
    shortDesc: 'AI-powered code review automation tool.',
    fullDesc: 'An intelligent code review assistant that analyzes pull requests, detects bugs, suggests improvements, and enforces coding standards using LLM-powered analysis.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    tech: ['Python', 'FastAPI', 'LLM', 'GitHub API', 'SQLite'],
    features: ['Automated PR reviews', 'Bug detection', 'Style enforcement', 'Performance analysis'],
    github: 'https://github.com/jryahia/code-review-assistant',
    demo: '#',
    status: 'done'
  },
  {
    id: 9,
    character: '🪙',
    bounty: '💰 TREASURY',
    name: 'Crypto & Polymarket Bot',
    shortDesc: 'Autonomous trading bot with memory, soul, and adaptive skills.',
    fullDesc: 'A sophisticated LLM-powered trading bot for crypto and Polymarket prediction markets. Features a persistent memory system, adaptive skill scripts, soul module for personality, and multi-source signal aggregation.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    tech: ['Python', 'Web3', 'Polymarket API', 'LLM', 'SQLite'],
    features: ['Multi-source signals', 'Soul personality module', 'Adaptive skills', 'Portfolio management', 'Risk engine'],
    github: 'https://github.com/jryahia/crypto-polymarket-bot',
    demo: '#',
    status: 'in-progress'
  },
  {
    id: 10,
    character: '🛒',
    bounty: '🏪 FRANKY\'S WORKSHOP',
    name: 'E-Commerce System',
    shortDesc: 'Full-featured e-commerce platform with admin panel.',
    fullDesc: 'A complete e-commerce management system with product catalog, cart, checkout, user management, and a comprehensive admin dashboard for store operations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    features: ['Product management', 'Shopping cart', 'Admin dashboard', 'Order tracking'],
    github: 'https://github.com/jryahia/ecommerce-management-system',
    demo: '#',
    status: 'done'
  },
  {
    id: 11,
    character: '🐋',
    bounty: '🌊 SEA WATCHER',
    name: 'Smart Wallet Tracker',
    shortDesc: 'Track whale wallets and smart money on-chain.',
    fullDesc: 'Monitor large crypto wallet movements and smart money transactions in real-time. Get alerts on whale activity, track portfolio changes, and analyze on-chain behavior patterns.',
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800',
    tech: ['Python', 'Web3', 'Etherscan API', 'SQLite', 'Async'],
    features: ['Whale alerts', 'Portfolio tracking', 'Transaction monitoring', 'Multi-chain support'],
    github: 'https://github.com/jryahia/smart-wallet-tracker',
    demo: '#',
    status: 'done'
  },
  {
    id: 12,
    character: '🚀',
    bounty: '💎 TREASURE HUNTER',
    name: 'Meme Coin Scanner',
    shortDesc: 'Desktop app to scan and discover meme coins early.',
    fullDesc: 'A Flet-based desktop application that scans blockchain data to discover trending meme coins early, analyzes liquidity pools, tracks price movements, and surfaces high-potential tokens before they pump.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
    tech: ['Python', 'Flet', 'Web3', 'DEX APIs'],
    features: ['Early token detection', 'Liquidity analysis', 'Price tracking', 'Trending scanner'],
    github: 'https://github.com/jryahia/meme-coin-scanner',
    demo: '#',
    status: 'done'
  },
  {
    id: 13,
    character: '📄',
    bounty: '📚 ROBIN\'S RESEARCH',
    name: 'AI Document Processor',
    shortDesc: 'Extract, organize, and search documents with AI.',
    fullDesc: 'An AI-powered document processing platform that extracts text from PDFs, scans, and images, organizes content intelligently, and enables semantic search across your entire document library.',
    image: 'https://images.unsplash.com/photo-1568659410649-8949e1b129ff?w=800',
    tech: ['Python', 'FastAPI', 'React', 'OCR', 'Vector DB'],
    features: ['PDF/image OCR', 'Semantic search', 'Document organization', 'Batch processing'],
    github: 'https://github.com/jryahia/ai-document-processing',
    demo: '#',
    status: 'done'
  },
  {
    id: 14,
    character: '⚡',
    bounty: '🔧 FRANKY\'S GADGET',
    name: 'n8n Workflow Agent',
    shortDesc: 'AI agent that generates and manages n8n automation workflows.',
    fullDesc: 'An intelligent automation agent that creates, validates, exports, and manages n8n workflows through natural language commands. Features a FastAPI backend with an intuitive UI for workflow generation.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800',
    tech: ['Python', 'FastAPI', 'n8n API', 'LLM', 'SQLite'],
    features: ['Natural language workflow creation', 'Workflow validation', 'Export/import', 'Template library'],
    github: 'https://github.com/jryahia/n8n-workflow-agent',
    demo: '#',
    status: 'done'
  },
  {
    id: 15,
    character: '🕷️',
    bounty: '🌐 COLLECTOR',
    name: 'Scraper Platform',
    shortDesc: 'Modular multi-source web scraping and data collection platform.',
    fullDesc: 'A scalable data scraping platform with modular scrapers for multiple sources (Amazon, social media, job boards). Features API-driven architecture, persistent storage, configurable pipelines, and a web UI for managing scrapes.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tech: ['Python', 'FastAPI', 'SQLite', 'Docker', 'BeautifulSoup'],
    features: ['Multi-source scraping', 'Configurable pipelines', 'API backend', 'Web UI dashboard'],
    github: 'https://github.com/jryahia/scraper-platform',
    demo: '#',
    status: 'done'
  },
  {
    id: 16,
    character: '📅',
    bounty: '⏰ SCHEDULER',
    name: 'Social Media Scheduler',
    shortDesc: 'Automated social media posting and scheduling platform.',
    fullDesc: 'A cross-platform social media scheduler that lets you create, schedule, and publish content across multiple social platforms from one dashboard. Features content calendars, analytics, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tech: ['Python', 'FastAPI', 'Social APIs', 'SQLite', 'Cron'],
    features: ['Cross-platform posting', 'Content calendar', 'Scheduling', 'Analytics dashboard'],
    github: 'https://github.com/jryahia/social-media-scheduler',
    demo: '#',
    status: 'done'
  },
  {
    id: 17,
    character: '💳',
    bounty: '💰 TREASURY ANALYST',
    name: 'Wallet Analyzer',
    shortDesc: 'Deep analysis of crypto wallets, tokens, and DeFi positions.',
    fullDesc: 'A comprehensive crypto wallet analysis tool that tracks token balances, DeFi positions, transaction history, and generates detailed portfolio reports with profit/loss calculations.',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800',
    tech: ['Python', 'Web3', 'DeFi APIs', 'SQLite', 'Pandas'],
    features: ['Portfolio analysis', 'P&L tracking', 'DeFi positions', 'Transaction history'],
    github: 'https://github.com/jryahia/wallet-analyzer',
    demo: '#',
    status: 'done'
  }
];

let cachedTreasureCards;

function openProjectModal(id){
const p=projectsData.find(x=>x.id===id);
if(!p)return;
if(p.isGroup){
openSubProjectsOverlay(p);
return;
}
document.getElementById('modal-character').textContent=p.character;
document.getElementById('modal-title').textContent=p.name;
document.getElementById('modal-subtitle').textContent=p.fullDesc;
document.getElementById('modal-image').src=p.image;
document.getElementById('modal-video').src=p.video||'';
document.getElementById('modal-tech-stack').innerHTML=p.tech.map(t=>`<span class="tech-badge">${t}</span>`).join('');
document.getElementById('modal-features').innerHTML=p.features.map(f=>`<li>${f}</li>`).join('');
document.getElementById('modal-github').href=p.github;
document.getElementById('modal-demo').href=p.demo;
document.getElementById('project-modal').classList.add('active');
document.body.classList.add('modal-open');
}

function closeProjectModal(){
const modal=document.getElementById('project-modal');
modal.classList.remove('active');
document.body.classList.remove('modal-open');
const videoIframe=document.getElementById('modal-video');
if(videoIframe&&videoIframe.src){
try{videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');}catch(e){}
videoIframe.src='';
}
}

function renderProjects(){
const grid=document.getElementById('projects-grid');
if(!grid)return;
grid.innerHTML=projectsData.map(p=>`
<div class="treasure-card" data-id="${p.id}">
<div class="card-image-container">
<img class="card-image" src="${p.image}" alt="${p.name}">
<div class="card-overlay"><span class="view-details">View Details →</span></div>
${p.status==='in-progress'?'<div class="in-progress-stamp">⚗️ Still Brewing...</div>':''}
</div>
<div class="card-character">${p.character}</div>
<div class="card-bounty">${p.bounty}</div>
<h3 class="card-name">${p.name}</h3>
<p class="card-desc">${p.shortDesc}</p>
<div class="card-tech">${p.tech.slice(0,4).map(t=>`<span>${t}</span>`).join('')}</div>
</div>
`).join('');
cachedTreasureCards=grid.querySelectorAll('.treasure-card');
}

function init(){
renderProjects();

// Event delegation for cards
const grid=document.getElementById('projects-grid');
if(grid){
grid.addEventListener('click',e=>{
const card=e.target.closest('.treasure-card');
if(card)openProjectModal(parseInt(card.dataset.id));
});
}

// Close button
const closeBtn=document.getElementById('modal-close-btn');
if(closeBtn){
closeBtn.addEventListener('click',e=>{
e.stopPropagation();
closeProjectModal();
});
}

// Backdrop only
const modal=document.getElementById('project-modal');
if(modal){
modal.addEventListener('click',e=>{
if(e.target.id==='modal-backdrop')closeProjectModal();
});
}

// ESC key
document.addEventListener('keydown',e=>{
if(e.key==='Escape')closeProjectModal();
});

// Filter with debounce
const filter=document.getElementById('project-filter');
if(filter){
let debounceTimer;
filter.addEventListener('input',e=>{
clearTimeout(debounceTimer);
debounceTimer=setTimeout(()=>{
const term=e.target.value.toLowerCase();
const cards=cachedTreasureCards||document.querySelectorAll('.treasure-card');
cards.forEach(card=>{
const id=parseInt(card.dataset.id);
const p=projectsData.find(x=>x.id===id);
const match=p&&(p.name.toLowerCase().includes(term)||p.tech.some(t=>t.toLowerCase().includes(term)));
card.style.display=match?'':'none';
});
},300);
});
}
}

if(document.readyState==='loading'){
document.addEventListener('DOMContentLoaded',init);
}else{
init();
}

function openSubProjectsOverlay(project){
if(!project.isGroup||!project.subProjects)return;
const overlayId=`sub-projects-overlay-${project.groupType}`;
const gridId=`sub-projects-grid-${project.groupType}`;
const overlay=document.getElementById(overlayId);
const grid=document.getElementById(gridId);
if(!overlay||!grid)return;
grid.innerHTML=project.subProjects.map(sp=>`
<div class="sub-project-card">
<div class="sub-card-header">
<div class="sub-card-character">${sp.character}</div>
<h3 class="sub-card-name">${sp.name}</h3>
${sp.status==='in-progress'?'<div class="sub-card-status">⚗️ In Progress</div>':''}
</div>
<p class="sub-card-desc">${sp.shortDesc}</p>
<div class="sub-card-tech">${sp.tech.map(t=>`<span class="sub-tech-badge">${t}</span>`).join('')}</div>
<div class="sub-card-actions">
<a href="${sp.github}" target="_blank" rel="noopener noreferrer" class="sub-action-btn">⚓ View Code</a>
<a href="${sp.demo}" target="_blank" rel="noopener noreferrer" class="sub-action-btn primary">🌊 Live Demo</a>
</div>
</div>
`).join('');
overlay.classList.add('active');
document.body.classList.add('modal-open');
}

function closeSubProjectsOverlay(groupType){
const overlayId=`sub-projects-overlay-${groupType}`;
const overlay=document.getElementById(overlayId);
if(!overlay)return;
overlay.classList.remove('active');
document.body.classList.remove('modal-open');
}

// Restaurant overlay handlers
const subBackBtnRestaurants=document.getElementById('sub-projects-back-restaurants');
if(subBackBtnRestaurants){
subBackBtnRestaurants.addEventListener('click',()=>closeSubProjectsOverlay('restaurants'));
}

const subBackdropRestaurants=document.getElementById('sub-projects-backdrop-restaurants');
if(subBackdropRestaurants){
subBackdropRestaurants.addEventListener('click',()=>closeSubProjectsOverlay('restaurants'));
}

// Doctor overlay handlers
const subBackBtnDoctors=document.getElementById('sub-projects-back-doctors');
if(subBackBtnDoctors){
subBackBtnDoctors.addEventListener('click',()=>closeSubProjectsOverlay('doctors'));
}

const subBackdropDoctors=document.getElementById('sub-projects-backdrop-doctors');
if(subBackdropDoctors){
subBackdropDoctors.addEventListener('click',()=>closeSubProjectsOverlay('doctors'));
}

// ESC key for overlays
document.addEventListener('keydown',e=>{
if(e.key==='Escape'){
const restaurantsOverlay=document.getElementById('sub-projects-overlay-restaurants');
const doctorsOverlay=document.getElementById('sub-projects-overlay-doctors');
if(restaurantsOverlay&&restaurantsOverlay.classList.contains('active')){
closeSubProjectsOverlay('restaurants');
}
if(doctorsOverlay&&doctorsOverlay.classList.contains('active')){
closeSubProjectsOverlay('doctors');
}
}
});
