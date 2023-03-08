// Repeat a String
 
// Challenge
  // write a function that takes two arguments, a string and a number
  // The function should return a single string that contains the original string
  // repeated the number of times specified by the second argument
  // or an empty string if the number is negative
 
// EX
  // 'car', 4 -> 'carcarcarcar'
  // 'bar', 3 -> 'barbarbar'
 
// for loop
 
// Tools
  // for loop
  // arithmetic operators
 
    function repeatString(str, num) {
        // Declare variable finalString and set it to an empty string
        var finalString = '';
        // If statement conditional to check if number is 0 or less
        if (num <= 0) {
          // In the code block return finalStr
          return finalStr;
      }
        // Step 4 -> Create a for loop that runs num times.
        // In code block add str to finalString for each number we iterate through
        for (var i = 1; i <= num; i++) {
          finalString += str;
          console.log("value of finalString at loop", i + " " + finalString);
        }
        // Step 5 -> Return `finalString`
        return finalString;
      }
       
      // tests
      console.log(repeatString('car', 4));
      console.log(repeatString('bar', 3));
      