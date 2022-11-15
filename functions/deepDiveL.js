function knockKnock(params) {
    return 'Who\'s there?';
}

//call the knockKncock function 
console.log(knockKnock())

//turn knockKnock into a anyonomus function within a fuction expression 
var knockKncock2 = function () {
    return 'Who\'s there?';
}
console.log(knockKncock2())


//IIFE 

function dogWalker(person, dog) {
    return person + 'is taking' + dog + 'for a walk'
}
console.log(dogWalker('Paul', 'Charlie'));

//create an immediately invoked function expression 
//store the IIFE within variable and call it 
(function (person ,dog) {
    return person + 'is taking' + dog + 'for walk';
})

 var dogWalker = (function (person ,dog) {
    return person + 'is taking' + dog + 'for walk';
})
console.log(dogWalker('Paul' , 'Charlie'))

//practice 
var list = (function () {
    var name = "Bilal"; 
    return name; 
})(); 
console.log(list)

//function expression 
const shippingBox = function(width, height, length) {
    return width + height + length;
  };
  
  console.log(shippingBox(12, 14, 14));
