const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(caixa1.children.length > 0 ? "possui filhos" : "não possui filhos")

/*

Operador ternario: tirar do if ponto tradicional e fazer o teste com condicao ternario
true: possui filhos
false: nao possui

*/