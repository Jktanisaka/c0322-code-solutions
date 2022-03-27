/* exported chunk */
/*
create new function with parameters array and size
size is the number of values in each sub-array
create var newArray and assign an empty array
create for loop that iterates through each value but must increment the value of i
by the value of size
for each iteration, slice the values required from size and push them into newArray
once the loop is done return newArray
*/
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
