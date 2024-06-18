const caixa = document.querySelector("#caixa")

let cores = ["azul", "verde", "vermelho",["claro", "escuro", "medio"]] //ja temos outro indice

let  cursos =  ["HTML", "CSS", "JavaScript",cores] 

console.log(cursos[3][3] [2]) //vai imprimir os elementos, do indice 4, no 3nivel eu quero o medio o 2, dados simples

cursos.map((el) => { //coloca os array dentro da caixa, 
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