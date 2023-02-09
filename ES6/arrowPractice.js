// syntax 
// let func = function(arg1, arg2, ..., argN) {
//     return expression;
//   };



// EX

let sum = (a, b) => a + b;
console.log( sum(1, 2) )
// 3 

// shorter form of
// let sum = function(a, b) {
//   return a + b;
// };

// Arrow Function with No Argument
let greet = () => console.log('Hello');
console.log(greet())
// Hello 

// Arrow Function with One Argument
let greetting = x => console.log(x);
console.log(greetting('Hi'))
// Hi

// Arrow Function as an Expression

let age = 5;

let welcome = (age > 18) ?
  () => console.log('Baby') :
  () => console.log('Adult')

console.log(welcome(42));
// Adult

// Multiline Arrow Functions
let add = (a, b) => {
    let result = a + b
    return result
}

let result1 = add(5,7)
console.log(result1)
// 12



// this with Arrow Function
// Inside a regular function

function Person() {
    this.name = 'Bilal',
    this.age = 20,
    this.sayName = function () {
        // this is accessible
        console.log(this.age)
        function innerFunc() {
            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}
let x = new Person();
// 20
// undefined 
// Window{}