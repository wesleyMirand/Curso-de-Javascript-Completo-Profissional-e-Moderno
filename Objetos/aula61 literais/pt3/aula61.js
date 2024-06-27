//mudando do antigo

 const  Pessoa = {          
    nome : "Wesley",
    getNome: function () {
        return this.nome //chamar o nome atraves do getnome pro p2
    },
    setNome: function () { //funcao para setar, setNome receber 
        return this.nome = nome
    },
}

const p2 = Pessoa 
const p3 = Pessoa 


p3.nome = "wesley" 
p2["nome"] = "SantosCorinthiano"
Pessoa.setNome("wewe") // vao ter todos o mesmo nome, posso chamar 3 maneiras, de fazer atualizacao do nome para todos objetos literais.Poder ter varios, mais todos vao apontar apenas para 1 objeto

console.log(Pessoa.nome)
console.log(p2.getNome()) //inves de .nome chamar o getNome
console.log(p3.nome)