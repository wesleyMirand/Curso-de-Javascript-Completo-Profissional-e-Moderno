const valores = [10, 9, 8, 2, 6,5, 12, 21]
const it_valores = valores [Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
/* 

Iteradores:find map some every reduce, iteradores como operam e retornam ele, 
e sabe que a funcao chega no final.
Em js varias coleçoes e varios iteradas, array, string, map e sets,  elas permitem
trabalhar retornando interadores que facilitam trabalhar com esses iterador.

const it_valores = [valores [Symbol.iterator]]() = todo interador ja tem o symbol.
console.log(it_valores.next())= next usa o tempo todo quando estamos interando um array.
value : primeira posição do array , done : false indica que ele nao chegou no final, forma
de saber se chegou no final ou não.

console.log(valores) valores
console.log(it_valores.next().value) -primeiro valor
console.log(it_valores.next().value) - proximo valor
console.log(it_valores.next().value)  -prox
console.log(it_valores.next().value) - prox
console.log(it_valores.next().value) -value undefined, done:true OPA ACABOU! chegou no final parar de interar.
console.log(it_valores.next())

Funciona assim!
funcoes obtem o valor atual do array e ja sabem com next quando chegou no final.

com o value vai direto pro valor e depois fica undefined quando chegar no fim.
Com isso ja posso ter um while ou for da na mesma. Enquanto nao for true vou percorrendo.
O interador faz isso porem ele resume a operacao.
*/