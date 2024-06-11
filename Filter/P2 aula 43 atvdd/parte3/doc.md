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

Criar a const no js, btnRemoverCurs, adicionar o lister do portão, addEventListener.

Assim obtemos qualquer curso selecionado, só que o curso selecionado não vai ser
previousSibling, vai ser parenteNode console.log(cursoSelecionado)

Parentenode.parenteNode = retorna o curso completo, que é oque vai remover, inves de console.log :
cursoSelecionado.remove() , vai remover quando selecionar.

E quando nao selecionar e voltar undefined? usar o IF(rs==undefined){}...Só vai receber quando
rs for diferente de undefined. Caso o contrario else emiti alerta com o texto selecione, um curso.
E faz a mesma coisa no BtnRemoverCurso embaixo.