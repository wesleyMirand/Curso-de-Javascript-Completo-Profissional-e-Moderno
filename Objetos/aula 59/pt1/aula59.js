class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome;
        if (ptipo == 1) {
            this.tipo = "Esportivo";
            this.velmax = 300;
        } else if (ptipo == 2) {
            this.tipo = "Utilitário";
            this.velmax = 100;
        } else if (ptipo == 3) {
            this.tipo = "Passeio";
            this.velmax = 160;
        } else {
            this.tipo = "Militar";
            this.velmax = 180;
        }
    }

    //metodos get

    getNome() {
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getVelMax() {
        return this.velmax;
    }

    getInfo() {
        return [this.nome, this.tipo, this.velmax];
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V.Max: ${this.velmax}`);
        console.log("----------------------------");
    }
}

let carros = [];

document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('carName').value;
    let tipo = parseInt(document.getElementById('carType').value);

    let carro = new Carro(nome, tipo);
    carros.push(carro);

    displayCarros();

    document.getElementById('carForm').reset();
});

function displayCarros() {
    let carList = document.getElementById('carList');
    carList.innerHTML = '';

    carros.forEach(carro => {
        let li = document.createElement('li');
        li.textContent = `Nome: ${carro.getNome()}, Tipo: ${carro.getTipo()}, Velocidade Máxima: ${carro.getVelMax()} km/h`;
        carList.appendChild(li);
    });
}

// Exemplos iniciais
let c1 = new Carro("Rapidao", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadao", 4);
let c4 = new Carro("Carrego tudo", 3);

carros.push(c1, c2, c3, c4);
displayCarros();