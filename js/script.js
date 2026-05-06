(function(){
const ANIMATION_DURATION=2000;
const TRANSITION_BUFFER=200;
const PALM_TREE_COUNT=3;
let scene,camera,renderer,ship,ocean;
let islands=[],characters=[],coins=[],clouds=[];
let currentSection=0;
const totalSections=4;
let isTransitioning=false;
let time=0;
let lastTime=0;
let mouseX=0,mouseY=0;
let baseCameraPos={x:0,y:0,z:0};
let cachedNavLinks,cachedSectionContent,cachedNavLeft,cachedNavRight,cachedTreasureCards;
let brownMaterial;

const crewData={
luffy:{name:"Monkey D. Luffy",role:"Captain",color:0xdc2626,hatColor:0xf59e0b},
zoro:{name:"Roronoa Zoro",role:"Swordsman",color:0x22c55e},
sanji:{name:"Vinsmoke Sanji",role:"Cook",color:0x3b82f6},
chopper:{name:"Tony Tony Chopper",role:"Doctor",color:0xfbbf24}
};

const scenePositions=[
{camera:{x:0,y:8,z:20},target:{x:0,y:2,z:0}},
{camera:{x:20,y:10,z:15},target:{x:15,y:2,z:0}},
{camera:{x:-18,y:12,z:18},target:{x:-12,y:3,z:0}},
{camera:{x:0,y:7,z:16},target:{x:0,y:3,z:0}}
];

const shipPositions=[
{x:5,z:12,ry:-0.5},
{x:18,z:8,ry:-1},
{x:-15,z:12,ry:0.3},
{x:2,z:10,ry:-0.3}
];

function navigateToSection(index){
if(index<0||index>=totalSections||isTransitioning)return;
isTransitioning=true;
currentSection=index;
updateUI();
animateCamera(scenePositions[index]);
animateShip(shipPositions[index]);
updateCharacter();
setTimeout(()=>isTransitioning=false,ANIMATION_DURATION+TRANSITION_BUFFER);
}

function updateUI(){
if(!cachedNavLinks)cachedNavLinks=document.querySelectorAll('.nav-links a');
if(!cachedSectionContent)cachedSectionContent=document.querySelectorAll('.section-content');
if(!cachedNavLeft)cachedNavLeft=document.getElementById('nav-left');
if(!cachedNavRight)cachedNavRight=document.getElementById('nav-right');
cachedNavLinks.forEach((a,i)=>a.classList.toggle('active',i===currentSection));
cachedSectionContent.forEach((s,i)=>s.classList.toggle('active',i===currentSection));
if(cachedNavLeft)cachedNavLeft.disabled=currentSection===0;
if(cachedNavRight)cachedNavRight.disabled=currentSection===totalSections-1;
}

function updateCharacter(){
const chars=['luffy','zoro','sanji','chopper'];
const char=crewData[chars[currentSection]||'luffy'];
const nameEl=document.getElementById('char-name');
const roleEl=document.getElementById('char-role');
if(nameEl)nameEl.textContent=char.name;
if(roleEl)roleEl.textContent=char.role;
}

function animateCamera(target){
const start={x:camera.position.x,y:camera.position.y,z:camera.position.z};
const startTime=performance.now();
baseCameraPos={x:target.camera.x,y:target.camera.y,z:target.camera.z};
function update(){
const t=Math.min((performance.now()-startTime)/ANIMATION_DURATION,1);
const e=t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
camera.position.set(
start.x+(target.camera.x-start.x)*e,
start.y+(target.camera.y-start.y)*e,
start.z+(target.camera.z-start.z)*e
);
camera.lookAt(target.target.x,target.target.y,target.target.z);
if(t<1)requestAnimationFrame(update);
}
update();
}

function animateShip(target){
const start={x:ship.position.x,z:ship.position.z,ry:ship.rotation.y};
const startTime=performance.now();
function update(){
const t=Math.min((performance.now()-startTime)/ANIMATION_DURATION,1);
const e=t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
ship.position.x=start.x+(target.x-start.x)*e;
ship.position.z=start.z+(target.z-start.z)*e;
ship.rotation.y=start.ry+(target.ry-start.ry)*e;
if(t<1)requestAnimationFrame(update);
}
update();
}

function createCharacter(data,scale=1){
const group=new THREE.Group();

// Body
const bodyGeo=new THREE.CylinderGeometry(0.35*scale,0.4*scale,0.8*scale,12);
const bodyMat=new THREE.MeshStandardMaterial({color:data.color,roughness:0.6,metalness:0.1});
const body=new THREE.Mesh(bodyGeo,bodyMat);
body.position.y=0.6*scale;
body.castShadow=true;
group.add(body);

// Arms
const armGeo=new THREE.CylinderGeometry(0.12*scale,0.1*scale,0.6*scale,8);
const skinMat=new THREE.MeshStandardMaterial({color:0xfed7aa,roughness:0.7});
const leftArm=new THREE.Mesh(armGeo,skinMat);
leftArm.position.set(-0.45*scale,0.6*scale,0);
leftArm.rotation.z=0.3;
leftArm.castShadow=true;
group.add(leftArm);
const rightArm=new THREE.Mesh(armGeo,skinMat);
rightArm.position.set(0.45*scale,0.6*scale,0);
rightArm.rotation.z=-0.3;
rightArm.castShadow=true;
group.add(rightArm);

// Head
const headGeo=new THREE.SphereGeometry(0.4*scale,12,12);
const head=new THREE.Mesh(headGeo,skinMat);
head.position.y=1.3*scale;
head.castShadow=true;
group.add(head);

// Eyes
const eyeGeo=new THREE.SphereGeometry(0.08*scale,8,8);
const eyeMat=new THREE.MeshStandardMaterial({color:0x000000});
const leftEye=new THREE.Mesh(eyeGeo,eyeMat);
leftEye.position.set(-0.12*scale,1.35*scale,0.35*scale);
group.add(leftEye);
const rightEye=new THREE.Mesh(eyeGeo,eyeMat);
rightEye.position.set(0.12*scale,1.35*scale,0.35*scale);
group.add(rightEye);

// Smile
const smileGeo=new THREE.TorusGeometry(0.15*scale,0.03*scale,8,16,Math.PI);
const smileMat=new THREE.MeshStandardMaterial({color:0x000000});
const smile=new THREE.Mesh(smileGeo,smileMat);
smile.position.set(0,1.2*scale,0.35*scale);
smile.rotation.x=-0.2;
group.add(smile);

// Hat for Luffy
if(data.hatColor){
const hatBrimGeo=new THREE.CylinderGeometry(0.5*scale,0.5*scale,0.08*scale,16);
const hatMat=new THREE.MeshStandardMaterial({color:data.hatColor,roughness:0.8});
const hatBrim=new THREE.Mesh(hatBrimGeo,hatMat);
hatBrim.position.y=1.65*scale;
group.add(hatBrim);
const hatTopGeo=new THREE.ConeGeometry(0.4*scale,0.3*scale,16);
const hatTop=new THREE.Mesh(hatTopGeo,hatMat);
hatTop.position.y=1.85*scale;
group.add(hatTop);
// Red ribbon
const ribbonGeo=new THREE.TorusGeometry(0.42*scale,0.05*scale,8,16);
const ribbonMat=new THREE.MeshStandardMaterial({color:0xdc2626});
const ribbon=new THREE.Mesh(ribbonGeo,ribbonMat);
ribbon.position.y=1.68*scale;
ribbon.rotation.x=Math.PI/2;
group.add(ribbon);
}

return group;
}

function createIsland(scale){
const group=new THREE.Group();
if(!brownMaterial){
brownMaterial=new THREE.MeshStandardMaterial({color:0x5c4033,roughness:0.9});
}
const baseGeo=new THREE.ConeGeometry(3*scale,2*scale,8);
const base=new THREE.Mesh(baseGeo,brownMaterial);
base.position.y=-0.5*scale;
base.castShadow=true;
base.receiveShadow=true;
group.add(base);
const sandGeo=new THREE.CylinderGeometry(2.5*scale,2.8*scale,0.3*scale,8);
const sandMat=new THREE.MeshStandardMaterial({color:0xdec89a,roughness:0.95});
const sand=new THREE.Mesh(sandGeo,sandMat);
sand.position.y=0.5*scale;
sand.receiveShadow=true;
group.add(sand);
for(let i=0;i<PALM_TREE_COUNT;i++){
const trunkGeo=new THREE.CylinderGeometry(0.1*scale,0.15*scale,2*scale,6);
const trunk=new THREE.Mesh(trunkGeo,brownMaterial);
trunk.position.y=1.5*scale;
const angle=(i/PALM_TREE_COUNT)*Math.PI*2;
trunk.position.x=Math.cos(angle)*1.2*scale;
trunk.position.z=Math.sin(angle)*1.2*scale;
trunk.castShadow=true;
group.add(trunk);
const leafGeo=new THREE.SphereGeometry(0.5*scale,6,6);
const leaf=new THREE.Mesh(leafGeo,new THREE.MeshStandardMaterial({color:0x22c55e}));
leaf.position.copy(trunk.position);
leaf.position.y=2.5*scale;
group.add(leaf);
}
return group;
}

function createStrawHatFlag(){
// Create canvas for Straw Hat Pirates flag
const canvas=document.createElement('canvas');
canvas.width=512;
canvas.height=512;
const ctx=canvas.getContext('2d');

// White background
ctx.fillStyle='#ffffff';
ctx.fillRect(0,0,512,512);

// Black skull
ctx.fillStyle='#000000';
ctx.beginPath();
ctx.arc(256,220,80,0,Math.PI*2);
ctx.fill();

// Eye sockets
ctx.fillStyle='#ffffff';
ctx.beginPath();
ctx.arc(230,200,20,0,Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(282,200,20,0,Math.PI*2);
ctx.fill();

// Nose
ctx.fillStyle='#000000';
ctx.beginPath();
ctx.moveTo(256,230);
ctx.lineTo(246,250);
ctx.lineTo(266,250);
ctx.closePath();
ctx.fill();

// Jaw
ctx.fillStyle='#000000';
ctx.beginPath();
ctx.arc(256,270,60,0,Math.PI);
ctx.fill();

// Teeth
ctx.fillStyle='#ffffff';
for(let i=0;i<6;i++){
const x=210+i*18;
ctx.fillRect(x,268,12,18);
}

// Straw hat
ctx.fillStyle='#f59e0b';
ctx.beginPath();
ctx.ellipse(256,150,100,25,0,0,Math.PI*2);
ctx.fill();

ctx.fillStyle='#fbbf24';
ctx.beginPath();
ctx.moveTo(180,150);
ctx.lineTo(256,130);
ctx.lineTo(332,150);
ctx.closePath();
ctx.fill();

// Hat ribbon
ctx.fillStyle='#dc2626';
ctx.fillRect(150,148,212,8);

// Crossbones
ctx.fillStyle='#000000';
ctx.save();
ctx.translate(256,340);
ctx.rotate(Math.PI/4);
ctx.fillRect(-60,-10,120,20);
ctx.rotate(-Math.PI/2);
ctx.fillRect(-60,-10,120,20);
ctx.restore();

// Bone ends
for(let bone of [{x:180,y:340},{x:332,y:340},{x:256,y:264},{x:256,y:416}]){
ctx.beginPath();
ctx.arc(bone.x,bone.y,15,0,Math.PI*2);
ctx.fill();
}

const texture=new THREE.CanvasTexture(canvas);
texture.needsUpdate=true;
return texture;
}

function createShip(){
const group=new THREE.Group();
const hullGeo=new THREE.BoxGeometry(5,1,2);
const hullMat=new THREE.MeshStandardMaterial({color:0x8b4513,roughness:0.8});
const hull=new THREE.Mesh(hullGeo,hullMat);
hull.position.y=0.5;
hull.castShadow=true;
group.add(hull);
const deckGeo=new THREE.BoxGeometry(4.5,0.2,1.8);
const deck=new THREE.Mesh(deckGeo,new THREE.MeshStandardMaterial({color:0xdeb887}));
deck.position.y=1.1;
deck.castShadow=true;
group.add(deck);
const mastGeo=new THREE.CylinderGeometry(0.1,0.12,5,8);
const mast=new THREE.Mesh(mastGeo,new THREE.MeshStandardMaterial({color:0x5c4033}));
mast.position.y=3.5;
mast.castShadow=true;
group.add(mast);

// Sail with Straw Hat Pirates flag
const sailGeo=new THREE.PlaneGeometry(2.5,3,10,10);
const flagTexture=createStrawHatFlag();
const sailMat=new THREE.MeshStandardMaterial({
map:flagTexture,
side:THREE.DoubleSide,
transparent:false
});
const sail=new THREE.Mesh(sailGeo,sailMat);
sail.position.set(0,3.8,0.2);
sail.castShadow=true;
group.userData.sail=sail;
group.add(sail);

const lionGeo=new THREE.SphereGeometry(0.4,8,8);
const lion=new THREE.Mesh(lionGeo,new THREE.MeshStandardMaterial({color:0xf59e0b,metalness:0.5}));
lion.position.set(2.7,0.8,0);
lion.scale.set(1,1,0.6);
lion.castShadow=true;
group.add(lion);
return group;
}

function init(){
scene=new THREE.Scene();
scene.background=new THREE.Color(0x0c1929);
scene.fog=new THREE.FogExp2(0x0c1929,0.012);
camera=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,8,20);
renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
document.getElementById('canvas-container').appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x304060,0.6));
const sun=new THREE.DirectionalLight(0xffeedd,1.2);
sun.position.set(20,30,20);
sun.castShadow=true;
sun.shadow.mapSize.width=2048;
sun.shadow.mapSize.height=2048;
sun.shadow.camera.left=-50;
sun.shadow.camera.right=50;
sun.shadow.camera.top=50;
sun.shadow.camera.bottom=-50;
scene.add(sun);
scene.add(new THREE.PointLight(0xdc2626,1.5,40).translateX(-20).translateY(10).translateZ(15));
scene.add(new THREE.PointLight(0xf59e0b,1.3,35).translateX(20).translateY(8).translateZ(-15));
scene.add(new THREE.HemisphereLight(0x1a2a4a,0x0a1520,0.5));

const oceanGeo=new THREE.PlaneGeometry(300,300,100,100);
const oceanMat=new THREE.MeshStandardMaterial({
color:0x0a2540,
metalness:0.2,
roughness:0.6,
transparent:true,
opacity:0.95
});
ocean=new THREE.Mesh(oceanGeo,oceanMat);
ocean.rotation.x=-Math.PI/2;
ocean.receiveShadow=true;
ocean.userData.original=oceanGeo.attributes.position.array.slice();
scene.add(ocean);

const islandData=[
{x:0,z:0,scale:2,char:'luffy'},
{x:22,z:-5,scale:1.6,char:'zoro'},
{x:-20,z:5,scale:1.8,char:'sanji'}
];
islandData.forEach(data=>{
const island=createIsland(data.scale);
island.position.set(data.x,0,data.z);
islands.push(island);
scene.add(island);
const char=createCharacter(crewData[data.char],1.3);
char.position.set(data.x,1.5*data.scale,data.z);
char.userData.baseY=char.position.y;
char.userData.offset=Math.random()*Math.PI*2;
characters.push(char);
scene.add(char);
});

ship=createShip();
ship.position.set(shipPositions[0].x,0.3,shipPositions[0].z);
ship.rotation.y=shipPositions[0].ry;
scene.add(ship);

for(let i=0;i<30;i++){
const coinGeo=new THREE.CylinderGeometry(0.25,0.25,0.08,16);
const coinMat=new THREE.MeshStandardMaterial({
color:0xf59e0b,
metalness:0.9,
roughness:0.1,
emissive:0xf59e0b,
emissiveIntensity:0.3
});
const coin=new THREE.Mesh(coinGeo,coinMat);
coin.position.set(
-25+Math.random()*50,
2+Math.random()*5,
-25+Math.random()*50
);
coin.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0);
coin.userData.offset=Math.random()*Math.PI*2;
coin.userData.speed=0.5+Math.random()*0.5;
coin.userData.rotSpeed=0.02+Math.random()*0.03;
coin.castShadow=true;
coins.push(coin);
scene.add(coin);
}

