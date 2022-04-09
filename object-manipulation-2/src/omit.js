/* exported omit */
/*
purpose: function that creates an object composed of the properties not in keys
create new function with parameters source(object) and keys(array)
define new variable with an empty obj (newObj)
assign source to newObj, so it can be edited without altering the original object
create a for loop to iterate through keys. if source at keys exists, delete that
property from newObj
once the loop is done, return newObj
*/
function omit(source, keys) {
  var newObj = {};
  newObj = Object.assign(newObj, source);
  for (var i = 0; i < keys.length; i++) {
    if (newObj[keys[i]] !== undefined) {
      delete newObj[keys[i]];
    }
  }
  return newObj;
}
