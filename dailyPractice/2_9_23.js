function nArray(n) {
    numbers = []
    for (var i = 0; i <= n; i++) {
        numbers.push(Math.random())
    }
    return numbers
}
var set = nArray(8)
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
    'Lebron': 6,
    'Davis': 23,
    'Jordan': 23,
    'Kyrie': 2,
    'KD':35
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.KD = 13
console.log(people)
var deleteAge = delete people.KD[8]
console.log(deleteAge)