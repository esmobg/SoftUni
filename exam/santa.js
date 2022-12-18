function christmasGifts(input) {
    let index = 0;
    let age = input[index];
    index++;
 
    let toyPrice = 5;
    let sweaterPrice = 15;
    let count16 = 0;
    let countAbove = 0;
    let toysMoney = 0;
    let sweaterMoney = 0;
 
    while (age !== "Christmas") {
        age = Number(age);
 
        if (age <= 16) {
            count16++;
            toysMoney += toyPrice;
        } else {
            countAbove++;
            sweaterMoney += sweaterPrice;
        }
 
        age = input[index];
        index++;
    }
 
    if (age === "Christmas") {
        console.log(`Number of adults: ${countAbove}`);
        console.log(`Number of kids: ${count16}`);
        console.log(`Money for toys: ${toysMoney}`);
        console.log(`Money for sweaters: ${sweaterMoney}`);
    }
}