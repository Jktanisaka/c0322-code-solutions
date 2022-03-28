/* exported drop */
/*
create new function with parameters array and the count
create empty array and assign to new variable
write a for loop that iterates each value except the values specified in count,
 start after the count (i = count) to ensure the proper values are dropped
for each iteration push the value at i, increment i by 1
once the loop is done, return the value of newArray
*/

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
