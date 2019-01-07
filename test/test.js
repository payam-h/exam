let assert = require('assert');

// First Exersise Codes

describe('First Exersise', function() {
  it('ATM pin with 4 digits', function() {
    assert.equal(ValidatePin("1234"),true);
  });
  it('ATM pin with 5 digits', function() {
    assert.equal(ValidatePin("12345"),false);
  });
  it('ATM pin with 3 digits and one character', function() {
    assert.equal(ValidatePin("2a35"),false);
  });

});



function ValidatePin(pin){
  let seperated = pin.split("");

  let status=true;

  if(Object.keys(seperated).length == 4){
      //its Okay
    } else {
      status = false
  }

  for(let i in seperated){
      if(Number.isInteger(+seperated[i])===false){
          status=false
      }
  }
  
  return status;
}




// Second Exersise Codes

describe('First Exersise', function() {
  it('4 Chars', function() {
    assert.equal(Solution("1234"),['12', '34']);
  });

});



function isOdd(input) {
  let check = +input % 2;
  if(check == 0){
      return true
  } else {
     return false
  }
}

function Solution(input){
if(isOdd(Object.keys(input).length) == true){
  return input.match(/.{1,2}/g)
} else {
   let Newinput = input.concat("_")
   return Newinput.match(/.{1,2}/g)
}
}