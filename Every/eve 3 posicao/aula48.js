const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 16, 51, 18, 22]
p_array.innerHTML =  "["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt) => {
    
    const ret=elementos_array.every((e,i) => {
        if( idade < 18) {
            resultado.innerHTML = "Array não conforme na posição do " + i
        }
        return  e>=18
    })
    if(ret) {
        resultado.innerHTML = "OK"
    }
    //console.log(ret)
})






/* 
verificar o array e procura equivalencia, se todos elementos equivalrem a funcao
e a regra.  se for array de idades, elemento por elemento e todos tenque valer
a regra especifica, tipo 18+ maiores de 18. retorna true ok
se noa false

Para ser true todos tenque ser equivalente.

compar todos elementos e retorna ok quando todos tiverem conforme regra, se 1 não
ja retorna false. conformidade de array.
*/