const starGeo=new THREE.BufferGeometry();
const starPos=new Float32Array(3000*3);
for(let i=0;i<3000*3;i+=3){
const r=80+Math.random()*120;
const theta=Math.random()*Math.PI*2;
const phi=Math.random()*Math.PI*0.5;
starPos[i]=r*Math.sin(phi)*Math.cos(theta);
starPos[i+1]=r*Math.cos(phi)+30;
starPos[i+2]=r*Math.sin(phi)*Math.sin(theta);
}
starGeo.setAttribute('position',new THREE.BufferAttribute(starPos,3));
const stars=new THREE.Points(starGeo,new THREE.PointsMaterial({
color:0xffffff,
size:0.4,
transparent:true,
opacity:0.9
}));
scene.add(stars);

for(let i=0;i<8;i++){
const cloudGeo=new THREE.SphereGeometry(3+Math.random()*2,8,8);
const cloudMat=new THREE.MeshStandardMaterial({
color:0xffffff,
transparent:true,
opacity:0.3,
roughness:1
});
const cloud=new THREE.Mesh(cloudGeo,cloudMat);
cloud.position.set(
-40+Math.random()*80,
15+Math.random()*10,
-40+Math.random()*80
);
cloud.userData.speed=0.01+Math.random()*0.02;
clouds.push(cloud);
scene.add(cloud);
}

