// challenge reverse the order of two provided string

// EX
// "abe lincoln" -> "lincoln abe"


// apporach 1 
// using built in functions 

// tools
    // string.prototype.split()
    // array.prototype.reverse()
    // array.prototype.join

    function nameSwap(str) {
        // split string into array 
        var stringToArray = str.split(' ')
        // reverse array 
        var reverseArray = stringToArray.reverse()
        // join array into string 
        var reverseString = reverseArray.join(' ')
        // return string 
        return reverseString
    }

    console.log(nameSwap('Abraham Lincoln'))
// alrenative way in one line 
return str.split(' ').reverse().join(' ');

function name(params) {
    
}
