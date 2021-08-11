 // Exercicio 1

//  const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // a) O que vai ser impresso no console?

    //   0 Amanda Rangel Mandi
    //   1 Laís Petra Laura 
    //   2 Letícia Chijo Chijo 


// Exercicio 2
    // const usuarios = [
    //     { nome: "Amanda Rangel", apelido: "Mandi" },
    //     { nome: "Laís Petra", apelido: "Laura" },
    //     { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
  
    // const novoArrayB = usuarios.map((item, index, array) => {
    //     return item.nome
    // })
  
    //  console.log(novoArrayB)

     // a) O que vai ser impresso no console?
        // [Amanda Rangel, Laís Petra, Letícia Chijo]

// Exercicio 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // a) O que vai ser impresso no console?
  
    // 0: {nome: "Amanda Rangel", apelido: "Mandi"}
    // 1: {nome: "Laís Petra", apelido: "Laura"}

// 1 Excercico de escrita
/* Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter: */
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
    ]

    // a) Crie um novo array que contenha apenas o nome dos doguinhos
    function nomesDosDoguinhos(objeto){
        return objeto.nome
    }

    const extrair = pets.map(nomesDosDoguinhos)
    console.log(extrair);

    // b) Crie um novo array apenas com os cachorros salsicha
    const doguinhoSalsinha = (pets)=>{
        return pets.raca === "Salsicha"
    }
    const tipoDeRaca = pets.filter(doguinhoSalsinha)
    console.log(tipoDeRaca);

    /* c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"*/


    function gerarMensagrm(objeto) {
        
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${objeto.nome}!`
        
     }
     
     const mensagem = pets.map(gerarMensagrm)
     console.log(mensagem);


// Exercicio 2 Escrita
/*Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter: */
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) Crie um novo array que contenha apenas o nome de cada item

    function nomesNaLista(objeto) {
        return objeto.nome
    }

    const todosOsNomes = produtos.map(nomesNaLista)
    console.log(todosOsNomes);

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles


// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
    const apenasBebidas= (produtos)=>{
        return produtos.categoria === "Bebidas"
    }
    const categoriaDeBebidas = produtos.filter(apenasBebidas)
    console.log(categoriaDeBebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
    const produtosYpe= (produtos)=>{
        return produtos.nome.includes("Ypê")
    }
    const categoriaDeYpe = produtos.filter(produtosYpe)
    console.log(categoriaDeYpe);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"



