/* exported todos */
var todos = [];
var previoustodosJSON = localStorage.getItem('javascript-local-storage');
if (previoustodosJSON !== null) {
  todos = JSON.parse(previoustodosJSON);
}
window.addEventListener('beforeunload', storeString);

function storeString(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
