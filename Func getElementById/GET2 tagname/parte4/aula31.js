const dc1= document.getElementById("c1");
const dc2= document.getElementById("c2");
const dc3= document.getElementById("c3");
const dc4= document.getElementById("c4");
const dc5= document.getElementById("c5");
const dc6= document.getElementById("c6");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

const colecaoHTML = document.getElementsByTagName("div")
colecaoHTML = [...colecaoHTML]

console.log(colecaoHTML)

colecaoHTML.map((e) => {
      console.log(e)
})

/* 

a forma normal menos direta, transforma em uma var e usar o collection.
colecao recebe spread de colecao.
qualquer forma pode ser usada.
o Melhor é o passado com o spread no const porque se torna imutavel, spread espalha e volta 
a elementos com array.

*/