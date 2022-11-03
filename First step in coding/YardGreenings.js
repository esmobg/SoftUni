function yardGreening (input){
    let squareMeters = Number(input[0]);
    let  priceperMeter = 7.61;
    let  priceWithoutDiscount = squareMeters * priceperMeter;
    let  priceWithDiscount = priceWithoutDiscount * 0.18;
    let  discount = priceWithoutDiscount - priceWithDiscount; 

    console.log(`The final price is: ${priceWithDiscount.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening( ["550"]  );
