//Return the factorial of the a given integer.
function factorialize(num) {
    var fact = 1;
    for(var i = 1; i <= num; i++){
      fact = fact * i;
    }
    return fact;
  }
factorialize(5);