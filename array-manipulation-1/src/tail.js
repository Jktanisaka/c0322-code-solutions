/* exported tail */
/*
create new function with parameter array
create new variable newArray and assign an empty array
if array is empty, return empty array
create for loop to iterate through all values of the array except the first
(initialize i = 1 instead of 0)
increment i by 1 each iteration
for each value push it to newArray
return newArray
*/

function tail(array) {
  var newArray = [];
  if (array === []) {
    return [];
  }
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
