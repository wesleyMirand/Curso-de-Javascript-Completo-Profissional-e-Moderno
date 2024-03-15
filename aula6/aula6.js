
/* == igual true
=== resultado diferente false, pq o i === faz uma pesquisa profunda, vai atras do tipo
de dado, 1 numero , "1" string , os valores são diferente pq ele seleciona o tipo.

let v1 = {nome:"bruno"}
let v2 = {nome:"bruno"}

console.log(v1===v2)  FALSE
PQ? quando refere a objeto, ele procura endereço de memoria, embora teja o mesmo valor,
referencia na memoria é diferente.

a nao ser:
let v1 = {nome:"bruno"}
let v2 = v1

console.log(v1===v2)  A referencia das memoria sao a mesma, a v2 aponta pro v1. 

Dados no js: Pra colher dados precisamos da interface grafica, 
let nome = prompt("Digite seu nome:") 
console.log(nome) 
VAI DAR ERRO PQ O PROMPT FAZ PARTE DE FERRAMENTAS DOS ELEMENTOS DE INTERFACE.
POREM! No browser vai funcionar!
São elementos INPUT!

--------------------------

Forma de indentificar se o codigo esta rodando em celular ou PC
Tomar decisões conforme preciso, apontar uma page html no cel ou pc.
Do cel pro pc so muda a referencia de estilos, aponta pra um estilo aq e outro estilo ali.
chama e aponta pro mesmo estilo, dentro dele vai ter as mediaquery select, que prepara a pagina
para a resolução do celular. O html vai preparar para o celular.
Porém em JS como identifica se ta rodando em cel ou pc?

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/iPad/iPod/i)
|| navigator.userAgent.match(/blackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
      console.log("Celular")
}else{
      console.log("PC")
}

comparei de useragent é igual a android
" ou || "igual a webOs 
" ou ||" igual a iphone ipad....
 qualquer um desses vai retorna  celular.
"Se ELse" não for nenhum desses ele vai retorna pc.

-----------------------------------------------------------

E O DOM OQUE É?
Arvore de elementos dentro do HTML, temos estrutura que são elemento da pagina.
Elemento renderizados na pagina, o DOM ele cria a arvore,  propriedades que o elem usa,
o valor html, tudo relacionado ao elemento. 
O browser usa essa arvore para desenhar os elementos na pagina. 
Ai vem o JS e manipula os elementos, ele encherga o dom da pagina.
Na aba de inspecionar ao ir no button elementos vc ve o codigo e oque cada pedaço dele esta usando.
E isso é o DOM! é oque compoe a pagina de elemento.
CRIA A PAGINA-> cria o DOM -> renderiza a pagina atraves dos elementos -> Javacript  manipula esses elementos, lendo a arvore DOM.-> O browser rederiza atraves do dom.   

-----------------------------------------------------------------

Nomeclatura de Var e Escopo: 
é errado nomear as var exemplo : 
g_nomevar = ""
k_nomevar = ""

NAO tem problema nomear por prefixo! é pessoal nomeia do jeito que quiser. 

E quanto ao ESCOPO:

let nome= "bruno"   CRIEI UM NOME GLOBAL QUE ESTA NA RAIZ!

{               BLOCO COM nome SIGLA CURSO
      let singlacurso="JS"
      console.log(singlacurso)
}

const curso = () => { Criei uma funcao que tem curso, 
      let curso = "Javascript"
      console.log(curso)
}

curso()

Vai ter 3situacoes
1-Nome, posicao GLOBAL, Ele esta na raiz.
2- Bloco siglacurso
3- Funcao Curso

let nome= "bruno"

{  Só vai valer quando esse Escopo for executado { },
vai criar a var fazer oque tenque fazer e encerra liberando posição na memoria.   
      let singlacurso="JS"   ESse Escopo 
      console.log(singlacurso) ESSA VAR é local ao escopo de cima 
}

const curso = () => {  No caso de funcao criar a var, vai ocupar mt memoria? No caso 
ela ja esta pronta, ja esta alocada na memoria, quando executar ela vai carregar a 
a memoria toda. A funcao precisa esta pronto para executar  
      let curso = "Javascript"
      console.log(curso)
}

curso()

----------------------------------------



*/