const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_divTodas = [...document.querySelector("div")]
console.log(divTodas)

/*

Agora se trocar para query selectorALL, agora vai retorna coleçao com todas div,
nodelist mesma coisa que colection. Por ser browser antigo nao conhece mais e a 
mesma coisa, com nó encontrado tipo div "array". 
Com spread agora tem array em todos.

*/