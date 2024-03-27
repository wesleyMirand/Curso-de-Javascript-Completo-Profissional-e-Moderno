let n1, n2, n3, n4 
n1= 10
n2= 5
n3= 15
n4= 2

if( !(n1>n2) && (n3 > n4) ) {  
      console.log("verdadeiro")
}else {
      console.log("false")
}

/*  

false
if( !(n1>n2) && (n3 > n4) ) {  
      console.log("verdadeiro")
}else {
      console.log("false")
}


false com vdd = true
if( !(n1>n2) || (n3 > n4) ) {  
      console.log("verdadeiro")
}else {
      console.log("false")
}


vdd com false = true
if( (n1>n2) || (n3 > n4) ) {  
      console.log("verdadeiro")
}else {
      console.log("false")
}

VDD com VDD true
if( (n1>n2) && (n3 > n4) ) {  
      console.log("verdadeiro")
}else {
      console.log("false")
}


SE FOR VDD if true, se falso ELSE false. 
if(n1> n2) {  
      console.log(n1 + "maior que" + n2)
}else {
      console.log(n1 + "menor qur" + n2)
}


console.log(!(n1> n2)||(n1 > n3)) FALSE inversao da operacao

console.log((n1> n2)||(n1 > n3)) TRUE

console.log((n1> n2)&& (n1 > n3)) FALSE


Operadores Lógicos: 
&& -> and e 
|| -: or ou
! : not nao

Tabela VDD:
 AND  -->  E
 V V -> V
 V F -> f
 f v -> f
 f f -> f

 AND -->
 1 1 -> 1
 1 0 -> 0
 0 1 -> 0
 0 0 -> 0

 OR --> OU
 v v -> v
 v f -> v
 f v -> v
 f f -> f

 or -->

 1 1 - 1
 1 0  - 1
 0 1  - 1
 0 0  - 0

*/