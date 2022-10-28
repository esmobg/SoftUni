function Booklist (input) {

    let pagecount = Number(input[0])
    let pageForonehoure = Number(input[1])
    let day = Number(input[2])


    let totaltime = pagecount / pageForonehoure 
    let needtime = totaltime / day 

    console.log(needtime)






}

Booklist(["432 ",

"15 ",

"4 "])