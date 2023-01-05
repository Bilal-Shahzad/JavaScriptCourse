function newArray(n) {
    array = []

    for (let i = 0; i <= n; i++){
        array.push(Math.random()) 
    }
return array

}
// number 1 ^
array = newArray(8)
//number 2 ^
// console.log(array)

array.push(8)
// console.log(array)
//number 3 ^

array.unshift(2)
// console.log(array)
//number 4 ^

array.unshift(2)
var newSet = new Set(array) 
// console.log(newSet)
// number 5 ^


var dictionary = {
    John : 26,
    Lebron: 40,
    Jordan: 50,
    Sally: 30,
    Paul: 24
}
// number 6 ^
// console.log(dictionary)

var DictionaryArray = Object.values(dictionary)
// console.log(DictionaryArray)
// number 8^
var DictionaryArray2 = Object.keys(dictionary)
// console.log(DictionaryArray2)
// number 7 ^
dictionary.John = 13
// console.log(dictionary)
// number 9 ^
delete dictionary.Lebron[1] 
// console.log(dictionary)

