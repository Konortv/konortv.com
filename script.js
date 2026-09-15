const btn=document.querySelector(".hamb"),nav=document.querySelector(".topbar nav");
btn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));
document.querySelectorAll(".topbar nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));