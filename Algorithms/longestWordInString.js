// algorithm
// lot like a recipe and tells your computer precisely what steps to take to solve a problem or reach a goal

// given a string find the length of the longest word in the string

// use for loop, if statement, string,split()

// string.split()
// will split a string into an array of substrings

var car = "honda accord";
console.log(car.split());
// [ 'honda accord' ]
console.log(car.split(""));
// [ 'h', 'o', 'n', 'd',  'a', ' ', 'a', 'c','c', 'o', 'r', 'd']
console.log(car.split(""));
// ['honda' , 'civic' ]

// psuedo code
// declare a function
// will pass our string of words into as an argument
// use string method to split array to array of words
// create loop that will loop through array that will turned into a string
// three statemnts that will initialize, counter establish or test condition
// go into code block which will have a condtional if statemnt
// compare current index word length to the variable declared and variable assigned
// if it is true, finisehd iterating through array, will return the value of tehe varaible showing the greatest length

// declare function (params)
//     code block
//     use string method to split string in an array of words. store variable
//     declare a variable to store the largest value as it goes through array
//     create loop through array
//     create conditional statment comparing words in array
//     true condions enter into code block assingning new value varaibel string largest words
//     when done iterating through array, return largest value
//     invoke function (string argument)

// my solution

function maxWord(string) {
  // declare variable and array
  var words = string.split(" ");
  // declare varaible for longest word
  var biggestWord = 0;
  // create loop
  for (var i = 0; i < words.length; i++) {
    // condiiontal statment
    if (words[i].length > biggestWord) {
      biggestWord = words[i].length;
    }
  }
  return biggestWord;
}
console.log(maxWord("My favorite day is Sunday"));
// 8
