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
    'Saquon': 26,
    'Daniel': 24,
    'Brian': 45,
    'Richie': 33,
    'Darius': 29
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.Saquon = 13
console.log(people ,"age change")