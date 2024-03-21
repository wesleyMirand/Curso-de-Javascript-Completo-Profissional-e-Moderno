let num=10

if(num > 10) 
   console.log("Numeral maior que  10")

console.log("fim do programa")




/* 
O codigo assim é false, porque num 10 não é maior que 10.

Vai ser sempre:
IF   (a expressao comparar ou teste logico  ) 
{
      se verdadeiro cai aqui
}
     se for false ele pula e executa aqui 

O fluxo do if : diagrama de bloco

         * <-inicio do programa
         |
         |execução
         v  condicional if, expressao logica comparacao...
        |if| -------------------------------------
        1|                                       |2
         |                                       | 
         | true                                  |
         v se for vdd vem praka                  |
  |bloco de instrucao| executa os comandos       |    
         |                                       |
         | continua a execucao                   |
         |                                       |false
         |----------------------------------------  continua execuçao                                 
         v
       | O |terminar 

         
                          *       inicio programa
                          |
                          |
  se                   | if |
 false--------------------|-------------true
|2bloco de comando|                   |1bloco de comando|
  |                                         |
  -------------------------------------------
                       |
                       v
               |execucao do programa|
                     |
                     |
                     |
                   termino 
*/