function newArray(n) {
    setOfNumbers = []
    for (var i=0; i <=n; i++) {
        setOfNumbers.push(Math.random())
    }
    return setOfNumbers
}

var arrayOfNumbers = newArray(7)
console.log(arrayOfNumbers)
arrayOfNumbers.push(8)
console.log(arrayOfNumbers)
arrayOfNumbers.unshift(2)
console.log(arrayOfNumbers)
arrayOfNumbers.unshift(2)
console.log(arrayOfNumbers)
var uniqueSet = new Set(arrayOfNumbers)
console.log(uniqueSet)

var listOfPeople = {
    Paul: 40,
    Steven: 21,
    John: 22,
    Alex: 23,
    Donald: 25
}
console.log(listOfPeople)
var listOfNames = Object.keys(listOfPeople)
console.log(listOfNames)
var listOfAges = Object.values(listOfPeople)
console.log(listOfAges)
listOfPeople.Alex = 13
console.log(listOfPeople)