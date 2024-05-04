function* contator() {
      let i = 0
      while(true) {
            yield i++
      }
}
const itc = contator()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

/* 

Agora vai ser com looping, para obter return das funcoes,
interetor com for of, vamos rodar e obter return das func geradores.

funcao contadora, sempre que for chamada vai return um looping.
chama loop infinito while true para sempre.
 yield i++ e return valor de 1.
 Só preciso de i, essa funcao eterna
 const itc interador = contator()
 consol......
 primeira chamada vai return 0
 pq incremento 0 pq é pós incremento se for antes pre incremento

quantas vezes chama a funcao e quantas vezes vou retorna o contator.


*/