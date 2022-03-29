/* exported firstChars */
/*
make new function with parameters length and string
create new var newString and assign an empty string
create a for loop that iterates through the array until it reaches length or the end of the string
(use i < string.length && i < length)
for each iteration add the string at i to newstring
once the loop is done, return newString
*/

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < string.length && i < length; i++) {
    newString += string[i];
  }
  return newString;
}
