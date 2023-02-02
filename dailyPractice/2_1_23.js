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
Allen : 62,
Lebron: 38,
Jordan: 42,
Pippen: 62,
Pierce: 74
}

var names = Object.keys(dictionary)
console.log(names)
var age =  Object.values(dictionary)
console.log(age)
people.Allen = 13
console.log(people)

var people = {
    Allen : {
        month: 'January',
        year: 2002,
    },
    Ray : {
        month: "February",
        year: 2000
    },
    Roy : {
        month: "March",
        year: 2004
    },
    Mike : {
        month: "April",
        year: 2008
    }
}