const c1 = document.querySelector("#c1")

const msg = () => {
  alert("clicou")
}

c1.addEventListener("click", msg)

/* 

Const o elemento que quero usar,  chama de c1, document, metodos pegar elementos , elemento c1
const c1 = document.getElementById("c1") 

ou usar o queryselector e chamar o id #c1
const c1 = document.querySelector("#c1")
Os dois tanto faz.
Obtive o elemento, que quero manipular e vou adicionar um elemento a esse evento. C1.  para add event usar addeventlistener,
proprio para tratar eventos escutador de eventos. Vai receber evento de click, e oque vai se esperado funcao msg e nao precisa por "";
a não ser que tenha entrada de argumento.
*/