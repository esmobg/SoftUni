function SuppliesforSchool (input) {

    let pens = Number(input[0])
    let  markers = Number (input[1])
    let detragent = Number (input[2])
    let procentage = Number (input[3])


    let sum = pens * 5.80 + markers * 7.20  + detragent * 1.2 
    let discount = (procentage / 100) * sum 
    let totalsum  = sum - discount 


    console.log(totalsum)

    

    











}

SuppliesforSchool(["2 ",

"3 ",

"4 ",

"25 "])