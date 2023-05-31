let fruits = [
  "apple",
  "banana",
  "cherry",
  "watermelon",
  "blueberry",
  "blackberry",
];
console.log("original: ", fruits);

let newArr = ["grape", "cherry"];
console.log("newArr: ", newArr);
console.log("push: ", fruits.push("mango"));
// : Adds one or more elements to the end of an array and returns the new length of the array
console.log("after push: ", fruits);

console.log("pop: ", fruits.pop());
// : Removes the last element from an array and returns it.
console.log(" after pop: ", fruits);

console.log("shift: ", fruits.shift());
// : Removes the first element from an array and returns it.
console.log("after shift: ", fruits);

console.log("unshift: ", fruits.unshift("kiwi"));
// : Adds one or more elements to the beginning of an array and returns the new length of the array.
console.log("after unshift: ", fruits);

console.log("splice: ", fruits.splice(0, 2));
// : Adds or removes elements from an array.
console.log("after splice: ", fruits);

console.log("slice: ", fruits.slice(0, 2));
// : Returns a shallow copy of a portion of an array into a new array object.
console.log("after slice: ", fruits);

console.log("concat", fruits.concat(newArr));
// : Returns a new array that is the concatenation of two or more arrays.
console.log("after concat: ", fruits);


console.log(fruits.join(","));
// : Joins all elements of an array into a string.
console.log("after join: ", fruits);


console.log("indexOf apple: ", fruits.indexOf("apple"));
console.log("indexOf cherry : ", fruits.indexOf("cherry"));
console.log("indexOf blueberry: ", fruits.indexOf("blueberry"));

// : Returns the first index at which a given element can be found in the array, or -1 if it is not present.


console.log("\n", "forEach: ");
fruits.forEach((elem) => {
  console.log(elem);
});
// : Executes a provided function once for each array element.