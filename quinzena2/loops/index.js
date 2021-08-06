/*/ Exercicio 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) // 10

// Exercicio 2 */
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log("Exercicio 2: ", numero)
	}
}
// a) O que vai ser impresso no console?
//[19, 21, 23, 25, 27, 30]

/*b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso? */ 
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > lista.length -1) {
		console.log(numero)
	}
}

// Exercicio 3
// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// *
// **
// ***
// ****

// Exercicio 1 de escrita
// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
/*b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array */

function bichinhosDoUsuario(){
const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
pets = [];
if (bichinhos === 0) {
      console.log("Que pena! Você pode adotar um pet!")  
   
    } else {
        
        for (let nomeDePet = 0; nomeDePet < bichinhos; nomeDePet++) {
            const nomeDeBichinhos = prompt("Digite o nome de cada um deles.")
            console.log(nomeDeBichinhos);
            pets.push(nomeDeBichinhos)
          
            console.log(pets);
        }
    }
    

}
bichinhosDoUsuario()

// Exercicio 2
/* Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas: 
 a) Escreva um programa que imprime cada um dos valores do array original. */
 const arrayOriginal = [300, 20, 40, 31, 49]
 
function imprimiUm() {
    console.log(arrayOriginal[0]);
    console.log(arrayOriginal[1]);
    console.log(arrayOriginal[2]);
    console.log(arrayOriginal[3]);
    console.log(arrayOriginal[4]);
   }
imprimiUm()

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
function divisao(){
for (let numero of arrayOriginal) {
   if (numero > arrayOriginal.length -1) {
         console.log(numero / 10)
     }
 }
}
divisao()
/*c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array */
const novoArray = []
function acessoAoArray(arrayOriginal,novoArray) {
   for(let i = 0; i < arrayOriginal.length; i++) {
       let resultadoDoArray = arrayOriginal[i];
       if(resultadoDoArray % 2 === 0) {
           novoArray.push(resultadoDoArray)
           console.log(novoArray); 
       }
   }
}
acessoAoArray(arrayOriginal, novoArray)

/* d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.*/
function novoElemet() {
    const novaString = []
    const i = 0
    for (let novoArray of arrayOriginal) {
        novaString.push(`O elemento do index ${i} é: ${novoArray}`)
        i++
    }
    return novaString
}
console.log(novoElement);

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original. 
function retornaMaiorOuMenor() {
    const maiorNumero = 999
    const menorNumero = 0
    for( let numero of arrayOriginal) {
        if(numero > maiorNumero) {
            maiorNumero = numero
        } if (numero < menorNumero) {
            menorNumero = numero
        }
    }
    return [maiorNumero, menorNumero]
}

const retorna = retornaMaiorOuMenor()
console.log(`maior numero é ${retorna} e o menor numero é ${menorNumero}`);