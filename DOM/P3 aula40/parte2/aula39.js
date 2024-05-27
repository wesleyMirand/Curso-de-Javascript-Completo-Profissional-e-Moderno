const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2= document.querySelectorAll("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative" ]

cursos.map((el) => {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c7")
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})

caixa1.appendChild(novoElemento)

/*
E agora pegar todos cursos do rep.html e adicionar dinamicamente no (conjunto)container caixa1,
pra isso criar array de cursos.
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative" ] 
Agora temos a lista de cursos e vamos tirar todos curso do html comentando.
logo em seguido atualizando vai ter só o reactnative criado pelo script

Percorrer array cursos e cada curso criar um elemento e adicionar na caixa
posso usar o for ou o map de preferencia.
Para cada elemento, do map vou criar umn novo elemento div, criar id, adicionar class,
o innerHTML vai mudar e dar um appendchild no caixa.
Se fizermos assim ja funciona porem os cursos vao estar com o mesmo id: 
cursos.map((el) => {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c7")
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})

caixa1.appendChild(novoElemento)

----------------------------------------
*/