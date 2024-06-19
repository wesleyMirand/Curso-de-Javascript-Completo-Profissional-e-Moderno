const caixa = document.querySelector("#caixa")

let mapa =  new Map () //declarei operador new ,reservado colecao na memoria mapa do tipo map
mapa.set("curso", "javascript")   //metodo  set , dar o . aparece varios, clear limpa,  delete remove elemeento, entries entrada da colecao, foreach loop percorrer interar, get obter elemento , has tal elemento existe?, keys obter somenete chave, set add elemento, size tamanho , values obter valores 
mapa.set(10, "Cfb cursos")
mapa.set("canal", 100)

mapa.delete(1) //deleta chave 1

console.log(mapa)

let pes = teste
let res = ""
if(mapa.has("canal")) {// se pesquisar 5 uma chave que nao existe,  nao vai mostra
res = "A chave existe na colecao com o valor: " + mapa.get(pes) //chave existe ou nao usar has
}else {
    res = "A chave não esta na coleçao"
    res += "<br/> o tamanho da colecao é " + mapa.size
}
caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})
/* 

map: percorrer elemento de um array , colecao map é diferente!
colecao é tipo chave valor diferente do array que pode add, dentro do map
tenque adicionar uma chave valor. 
cada elemento no map possui um conjunto de chave e valor, 
f=  triangulho          |       10
     10                 |        x
     "bruno"            |       100
       chave                   valor

       quando quiser se referir ao valor 10, f chave retorna o valor 10, padrao colecao map



if(mapa.has("canal")) {// se pesquisar 5 uma chave que nao existe,  nao vai mostra
caixa.innerHTML = "A chave existe na colecao com o valor: " + mapa.get(pes) //chave existe ou nao usar has
}else {
    caixa.innerHTML = "A chave não esta na coleçao"
}

*/