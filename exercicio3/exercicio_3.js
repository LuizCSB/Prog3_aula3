var input = require('fs').readFileSync('entrada.txt', 'utf-8')
var lines = input.split(',')

totalSalario = lines[0] * lines[1]
totalDescontado = totalSalario * 0.77

console.log(`O salário a receber será de: ${totalDescontado}`)