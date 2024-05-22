const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_divTodas = [...document.querySelectorAll("div[class]")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1,p")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
//const query_cursoEspecial = document.querySelector("#c1")
const query_cursoEspecial = document.querySelectorAll("#c1")[0]

console.log(query_divTodas)
//console.log(query_cursosC2)

/*

vamos especificar, pegando todos elementos das div, porem so as div com parametro
class.
Vai diminuir para 12 elementos e os 2 ultimo não estão na coleção. Por nao possuirem o atributo class.

*/