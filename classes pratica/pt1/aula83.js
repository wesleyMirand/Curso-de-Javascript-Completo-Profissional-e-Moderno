//objetos
const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")


//alguma variaveis
let larguraPalco= palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas = [] //objetos nesse arrays nesse conteiner
let numBola = 0