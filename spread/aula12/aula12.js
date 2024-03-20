let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [n1, n2]

//console.log("n1: " + n1)
//console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("tipo de n3:" + typeof(n3))

/* Spread quebra array , devolve elemento a elemento, simplifica operacoes em array,
html conect, colecoes de elementos html para passsar pro array
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


---------------------------------------

 
 */