let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3 posição 0 é o primeiro valor length

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5] a posição do length e o 1 que antes estava o 4

const valor = array[i+6]
console.log('f. ', valor) // f. 9 posição 6 do length é o 9 que esta dentro do array

//-----------------------------------------------------------------------------------------------------
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
/* toUpperCase() vai transformar toda frase em maiúscula
// replaceAll("A", "I") substituir o elemento que deseja por outro
length vai dizer o tamanho da string */

//-----------------------------------------------------------------------------------------------------
// Exercicio 1

const nomeDoUsuario = prompt("Qual se nome?")
const emailDoUsuario = prompt("Qual seu e-mail?")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!");

// Exercicio 2

const minhaComidaFavorita = ["lasanha", "arroz de forno", "sushi", "pudim", "pizza"]

console.log(minhaComidaFavorita);
console.log("Essas são as minhas comidas preferidas: ",  minhaComidaFavorita[0]);
console.log(minhaComidaFavorita[1]);
console.log(minhaComidaFavorita[2]);
console.log(minhaComidaFavorita[3])
console.log(minhaComidaFavorita[4]);

const comidaDoUsuario = "qual sua 5 comida favorita? "
const resposta = comidaDoUsuario + ["laranja", "banana", "chocolate", "bolo", "cheese"]

console.log(resposta.replace("banana", minhaComidaFavorita[1]));

// Exercicio 3

const listaDeTarefas = []
const tresTarefas = "escreva 3 tarefa que você tenha que realizar?"
const respostaDaTarefa = ["ir na padaria", "arruma a casa", "levar o cachorro para passiar"]

const implementa = listaDeTarefas + respostaDaTarefa.splice(1)
console.log(implementa);
