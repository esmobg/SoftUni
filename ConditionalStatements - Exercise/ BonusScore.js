function BonusScore(input) {
    let BonusScore = Number(input[0])
    let bonus = 0.0;

    if (BonusScore <= 100) {
        bonus = 5;
    }
    else if (BonusScore <= 1000) {
        bonus * 0.20 * BonusScore



    }
    else { bonus = 0.10 * BonusScore
    }
if (BonusScore % 2 === 0 ) {
    bonus = bonus + 1
}
    else if ( BonusScore % 10 === 5) {
        bonus = bonus + 2 
    }

    console.log(bonus)
    console.log(BonusScore + bonus)

    




    





}

BonusScore(["20"])