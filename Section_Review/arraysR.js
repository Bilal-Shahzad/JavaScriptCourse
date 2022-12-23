var cars = [
    "Lamborghini",
    "Bugatti",
    "Honda"
  ];
  cars[2] = "Fiskr"
  console.log(cars)

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)

//methods
var person = {
    firstName: "Bilal",
    lastName: "Shahzad",
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}
console.log(person(firstName, lastName))
