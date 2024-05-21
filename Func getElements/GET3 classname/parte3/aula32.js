const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

cursosTodos.map((el) => {
      el.classList.add("destaque")
})

/* 

Levo isso para um array operar de forma melhor o contorno dos metodos disponiveis,
para array, usar um for it, metodo tradicionais podemos!
Basta usar o SPREAD, vai espalhar oque foi retornado. cada elemento vai ficar em um array,
e em cada posição dele tem elementos. Marca o elemento que estou apontando no 
no DOm do console. Criar mais duas coleçoes, vou superar todos elementos,
que usam a classe c1 e a classe c2.
1- 12colections
2- 6 colections que possuem a claase c1
2- 6colections que possuem a classe c2
Vou criar uma classe destaque no css, usar o back, color, border com a chave
!important, que serve para que as propriedades substituam as propriedades atuais.
Tal elemento que ja possua essa classe e tem essas propriedades.
E vamos percorrer e add todos elementos, no cursos todos usar o map, el , pegar
elemento por elemento e chama o el.classlist.add e adicionar esses elementos a classe
("destaque") Todos elementos receberam a classe destaque.

*/