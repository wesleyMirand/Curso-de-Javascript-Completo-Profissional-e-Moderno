/* 

temos no objeto " data.  ", todos metodos que podemos trabalhar. 
getDate() = dia do mes
getDay() = dia da semana(numero)
getFullYear() = Ano com 4 Digitos
getMilliseconds() = Milisegundos
getMinutes() = minutos
getMonth() = mes
getSeconds() = segundos
getTime() =timestamp(milisegundos desde 1/1/70, 00:00:00UTC)  
Date.now() =timestamp(milisegundos desde 1/1/70, 00:00:00UTC)  
setTimezoneOffset () = Timezone da localidade 
setDate () = Define um dia do mes para a data
setMonth () = Define um mes para a data
setFullYear () = Define um ano para a data
setHours () = Define horas
setMinutes () = Define Minutos 
setSecconds () = Define segundos
setMilliseconds () =  Define milisegundos
toDateString () = Retorna Somente a data
*/

const data = new Date()

console.log(data)
console.log(data.getDate()) 
//ou
console.log(`Mês: ${data.getDate()}`) 

console.log(data.getTime())

//Setar so determinada funcao:
console.log(data.toDateString())

//Formatacoes forma rapida
console.log(data.toString()) //mais nao e oque precisamos apenas vai converter
