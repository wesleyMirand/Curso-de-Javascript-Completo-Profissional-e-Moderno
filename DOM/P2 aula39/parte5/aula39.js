const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(caixa1.children.length > 0 ? "possui filhos" : "não possui filhos")


console.log(caixa1.children[1].innerHTML="TESTE")
/*
Agora quero mudar o segundo elemento e aponto para ele [1] posição 1

*/