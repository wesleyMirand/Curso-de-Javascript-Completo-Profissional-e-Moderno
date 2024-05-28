//const filtroMaior18=(valor, indice, arr)=> {}
const filtroMaior18 = (valor) =>{
    if(valor >= 18)
        return valor
}

const idade = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter(filtroMaior18)

console.log(idades)
console.log(maior)



/*

vai tratar, percorrer um array com um filtro que permite uma filtragrem de programação
tipo o if e retorna somente determinados elemento.
Retorna um array filtrado, somente elemento que eu quero.
Cria array de idades, 15, 34, 34.. Tem um série de idade, quero forma um novo array
somente com pessoas maior ou igual 18.
Criar uma nova const maior e dizer que vai receber idades filter.
Crio uma funcao filtroMaior18 com arrow function ou criar um metodo anonimo. Por padrão
ele passa a posição do valor, indice e array. O proprio do elemento.
V -> passa a posição desse valor, o Indice e o array o proprio do elemento.
Não e preciso colocar todos esse parametros, Posso por o valor parametro que quero trabalhar.
const FiltroMaior18=(valor) => {

}
Quero retorna idade maior de 18, return idade se(if) for maior ou igual 18 , retorna valor.

depois dar console.log nos dois array idade e maior.
vai dar erro pq to tenando acessar a funcao e criei ela depois, pegar a funcao pra por la encima, 



*/