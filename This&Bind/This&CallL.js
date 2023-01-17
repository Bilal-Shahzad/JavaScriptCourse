// call method 
// cals a function with a give "this" value and arguments provided individually 
// call - indivdual argument 
// apply - arangement argument 
// C(all) - arguments seperated by commas 
// A(pply) - argument of an array 

// syntax 

// function.call(thisCOntextObject , arg1 , arg2, ...const)

var myLanguages = function(lang1, lang2, lang3) {
    console.log ("My name is " + this.name + 'and I know ' + lang1 + ',' + lang2 + ', and ' + lang3);
}

console.log(myLanguages()) //undefined

// challenge 
// create two people object with a name property and value 
// use the call method on our function
// passs person object as the first argument followed by arguments for lang1 , lang2 and lang3

var person1 = {
    name: "Bilal "
}

console.log(myLanguages.call(person1, 'JavaScript', "HTML" , "CSS"))
// My name is Bilal and I know JavaScript,HTML, and CSS

var person2 = {
    name: "Sarah"
} 

var languages = ["engish" , "spanish" ,"french"]

console.log(myLanguages.call(person2, languages[0], languages[1], languages[2] ))
// My name is Sarah and I know engish,spanish, and french