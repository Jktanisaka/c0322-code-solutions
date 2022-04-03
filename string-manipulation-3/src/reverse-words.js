/* exported reverseWords */
/*
purpose: write a function that reverses the words in a string while maintaining their
order
create a new function with parameter string
split the string, reverse the values, join the string together
then split the string at spaces, reverse the values, and join them together again

*/

function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
