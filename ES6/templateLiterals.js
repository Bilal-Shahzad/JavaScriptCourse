// template literals 
// encloded by the back tick 
// replace the single or double quotes used in strings
// may contain place holders 
// place holders are indicated by the dollar sign and curly braces
// expressions in the place holders including text contained between them are passed to a function 
// parts are concetrated by the default function into a single string 


//  new line ES%
var sentence = 'My name is Rob \n and I like to run';
console.log(sentence)
// lets the interpreter that a new line is wanted 



// template literal 
// instead of single or double quotes
// use black tick to open and close the string 

let newSentence = `My name is Rob
and I like to run`
console.log(newSentence)
// `My name is Rob
// and I like to run`


// ES6
let topping1 ='pepperoni'
let topping2 = 'mushrooms'

let pizzaToppings = `My favorite pizza has ${topping1} and ${topping2}!`;
console.log(pizzaToppings)
// My favorite pizza has pepperoni and mushrooms!