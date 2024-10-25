/*

const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");


btn_url.addEventListener('click', (evt) => {
    //window.location="https://www.google.com.br"
    //window.location.replace("https://www.google.com.br") remocao deleta url do historico
    //window.location.assign("https://www.google.com.br") mesma ação mais nao substitui, nao remove dos historico
    //window.location.reload() não espera nenhum parametro atualiza a pagina
    //window.history.back() não espera nada volta no historico sem pagina antes
    //window.history.forward() proxima pagina
    //console.log(window.history.length) tamanho historico
    //window.history.go(1) espra um numero qual pagina navegar, 1 proxima fasa
    //console.log(url.value)
    //window.location= url.value //vai navegar
    evt.preventDefault();  // Evita o comportamento padrão do botão dentro do form
    window.location = url.value; // Navega para a URL inserida no campo
});

*/

const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener('click', (evt) => {
    evt.preventDefault();  // Evita o comportamento padrão do botão dentro do form

    // Verifica se a URL começa com "http://" ou "https://"
    let userUrl = url.value;
    if (!userUrl.startsWith("http://") && !userUrl.startsWith("https://")) {
        userUrl = "https://" + userUrl; // Adiciona "https://" se estiver faltando
    }

    window.location = userUrl; // Navega para a URL inserida no campo
});