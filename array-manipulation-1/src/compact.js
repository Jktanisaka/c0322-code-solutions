/* exported compact */
/*
make new function with parameter array
assign empty array to variable newArray
use for loop to iterate through each index in the array
if value evaluates to true, push the value to newArray
*/
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
