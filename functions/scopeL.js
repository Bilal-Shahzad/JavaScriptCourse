function roadTrip() {
    var gallons = 12;
    var mpg = 34;
    return gallons * mpg
}
console.log(roadTrip())//408

//scope chain 
//local to parent to grandoarent to great grandoparent etc to global scope to error

var gallons = 12 ;
var mpg = 34;

function roadTrip() {
    return gallons * mpg
}
console.log(gallons)
console.log(mpg)
console.log(roadTrip())

//use strict example in the consoole with an IFFE 

// (function meal() {
//     'use strict';
//     food = pizza
// });
// console.log(meal())

//build a nested function 
var height = 10 

function volume() {
    var width = 10;
    var length = 10;
    var volumeOfObject = function () {
        return length * width * height;
    }
    return volumeOfObject()
}

console.log(volume())