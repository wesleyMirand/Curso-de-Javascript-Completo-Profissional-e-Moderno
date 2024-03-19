let st= "I"
res=(st == "A" ? "Ativo" : "Inativo")
console.log(res)

/* 
Operadoes ternario ou op ternarias: Forma de reduzir e simplificar, uma operacao com condicional.
melhor que true e false.

se é par ou impar : 
let num = 10
let res=num % 2
if(res==0) {
      console.log("par")
}else{
      console.log("impar")
}
 %mood resto,

 -------------------------
 operacao ternario é "?" ponto de interrogacao.É operador ternario, 

 let num= 10 o resto da divisao de 10 é 0, zero é false!
 1= true. Significa que o op ternario, se for vdd ele retorna  o primerio  elemento
 PAR e falso  o segundo elemennto Impar.

se o resultado de num%2 for false ele vai para o segundo valor,  . 

 num mode 2 , o resto de 10 é zero, zero é false, intao caiu no IMPAR. 

  let num= 10
res=(num%2 ? "Par" : "Impar")
console.log(res)

e para funcionar com o ternario tenho que negar com ! e por operacao em um bloco ()

  let num= 11
res=(!(num%2) ? "Par" : "Impar")
console.log(res)
AGORA VAI SER PAR!

resto da divisao de 11, por 2, o resto é 1 , ou seja true , estou negando o true que virou
false, retorno sendo falso, o ternario me joga pra segunda condicao impar.

vai retorna impar
  let num= 10
res=(!(num%2) ? "Par" : "Impar")
console.log(res)

(num%2) retorna falso e inverto, nego pro false e vira true. Assim ele retorna o primeiro valor.

true PAR

0 false
1 true

A ternaria vem com teste logico ? se verdadeiro  : se falso.

------------------------------------------------------------------------------------

let num1= 10
let num2= 5

res=(num1 > num2 ? "verdadeiro" : "falso")
console.log(res).

O TERNARIO DE USA NO DOM, quando quero imprimir alguma coisa na pagina ou pego resultado
de um teste, de um componeente marcado, vdd ou falso , ativo ou desativado.
Inves de escrever true e false no campo, eu escrevo oque quero que seja true ou false.
Eu escolho o retorno na linha no dom.

valor de um banco de dados:
retorna status ativo e inativo.

let st= "I"
res=(st == "A" ? "Ativo" : "Inativo")
console.log(res)
AGORA VAI SER PAR!

*/