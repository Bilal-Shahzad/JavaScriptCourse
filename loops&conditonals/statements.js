//loops evaluate a condition, it is a true expression that runs a code block 
//it repeats it until its false 

//condition execture or skip statments depending on value of expression 

var equals = '8' == 8;
console.log(equals) // true

var notEquals = '8' === 8;
console.log(notEquals) //false


//boolean 
//falsey value translates false when evaluated in a boolean context-
// false, 0, "" . null , undefined, NaN

// truthy value that translates to true when evaluated in boolean context
//everything else


//logical operators 

// and && ,gonna test for more than one condition
var equation = ((5>4) && (8>3))
console.log(equation) //true

// or ||, looking at least one condition

//if 
// that if statement is fundemental control statement 
//ex

// if (5 >6) {
//     if true run code here 
//     console.log("true conditoin")
//     if false run this code block
// }
// no code ran

var testScore = [95,89,90,42];
// if (testScore > 90) {
//     console.log ('Congrats on passing');
// } else {
//     console.log('you failed')
// }
console.log(testScore[0,1], 'line 46') 

function check(testScore) {
    if (testScore[0] > 90) {
        console.log ('Congrats on passing');
          
    } else {
        console.log('you failed')
    } 
    if (testScore[1] > 90) {
        console.log ('Congrats on passing');
          
    } else {
        console.log('you failed')
    } 
}
console.log(check(testScore, 'line 57'))
