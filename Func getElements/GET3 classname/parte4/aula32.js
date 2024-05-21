const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso") [0]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosC1.map((el) => {
      el.classList.add("destaque")
})

/* 

No css vou mudar color, no back e color.
Todos elemento receberam a classe destaque, se for em cada elemento eles tem a classe
c1 e c2.
Agora percorrer outro array, adicionar classes somente em cursos que tenha destaque.
Mudei cursostodos para cursosC1, somente elementos c1 tem classe destaque.
Como ClassName retorna um array vou criar um const cursoEspecial, utilizar:
[...document.getElementsByClassName("curso")] porem quero que retorne só um curso.
: document.getElementsByClassName("curso") [0]  so retorna o curso da posição 1.
e chama no console.log o cursoEspecial. No dom do console só vou ter um elemento. 
Posso chamar qualquer posição !.
*/