const objs1= document.getElementsByTagName("div")
const objs2= [...document.getElementsByTagName("div")]

objs2.forEach(element=> {
      element.innerHTML="curso"
});

/* react usa muito spread */

console.log(objs1)
console.log(objs2)

/* Spread quebra array , devolve elemento a elemento, simplifica operacoes em array,
html conect, colecoes de elementos html para passar pro array
 o spread favorece esssa alteracao
 
 uma das funcao do spread, copia um array , n3 recebe n1: let n3= n1. Ou posso usar
 o operador spread  let n3 = [...n] quando executar vai ser o mesmo.

 eu quero copiar tanto n1 quanto n2, existe concatenacao de array : let n2=[n1, n2]
 Agora:  n3: 10,20.... todos elementos do n1  en2. 
 Se eu fizer con..("tipo de n3:" + typeof(n3)) ele vai fazer que é um object array.

 let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [n1, n2]

//console.log("n1: " + n1)
//console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("tipo de n3:" + typeof(n3))

como eu usaria o spread nessa ocasiao de cima?
Eu espalho o n1 e o n2 : let n3 = [...n1,...n2]
E agora terei todos elementos copiado para dentro de n3.
Podemos usar o spread para copiar objetos, entrar com objeto literal. 
const jogador1 = {nome: "Bruno", energia:100, vidas:3}
const jogador2 = {nome: "Bruce", energia:100, vidas:5}
E posso concatenar nova string dos elementos do jogador1 com o 2 no 3.

const jogador1 = {nome: "Bruno", energia:100, vidas:3}
const jogador2 = {nome: "Bruce", energia:100, vidas:5}
const jogador3 = {...jogador1, ...jogador2}

vou ter a juncao de jogador 1 com jogador 2 no 3. 
Mais quando imprimimos jogador 3 ele vai imprimir so os dados do jogador 2

nst jogador1 = {nome: "Bruno", energia:100, vidas:3}
const jogador2 = {nome: "Bruce", energia:100, vidas:5}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)

Porque oque eu tenho no jogador 1 é igual ao 2, ja que os dados sao os msm, usa o valor,
do ultimo jogador. Porém se eu tiver um dado diferente no jogado1, tipo magia, e no 2 
velocidade. Ai o jogador 3 vai receber alem das propriedades em comum tanto a propriedade incomum.
nome energia vidas magia velocidade:
const jogador1 = {nome: "Bruno", energia:100, vidas:3, magia:160}
const jogador2 = {nome: "Bruce", energia:100, vidas:5, velocidade:100}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)
---------------------------------------
Outra vantagem em usar spread: 
Suponha que usamos funcao soma, 3 valores: v1 v2 v3
const soma = (v1, v2, v3) => {
      return v1+v2+v3
}

e o nome : console.log(soma(1,5,6))
Porem com o sprad posso passar um array no meio e espalhar os elementos. com
let valores= 
console.log(soma(valores))
Vai dar indefinido porque nao espalhei os elementos. Seria como passase [1,5,6] para 
(v1, v2, v3)ai nao iria somar! 

Eu resolvo usando spread e espalhando os valores conso...(soma(...valores)) ai 
soma certinho pois esta, cada valor com sua propria propriedade de cada parametro
de entrada da funcao. Se colocar [1,23,4,45] valor a mais ele vai continuar somando
so com os existentes.

const soma=(v1,v2,v3) =>{
      return v1+v2+v3
}
let valores=[1,5,4,10]
console.log(soma(...valores))


------------------------------------------------
No html  simples temos 3 div la:
      <div>Pedro</div>
      <div>Cursos WEWE</div>
      <div>Novo curso JS</div>

Posso organizar eles em uma posição e trazer dentro do codigo JS.
Alguns comando de manipulacao do dom : 
Contante objs e usa o document getelementsbytagname funcao
vai retorna uma coleçao de elemtnos html , que é diferente de array.

const objs-document.getelementsbytagnome("div")

dentro de objs tenho um colecao de elementos div. que sao os acima.
nao da pra rodar o codigo no vs porque o node nao conhece o document.
Document e implementacao do dom documetos da pagina, node ja é o servidor,
porem o servidor nao tem a pagina e nao conhece o dom!
DOCUMENT is not defined
 
const objs= document.getElementsByTagName("div")

console.log(objs)
 
porem no browser ele retorna o html collection(3) div div div!
0 div
1 div
2 div
length: 3
Prototype: htmlCollection

e se aperta no prototype tem todas funcoes do html
item  nameitem ....

Agora a diferenca de htmlcollection para array usando spread no objs2:

const objs1= document.getElementsByTagName("div")
const objs2= [...document.getElementsByTagName("div")]

console.log(objs1)
console.log(objs2)

no primeiro sem spread tem o htmlcollection, so recebe elementos html.
e ja o segundo com spread tem o array com 3div que é a mesma coisa. Com o array
posso adicionar varios tipo de elementos. que nao html, string, valores, qualquer coisa
e funcoes tambem sao diferente.

objs1 tem 3 funcoes só!

e ja a objs2 tem umonte de funcoes!sao as mesma funcoes que trabalho com array.

Se eu tiver na funcao objs1 e quiser percorrer os elementos posso usar o
foreach sem  o array:
objs1.forEach(element => {
      console.log(element)
});

vai retorna erro! sem funcao definida da objs1, porque e funcao do array
porem se usar com array, ai retorna os elemetnos da coleçao

const objs1= document.getElementsByTagName("div")
const objs2= [...document.getElementsByTagName("div")]

objs2.forEach(element=>{
      console.log(element)
});

console.log(objs1)
console.log(objs2)

Entao consigo trabalhar com esses elementos. Dentro de element eu tenho a div e usar
o innerHtml= "curso"
agora todos elementos tem curso.

const objs1= document.getElementsByTagName("div")
const objs2= [...document.getElementsByTagName("div")]

objs2.forEach(element=> {
      element.innerHTML="curso"
});

console.log(objs1)
console.log(objs2)

Agora sim foi espalhado os elementos do htmlcollections e transformei em array.
E transformei um array colecao de elementos diversos, posso agora trazer elemento
diferentes.

 */