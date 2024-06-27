//Posso fazer diferente da pt1

 const  Pessoa = {          
    nome : "Wesley"
}

const p2 = Pessoa 
const p3 = Pessoa 

p3.nome = "wesley" // sintax do ponto e propriedade
p2["nome"] = "SantosCorinthiano " // ou sintax do colchets com a chave da propriedade mesma ação forma diferente, vão ficar todos com esse nome, metodo dentro do objeto literal

console.log(Pessoa.nome)
console.log(p2.nome)
console.log(p3.nome)