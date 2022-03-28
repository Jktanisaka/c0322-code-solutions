/* exported getValues */
/*
create new function with parameter object
assign empty array to variable values
create for-in loop to iterate through every property in the object
push the values of the object (object[i]) into the array values
return values once the loop is done
*/
function getValues(object) {
  var values = [];
  for (var i in object) {
    values.push(object[i]);
  }
  return values;
}
