// import getTodosCursos from "./cursos2.js" // nao da pra renomear pq esta padrao
// import {cursos as c, getCurso as gc} from './cursos2.js' // as c é o as que esta renomeando  o curso
// import * as m_cursos from './cursos2.js' //inves de varios elementos usar *
import getTodosCursos from './cursos2.js'
import {cursos, getCurso} from './cursos2.js'

console.log(cursos)
console.log(getTodosCursos())
console.log(getCurso())

//console.log(m_cursos.cursos) //inves de cursos so a letra c
//console.log(m_cursos.getCurso(1)) //curso da posicao 1
//console.log(m_cursos.default()) //modeulo curso . default padrao get todos curso posição zero modulos renomeados