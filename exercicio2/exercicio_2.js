var input = require('fs').readFileSync('entrada.txt', 'utf-8')
var lines = input.split(',')

nome = lines[0]
idade = lines[1]

numeroDias = parseInt(idade) * 365

console.log(`${nome}, você já viveu ${numeroDias} dias!`)