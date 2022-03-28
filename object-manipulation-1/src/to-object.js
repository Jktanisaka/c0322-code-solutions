/* exported toObject */
/*
create new function with keyvaluepair as a parameter
keyvaluepair will be an array with a key and a value
key is at keyvaluepair[0], value is at keyvaluepair[1]
assign empty object to variable pair
assign value to key within the variable pair
return variable pair
*/
function toObject(keyValuePair) {
  var pair = {};
  pair[keyValuePair[0]] = keyValuePair[1];
  return pair;
}
