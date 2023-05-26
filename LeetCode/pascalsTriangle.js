/**
// add a constant of 1 at the start and the beggining of the array 

// between the 1s add the sum of the same I in the previous array 

 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [[1]]
    for (let i = 1; i < numRows; i++){
        var newArr = [1]
        for (let j =1; j < i; j++) {
            const value1 = triangle[i - 1][j - 1];
            const value2 = triangle[i - 1][j];
            newArr.push(value1 + value2);
            console.log(`Adding ${value1} + ${value2} = ${value1 + value2}`);        
        }
        newArr.push(1)
        triangle.push(newArr)

        if (i === 1) {
            console.log("First");
            console.log(newArr);
          } else if (i === 2) {
            console.log("Second");
            console.log(newArr);
          } else if (i === 3) {
            console.log("Third");
            console.log(newArr);
          }
    }
    return triangle 
};

const numRows = 7;
const triangle = generate(numRows);
console.log("Here");
console.log(triangle[0]);
console.log("First");
console.log(triangle[1]);
console.log("Second");
console.log(triangle[2]);
console.log("Third");
console.log(triangle[3]);