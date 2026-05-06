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
