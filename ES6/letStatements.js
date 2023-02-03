// ES6 
// LET

// Let statement 
// allows for block scope to declare a variable
// differs from the var keyword which declares a variable globally or locally to the scope function 


// var 
var greeting = 'hello'
console.log(greeting)
// 'hello


// let 
let name = 'Bilal'
console.log(name)
// 'Bilal'

// if you use a let keyword again youll get an error 


// function scope vs block scope 

// function scope
var count = 4
// global variable 
if (true) {
    var more = 1
    // this is a global variable 
}
console.log(count+more)
// 5

// block scope 
let count = 4;

if (true) {
    let more = 1
    // let statement is blocked scope 
}
consoole.log(count+more)
// global scope is visible with count
// block scope is not visible with more 
// error more undefined 