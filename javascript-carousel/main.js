var circleContainer = document.querySelector('#circle-container');
var circles = document.querySelectorAll('.fa-circle');
var image = document.querySelector('img');
circleContainer.addEventListener('click', circleSelect);
var right = document.querySelector('#right-arrow');
var left = document.querySelector('#left-arrow');

window.addEventListener('load', startInterval);

var imgArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

function whiteAll() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].className = 'far fa-circle circle-margin';
  }
}

var counter = 0;

function cycle() {
  counter++;
  if (counter === 5) {
    counter = 0;
  }
  whiteAll();
  setImage();
  circles[counter].className = 'fas fa-circle circle-margin';
}

function setImage() {
  image.setAttribute('src', imgArr[counter]);
}

function circleSelect(event) {
  stopInterval();
  whiteAll();
  event.target.className = 'fas fa-circle circle-margin';
  for (var i = 0; i < circles.length; i++) {
    if (circles[i].getAttribute('id') === event.target.getAttribute('id')) {
      counter = i;
      setImage();
    }
  }
  startInterval();
}

right.addEventListener('click', rightClick);
function rightClick(event) {
  stopInterval();
  counter++;
  if (counter === 5) {
    counter = 0;
  }
  whiteAll();
  setImage();
  circles[counter].className = 'fas fa-circle circle-margin';
  startInterval();
}

left.addEventListener('click', leftClick);
function leftClick(event) {
  stopInterval();
  counter--;
  if (counter === -1) {
    counter = 4;
  }
  setImage();
  whiteAll();
  circles[counter].className = 'fas fa-circle circle-margin';
  startInterval();
}
var intervalId;

function stopInterval() {
  clearInterval(intervalId);
  intervalId = null;
}

function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(cycle, 3000);
  }
}
