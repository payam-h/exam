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
  
  
  console.log(Solution("1234"))