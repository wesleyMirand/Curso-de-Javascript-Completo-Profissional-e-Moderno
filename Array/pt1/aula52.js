const caixa = document.querySelector("#caixa")

let  cursos =  ["HTML", "CSS", "JavaScript"]

cursos [0] = "C++" //altera a posição do array pode ser numeral qualquer um tipo "222"

console.log(cursos[0]) //pega na tela o array

cursos.map((el) => { //coloca os array dentro da caixa
    let p = document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})




/* 

array tradicional: é uma colecao de dados, variaveis, inves de var separadas, crio
um array e vou adicionando valores.

Em outras linguagens escolhemos um array de um tipo e armazeno esse array so desse tipo.
Em js por ser interpretada, ela cuida somente por tras da questao de conversão,
parte da frente do usuario,  posso armazenar qualquer tipo de dado do array, string, numero,
objt, funcao, qualquer coisa dentro do array.

*/