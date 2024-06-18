const valores = [10, 9, 8, 2]
const it_valores = valores [Symbol.iterator]()

const texto = "Youtube"
const it_texto = texto [Symbol.iterator]()

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())


/* 

Intera colecoes com arrays, String são colecoes interaveis, 
const texto = "Youtube"
const it_texto = texto [Symbol.iterator]() 
INTERATOR da coleção texto.

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
 elemento por elemento : Y , O , U ....
 até chegar no fim

*/