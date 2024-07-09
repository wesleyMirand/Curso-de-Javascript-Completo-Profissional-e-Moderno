const Nave = function (energia){
    this.energia = energia
    this.disparos = 3
    this.teste = function () { //criando uma funcao dentro da propria nave
        //nao justifica o uso do prototype usar sempre sempre que for superior a classe, 
        //praque criar um metodo superior a classe, se posso ir e add na classe. Porque tenque pensar em tempo real de execução da pagina, uma prop ou argumento dentro da classe.
    }
}

const n1 = new Nave (100)


Nave.prototype.vidas = 3
Nave.prototype.disparar = function() {
    if (this.disparos > 0){
        this.disparos --
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)

//prototype em js : Toda vez que precisar add propriedades e membros,
//ao objeto ele vai chmar o prototype. Para adicionar so quando a classe for instanciada.