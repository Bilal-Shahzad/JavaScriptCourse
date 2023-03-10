function repeatStringNumTimes(string, times) {
    // have to create an empty string that will have whatever is in the string 
    var repeatedString = "";
    // use while loop with as the condition to check
    while (times > 0) { // as long as times is greater than 0 it is executed 
      repeatedString += string 
      times-- //same as times = times - 
    }
    // return the repeated string
    return repeatedString;
  }
  console.log(repeatStringNumTimes("abc", 3))
//   abcabcabc