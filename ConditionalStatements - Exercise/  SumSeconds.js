function SumSeconds (input) {
    let player1 = Number(input[0])
    let player2 = Number(input[1])
    let player3 = Number (input[2])

    let totaltime = player1 + player2 + player3 

    let minute = Math.floor(totaltime / 60 )
    let seconds = totaltime % 60 

    if (seconds <10  ) {
        console.log(`${minute}:0${seconds} `)
    }

    else {
        console.log(`${minute}:${seconds}` )
    }



}  
SumSeconds (["35",

"45",

"44"])