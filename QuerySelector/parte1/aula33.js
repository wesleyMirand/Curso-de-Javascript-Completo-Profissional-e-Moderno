const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_divTodas = 

console.log(divTodas)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosC1.map((el) => {
      el.classList.add("destaque")
})

/* 

QuerySelector: Não são espefico pra um tipo de index ou importador.
Exemplo o getelements, obtem somente os elementos por id.
ja o query somente por elemento por tag. Diferente de className so usa elementos 
com a classe que eu espeficar.

QuerySelector é mais generico, obtem elemento que eu espeficar para ele, seja id classe
ou tag. Só tenho que espeficar qual é qual.
Vamos criar um const divToda com bytagname chama a div, obtendo todas as divs, 
e  imprimindo console log com divTodas.

primeira colecao vai ser das div, mesma colecao dos elemento que usam a classe curso,
que sao todas div e elementos usam a tag curso.
Podemos por 2 elementos no html que nao usaram a classe curso:
      <div id="c13">Photoshop</div>
      <div id="c14">AppInventor</div>
vão ser colecoes diferentes.

E ja no css mudar o padding para 10, para caber tudo na tela e mostrar a diferenca, 
da primeira colecao e segunda no DOM . 14elementos, porque vou ter os 2 ultimos elemento
criados recente e primeiro peguei so pela classe.
USEI: TAGNAME, classname e vou trocar o ultimo por elementos byID.
E nele vou pegar o id "c1".

Agora vamos começar usar o const chamando o query_divTodas.

*/