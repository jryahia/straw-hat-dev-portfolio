/* ==== Straw Hat Dev — Portfolio Chatbot ====
   Offline, rule-based assistant. Reads the site's currentLanguage (i18n.js).
   Answers questions about Yahya, his skills, projects, experience, and contact. */
(function(){
  'use strict';

  // ---- UI strings (follow the site's selected language with EN fallback) ----
  var UI = {
    en:{name:'Crew AI',status:'Online — ask me anything',ph:'Ask me about Yahya...',hello:'🏴☠️ Yo-ho-ho! I\'m Crew AI, Nakama of the Straw Hats. Ask me about Yahya\'s skills, projects, experience — or how to join his crew!\n\nTap a question below to start.'},
    fr:{name:'Crew AI',status:'En ligne — posez-moi tout',ph:'Posez-moi une question...',hello:'🏴☠️ Yo-ho-ho ! Je suis Crew AI, Nakama des Straw Hats. Demandez-moi les compétences, projets et expérience de Yahya — ou comment rejoindre son équipage !'},
    it:{name:'Crew AI',status:'Online — chiedimi cosa vuoi',ph:'Chiedimi di Yahya...',hello:'🏴☠️ Yo-ho-ho! Sono Crew AI, Nakama dei Cappelli di Paglia. Chiedimi delle skill di Yahya, dei progetti, dell\'esperienza — o come entrare nella sua ciurma!'},
    de:{name:'Crew AI',status:'Online — frag mich',ph:'Frag mich nach Yahya...',hello:'🏴☠️ Yo-ho-ho! Ich bin Crew AI, Nakama der Strohhüte. Frag mich nach Yahyas Fähigkeiten, Projekten, Erfahrung — oder wie man seiner Crew beitritt!'},
    ar:{name:'Crew AI',status:'متصل على الأنترنت',ph:'اسألني عن يحيى...',hello:'🏴☠️ يو-هو-هو! أنا كرو AI، عضو طاقم قبعة القش. اسألني عن مهارات يحيى ومشاريعه وخبرته — أو كيف تنضم إلى طاقمه!'},
    default:{name:'Crew AI',status:'Online',ph:'Ask me...',hello:'🏴☠️ Ahoy! I\'m Crew AI, Nakama of the Straw Hats. Ask me about Yahya\'s skills, projects, experience — or how to join his crew!'}
  };

  // ---- Knowledge base: [keywords, answer] intents ----
  var KB = [
    {k:['who is','about','who are you','who\'s','tell me about yahya','about yahya','introduce'],a:'Yahya Jarray is a full-stack developer and AI/automation engineer from Tunisia, now based in Rome. He builds AI-powered systems that run real businesses — chatbacks, lead qualification, appointment setters, document processing — plus beautiful themed websites. Think of him as a developer who works like a Straw Hat captain: keeps his crew (his stack) loyal and ships what actually works.'},
    {k:['skill','stack','tech','technology','program','language','what can','know','expert','framework'],a:'His core stack: 🐍 Python · ⚡ FastAPI · 🗄️ SQL / SQLAlchemy · 🧠 LLM integration (OpenAI/DeepSeek/Anthropic) · 🤖 AI agents & chatbots · ⚙️ GoHighLevel · 🔀 Make.com · 🌊 n8n · 🕸️ Playwright/scraping · 💬 WhatsApp/SMS (Twilio) · 📄 document/OCR processing · 🐳 Docker · 🧪 pytest · 🖼️ Flet · 🌐 React/TypeScript + vanilla JS/CSS.\n\nHe goes full-stack when the job needs it.'},
    {k:['project','build','portfolio','treasure','made','work','repos','repo'],a:'He\'s shipped 50+ projects. Highlights:\n• 🤖 AI agents that qualify leads, book calls & answer customers on WhatsApp (GoHighLevel, HubSpot, Make, n8n)\n• 🧠 RAG chatbots & AI document/OCR processing\n• 🎨 Beautiful client websites (restaurants, doctors, IT shops) — single-file, multilingual\n• 📈 Crypto/wallet analyzers & DeFi bots\n\nBrowse the full Treasure Vault above — click any card to open it!'},
    {k:['experience','years','how long','career','job','have you been','time'],a:'3+ years of professional building. He started in East Blue (learning Python and APIs), grinded in the Grand Line shipping client automations for GoHighLevel, HubSpot, Make and n8n, and is now in the New World building AI agents that work an inbox, book a call, and write reports.'},
    {k:['contact','hire','email','reach','meet','get in touch','link','linkedin','github','call','freelance','price','cost','rate','commission'],a:'You can reach Yahya here:\n• 💼 LinkedIn: linkedin.com/in/yahya-jarray\n• 🐙 GitHub: github.com/jryahia\n• ✉️ Email: revealed in the "Join My Crew" section below (click to reveal)\n\nHe\'s open to freelance projects, client websites, and AI automation builds. Tell him what you need!'},
    {k:['location','where','live','based','rome','tunisia','country','city'],a:'He\'s originally from Tunisia and now based in Rome, Italy 🇮🇹🇹🇳. He works with clients internationally.'},
    {k:['ai','agent','chatbot','llm','gpt','automation','whatsapp','automat'],a:'Yahya\'s specialty: AI that does real work. He builds LLM-powered agents integrated with GoHighLevel, HubSpot, Make and n8n — chatbots that qualify leads, appointment setters that book calls, missed-call text-backs, document processors, and WhatsApp sales agents. Production-grade, Docker-ready, deployed anywhere.'},
    {k:['website','web','site','design','frontend','html','css'],a:'He builds polished, responsive websites — from luxury restaurant sites (gold/black, multilingual) to doctor & IT business sites and a full One Piece-themed dev portfolio. Single-file where it makes sense, React/TypeScript when it needs more power.'},
    {k:['luffy','one piece','straw hat','anime','nami','zoro','sanji','pirate'],a:'One Piece is the whole vibe! 🏴☠️ The crew is always ready. If you\'re a One Piece fan and a tech lover, we\'ll get along great.'},
    {k:['thanks','thank','thx','gracias','merci','grazie','danke','nice','cool','awesome','great','love'],a:'Yo-ho-ho, you\'re welcome! Nakama don\'t say thanks too much — a captain just keeps sailing. ⛵ If you want to work together, check out the "Join My Crew" section!'},
    {k:['hello','hi','hey','yo','ahoy','yo-ho','sup','hola','bonjour','ciao'],a:'Ahoy there! ⛵ Great to meet you. Ask me about Yahya\'s skills, his projects, his experience — or just chat. What can I help you with?'}
  ];

  var FALLBACK = 'Shiver me timbers — I didn\'t catch that one! 🤔 Try asking about his **skills**, **projects**, **experience**, **contact**, or tap a quick question below.';

  // ---- Build widget DOM ----
  function getUI(){var l=(typeof currentLanguage!=='undefined'?currentLanguage:'en')||'en';return UI[l]||UI.default||UI.en}
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function md(s){ // tiny formatter: **bold**
    return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  }

  var H=document.createElement('div');
  H.id='chat-window';
  H.setAttribute('aria-hidden','true');
  H.innerHTML=
    '<div class="chat-header">'+
      '<div class="chat-avatar">🏴‍☠️</div>'+
      '<div class="chat-titles"><div class="chat-name">Crew AI</div><div class="chat-status"><span class="dot"></span><span class="chat-status-txt">Online</span></div></div>'+
      '<button class="chat-close" id="chat-close" aria-label="Close chat">×</button>'+
    '</div>'+
    '<div class="chat-messages" id="chat-messages"></div>'+
    '<div class="chat-chips" id="chat-chips"></div>'+
    '<div class="chat-input">'+
      '<input type="text" id="chat-input" placeholder="Ask me..." autocomplete="off">'+
      '<button class="chat-send" id="chat-send" aria-label="Send">➤</button>'+
    '</div>';
  document.body.appendChild(H);

  var L=document.createElement('button');
  L.id='chat-launcher'; L.setAttribute('aria-label','Open chat');
  L.innerHTML='<span class="launcher-emoji">💬</span>';
  document.body.appendChild(L);

  var box=H.querySelector('#chat-messages'),chipsEl=H.querySelector('#chat-chips'),
      inp=H.querySelector('#chat-input'),wnd=H;
  var open=false, typed=false;

  function applyUI(){
    var u=getUI();
    H.querySelector('.chat-name').textContent=u.name;
    H.querySelector('.chat-status-txt').textContent=u.status;
    inp.placeholder=u.ph;
    H.querySelector('.chat-close').setAttribute('aria-label','Close chat');
  }
  applyUI();

  function addMsg(text,who){
    var m=document.createElement('div');
    m.className='msg '+who;
    m.innerHTML= who==='bot' ? md(text) : esc(text);
    box.appendChild(m); box.scrollTop=box.scrollHeight;
    return m;
  }
  function addTyping(){
    var m=document.createElement('div'); m.className='msg bot typing'; m.textContent='...';
    box.appendChild(m); box.scrollTop=box.scrollHeight; return m;
  }

  // ---- Intent matching ----
  function answer(q){
    q=q.toLowerCase().replace(/[?!.,]/g,' ').replace(/\s+/g,' ').trim();
    var best=null,bestScore=0;
    KB.forEach(function(intent){
      var score=0;
      intent.k.forEach(function(kw){ if(q.indexOf(kw)!==-1) score+=kw.length; });
      if(score>bestScore){bestScore=score;best=intent}
    });
    return best && bestScore>0 ? best.a : null;
  }

  function handle(text){
    if(!text.trim())return;
    addMsg(text,'user');
    var t=addTyping();
    setTimeout(function(){
      t.remove();
      var a=answer(text)||FALLBACK;
      addMsg(a,'bot');
    },450+Math.random()*350);
  }

  // ---- Quick replies (preset) ----
  var CHIPS=['🧠 Skills','💎 Projects','💼 Experience','✉️ Contact','📍 Location','🏴‍☠️ About Yahya'];
  function renderChips(){
    chipsEl.innerHTML='';
    CHIPS.forEach(function(c){
      var b=document.createElement('button'); b.className='chip-reply'; b.textContent=c;
      b.onclick=function(){inp.value=c;handle(c);};
      chipsEl.appendChild(b);
    });
  }
  renderChips();

  // ---- open/close ----
  function toggle(force){
    open=(typeof force==='boolean')?force:!open;
    wnd.classList.toggle('open',open);
    wnd.setAttribute('aria-hidden',open?'false':'true');
    if(open){
      if(!typed){typed=true;setTimeout(function(){addMsg(getUI().hello,'bot')},300);}
      setTimeout(function(){inp.focus()},250);
    }
  }
  L.addEventListener('click',function(){toggle()});
  H.querySelector('#chat-close').addEventListener('click',function(){toggle(false)});

  // Send logic
  H.querySelector('#chat-send').addEventListener('click',function(){handle(inp.value);inp.value=''});
  inp.addEventListener('keydown',function(e){if(e.key==='Enter'){handle(inp.value);inp.value=''}});

  // Tip: update UI text live if language changes mid-session
  document.addEventListener('languageChanged',applyUI);
})();
