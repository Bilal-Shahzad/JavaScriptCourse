i = 2 
// i ++ is post incremented ( after the for loop runs)
console.log(i++)
j = 2
// ++j
console.log(++j)
// ++i is incremtned with 
// i + 1



/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  use loops 
// for loop 
// use .sort()
var containsDuplicate = function(nums) {
    nums.sort()
    for(let i = 0; i < nums.length-1; ++i){
        if(nums[i] === nums[i+1]){
            return true 
        }
    }
    return false 
};