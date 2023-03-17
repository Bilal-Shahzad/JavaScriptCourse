// create a function that takes an array of numbers 
// returns the largest number in array 

// EX
// [300 , 100, 600, 200] --> 600

function findLargestNum(arr){
    return Math.max(...arr)
}
console.log(findLargestNum([300 , 100, 600, 200]))
// 600

// my attempt

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  console.log(findMax([100,300,400,600]))
  //600