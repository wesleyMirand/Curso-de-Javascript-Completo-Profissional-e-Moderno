let num=100

if(num > 10) {
   console.log("Numeral maior que  10")
   console.log("comando 2")
}
console.log("fim do programa")


/* 
Nesse caso é obrigado a usar {} chaves, porque tem dois comando.

se eu fizer sem a chave:
let num=10

if(num > 10) 
   console.log("Numeral maior que  10")
   console.log("comando 2")

console.log("fim do programa")

ele vai retorna  :
comando 2
fim do programa

ele entendeu que o comando2 nao faz parte do bloco if!
Resumindo o escopo é definido pela chave de blocos!
*/