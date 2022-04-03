/* exported isAnagram */
/*
purpose: detect if 2 strings are anagrams
create a function with parameters firstString and secondString
remove all spaces from both strings
split both strings, sort them, then join them back together so they can be compared
if they are equal to each other, then they are anagrams (return true)
if they are not equal to each other, return false
*/
function isAnagram(firstString, secondString) {
  var first = firstString.replaceAll(' ', '');
  var second = secondString.replaceAll(' ', '');
  if (first.split('').sort().join('') === second.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
}
