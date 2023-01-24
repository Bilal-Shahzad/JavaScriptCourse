// pure functions 
// a function is pure if, given the same input, it will always produce the same output

// impure function 
// math.random()
// you will get a different result every time you input it 


// map()
// creates a new array with the reults of calling a provided function n every element of an array 


var forecast = [
    {day: 'Monday' , sun: true, humidity: 10},
    {day: 'Tuedsay' , sun: false, humidity: 100},
    {day: 'Wednesday' , sun: false, humidity: 100},
    {day: 'Thursday' , sun: true, humidity: 25},
    {day: 'Friday' , sun: false, humidity: 100},
    {day: 'Saturday' , sun: true, humidity: 15},
    {day: 'Sunday' , sun: false, humidity: 100}

];

// for loop 
var humid = [];
for (var i = 0; i <forecast.length; i++) {
    humid.push(forecast[i].humidity);
}
// for loop 
// statement 1 is the initlization of the counter var i = 0
// statement 2 is the test condition that the counter is less than the length of forecast 
// statment 3 is the update of a counter that we will use once we have gone through a code 
// if the test condition is true the code block we simply name the new array that was created humid 
// then do the push method on this array bc want to add values into our new array 

console.log(humid)
// [ 10, 100, 100, 25, 100,  15, 100]

//using map 

var humid2 = forecast.map(function (wetness) {
return wetness.humidity    
})
// map knows that its going to create an array var human as a sign the value of our forecast array 
// will then attach the map method 
// will pass a function to map 
// it is a callback function that will be passed each element in our forecast array 
// it will give the function an argument of the current valye for each element to use as it goes through each element in the array 
// since the word humidity is already used for a property in forecast array and humid for the name of the new array, use to word wetness to capture how saturated air is 
// could also use x, it doesnt matter as long it matches what were going to use in code block that is entered

console.log(humid2 , "humid2")
// [ 10, 100, 100, 25, 100,  15, 100]


// EX 

// want to multiply all numbers by 3 
var numbers = [5,10,15,20,25];
var triples = numbers.map(function(num) {
    return num*3;
})
// map passes all elements in a transformed state 
console.log(triples)
// [ 15, 30, 45, 60, 75 ]