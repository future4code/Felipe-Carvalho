/* 
console.log("Bem vindo ao jogo de Blackjack!");

//funcao do jogo dando as cartas:
function comecaPartida(){
   const carta = comprarCarta(); 
   const carta2 = comprarCarta();
   const carta3 = comprarCarta();
   const carta4 = comprarCarta();
   const pontuacaoUsuario = carta.valor + carta2.valor;
   const pontuacaoComputador = carta3.valor + carta4.valor;

   console.log
   (
      `Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação ${pontuacaoUsuario}`
      ) 
   console.log
   (
      `Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação ${pontuacaoComputador}`
      ) 
      
   if(pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate!")
   }else if(pontuacaoUsuario >= pontuacaoComputador){
      console.log("O usuário ganhou!")
   }else{
      console.log("O computador ganhou!")
   }
}

//funcao jogo comecando
if(confirm("Quer iniciar uma nova rodada?")){
   comecaPartida()
}else{
   console.log("O jogo acabou")
}
 */