// create a function that accepts a sting (of a persons first and last name) and retruns a string with the first and last name swapped

// EX
// "John Smith" -> "Smith John"

function nameShuffle(str) {
    str = str.split(' ')
    var backwardName = []
    for (var i = 1; i >= 0; i--){
        backwardName.push(str[i])
    }
    return backwardName
}

// my solution 
function swapName(name) {
    // input the string into the array of indivudal words
    const nameArr = name.split(' ');
    // the ' ' means each word in the string will be treated as a seperate element 

    // need to reverse the word
    // use the reverse to reverse the order of the words
    const reversedNameArr = nameArr.reverse();
    // this swaps the first and last name 

    // need to give it an arguemnt 
    const swappedName = reversedNameArr.join(' ');
    return swappedName;
  }
  console.log(swapName('Bilal Shahzad'))
//   Shahzad Bilal