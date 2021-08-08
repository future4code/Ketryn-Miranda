/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo(a) ao jogo de blackjack!")
 if(confirm("Quer iniciar uma nova rodada?")) {
   const carta = comprarCarta(); 
       
   const cartaUmUsuario = comprarCarta()
   const cartaDoisUsuario = comprarCarta()
   const cartaUmComputador = comprarCarta()
   const cartaDoisComputador = comprarCarta()
    
   console.log(carta.valor) 
   // imprime o valor da carta (um número). Nesse caso: 10)
        
   const pontuacaoUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor
   const pontuacaoComputador = cartaUmComputador.valor + cartaDoisComputador.valor
        
   console.log(carta.texto) 
   console.log(`Usuário - cartas: ${cartaUmUsuario.texto}, ${cartaDoisUsuario.texto} sua pontuação: ${pontuacaoUsuario}`) 
   console.log(`Computador - cartas: ${cartaUmComputador.texto}, ${cartaDoisComputador.texto} sua pontuação: ${pontuacaoComputador}`) 
   // imprime o texto da carta. Nesse caso: "K♦️"
    
   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O Usuario ganhou!");
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O Computador ganhou!");
   } else if(pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate!");
   }
} else {
   console.log("O jogo acabou!");
}
    

