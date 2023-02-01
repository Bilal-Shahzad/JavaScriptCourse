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
    'OBJ': 30,
    'DJ': 24,
    'Saquon': 25,
    'Brady': 43,
    'Rodgers': 40
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.DJ = 13
console.log(people)
var friends = {
    Phineas : {
        month : "Jan",
        year: 2002,
    },
    Ferb : {
        month: "Feb",
        year: 2003
    },
    Candace : {
        month:  "Mar",
        year:  2004
    },
    Perry : {
        month:  "Apr",
        year:  2005
    },
    Doof : {
        month:  "May",
        year:  1994
    }
}