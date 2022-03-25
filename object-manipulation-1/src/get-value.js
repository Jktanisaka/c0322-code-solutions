/* exported getValue */
/*
create new function with the parameters object and key
use a for-in loop to iterate through the object
use the provided key to get the corresponding value from the object

*/
function getValue(object, key) {
  for (var x in object) {
    x = object[key];
  }
  return x;
}
