const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp =  [...document.querySelectorAll(".op")] 
const teclaRes = document.querySelectorAll(".res") /* so tem uma tecla*/
const display = document.querySelectorAll(".display")
const ton = documenydocument.getElementById('ton');
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")

let sinal  = false //false pq nao tem sinal iniciamente
let decimal = false

/*add os eventos */
teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false

        if(evt.target.innerHTML==","){
            if(!decimal){
            decimal = true 
            if(display.innerHTML=="0"){
                display.innerHTML += "0,"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML  += evt.target.innerHTML /* evt target e o t7  ou por um data valor nele com 7 e pega o data 7 ou pelo inner html teclas com funcao, add no display teclas de numero */
    }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal){
        sinal= true //toda vez que mudar de operador, so concatena quando for true
        if(display.innerHTML=="0"){
            display.innerHTML=""
        }
        if(evt.target.innerHTML=="x"){
            display.innerHTML+="*" 
        }else{
            display.innerHTML  += evt.target.innerHTML  //se falso true e escreve operacao na tela
        }
        }
    })
})

tlimpar.addEventListener("click", (evt) => { /* agora da pra limpar */
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", (evt) => { /* agora da pra limpar */
sinal = false
decimal = false
const res =  eval(display.innerHTML)//avalia padrao de entrada, oque tiver no display
display.innerHTML
})