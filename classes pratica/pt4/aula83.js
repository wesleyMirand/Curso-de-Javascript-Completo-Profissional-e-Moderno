//objetos
const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")


//alguma variaveis
let larguraPalco= palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas = [] //objetos nesse arrays nesse conteiner
let numBola = 0

class Bola{
    constructor(arrayBolas, palco){
        this.tam=Math.floor(Math.random() *15) +10
        this.r=Math.floor(Math.random() *255)
        this.g=Math.floor(Math.random() *255)
        this.b=Math.floor(Math.random() *255)
        this.px= Math.floor(Math.random() *(larguraPalco-this.tam))
        this.py= Math.floor(Math.random() *(alturaPalco-this.tam))
        this.velx =  Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random() *2)+0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1//op ternaria
        this.diry = (Math.random()*10) > 5 ? 1 : -1//velo e direcao
        this.palco= palco 
        this.arrayBolas = bolas
        this.id = Date.now()+ "_" +Math.floor(Math.random() *10000000000) //cada bolinha tem um id
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola
    }
    minhaPos=() => {
        return  this.arrayBolas.indexOf(this)
    }
    remover = () => {
        clearInterval(this.controle) //comparar bolinha no dom para bolinha
        bolas = bolas.filter((b) => {
            if(b.id!=this.id){ //filter apagamos o intervalo, excluimos o objeto do conteiner e deletar ele do dom chamando remove
                return b
            }
        })
        this.eu.remove() //remove do dom
        numBola-- //cada bolinha remover menos menos
        num_objetos.innerHTML = numBola //visual de acordo com cada bolinha removida -- atualiza var de valor no dom
    }

    //funcao desenhar bolinhas
    
    desenhar = () =>{
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left:${this.px};top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb(${this.r}, ${this.g}, ${this.b})`)
        this.palco.appendChild(div)
    }

    controlar = () => {
        
    }
}

//JANELA quando remedimensionar dispara evento
window.addEventListener("resize",(evt) => {
    larguraPalco= palco.offsetWidth
    alturaPalco= palco.offsetHeight
})

btn_add.addEventListener("click", (evt) => {
    const qtde = txt_qtde.value
    for(let i = o. i<qtde; i++){
        //instanciar novas bolinas
    }
})

btn_remover.addEventListener("click", (evt) => {
    bolas.map((b)=> {
        //Remover a bolinha
    })
})