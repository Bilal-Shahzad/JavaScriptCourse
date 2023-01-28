// given an array with two values find the sum of those numbers within the range 
 
// suppose giben an input of 2 numbers in any order 
// EX
// E.G. [1,4]
// 1+2+3+4=10

// EX
// E.G. [5,2]
// 5+4+3+2=14

// Math.max() 
// will look at all element in array and return the value of the largest number 

var math = Math.max(5,20)
console.log(math) //20 

var math2 = Math.max(-8,-20)
console.log(math2) //-8 

var math3 = Math.max(-10,25);
console.log(math3) //25 


// Math.min()
// will return the smallest of zero or more numbers 

var x = 10;
var y = -20
console.log(Math.min(x,y)) //-20 


// find the sum of all numbers in a range of two number in an array 
// largest number may be fiven first 

// psuedocode 
// declare a function that will take in an array of 2 elements 
// find the sum of two of the values and all the numbers between 3rd range 
// set 3 variables to one 
// assign the max value of two array elements 
// target index of each element 
// return when reached total value 
// create a for loop that wil start at the main value and go up to inclued max value 
// for loop  will update temporary value that will be final resul
// return after gone through the loop 
// call function with array of two elements to find the sum of them and all values in between 

// function sumRange([array of two elements]) 
//     code block 
//         declar and assign values to varaible max value 
//             for loop (intitalize counter; test at max; update )
//             add current value in for loop to total value 
//             call function with argument of array with two elements 
    

// my solution 

function addAll(array) {
    // math.max to look at i of both elements and return largest #
    var max = Math.max(array[0], array[1])
    // math.min to look at i for both elements and return the smallest #
    var min = Math.min(array[0], array[1])
    // declare variable to have total value 
    var total = 0 
    // for loop 
    for (var i = min; i <= max; i++) {
        // adds current value in for loop 
        total += i;
    }
    return total;
}
console.log(addAll([1,4]))
// 10