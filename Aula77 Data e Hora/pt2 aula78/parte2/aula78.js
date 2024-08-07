const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
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
}
//chamar relogio a cada segundo intervalo, setInterval chama funcao atras de outra funcao chamando funcao
const intervalo = setInterval (relogio, 1000)

