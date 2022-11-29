//switch statemnets is used to evaluate an expression then associating it with a case clause and finally running code executing statements matching that case

switch (expression) {
    case value:
        code block;
        break;
case y;
    code block;
    break;
    default:
        code block;
}

var grade = 'B';
switch (grade) {
    case 'A':
        alert('Great Job');
        break;
    case 'B':
        alert('Good Job');
        break;
    case 'C':
        alert('Good Try');
        break;
    default:
        alert('In trouble')
}
console.log(grade)
//the switch expression is evaluated once 
//the value of the expression is compared with the values of each case

//extra practice
var fruits = 'mango';
switch (fruits) {
  case 'orange':
    console.log('Oranges are $02 a pound.');
    break;
  case 'mango':
  case 'pears':
    console.log('mangoes and pears are $5.00 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
      console.log('We have fruits(fruits).')
}
// expression
// An expression whose result is matched against each case clause.
