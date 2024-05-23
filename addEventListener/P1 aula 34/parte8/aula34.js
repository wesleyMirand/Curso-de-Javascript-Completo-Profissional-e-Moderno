const cursos= [...document.querySelectorAll(".curso")]

cursos.map ((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target 
    el.classList.add("destaque")
    console.log(el.id + "foi clicado")
  })
})

//c1.addEventListener("click", (evt) => {
//  const el = evt.target
//  el.classList.add("destaque")
//})

/* 
Agora adicionar evento a todas div todos cursos, 
*/