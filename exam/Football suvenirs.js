function Moon(input) {

    country = input[0];
    stock = input[1];
    BroiZakupeni = Number (input[2]);


   if(country == 'Argentina'){
    if(stock == 'flags'){
        total = (BroiZakupeni * 3.25).toFixed(2) ; 
        console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
    }
    else if(stock == 'caps'){
            total = (BroiZakupeni * 7.2).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'posters'){
            total = (BroiZakupeni * 5.1).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'stickers'){
            total = (BroiZakupeni * 1.25).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else{
            console.log('Invalid stock!')
        }


   }
   else if(country == 'Brazil') {
    if(stock == 'flags'){
        total = (BroiZakupeni * 4.2).toFixed(2) ; 
        console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
    }
    else if(stock == 'caps'){
            total = (BroiZakupeni * 8.5).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'posters'){
            total = (BroiZakupeni * 5.35).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'stickers'){
            total = (BroiZakupeni * 1.20).toFixed(2)  ;
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else{
            console.log('Invalid stock!')
        }
   } 
   else if(country == 'Croatia') {
    if(stock == 'flags'){
        total = (BroiZakupeni * 2.75).toFixed(2) ; 
        console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
    }
    else if(stock == 'caps'){
            total = (BroiZakupeni * 6.9).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'posters'){
            total = (BroiZakupeni * 4.95).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'stickers'){
            total = (BroiZakupeni * 1.10).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else{
            console.log('Invalid stock!')
        }
    
   } 
   else if(country == 'Denmark') {
    if(stock == 'flags'){
        total = (BroiZakupeni * 3.10).toFixed(2) ; 
        console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
    }
    else if(stock == 'caps'){
            total = (BroiZakupeni * 6.5).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'posters'){
            total = (BroiZakupeni * 4.8).toFixed(2) ; 
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else if(stock == 'stickers'){
            total = (BroiZakupeni * 0.9).toFixed(2) ;
            console.log('Pepi bought ' + BroiZakupeni + ' ' + stock +' of ' + country +' for ' + total + ' lv.')
        }
        else{
            console.log('Invalid stock!')
        }
    
   } 
   else {
    console.log("Invalid country!");
   }

}


Moon(["Brazil",
"stickers",
"5"])

Moon(["Denmark",
"caps",
"8"])

Moon(["USA",
"caps",
"18"])