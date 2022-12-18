function Moon(input) {

    N = Number (input[0]);
    M = Number (input[1]);
    S = Number (input[2]);

    var array = [];


    for (let i = M; i >= N; i--) {
        
        if(i%2 == 0 & i%3 == 0){
            if(i == S){
                break;
            }
            array.push(i);
        }
           
        } 
     console.log(array.join(' '));

}
