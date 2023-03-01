// The forEach() method executes a provided function once for each array element

// syntax

// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg


// Inline callback function
// forEach(function (element) { /* … */ })
// forEach(function (element, index) { /* … */ })
// forEach(function (element, index, array) { /* … */ })
// forEach(function (element, index, array) { /* … */ }, thisArg)

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});
console.log(sum);
//0

// sparse arrays 
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});
console.log({ numCallbackRuns });
// element: 3
// element: 7 