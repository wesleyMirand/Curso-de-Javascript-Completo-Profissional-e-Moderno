class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome;
        this.idade = pidade;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    info() {
        console.log(`Nome...: ${this.nome}`);
        console.log(`Idade..: ${this.idade}`);
        console.log("---------------------");
    }
}

let pessoas = []

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");
    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);
    nome.value = "";
    idade.value = "";
    nome.focus();
    console.log(pessoas);
    updateRes();
});

function updateRes() {
    res.innerHTML = "";
    pessoas.forEach(p => {
        const divPessoa = document.createElement("div");
        divPessoa.innerHTML = `<p>Nome: ${p.getNome()}</p><p>Idade: ${p.getIdade()}</p><hr>`;
        res.appendChild(divPessoa);
    });
}