function newArray(n) {
    numbers = []
    for (var i = 0; i <= n; i++) {
        numbers.push(Math.random())
    }
    return numbers
}

var set = newArray(8)
console.log(set)
set.push(8)
console.log(set)
set.unshift(2)
console.log(set)
set.unshift(2)
console.log(set)
var newSet = new Set(set)
console.log(newSet)

var people = {
    'Blue': 13,
    'Mac': 12,
    'Harringman': 80,
    'Wilt': 43,
    'Eduardo': 30
}
console.log(people)

var namesOfPeople = Object.keys(people)
console.log(names)
var agesOfPeople =  Object.values(people)
console.log(age)
people.Mac = 13
console.log(people)
var deleteAge = delete people.Mac['13'];
console.log(deleteAge)
var friendsSet = {
    Blue : {
        month : "Jan",
        year: 2003,
    },
    Mac : {
        month: "Feb",
        year: 2003
    },
    Harringman : {
        month:  "Mar",
        year:  1904
    },
    Wilt : {
        month:  "Apr",
        year:  1963
    },
    Eduardo : {
        month:  "May",
        year:  1994
    }
}
for (i =0; i <=n; i ++) {
}