//evaluate conditions 
//like a path
//==,===
//truthy and falsey
//&& , ||
//if, else, else if 

//change the code to the following expressions to make them true 
// (5>7)
// (7 === '7')
// (7 === 'seven')
// (false)
var greaterThan = (5 < 7);
console.log(greaterThan)

var seven = (7 == "7")
console.log(seven)

var seven2 = (7 !== 'seven')
console.log(seven2)

var statement = (true)
console.log(statement)

//use logical operators && and || to show four different code examples for each 

var and = ((5 > 3) && (10 > 2));
console.log(and)

var and2 = ((5 < 3) && (10 > 2));
console.log(and2) 

var and3 = ((5 < 3) && (10 < 2));
console.log(and3)

var and4 = ((5 > 3) && (10 < 2));
console.log(and4) 

var and5 = ((5 > 3) || (10 > 2));
console.log(and5)

var and6 = ((5 < 3) || (10 > 2));
console.log(and6) 

var and7 = ((5 < 3) || (10 < 2));
console.log(and7)

var and8 = ((5 > 3) || (10 < 2));
console.log(and8) 

//create an if else, else if statemnt 
//use at least on if, two else if and one else statement 
//use at least one logical operator 

var temp = 74;
var rainy = true;

if (temp > 90) {
    console.log("I am going swimming");
} else if ( temp > 80) {
    console.log("Time for a run");
} else if ((temp > 70) && (rainy)) {
    console.log("I am going to grab my umbrella");
} else {
    console.log ( 'I\'m staying home');
}