// functional prgramming

// higher order functions
// higher order functions is a function that can take another function as an argument, or that returns a function as a result

// functional prgramming glossaries contrain a large number of large words, but at is core, its the essense of FP
//  programs are built with a handful of very small adn very predictable pure functions

// pure functions
// pure functions always returns the same result given the same parameters 
// given the same input, will always return the same output
// produce no side effects 
// relies on no external state 

//map 
// the word map itself is a method or a function on an array 
map([corn, cow, chicken], cook)
=>[popcorn, burger, eggs] //this is the new array
// cook and map are functions 
// function is a process which takes some input called arguments and produces some output called a return 

//filter 
// it will run itself through a true and false filter for whatever specfics are named 
filter([popcorn, burger, eggs], isVegeetarian)
=>[popcorn, eggs]

// reduce
// will go through the array run the elements through a function that will return one value 
reduce([popcorn, eggs] eat )
=> poop
// have the same final destination


// filter()
// syntax
Array.filter(function(currentValue),{
    return true;
})
// function, is the function argument to callback with
// currentValue is the element in the array
// it reutnrs the array of true values 

var testScores = [92,87,54,63,75,59];
var passingTest = function (test) {
    return test > 60;
}
var graduation = testScores.filter(passingTest)
console.log(grad)
// [ 92, 87, 63, 75 ]

// another way to write it
var grad = testScores.filter(function(test){
    return test > 60;
})
console.log(grad)
// [ 92, 87, 63, 75 ]

// for loop 
var testScores2 = [92,87,54,63,75,59];
var grads = []
// use for loops to go through each element in the array 

for (var i = 0; i < testScores2.length; i++)
if (testScores2[i] > 60) {
    grads.push(testScores2[i]);
}
console.log(grads)
// [ 92, 87, 63, 75 ]