function soma (...valores) {
      let res = 0
      for( let v of valores){
            res+=v
      }
      return res
}
console.log(soma(10, 5, 2, 8, 15))


/* 

podemos usar for of e for in
diferente 
usar for of:
nao preciso mais controla o tamanho
e a soma res recebe seu valor + valor de v
a var v recebe os valores que estao dentro dos valores
Spread (...valores) parametros rest usando o spread

*/