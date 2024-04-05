const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(o of objs) {
      console.log(o.innerHTML="Curso")
}

for ( o in objs) {
      console.log(objs[o].innerHTML)
}

/* 

Porém se eu quiser interar, trocar o valor dos elementos com innerhtml, e so por 
todos texto para com "Curso" e todos texto ficaram como curso.

for(o of objs) {
      console.log(o.innerHTML="Curso")
}

e no for in vou imprimir o valor que ta nele, com o objs vou fala a posicao que quero
usar com o .innerhtml, imprimi o valor deles:
curso curso undefined 

porque chega em um momento que  ficam agrupados, os 3 cursos e os outro undefined 
e porque no for in retornamos 3propriedades, quando estava imprimindo.
e la nao tem inner html por isso deu undefined. 

for ( o in objs) {
      console.log(objs[o].innerHTML)
}

*/