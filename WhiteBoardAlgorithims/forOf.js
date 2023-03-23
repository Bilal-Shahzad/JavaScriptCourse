// reverse a string 

// challenge 
// reverse the provided string 
// you may need to turn the string into an array before you can reverse it \
// your result must be a string

// Examples 
// 'car' -> 'rac'
//  'bar' -> 'rab'

// tools 
// for of 


// my solution 
function revString(str) {
    emptyStr = '';
    for (var letter of str){
        emptyStr = letter + emptyStr;
    }
    return emptyStr
}
console.log(revString('car')) //rac
    



// video solution 
function revString(str) {
 
    // create a `reverseString` variable with an empty placeholder string.
      // You will return `reverseString` after you have looped through it.
    var reverseString = '';
    // create a for of loop starting with last character and ending with first character of the string
      // remember the syntax for (variable of iterable) { ... run code here }
    for (var letter of str) {
      // in the code block add the current letter being looped through to the front of the `reverseString` variable
      reverseString = letter + reverseString;
    }
    //  return `reverseString` variable
    return reverseString;
    }
   
    console.log(revString('car')); // 'rac'
    console.log(revString('bar')); // 'rab'