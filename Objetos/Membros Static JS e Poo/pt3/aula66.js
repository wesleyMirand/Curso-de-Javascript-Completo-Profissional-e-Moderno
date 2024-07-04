class Npc {
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info = function () {
        console.log(`Energia : ${this.energia}`)
        console.log(`Alerta : ${(this.energia? "Sim" : "Não")}`)
        console.log("-----------------------------------------")
    }
    static alertar = function () {
        Npc.alertar = true
    }
}

const npc1=new Npc(100) //novo npc
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()

/* 

static dentro classe pode definir tanto propriedade quanto atributos metodos.
metodos com static ou atributo , sem istanciar classe.Mebros sao da classe e não
dos objetos.

Se definir os atributos das class todos static instancia vao ler o mesmo valor
Se criar game classe npc

*/