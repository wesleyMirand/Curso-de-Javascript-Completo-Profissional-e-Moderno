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

agora vou por for tradicional let i igual a 0 enquanto i
for menor 10 interacoes vou chamar a funcao geradora
10 vezes
0 a 9 resultado vai gerando sempre um novo valor preciso de i

*/