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
    'Ben': 22,
    'Harris': 32,
    'Love': 35,
    'Rondo': 40,
    'Pierce': 54
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age , "age here")
people.Ben = 13
console.log(people ,"name change")
var deleteBenAge = splice(people.Ben)
