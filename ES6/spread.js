// spread operator 
// allows an expression to be expanded in places where multiple arguments, elements, variables are expected

// syntax is 3 dots 
//  ...

// arrays

let letters = ['a' , 'b' , 'c']
console.log(letters)
// [ 'a', 'b', 'c' ]

// with spread 
console.log(...letters)
// a b c

// arrays

var alpha = ['a' , 'b' , 'c']
var bet = ['d', 'e', 'f']
  
// a way to add two arrays together is the concat method 
var alphabet = alpha.concat(bet)
console.log(alphabet)
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

let alphabet2 = ['a','b','c',...bet]
console.log(alphabet)
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// functions 

let first = [1,2,3]
let second = [2,4,6]
function productOfThree(a,b,c) {
    let result = a*b*c
    console.log(result)
    
}
console.log(productOfThree(...first))
// 6
console.log(productOfThree(...second))
// 48
