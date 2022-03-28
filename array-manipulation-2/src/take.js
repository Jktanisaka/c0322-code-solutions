/* exported take */
/*
create new function with parameters array and the count
create empty array and assign to new variable
use if statement to check if the length of the array is 0
if it is, return an empty array
write a for loop that iterates each value until it reaches count (i < count)
for each iteration push the value at i
once the loop is done, return the value of newArray
*/

function take(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
