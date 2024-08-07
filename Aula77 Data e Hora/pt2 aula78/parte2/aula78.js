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

    let minutos = data.getMinutes() //minuts
    minuto = minuto <10?"0" + minuto : minuto
    console.log(hora)
}

relogio()

