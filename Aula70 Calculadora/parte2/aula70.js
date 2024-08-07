const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp =  [...document.querySelectorAll(".op")] 
const teclaRes = document.querySelectorAll(".res") /* so tem uma tecla*/
const display = document.querySelectorAll(".display")
const ton = documenydocument.getElementById('ton');
const tlimpar = document.getElementById("tlimpar")

/*add os eventos */
teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        display.innerHTML  += evt.target.innerHTML /* evt target e o t7  ou por um data valor nele com 7 e pega o data 7 ou pelo inner html teclas com funcao, add no display teclas de numero */
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        display.innerHTML  += evt.target.innerHTML 
    })
})

tlimpar.addEventListener("click", (evt) => { /* agora da pra limpar */
    display.innerHTML = "0"
})