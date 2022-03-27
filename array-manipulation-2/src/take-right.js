/* exported takeRight */
/*
create new function with parameters array and the count
create empty array and assign to new variable
use if statement to check if the length of the array is 0
if it is, return an empty array
write a for loop that iterates each value, starting at the count and continuing
until the array length has been reached
for each iteration push the value at i
then increment i by 1
once the loop is done, return the value of newArray
  */

function takeRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    newArray = array;
    return newArray;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
