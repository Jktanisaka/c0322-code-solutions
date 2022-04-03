/* exported isPalindromic */
/*
purpose: detect if a string is a palindrome
create a new function with parameter string
create an empty string and assign it to newStr
create a for loop that iterates backwards through the string and adds
each value to newStr
convert both strings to lowercase and remove all spaces so they can be compared
if the original string is equal to the new string, return true
else, return false
*/
function isPalindromic(string) {
  var newStr = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  if (newStr.replaceAll(' ', '').toLowerCase() === string.replaceAll(' ', '').toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
