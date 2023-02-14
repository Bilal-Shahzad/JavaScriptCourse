// Octal literals
// To represent an octal literal in ES5 you use the zero prefix (0) followed by a sequence of octal digit
// EX
let a = 051;
console.log(a); 
// 41 

// If the octal literal contains a number that is out of range
// JavaScript ignores the leading 0 and treats the octal literal as a decimal
// let b = 058; // invalid octal
// console.log(b); // 58


// ES6
// allows you to specify the octal literal by using the prefix 0o followed by a sequence of octal digits from 0 through 7
let c = 0o51;
console.log(c); 
// 41 

// If you use an invalid number in the octal literal
// JavaScript will throw a SyntaxError
// let d = 0o58;
// console.log(d); // SyntaxError


