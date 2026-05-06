(function(){
'use strict';
let isPlaying=false;
let playPromise=null;

function initAudio(){
const playBtn=document.getElementById('playBtn');
const bgMusic=document.getElementById('bgMusic');
const volumeSlider=document.getElementById('volumeSlider');

if(!playBtn||!bgMusic)return;

bgMusic.volume=0.3;

playBtn.addEventListener('click',function(){
if(isPlaying){
bgMusic.pause();
isPlaying=false;
playBtn.textContent='▶';
playBtn.classList.remove('playing');
}else{
playPromise=bgMusic.play();
if(playPromise!==undefined){
playPromise.then(function(){
isPlaying=true;
playBtn.textContent='⏸';
playBtn.classList.add('playing');
}).catch(function(err){
isPlaying=false;
console.error('Audio error:',err);
});
}
}
});

if(volumeSlider){
volumeSlider.addEventListener('input',function(e){
bgMusic.volume=e.target.value/100;
});
}
}

if(document.readyState==='loading'){
document.addEventListener('DOMContentLoaded',initAudio);
}else{
initAudio();
}
})();
