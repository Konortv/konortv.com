document.querySelectorAll('.pending').forEach(el=>{
  el.addEventListener('click',e=>{
    if(el.getAttribute('href')==='#') e.preventDefault();
  });
});
