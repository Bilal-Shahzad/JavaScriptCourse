// this is defined by creation context 
// in object this is set to the object method is called on 
// bind 
// helps this find context 
// passes object as argument to bind method to find desired context 

// practice 

var person1 = {
    name : 'Alex'
};

var person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name
};

console.log(namer())//undefined
// arent getting a name because this doesnt have a context 
// it isnt naming either person 1 or 2 


// challenge

// use bind method two times on  namer function that  created the first time 
//  and the second time return the name alexis 

console.log(namer.bind(person1)());
//alex 

console.log(namer.bind(person2)());
//alexis 


// practice 

var number = {
    x:24,
    y:22
};

var count = function () {
    console.log(this.x + this.y)

}
console.log(count()) // undefined 

//challenge 
//use the bind method to bind the number object to our count function expression 

var boundFunc = count.bind(number);
console.log(boundFunc()) //46 