const caixa = document.querySelector("#caixa")

let musicas = new set("musica1", "musica boa", "musica10") //podemos add eleemento ja no set construtor

musicas.add("musica muito legal") //chama metodo add
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10") //nao vai permite igual

musicas.delete("musica1") //nao esta mais na colecao
musicas.clear() //zera tudo

console.log(musicas)


/*
musicas.forEach((el) =>                            FOR EACH metodo impletado da colecao set
    caixa.innerHTML +=  el + "<br/>" //sem repeticao a caixa
});
*/
for (let m of musicas) {                      //metodo for of externo
    caixa.innerHTML += m + "<br/>"
}


/* 

Set : não permite entrada duplicada, array pode ter quantos quiser.

*/