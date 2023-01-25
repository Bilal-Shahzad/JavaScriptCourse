//  reduce() executes a reducer function for array element
// returns a single value
//  does not execute the function for empty array elements
// does not change the original array


function sum(arr) {
    var reducer = (sum, val) => sum + val;
    var initialValue = 0;
    return arr.reduce(reducer, initialValue);
  }
  console.log(sum (1,3,5,7)) //16

//   Find the Maximum Value

var dates = [
    '2017/06/01',
    '2018/06/01',
    '2022/09/01', 
    '2020/09/01'
  ].map(v => new Date(v));
  var maxDate = dates.reduce((max, d) => d > max ? d : max, dates[0]);
// use reduce() and make reducer return the most recent date found so far
console.log(maxDate)