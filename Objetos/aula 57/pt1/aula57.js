class  Pessoa {
    constructor () { // declarei uma  var nome e atribui nome  e valor bruno
        this.nome = "bruno"
    }
}       //forma tradicional usando class, metodo contrutor é automaticamente chamand quando instancio um novo objeto da claase
let p1 = new Pessoa ()  //instancionando um novo -objeto da classe pessoa o ( ) faz referencia direta ao construtor da clase, se encima nao recebe embaixo nao recebe.
console.log(p1.nome) //recebe bruno, toda vez que uso new instacio um novo objeto da classe PESSOA, vai na memoria cria um caixa para o tipo "PESSOA" com nome da var, caso p1 tipo pessoa (pessoa)
/* 

Orientacao a Objetos: Utilizando o operador "NEW", crio uma classe que é a base instrução
tudo que cotempla desde metodo e propriedades. Depois instanciar cada objeto de classe,
cada objeto vai seguir tudo que foi construido. Mais cada objeto depende do outro, crio um objeto
posso manipular metodos que não inteferem nos outros objetos dessa classe.

*/