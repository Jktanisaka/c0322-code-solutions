/* exported getKeys */
/*
create new function with parameter object
assign empty array to variable keys
create for-in loop to iterate through every property in the object
push the keys of the object(i) into var keys array
return var keys once the loop is done
*/

function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}
