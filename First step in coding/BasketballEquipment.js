function BasketballEquipment(input) {
    
    let annualCharge = Number(input[0]);
 
let shoesPrice = annualCharge - (annualCharge * 0.4);
let trackSuitPrice = shoesPrice - (shoesPrice * 0.2);
let basketballPrice = trackSuitPrice * 0.25;
let accessoriesPrice =  basketballPrice * 0.20;
 
totalPrice = shoesPrice + trackSuitPrice + basketballPrice + accessoriesPrice + annualCharge;
 
console.log(totalPrice);
 
 



}

BasketballEquipment(["320"])