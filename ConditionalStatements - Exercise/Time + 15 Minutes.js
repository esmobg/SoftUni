function time(input) {
    let hours = Number(input[0]);
    let mins  = Number(input[1]);

    let totalTimeMins = (hours * 60) + mins;
    let time15Min = totalTimeMins + 15;
    let timeHour = Math.floor(time15Min / 60);
    let timeMins = time15Min % 60;

    
 
    if (timeMins < 10)  {
        console.log(`${timeHour}:0${timeMins}`);
    }
    else if (timeHour > 23) {
        timeHour = 0;
        console.log(`${timeHour}:${timeMins}`);
    }   else {
        console.log(`${timeHour}:${timeMins}`);
    }
 
 
}
time(["12", "49"])