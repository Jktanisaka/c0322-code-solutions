/* exported setValue */
/*
create a new function with the parameters object, key, and value
create  for-in loop that goes through the object to the provided key and
assign that key to value
return prop
*/
function setValue(object, key, value) {
  object[key] = value;
}
