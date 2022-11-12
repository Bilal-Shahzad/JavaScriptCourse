//function expressions, anonymous functions, iffes
//are all javascript interpreter reads over the JavaScript code, interprets each line, and runs it

//function expression 
function greeting() {
    return 'Goof morning, neighbor';
}
//'gretting' function decleration are always named

var morningGreeting = function() {
    return 'Good morning, neighbor!';
}
//'morning greeitng is to access the function 
//'function' is an anonymous function 
console.log(morningGreeting())


//function expression 
var greetFullName = function(firstName, lastName) {
    return 'Hello' + firstName + '' + lastName + '!'
}
console.log(greetFullName('Bilal','Shahzad'))
//interepreter hoists variable to top giving the value of undefined

//iife 
//immediately invoked function expressions