const btn_soma = document.querySelector("#btn_soma")
const btn_subtracao = document.querySelector("#btn_subtracao")
const btn_multiplicacao = document.querySelector("#btn_multiplicacao")
const btn_divisao = document.querySelector("#btn_divisao")
const res = document.querySelector("#res")

const op = [ //um array op com 4operacoes
    () => {
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value] //posicao 0  operacao soma, obtenho valores coloco em val, com id obtenho o value, obtenho campo do valo1 e valor2, colco dentro do value.
        res.value = Number (val[0]) + Number(val[1]) //pra fazer a operacao tipe cast e funcao number, convert o elemento texto val string em um numero, se nao usaro o cast, na hora da soma ele vai concatenar e não somar.
    },
    () => {//posicao 1  operacao subtracao
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number (val[0]) - Number(val[1])
    }, 
    () => {//posicao 2  operacao multi
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number (val[0]) * Number(val[1])
    },
    () => { //posicao 3  operacao divisao
        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number (val[0]) / Number(val[1])
    },
]

btn_soma.addEventListener("click", op[0]) //chamar a funcao direto, no listenner do button
btn_subtracao.addEventListener("click", op[1])
btn_multiplicacao.addEventListener("click", op[2])
btn_divisao.addEventListener("click", op[3])

