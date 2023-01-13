// the value of this is determined by how a functionn is called. It cant be set by assignement during exectuon
// Bind creats a new function that will have "this" set to the first parameter passed to bind()

let cat = {};

cat = {
    sound: 'meow',
    speak: function() {
        console.log(this.sound , 'hit here');
    }
};
// this invokes the speak method we can gain access to this by naming the object and the property that contains the method then invoking the function with parathesses 
cat.speak();
// result we get the value of 'meow'

var speakFunction = cat.speak;
console.log(speakFunction)//undefined
// assigned value is fucntion not method
// when assigned cat.speak to speak function the variable lost the object
// what happens is that value assinged the sepak function of cat.speak is no longer a method 
// a mehtod is a function attached to an object 

// EX
// When JS interpreter sees when assigned cat.speak to the variavble speak 

var speakFunction = function () {
    console.log(this.sound);
    // looking at this.sound there is no objext to connect it with
    // it has no context
};
speakFunction();
console.log(speakFunction) //undefined
// this is what the JS interpereter sees 


// how to give speakFunction a variable
speakFunction = cat.speak;

// chain the bind method and pass to the argument of the cat object and the result is that the keyword will look at the cat object for context and return the value of meow 
var speakFunctionBind = speakFunctionBind(cat)
speakFunctionBind()