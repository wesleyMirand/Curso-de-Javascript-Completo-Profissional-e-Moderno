// Seleciona os elementos do DOM
const f_tipoMilitar = document.querySelector("#f_tipoMilitar"); // Radio button para tipo Militar
const f_tipoNormal = document.querySelector("#f_tipoNormal"); // Radio button para tipo Normal
const f_blindagem = document.querySelector("#f_blindagem"); // Campo de blindagem
const f_municao = document.querySelector("#f_municao"); // Campo de munição
const f_nome = document.querySelector("#f_nome"); // Campo de nome
const f_portas = document.querySelector("#f_portas"); // Campo de portas
const carros = document.querySelector(".carros"); // Div que vai exibir os carros
const btn_addCarro = document.querySelector("#btn_addCarro"); // Botão para adicionar carro

let a_carros = []; // Array para armazenar os carros

// Função para remover um carro do array a_carros
const removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => el.nome != quem);
};

// Evento para tipo Militar, habilita campos de blindagem e munição e reseta os campos
f_tipoMilitar.addEventListener("click", () => {
    f_nome.value = "";
    f_portas.value = 0;
    f_blindagem.value = 0;
    f_municao.value = 0;
    f_blindagem.removeAttribute("disabled");
    f_municao.removeAttribute("disabled");
});

// Evento para tipo Normal, desabilita campos de blindagem e munição e reseta os campos
f_tipoNormal.addEventListener("click", () => {
    f_nome.value = "";
    f_portas.value = 0;
    f_blindagem.value = 0;
    f_municao.value = 0;
    f_blindagem.setAttribute("disabled", "disabled");
    f_municao.setAttribute("disabled", "disabled");
});

// Função para gerenciar a exibição dos carros
const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""; // Limpa a lista de carros exibida
    a_carros.forEach((c) => {
        const div = document.createElement("div"); // Cria um novo elemento div
        const btn = document.createElement("button"); // Cria um botão de remover
        btn.innerHTML = "Remover"; // Define o texto do botão
        btn.addEventListener("click", (evt) => {
            const quemRemover = evt.target.parentNode.dataset.nome; // Pega o nome do carro a ser removido
            removerCarro(quemRemover); // Remove o carro
            gerenciarExibicaoCarros(); // Atualiza a exibição dos carros
        });
        div.setAttribute("class", "carro"); // Define a classe do elemento div
        div.setAttribute("data-nome", c.nome); // Define um atributo data-nome com o nome do carro
        // Adiciona as informações do carro na div
        div.innerHTML = `Nome: ${c.nome}<br/>Portas: ${c.portas}<br/>Cor: ${c.cor}<br/>Blindagem: ${c.blindagem}<br/>Munição: ${c.municao}<br/>`;
        div.appendChild(btn); // Adiciona o botão de remover na div
        carros.appendChild(div); // Adiciona a div na lista de carros
    });
};

// Evento para adicionar um carro
btn_addCarro.addEventListener("click", () => {
    // Verifica se o nome do carro está preenchido
    if (f_nome.value === "") {
        alert("Por favor, preencha o nome do carro.");
        return;
    }
    // Verifica qual tipo de carro está selecionado e cria o objeto correspondente
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value);
        a_carros.push(c); // Adiciona o carro ao array
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value);
        a_carros.push(c); // Adiciona o carro ao array
    }
    gerenciarExibicaoCarros(); // Atualiza a exibição dos carros
    resetarCampos(); // Reseta os campos do formulário
});

// Classe base Carro
class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    setCor(cor) {
        this.cor = cor;
    }
}

// Classe Militar que herda de Carro
class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas); // Chama o construtor da classe pai (Carro)
        this.blindagem = blindagem;
        this.municao = municao;
        this.cor = "Verde"; // Define a cor padrão como Verde
    }

    atirar() {
        if (this.municao > 0) {
            this.municao--; // Diminui a munição em 1
        }
    }
}

// Exemplos de uso das classes Carro e Militar
const c1 = new Carro("Normal", 4); // Cria um carro normal com 4 portas
c1.ligar(); // Liga o carro
c1.setCor("Preto"); // Define a cor do carro como preto

const c2 = new Militar("Lutador", 1, 100, 50); // Cria um carro militar com blindagem 100 e munição 50
c2.atirar(); // O carro atira, diminuindo a munição em 1

// Exibe informações dos carros no console
console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log("---------------------------------------");

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${c2.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
console.log("---------------------------------------");