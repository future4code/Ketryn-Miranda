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
const perguntas = {
    inicio: "Quer iniciar uma nova rodada?",
    pergunta1: `Suas cartas são 3♣️ J♥️. A carta revelada do computador é Q♠️.` + "\n"+
    "Deseja comprar mais uma carta?",
    pergunta2: "Suas cartas são 3♣️ J♥️ 5♣️ . A carta revelada do computador é Q♠️." + "\n"+
    "Deseja comprar mais uma carta?",
    fimdejogo: "Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22." + "\n"+
    "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20." + "\n"+
    "O computador ganhou!"
}
 
function cartasSorteadas() {

    const carta1 = comprarCarta()
    const carta1pc = comprarCarta()

    if (confirm( perguntas.inicio )) {

        if(confirm( 
            `Suas cartas são ${carta1.texto}. A carta revelada do computador é ${carta1pc.texto}.` + "\n"+
            "Deseja comprar mais uma carta?"
         )) {
            const carta2 = comprarCarta()
            const carta2pc = comprarCarta()

            if(confirm( 
                `Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada do computador é ${carta1pc.texto}  ${carta2pc.texto}.` + "\n"+
                "Deseja comprar mais uma carta?"
            )) {
                const carta3 = comprarCarta()
                const carta3pc = comprarCarta()

                const total3 = carta1.valor + carta2.valor + carta3.valor
                const total3pc = carta1pc.valor + carta2pc.valor + carta3pc.valor
                
                const resultado3 = total3 === total3pc ? 'empate!' : (total3 > total3pc) && (total3 <= 21) ? 'voce ganhou!' : 'pc ganhou!'

                alert(`Suas cartas são ${carta1.texto} ${carta2.texto} ${carta3.texto}. Sua pontuação é ${total3}.` + "\n"+
                `As cartas do computador são ${carta1pc.texto} ${carta2pc.texto} ${carta3pc.texto}. A pontuação do computador é ${total3pc}.` + "\n"+
                resultado3)

                console.log(resultado3)
            } else {
                const total2 = carta1.valor + carta2.valor
                const total2pc = carta1pc.valor + carta2pc.valor

                const resultado2 = total2 === total2pc ? 'empate!' : (total2 > total2pc) && (total2 <= 21) ? 'voce ganhou!' : 'pc ganhou!'

                alert(`Suas cartas são ${carta1.texto} ${carta2.texto}. Sua pontuação é ${total2}.` + "\n"+
                `As cartas do computador são ${carta1pc.texto} ${carta2pc.texto}. A pontuação do computador é ${total2pc}.` + "\n"+
                resultado2)
                
                console.log(resultado2)
            }
        } else {
            const total1 = carta1.valor
            const total1pc = carta1pc.valor

            const resultado1 = total1 === total1pc ? 'empate!' : (total1 > total1pc) && (total1 <= 21) ? 'voce ganhou!' : 'pc ganhou!'

            alert(`Suas cartas são ${carta1.texto}. Sua pontuação é ${total1}.` + "\n"+
            `As cartas do computador são ${carta1pc.texto}. A pontuação do computador é ${total1pc}.` + "\n"+
            resultado1)
            
            console.log(resultado1)
        }
    } else {
        alert("Você não tem cartas. Fim de jogo!")
    }

}
cartasSorteadas()