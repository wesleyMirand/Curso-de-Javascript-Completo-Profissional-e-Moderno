// Objetos DOM
const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

// Variáveis globais
let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;
let bolas = []; // Array para armazenar os objetos "bolas"
let numBola = 0; // Contador de bolas

// Classe Bola
class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10; // Tamanho aleatório entre 10 e 25
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
        this.velx = Math.random() * 2 + 0.5; // Velocidade X
        this.vely = Math.random() * 2 + 0.5; // Velocidade Y
        this.dirx = Math.random() > 0.5 ? 1 : -1; // Direção X
        this.diry = Math.random() > 0.5 ? 1 : -1; // Direção Y
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 10000000000); // ID único
        this.desenhar(); // Chama o método desenhar
        this.eu = document.getElementById(this.id); // Captura o elemento DOM
        this.controle = setInterval(this.controlar, 10); // Inicia o controle de movimento
        numBola++;
        num_objetos.innerHTML = numBola; // Atualiza o contador na tela
    }

    minhaPos = () => {
        return this.arrayBolas.indexOf(this); // Posição da bola no array
    };

    remover = () => {
        clearInterval(this.controle); // Para o movimento
        this.eu.remove(); // Remove do DOM
        bolas = bolas.filter((b) => b.id !== this.id); // Remove do array
        numBola--; // Decrementa o contador
        num_objetos.innerHTML = numBola; // Atualiza o contador
    };

    desenhar = () => {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bola");
        div.setAttribute(
            "style",
            `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r}, ${this.g}, ${this.b})`
        );
        this.palco.appendChild(div); // Adiciona a bola ao palco
    };

    controle_bordas = () => {
        if (this.px + this.tam >= larguraPalco) {
            this.dirx = -1; // Inverte a direção X se bater na borda direita
        } else if (this.px <= 0) {
            this.dirx = 1; // Inverte a direção X se bater na borda esquerda
        }
        if (this.py + this.tam >= alturaPalco) {
            this.diry = -1; // Inverte a direção Y se bater na borda inferior
        } else if (this.py <= 0) {
            this.diry = 1; // Inverte a direção Y se bater na borda superior
        }
    };

    controlar = () => {
        this.controle_bordas(); // Verifica as bordas
        this.px += this.dirx * this.velx; // Atualiza a posição X
        this.py += this.diry * this.vely; // Atualiza a posição Y
        this.eu.setAttribute(
            "style",
            `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r}, ${this.g}, ${this.b})`
        ); // Atualiza a posição e estilo da bola
    };
}

// Redimensionamento da tela
window.addEventListener("resize", () => {
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

// Botão de adicionar bolas
btn_add.addEventListener("click", () => {
    const qtde = parseInt(txt_qtde.value); // Quantidade de bolas a adicionar
    for (let i = 0; i < qtde; i++) {
        bolas.push(new Bola(bolas, palco)); // Instancia novas bolas
    }
});

// Botão de remover todas as bolas
btn_remover.addEventListener("click", () => {
    bolas.forEach((b) => b.remover()); // Remove todas as bolas
});