const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(btn_c[0].getRootNode()) //document
console.log(btn_c[0].ownerDocument())//mesma coisa de cima

/*
console.log(document.getRootNode ()) metodo document, nó raiz

console.log(caixa1.firstElementChild) 1filho
console.log(caixa1.lastElementChild) ultimo filho
console.log(caixa1.children)       todos filhos


Como referencia os elementos do dom, como encontrar um elemento, sem a parte do query,
mais pela parte do "DOM".

Elementos filhos e raiz, tem relaçao, temos a div principal que esta em volta da caixa linha preta.
A div Html, tem relação com a linha preta e as outra div no meio. 
Contando com a div "RAIZ", a cor cinza dentro da caixa, digamos que ela é mae das outras div, exemplo a html.
Child são filhas e a Div "html" primeira é a firts child, a "MySql" ultima é a las child, finalizando todas outras
são filhas. 

Digamos que a div HTML é a referencia, ela não tem filhos se eu pedir pra listar os child, o sistema vai fala que ela 
tem um "TESTE" direto e se pedir filho ela nao vai lista porque não tem nenhum elemento dentro dela. 

Div linha preta "PARENT" pai da div "HTML" e as outras div são irma "siblings" da HTML.

*/