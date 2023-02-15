function newFunction(n) {
    anArrayofNumbers = []
    for (var i = 0; i <= n; i++) {
        anArrayofNumbers.push(Math.random())
    }
    return anArrayofNumbers
}

var newArray = newFunction(8)
console.log(newArray)
newArray.push(8)
console.log(newArray)
newArray.unshift(2)
console.log(newArray)
newArray.unshift(2)
console.log(newArray)
var newSet = new Set(newArray)
console.log(newSet)

var dictionary = {
Curry : 30,
Klay: 25,
LeBron: 6,
Tristain: 62,
Kyrie: 2
}
var names = Object.keys(dictionary)
console.log(names)
var age =  Object.values(dictionary)
console.log(age)
people.Allen = 13
console.log(people)
