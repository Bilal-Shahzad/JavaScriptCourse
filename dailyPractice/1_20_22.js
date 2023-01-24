function aFunction(n) {
    
    newArray = []

    for (var i = 0; i <= n; i++ ){
        newArray.push(Math.random())
    }
return newArray;
}

var list = aFunction(8)
console.log(list)
list.push(8)
console.log(list)
list.unshift(2)
list.unshift(2)
console.log(list)
var uniqueList = new Set (list)
console.log(uniqueList)

var dictionary  = {
    Bron: 22,
    Adam: 25,
    Batman: 29,
    Terry: 22,
    Hulk: 21
}

dictionary.Bron = 13
console.log(dictionary)
var names = Object.keys(dictionary)
var ages = Object.value(dictionary)