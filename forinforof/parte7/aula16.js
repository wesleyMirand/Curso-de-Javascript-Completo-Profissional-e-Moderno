const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(o of objs) {
      console.log(o.innerHTML="Curso")
}

for ( o in objs) {
      console.log(objs[o].innerHTML)
}

/*

for ( o in objs) {
      console.log(o)
}
 

se deixa so o "o" no for in ele, vai puxar normal porque nao tem o innerhtml 
for ( o in objs) {
      console.log(o)
}

Foi passado a diferenca dos loop for in e for of
percorremos colecoes 
o for tradicional usamos para colecao tbm , porem a estrutura, é mais complexa.
exemplo:

for(let i= 0; i <num.lenght; i++) {
      console.log(o.innerHTML="Curso")
}

e o for of tem uma rotina uma rotina mais simples, vai percorrer colecoes 
for(o of objs) {
      console.log(o.innerHTML="Curso")
}

e o for in também que ajuda a simplificar

for ( o in objs) {
      console.log(objs[o].innerHTML)
}

*/