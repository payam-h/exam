let assert = require('assert');

describe('Main', function() {
  it('Array with 4 numbers', function() {
    assert.equal(getmaxsum(-1,2,3,-9),5); // Name your functions in camelCase
  });
  it('Array with 5 numbers', function() {
    assert.equal(getmaxsum(2,-1,2,3,-9),6);
  });
  it('Array with 5 numbers', function() {
    assert.equal(getmaxsum(-1,2,3,-9,11),11);
  });
  it('Array with 4 numbers', function() {
    assert.equal(getmaxsum(-2,-1,1,2),3);
  });
  it('Array with 5 numbers', function() {
    assert.equal(getmaxsum(100,-9,2,-3,5),100);
  });
  it('Array with nagative numbers', function() {
    assert.equal(getmaxsum(-1,-2,-3),0);
  });
});


// I don't know what did you do but it works. :)
// One month later only god knows what did you do.

function getmaxsum() {
  let decide = 0; // don't forget semicolons;
  for (let i=0; i < arguments.length; i++) { //code style 
    if(Number(arguments[i]) > 0){
      decide = 0;
      break;
    } else {
      decide = 1;
    }
}
  if (decide==1) {
    return 0
  } else{
    let fullArray = [];
    let resualt = [];
    let Copy = [];
    for (let i=0; i < arguments.length; i++) {
        fullArray[i] = Number(arguments[i]);
        Copy[i] = Number(arguments[i]);
    }

    for (let i=0; i < fullArray.length; i++) {
        resualt.push(Number(fullArray[i]));
    }
    let tempNumber= 0;
    let i = 1
    for(let j = 1;j<arguments.length;j++){
        i=1
        while(i<arguments.length){
            tempNumber=0
            for(let i in fullArray){
            tempNumber += fullArray[i]
            }
            resualt.push(tempNumber)
            fullArray.splice(-1,1)
            i++
        }
        Copy.splice(0,1)
        
        fullArray=Copy.slice()
        
    }
    
    
    return Math.max.apply(null,resualt)
    }
}