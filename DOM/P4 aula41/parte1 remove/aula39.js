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
    novoElemento.addEventListener("click", (evt)=> {
        caixa1.removeChild(evt.target)
    })
    caixa1.appendChild(novoElemento)
})


/*

Como remover um elemento, existem varias maneiras e ação!
No caso podemos eleminar o elemento do array e pedir para rendereçar os elementos 
criando denovo no array. Mais temos métodos para remove, o importante é saber quando
eliminar.

Remover quando clicar no curso, e eliminar!
Adicionar um event escutado, addEventListener, evento de click anonimo e dar um console.log
no event target.
Funcionando correto nao preciso me preocupar, com propagacao stop, pq colocando os evento direto do HTMl
de cima para baixo, ele nao volta.
Agora se tivesse elementos dentro do HTMl eu teria que me preocupar com o stop propagation.
    novoElemento.addEventListener("click", (evt)=> {
        console.log(evt.target)
    })

Agora indicar de onde eliminar, quem é o pai? caixa1!
Usar o caixa1.removeChild remover o filho ele é um method precisa do child! Quem? ELEMENTO!
Passar o child que vai remover o evt.target e tirar o console, salva e atualiza
Ao clicar em qualquer um ele remove!
    novoElemento.addEventListener("click", (evt)=> {
        caixa1.removeChild(evt.target)
    })
    caixa1.appendChild(novoElemento)
})

*/