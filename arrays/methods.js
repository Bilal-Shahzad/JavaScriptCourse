//pop push, shift and unshift 
// () give away tgat they are methods 


var testScores = [ 72,84,68,92];
console.log(testScores.pop())
//pop method will return the last value but it will destroy it from the original array
console.log(testScores)
//create a variable to store the value that pops off

var lastTestScore = testScores.pop();
console.log(lastTestScore)

testScores.push(74);
console.log(testScores)

testScores.push(32,96,84);
console.log(testScores)

testScores.shift();
console.log(testScores)
//returns a value of an element then deletes it from the original array 

testScores.unshift(77,83);
console.log(testScores)
// adds one or more elements to the beginning of an array and returns the new length of the array