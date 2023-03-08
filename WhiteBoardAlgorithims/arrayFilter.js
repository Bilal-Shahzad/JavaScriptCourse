// Remove Odd Numbers From an Array
 
// Challenge
  // Create a function that takes an array of numbers and returns only the even values
  // The function should return an array containing only even numbers
 
// EX
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 3, 4, 6, 8, 10]
  // [21, 26, 28, 29] -> [26, 28]
 
 // filter method
 
// Tools
  // filter method
  // remainder/modulus operator
 
 
    function evensOnly(arr) {
        // Step 1 -> Use the filter method for each item in the array
        return arr.filter(function(a) {
          // use modulus operator to evaluate even numbers and `return` the items that
          // that have a remainder of `0`
          return (a % 2 === 0);
        })
      }
       
      console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      console.log(evensOnly([21, 26, 28, 29]));