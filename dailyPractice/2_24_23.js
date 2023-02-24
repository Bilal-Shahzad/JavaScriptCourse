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
    'LeBron ': 38,
    'Carmelo': 39,
    'Pierce': 36,
    'Allen': 37,
    'Dwight': 34
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.LeBron = 13
console.log(people)
var deleteAge = delete people.LeBron['13'];