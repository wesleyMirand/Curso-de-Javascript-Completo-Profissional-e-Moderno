function* perguntas() {
      const nome = yield 'Qual seu nome?';
      const esporte = yield 'Qual seu esporte?'
      return "Seu nome é:" + nome + "Seu esporte é:" + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Wesley').value)
console.log(itp.next('Natacao').value)


/* 

criar funcao perguntas com nomes yeld ponte parada.
vou retorna o const texto qual seu nome.
depois vou const esporte yield qual seu esporte favorito

yield para na constante e permite armazenar no momento de chamada.

nao coloquei funcao de leitura! ta na chamada da funcao
vou por return seu nome e nome + esporte favorito é esporte.
vou chamar a funcao com primeiro interetor  itp= perguntas()
e vou dar console.log
interetor perguntas
itp.next.value
e no outro next oque eu quero que va para dentro da constante
"wesley"
e no segundo next "academia"
deu return seu nome é wesley esporte favorito academia.
formula de funcoes geradoras!

*/