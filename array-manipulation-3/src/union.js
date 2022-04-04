/* exported union */
/*
purpose: createa a function that contains values from 2 arrays with no duplicates

create a new function with parameters first and second
create a new variable(uniqueArr) and set it to the first array (can use spread)
make a for loop that iterates through the second array
if the value at second[i] is not already in the uniqueArr, then push the value
to the end of uniqueArr
once the loop is done, return uniqueArr
*/
function union(first, second) {
  var uniqueArr = [...first];
  for (var i = 0; i < second.length; i++) {
    if (uniqueArr.includes(second[i]) === false) {
      uniqueArr.push(second[i]);
    }
  }
  return uniqueArr;
}
