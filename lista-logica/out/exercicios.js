// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem);
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura1 = prompt(3)
  const largura1 = prompt(5)
  
  const resultado1 = altura1 * largura1
  
  console.log(resultado1);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Qual ano estamos?")
  const anoDeNascimento = prompt("Que ano você nasceu?")
  
  const resultado2 = Number(anoAtual) - Number(anoDeNascimento)

  console.log(resultado2);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const  seuPeso = prompt("Qual o seu peso?")
  const  suaAltura = prompt("Qual a sua altura?")

  const resultado3 = (Number(seuPeso) / Number (suaAltura * suaAltura))
  
  console.log(resultado3);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const  nomeDoUsuario = prompt("Qual o seu nome?");
  const  idadeDoUsuario = prompt("Qual a sua idade?");
  const  emailDoUsuario = prompt("Qual é o seu e-mail?");

 console.log("Meu nome é " +nomeDoUsuario+ ", tenho " +idadeDoUsuario+ " anos, e o meu email é " +emailDoUsuario+ ".");

}
// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Qual sua cor preferida 1?');
  const cor2 = prompt('Qual sua cor preferida 2?');
  const cor3 = prompt('Qual sua cor preferida 3?');
  
const todasAsCores = [cor1, cor2, cor3];
console.log(todasAsCores);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Qual a Palavra ?")
  console.log(palavra.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt("Qual o custo do teatro?")
  const valorIngresso = prompt("Qual valor de cada Ingresso?");

  const divisao = custo / valorIngresso

  console.log(divisao);

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const myString = prompt("Olá");
  const myString2 = prompt("abc");

const todos = myString.length === myString2.length;

console.log(todos);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const frura = prompt("Banana");
  const fruea = prompt("bAnAnA");

const frutas = frura.toLowerCase() === fruea.toLowerCase()

console.log(frutas);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
    const anoAtual = prompt("Qual ano atual?")
    const anoDeNascimento = prompt("Qual ano você nasceu?")
    const carteiraDeIdentidade = prompt("Qual ano em que sua carteira de identidade foi emitida?")
    
    const idadeAtual = Number(anoAtual) - Number(anoDeNascimento)
    const emissao = Number(anoAtual) - Number(carteiraDeIdentidade)
    
    if(idadeAtual <= 20 && emissao / 5 >= 1){
      console.log(Boolean(true))
    } else if (idadeAtual <= 50 && idadeAtual > 20 && emissao / 10 >= 1) {
      console.log(Boolean(true))
    } else if (idadeAtual > 50 && emissao / 15 > 1) {
      console.log(Boolean(true))
    } else {
      console.log(Boolean(false))
    }
    
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}