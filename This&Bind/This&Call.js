// call method 
// call() calls a function with given "this" value and arguments provided indicidually 


//syntax 
// fun.call(object, arg1, arg2, ...)

// EX 
// the value of an obkect has one property value pair of the property and the value of the number

var obj = {num: 2}
var addToThis = function (a,b,c) {
    return this.num + a + b + c;
};
//this num doesnt have context
// that is where we use the call method 

console.log(addToThis.call(obj, 1, 2, 3)) //8 
// to the function , have to attach the call method 
// into of tha method is pased to the first parameter the objext we want to use as the context of this keyword
// this case "this" will now have the context of obj that is declared earlier as its context


// EX 


var person1 = {
    firstName: "john", 
    lastName: "doe"
};


var person2 = {
    firstName: "jane", 
    lastName: "doe"
};

function hello (greeting) {
    console.log(greeting + '' + this.firstName + '' + this.lastName);

}
console.log(hello) // undefined 

hello.call(person1,  'hello', '')
console.log(hello) //'Hello John Doe'

hello.call(person2,  'hello', '')
console.log(hello)
