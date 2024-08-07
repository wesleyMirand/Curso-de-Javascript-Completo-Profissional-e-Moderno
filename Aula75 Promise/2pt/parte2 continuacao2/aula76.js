/* Capturando ainda dentro do promisse, pra mudar tirar o 

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

    E agora tem a funcao promessa, que tem o promese. Agora captura o promese depois da chamada promessa

*/
const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")


btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."
    promessa() //quando precisar chama a funcao promessa
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
})

//e a funcao promessa agora tenque retorna a promese
const promessa = () => {
    let p= new Promise((resolve,reject) => { //associar promise a "p" e adicionar return la embaixo
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
    return p  //agora a promessa vai fazer retorno da promise, agora preciso da then e catch para promessa
}

numero.innerHTML="Esperando"