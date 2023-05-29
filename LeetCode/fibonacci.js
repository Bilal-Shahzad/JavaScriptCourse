// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,


/**
 * @param {number} n
 * @return {number}
 */
//  if statments 
//  f0  = 0 
//  f1 = 1


// store using an array
// call empty array using for loop  

var fib = function(n) {
    var sum = [0,1]
    if(n == 0) return 0;
    if(n == 1) return 1;

    for(let i = 2; i < n; i++){
        sum[i] = sum[i-1] + sum[i-2]

    }
    return sum[n-1] + sum[n-2]
};
