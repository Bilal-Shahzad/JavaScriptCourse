// In JavaScript the this keyword refers to an object
// The this keyword refers to different objects depending on how it is used
// fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// this refers to the person object

// this Alone
// Because this is running in the global scope
// EX
// let x = this;


// With the bind() method an object can borrow a method from another object

// EX creates 2 objects (person and member)
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  var member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  var fullName = person.fullName.bind(member);
  console.log(fullName)


