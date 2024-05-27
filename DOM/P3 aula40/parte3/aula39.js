const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2= document.querySelectorAll("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative" ]

cursos.map((el, chave) => {
    //console.log(chave)
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c"+ chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})


/*

vamos apagar todas div do html pra nao dar nenhum erro.
Cursos foram add, mais ficaram com o mesmo id, deu erro!
O map traz o elemento e a chave do elemento, apos dar console.log na chav,
vai aparecer no console do dom 10 1 2 3 4 5 6 chaves.
Posso pegar eles para complementar o id, vantagem de usar o map.
Se fosse foreach. teria que administrar a chave.
Vou por o com atributo c , mais o valor da chave com "c" +chave e depois que ja sabe
o valor das chave tirar o console.log.
Agora vamos ter o id so atualiza e ir nos elementos, id do C0 ao c6.
*/