function newArray(n) {
    setOfNumbers = []
    for (var i = 0; i <= n; i++) {
        setOfNumbers.push(Math.random())
    }
    return setOfNumbers
}

var newSet = newArray(8)
console.log(newSet)
newSet.push(8)
console.log(newSet)
newSet.unshift(2)
console.log(newSet)
newSet.unshift(2)
console.log(newSet)
var newGroup = new Set(newSet)
console.log(newGroup)

var people = {
    'Bron ': 38,
    'Melo': 39,
    'Paul': 36,
    'Kobe': 37,
    'Dwight': 34
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.Bron = 13
console.log(people)
var deleteAge = delete people.Bron['13'];
var friendsSet = {
    Bron : {
        month : "Jan",
        year: 1997,
    },
    Melo : {
        month: "Feb",
        year: 1994
    },
    Kobe : {
        month:  "Mar",
        year:  1993
    },
    Paul : {
        month:  "Apr",
        year:  1992
    },
    Dwight : {
        month:  "May",
        year:  1991
    }
}

