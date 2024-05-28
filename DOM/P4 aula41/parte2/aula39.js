const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2= document.querySelectorAll("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative" ]

cursos.map((el, chave) => {
    //console.log(chave)
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c"+ chave+1)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "./icone_lixeira.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElemento.addEventListener("click", (evt)=> {
        caixa1.removeChild(evt.target.parentNode)
    })//organizacao tudo da lixeira
    
    //os append
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})


/*

Agora dificultando, vamos adicionar um icone para remover, criar um elemento, 
btn_lixeira, document, createElement("img")
btn_lixeira.setatribute apontando para um src img de lixo na mesma pasta png.
criei na memoria com atributo e preciso associar a imagem ao novo.elemento,
junto com appenchild vou anexar o filho lixeira agora todos vao ficar com icone lixera
grande.
adicionar class para diminuir o tamanho btn_lixeira e ir no css altera o tamanho

remover quando aperta na lixeira :
Agora o event.target nao e mais novo elemento e sim btn_lixeira e lixeira nao e filho de 
caixa1 é filho de c1.
 btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElemento.addEventListener("click", (evt)=> {
        caixa1.removeChild(evt.target)
    })

oque fazer? Pego o console.log e aponto para o pai dele .parentNode.
(evt.target.parentNode)
Ele apontou para o elemento certo 
O parentNode tenque existir!
Agora conseguimos interagir, apontar, pegar e apontar para qualquer elemento da pagina
    novoElemento.addEventListener("click", (evt)=> {
        caixa1.removeChild(evt.target.parentNode)
    })//organizacao tudo da lixeira

*/