// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// create an objet to hold letters from s
// iterate through each letter of s 
// iterate through each letter of t 
// if the NewMap has the current letter we want to decrement 
// delete a letter if it is wrrong 
// otherwise decrement the letter count
// invalid characters need to return 0 

var isAnagram = function(s, t) {

    var NewMap = new Map()

    for  (let letter of s) {
        NewMap.set( letter, (NewMap.get(letter) | 0) +1)
    }
    
    for (let currentLetter of t) {
        if ( NewMap.has( currentLetter )){
            let letterCount = NewMap.get (currentLetter)

        if (letterCount === 1)
            NewMap.delete (currentLetter)

        else 
            NewMap.set(currentLetter, letterCount - 1)
        }

        else 
            return false;
    }
    return ( NewMap.size === 0)
};
