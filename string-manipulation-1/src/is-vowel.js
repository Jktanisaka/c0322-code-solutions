/* exported isVowel */
/*
  make new function with char(a single string character) as parameter
  create if statement comparing character to vowels (
    convert character to uppercase - this will ensure that both uppercase and lowercase letters can pass through the function
  )
if the character is strictly equal to A or E or I or O or U or Y - return true
else, return false
*/

function isVowel(char) {
  var newChar = char.toUpperCase();
  if ((newChar === 'A') || (newChar === 'E') || (newChar === 'I') || (newChar === 'O') || (newChar === 'U') || (newChar === 'Y')) {
    return true;
  } else {
    return false;
  }
}
