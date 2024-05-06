const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

cursos.map((el, i) => {
      console.log("Curso:" + el + " - Posição do curso:" + i)
})



/* 

metodo map:percorrer arrays colecoes, utilizar map por elemento por elemento.
Diferentes do loop normal, for of for in, tradicionais... 
Ele vai interar, toda a coleção, nao tem como parar no meio. 
Só usa quando eu tenho tenho certeza que vai percorrer todos elementos e retorna alguma coisa, o map faz isso!

*/