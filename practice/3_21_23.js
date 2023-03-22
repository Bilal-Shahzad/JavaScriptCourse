function reverseString(str) {
    var arr = str.split('');
    arr.reverse();
    var reversedStr = arr.join('');
    return reversedStr;
  }
  
  console.log(reverseString('car')); //  'rac'
  