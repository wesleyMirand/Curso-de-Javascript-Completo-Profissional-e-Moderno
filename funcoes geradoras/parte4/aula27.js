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

e se chamar novamente console.log(itc.next().value)
vai dar UNDEFINED! a funcao chegou no final sem nd pra exec
se quiser denovo criar uma novo interetor ou criar uma nova var let.

*/