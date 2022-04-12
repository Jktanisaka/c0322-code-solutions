/* exported flatten */
/*
purpose: create a function that returns a new array with any direct child arrays unwrapped
(should only flatten first level)
create a new function with parameter array (flatArr)
create new variable and assign it an empty array
make a for loop to iterate through array
create a conditional to check if the current index is an array,
if it isnt an array push the value to flarArr
if the value is an array,
run another for loop to push the values inside of that array
once the loops are done return the value of flatArr
return flatArray
*/

function flatten(array) {
  var flatArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArr.push(array[i]);
    } else {
      for (var f = 0; f < array[i].length; f++) { flatArr.push(array[i][f]); }
    }
  }
  return flatArr;
}
