// let 
// let is an alternative to var 
// utilizes block scope while var only utilizes function scope 
// tempora dead zone 
// using the let statement should help code makre more sense and less buggy 


// challenge 
// create identical set of code and show how 'var' does not take advantage of block scope but 'let' does 
 
var a = 4;
if(true) {
    var b = 5
}
console.log(a+b)
// 20

var c = 4;
if(true) {
    let d = 5
}
console.log(a+b)
// d is a local block that it was declared within giving block scope 
// cant find d bc it is a local variable so the cancel dialog method doesnt have access to it 
 

// challenge 
// var vs let
// talk line by line 
// type it out 

function varTest() {
    var x = 1
    if(true) {
        var x = 2
        console.log(x)
    
    }
    console.log(x)
}
console.log(varTest())
// 2
// 2

function letTest() {
    let x = 1
    if(true) {
        let x = 2
        console.log(x)
    }
    console.log(x)
}
conosole.log(letTest())