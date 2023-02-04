// template literals 
// createed with `backticks` not '' or ""
// interpolate avariables with ${placeholder}
// interpolate any kind of expression 
// multi-line
// doesnt interpret backslashes 



// challenge 
// create a multiline string using single or double quotes es5 
// creast multiline string using template literal es6 


// my solution

// ES5
var string = '"I\m sick",\n John said'
console.log(string)
// "Im sick",
//  John said

// ES6
let newString = `"I'm sick",
John said`
console.log(newString)
// "I'm sick",
// John said


// challenge 
// expression interpolation 
// embed given variable expressions within a normal string with es5
// embed given expressions with es6 template literals 
// use a single and double quote within both implentations and punction 
    // contraction and quotes 


var drink = 'coffee'
var food = 'dounut'
var time = 'morning'

// my solution 

var morningRoutine = 'Bilal said, ' + '"Good ' + time  + '" as he drank his ' + drink + ' ate his ' + food + '.'
console.log(morningRoutine)
// Bilal said, "Good morning" as he drank his coffee ate his dounut.

var betterRoutine = `Bilal said, "God ${time}", as he drank his ${drink} and ate his ${food}`
console.log(betterRoutine)
// Bilal said, "God morning", as he drank his coffee and ate his dounut