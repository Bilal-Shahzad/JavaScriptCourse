// determine if 2 strings are permutation of each other 

// test 
// check for equality in characters and amount of characters 

// use 
// string.split()
// array.sort()
// array.join


// array.sort()
// sorts the elements of an array in palace and returns the array 
var state = ['Cali' , 'Wash' , 'AZ']
console.log(state.sort())
// [ 'AZ', 'Cali', 'Wash' ]
var scores = [3,30,1,11]
console.log(scores.sort())
// [ 1, 11, 3, 30 ]

// array.join
// joins all elements of an array into a string 
var car = 'honda accord'
console.log(car.split(""))
// ['h', 'o', 'n', 'd','a', ' ', 'a', 'c','c', 'o', 'r', 'd']
console.log(car.split("").join(""))
// honda accord


// create algorithim to determine if two strings are permuutation of eachother

// psuedocode 
// declare a function and give it a name 
// give 2 parameters strings that compare to see if there perumations of each other 
// enter code block 
// compare two arguments that passes parameters
//  use the split, sort and join methods 
// invoke the function 
// evaluate the 2 arguments whether there are perumations of eachother 


// funciton isPermutation(parameter 1, parameter 2)
//     code block 
//         use split sort join to compare the 2 strings and return the value 

//     isPerumuation(arg1 , arg 2 )


// my solution 

function isPermuation(string1, string2 ) {
    // return the value of 2 strings using strict equality 
    return string1.split('').sort().join(' ') == string2.split('').sort().join(' ')
}
console.log(isPermuation('Football' , 'llabootF'))
// true