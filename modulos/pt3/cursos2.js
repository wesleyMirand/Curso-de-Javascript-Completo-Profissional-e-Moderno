const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]

/*const getTodosCursos = () => {
    return cursos
} */

//funcao com arrow function: export default facilita saber qual funcao export esta dentro do projeto
export default function getTodosCursos() {
    return cursos
}

//outra funcao especifico vai dar erro por usar dois export defAULT e nao da dentro do arquivo, so posso ter um dentro do modulo
/*export default*/ function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos, getCurso}
/* export default getTodosCursos */
