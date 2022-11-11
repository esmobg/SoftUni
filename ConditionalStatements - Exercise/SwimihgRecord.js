function SwimingRecord(input) {
    let  RecordInsecond = Number(input[0]);
    let Distance = Number(input[1]);
    let TimeinSeconds = Number(input[2]);
    
    let Time = Distance * TimeinSeconds 
    let SlowTime = Math.floor( Distance / 15) * 12.5 ;  
    let  totaltime = Time + SlowTime 

    let diff = Math.abs(totaltime - RecordInsecond);  
    if(RecordInsecond > totaltime) {
        console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`);
    } else {
        console.log(`"No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
   

    





}

SwimingRecord(["55555.67",

"3017", 

"5.03"])