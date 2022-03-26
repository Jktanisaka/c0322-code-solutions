/* exported getValue */
/*
create new function with the parameters object and key
use a for-in loop to iterate through the object
use the provided key to get the corresponding value from the object
set variable i to the value
return i from the function
*/
function getValue(object, key) {
  for (var i in object) {
    i = object[key];
  }
  return i;
}
