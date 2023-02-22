function newArray(n) {
    numbers = []
    for (var i = 0; i <= n; i++) {
        numbers.push(Math.random())
    }
    return numbers
}

var set = newArray(8)
console.log(set)
set.push(8)
console.log(set)
set.unshift(2)
console.log(set)
set.unshift(2)
console.log(set)
var uniqueSet = new Set(set)
console.log(uniqueSet)

var people = {
    'DJ': 8,
    'Saquon': 26,
    'Dex': 90,
    'Galloday': 14,
    'Holmes':33
}
console.log(people)
var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.DJ = 13
console.log(people)