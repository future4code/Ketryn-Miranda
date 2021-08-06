// Exercicio 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
/* Se no prompt o usario colocar um numero par, passara no testes, caso o coloque um numero ímpar ou uma string "Não passou no teste" */

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Numeros pares

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// Numeros ímpares

/* Exercicio 2
 O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado: */
 let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// informar o preço da fruta

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// 2.25

/* c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA 
O ITEM c.")? */
// Vai passar direto é o preço é 5

/* Exercicio 3 */
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Pedindo para o usuario escreve um numero, o Number e para trasforma a string em numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// "Esse número passou no teste", -10 a mensagem deu Error

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Uncaught ReferenceError: mensagem is not defined é erro na linha

// Exercicio 1
/*Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). 
a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir." */
const idadeDoUsuario = Number(prompt("Qual sua idade?"))
if(idadeDoUsuario >= 18){
    console.log("Você pode dirigir.");
} else{ (idadeDoUsuario < 17)
    console.log("Você não pode dirigir.");
}
function
/* Exercicio 2
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */
  
  const horarioDeEstudo = prompt("Qual seu horario de estudo, digite: M, V ou N, (Matutino) (Vespertino) (Noturno).")
  if (horarioDeEstudo === "M") {
    console.log("Bom Dia!");
  } else if (horarioDeEstudo === "V"){
    console.log("Boa Tarde!");
  } else if (horarioDeEstudo === "N"){
    console.log("Boa Noite!");
  } else {
    console.log("Digite um valor valido!");
  }
  

/* Exercicio 3 
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/
const horarioDoAluno = prompt("Qual seu horario de estudo, digite: M, V ou N, (Matutino) (Vespertino) (Noturno).")
switch (horarioDoAluno) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Vespertino!");
        break;
    case "N":
        console.log("Noturno");
    default:
        console.log("Digite uma das opções disponíveis");
}

/* Exercicio 4
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */
function assitirFilme(fantasia, ingresso) {
    if (fantasia && ingresso) {
      console.log("Bom filme");
    } else {
      console.log("Escolha outro filme");
    }
  }
  
  const generoDoFilme = prompt("Qual o gênero do filme?") === "fantasia";
  const valorDoIngresso = Number(prompt("O ingresso está abaixo de 15 reais?")) < 15;
  
  assitirFilme(generoDoFilme, valorDoIngresso);
  