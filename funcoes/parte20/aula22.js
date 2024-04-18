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


function soma(n1=0, n2=0) {
      let res
      res = n1+n2
      return res
}

let resultado_soma = soma(5,5)
//console.log(resultado_soma)


/*       

vou criar outra funcao encima, let valor 0, 
function adicionar add, um valor
adiciona valor na var anterior
retorno que valor + v 
Eu vou dar console.log e chama a funcao eddie e adicionar 10 ao valor 
valor soma mais 10
retorno por em valor 
valor recebe o retorno de add 
console log no valor imprimir antes da funcao, depois da funcao
antes fucao tinha valor zero
rodei a funcao fica valor 10

1 0
2 10
3 15

*/