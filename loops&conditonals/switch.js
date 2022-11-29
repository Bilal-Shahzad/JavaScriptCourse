//switch statemnets is used to evaluate an expression then associating it with a case clause and finally running code executing statements matching that case

// switch (expression) {
//     case value:
//         code block;
//         break;
// case y;
//     code block;
//     break;
//     default:
//         code block;
// }

var grade = 'B';
switch (grade) {
    case 'A':
        alert('Great Job');
        break;
    case 'B':
        alert('Goof Job');
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