class Carro { //Classe pai
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
    }
}

class Militar extends Carro {

}

const c1 = new Carro ("Normal", 4)
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar()

console.log(`Nome : ${c1.nome}`)