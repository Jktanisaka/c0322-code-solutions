/* exported reverseWords */
/*
purpose: write a function that reverses the words in a string while maintaining their
order
create a new function with parameter string
create new variable splitStr with the value of string, split at the spaces
create var newArray and assign an empty array
create a for loop to iterate through the split string
create a for loop within the previous one to go backwards through each word in splitstr
go past the value at splitStr[i] to create spaces
add each value to newArray
if the value of splitstr[i][f] is undefined, push a space
once the loops are done join newArray at the spaces and return the substring(1) of it
(this ensures that the space at the start is taken out)
return newString
*/

function reverseWords(string) {
  var splitStr = string.split(' ');
  var newArray = [];
  for (var i = 0; i < splitStr.length; i++) {
    for (var f = splitStr[i].length; f >= 0; f--) {
      newArray.push(splitStr[i][f]);
      if (splitStr[i][f] === undefined) {
        newArray.push(' ');
      }
    }
  }
  var newString = newArray.join('').substring(1);
  return newString;
}
