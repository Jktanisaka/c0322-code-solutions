/*
create variable to track # of clicks
create variable to store the dom selector for the button
create variable to store the dom selector for the background
add an event listener to the button to listen for clicks and execute a new funtion
create new funtion for button click that checks if clicks are even or odd
if the click is even change the class names for both the button and background to the on colors
if the click is odd, change the class names again to the off colors
at the end of each condition, increment clicks by 1
*/
var clicks = 1;
var button = document.querySelector('.column25');
var background = document.querySelector('.container');
button.addEventListener('click', buttonClick);

function buttonClick(event) {
  if (clicks % 2 === 0) {
    button.className = 'column25 on';
    background.className = 'container container-on';
  } else {
    button.className = 'column25 off';
    background.className = 'container container-off';
  }
  clicks++;
}
