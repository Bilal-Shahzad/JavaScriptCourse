function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number" && item >= 0);
}
console.log(filterNumbers([1,2,3,4,'a',"b", "c", "d"]))
// [ 1, 2, 3, 4 ]