const p_array = document.querySelector("#array")
const text_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = [10, 5, 8, 2, 9 15, 20]
p_array.innerHTML =  "[" + elementos_array + "]"

btnPesquisar.addEventListener("click" , (evt) => {
    resultado.innerHTML = "Valor não encontrado"
     const ret = elementos_array.find((e, i) => {
        if (e==text_pesquisar.value){
            resultado.innerHTML="Valor encontrado " + e + "na posição" + i
            return e
        }
    })
    console.log(ret)
})
 

/*
tudo a mesma coisa : 
const pes= (e, i) => {

}

function pesq(e, i ) {
    
 } */