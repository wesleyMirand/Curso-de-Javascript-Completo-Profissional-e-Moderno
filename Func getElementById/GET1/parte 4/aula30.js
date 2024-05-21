const dc1= document.getElementById("c1");
const dc2= document.getElementById("c2");
const dc3= document.getElementById("c3");
const dc4= document.getElementById("c4");
const dc5= document.getElementById("c5");
const dc6= document.getElementById("c6");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

arrayElementos.map((e)=>{
      e.innerHTML= "WEWE CURSOS"
      console.log(e)
})



/*
E podemos usar a estrutura MAP, que opera todos elementos do array, map recebe o 
elemento, indice e array.
arrayElementos.map((e,i,a) => {}) nao preciso passar todos. Ai uso console.log em e.

map retorno todos elementos do meu array de uma forma melhor que o for. Sempre que precisar
percorrer e interar todos elementos, usa o map por ser mais simples e moderna para
usar array.

para mudar conteudo é : e.innerHTML = "WEWECURsOS".
Dessa maneira busca elemento do dom, trazer pra var dentro do programa e opero as variaveis.
E o console ajuda a ver como esta ficando.
algumas vezes traz o elemento collection ai precisamos de spread. Mais nao foi o caso!
*/