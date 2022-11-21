function cinema(input) {
    let permierePrice = 12;
    let normalPrice = 7.5;
    let  discountPrice = 5;
  
    let typeOfProjection = input[0];
    let rows = Number(input[1]);
    let  columns = Number(input[2]);
  
    let finalMoney = rows * columns;
  
    switch (typeOfProjection) {
      case "Premiere":
        finalMoney *= permierePrice;
        break;
      case "Normal":
        finalMoney *= normalPrice;
        break;
      case "Discount":
        finalMoney *= discountPrice;
        break;
    }
    console.log(`${finalMoney.toFixed(2)} leva`);
  }
  cinema(["Discount", "12", "30"]);
