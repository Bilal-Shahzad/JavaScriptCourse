//push() pop() shift() unshift()

var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges' , 'beef']
//insert crackers at the front of the array and 'grapes' at the end

shoppingList.unshift('crackers');
console.log(shoppingList)

shoppingList.push('grapes');
console.log(shoppingList)
console.log(shoppingList.length)

shoppingList.push('siracha', 'popcorn', 'lemonade', 'juice')
console.log(shoppingList.length)

//remove an item from the front of the shoppingList array 
shoppingList.pop();
console.log(shoppingList)

shoppingList.shift();
console.log(shoppingList)
console.log(shoppingList.length)

//capture shift and pop methods 

var firstItem = shoppingList.shift();
console.log(firstItem)

var lastItem = shoppingList.pop();
console.log(lastItem)