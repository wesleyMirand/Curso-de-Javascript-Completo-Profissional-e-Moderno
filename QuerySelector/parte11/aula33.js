const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

//const query_divTodas = [...document.querySelectorAll("div[class]")]
const query_divTodas = [...document.querySelectorAll("div > p")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1,p")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
//const query_cursoEspecial = document.querySelector("#c1")
const query_cursoEspecial = document.querySelectorAll("#c1")[0]

console.log(query_divTodas)
//console.log(query_cursosC2)

/*

Pegar todos elemento p que estao em div.
const query_divTodas = [...document.querySelectorAll("div > p")]
mostrando que tem um elemento p dentro dela. Agora vao ser separado um colecao com 3 elementos.
E foram os p de cima .
E agora muda os de baixo pra p:
      <div id="c13">Photoshop</div>
      <div id="c14">AppInventor</div> 
      =>
    <p id="c13">Photoshop</p>
    <p id="c14">AppInventor</p>
    E mesmo assim eles não irao entrar no meio da collection.
    Porque eles não tem no elemento Prototype uma div.
    ("div > p")] Obter todos elementos que tem uma dic.
*/