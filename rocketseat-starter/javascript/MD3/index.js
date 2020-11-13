var listElement = document.querySelector('.list');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = '';
  for(todo of todos){
    var itemTodo = document.createElement('li');
    itemTodo.innerText = todo;

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var i = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + i + ') ');
    linkElement.innerText = 'excluir';
 
    listElement.appendChild(itemTodo);
    listElement.appendChild(linkElement);
  }
}

renderTodos();

function addTodo(){
  todos.push(inputElement.value);
  renderTodos(inputElement.value);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(i) {
  todos.splice(i, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){ 
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
