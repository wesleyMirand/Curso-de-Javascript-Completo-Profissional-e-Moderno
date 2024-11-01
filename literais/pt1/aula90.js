const btn_imp=document.getElementById("btn_imp")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById('tabela').innerHTML; //conteudo do id tabela para constante conteudo

    let estilo = "<style>"; //var estilo  incorporado ou inline
    estilo += "table(width: 100%; font: 25px Calibri;)";
    estilo += "table, th, td (border: solid 2px #888; border-collapse: collapse;"; //concatenando += formatacao bordas
    estilo += "padding: 4px 8px; text-align:center;}";
    estilo += "</style>"; //fecho style podia ser tudo em uma linha so

    const win = window.open('', '', 'height=700, width = 700'); //nova tamanho da janela , dentro da constante win
    window.op

    win.document.write('<html><head>'); // da janela que criei chamei documente write  com codigo html, pagina normal
    win.document.write('<title>Wewe Cursos</title>');
    win.document.write(estilo); //incorporado, associei o style
    win.document.write('</head>');
    win.document.write('<body>')
    win.document.write(conteudo); //minha tabela associar a constante conteudo
    win.document.write('</body></html>');  //finalizei o body e html aberto

    win.print() //depois um print, imprime o conteudo
})