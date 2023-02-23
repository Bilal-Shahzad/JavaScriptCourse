function newFunction (n) {
    numbers  = []
    for (var i = 0; i <=n; i++){
        numbers.push(Math.random())
    }
}

var set = newFunction(8)
console.log(set)
set.push(8)
console.log(set)
set.unshift(2)
console.log(set)
set.unshift(2)
console.log(set)
var uniqueSet = new Set(set)
console.log(uniqueSet)

var dictionary ={
    'Brady': 12,
    'Saquon': 26,
    'LeBron': 6,
    'Galloday': 14,
    'Future': 30
}
console.log(people)
var names = Object.keys(people)
console.log(names)
var age =  Object.values(people)
console.log(age)
people.Future = 13
console.log(people)
