const div_data = document.getElementById("div_data")
const data= new Date ()

let dia = data.getDate()
dia = dia <10?"0" + dia : dia

let mes = data.getMonth()
mes = mes <10?"0" + mes : mes

const data_r = dia + "/" + mes + "/" + data.getFullYear()

div_data.innerHTML=data_r



