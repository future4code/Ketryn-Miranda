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

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt("Qual sua altura?"))
  const largura = Number(prompt("Qual sua largura?"))
  
  const cal1 = altura * largura
  const cal2 = largura * altura

  console.log(cal1);
  console.log(cal2);

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Qual ano estamos?"))
  const anoDeNascimento = Number(prompt("Quae ano você nasceu?"))

  const calculo = anoAtual - anoDeNascimento

  console.log(calculo);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt("qual o seu peso?"))
  const altura = Number(prompt("qual o sua altura?"))

  const calculaIMC = peso / (altura * altura)

  console.log(calculaIMC);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Qual o seu nome?")
  const idadde = prompt("Qual o sua idade?")
  const email = prompt("Qual o seu e-mail?")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".");
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt("qual sua cor favorita 1?")
  const cor2 = prompt("qual sua cor favorita 2?")
  const cor3 = prompt("qual sua cor favorita 3?")

  const cores = [cor1, cor2, cor3];

  console.log(cores);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Escreva uma palavra.")
  

  console.log(palavra.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = Number(promp("qual o custo do espetaculo?"))
  const ingresso = Number(promp("qual o valor do ingresso?"))
  
  const vendas =  custo / ingresso
  
  console.log(vendas);

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavaUm = prompt("Esqueva primeira palavra.")
  const palavaSegunda = prompt("Esqueva segunda palavra.")

  const tamanho = palavaUm.length === palavaSegunda.length

  console.log(tamanho);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const palavaUm = prompt("Esqueva primeira palavra.")
  const palavaSegunda = prompt("Esqueva segunda palavra.")

  const tamanhoDaPalavra = palavaUm.toLowerCase() === palavaSegunda.toLowerCase()

  console.log(tamanhoDaPalavra);
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
  const anoBissexto = Number(prompt("Digite para ver se o ano é Bissexto"))
  
  console.log(calculo);

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const nivelEscolar = prompt("Você possui ensino médio completo?")
  const disponibilidadeDeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

 //console.log(maiorDeIdade ===  nivelEscolar ===  dispomibilidadeDeHorario);
 //console.log(maiorDeIdade === "sim" && nivelEscolar === "sim" && dispomibilidadeDeHorario === "sim");
}