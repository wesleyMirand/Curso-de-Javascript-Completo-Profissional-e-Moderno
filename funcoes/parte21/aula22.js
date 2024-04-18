const VALOR_PADRAO=0

let valor = 0

console.log(valor)

function add(v) {
      return valor + v
}

let valor = 0 //imprimi zero

valor = add(10)
console.log(valor) //depois valor 10 essa funcao mudou o valor da var valor, chamei e somei retornei para valor, var fora da funcao, em js posso mudar o valor nele msm.

valor = add(5)
console.log(valor)
/*       
pra destacar, tiro o retorno 
o retorno mais e igual a v +=
nao preciso adicionar valo no add

Em js posso operar var fora da funcao e dentro sem problemas


*/