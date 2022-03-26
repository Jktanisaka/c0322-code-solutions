/* exported numVowels */
/*
create function with parameter string
create new var count with value of 0
write a for loop that iterates through each value in the string
if the value is equal to a vowel, increment count by 1
once the loop is done, return the count
*/
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      count++;
    }
  }
  return count;
}
