/* exported isLowerCased */
/*
make new function with word as parameter
word will be a string value
make a for loop to iterate through the string
initialize new var i to 0
condition - if i is less than string length, execute code block
final - increment i by 1 after code block is done
code block - if statement -
if value is strictly not equal to lowercase of that value
return false
(if the code block runs without returning false then return true)
return true outside of code block
(this is essentially the same as the toUpperCase exercise)
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
