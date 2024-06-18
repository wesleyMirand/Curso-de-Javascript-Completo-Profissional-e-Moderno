let valores = [1, 2]
const op = [
    (val)=>{             //primeiro indice do array, cria parametro e operar eles
        let res = 0 //somar valores
        for(v of val) {
            res += v
        }
        return res
    },
    (val)=>{             //outra funcao para fazer multiplicação
        let res = 1  //tirar o 0, se não da loop infinito
        for(v of val) {
            res *= v
        }
        return res
    },
    (val)=>{             // Imprimir todos elemento da coleçaõ
        for(v of val) {
            console.log(v)
        }
    }
]

op[2](valores) //ja estou usando console encima nao preciso repetir e vou chamar o indice 2, na 3posicao do array valores
//quando executar faz a impressão de todos elementos do array
/*chamar o array op da funcao do indice 0 primeira funcao de soma  e abrir () para chamar os parametro
 que quer passar. No caso valores, que esta entrando no parametro do val. No caso obter a soma dos valores do a
 array*/