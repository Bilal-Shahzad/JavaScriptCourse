// Reverse a String
 
// Challenge
  // Reverse the provided string.
  // You may need to turn the string into an array before you can reverse it.
  // Your result must be a string.
 
// Examples
  // 'car' -> 'rac'
  // 'bar' -> 'rab'
 
// Tools
// spread operator

    function revString(str) {
 
        // step 1 -> create a `reverseString` variable with an empty placeholder string.
          // You will return `reverseString` after you have looped through it.
        return  [...str].reverse().join('');
        }
        console.log(revString('car'));
        console.log(revString('bar'));

        // my solution 
        function reverseString(str) {
            let arr = str.split('');
            arr.reverse();
            let reversedStr = arr.join('');
            return reversedStr;
          }
          
          console.log(reverseString('car')); // 'rac'
          console.log(reverseString('bar')); // 'rab'
          