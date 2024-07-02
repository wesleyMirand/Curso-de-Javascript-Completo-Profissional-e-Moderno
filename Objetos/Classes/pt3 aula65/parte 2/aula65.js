 /* conversao em uma string json, e pegar um string json e transforma em objeto
 */

 const pessoa = {
    nome: "Wesley", 
    canal: "WeWe cursos",
    curso: "javascript",
    aulas : {
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
 }

 const string_pesso = '{"nome": "Wesley", "canal": "WeWe cursos", "curso": "javascript", "aulas" : { "aula01" : "Introdução" , "aula02": "Variáveis", "aula03": "Condicional" }}'

 const s_json_pessoa = JSON.stringify (pessoa) //inteface padrao  dois metodos parse e stringify(convert objeto literal em string  json)
 const o_json_pessoa = JSON.stringify (s_json_pessoa) 



 console.log(pessoa) //o pessoa é objeto, e s_json é uma string no formato json. conversao de string json emobjeto literal de um string json
 console.log(s_json_pessoa)
 console.log(o_json_pessoa)