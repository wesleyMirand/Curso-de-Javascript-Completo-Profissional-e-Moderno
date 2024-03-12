"use strict" //declarar a var antes de usar regra!

function teste(){//criando funcao modo padrao
      
      let nome = "wesley" //escopo 1, ele sempre vai elevar de onde ele foi declarado pra cima
      if(true){ //escopo2,  o escopo1 esta dentro deste escopo.
          console.log("dentro do if de teste:" + nome)
      } 
      console.log("dentro de teste:" +nome) ///mesmo nivel de onde foi declarado
}

teste()
console.log("fora de teste:" +nome)// vai dar erronao vai ser encotrada porque ela nao pode existir, porque este é um escopo anterior ao que foi declarado e esta fora funcao


/* 
 o let cuida pra var   seja acessada somente do escopo criada para cima. pode ser acessado do escopo pra frente nao pra tras.

if(true){ //escopo dentro da chave
   var  nome = "Wesley" //bloco com nome nome e valor bruno nome da var e posso usar a qualquer momento
} 
 com problema 
 nao sera interessante usar a var fora do if, seria certo o console.log nao ter acesso
 a var. Pq ela esta acima do escopo. ela foi delcarada dentro do if.
 com o uso de var ela roda mesmo nao pertecendo ao console.log.
 e pra isso foi criado o let; 
 */