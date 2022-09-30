//strings are used to represent text 
//turn any primitvie datat type into a string by adding single or double quotes 


//practcie
//turn into valid strings 

// var animal = 'horse";
var animal = 'horse'
var animal = "horse"

// var answer = false;
var answer = 'false'
var answer = "false"

//single an double quotes within strings 

// var greeting1 = "Sam says, "hi."";
var greeting1 =  'Sam says, "hi."';

// var greeting2 = 'It's great to see you!'';
var greeting2 = "It's great to see you!";


//escape character within strings
// make a valid string with escape character 
//use \n two times to start a new line

// var greeting3 = 'Don't forget to grab the newspaper on your way out. You are going to be on the bus for a long time because of traffic.';
var greeting3 = "Don\'t forget to grab the newspaper\n on your way out. You are going to be\n on the bus for a long time because of traffic.";

//find length of greeting4 
// use toUpperCase() method to turn greeting4 into an upercase string

var greeting4 = "Don\'t forget to grab the newspaper\n on your way out. You are going to be\n on the bus for a long time because of traffic.";
greeting4 = greeting4.length
console.log(greeting4)

var greeting5 = "Don\'t forget to grab the newspaper\n on your way out. You are going to be\n on the bus for a long time because of traffic.";
var greeting5 = greeting5.toUpperCase()
console.log(greeting5)