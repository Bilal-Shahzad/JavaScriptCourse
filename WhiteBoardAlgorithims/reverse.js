// reverse a string 
// may need to turn string into array before you can reverse it 
// your result must be astring 

// EX
//  'car' -> 'rac'

// using built in fucntions 

// tools
// string.protoype.split()
// array.prototype.reverse()
// array.prototype.join()

function revString(str) {
    return str.split('').reverse().join('')
}
console.log(revString('car'))
// rac

// my solution 

function reverseString(str) {
    const arr = str.split(''); 
    arr.reverse(); 
    const reversedStr = arr.join(''); 
    return reversedStr;
  }
  console.log(reverseString('car'))
//   rac