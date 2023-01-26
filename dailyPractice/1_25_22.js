function nArray(n) {
    numbers = []
    for (var i = 0; i <= n; i++) {
        numbers.push(Math.random())
    }
    return numbers
}

var set = nArray(8)
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
    'Blue': 50,
    'Mac': 12,
    'Eduardo': 40,
    'Wilt': 43,
    'Coco': 29
}
console.log(people)

var namesOfPeople = Object.keys(people)
console.log(names)
var agesOfPeople =  Object.values(people)
console.log(age)
people.Mac = 13
console.log(people)
var deleteMacAge = delete people.Mac['13'];
console.log(deleteMacAge)
var friendsSet = {
    Blue : {
        month : "Jan",
        year: 2002,
    },
    Mac : {
        month: "Feb",
        year: 2003
    },
    Coco : {
        month:  "Mar",
        year:  2004
    },
    Wilt : {
        month:  "Apr",
        year:  2005
    },
    Eduardo : {
        month:  "May",
        year:  1994
    }
}

