// Write a function which checks given input/parameter\

function isfizzBuzz(arg){
    if(typeof arg !== 'number'){
      return ('Nan - Not a Number! Please Input Number');
    }
  
    if((arg % 3 === 0) && (arg % 5 === 0)) {
      return 'FizzBuzz';
    }
  
    if(arg % 3 === 0) {
      return 'Fizz';
    }
  
    if(arg % 5 === 0) {
      return 'Buzz';
    }
  
    else {
      return 'Some odd number entered: ' + arg;
    }
  
  }
  
  let checkFizzBuzz1 = isfizzBuzz('one');  
  let checkFizzBuzz2 = isfizzBuzz(true);
  let checkFizzBuzz3 = isfizzBuzz(9);  
 