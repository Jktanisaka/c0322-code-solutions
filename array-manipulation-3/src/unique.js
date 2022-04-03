/* exported unique */
/*
purpose: create a function that returns an array with only unique elements of the
array in the order they appear
create a function  with parameter array
create new variable and assign an empty array
create a for loop to iterate through every value in array
if the value does not exist in newArr (use includes), push it to newArr
once the loop is done, return newArr
*/
function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (newArr.includes(array[i]) === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
