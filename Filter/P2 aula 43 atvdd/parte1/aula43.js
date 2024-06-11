const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")

cursos.map((el, chave)=> {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

})

btnCursoSelecionado.addEventListener("click", (evt) => {
    const todosRadios = [...document.querySelectorAll("input[type=radio")]
    let radioSelecionado = todosRadios.filter((ele, ind, arr) =>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
   // const CursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
   const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent //Retorna toda vez o mesmo texto no console do browser. somente 1 parent node, é um proximo irmaonextsibling ou irmao anterior previousSibling.è um objetotext precisa usar text.content
   alert ("Curso selecionado: " + cursoSelecionado)
   
   /*console.log(CursoSelecionado)
      console.log(radioSelecionado)
      console.log(todosRadios)
    */
    
})

//ParentNode, childNodes[nodenumber], firstChild, lastChild, nextSibling, previousSiblingh
