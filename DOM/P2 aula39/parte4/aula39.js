const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(caixa1.children.length > 0 ? "possui filhos" : "não possui filhos")

console.log(caixa1.firstElementChild.innerHTML="TESTE")


/*
agora se precisar operar esses elementos mudar classe, conteudo, podemos pegar do caixa1 e firstchild e mudar o innerHtml dele.
se por console.log vai retorna texto! 
Mais eu preciso do firstelementochild ai ela retorna a div  porem quero mudar o innerHtml para = "teste".
Interagi literalmente com um elemento especifico.

*/