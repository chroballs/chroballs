var palavras = ["MARGE","HOMER","LISA","MAGGIE","BART"]
var pos_palavra_sorteada;    
var botoes_letras;
var parteForca=0;
var quantLetras;

//LET funciona em bloco e VAR funciona para função//

function init(){   
    botoes_letras = document.querySelectorAll("button");
    for (let i=0; i<botoes_letras.length;i++){
        botoes_letras[i].addEventListener("click", function(){
            verificaJogada(i);
        });
    }

    sorteiaPalavra();
}

function verificaJogada(pos){
    if (parteForca < 6){
        //faz jogada
        var achou = false;
        var div_letras = document.querySelectorAll("#letras_palavra div");
        for (var i=0; i < palavras[pos_palavra_sorteada].length; i++){
            if(palavras[pos_palavra_sorteada].charAt(i) == botoes_letras[pos].innerHTML){
                div_letras[i].innerHTML = botoes_letras[pos].innerHTML;
                quantLetras--;
                achou = true;
            }
        }
        if (achou){
            botoes_letras[pos].classList.add("botao_certo");

        }else{
            parteForca++;
            document.querySelector("#personagem").src="krusty"+parteForca+".png";
            botoes_letras[pos].classList.add("botao_errado");
        }

        botoes_letras[pos].setAttribute("disabled",true);
        if (quantLetras==0){
            document.querySelector("#fim").innerHTML="Parabéns...   GANHOOOOU!!! - Pressione F5"
            document.querySelector("#fim").style.display = "block";
             desabilitarBotoes();
        }
    }else{
        //fim de jogo
        document.querySelector("#personagem").src="krusty7.png";
        document.querySelector("#fim").innerHTML = "GAME OVER!! - Pressione F5";
        document.querySelector("#fim").style.display = "block";
        desabilitarBotoes();
    }
}

function sorteiaPalavra(){
    pos_palavra_sorteada = Math.round(Math.random()*(palavras.length-1));

    quantLetras = palavras[pos_palavra_sorteada].length;

    for(var i=0; i<quantLetras;i++){
        document.querySelector("#letras_palavra").innerHTML += "<div></div>";
// += ela pega tudo que temos dentro daquele bloco//
    }
}

function desabilitarBotoes(){
    for (var i=0;i<botoes_letras.length;i++){
        botoes_letras[i].setAttribute("disable",true)
    }
    
}