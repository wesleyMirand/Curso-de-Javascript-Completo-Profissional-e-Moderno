function Pessoa(pnome, pidade) { //substitui class por function, nao tem mais constructor passo para parametro
    this.nome = pnome;        
    this.idade = pidade;  
    //passar todos metodos para this assim como propriedades tudo igual o resto é a mesma coisa. Function é mais proximo de objetos literais.
    this.getNome = function () {
        return this.nome;
    };
    this.getIdade = function() {
        return this.idade;
    };
    this.setNome = function(nome) {
        this.nome = nome;
    };
    this.setIdade = function(idade) {
        this.idade = idade;
    };
    this.info = function() {
        console.log(`Nome...: ${this.nome}`);
        console.log(`Idade..: ${this.idade}`);
        console.log("---------------------");
    };
}

let pessoas = []

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addPessoa = () => {
    res.innerHTML = "";
    pessoas.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`; //chamar os metodos
        res.appendChild(div);
    });
};

btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade"); //instanciar classe e passar parametros
    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);
    nome.value = "";
    idade.value = "";
    nome.focus();
    addPessoa();
});