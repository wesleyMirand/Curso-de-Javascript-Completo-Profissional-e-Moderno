const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2= document.querySelectorAll("#c1_2")

const novoElemento=document.createElement("div")
novoElemento.setAttribute("id", "c7")
novoElemento.setAttribute("class", "curso c1")
novoElemento.innerHTML = "ReactNative"


caixa1.appendChild(novoElemento)

/*
E se quiser um filho especifico?
. children[4] filho da posição 4

1-react -> aponta pro 2-HTML ->  pai dele tudo.

Podemos criar um elemento HTML e anexar esse elemento, dentro da nossa pagina a qualquer momento.
criar uma constante e chamar de novo elemento. Para criar elemento ir na classe document, usa o createElement.
Ele precisa saber qual elemento tenque criar no caso div, ele ja tem um elemento novo mais esta na memoria,
tenque informa aonde esta o elemento e anexar dentro do grupo caixa pegar o caixa1 que e a div, metodo
appendchild que é o filho e anexar o novo elemento.
Quando atualiza a pagina vai mostra na estrutura do console que tem uma div ja criada, porem vazia.
Como trabalhar com ela? pegar o  novo elemento, muda o texto  com .innerHtml= e por "ReactNative",
E agora tem react native na estratura.
Só que quero trabalhar com propriedads, atributos por class nele.

Novo elemento: metodo setAtribute, o atribute "id" , e o valor que quero"c7". Ja encontra uma nova id.
Agora por class curso e cursoc1 o valor que quero para aquele atribute.Adicionei as class a ele e criei um novo elemento
aparti do rep. JS.

*/