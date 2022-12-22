
// define a variable called username thats set to value "what is your name"
var userName = prompt('What is your name');

// Below this variable, create a conditional to check if a userName exists. If so, log to the console with a template literal "Hello USER" where USER is the value of userName.  If a userName does not exist then log a message "Hello!"

if (userName) {
  console.log('Hello, ' + userName + '.');
}
 console.log('Hello!');

//  Create a variable named userQuestion. Store to it the value a prompt with the question "Please ask a question!". The value of the variable should now be a string that is the question the user wants to ask the Magic Eight Ball

var userQuestion = prompt('Please provide a questions');
var randomNumber = Math.floor(Math.random() * 7);
// Write a console.log() for the userQuestion, stating what was asked. 
console.log(randomNumber);
var eightBall = '';


//  We need to create a control flow that takes in the randomNumber
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log('User question: ' + userQuestion); 
console.log('The eight ball answer: ' + eightBall);
