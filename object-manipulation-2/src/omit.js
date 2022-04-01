/* exported omit */
function omit(source, keys) {
  var newObj = {};
  newObj = Object.assign(newObj, source);

  for (var i = 0; i < keys.length; i++) {
    if (newObj[keys[i]] !== undefined) {
      delete newObj[keys[i]];

    }
  }
  return newObj;
}
