function anArray(n) {

    listOfNumbers = []

    for (var i = 0; i <= n; i++) {
        listOfNumbers.push(Math.random())
    }
    return listOfNumbers
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
    'DJ': 25,
    'Rodgers': 39,
    'Brady': 45,
    'Stafford': 33,
    'Warner': 55
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.Stafford = 13
console.log(people)