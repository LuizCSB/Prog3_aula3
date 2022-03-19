ano = 0

paisA = 80000
paisB = 200000

txCrescimentoA = 1.03
txCrescimentoB = 1.015

while(paisA <= paisB){
    paisA = paisA * txCrescimentoA
    paisB = paisB * txCrescimentoB

    ano += 1
}

console.log(`Serão necessários ${ano} anos para que as populações sejam igualadas!`)