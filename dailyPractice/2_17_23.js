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
Kerr : 62,
Longley: 38,
Jordan: 23,
Pippen: 62,
Pierce: 74
}

var names = Object.keys(dictionary)
console.log(names)
var age =  Object.values(dictionary)
console.log(age)
people.Kerr = 13
console.log(people)
