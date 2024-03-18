let n1 = 20

let res = n1 >> 1

console.log(res)

/*  
OPERACOES DESLOCAMENTO BIT A BIT

Res 10&11= 10 AND
10|11 = 11  OR
10^11= 1 so vou retorna 1 quando eu tiver 1.  o exclusivo psol, ele retorna 1 pq, 
onde tiver 1, se tiver equivalencia e tiver bit 1 retorno 1.  10-11= 1
13        ^     14              =              3
00001101      00001110       00000001       00000011

Operacoes Deslocamento de bit:
let n1 =10
let res = n1 <<1
  
n1 1bitwise para esquerda e para direita. N4 1bitwiser para esquerda em 1, estou deslocando
1bit para esquerda e ao contrario direita.

e se for 2 bitwise esquerda. 

Fica facil para dobrar o valor.

valor 10 = 00001010  desloquei 1 bit para esquerda -> 10 -> 10100 desloco  00001010  para esquerda.
= binario binadec(num) para decimal: 20
let n1 = 10

let res = n1 << 1

console.log(res)
---------------------------
let n1 = 25

let res = n1 << 1

console.log(res)

50 ele dobrou
bitwise para esquerda dobra o valor, multiplica por 2 ou desloca para direita

00011001(25)   -> esquerda   110010 -> 50
----------------------------
E agora para a direita. mato o bit da direita e acrescendo 0 na esquerda.
reduzo o valor pela metade

30                                                        15
000111110       matei o primeiro zero da direita  _>    00001111

let n1 = 20

let res = n1 >> 1

console.log(res)           = vai dar 15

let n1 = 20

let res = n1 >> 2

console.log(res)                  === vai dar 5 



*/