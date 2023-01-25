// // reduce()
// // list transformation 
// // applies a function against an accumulator and each value of the array (from left to right ) reduce it to a single value 

// array.reduce(function(accumulator, currentValue, currentINdex, arr)intialValue)

// accumulator 
// is required, result of reduction so far 

// currentValue
// current value of index

// optional 
// currentIndex, arr, intialValue

// var numbers = [1,2,3,4,]
// numbers.reduce(function(acc, curr, idx, arr ){
//     reutn acc + curr;
// }5);

var multArr = [[0,1],[2,3], [4,5]]
multArr.reduce(function(acc,curr,idx,arr){
    return acc.concat(curr);
}, [2-1]);
console.log(multArr )
// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]