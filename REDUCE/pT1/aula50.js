const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML =  "["+elementos_array+"]"

btnReduzir.addEventListener("click", (evt) => {
    dobro.push(elementos_array[0] * 2)
    resultado.innerHTML=elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        ant.push(atual)
        dobro.push(atual * 2)
        return atual + anterior
    })
    resultado.innerHTML += "<br />V.anterior: " + aux + "<br/>V.atual" + atu + "<br /> Dobro:"+dobro

})


/* 

Reduce : faz redução do array, no codigo especifico, mesma coida de find, every,
some... Quem ordena oque vai mudar é o programador, importante destacar novo parametro, 
permite ser diferente de outros metodos.

funcao calback opera com um parametro novo, o anterior previousvalue, depois é o mesmo
da anteriores currentvalue valor atual interado, currente index posição atual, e qual array vai ser interado.

previousvalue valor atual e anterior mais não anterior array
no valor anterior temos nada é 0 ! + 1 é 1!
atual é resultado soma 1 + 2 , 3 + 3 6,  6 + 4...
*/


