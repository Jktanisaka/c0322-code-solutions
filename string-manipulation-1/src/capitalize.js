/* exported capitalize */
/*
make new function with word as parameter
assign empty string to new variable (newWord)
make word[0] uppercase and concatenate to empty string (use toUpperCase)
create for loop that iterates through word
initialize new variable(i) to 1,
condition - if new variable(i) is less than the length, run code
, increment variable by 1 after code ends.
code block - make letters lowercase and concatenate the value to newWord (use toLowerCase)
return value of newWord after loop ends
*/

function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
