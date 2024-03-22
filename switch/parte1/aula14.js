let colocacao = 1

switch(colocacao){
      case 1:
            console.log("Primeiro Lugar")
            console.log("Foi o melhor")
            console.log("Classificado para a final")
            break

}


/*
temos primeiro um expressao, variavel colocação em uma corrida, foi 1.

switch caso colocacao, ai vai pros case:
caso for 1, vai seguir certos comandos, "primeiro lugar".
a cada final de bloco tenho que usar o break.
E pode ter varios console block dentro do comando.

declaracao Switch case: O switch avalia uma expressao, de acordo com o resultado, ele compara
com os case. Caso algum caso coincidade com alguma expressao, ele executa o bloco
de comando.
Se nao houver nenhum caso que coincida, ele vai para o default e executa.
Diagrama case:
                                *         expressao
                                |
                                |   
                                |     case 1      vai avaliar essa expressao e poder coincidir com uma serie de situacao que sao case
                          |expressao|--------------------->|      caso1     |--------------*
                                |             se coincidir ele executa o bloco desse caso  |
                                |                                                          |
                                |  se não ele vai avaliar o caso2                          |
                                |-----> |  caso2         |---------------------------------*
                                |                                                          |
                                |                                                          |
                                |  se nao vai avaliar o caso2                              |
                                |------------> |  caso3            |-----------------------*
                                |                                                          |ACABOU SEGUE A VIDA POR AQui
                                |                                                          |
                                |se nenhum, vai cair no bloco de execucao  "DEFAULT"       |
                                |----------> | bloco exec. default padrao   | -------------*
                                                                                           |
                                                                                           |
                                                                                           v
                                                                                         |fim|
                        

                                */ 