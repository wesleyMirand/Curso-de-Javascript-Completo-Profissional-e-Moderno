const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16, 12, 10, 17, 15, 13, 11]
p_array.innerHTML =  "["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt) => {
    
    const ret=elementos_array.some((e,i) => {
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
preciso que pelo 1 seja e nenhum é
    
some: Alguns , da ok quando pelo meno 1 coincidir com oque foi pedido,
tipo idade e pelo 1 idade seja maior ou igual a 18

1 ou +

*/