document.addEventListener('mousemove',e=>{
mouseX=(e.clientX/window.innerWidth)*2-1;
mouseY=-(e.clientY/window.innerHeight)*2+1;
});

window.addEventListener('resize',()=>{
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
});

let scrollTimeout;
window.addEventListener('wheel',e=>{
if(isTransitioning)return;
if(currentSection===2){
const projectsContent=document.getElementById('projects-content');
if(projectsContent){
const atTop=projectsContent.scrollTop<=5;
const atBottom=projectsContent.scrollTop+projectsContent.clientHeight>=projectsContent.scrollHeight-5;
if((e.deltaY>0&&!atBottom)||(e.deltaY<0&&!atTop)){
return;
}
}
}
e.preventDefault();
clearTimeout(scrollTimeout);
scrollTimeout=setTimeout(()=>{
navigateToSection(currentSection+(e.deltaY>0?1:-1));
},50);
},{passive:false});

window.addEventListener('keydown',e=>{
if(isTransitioning)return;
if(e.key==='ArrowDown'||e.key==='ArrowRight')navigateToSection(currentSection+1);
if(e.key==='ArrowUp'||e.key==='ArrowLeft')navigateToSection(currentSection-1);
});

let touchY=0;
window.addEventListener('touchstart',e=>touchY=e.touches[0].clientY);
window.addEventListener('touchend',e=>{
const diff=touchY-e.changedTouches[0].clientY;
if(Math.abs(diff)>50)navigateToSection(currentSection+(diff>0?1:-1));
});

