/* exported swapChars */
/*
create new function with parameters firstIndex, secondIndex, and string
both indexes will be numbers
split the string into an array so it can be manipulated and assign it to the variable newString
store the values of string[firstIndex] and
string[secondIndex] in variables to be used later
assign the stored values to their corresponding index spots in the array (
  assign value of secondindex to the firstindex value in the array
  assign value of firstindex to the sexondindex value in the array
)
join the array back into a string and return the value
*/
/*
function swapChars(firstIndex, secondIndex, string) {
  var newString = string.split('');
  var first = string[firstIndex];
  var second = string[secondIndex];
  newString[firstIndex] = second;
  newString[secondIndex] = first;
  return newString.join('');
}
*/
function swapChars(firstIndex, secondIndex, string) {
  var first = string[firstIndex];
  var second = string[secondIndex];
  var newString = string.replace(second, first);
  newString = newString.replace(newString[firstIndex], second);
  return newString;
}
