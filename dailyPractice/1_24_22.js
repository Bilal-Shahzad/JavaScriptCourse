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
    'Spongebob': 40,
    'Patrick': 33,
    'Squidward': 22,
    'Larry': 50,
    'Krabs':43
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