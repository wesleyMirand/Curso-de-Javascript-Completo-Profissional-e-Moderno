const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]

export default function getTodosCursos() {
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

//export default getTodosCursos
export(getCurso)
// export{cursos, getCurso}        vai dar erro pq tirou ele do export nao esta sendo exportado no modul *

