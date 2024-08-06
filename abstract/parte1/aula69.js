class CarroPadrao{//classe para todos os carros
    constructor(){//Classes abstratas objeto em JS
    if (this.constructor === CarroPadrao) {
        throw new TypeError("Esta classe não poder instaciada") //nao pode ser criada uma nova new
    }
    if(this.ligar ===undefined){
        throw new TypeError("É obrigatorio implementar o metodo ligar") //dispara o erro
    }
    if(this.desligar ===undefined){
        throw new TypeError("É obrigatorio implementar o metodo desligar") //dispara o erro
    }
    this.rodas = 4 
    this.portas = 4  
    this.ligado = false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo){
        super() //some o erro this
        this.turbo = new this.turbo(estagioTurbo)
        if(tipo ==1){
            this.velMax=120
            this.nome = "normal"
        }else if(tipo==2){
            this.velMax= 160
            this.nome = "esportivo"
        }else if(tipo==3){
            this.velMax = 200
            this.nome = "super esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas = 4)
        console.log(this.turbo = 4)
        console.log(this.ligado = false)
        console.log("-------------------")
    }
    ligar() {
        this.ligado = true
    } //implementando ligar carr
    desligar() {
        this.ligado = false
    } //obrigator desligar
}

class turbo {
    constructor(e) {
        if(e == 0){
            this.pot =0
        }else if(e==1) {
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro Especial"
    }
    info(){
        if(this.tipoInfo ==1){
            super.info()
        }else{
            console.log(`Nome...:${this.nome}`)
            console.log(`Vel.Max:${this.velMax}`)
            console.log(`Turbo...:${this.turbo.pot}`)
            console.log("---------------------------")
        }
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
//const c4 = new CarroPadrao() nao espera  nada no seu contructor

c1.info()
c2.info()

/* 

conceito classes abstratas em js: desreito a quando tem classe
abstrata nao pode ser instaciada, so serve pra outras classes,
ser extendida, herança base para outras

*/