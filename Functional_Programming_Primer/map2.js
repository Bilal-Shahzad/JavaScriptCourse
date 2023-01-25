// different ways to write map 



// Arrow function

// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

// Callback function

// map(callbackFn)
// map(callbackFn, thisArg)


// Inline callback function

// map(function (element) { /* … */ })
// map(function (element, index) { /* … */ })
// map(function (element, index, array) { /* … */ })
// map(function (element, index, array) { /* … */ }, thisArg)


// callbackFn
// a function to execute for each element in the array

// element
// current element being processed in the array.

// index
// the index of the current element being processed in the array

// array
// array map() was called upon

// thisArg
// alue to use as this when executing callbackFn