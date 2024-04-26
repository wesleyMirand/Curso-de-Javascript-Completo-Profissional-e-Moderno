const soma = (...valores) => {
      const somar= val  => {
      let res=0 
         for(v of val)
            res += v
         return res
      }
      return somar (valores)
}
console.log(soma(10, 5, 15))

/* 

Funcoes Aninhadas: uma dentro da outra
funcao anoninma arrow function e vou passar parametro spread 
para criar o conceito de parametro rest, uma funcao anonima
arrow function parametrizada com com parametro rest.
: 


pra soma vou criar dentro da funcao outra, outra soma somar
por um parametro de entrada e vai operar somando os valores
e no final vai return o valor 

const soma = (...valores) => {
      const somar= val  => {

      }
}

Depois criar um let res igual a 0
por for com um array for of, for (v of val) parametro da funcao somar
onde ele faz o res  += mais igual a v
e por fim vai retorna res

const soma = (...valores) => {
      const somar= val  => {
         let res=0 
         for(v of val)
            res += v
         return res
      }
}

o retorno da vindo da funcao somar, preciso chmar a funcao para operar
e vo passar meu valores para dentro 

soma retorna o retorno da funcao somar

const soma = (...valores) => {
      const somar= val  => {
         let res=0 
         for(v of val)
            res += v
         return res
      }
      return somar (valores)
}
console.log(soma(10, 5, 15))

*/