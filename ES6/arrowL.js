// arrow function review 
// shorter syntax 
// anonymoyus functions
// no function keyword 
// () required for 0 or 2 or more parameter 
// () optional for 1 parameter 
// concise or body block 


var func1 = function() {
    return 'Hi';
}

// challenge
// rewrite func1 in es6 arrow function syntax 
// concise body 
// block body 

// my solution 

let fucn2 = () => 'Hi'
console.log(fucn2())
// Hi


// video solution 

let func3 = () => {return 'Hi'}
console.log(func3())
// Hi 



// challenge 
// create two arrow functions
// no parameters and tow or more parameters 
// chose either concise or block body 

// my solution 

let mult = (x,y) => x*y
var x = 5 
var y = 6
console.log(mult(x,y))
// 30


// video solution

var numbers = [2,4,6,8]
var es5squared = numbers.map(function(n) {return n*n })

var es6squared = numbers.map(n => n*n)
console.log(es6squared)
// [ 4, 16, 36, 64 ]