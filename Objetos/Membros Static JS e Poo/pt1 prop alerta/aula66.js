class Npc {
    constructor (energia) {
        this.energia = energia //
        this.alerta = false //todos npc vao ter alerta
    }
}

const npc1  = new Npc (100) //novo npc
const npc2 = new Npc(80)
const npc3 = new Npc(30)

console.log(npc1.energia)//passa a energia dele 
console.log(npc2.energia) //valores diferente cada um tem sua propriedade
console.log(npc3.energia)

/* 

static dentro classe pode definir tanto propriedade quanto atributos metodos.
metodos com static ou atributo , sem istanciar classe.Mebros sao da classe e não
dos objetos.

Se definir os atributos das class todos static instancia vao ler o mesmo valor
Se criar game classe npc

*/