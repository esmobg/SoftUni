function repain(input) {
    


    let naylon = Number(input[0])
    let paint = Number(input[1])
    let tinner = Number(input[2])
    let hours = Number(input[3])
    
    let PriceForNylon = (naylon + 2)  * 1.5 
    let PriceForPaint =  (paint * 1.10)  * 14.50 
    let Pricefortinner = tinner * 5 


    let totallstuffprice = Pricefortinner + PriceForPaint + PriceForNylon +  0.40 
    let WorkForOneHoures = totallstuffprice * 0.30 
    let tottalWork = WorkForOneHoures * hours 
    let total  = totallstuffprice  + tottalWork

    console.log(total)
    

   


    



   







}

repain(["10 ",

"11 ",

"4 ",

"8 "])