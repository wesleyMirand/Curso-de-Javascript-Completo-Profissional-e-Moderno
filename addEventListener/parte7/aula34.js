const c1= document.querySelector("c1")

const msg = () => {
  alert("clicou")
}

c1.addEventListener("click", (evt) => {
  const el = evt.target
  el.classList.add("destaque")
})

/* 
Obter a classe destaque do css, quando clicar fica vermelha. 
add a classe destaque evt click
*/