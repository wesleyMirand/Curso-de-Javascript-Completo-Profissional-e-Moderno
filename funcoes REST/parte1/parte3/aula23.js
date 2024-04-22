function soma (...valores) {
      let tam = valores.length
      let res = 0
      for( let i=0; i<tam ; i++){
            res+=valores[i]
      }
      return res
}
console.log(soma(10, 5, 2, 8))


/* 

Operando as funcao , os valores é array ja sei, 
cria var pra mostra quantidade de valores
e um for qualquer pra operar os valores,
res inicia em zero
res guarda a some
for let i =0; i< tam;i++){
      res mais igual , mais valores na posicao i 
      e no final retorno res
}

posso ir adicionando valores sem tenque mudar a funcaos
*/