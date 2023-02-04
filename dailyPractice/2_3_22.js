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
    Aaron: 23,
    Jacob: 22,
    Alex: 28,
    Alexis: 22,
    Buggs: 29
}
console.log(listOfPeople)

var listOfNames = Object.keys(listOfPeople)
console.log(listOfNames , "list of names here")
var listOfAges = Object.values(listOfPeople)
console.log(listOfAges, "list of ages here")
listOfPeople.Alex = 13
console.log(listOfPeople)

var friendList = {
    Paul : {
        month: 'January',
        year: 2002,
    },
    Steven : {
        month: "February",
        year: 2000
    },
    Buggs : {
        month: 'March',
        year: 2003,
    },
    ALexis : {
        month: 'April',
        year: 2004,
    },
    Alex : {
        month: 'May',
        year: 2005,
    },
}