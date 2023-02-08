function anArray(n) {
    arrayOfNumbers = []
    for (var i = 0; i <= n; i++) {
        arrayOfNumbers.push(Math.random())
    }
    return arrayOfNumbers
}

var list = anArray(8)
console.log(list)
list.push(8)
console.log(list)
list.unshift(2)
console.log(list)
list.unshift(2)
console.log(list)
var uniqueSet = new Set(list)
console.log(uniqueSet)

var people = {
    'Spongebob': 35,
    'Patrick': 39,
    'Squidward': 43,
    'Larry': 40,
    'Krabs':60
}
console.log(people)
var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.Spongebob = 13
console.log(people)
var deleteSpongebobAge = splice(people.Spongebob)
console.log(deleteSpongebobAge)
