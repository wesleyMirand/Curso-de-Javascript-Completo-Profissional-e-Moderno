class Npc {
    constructor (energia) {
        this.energia = energia //
        this.alerta = false //todos npc vao ter alerta
    }
    info = function () {
        console.log(`Energia : ${this.energia}`)
        console.log(`Alerta : ${(this.energia? "Sim" : "Não")}`)
        console.log("-----------------------------------------")
    }
}

const npc1  = new Npc (100) //novo npc
const npc2 = new Npc(80)
const npc3 = new Npc(30)

npc1.alerta = true
npc2.alerta = true
npc3.alerta = true

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