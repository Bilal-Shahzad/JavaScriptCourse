// forEach() calls a provided callback function once for each element in array in ascending order

var colorArray = [
    {color: 'red'}, {color: 'orange'},{color: 'yellow'}
]

for (var i =0; i < colorArray.length; i++) {
console.log (`i value ${i} | Color Name: ${colorArray[i].color}`);

}
colorArray.forEach(function(color, index) {
    console.log(`i value ${index} | Color Name: $`);
})

var employees = [
    {name: 'Beth', title: 'manager', salary: 90000},
    {name: 'Bill', title: 'developer', salary: 72000},
    {name: 'Charlie', title: 'support team memeber', salary: 50000}
]

for (var i = 0; i < employees.length; i++){
    console.log( `${i+1}: ${employees[i].name} is a ${employees[i].title} who makes ${employees[i].title} who makes ${employeees[i].salary} dolllars every year`)
}

employees.forEach(function (employee, index) {
    console.log(`${index + 1}: ${employee.name} is a ${employee.title} who makes ${employee.salary} dollars every year`)
})