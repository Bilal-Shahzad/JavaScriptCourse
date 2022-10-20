
//literal notation
// You define and create a JavaScript object with an object literal
// In real life, a car is an object.
// A car has properties like weight and color and methods like start and stop
// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.

var car = { 
    wheels: 4,
    color: 'silver',
    mpg: 34,
    engine: 1,
    gallons: 12
};
//property car, value 4
//property color, property value silver


// dot notation
var vehichle = {};
object.property = value;
car.wheels = 4;
car.color = 'red';
car.pg = 34;
car.engine = 1;
car.gallons = 12;
console.log(vehichle);


//bracket notation 
var car2 = {};
object['property'] = value;
car['wheels']= 4;
car ['color'] = 'red';
car['mpg']= 34;
car['engine']=1;
car['gallons']=12;
console.log(car2)



//empty object 


var car = { 
    wheels: null,
    color: null,
    mpg: null,
    engine: null,
    gallons: null
};

// or 

var car = {}

//or 


var car = { 
    wheels: '',
    color: '',
    mpg: '',
    engine: '',
    gallons: ''
};