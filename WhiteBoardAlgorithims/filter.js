// create a function that takes an array of non negative numbers and strings and returns a new array without the strings 
// rules 
// filter out all strings 
// return only numbers

// EX 
// [1,2, "a" , "b"] -> [1,2]

function filterArray(arr) {
    return arr.filter( item => typeof item === "string")
} 
console.log(filterArray([1,2, "a" , "b"]))
// [ 'a', 'b' ]

// my attempt
// filter out the letters
function filterNumbers(arr) {
    // the filter method is used to create a new array containing only the elements that are numbers
    // type of operator is used to check the tyoe of each element and keep ones that are numbers
    return arr.filter((element) => typeof element === 'number');
  }
  console.log(filterNumbers([1,2,3,4,5, "a" , "b" , "c" , "d"]))
// [ 1, 2, 3, 4, 5 ]

