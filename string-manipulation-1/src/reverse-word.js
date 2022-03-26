/* exported reverseWord */
/*
 create new function with parameter word
 create empty string and assign to variable newWord
 create for loop to iterate through each value of the word from the last valuee to the first
 ( set new variable i = last value of word; if i is greater than or equal to 0 -
  run the code block; decrement i by 1 at the end of each loop)
 for each iteration concatenate the value of the character to newWord
 return the value of newWord
*/

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
