
//-----------Exercicio 1 -----------
function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)

/*a) O que vai ser impresso no console?
10
50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse 
a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
10
50
 */
//-----------Exercicio 2 -----------
let textoDoUsuario = ("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/* a. Explique o que essa função faz e qual é sua utilidade?
Vai retorna o texto tudo minusculo e boolean pode ser true se o texto obter a palavra "cenoura" senão é false

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`         TRUE
     ii.  `CENOURA é bom pra vista`     FALSE
     iii. `Cenouras crescem na terra`   FALSE

*/
//-----------Exercicio 1 ----------- a)
function sobreMim() {
const frase =  "Eu sou ketryn, tenho 24 anos, moro em Trindade e sou estudante."
return frase

}
console.log(sobreMim());
//-----------Exercicio 1 ----------- b)
function poucoDeSobre(nome, idade, cidade, profissao) {
    nome = "ketryn"
    idade = 23 
    cidade = "Trindade-GO"
    profissao = "estudante"
    
    const textinho = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return textinho
    }
 console.log(poucoDeSobre());
//-----------Exercicio 2 ----------- a)
function somarNumeros(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado
  }
  
 console.log(somarNumeros(2, 4));

//-----------Exercicio 2 ----------- b)
 function numeroMaior(primeiroNumero, segundoNumero) {
    const comparar = primeiroNumero >= segundoNumero
    return comparar
  }
  
 console.log(numeroMaior(8, 6));
  
//-----------Exercicio 2 ----------- c)
 function par(numerosPar) {
const numerosPares = numerosPar % 2 === 0
return numerosPares

}

console.log(par(12));

//-----------Exercicio 2 ----------- d)
function mensagemDaString(mensagens) {
    mensagens = "uma mensagem pequena"
    console.log(mensagens.length);
    console.log(mensagens.toUpperCase());
    
}

mensagemDaString()

//-----------Exercicio 3 -----------
function calcSoma(num1, num2) {
    const soma = num1 + num2
    console.log(soma);
}
calcSoma(30, 3)

function calcSutracao(num1, num2) {
    const subtracao = num1 - num2
    console.log(subtracao);
}
calcSutracao(30, 3)

function calcMultiplicacao(num1, num2) {
    const multiplicacao = num1 * num2
    console.log(multiplicacao);
}
calcMultiplicacao(30, 3)

function calcDivisao(num1, num2) {
    const divisao = num1 / num2
    console.log(divisao);
}
calcDivisao(30, 3)