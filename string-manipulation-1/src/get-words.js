/* exported getWords */
/*
create new function with string as parameter
create new variable and assign empty array
use if statement to check if the value is an empty string.
 if the value is empty, return an empty array
 else use string split method to split up the string and
 assign the new array to the variable array then return the variable array
*/

function getWords(string) {
  var array = [];
  if (string === '') {
    return [];
  } else {
    array = string.split(' ');
    return array;
  }
}
