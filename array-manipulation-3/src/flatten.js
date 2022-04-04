/* exported flatten */
/*
purpose: create a function that returns a new array with any direct child arrays unwrapped
(should only flatten first level)
create a new function with parameter array
create new variable and assign it the value of the spread value of array being
concatenated into an empty array
return flatArray
*/

function flatten(array) {
  var flatArray = [].concat(...array);
  return flatArray;
}
