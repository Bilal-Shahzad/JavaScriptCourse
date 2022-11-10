//create a function that returns 'Good morning, neighbor'
function googMorningNeighbor() {
    return 'Good morning, neighbor';
}
console.log(googMorningNeighbor())

function goodEveningNeighbor() {
    return 'Good evening neightbor, thanks for everything'
}
console.log(goodEveningNeighbor())

//rewrite both functions including parameter and agrument for name in both
//second function replace everything with a parameter and argument naming a task 

function goodMorningNeighbor2(name) {
    return 'Good morning,'+ name + '!';
}
console.log(goodMorningNeighbor2('Joe'))
function goodEveningNeighbor2(name, task) {
    return 'Good evening' + name + 'thanks for ' + task + '!'
}
console.log(goodEveningNeighbor2('Joe', 'mowing the lawn'))