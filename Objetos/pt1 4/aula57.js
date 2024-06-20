class  Pessoa {
    constructor (pnome) {  //pode declarar varias quantidade de propriedades e usar funcao
        this.nome = pnome 
    }
}       

let p1 = new Pessoa("Bruno")  //obrigado a passar 1 parametro a propriedade
let p2 = new Pessoa(10) //nao é obrigado passar so string, Js tem flexbilidade
let p3 = new Pessoa("Lucas")

console.log(p1.nome) 
console.log(p2.nome)
console.log(p3.nome) //