// sorting alphabetically 
function alphabeticalOrder(str) {
    let arr = str.split(''); // we need each character in the string to be treated as its own seperate thing
    arr.sort(); // next step is to point each value in a sorting order
    return arr.join(''); // use the join method on arr to combine the elements to the new string 

  }
console.log(alphabeticalOrder('hello'))
// ehllo