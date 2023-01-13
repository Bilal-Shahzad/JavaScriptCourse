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
    Paul: 23,
    Steven: 22,
    John: 28,
    Alex: 11,
    Donald: 20
}
console.log(listOfPeople)

var listOfNames = Object.keys(listOfPeople)
console.log(listOfNames , "list of names here")
var listOfAges = Object.values(listOfPeople)
console.log(listOfAges, "list of ages here")
listOfPeople.Alex = 13
console.log(listOfPeople)
delete listOfPeople.Alex[13]
console.log(listOfPeople , "new list")

var friendList = {
    Paul : {
        month: 'January',
        year: 2002,
    },
    Steven : {
        month: "February",
        year: 2000
    }
}