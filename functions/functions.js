//let you group a series of statements together to perform a specific taks. If different parts of a script repeat the same task you can reuse the function rathe than repeating the same set of statements

//function declaration
function morningGreeting(){
    return 'Good morning, its time to get up';
}
console.log(morningGreeting());
//fucntion is a keyword lik var, it is a keyword reserved word fucntion
//lets javascript now that we are making a function 

//morningGreeting is a function name it is optional to have

//() are parameters and will be executed when the fucntion is called or invoked they are optional

//{} are the indicator of the code block or function body 
//content between {} is the function body 


//argument parameters 

function greetPresident(firstName, lastName){
    return 'Hello' + firstName + '' + lastName+ '!';
}
console.log(greetPresident('Abraham','Lincoln'))
//firstName, and lastName are the parameters -functions declaration
//'Abraham','Lincoln' are arguments -function Invocation