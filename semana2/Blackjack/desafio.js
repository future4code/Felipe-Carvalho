console.log("Bem vindo ao jogo de Blackjack!");

//funcao jogo comecando
if(confirm("Quer iniciar uma nova rodada?")){
   comecaPartida()
}else{
   console.log("O jogo acabou")
}


//funcao do jogo dando as cartas:
function comecaPartida(){
   const carta1Usuario = comprarCarta(); 
   const carta2Usuario = comprarCarta();
   const carta1Computador = comprarCarta();
   const carta2Computador = comprarCarta();
   const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor;
   const pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;
   const comparaAses = carta1Computador.texto.includes("A") && carta1Usuario.texto.includes("A");

   console.log
   (
      `Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario}`
      ) 
   console.log
   (
      `Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${pontuacaoComputador}`
      ) 

   //Funcao jogo
   function jogoComecando(){
      if(pontuacaoUsuario === pontuacaoComputador ){
         console.log("Empate!")
      }else if(pontuacaoUsuario >= pontuacaoComputador){
         console.log("O usuário ganhou!")
      }else if(pontuacaoUsuario <= pontuacaoComputador){
         console.log("O computador ganhou!")
      }
   }

   //funcao desafio 8 se forem duas cartas ases comecar novamente
   function jogoVerificandoAses(){
      if(comparaAses){
         console.log("Usuário e computador tiraram cartas ases, as cartas devem ser sorteadas novamente");
         comecaPartida()
      }else{
         jogoComecando();
      }
   }

   jogoVerificandoAses()
}



