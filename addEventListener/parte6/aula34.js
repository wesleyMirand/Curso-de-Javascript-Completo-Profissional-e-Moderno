const c1= document.querySelector("c1")

const msg = () => {
  alert("clicou")
}

c1.addEventListener("click", (evt) => {
  console.log(evt.target)
})

/* 
(evt.target)  -> capturo quem fez o evento
*/