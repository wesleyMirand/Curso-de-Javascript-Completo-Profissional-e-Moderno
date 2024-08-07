const div_data = document.getElementById("div_data")

const data = new Date()

const dia_m = data.getDate() < 10?"0" + data.getDate() : data.getDate() //for menor que 10 operacao ternaria, vai retorna 0 + 3} basta por 0

const data_r = dia_m + "/" + data.getMonth() + "/" + data.getFullYear() //por o 0 e ficar 03

div_data.innerHTML = data_r

/* 

obter de forma rapida a data de 109292813834
to string so convert em string, nao é oque precisamos.
tratar o ZERO

*/

