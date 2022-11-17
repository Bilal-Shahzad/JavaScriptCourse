//has two scopes global and local 
//variables declared outside of a function are global variables 
//varaibles declared inside of a function definition are local variables

var scope = 'public';
//scope is global meaning that we can access it anywhere in our code
var newScope = 'global variable'
function checkScope() {
    var scope = 'private';
    //this var scope is local 
    return [scope, newScope];
    //newScope; //is a global variable
    //checkScope(); //'local variable' , 'global variable'
}
console.log(checkScope())
console.log(scope) 
//if you dont declare the var keyword the variable is automatically a global varaible 
dog == 'oscar'
var dog = 'oscar'

//strict mode makes it easier to write secure javascript by changing previously accepted bad syntax into real erros 
'use strict';
dog = 'oscar'
x = 3.14 
console.log(dog)
console.log(x)

//practice 
//strict mode 
"use strict";
function sum(a = 1, b = 2) {
return a + b;
}
console.log(sum())

'use strict';
var number = 5; 
console.log(number)

//scope
// Local Scope

// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  // code here can NOT use carName

//   Global Scope

Giants();
// code here can use carName
function Giants() {
  playerNamw= "Saquon";
}