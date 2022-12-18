function Moon(input) {

    let avarageSpeed = Number(input[0]);
    let FuelLiter = Number(input[1]);

    totalDistance = 384400 * 2
    totalTime = Math.ceil(768800 / avarageSpeed)




    FullTime = totalTime + 3

    console.log(FullTime)


    FuelLiter = (FuelLiter * 768800) / 100

    console.log(FuelLiter)








}

Moon(["5000",
    "7"])