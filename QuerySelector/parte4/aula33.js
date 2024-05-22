const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_divTodas = [...document.querySelectorAll("div")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
const query_cursoEspecial = document.getElementsById("c1")

console.log(query_cursosC1)
//console.log(query_cursosC2)

/*

Agora pegar todos cursos e criar querycursostods, e invez de getElementsByclassName,
usa o selectorAll. E agora puxar a classe do css  
const query_cursosTodos = [...document.querySelectorAll(".curso")] por o .curso .
Agora o query selectorALL vai retorna 12 coleçacao elementos que usam o curso e antes era 14.
A queryselector e a ALL, ela é dinamica, nao precisa de metodo para pegar elementos e tag e class.
o SelectoALL ja faz isso basta chama (".curso")], div .(".c1").
E para pegar id 
*/