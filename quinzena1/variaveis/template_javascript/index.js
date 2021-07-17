let nome
let idade

console.log(typeof nome); // undefined é um vazio não intencional
console.log(typeof idade); // undefined é um vazio não intencional
//----------------------------------------------------------------------
const nomeUsuario = prompt("Qual seu nome?")
const idadeDoUsuario = prompt("Qual sua idade?")

console.log( nomeUsuario);
console.log( idadeDoUsuario);
console.log(typeof nomeUsuario);
console.log(typeof idadeDoUsuario); // Todo prompt devolve string mesmo que sejá numero
//----------------------------------------------------------------------
const valor1 = prompt("Nome")
const valor2 = prompt("Idade")
const valor3 = prompt("De onde é")

console.log("Olá", valor1, "você tem", valor2, "anos. Onde", valor3, "e", valor2, "são os valores que o usuário inseriu.");
//----------------------------------------------------------------------
const pergunta1 = "Esta de olhos aberto?"
const resposta1 = prompt(pergunta1)
console.log(resposta1)

console.log(pergunta1, "-", resposta1)

const pergunta2 = "Usando camiseta??"
const resposta2 = prompt(pergunta2)
console.log(resposta2)

console.log(pergunta2, "-", resposta2)

const pergunta3 = "Sentado na cadeira??"
const resposta3 = prompt(pergunta3)
console.log(resposta3)

console.log(pergunta3, "-", resposta3)
//----------------------------------------------------------------------
let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
