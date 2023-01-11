// an expression is a valid unit of code that resolves to a value


// Assigning to properties
// If an expression evaluates to an object then the left hand side of an assignment expression may make assignments to properties of that expression
// EX
const obj = {};
obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.


// Destructuring
//  destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals
const foo = ['one', 'two', 'three'];
// without destructuring
const one   = foo[0];
const two   = foo[1];
const three = foo[2];
// with destructuring
const [one, two, three] = foo;
console.log(foo)


// Testing a regex
let testString = "My test string";
let testRegex = /string/;
testRegex.test(testString);

// Ignoring case
// Use the i flag for case insensitivity
const caseInsensitiveRegex = /ignore case/i;
const testString = 'We use the i flag to iGnOrE CasE';
caseInsensitiveRegex.test(testString); 
