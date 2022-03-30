/*
purpose: make a function to check the value of the keypress against the letter and assign classes

create a dom query for all span elements - assign to variable span
create a dom query for the body element - assign to variable body
add an event listener to listen for the keydown in the body element
if keydown is pressed run function checkChar
set var i = 0, will be incrementing this similar to a for loop
create function checkChar with parameter event
create if statement comparing the key pressed with the text of current span(i)
if the key is the same, apply the green class and increment i by 1
then assign the bottom-black class to the span at i
if the key is not the same, apply the red class and do not increment i

*/

var span = document.querySelectorAll('span');
var body = document.querySelector('body');
body.addEventListener('keydown', checkChar);
var i = 0;
function checkChar(event) {
  if (event.key === span[i].textContent) {
    span[i].className = 'green';
    i++;
    span[i].className = 'bottom-black';
  } else {
    span[i].className = 'red';
  }
}
