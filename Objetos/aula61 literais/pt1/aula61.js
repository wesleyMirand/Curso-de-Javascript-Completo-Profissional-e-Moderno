/* operador new cria nova instancia na memoria, crio objetos da classe e todos sao independentes. 
 no literais nao tem obj inde.. se criar varios objeto da mesma classe vao apontar pra mesma memoria
 conceito de objetos da mesma classe unico. Todos vao apontar  para o objeto unico. */

 const  Pessoa = {          //objeto pessoa
    nome : "Wesley"
}


//conceito objetos literais
const p2 = Pessoa //se tiver variaveis que apontam Pessoa, todos vao apontar para o mesmo nome
const p3 = Pessoa //se tiver muitas pessoas diferente nao tem pq usar objeto literais 

p3.nome = "wesley"

console.log(Pessoa.nome)
console.log(p2.nome)
console.log(p3.nome)