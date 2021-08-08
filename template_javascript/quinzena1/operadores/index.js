// Exercicio 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
//console.log("a. ", resultado)  // Vai ser false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // vai ser false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // vai ser true

console.log("d. ", typeof resultado) // booleano

// Exercicio 2

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) /* todo prompt retorna string, antes do prompt colocar um Number, quando o usuario
for responder responder vai o javascript vai entender que tem que retorna um número */

// Exercicio 1 escrita

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
const idadeDoAmigo = Number(prompt("Qual a idade do seu Amigo(a)?"))

const somaDaIdade = idadeDoUsuario === idadeDoAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", somaDaIdade);

// Exercicio 2 escrita

let primeiroPar = Number(prompt("Digite um numero par."))

const resultadoDoPar = primeiroPar % 2

console.log(resultadoDoPar); // o 2 é um número par o resto sempre vai ser 0

// se colocar um número impar o resto vai retornar 1

// Exercicio 3 escrita
const usuario = Number(prompt("Qual aaaaaaa sua idade?"))
const meses = usuario * 12
const dias = meses * 365
const horas = dias * 24


console.log(meses, "meses", dias, "dias", horas, "horas.");

// Exercicio 4 escrita
const primeiro = Number(prompt("Coloque primeiro número."))
const segundo = Number(prompt("Coloque segundo número."))

const umDivisivel = primeiro % segundo
const doisDivisivel = segundo % primeiro

console.log("O primeiro numero é maior que segundo?", primeiro >= segundo);
console.log("O primeiro numero é igual ao segundo? ", primeiro === segundo);
console.log("O primeiro numero é divisível pelo segundo?", umDivisivel === doisDivisivel);
console.log("O segundo numero é divisível pelo primeiro?", doisDivisivel === umDivisivel);





