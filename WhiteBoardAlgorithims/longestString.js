// Challenge
  // Given a string of words return the length of the longest word(s)
 
// Examples
  // 'Hi, where is the airport?' -> 7
  // 'Thanks for stopping by!' -> 8
 
// Using Built in Functions & Regular Expressions & For Loop
 
// Tools
  // split() method - splits a string into an array
  // String.prototype.replace()

 
    function longestWordLength (str) {
        // Use regular expressions to remove all non-word characters with replace function
        var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
        //  Declare a variable longestWord and set it equal to `0`
      var longestWord = 0;
        //  Declare a variable wordArray and use split method to
          // create an array of words.
      var wordArray = stringWithoutSpecialCharacters.split(' ');
        //  Create a for loop to loop through wordArray
      for (var i = 0; i < wordArray.length; i++) {
          //  create a conditional to ask if the length of current
          // item in the array is > than longestWord
        if (wordArray[i].length > longestWord) {
          // S In the code block set longestWord to the length of current
          // item in being looped over in the array
          longestWord = wordArray[i].length;
        }
      }
          // return longestWord
      return longestWord;
    }
    console.log(longestWordLength('Hi, where is the airport?'));
    console.log(longestWordLength('Thanks for stopping by!'));

// My Ex
function findLongestWord(str) {
    //  Remove all non-word character
    str = str.replace(/[^\w\s]/gi, '');
    // Split the string into an array of words
    const words = str.split(' ');
    // Loop through the array and find the length of the longest word
    let longestLength = 0;
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
      if (wordLength > longestLength) {
        longestLength = wordLength;
      }
    }
    // Return the length of the longest word
    return longestLength;
  }
  