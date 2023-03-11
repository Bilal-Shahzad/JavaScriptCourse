// Given a string of words return the length of the longest word(s)
function findLongestWordLength(str) {
// defining a function called findLongestWodLength which takes a string as its argument, the goal of the function is to reutrn the length of longest words in the string
  // split() method - splits a string into an array
  // String.prototype.replace()
  let words = str.split(' ');
// split method is used tnput string to convert it into an array of its own words.
let maxLength = 0;
for (let i = 0; i < words.length; i++) {
// initalize variable called max length to 0. it will hold the length in longest words
// for loop to iterate through each element of each word of array
// using let statement to create a loop called i which is set to 0
// loop will continue as long i is less thant the words of the array
let word = words[i].replace(/[^a-zA-Z]/g, '');
// the replace method is called
// using expressiion (/[^a-zA-Z]/g) to replace words that arent apart of the alphabet characters with an empty string
if (word.length > maxLength) {
    maxLength = word.length;
    // checking if the length of word is greater than max length if it is update to length of current word
  }
}
return maxLength;
// return maxlength
}
console.log(findLongestWordLength("What is the New York Giants Score?"));
// 5 
