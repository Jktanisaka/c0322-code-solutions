/* exported capitalizeWord */
/*
make a new function with the parameter word (string value)
make a new variable newWord and assign it an empty string
set variable lowerCase to the lowercase value of string
set the first letter to uppercase and add and assign that value to newWord
take every letter except the first one from lowerCase and add/assign it to newWord
write if/else statement to check if value is Javascript
if it is, return JavaScript
else, return newWord
*/

function capitalizeWord(word) {
  var newWord = '';
  var lowerCase = word.toLowerCase();
  newWord += word[0].toUpperCase();
  newWord += lowerCase.substring(1);
  if (newWord === 'Javascript') {
    return 'JavaScript';
  } else {
    return newWord;
  }
}
