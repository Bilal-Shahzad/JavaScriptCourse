// const 
// declaring const will create a value that is a read-only reference
// it can be either global or local to the function or block in wich it is declared as you cant change the reference or literal that is assigned to it 


// const 
// block scoped
// temporal dead zone 
// read only 

// let 
// blocked scoped 
// temporal dead zone 
// reassign value 

// var
// function scoped
// reasssign value 


// with var 

var API_KEY = 'abcdefghijklmnop'
console.log(API_KEY)
// abcdefghijklmnop

var API_KEY = 'qrstuvwxyz'
console.log(API_KEY)
// qrstuvwxyz

// with const

const APJ_KEY = 'abcdefghijklmnop'
console.log(APJ_KEY)
// abcdefghijklmnop
const APJ_KEY = 'qrstuvwxyz'
console.log(APJ_KEY)
// Error

let a = 2 
console.log(a)
// 2
let a = 3
console.log(a)
// error 
// temporal dead zone 

