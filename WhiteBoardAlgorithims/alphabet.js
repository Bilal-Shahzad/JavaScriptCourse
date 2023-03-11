// Alphabetical Order
 
// Challenge
  // Create a function that takes a string and returns a string with its letters
  // in alphabetical order.
 
// Examples
  // "hello" ➞ "olleh"
  // "goobye" ➞ "eyboog"
  // "now" ➞ "won"
  // "javascript" ➞ "aacijprstv"
 
// if statement / for loop
 
// Tools
  // String.prototype.split()
  // Array.prototype.sort()
  // Array.prototype.join()
 
    function alphaOrder(str) {
 
        //  split the string into an array
        var strToArr = str.split('');
     
        //  sort the letters in the array
        var revArr = strToArr.sort();
     
        // join the array back into a string
        var sortedStr = revArr.join('');
     
        // sreturn the alphabetized array
        return sortedStr;
     
        // all in one step
        return str.split('').sort().join('');
     
      }
      console.log(alphaOrder("hello"));
      console.log(alphaOrder("goodbye"));

    //   my solution
    function alphabeticalOrder(str) {
        let arr = str.split(''); // convert  string into  array of characters
        arr.sort(); // sort array in alphabetical order
        return arr.join(''); // join  array elements back into  string
      }
      
      console.log(alphabeticalOrder("hello")); // "ehllo"
      console.log(alphabeticalOrder("goobye")); // "begooxy"
      