document.querySelectorAll('.nav-links a').forEach((link,i)=>{
link.addEventListener('click',e=>{
e.preventDefault();
navigateToSection(i);
});
});

const leftBtn=document.getElementById('nav-left');
const rightBtn=document.getElementById('nav-right');
if(leftBtn)leftBtn.addEventListener('click',()=>navigateToSection(currentSection-1));
if(rightBtn)rightBtn.addEventListener('click',()=>navigateToSection(currentSection+1));

const exploreBtn=document.getElementById('explore-btn');
if(exploreBtn)exploreBtn.addEventListener('click',()=>navigateToSection(1));

const darkToggle=document.getElementById('dark-mode-toggle');
if(darkToggle){
try{
const saved=localStorage.getItem('theme');
if(saved==='dark'){
document.documentElement.classList.add('dark');
darkToggle.textContent='☀️';
}
}catch(e){console.warn('localStorage not available');}
darkToggle.addEventListener('click',()=>{
document.documentElement.classList.toggle('dark');
const isDark=document.documentElement.classList.contains('dark');
darkToggle.textContent=isDark?'☀️':'🌙';
try{localStorage.setItem('theme',isDark?'dark':'light');}catch(e){}
});
}

const scrollHint=document.querySelector('.scroll-hint');
if(scrollHint){
const fadeHint=()=>{
scrollHint.style.transition='opacity 0.8s ease';
scrollHint.style.opacity='0';
setTimeout(()=>scrollHint.style.display='none',800);
};
window.addEventListener('wheel',fadeHint,{once:true});
window.addEventListener('touchstart',fadeHint,{once:true});
}

