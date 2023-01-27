// algorithm
// set of operations to be performed
// perform calculation, data processing, and/or automated reasion tasks 
 
// implement an algorithm to determine if a string has all unique characters 


// for loop, conditional statement, string.indexOf(), stirng.LastIndexOF()

// for loop 
// for (statment 1; stamtment2; statement 3) {
    // code block
// }

// conditional statement 
// if ture enter code block, if false step over code block 
// if (expression) {
    // code block 
// }

// index()
// var car = 'honda accord';
// car.toUpperCase(); 'HONDA ACCORD'
// car.indexOf('accord')
// console.log(car.indexOf('accord')) //6
// car.indexOf('civil') //-1 //means that there was no match found in the string

// lab

// pseudo code

// first create a function 
// give it a parameter of whatver argument that im gonna check 
// it will give a code block 
// see string if all the characters are unique 
// use a for loop to iterate through the string 
// write the counter intilization, test condition, and counter update 
// jump into the next code block 
// if statement 
// see if the first index and the last index match 
// if they do iterate through the next letter in the array 
// if false, means the letter appears twice, want to return that false 
// if goes through the wholse statment return it true 


// function unique(string argument)
// code block
// for loop (statement 1; statement 2 ; statment 3)
// code block
// condiontal statement ( do girst and last index not match?) end alogrithm with false return 
// if loop finishes with no matches return value of true 

// my attempt 

function unique(string) {
    // run for loop iterate through our string character by character 
    for (var i = 0; i < string.length; i++) {
        // check if true or false 
        if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) 
        return false;
    }
    // if it makes it through the loop 
    return true;
}
console.log(unique('vehicle'))
// false
// two e's
console.log(unique('car'))
// true 