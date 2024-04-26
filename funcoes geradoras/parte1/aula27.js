function* cores(){
      yield 'Vermelho'
      yield 'Verde'
      yield 'Azul'
      
}



/* 

Funcoes geradoras: UMa funcao geradora, tem seu return adiado, até que precise dele!
Elas são o pilar da programacao sicrona, uma funcao normal é chamada, quem fica
no controle dela é a propria funcao, ela tem seu controle normal até return.

E ja as geradoras. a propria pode ter esse return"controle", quando quiser retorna alguma coisa.
Chamei uma func geradora, nao preciso de todo processamento para retorna algo
no final e executar o programa. Na geradora, retorno coisas ao longo da execução, 
chamei funcao retorno alguma coisa. Se eu chamar de novo, ela retorna outra coisa.
Porque quem tem o controle da exec da funcao e a propria funcao.
 Quando chamo uma geradora no 1primeiro momento ela vai retorna um interador e a 
 apartir do segundo momento ela vai entra na execucao e retorna sempre quando tiver
 um comando ou declaracao ieute. Retorno de investimento tipo lucro.
 tenque parar e continuar, so retorna quando é chamada.

 para geradoras usamos function,  vou criar funcao cores, funcao normal.
 function cores(){    
 }
 funcao normal vou transforma geradora com *
  function* cores(){    
 } 
 agora sei que é geradora.
 A primeira que a funcao é chamada ela fica tipo interador. Controle para ter retorno
 da execucao, por yeld pra entender que tenque retorna.

*/