const bar=document.getElementById('loader-bar');
let progress=0;
const interval=setInterval(()=>{
progress+=Math.random()*20;
if(progress>=100){
progress=100;
bar.style.width='100%';
clearInterval(interval);
setTimeout(()=>document.getElementById('loader').classList.add('hidden'),800);
}else{
bar.style.width=progress+'%';
}
},250);

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';
}
});
},{threshold:0.1});

setTimeout(()=>{
document.querySelectorAll('.treasure-card').forEach(card=>{
card.style.opacity='0';
card.style.transform='translateY(30px)';
card.style.transition='opacity 0.6s ease, transform 0.6s ease';
observer.observe(card);
});
},1000);

animate();
}

function animate(currentTime){
requestAnimationFrame(animate);
const delta=(currentTime-lastTime)/1000||0.016;
lastTime=currentTime;
time+=delta;

camera.position.x+=mouseX*0.05;
camera.position.y+=mouseY*0.05;

if(ocean){
const pos=ocean.geometry.attributes.position.array;
const orig=ocean.userData.original;
for(let i=0;i<pos.length;i+=3){
pos[i+2]=Math.sin(orig[i]*0.1+time)*0.5+Math.sin(orig[i+1]*0.1+time*0.8)*0.4;
}
ocean.geometry.attributes.position.needsUpdate=true;
}

if(ship){
ship.position.y=0.3+Math.sin(time*2)*0.2;
ship.rotation.z=Math.sin(time*1.5)*0.05;
ship.rotation.x=Math.sin(time*1.2)*0.04;
if(ship.userData.sail&&ship.userData.sail.geometry){
const p=ship.userData.sail.geometry.attributes.position.array;
for(let i=0;i<p.length;i+=3){
p[i+2]=Math.sin(p[i]*2+time*5)*0.2;
}
ship.userData.sail.geometry.attributes.position.needsUpdate=true;
}
}

characters.forEach(char=>{
if(char.userData.baseY){
char.position.y=char.userData.baseY+Math.sin(time*2+char.userData.offset)*0.15;
char.rotation.y=Math.sin(time*0.8+char.userData.offset)*0.3;
}
});

coins.forEach(coin=>{
coin.position.y+=Math.sin(time*coin.userData.speed+coin.userData.offset)*0.005;
coin.rotation.y+=coin.userData.rotSpeed;
coin.rotation.x+=coin.userData.rotSpeed*0.5;
});

clouds.forEach(cloud=>{
cloud.position.x+=cloud.userData.speed;
if(cloud.position.x>50)cloud.position.x=-50;
});

renderer.render(scene,camera);
}

window.addEventListener('DOMContentLoaded',init);
})();
