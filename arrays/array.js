//arrays are list like objects that store sequences of values asa written list between square brackets and seperated by commas

//instead of curly braces we use square brackets

var testScores = [];

//an array is a question of values 
var testScores2 = [72,84,68,92,74]
//what is is in the brackets are elements, they have a numeric postion in the array known as index
//array index that are property names that happen to be integers
console.log(testScores2)

//arrays dont start at one but at 0 
//index [0], [1], [2]

var homeRuns = [8,12,34,43,28]
//access 34

console.log(homeRuns[2])


var fishTank= {
    material: 'glass',
    gallson: 10,
    fishType: 'gold fish',
    hasWater: true
}
var fishTank = ['glass', 10, 'gold fish' , true];
console.log(fishTank[0])

var testScores3 = [72,84,68,92,74]
console.log('hits here' ,testScores3.length)