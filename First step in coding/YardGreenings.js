function yardGreening (input){
    const squareMeters = Number(input[0]);
    const priceperMeter = 7.61;
    const priceWithoutDiscount = squareMeters * priceperMeter;
    const priceWithDiscount = priceWithoutDiscount * 0.18;
    const discount = priceWithoutDiscount - priceWithDiscount; 

    console.log(`The final price is: ${priceWithDiscount.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

