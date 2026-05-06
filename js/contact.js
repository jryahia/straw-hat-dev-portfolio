(function(){
'use strict';

function revealEmail(){
const user='yahiajarray43';
const domain='gmail';
const tld='com';
const email=user+'@'+domain+'.'+tld;
const emailLink=document.getElementById('protected-email');

if(emailLink){
emailLink.href='mailto:'+email;
emailLink.textContent=email;
emailLink.classList.add('revealed');
}
}

const protectedEmail=document.getElementById('protected-email');
if(protectedEmail){
protectedEmail.addEventListener('click',function(e){
e.preventDefault();
revealEmail();
setTimeout(()=>{
window.location.href=this.href;
},100);
});
}
})();
