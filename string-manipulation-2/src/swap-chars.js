/* exported swapChars */
/*
create new function with parameters firstIndex, secondIndex, and string
create var newString and assign an empty string (will be adding letters to this)
write a for loop that iterates through each letter in the string
the loop will replace the specified index numbers with each other without altering
the other letters in the string
if i is equal to the first index, then assign the value at the secondindex
if i is equal to the second index, then assign the value at the firstIndex
if neither happens, push the value at string[i]
once the loop is done increment i by 1
once the loop is done return newString
*/
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
