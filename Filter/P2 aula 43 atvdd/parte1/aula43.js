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

Agora somar o id com 1  só por chave + 1 ai vai de c1 ate c7!

*/