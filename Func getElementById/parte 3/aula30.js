const dc1= document.getElementById("c1");
const dc1= document.getElementById("c2");
const dc1= document.getElementById("c3");
const dc1= document.getElementById("c4");
const dc1= document.getElementById("c5");
const dc1= document.getElementById("c6");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

console.log(arrayElementos)

for(d of arrayElementos) 
      d.innerHTML = "WEWE Cursos"

console.log(arrayElementos)

/*
Pegar outro elemento  criar const dc2 e chamar o document.getElementById e obter
o elemento c2 e posso obter todos elemento com by.id.
criar um array dos 6 elemento com DC1.....
console.log puxando o arrayElemento vai mostrar todos.
e percorrer o innerhtml de todos com "FOR" percorrer arrays.
d of arrayelemento puxando o d.innerhtml = "WEWECURSOS" fazendo todos serem wewe.

e podemos usar a estrutura MAP, que opera todos elementos do array, map recebe o 
elemento, indice e array.
arrayElementos.map((e,i,a) => {}) nao preciso passar todos. Ai uso console.log em e.
*/