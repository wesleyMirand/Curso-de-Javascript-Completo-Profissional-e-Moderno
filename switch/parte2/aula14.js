let colocacao = 10

switch(colocacao){
      case 1:
            console.log("Primeiro Lugar")
            console.log("Foi o melhor")
            console.log("Classificado para a final")
            break
      case 2:
            console.log("Segundo Lugar")
            break
      case 3: 
            console.log("3lugar")
            break
      
      default:
            console.log("Nao subiu ao podio")
            break
}


/*

Se não foi case1, break e vou pra outra expressao. Caso 2  executa o outro bloco de comandos
segundo lugar break. Caso 3 imprimo 3lugar break. 
Caso seja nenhum entro no default padrao, nao subiu ao podio e do o break tambem no default.
Estrutura do switch case

Se eu por 10 vai cair na default, porque nao caiu em nenhum caso!

                                */ 