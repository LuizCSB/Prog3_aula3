var input = require('fs').readFileSync('entrada.txt', 'utf-8')
var lines = input.split(',')

numIni = lines[0]
numFim = lines[1]

function primeNumbers(numIni, numFim) {
    let numbers = new Array();
    for (var i = numIni; i <= numFim; i++) {
      if (isPrime(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }
  function isPrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }
  console.log(primeNumbers(4, 39));