class  Pessoa {
    constructor (pnome) {  // Agora passar parametro no construtor  ir no () e fala preciso passar nome no contrutor e esse valor vá para propriedade nome
        this.nome = pnome //pra nao confudir parametro nome pnome
    }
}       

let p1 = new Pessoa("Bruno")  //obrigado a passar 1 parametro a propriedade
let p2 = new Pessoa("Wesley")
let p3 = new Pessoa("Lucas")

console.log(p1.nome) 
console.log(p2.nome)
console.log(p3.nome) //agora todos vao imprimir os nome que foi passado aos contrutor, como pedi parametro é obrigado entra na classe!