/* agora ver a promise trabalhando e comentar then e catch

*/
const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")


btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."
    console.log(promessa()) 

    /*

    poderia resolver com : 
            numero.innerHTML= retorno
        numero.classList.remove("erro")
        numero.classList.add("ok") 
        NO RETORNO DELA la no if no setTimeOut

        e no erro : 
                numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok") //remove o ok e da erro
    -------------------------
    .then((retorno) =>{//
        numero.innerHTML= retorno
        numero.classList.remove("erro")
        numero.classList.add("ok") //remove erro e da ok
    }) //se certo poi no retorno

    .catch((retorno) =>{ // o then e catch ficam diretamente associados há funcao promessa.
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok") //remove o ok e da erro
    }) //se errado poi no retorno
    */
})

//e a funcao promessa agora tenque retorna a promese
const promessa = () => {
    let p= new Promise((resolve,reject) => { //associar promise a "p" e adicionar return la embaixo
        let resultado = true //Mudou para true
        let tempo = 3000
        setTimeout(() =>{ //fez o intervalo, espero acabar e foi executando o resto, Depois de tres segundo muda o resultado para true. vericar se depois de 3 segundo qual e o resultad
            if(resultado){
                resolve("Tudo certo") //mudou
                numero.innerHTML= "Tudo certo"
                numero.classList.remove("erro")
                numero.classList.add("ok") //remove erro e da ok
            }else{
                reject("Tudo errado")
                numero.innerHTML= "Tudo errado"
                numero.classList.add("erro")
                numero.classList.remove("ok") //remove o ok e da erro
            }//quando acaba alem de retorna altera no dom automatico!
        }, tempo)  
    })        
    return p  //agora a promessa vai fazer retorno da promise, agora preciso da then e catch para promessa
}

numero.innerHTML="Esperando"