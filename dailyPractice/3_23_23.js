function reverseString(str) {
    let arr = [];
    for (let char of str) {
      arr.unshift(char);
    }
    return arr.join('');
  }


