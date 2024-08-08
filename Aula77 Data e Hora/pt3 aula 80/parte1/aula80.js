const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio("alarme.m4a") //é bom usar promise quando tem audio, mais como é button nao precisa, tocar e parar em momento especifico.
som_alarme.loop= -1 

let ts_atual = null //segundos para o alarme
let ts_alarme = null  // ele esta ativado?
let alarme_ativado = false
let alarme_tocando = false // ta tocando é true nao esta é true tbm

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000) //campo number multiplicado por mil, valores milisegundos, quando vai tocar
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme) //nova data, timestap me retorna data futura e hora futura
    hora_alarme.innerHTML="Hora do Alarme:" + dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds() //nao fiz tratamento do zero
})

btn_parar.addEventListener("click", () => { //funcao do parar
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Horar do alarme"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause(); //parei e voltei pra 0 tipo stop button parar zerar redefini as var
    som_alarme.currentTime = 0; //
})

const data= new Date () //funcao que tem todas relacionadas

let dia = data.getDate()
dia = dia <10?"0" + dia : dia
let mes = data.getMonth()
mes = mes <10?"0" + mes : mes
const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML=data_r

const relogio = () => {
    const data = new Date() //data completa
    let hora = data.getHours() //hora
    hora = hora <10?"0" + hora : hora

    let minuto = data.getMinutes() //minuts
    minuto = minuto <10?"0" + minuto : minuto

    let segundo = data.getSeconds() //segundos
    segundo = segundo <10?"0" + segundo : segundo
    const hora_completa = hora + ":" + minuto + ":" + segundo
    div_relogio.innerHTML = hora_completa
    if(alarme_ativado && !alarme_tocando) { //se esta ativado se definiu , se alarme tocando for false blz , 
        if(data.getTime () >= ts_alarme){ //se for maior ou igual o alarme definido, tocar o alarme!
            alarme_tocando= true //tocar o alarme até que parem
            som_alarme.play()
            timer.classList.add("alarme") //mudar fundo vermelho
        }
    }
}
//chamar relogio a cada segundo intervalo, setInterval chama funcao atras de outra funcao chamando funcao
const intervalo = setInterval (relogio, 1000)

