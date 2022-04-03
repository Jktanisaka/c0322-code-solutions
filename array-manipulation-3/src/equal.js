/* exported equal */
/*
create a function that can tell whether 2 arrays are equal to each other
check to see if the length of both arrays is equal, if not then return false
write a for loop that iterates through each value in the first array and compares
each value to the value at the same index in the second array
if the values are not equal then return false.
if the loop completes then all values are equal
once the loop is done return true
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
