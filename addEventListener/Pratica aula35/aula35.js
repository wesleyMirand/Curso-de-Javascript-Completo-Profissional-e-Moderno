const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_TransferirParaPagar = document.querySelector("#btn_TransferirParaPagar")
const todasContas = [...document.querySelectorAll(".conta")]

todasContas.map((el) => {
  el.addEventListener("click",(evt) =>{
    const conta = evt.target
    conta.classList.toggle("selecionado")
  })
}) 


btn_TransferirParaPagar.addEventListener("click", () => {
  const contaSelecionados= [...document.querySelectorAll(".selecionado")]
  const contaNaoSelecionados= [...document.querySelectorAll(".conta:not(.selecionado")]
  contaSelecionados.map((el) => {
    caixa2.appendChild(el)
  })
  contaNaoSelecionados.map((el) => {
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