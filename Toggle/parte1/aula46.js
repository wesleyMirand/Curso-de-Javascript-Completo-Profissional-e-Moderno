const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdiconarNovoCursoAntes = document.getElementById("btnAdicionarNovoCUrsoAntes")
const btnAdiconarNovoCursoDepois = document.getElementById("btnAdicionarNovoCUrsoAntes")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const criarNovoCurso = (curso) => {
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

    return novoElemento

}

cursos.map((el, chave)=> {
    const novoElemento = criarNovoCurso(el) //map do array cursos ta indo no elemento el
    caixaCursos.appendChild(novoElemento)
    indice++  //depois de criar atualizar o indice a posição do indice, agora tem a funcao map, que percorre o array e criar curso para cada elemento 
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio")]
    const radioSelecionado = todosRadios.filter((ele, ind, arr) =>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent //Retorna toda vez o mesmo texto no console do browser. somente 1 parent node, é um proximo irmaonextsibling ou irmao anterior previousSibling.è um objetotext precisa usar text.content
        alert ("Curso selecionado: " + cursoSelecionado)
    } catch(ex) {
        alert("Selecione um curso")
    }  
})

btnRemoverCurso.addEventListener("click",(evt) => {
    const rs = radioSelecionado()
    if(rs!=undefined) {
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
    }else {
        alert("selecione curso")
    }
})

btnAdiconarNovoCursoAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != "") {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado); //quer add e onde quer!
    }else {
        alert("Digite o nome do curso")
    }
    }catch(ex) {
        alert("Selecione um curso")
    }  
})

btnAdiconarNovoCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != "") {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.vlue)
        caixaCursos.insert(novoCurso, cursoSelecionado.nextSibling)
    }else {
        alert("Digite o nome do curso")
    } 
    } catch(ex) {
        alert("Selecione um curso")
    }  
})