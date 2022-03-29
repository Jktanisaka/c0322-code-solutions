/*
Purpose: when modal button is clicked - display popupscreen and popupbox
when no button is clicked - hide popupscreen and popupbox
create variable to hold dom selected element for the dark screen
create variable to hold dom selected element for the popup box

create variable to hold dom selected modal button
create variable to hold dom selected no button

add an event listener for the modal button that runs function modalPress when the modal button is clicked
function modalPress will run with parameter event. once the event is triggered the
classNames for popupScreen and popupBox will change (will be visible)

add an event listener for the no button that runs function noPress when the no button is clicked
function noPress will run with parameter event. once the event is triggered the
classNames for popupScreen and popupBox will change (will be invisible)
*/

var popupScreen = document.querySelector('.popup-screen');
var popupBox = document.querySelector('.popup-box');

var modalButton = document.querySelector('.modal-button');
var noButton = document.querySelector('.no-button');

modalButton.addEventListener('click', modalPress);

function modalPress(event) {
  popupScreen.className = 'row center popup-screen absolute';
  popupBox.className = 'column33 popup-box fixed';
}

noButton.addEventListener('click', noButtonPress);

function noButtonPress(event) {
  popupScreen.className = 'row center popup-screen absolute none';
  popupBox.className = 'column33 popup-box fixed none';
}
