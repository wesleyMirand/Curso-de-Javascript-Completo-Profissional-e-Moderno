 function aluno (nome, nota) {
      this.nome = nome 
      this.nota = nota

      this.dados_anonimo = function() {
          setTimeout(function() {
               console.log(this.nome)
               console.log(this.nota)
          },2000)
      }
 }

       this.dados_arrow = function() {
          setTimeout(()=> {
               console.log(this.nome)
               console.log(this.nota)
          },2000)
      }


 const al1=new aluno ("Wesley", 100)
 al1.dados_anonimo ()
 al1.dados_arrow()

 /*
usando arrow function da para contorna o problema do this tendo que usar 2 vezes.
criar outra funcao dados arrow function anonima. A diferenca que inves de funcao normal
vai ser usado arrowFunctions.
vai retorna as duas primeira undefined e ja a com arrow retorn wesley e 100.foi gerado
com arrow e setTimeout. O arrow nao usa o conceito excet ou o contexto da execução, 
ele nao vai usar o conceito do set, vai usar do root, do pai, que ele esta sendo
usado na funcao aluno. Detalhe que faz arrow function funcionar e anonina nao.

 */