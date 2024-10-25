const caixa = document.querySelector("#caixa")

const carros = ["Polo", "Ford", "GOLF"]
let ol = `<ul>`
carros.map((el) => {
    ul+= `<li> ${el} </li>`
})
ul + `</ul>`
caixa.innerHTML=ul //ou ol

/*
const curso = "Javascript"
const canal = "CFB Cursos"
// inves de aspas ""const frase = "Este é o curso de " + curso + "do canal" + canal
 
const frase =  `Este é o
 curso 
 de ${curso}
 do canal ${canal}`  //caracter crase


caixa.innerHTML = "frase"
*/
/* 

template strings: quebra de linha com enter, indes de + concater usar ${}
ou usar /n pra pular linha, porem so quebra no console dom ou usar <br/>
juncao de variaveis
*/