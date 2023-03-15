// this is a function declared and creates a function called swapName with a single parameter called full name
// the function is mean to accept a string argument which is the persons full name 

function swapName(fullName) {
    // the line below creates a new constant cariable called name array 
    // it assings it a array of strings 
    // created by splitting the full name string argument into an array at each space 
    const nameArray = fullName.split(" ");

    // line below returns a string puts together second element of name array which is the last name 
    // having a " " and the first element of name array, this swaps the postion of the orignal string 
    return nameArray[1] + " " + nameArray[0];
  }
  
  console.log(swapName("Bilal Shahzad"));
//   Shahzad Bilal