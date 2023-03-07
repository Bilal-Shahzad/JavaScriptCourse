// Remove Odd Numbers From an Array
 
// Challenge
  // Create a function that takes an array of numbers and returns only the even values
  // The function should return an array containing only even numbers
 
// EX
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 4, 6, 8, 10]
  // [21, 26, 28, 29] -> [26, 28]
 
// Approach 1 - for loop
 
// Use
  // for statement
  // remainder/modulus operator
  //  Array.prototype.push()
 
 
    function evensOnly(arr) {
        // Step 1 -> declare  evenArray variable and set to empty array
        var evenArray = [];
        // Step 2 -> loop through entire array of numbers
        for (var i = 0; i < arr.length; i++) {
          // Loop Step 1 -> use modulus operator % in conditional to check if even number
          if (arr[i] % 2 === 0) {
          // Loop Step 2 -> if even, push into evenArray
            evenArray.push(arr[i]);
          }
        }
        // Step 3 -> Return `evenArray`
      return evenArray;
      }
       
      console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      console.log(evensOnly([21, 26, 28, 29]));