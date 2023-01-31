// create an algorthim to reuturn the value after cutting off X amount of elements from the head

// array.slice()
// does not alter original array but returns and altered copy of the array 

var travel = ['boat', 'bus' , 'car' ]
var lessTravel = travel.slice(0,1)
console.log(lessTravel)
// [ 'boat' ]


// array.splice()
// this method changes the context of an array by removing existing elements and/or adding new elements 
// Array.splice(state,delete,additional elements)

var names = ['John' , 'Sarah' , 'Eric', 'Jane ']
console.log(names.splice())
// (2,0,'Tom)


// lab
// solve the algorthim of cutting n elements from the head 


// psuedo code 
// declare a function will pass 2 parameters one from array as an argument 
// other parameter is the number of elements to splice 
// code block and attach splice mthod to array bc want to return array 

// function [array, n elements to remove]
//     code block 
//         apply splice method to array. Pass it the arguments of starting point and n argument 
// call function 


// my solution 

function chopper(argument, excess) {
    argument.splice(0,excess);
    return argument
}
console.log(chopper(['January', ['Febuaray' , 'March', 'April']]))