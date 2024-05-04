function* cores(){
      yield 'Vermelho'
      yield 'Verde'
      yield 'Azul'
      
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

/* 

const itc = cores()     1* chamada , chamou o interetor
console.log(itc)      2* chamada , vai chama a 2 ate encontra o yield, quando encontra ele,
ele vai tenque parar yeld 'vermelho' retorna valor.
itc.next -> proxima execucao chamando o value

e se executar novamente
console.log(itc.next) ela vai continuar de onde parou e chamar o verde!
2 execucao vermelho e verde.
se eu por de novo 
console.log(itc.next) retorna o azul
*/