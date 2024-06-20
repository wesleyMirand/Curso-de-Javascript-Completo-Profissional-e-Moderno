class  Pessoa {
    constructor (nome) {  // Agora passar parametro no construtor  ir no () e fala preciso passar nome no contrutor e esse valor vá para propriedade nome
        this.nome = "bruno"
    }
}       

let p1 = new Pessoa() 
let p2 = new Pessoa()
let p3 = new Pessoa()

console.log(p1.nome) 
console.log(p2.nome)
console.log(p3.nome)