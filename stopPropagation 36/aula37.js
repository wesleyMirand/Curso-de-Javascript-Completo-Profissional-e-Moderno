const caixa1= document.querySelector("#caixa1")
const btn_c1= document.querySelector("#c1")
const cursos= [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",(evt) => {
  console.log("clicou")
})

cursos.map((el) =>{
  el.addEventListener("click",(evt) => {
    evt.stopPropation()  
  })
})





//const btn_c1=document.querySelector("#c1")

/* 

Pegando o caixa1 que e a caixa container div, a div com o id c1.
Adicionar um evento na div do container,caixa evento click funcao anonima,
msg no console.
Quando eu for apertando ele vai desparando o evento, clicou 1, 2 3, 4,5x ,6x
e nao só na div o evento propaga.
como resolve? com stopProgation!

copia o: 
caixa1.addEventListener("click",() => {
  console.log("clicou")
})

btn_c1.addEventListener
trocando pra  btn, e colocaria stoppropagation nele, mais nao da porque é da classe do
addevent. Quando agt despara o evento automaticamente, é passado evento pra funcao que foi colocado dentro.
A prova é vem pro primeiro paramentro evt : 
caixa1.addEventListener("click",(evt) 
Mais pode por evento evtt ajja  oque quiser!
E dar um console.log no evt pra entender ! e comentar o bnt_c1.
Vai mostrar no console do browser uma lista de eventos, até achar o target
quem desparou o evento. Se colocar evt.target vai imprimir quem desparou o evento e assim vai se auto imprimir.
Qualquer um que clicar dispara o evento, ele mesmo de dispara.

Resolvendo o problema de propagacao do evento, ao clicar no elemento nao tem evento, so quando clicar fora.


*/