const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

if(btn_c[0].children.length >0) { //se primeiro elemento for maior que 0, ele tem elementos filho.
    console.log("possui filhos");
}else{
    console.log("Não possui filhos")
}

/*

metodo para verificar se possui um filho:usando o console.log, verificar
se o caixa1 possui algum filho. haschildnode retorna true() se possuir.
Se não possuir btn_c[0].haschilnodes.

como verificar se ele tem elemento html, true ou falso é if.

*/