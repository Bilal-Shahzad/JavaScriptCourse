function isPalindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome('Was It A Rat I Saw?')); // true
