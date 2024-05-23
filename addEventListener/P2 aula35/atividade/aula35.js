const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_transferir = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
  el.addEventListener("click",(evt) =>{
    const curso = evt.target
    curso.classList.toggle("selecionado")
  })
}) 


btn_transferir.addEventListener("click", () => {
  const cursosSelecionados= [...document.querySelectorAll(".selecionado")]
  const cursosNaoSelecionados= [...document.querySelectorAll(".curso:not(.selecionado")]
  cursosSelecionados.map((el) => {
    caixa2.appendChild(el)
  })
  cursosNaoSelecionados.map((el) => {
    caixa1.appendChild(el)
  })
})
/* 
Quando aperta no botao transferir, vou ter uma lista elementos selecionados.
Mais preciso da lista, dos elementos não selecionados também. Com o not vou
listar alguem nao possua a classe selecionado. Dos elementos que possuem a classe
curso, trazer para mim os que nao tem a classe selecionado.
Percorrer a lista de curso selecionados caixa2 e a não selecionados caixa1.
Seleciona elementos e transfere ->, seleciona os transferidos e transfere de volta <-.
*/