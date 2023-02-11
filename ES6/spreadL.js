// spread operator 
//  ...
// multiple elements in arrays 
// multiple arguments in functions 

// practice 
 
let names = ['Tim', 'Sarah', 'Alex']
console.log(names)
// [ 'Tim', 'Sarah', 'Alex' ]

// using spread operator 

console.log(...names)
// Tim Sarah Alex


// challenge 
// create 2 array s
// add them together using 5s5 approach 
// add them using the es6 approach 


// es5 

var es5rain  = ['red' , 'orange', 'yellow' ]
var es5bow = ['green' , 'blue' , 'purple' , 'pink ']
var es5rainbow = es5rain.concat(es5bow)
console.log(es5rainbow)
// 'red',     'orange', 'yellow',  'green', 'blue',    'indigo', 'violet ']

// es6

let es6bow  = ['green' , 'blue', 'purple', 'pink' ]
let es6rainbow = ['red' , 'orange' , 'yellow',...es6bow]
console.log(es6rainbow)
// ['red',    'orange','yellow', 'green','blue',   'purple','pink']


// challenge 
// create a function that will take 3 parameters 
// passs to the function an array with 3 elements using the spread operator 
// pass those arguments to a template string return the template string 

let array =['ray', 'bathroom', 'quickly' ]

function madLib(verb, noun, adjective) {
    return 'I $(verb) to the $(noun) and $(adjective) sat down. '

}
let sentence = [madLib(...array)]
console.log(sentence)
// "I ran to the bathroom and quickly sat down."