/*
const div_data = document.getElementById("div_data")

const data = new Date()

let dia_m = data.getDate() < 10?"0" + data.getDate() : data.getDate() //pra nao ficar chamando por o let no lugar do const e chmar o getDate somente uma vez

dia_m = dia_m <10?"0" + data.getDate() : data.getDate() //dia mes recebe " faco verificao dia e mes : =" ,  diames é menor doque 10. Recebe 0

dia_m = dia_m <10?"0" + dia_m : dia_m //Caso contrario recebe so dia e mes,pra nao ficar chamando get nem set

const data_r = dia_m + "/" + data.getMonth() + "/" + data.getFullYear() //por o 0 e ficar 03

div_data.innerHTML = data_r

obter de forma rapida a data de 109292813834
to string so convert em string, nao é oque precisamos.
tratar o ZERO



let dia_m = data.getDate()
dia_m = dia_m <10?"0" + dia_m : dia_m

let mes_m = data.getDate()
dia_m = dia_m <10?"0" + dia_m : dia_m

const data_r = dia_m + "/" + data.getMonth() + "/" + data.getFullYear()
*/


//Sempre quando mes for maior que 10 vai utilizar, dois digitos no campo
const div_data = document.getElementById("div_data")
const data= new Date ()

let dia = data.getDate()
dia = dia <10?"0" + dia : dia

let mes = data.getMonth()
mes = mes <10?"0" + mes : mes

const data_r = dia + "/" + mes + "/" + data.getFullYear()

div_data.innerHTML=data_r



