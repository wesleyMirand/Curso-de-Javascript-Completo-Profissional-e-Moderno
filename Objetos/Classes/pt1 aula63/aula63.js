const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
//quando clicar no militar tirar o disable de blindagem e municao
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem") 
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []
 
f_tipoMilitar.addEventListener("click" ,(evt) => {
    f_nome = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click" ,(evt) => {
    f_nome = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0 //resetar todos os campos
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const gerenciarExibicaoCarros = () => { //para criar o carro de acordo com o conteudo do array a_carros e criar um lop com map ou for each
    carros.innerHTML= ""
    a_carros.forEach((c) => { 
    const div = document.createElement("div")
    div.setAttribute("class", "carro")
    div.innerHTML =  `Nome: ${c.nome}<br/>`
    div.innerHTML =  `Portas: ${c.portas}<br/>`
    div.innerHTML =  `Cor: ${c.cor}<br/>`
    div.innerHTML =  `Blindagem: ${c.blindagem}<br/>`
    div.innerHTML =  `Munição: ${c.municao}<br/>`
    carros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click", () => { //quando clicar no bottao vou verificar qual carro foi selecionado
    if(f_tipoNormal.checked){ 
        const c = new Carro(f_nome.value, f_portas.value) //o nome do carro é um formulario fnome
        a_carros.push(c)
    }else { // caso seja militar
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value) //o nome do carro é um formulario fnome
        a_carros.push(c)
    }
    gerenciarExibicaoCarros() //criei carro e verifico se ta preenchido ou nao
})

class Carro { //Classe pai / base
    constructor (nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function (){
        this.ligado = true
    }
    desligar = function (){
        this.ligado= false
    }
    setCor = function (cor) {
        this.cor = cor 
    }// o militar tem todos esses elemento acima, 
}

class Militar extends Carro { //vai passar mais 2 objeto para o constructor
    constructor ( nome, portas, blindagem, municao) { // contructor
        super(nome, portas) //invoca e chama a classe pai , quando quer chamar algo da classe pai, posso usar todos ou especifico
        this.blindagem = blindagem
        this.municao = municao
        this.setCor = ("Verde")
    }
    atirar = function () { //metodo atira , se municao for maior que zero tira uma municao dispara, diminui.
        if(this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro ("Normal", 4) //carro1 , 4portas
c1.ligar() //carro ligado e com cor preta
c1.setCor("Preto")

const c2 = new Militar("Lutador", 1, 100, 50) //nome lutador, blindagem 100, municao 50
//c2.setCor ("Azul") //caso queria mudar 
c2.atirar()
/*
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
*/

console.log(`Nome : ${c1.nome}`) //nome do  carro1 normal, usando crazi chamando a propriedade nome com templateString
console.log(`Portas : ${c1.portas}`)
console.log(`Ligado : ${(c1.ligado ? "Sim" : "Não")}`) //true e false usar ternario.
console.log(`Velocidade : ${c1.vel}`)
console.log(`Cor : ${c1.cor} `) //nao definimos a cor 
console.log("---------------------------------------") //no console do dom vai ter todas propriedades do carro1, nome, portas, ligado, velocidade, cor.

console.log(`Nome : ${c2.nome}`)
console.log(`Portas : ${c2.portas}`)
console.log(`Ligado : ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade : ${c2.vel}`)
console.log(`Blindagem : ${c2.blindagem}`)// isso é heranca posso trazer mais elementos 
console.log(`Munição : ${c2.municao}`) // a cada tiro vai diminuindo o valor de municao
console.log(`Cor : ${c2.cor} `)
console.log("---------------------------------------")