 function aluno (nome, nota) {
      this.nome = nome 
      this.nota = nota

      this.dados_anonimo = function() {
          setTimeout(function() {
               this.nome ="x"
               this.nota =5
               console.log(this.nome)
               console.log(this.nota)
          },2000)
      }
 }

 const al1=new aluno ("Wesley", 100)
 al1.dados_anonimo ()

 /* 
 this sempre vai fazer referencia a o proprio elemento posicionado.
 criar funcoes metodo dentro da funcao.
 this.dados_anonimo= function() {
     setTimeout() atrasa e chama quando tenque chamar imprimindo os dados
coloco um set de 2000, quando invocar essa funcao : dados_anonimo , que esta dentro 
de function. vai chamar somente depois de 2segundos
e depois chamar funcao new. Porque estou usando operador de classes.
Usar const e al1= new... parametros de entrada.
depois al1.dados_anonimo ()
vai dar undefined nao achou o this. nome , nota. Para isso eu teria que usar this
dentro da ultima funcao x e 5.

 */