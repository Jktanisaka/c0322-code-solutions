/* exported includes */
/*
new funtion with parameters array and value
if value exists in the array the funcion must return true
write a for loop to iterate through every value in array
if the array value matches the parameter value, return true
if the loop ends and no match is found, return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
