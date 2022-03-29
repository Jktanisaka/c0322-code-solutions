/* exported lastChars */
/*
make new function with parameters length and string
create new var newString and assign an empty string
if the length is larger than the total length of the string, return the entire string
create a for loop that iterates through the string until it reaches length or the end of the string
the loop must start at the length of the string - length
for each iteration add the value of string to newstring
once the loop is done return newString

*/

function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
