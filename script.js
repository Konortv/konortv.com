document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
const btn=document.querySelector('.menu'),nav=document.querySelector('nav');
btn?.addEventListener('click',()=>nav.classList.toggle('open'));