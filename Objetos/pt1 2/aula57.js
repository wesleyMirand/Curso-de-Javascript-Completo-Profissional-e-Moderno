class  Pessoa {
    constructor () { // declarei uma  var nome e atribui nome  e valor bruno
        this.nome = "bruno"
    }
}       

let p1 = new Pessoa() //vou criar e instacionar novas classe e novos objeto, da classe pessoa
let p2 = new Pessoa()
let p3 = new Pessoa()

console.log(p1.nome) //vai sair bruno em todos, pq o construtor atribuiu de forma automatica
console.log(p2.nome)
console.log(p3.nome)