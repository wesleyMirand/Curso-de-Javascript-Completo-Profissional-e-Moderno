"use strict" //declarar a var antes de usar regra!

function teste(){//criando funcao modo padrao
      
     
      if(true){ 
          let nome = "wesley"
          console.log("dentro do if de teste:" + nome)
      } 
      console.log("dentro de teste:" +nome) ///mesmo nivel de onde foi declarado
}

teste()
console.log("fora de teste:" +nome)// vai dar erronao vai ser encotrada porque ela nao pode existir, porque este é um escopo anterior ao que foi declarado

/* let tem sempre um controle maior que a var, sempre preferencia a let.
let é var declarei, a qualquer momento posso ir na var e altera  */