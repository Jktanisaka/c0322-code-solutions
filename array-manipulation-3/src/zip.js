/* exported zip */
/*
purpose: take 2 arrays as input and return an array of arrays
create newArr and assign an empty array
create a for loop that iterates through the arrays until the length of the shortest
array has been reached (this will prevent the loop from running longer than necessary)
for each loop iteration, push an array with the values of both arrays[i] into newArr
once the loop is done, return the newArr variable
*/

function zip(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    newArr.push([first[i], second[i]]);
  }
  return newArr;
}
