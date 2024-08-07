const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp =  [...document.querySelectorAll(".op")] 
const teclaRes = document.querySelectorAll(".res") /* so tem uma tecla*/
const display = document.querySelectorAll(".display")
const ton = documenydocument.getElementById('ton');
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const tcpy = document.getElementById("tcpy")
const teste = document.getElementById("teste")
const calc_aba = doucment.getElementById("calc_aba")
const calc = document.getElementById("calc")
const img_aba_calc = document.getElementById("img_aba_calc")

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

tcpy.addEventListener("click", (evt) =>{
    //teste.select() //vai fazer a mesma coisa, antes selecionava, o colar funciona do mesmo jeito.
    //teste.setSelectionRange(0,99999) //mobile
    //navigator.clipboard.writeText(teste.value())
   navigator.clipboard.writeText(display.innerHTML) //navigator propriedade clipboard area transferencia metodos clipboard writeText, copia mandar texto Write, copiar e mandar allo read., do display innerhtml
})

calc_aba.addEventListener("click", (evt) => {
    calc.classList.toggle("calc_exibir") //quando clicar se o calc tiver a classe calc exbir tira, se nao adcionar com toggle "calcexibir", se tiver classe tira se nao tiver coloca.
    console.log(evt.target)
    if(calc.classList.contains("calc_exibir")){ //se tem a classe vou pegar a img_aba_calc
        evt.target.setAttribute("src", "seta_esquerda.svg") // se ja tiver calc exibir muda o setaesquerda
    }else{
        evt.target.setAttribute("src", "seta_direita.svg") // se ja tiver calc exibir muda o setaesquerda
    }
})