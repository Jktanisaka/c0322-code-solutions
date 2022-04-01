/* exported invert */
/*
purpose: create a function that takes an object as input and will return a new object but with the keys and
values inverted
 create a new function with the parameter source
 create a for in loop to iterate through every property in the object
*/
var newObj = {};
function invert(source) {
  var values = Object.values(source);
  var keys = Object.keys(source);
  for (var i = 0; i < values.length; i++) {
    newObj[values[i]] = keys[i];

  }
  return newObj;

}
