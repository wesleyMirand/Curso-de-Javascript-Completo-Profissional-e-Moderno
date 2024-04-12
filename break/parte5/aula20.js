let n = 0 
let max = 1000


for(let i=n; i<max; i++) { 
      console.log("Wewe curso" + i)
      if(i%2!=0){ //so fez o incremento quando essa posicao ser falsa 
            continue //for vdd executa o continue e nao considera a interaçao, parou e pula pra proxima
      }
      pares++
}

console.log("quantidade de pares: "+pares)
console.log('fim')


/* 

Apagar o console de cima para ter menos informacoes, somar os pares fora do if.
se valor de mod 2 ser diferente de 0, ele e impar nao vou executa a interacao.
o numero é impar? nao executo intao o pares
é impar? sim nao continue
é ? sim continue

*/