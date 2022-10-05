let family = {
    incomes :[ 2500, 3200,250.45,300.50],
    expences :[320.34, 249.69,1498.00,276]
}
function sum(array){
    let total = 0;
    for(let value of array){
        total += value
     }
     return total
}

function calculateBalance(){
    const calculateIncomes = sum (family.incomes)
    const calculateExpences = sum (family.expences)

    const total = calculateIncomes - calculateExpences
    const itsOk = total >= 0

    let balanceText = "negativo"
    if(itsOk) {
        balanceText = "positivo"
    }
    console.log('Seu saldo é + "balanceText" : ${total.toFixed(2)}R$')
}
    calculateBalance()
