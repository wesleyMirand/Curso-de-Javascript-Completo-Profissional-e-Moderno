Filter Funcao Remove

Para remover temos que pegar o "radioselecionado" e mover elemento parentNode 
do rádio.

const todosRadio= [...document.queryselectorAll("input [type = radio]")]
let radioSelecionado  = todosRdio.filter((ele, ind, arr) => {
    return ele.checked
})
return radioSelecionado[0]
}

Refatorar até chegar em uma forma simples, fazer pesquisa em outro botao,
porém por em uma nova funcao. Quando precisar  de um elemento chamar a funcao!
Criar nova funcao chamar curso Selecionado :
const cursoSelecionado , oque  faz?

Ele da um return!
const todosRadios 
const radioSelecionado

No return, const RadioSelecionado , vai obeter o conteudo da funcao radio selecionado.
E mundao a funcao de cima para radioSelecionado.

Mudar nome da var, que pode ficar com o mesmo nome nas funcao. "Rs. Rs." de radioSelecionado
agora sempre que precisar obter radioSelecionado vou conseguire no  html implementar o btnRemoverCurso.