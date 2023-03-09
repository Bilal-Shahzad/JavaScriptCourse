// Repeat a String
 
// Challenge
  // write a function that takes two arguments, a string and a number.
  // The function should return a single string that contains the original string, repeated the number of times specified by the second argument, or an empty string if the number is negative.
 
// EX
  // 'car', 4 -> 'carcarcarcar'
  // 'bar', 3 -> 'barbarbar'
 
// while loop
 
// Tools
  // while loop
  // arithmetic operators
 
    function repeatString(str, num) {
        //Declare variable finalString and set it to an empty string
        var finalString = '';
   
        // If statement conditional to check if number is 0 or less
        if (num <= 0) {
          // In the code block return finalStr
          return finalStr;
        }
   
        //  Set the while loop with (num > 0) as the condition to check
        while (num > 0) {
          //  In code block add value of str to finalString
          finalString += str;
          // In code block decrement `num`
          num--;
        }
        //  Return finalString
        return finalString;
      }
   
      // tests
      console.log(repeatString('car', 4));
      console.log(repeatString('bar', 3));