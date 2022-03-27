/* exported dropRight */
/*
create new function with parameters array and the count
create empty array and assign to new variable
write a for loop that iterates through each value in the array until the specified count
(i  < array.length - count as the condition)
for each iteration push the value at i
then increment i by 1
once the loop is done, return the value of newArray
  */

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
