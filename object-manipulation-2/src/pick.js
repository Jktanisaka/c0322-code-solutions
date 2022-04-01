/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source) {

      newObj[keys[i]] = source[keys[i]];

    }
  }
  return newObj;
}

/* = 0; i < source.length; i++) {
console.log(source[keys[i]])
    if (keys[i] === source[keys[i]]) {
      newObj.);
    }
  }
}
*/
