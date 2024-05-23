const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
  el.addEventListener("click",(evt) =>{
    const curso = evt.target
    curso.classList.toggle("selecionado")
  })
}) 


btn.addEventListener("click", () => {
  const cursosSelecionados= [...document.querySelectorAll(".selecionado")]
  cursosSelecionados.map((el) => {
    caixa2.appendChild(el)
  })
  //console.log(cursosSelecionados)
})
/* 
Preciso obter elementos que são caixas, caixa1, button , caixa2.
eventos de click quando clicar preciso selecionar os elementos.
obter todos elemento para adicionar evento de click neles.

adicionar eventos de click em todos cursos, loop percorrer a coleção.
usar loops moderno com spread transformando em array, percorrer todos com map.
elemento com elemento listener, escutar o click de cada evento.

pra ve se ta pegando elemento certo da um console.log no curso
e ve quando clico atualizo e volta tudo retornando no console.

toggle elemento selecionado tem? remove! nao tem ? adicionar!
Com obtenho elementos selecionado e verifico qual elemento possui a classe selecionada!

Quando clicar no btn.add list click executa a funcao, pegar elementos selecionado e add
no container caixa2. nao imprimir mais pq deu certo.

Agora ir no array de cursoselecionados, percorrer array inteiro, usar map elemento. elemento por elemento
dar um appendCHild caixa2, anexar um filho ao elemento caixa2. um filho do "EL".

*/