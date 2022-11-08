function   Toys(input) {
  let VacantionPrice  = Number(input[0]) 
  let puzle = Number(input[1]);
  let mapet = Number(input[2]);
  let bear = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]);

  let MoneyEarn = puzle * 2.60 + mapet * 3 + bear * 4.10 + minion * 8.20 + truck * 2 ;
  let toys = puzle + mapet + bear + minion + truck 

if (toys >=50 )  {
  MoneyEarn = MoneyEarn * 0.75;
} 

let MoneyAfterRent = MoneyEarn * 0.90;
let moneyleft =  Math.floor(MoneyAfterRent - VacantionPrice)

if (MoneyEarn >= VacantionPrice) {

 
  console.log(`Yes! ${moneyleft.toFixed(2)} lv left.`)
} else {

  let moneyleft =  Math.abs(MoneyAfterRent - VacantionPrice)






  
  
  console.log(`Not enough money! ${moneyleft.toFixed(2)} lv needed.`)
}




 

 
 


}

Toys(["320", "8", "2", "5", "5", "1"])
