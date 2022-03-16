var input = require('fs').readFileSync('entrada.txt', 'utf-8')
var lines = input.split(',')

a = lines[0]
b = lines[1]
c = lines[2]

if (a != 0) {
    x1 = (-b + Math.sqrt((-b*-b)-4*a*c)) / 2 * a
    x2 = (-b - Math.sqrt((-b*-b)-4*a*c)) / 2 * a

    console.log(`Raiz X1 = ${x1}`)
    console.log(`Raiz X2 = ${x2}`)
} else {
    console.log("Essa função não possui raízes reais!")
}
