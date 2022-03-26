/* exported truncate */
/*
create a new function with parameters length and string
create variable newString and assign an empty string
create for loop set var i = 0;for loop will run if i is less than the length
and if i is less than the length of the string (this prevents the loop going
further than the length of the string); iterate i by 1 at the end of each loop
for each iteration concatenate and assign the value of string[i]
after the loop is done add an ellipses and return newString

*/
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length && i < string.length; i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}
