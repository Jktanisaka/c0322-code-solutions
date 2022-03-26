/* exported compact */
/*
make new function with parameter array
assign empty array to variable newArray
use for loop to iterate through each index in the array
new var i = 0, if i is less than the length of the array - run the code
increment i by 1 at the end of each iteration
if the boolean value evaluates to true (use Boolean()), push the value to newArray
if it doesnt, continue the loop (no code required for this part)
return newArray after loop is finished
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
