// palindromes 
// a word spelled the same forwards and backwards 

// EX
// racecar, mom, level
// case insensitive
// Racecar 
// dont mind any non alphabetical characters
// '' / - ()


// tools 

// regular expression
// sequence of characters that foram a search pattern. May be a single character, or more complicated pattern 
// used often with text search and replace operations 

// /pattern/modifiers;
//  /milk/i - regular expression
// milk - pattern to be used in search
// i - modifier (case senstive)
// use regular expressions to deal with anything odd in strings 
// ,._-() characters
// need a regular expression to match any of the characters that fit the pattern


// string.replace 
// returns a new string with some or all matches of a pattern replaced by a replacement
// pattern can be string or regex 
// the replacement string or a function to be called for each match 

// str.replace(regexp | substr, newSubStr | function)

var milkAdd = 'Drink more milk '
var milkAlt = milkAdd.replace('milk', 'silk')
console.log(milkAlt)
// Drink more silk 
var milkSub = milkAdd.replace(/milk/, 'soy milk')
console.log(milkSub)
// Drink more soy milk 


// psuedocode 
// declare a function to check wheter a string is a palindrome 
// give parameter that will give string arugment that will lead into the codebook 
// get rid of any characters that arent a through Z in the alphabet 
// use a regular expression pattern and modifier to catch them all and replace them 
// with string value that will essentially delete them so that we can get a fair and equal comparison 
// make sure all of the letters are upper or lower case 
// reverse the string with the split method,reversed method, and join method 
// call function and pass a string as an argument 

// fucntion palindrom (string parameter) 
//     code block 
//         use regular expression and replace method to get rid off all undesired characters for comparision 
//         reverse the string and retunrn the value whethe the string is equal to reversed string
//      call function with a string argument 


// my solution 

function palindrom(string) {
    // take string and remove all non-word characters and turn string into lower case asuuming that its case insensitive
    string = string.replace(/\W/g, '').toLowerCase()
    // put in parenthesis to get a boolean value split it into an array reverse the array, join into a string 
    return (string == string.split('').reverse().join(''))
}
console.log(palindrom('racecar'))
// true 
console.log(palindrom('Racecar'))
// true 
console.log(palindrom('race-car'))
// true