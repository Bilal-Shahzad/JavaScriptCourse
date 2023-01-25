var homeruns = [
    {batter: 12},
    {batter: 21},
    {batter: 28},
    {batter: 42},
    {batter: 31},
    {batter: 22},
    {batter: 17},
    {batter: 16},
    {batter: 5}
];
var totalHomers = homeruns.reduce(function(a,b) {
    console.log('accumalative' , a , 'current' , b);

},0);
console.log(totalHomers)
// accumalative 0 current { batter: 12 }
// accumalative undefined current { batter: 21 }
// accumalative undefined current { batter: 28 }
// accumalative undefined current { batter: 42 }
// accumalative undefined current { batter: 31 }
// accumalative undefined current { batter: 22 }
// accumalative undefined current { batter: 17 }
// accumalative undefined current { batter: 16 }
// accumalative undefined current { batter: 5 }




// challenge 
// create an array of 5 elements 
// find the sum, product and largest value 

// my solution
var numbers = [5,10,15,20,25]
numbers.reduce(function newNumbers(x,y) {
    console.log(x, y);
    return x + y;
});

console.log(newNumbers)
// [ 5, 10, 15, 20, 25 ]