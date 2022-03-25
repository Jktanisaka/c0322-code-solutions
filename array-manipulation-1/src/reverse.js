/* exported reverse */
/*
create new function with parameter array
create variable newArray and assign it an empty array
check to see if the array is empty, if it is then return an empty array
create for loop to iterate through the array from the last value to the first
i = last value; if i is greater than or equal to 0 -run the code; decrement i by
1 at the end of each iteration
push the value of the array at position i to newArray
return newArray afteer the loop ends
*/

function reverse(array) {
  var newArray = [];
  if (array === []) {
    return [];
  }
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
