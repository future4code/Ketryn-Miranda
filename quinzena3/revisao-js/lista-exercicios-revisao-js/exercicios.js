// EXERCÍCIO 01
function inverteArray(array) {
return [...array].map(() => array.pop())
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numeroElevado = array.filter((item) => {
    if(item % 2 === 0){
      return true
    }
      return false
  })
  const paresElevados = numeroElevado.map((item) => {
    return item**2
  })
  return paresElevados
}
console.log(retornaNumerosParesElevadosADois());

// EXERCÍCIO 03
function retornaNumerosPares(array) {
const numerosPares = []

  for (let valor of array) {
    if(valor % 2 === 0){
      numerosPares.push(valor)
    }
  }
  return numerosPares
}
console.log(retornaNumerosPares());

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let maiorNumero = 0
  for (let i = 0; i < array.length; i++){

    if(array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

console.log(retornaMaiorNumero());
// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  /*Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele. */
    let numeros = array.length

    return numeros

}
console.log(retornaQuantidadeElementos());

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

let a = booleano1 && booleano2 && !booleano4 

let b = (booleano1 && booleano2) || !booleano3 

let c =  (booleano2 || booleano3) && (booleano4 || booleano1) 

let d = !(booleano2 && booleano3) || !(booleano1 && booleano3) 

let e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)


const resultado = [a, b, c, d, e]
return resultado
}

console.log(retornaExpressoesBooleanas());

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let numerosPares = []

  for (let i = 0; numerosPares.length < n; i+=2) {
    numerosPares.push(i)
  }
  return numerosPares
}

console.log(numerosPares);

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
const ladoA = a
const ladoB = b
const ladoC = c

  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    return "Escaleno"
  } else {
    return "Isósceles"
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  if (num1 > num2) {
      return { 
        maiorNumero: num1,
        maiorDivisivelPorMenor: false,
        diferenca: num1 - num2
      };
  } else {
    return { 
      maiorNumero: num2,
      maiorDivisivelPorMenor: true,
      diferenca: num2 - num1
    };
  }
}
console.log(comparaDoisNumeros());
// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  
  if (array.length > 2) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    
    array.splice(array.indexOf(min), 1)
    array.splice(array.indexOf(max), 1)
  
    let newMin = Math.min(...array)
    let newMax = Math.max(...array)

    return [...new Set(array.sort().filter(res => res === newMax || res === newMin).reverse()) ]
  } else {
    return array
  }

}
console.log(segundoMaiorEMenor());

// EXERCÍCIO 11
function ordenaArray(array) {
  
  return array.sort((a,b) => {
    return (a < b + 1) ? -1 : 1
  })

}
ordenaArray()
// EXERCÍCIO 12
function filmeFavorito() {
    const filmesFavorito = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return filmesFavorito
  }
  filmeFavorito();

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  let filme = filmeFavorito()

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  return {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = 'ANÔNIMO'
  return pessoa
}
anonimizaPessoa()
// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
