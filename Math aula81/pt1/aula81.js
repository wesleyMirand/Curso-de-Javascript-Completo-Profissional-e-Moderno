/* 
a classe math, tem metodos e propriedades. Serie de calculos, podemos usar classe statica.
nao precisamos instaciar:
const math = new Math() nao precisamos!
é so por Math.  vai aparecer todos metodos da interface.

const mat = document.getElementById("mat")
mat.innerHTML= Math.PI
São constante facil de utilizar... uso direto

numero aleatorio entre 0 e 1: 
mat.innerHTML= Math.random()

retorna numero inteiro aleatorio nunca maior que 9 : 
mat.innerHTML= Math.floor (Math.random()*10)

ou : const num = Math.random() *10
mat.innerHTML= Math.floor(num)
funcionaria do mesmo jeito

Random espera um numero valor que retorna num value, flor vai até nove e random 10
const num = Math.random() *10
mat.innerHTML= Math.random(num)

e raiz quadrada retorna raiz do no num que passar tipo 16
const num = Math.random() *10
mat.innerHTML= Math.sqrt(16)

Funcao Pow potencia agora espera um num base, e o expoente. numero elevado a outro tipo 10,2
const num = Math.random() *10
mat.innerHTML= Math.sqrt(10,2)

e 10 ao cubo: 
const num = Math.random() *10
mat.innerHTML= Math.sqrt(10,3)

MAth. funcao propri e adiciona onde quiser!

nao deixa vim 0
const num = Math.Floor(Math.random() *10)+1
mat.innerHTML= num

*/

const mat = document.getElementById("mat")

const num = Math.Floor(Math.random() *10)+1
mat.innerHTML= num