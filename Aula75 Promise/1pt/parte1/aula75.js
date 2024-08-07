const numero = document.getElementById("numero")

let resultado = false //executo 3 segunds
let tempo = 3000

setTimeout(() =>{ //fez o intervalo, espero acabar e foi executando o resto
    resultado=true //Depois de tres segundo muda o resultado para true
}, tempo)

if(resultado){ //verificar o valor do resultado, for true verifica, deu tudo certo, remove classe erro e da resposta ok, remove classe que formata vermelho e formata em azul
    numero.innerHTML = "Deu  tudo certo"
    numero.classList.remove("erro")
    numero.classList.add("ok")
} else { //com resultado false caiu aq
    numero.innerHTML = "Deu tudo errado" //se false, deu tudo errado, erro e remove classe azul e ficar vermelho texto processando, 
    numero.classList.add("erro")
    numero.classList.remove("ok")
}


//muda muita rapido e ja vai pro processando
numero.innerHTML="Processando..."