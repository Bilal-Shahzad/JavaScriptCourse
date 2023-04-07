var form = document.query('form')
var todoList = document.querySelector('ul')
var button = document.querySelector('button')
var input = document.getElementById('user-todo')

form.addEventListner('submit' , function(e) {
    e.preventDefault()
    todoMaker(input,value)
    input.value = ' '
})
var todoMaker = function(text) {
    var todo = document.createElement('li')
    todo.textContent = text
    todoList.appendChild(todo)
}

button.addEventListener('click' , function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
})
var  