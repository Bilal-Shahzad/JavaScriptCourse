// Store data in localStorage
localStorage.setItem('username', 'john');
localStorage.setItem('color', 'blue');

// Retrieve data from localStorage
const username = localStorage.getItem('username');
const color = localStorage.getItem('color');
console.log(username); // Output: john
console.log(color); // Output: blue

// Store data in sessionStorage
sessionStorage.setItem('cart', JSON.stringify({items: ['item1', 'item2']}));

// Retrieve data from sessionStorage
const cart = JSON.parse(sessionStorage.getItem('cart'));
console.log(cart); // Output: {items: ['item1', 'item2']}
