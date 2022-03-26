/* exported initial */
/*
create new function with parameter array
create new variable newArray and assign an empty array
if array is empty, return empty array
create for loop to iterate through all values of the array except the last
(i < array.length - 1)
increment i by 1 each iteration
for each value push it to newArray
return newArray
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
