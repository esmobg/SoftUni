function FoodDelivery(input) {
    let chickencount = Number(input[0]);
    let FishCount = Number(input[1]);
    let vegicount = Number(input[2]);

    let totalMenuPrice = (chickencount * 10.35) + (FishCount * 12.40) + (vegicount * 8.15);


   

   let desseert = totalMenuPrice * 0.20;
   
   let totalPrice = totalMenuPrice + desseert  * 2.50;

   console.log(totalPrice);



    







}

FoodDelivery(["2 ",

"4 ",

"3 "]);