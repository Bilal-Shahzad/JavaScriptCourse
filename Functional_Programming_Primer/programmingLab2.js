// fumctional prgramming 
// it can handle higher order functions
// higher order functions 
// function that can take another function as an argument or that reuturns a function as a result 

// map 
// higher order function can receive another funciton as an argument 
// does not delete but transforms each eement in a new array 

// practice 

var numbers = [2,4,6,8,10]

var double = numbers.map(function(mult) {
    return mult * 2;
}).map(function (mult) {
        return mult + 1
    })
console.log(double)
// [ 5, 9, 13, 17, 21 ]


// challenge 
// change an array of greetings to all upper case words 
// save the first word in the array to a variable 

// my solution 

var greeting = ['hi' , 'hello' , 'hey' , 'thanks']
var shout = greeting.map(function (salutation) {
    return salutation.toUpperCase()
})
console.log(shout)
// [ 'HI', 'HELLO', 'HEY', 'THANKS' ]
var greetingLowerCase = shout.map(function(salutations) {
    return salutations.toLowerCase()
})
console.log(greetingLowerCase)