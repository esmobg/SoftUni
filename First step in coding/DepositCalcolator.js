function DepositCalcolator (input) {

    let Depositamount = Number(input[0])
    let term  = Number(input[1])
    let AnualIntestRate = Number(input[2])

    let AnualIntestRateForOneYear = (AnualIntestRate / 100 ) * Depositamount 

    let AnualIntestRateForOneMonth = AnualIntestRateForOneYear / 12 

    let sum = Depositamount + (term * AnualIntestRateForOneMonth)

    console.log(sum)




}

DepositCalcolator(["200 ",

"3 ",

"5.7 "])