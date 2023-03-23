function reverseString(str) {
    // Initialize an empty string to store the reversed string
    var reversedStr = '';
    
    // Loop through each character in the input string, starting from the end
    for (var i = str.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
      reversedStr += str[i];
    }
    
    // Return the reversed string
    return reversedStr;
  }
  
  console.log(reverseString('car')); //  'rac'
  