const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_divTodas = [...document.querySelectorAll("div, p")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
//const query_cursoEspecial = document.querySelector("#c1")
const query_cursoEspecial = document.querySelectorAll("#c1")[0]

console.log(query_divTodas)
//console.log(query_cursosC2)

/*

Vamos usar agorao query_divTodas, com todos elementos da tag div e p.
Mudar os elementos no html.
 = [...document.querySelectorAll("div, p")] colocar o p.
E agora voltou a ter 14 elementos. Especificou dois tipo de elementos diferente.
E se quise especificar classe e div? pode!
*/