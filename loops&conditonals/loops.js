// while, do/while, for 
//expression would either go true or false 

// while loop 
//basic syntax 
// while (expression) {
// //statement to execute 
// }

var score = 0;
while (score < 5) {
    console.log(score);
    score++;
}
//conitious increment score until it gets below to 5
//score is less than 5 
//if it is false it will disregard the code 
// if it is true it 


//do/while
// do {
//     //code block
// } while (expression);

var value = 5;
do {
    console.log(value)
    value++;
    //this value below evaluates the false, but that was after we already logged the value and increased it by one 
} while (value < 3);
    //5

//For
//loops will have a variable counter of some kind 
//it will be intialized before the loop starts and will be tested after each iteration or trip through 
//three parts 
//statement one is exectued before the loop starts 
// statement two defines the condition for running the loop either true or false
//statement three is executed each time after the loop has been executed

// for (intilization; CSSConditionRule;update) {
// //code block to be ran    
// }

for (var i = 0; i < 10; i++); {
console.log("My luck number is"  +i+  '!')
}

//while consistentily runs it until it hits the number before
var i = 0;
while (i <10) {
    console.log('My favorite number is' +i+ '!');
    i++;
}

//arrays

var zooName = ['Lion', 'Tiger', 'Bear']
var arrayLength = console.log(zooName.length)

for (i = 0;i < arrayLength; i++) {
    //use bracket for the 'i' since we are calling from it 
    console.log('My favorite zoo anumal is the' + zooName[i] +'!');
}        
