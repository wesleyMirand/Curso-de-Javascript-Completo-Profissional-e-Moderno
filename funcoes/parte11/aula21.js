function canal() { 
   let n1= 10
   let n2= 2
   let res= n1*n2 
   if(res % 2 ==0)
       return "Par"
   else
       return "Impar"
} 

let res= canal() 

console.log(res) 

/* 

posso ter mais que um retorno e situacoes diferente!
retorna par e impar!
se res mode 2 for igual a 0 return com string par caso contrario é impar
var res chama funcao canal e retorna no res par ou impar;
nao posso retorna dois return só um! 
com 2 ele nao trabalha direito!


*/