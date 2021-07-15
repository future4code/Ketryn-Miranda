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
const olhos = true
const camiseta = false
const cadeira = true

console.log("Esta de olhos aberto?", olhos, "Usando camiseta?", camiseta, "Sentado na cadeira?", cadeira);
//----------------------------------------------------------------------
let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10