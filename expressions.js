// Testing a regex
// A regular expression or regex is used to match parts of a string
// object that descrbes a pattern of characters, used to match a character combining strings 

//syntax 
//regex
// /pattern[modifiers;
//first slash is a start of the expression
//second foward slash is the end of the regular expression
//i is the modifier, means it modifies the search to be case insensitive for upper and lower case strings
var alphabet = /ou/i;
// the O and U is the pattern we match

//simple pattern /ou/
// they are constructed of characters for which you want to find a direct match


var alphabet =
 'abcdefghijklmnopqrstuvwxyz';
 var repeat = 'abc abc abc abc'

var regEx = /abc/i;

//match method 
// declare a value called regExAplhabet and assing it to the value of the alphabet varaible
var regExAplhabet = alphabet.match(regEx).length
console.log(regExAplhabet)

//multiple 
var guess1 = 'steve'; guess1.match(regExAnswer)//wont match 
var guess2 = 'joe'; guess2.match(regExAnswer)//wont match 
var guess3 = 'mike'; guess3.match(regExAnswer)//wont match 
var guess4 = 'rob'; guess4.match(regExAnswer)//will match 
var guess5 = 'adam'; guess5.match(regExAnswer)//will match 
var regExAnswer = /rob|adam/i;
//put a piper (|) between the two so it can be added as a modifier


//search 
var trip = 'take the car '
var regEx1 = /car/;
var regEx2 = /plane/;
var tripCar = trip.search(regEx1)
var tripPlane = trip.search(regEx2)


// brackets 
//brackets are used to find a range of characters
var sport1 = 'baseball';
var sport2 = 'football';
var sport3 = 'soccer';
var regEx = /[rstlne]/g;
// g stands for global 
sport1.match(regEx); //['s','e','l','l']
sport2.match(regEx); // ['t','l',l']
sport3.match(regEx); // ['s','e','r']


//my practice 
let testString = "My test string";
let testRegex = /string/;
testRegex.test(testString);

// Testing multiple patterns
const regex = /yes|no|maybe/;

