// write a function that has a 8 nubers 
function randomNumbers(n) {
	randomArray = []
	
	if (n === 0) {
	 return 0
	}  
for (let i = 0; i <= n; i++) {
   randomArray.push(Math.random())
}

return randomArray;
    }
(randomNumbers(8))
console.log(randomNumbers(8))
// console.log(randomNumber.length);
// //add 8 to the end of array
// number.push(8);
// console.log(randomNumber);
// // add 2 at the beggining
// number.unshift(2);
// console.log(randomNumber);
// // add 2 again and pull all unique values in a set 
// var uniqueNumbers = Array.from(new Set(randomNumber));
// console.log(uniqueNumbers)
// //create a dictionary 

// var dictionary = {
//    person1 : {
//     firstName: "Bilal",
//     lastName: 'Shazad',
//     age: 20,
//    },
//    person2 : {
//        firstName: "Sally",
//        lastName: "Johnson",
//        age: 21,
//    },
//    person3 : {
//        firstName: "Bill",
//        lastName: "Kapri",
//        age: 29,
//    },
//    person4 : {
//        firstName: "The",
//        lastName : "Rock",
//        age: 35,
//    },
//    person5 : {
//     firstName: "Buggs",
//     lastName: "Bunny",
//     age: 99,
//    }
// }
// console.log(dictionary)

// var updatedDictionary = Object.assign(dictionary, {
//     person2 : {
//         firstName: "Sally",
//         lastName: 'Johnson',
//         age: 13,
//     },
//     person5 : {
//         firstName: "Buggs",
//     lastName: "Bunny",
//     }
// })
// console.log(updatedDictionary)

// var dictionary2 = {
//     person1 : {
//         fullName: "Ye",
//         birthday: "June 4th"
//     },
//     person2 : {
//         fullName: "Jay Z",
//         birthday: "December 4th"
//     },
//     person3 : {
//         fullName: "Mickey Mouse",
//         birthday: "November 18th"
//     }
// }

// var updatedDictionary2 = Object.assign(dictionary2, {
//     person1 : {
//         fullName: "Ye",
//         birthday: "June 4th",
//         weight: 180
//     },
//     person2 : {
//         fullName: "Jay Z",
//         birthday: "December 4th",
//         weight: 200
//     },
//     person3 : {
//         fullName: "Mickey Mouse",
//         birthday: "November 18th",
//         weight: 50
//     }
// })
// console.log(updatedDictionary2)