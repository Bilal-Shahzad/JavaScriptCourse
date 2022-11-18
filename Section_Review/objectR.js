var person = {
    firstName: 'Bilal',
    lastName: 'Shahzad',
    age: 20,
    eyeColor: 'brown',
    fullName : function() {
        return this.firstName + ' ' + this.lastName
    }
};
//this refers to an object executing the current piece of code 
//this.firstName means the firstName property of this
//this.firstName means the firstName property of person
console.log(person)
//accesiing objects