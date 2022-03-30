var span = document.querySelectorAll('span');
var body = document.querySelector('body');
var i = 0;
body.addEventListener('keydown', checkChar);

function checkChar(event) {
  if (event.key === span[i].textContent) {
    span[i].className = 'green';
    i++;
    span[i].className = 'bottom-black';
  } else {
    span[i].className = 'red';
  }
}
