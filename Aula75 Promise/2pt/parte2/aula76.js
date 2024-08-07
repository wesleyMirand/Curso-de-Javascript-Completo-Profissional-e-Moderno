//Se precisar da promisse em um momento determinado, vamos por dentro de uma funcao

const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

//no btn promessa adicionar evento de click, com uma arrowfunction passando evento
btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando"

    let promise = new Promise((resolve,reject) => { //A nossa promisse, criando, passando pra arrowFunction , passando ok tipo de resultado. Se ok primeiro paramentro, se errado res_nao_ok
        let resultado = true //Mudou para true
        let tempo = 3000
        setTimeout(() =>{ //fez o intervalo, espero acabar e foi executando o resto, Depois de tres segundo muda o resultado para true. vericar se depois de 3 segundo qual e o resultad
            if(resultado){
                resolve("Tudo certo")
            }else{
                reject("tudo errado")
            }
        }, tempo)  
    })              
    
    promise.then((retorno) =>{//fixo true
        numero.innerHTML= retorno
        numero.classList.remove("erro")
        numero.classList.add("ok") //remove erro e da ok
    }) //se certo poi no retorno

    promise.catch((retorno) =>{ //
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok") //remove o ok e da erro
    }) //se errado poi no retorno

})

//muda muita rapido e ja vai pro processando, fiz uma promessa vou retorna algo
numero.innerHTML="Esperando"