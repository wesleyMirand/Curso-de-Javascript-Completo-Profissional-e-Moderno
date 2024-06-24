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
        info () {
            console.log(`Nome.:  ${this.nome}`) //template STRING
            console.log("Tipo.: " + this.tipo)
            console.log("V.Max: " + this.velmax)
            console.log("----------------------------")
        }
    }
}

//instancie os carros

let c1 = new Carro("Rapidao", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadao", 4);
let c4 = new Carro("Carrego tudo", 3);

// sempre que precisar das info dos carro posso chamar o c1

c1.info()
c2.info()