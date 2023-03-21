function reverseString(str) {
    // convert string to array, reverse array, and convert back to string
    return str.split("").reverse().join("");
  }
  
  // example usage
  console.log(reverseString("car")); // outputs: "rac"
  