// run a while loop 5x's
// counter, while keyword, expression, code block, update value


var i = 0;

while (i < 5) {
    console.log("THis counter has run " + (i+1) + ' times');
    i++;
}

//do/while 

//create one example that runs with a false expression 

var counter = 5;

do {
    console.log('loop ran even with false expression');
    counter++;
} while (counter < 5);

//create an array number values 
//loop through that array witha for loop
//run each element of array through an if, else, else if clause

var YPC = [3.3, 3.2, 2.6, 2.9, 3, 3.1 ,2.5, 2.4 ,2.1]

for (i = 0; i < YPC.length; i++) {
    if (YPC[i] > 3) {
        console.log ('Good run')

    } else if (YPC > 2.5) {
        console.log("decent run")
    }
    else {
        console.log('do better')
    }
}