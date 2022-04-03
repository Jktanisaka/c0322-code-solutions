/* exported difference */
/*
purpose: create a function that takes 2 arrays and returns an array with values
that exist in only one of the arrays
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
