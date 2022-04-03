/* exported flatten */
/*
purpose: create a function that returns a new array w ith any direct child arrays unwrapped
(should only flatten first level)
create a new function with parameter array

*/

function flatten(array) {
  var flatArray = [].concat(...array);
  return flatArray;
}

/*
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array = array[i].concat[array[i + 1]];
    }
  }
  return array;
}
*/
