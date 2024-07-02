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
class Utilitario extends Carro { // classe filho
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro ("Normal", 4) //carro1 , 4portas
c1.ligar() //carro ligado e com cor preta
c1.setCor("Preto")

const c2 = new Militar("lutador", 1, 100, 50) //nome lutador, blindagem 100, municao 50
//c2.setCor ("Azul") //caso queria mudar 
/*
c2.atirar()P
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
console.log(`Lugares : ${c1.lugares} `) 
console.log("---------------------------------------") //no console do dom vai ter todas propriedades do carro1, nome, portas, ligado, velocidade, cor.

console.log(`Nome : ${c2.nome}`)
console.log(`Portas : ${c2.portas}`)
console.log(`Ligado : ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade : ${c2.vel}`)
console.log(`Blindagem : ${c2.blindagem}`)// isso é heranca posso trazer mais elementos 
console.log(`Munição : ${c2.municao}`) // a cada tiro vai diminuindo o valor de municao
console.log(`Cor : ${c2.cor} `)
console.log("---------------------------------------")