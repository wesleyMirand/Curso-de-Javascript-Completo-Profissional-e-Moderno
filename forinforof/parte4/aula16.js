let num=[10, 20, 30, 40, 50]

for(n of num) { /* of vai dentro do elemento da condicao que estou interando, pegar os elemento*/
      console.log(n)
}

for ( n in num) {/* in indice dessa colecao , pegar as posicao, os dois sao iguais */
      console.log(n)
}

/* 





for(let i=0; i<num.length;i++) {
      console.log(num[i])


 Existem outros 2 for, o for in, vou criar uma var que vai receber os elementos, 
retornados da posição que quero trabalhar, for (n in num ){ }, vou interar a posição num,
e vou percorrer e retorna os elementos.
Em cada posicao vai colocar o num, console.log(i). vou imprimir 0 ao 4, esse for e igual
o primeiro for. 

Por padrao no n percorre todos elementos.

os dois lop sao iguais e tem o mesmo retorno, mais usei o for of que vai dentro elemento,
 da
condicao que ele esta interando: 
for ( n in num) {
      console.log(n)
}

 for(let i=0; i<num.length;i++) {
      console.log(num[i])



*/