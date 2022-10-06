


    
   
function carConteudo(params) {
    document.getElementById("conteudo").innerHTML =  
    "<p> Conecte-se com bons pensamentos e sentimentos.Resgate a leveza da vida.</p> "
    "<p> Veja a beleza da vida</p> "
    

}

 function removerMensagem(params) {
    setTimeout(function()  {
        document.getElementById("conteudo").innerHTML =
         "<img src='./img/paraiso1.webp'>"


    }, 5000);
    
}
    removerMensagem();

    
    





