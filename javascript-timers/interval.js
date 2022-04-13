var countdownDisplay = document.querySelector('.countdown-display');

var intervalID = setInterval(countdown, 1000);

var counter = 3;

function countdown() {
  if (counter < 1) {
    clearInterval(intervalID);
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  } else {
    countdownDisplay.textContent = counter;
    counter--;
  }
}
