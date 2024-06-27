// Objeto Pessoa como um objeto literal
const Pessoa = {
    nome: "",
    idade: "",
    getNome: function () {
        return this.nome;
    },
    getIdade: function () {
        return this.idade;
    },
    setNome: function (nome) {
        this.nome = nome;
    },
    setIdade: function (idade) {
        this.idade = idade;
    }
};

// Referências aos elementos do DOM
const btn_add = document.getElementById("btn_add");
const res = document.querySelector(".res");

// Adiciona evento de clique ao botão "Adicionar"
btn_add.addEventListener("click", () => {
    // Obtém os valores dos campos de entrada
    const nome = document.getElementById("f_nome").value;
    const idade = document.getElementById("f_idade").value;

    // Define os novos valores para o objeto Pessoa
    Pessoa.setNome(nome);
    Pessoa.setIdade(idade);

    // Limpa o conteúdo anterior da div res
    res.innerHTML = "";

    // Cria um novo elemento div para exibir a pessoa
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");

    // Define o conteúdo da div com os valores obtidos usando os métodos get
    div.innerHTML = `Nome: ${Pessoa.getNome()}<br/>Idade: ${Pessoa.getIdade()}`;
    
    // Adiciona a nova div à div res
    res.appendChild(div);

    // Limpa os campos de entrada e retorna o foco ao campo "Nome"
    document.getElementById("f_nome").value = "";
    document.getElementById("f_idade").value = "";
    document.getElementById("f_nome").focus();
});

/* 
Explicação das mudanças:

1. Limpeza do conteúdo anterior:
   - Antes de adicionar uma nova pessoa, limpamos o conteúdo da div `res` usando `res.innerHTML = ""`. Isso garante que apenas a pessoa mais recentemente adicionada seja exibida.

2. Criação e adição do novo elemento:
   - Após limpar o conteúdo anterior, criamos um novo elemento `div` para exibir os dados da pessoa.
   - Definimos o conteúdo dessa div utilizando os métodos `getNome` e `getIdade` do objeto `Pessoa`.
   - Adicionamos essa nova div à div `res` usando `res.appendChild(div)`.

3. Limpeza dos campos de entrada:
   - Após adicionar a pessoa, limpamos os campos de entrada de `nome` e `idade` e retornamos o foco ao campo `nome`.
*/