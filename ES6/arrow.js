// arrow functions
// are more concise syntax for writing function expressions 
// they utilize a new token => that looks like a fat arrow 
// arraow functions are anonymous and change the way "this" binds in functions


// ES5 

var es5Func = function() {return 2;}


// ES6

let es6Func = () => 2

// less code 
// no function keyword 

// js interpreter will see the equal sign and the greater than packet
// it is called fatter and lets us know we  are working within each six arrow function 
// () sometimes optional 
// implicit return without curly braces 



// arrow - function 1 parameter 

let cubed 
cubed = x => x*x*x; // concise body, implicit return
cubed = x => {return x*x*x;}
// block body, needs explicit retrun statement 
cubed = (x) => x*x*x; //consise, body, implicit return 
cubed = (x) => {return x*x*x}


// arrow function - 2 parameters 

let add;

add = (x,y) => x+y
add = (x,y) => {return x + y }
add = (x,y,z) => x + y + z