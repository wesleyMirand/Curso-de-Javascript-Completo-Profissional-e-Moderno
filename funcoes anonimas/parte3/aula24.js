const f = new Function("v1", "v2", "return v1 + v2") // Funcao Constru anonima

console.log(f(10,5))

/* 

construtor: esquema de funcoes anonimas, serve para funcao 
simples dois valores.
const f recebe a funcao new
o cenario muda pq preciso passar tudo para parametros da 
funcao argumento1 e 2 e oque vai fazer return em 
v1 e v2 e para nao da erro usar aspas!

function tenque ser com f Maiusculo funcao construtor 
funcao anonima.
corpo da funcao : "return v1 + v2"

argumentos : "v1", "v2", 
*/