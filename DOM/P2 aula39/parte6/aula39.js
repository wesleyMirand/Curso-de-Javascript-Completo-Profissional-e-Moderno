const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2= document.querySelectorAll("#c1_2")

console.log(c1_2.parentNode.parentNode)

/*
console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(caixa1.children.length > 0 ? "possui filhos" : "não possui filhos")


console.log(caixa1.children[1].innerHTML="TESTE")

Agora quero mudar a estrutura no HTML
                     <div id="c1_1">
                              <div id = "c1_2">
                                    HTML
                              </div>
                        </div>
    se clicar no c1_2 como se relaciona com as outra div?
    const c1_2 = document, query selecto all dar um console.log no c1_2. como pegar o 
    pai direto dele O HTML
    consologe .parentHome que retorna a div pai anterior ou parentnode. retorna a div anterior.
    e se quiser saber o avo? parentNode.parentNode.
    retorna a estrutura completa.
    

*/