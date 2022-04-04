/* exported difference */
/*
purpose: create a function that takes 2 arrays and returns an array with values
that exist in only one of the arrays
create a new variable and assign it an empty array
create a for loop to iterate through the first array
if the value at first[i] is not present in the second array
then push the value of first[i] to uniqueArr
create another for loop to iterate through the second array
if the value at second[f] is not present in first or uniqueArr
then push the value at second[f]
once the loops are done, return uniqueArr
*/

function difference(first, second) {
  var uniqueArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      uniqueArr.push(first[i]);
    }
  }
  for (var f = 0; f < second.length; f++) {
    if (first.includes(second[f]) === false && uniqueArr.includes(second[f]) === false) {
      uniqueArr.push(second[f]);
    }
  }
  return uniqueArr;
}
