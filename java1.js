'use strict';

let input = "a55sg";

function isOdd(input) {
     let check = +input % 2;
     if(check == 0){
         return true
     } else {
        return false
     }
}

if(isOdd(Object.keys(input).length) == true){
    console.log(input) 
} else {
    let Newinput = input.concat("_")
    console.log(Newinput)
    console.log(console.log( Newinput.match(/.{1,2}/g) )
    )
}