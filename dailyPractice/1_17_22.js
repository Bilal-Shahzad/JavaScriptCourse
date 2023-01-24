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
    'Ben': 84,
    'Allen': 48,
    'Bosh': 43,
    'Lebron': 12,
    'Chris':13
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age )
people.Ben = 13
console.log(people )
var deleteBenAge = splice(people.Ben)
console.log(deleteBenAge)
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
    }
}