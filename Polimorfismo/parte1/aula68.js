class Carro{
    constructor(tipo, estagioTurbo){
        this.turbo = new this.turbo(estagioTurbo)
        if(tipo ==1){
            this.velMax=120
        }else if(tipo==2){
            this.velMax= 160
        }
    }
}

class turbo {
    constructor(e) {
        if(e == 0){
            this.pot =0
        }else if(e==1) {
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot = 100
        }
    }

}