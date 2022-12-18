function chips(input) {

    let ime = input[0];
    let budjet = Number(input[1]);
    let biriBroi = Number(input[2]);
    let chipsBroi = Number(input[3]);

    obshtoBiriCena = biriBroi * 1.2;
    cenaChips = obshtoBiriCena * 0.45;
    obshtaCenaChips = Math.ceil(cenaChips * chipsBroi);

    totalSumm = obshtaCenaChips + obshtoBiriCena;

    if (totalSumm <= budjet) {
        ostavastiPari = (budjet - totalSumm).toFixed(2);;
        console.log(ime + " bought a snack and has " + ostavastiPari + " leva left.");
    }
    else {
        lipsvastiPari = (totalSumm - budjet).toFixed(2);;
        console.log(ime + " needs " + lipsvastiPari + " more leva!");

    }



}

chips(["George",
    "10",
    "2",
    "3"])

chips(["Valentin",
    "5",
    "2",
    "4"])