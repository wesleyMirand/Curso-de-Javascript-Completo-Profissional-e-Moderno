const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_divTodas = [...document.querySelectorAll("div")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
//const query_cursoEspecial = document.querySelector("#c1")
const query_cursoEspecial = document.querySelectorAll("#c1")[0]

console.log(query_cursosEspecial)
//console.log(query_cursosC2)

/*

agora o query SelectorALL. retorna um node list
colocar [0] especificando que quero um elemento da posição 0.
*/