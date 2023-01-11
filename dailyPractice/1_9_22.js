function newArray(n) {
    numbers = []

    for (let i = 0; i <= n; i++){
        numbers.push(Math.random()) 
    }
return numbers
}

numbers = newArray(8)
console.log(numbers)
numbers.push(8)
console.log(numbers)
numbers.unshift(2)
console.log(numbers)
numbers.unshift(2)
var newSet = new Set(numbers) 
console.log(newSet)

var dictionary = {
    Paul : 22,
    Saquon: 40,
    Lebron: 40,
    Bob: 15,
    Jack: 20
}
console.log(dictionary)

var DictionaryArray = Object.values(dictionary)
console.log(DictionaryArray)
var DictionaryArray2 = Object.keys(dictionary)
console.log(DictionaryArray2)
dictionary.Paul = 13
console.log(dictionary)
delete dictionary.Bob[1] 
console.log(dictionary)
