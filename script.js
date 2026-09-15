document.querySelectorAll('a.pending[href="#"]').forEach(a=>{
  a.addEventListener('click',e=>e.preventDefault());
});
