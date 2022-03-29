// Uma academia deseja fazer um senso entre seus clientes para descobrir o
// mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve
// fazer um programa recebe como entrada um arquivo que contem uma lista
// (código, altura e peso) uma pessoa por linha. O final da digitação de dados
// deve ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar
// o programa também deve ser informados os códigos e valores do clente mais
// alto, do mais baixo, do mais gordo e do mais magro, além da média das
// alturas e dos pesos dos clientes.


var input = require('fs').readFileSync('entrada.txt', 'utf-8')
var lines = input.split('\n')

let maiorPeso = []
let menorPeso = []
let maiorAltura = []
let menorAltura = []

let mediaAltura = 0
let mediaPeso = 0
let qtdAlunos = 0

maiorAltura[1] = 0
menorAltura[1] = 500
maiorPeso[1] = 0
menorPeso[1] = 500

for (var x in lines){
    qtdAlunos += 1
    valor = lines[x].split(',')
    if (parseInt(valor[2]) > parseInt(maiorPeso[1])){
        maiorPeso[1] = valor[2]
        maiorPeso[0] = valor[0]
    }

    if (parseInt(valor[2]) < parseInt(menorPeso[1])){
        menorPeso[1] = valor[2]
        menorPeso[0] = valor[0]
    }

    if (parseInt(valor[1]) > parseInt(maiorAltura[1])){
        maiorAltura[1] = valor[1]
        maiorAltura[0] = valor[0]
    }

    if (parseInt(valor[1]) < parseInt(menorAltura[1])){
        menorAltura[1] = valor[1]
        menorAltura[0] = valor[0]
    }

    mediaAltura += parseInt(valor[1])
    mediaPeso += parseInt(valor[2])
    
}

mediaAltura = parseFloat(mediaAltura/qtdAlunos)
mediaPeso = parseFloat(mediaPeso/qtdAlunos)

console.log(mediaAltura)
console.log(mediaPeso)

// console.log(maiorPeso);
// console.log(menorPeso);
// console.log(maiorAltura);
// console.log(menorAltura);