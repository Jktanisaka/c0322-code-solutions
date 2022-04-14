var userList = document.querySelector('#user-list');

var newXhr = new XMLHttpRequest();
newXhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
newXhr.responseType = 'json';
newXhr.addEventListener('load', newEvent);
function newEvent(event) {
  console.log('status of xhr', newXhr.status);
  console.log('response of xhr', newXhr.response);
  for (var i = 0; i < newXhr.response.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = newXhr.response[i].name;
    userList.append(newLi);
  }
}
newXhr.send();
