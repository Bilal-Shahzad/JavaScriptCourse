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
    'Kyrie': 32,
    'Kevin': 35,
    'Lebron': 40,
    'Oscar': 54
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age , "age here")
people.Ben = 13
console.log(people ,"name change")
// var deleteBenAge = splice(people.Ben)
// console.log(deleteBenAge)
// needs work on 
var friends = {
    Ben : {
        month : "Jan",
        year: 2002,
    },
    Kevin : {
        month: "Feb",
        year: 2003
    },
    Kyrie : {
        month:  "Mar",
        year:  2004
    },
    OScar : {
        month:  "Apr",
        year:  2005
    },
    Bron : {
        month:  "May",
        year:  2006
    }
}