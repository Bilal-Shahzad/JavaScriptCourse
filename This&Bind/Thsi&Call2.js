// With the call() method you can write a method that can be used on different objects


// Syntax
// const person = {
//     firstName:"Bilal",
//     lastName: "Shahzad",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   // This returns "Bilal Shahzad":
// person.fullName();

// this refers to the person object
// this.firstName means the firstName property of this

// The call() method is a predefined JavaScript method

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"Bilal",
    lastName: "Shahzad"
  }
  const person2 = {
    firstName:"Spider",
    lastName: "Man"
  }
  
  // This will return Bilal Shahzad
console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2));

// example calls the fullName method of person using it on person1


// The call() method can accept arguments
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Bilal",
    lastName: "Shahzad"
  }
  
  console.log(person.fullName.call(person1, "Wichita", "USA"))


