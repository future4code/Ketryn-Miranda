const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
// a) O que vai ser impresso no console?
console.log(filme.elenco[0])  //  Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"

// Exercicio 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
// a) O que vai ser impresso no console?
console.log(cachorro) // nome: "Juca" idade: 3, raca: "SRD"
console.log(gato)       // nome: "Juba" idade: 3, raca: "SRD"
console.log(tartaruga)  // nome: "Jubo" idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// trás as informaçoes anterior que está dentro do objeto para outro e pode mudar ou adcionar uma o outra propriedade

// Exercicio 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //  false só trás ultima informação do objeto pessoa
console.log(minhaFuncao(pessoa, "altura")) // undefined

// Exercicio 1 ----- Escrita
const pessoa = {
    nome: "Ketryn",
    apelidos: ["xuxu", "trimtim", "ket"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`);

// Exercicio 1 ----- Escrita ----- b)
const pessoa = {
    nome: "Ketryn",
    apelidos: ["xuxu", " trimtim", " ket"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`);

const novaPessoa = {...pessoa, apelidos:["xuxa", "trinta", "ket"]}

console.log(pessoa, novaPessoa);

// Exercicio 2 ----- Escrita ----- a)
const pessoaUm = {
	nome: "Amanda", 
	idade: 21, 
	profissao: "Horteleira"
 }
    const pessoaDois = {
	nome: "Lucas", 
	idade: 27, 
	profissao: "Instrutor"
 }
 function informacao(pessoaUm, pessoaDois) {
 return [pessoaUm.nome, pessoaUm.nome.length, pessoaUm.idade, pessoaUm.profissao, pessoaUm.profissao.length]
}
console.log(informacao(pessoaUm, pessoaDois));

// Exercicio 3) -------- a)
let carrinho = []

// Exercicio 3) -------- b)
const fruta = { 
    nome: "banana",
    disponibilidade: true,
}
const fruta2 = { 
    nome: "maca",
    disponibilidade: true,
}
const fruta3 = { 
    nome: "kiwi",
    disponibilidade: true,
}
// Exercicio 3) -------- b)
const frutas = fruta, fruta2, fruta3) => {
carrinho.push(fruta)
carrinho.push(fruta2)
carrinho.push(fruta3)
}
console.log(carrinho);