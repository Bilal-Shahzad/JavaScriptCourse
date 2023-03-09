// what i learned yesterday 

// filter
// it creates a new array filled with elements that pass the test
// I set soemthing that I want filtered out
// my array of numbers
var numbers = [20,21,10,40]
// filtering numbers that are over 21 
var over21 = numbers.filter(above21)
// creating a function to do that 
function above21(number){
    // return a number that is over 21
    return number >=21
}
console.log(above21(numbers))