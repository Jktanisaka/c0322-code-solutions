/* exported invert */
/*
purpose: create a function that takes an object as input and will return a new object but with the keys and
values inverted
 create a new function with the parameter source
 create var newObj to serve as the new object with the requested key-values
 create a for in loop to iterate through every property in the object
 in the loop assign the value as the keyname in newObj
 once the loop is done, return newObj
*/
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
