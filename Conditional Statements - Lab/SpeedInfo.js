function Speedinfo(input){

    let Speed = Number(input[0])

    if (Speed <= 10 ) {
        console.log("slow")
    }
      else if (Speed <=50 ) {
        console.log("average")
      }

      else if (Speed <=1000)  {
        console.log("fast")
      }

      else if (Speed <= 10000) {
        console.log("extremely fast")
      }


}
Speedinfo(["10000"])