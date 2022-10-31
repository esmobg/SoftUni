function FishTank(input) {

    let length = Number(input[0]);
    let witdh =  Number(input[1]);
    let hight = Number(input[2]);
    let takenspacepercent = Number(input[3]);

    let TakenSpaceDecimal = takenspacepercent / 100 ;

    let tankVolume = length * witdh * hight ; 
    let tankVolumeLiters = tankVolume * 0.001; 
    let spacetoken = TakenSpaceDecimal * tankVolumeLiters ;

    let SpaceLeft = tankVolumeLiters - spacetoken; 


    console.log(SpaceLeft);
    
    




    
    



} 

FishTank(["85", "75", "47", "17"])