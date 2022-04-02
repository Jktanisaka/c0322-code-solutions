/* exported pick */
/*
purpose: function that creates an object composed of the picked properties and
returns a new object
create new function with parameters source(object) and keys(array)
define new variable with an empty obj (newObj)
create a for loop to iterate through keys. if source at keys exists, add it to newObj,
if it does not exist, do nothing
once the loop is done, return newObj
*/

function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];

    }
  }
  return newObj;
}
