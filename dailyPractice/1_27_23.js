function arrayForN(n) {
    numbers = []
    for (var i = 0; i <= n; i++) {
        numbers.push(Math.random())
    }
    return numbers
}

var set = arrayForN(8)
console.log(set)
set.push(8)
console.log(set)
set.unshift(2)
console.log(set)
set.unshift(2)
console.log(set)
var uniqueSet = new Set(set)
console.log(uniqueSet)

var people = {
    'DJ': 8,
    'Saquon': 26,
    'Brady': 12,
    'Rodgers': 12,
    'Williams':99
}
console.log(people)

var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.DJ = 13
console.log(people)
var deleteAge = delete people.DJ[8]
console.log(deleteAge)
var friends = {
    DJ : {
        month : "Jan",
        year: 1997,
    },
    Saquon : {
        month: "Feb",
        year: 1998
    },
   Brady : {
        month:  "Mar",
        year:  1985
    },
    Rodgers : {
        month:  "Apr",
        year:  1987
    },
    Williams : {
        month:  "May",
        year:  1994
    }
}