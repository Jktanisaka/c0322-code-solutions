/*
assign 0 to variable clicks (this will be the click counter)
query hot button (will act as listener)
query click count (will edit later)
make hotbutton event listener that listens for a click and runs addClick
addclick will increment clicks by 1, assign new text content to clickCount
then will use if statements to check the value of the counter
change the value of class name at certain intervals
*/

var clicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', addClick);

function addClick(event) {
  clicks++;
  clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicks >= 4 && clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicks >= 7 && clicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clicks >= 10 && clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicks >= 13 && clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else if (clicks >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
}
