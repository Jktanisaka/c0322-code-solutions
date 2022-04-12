/* exported intersection */
/*
purpose: create a function that returns unique values in 2 strings

create new function with parameters first and second
create new var(uniqueArr) and assign an empty array
create a for loop that iterates through the first array
if the value at first[i] is present in the second array,
  push it to uniqueArr
(it is important to push the value from the first array so the order is maintained)
once the loop is done, return uniqueArr
*/
function intersection(first, second) {
  var uniqueArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) !== false) {
      uniqueArr.push(first[i]);
    }
  }
  return uniqueArr;
}
