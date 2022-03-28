/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] === source.keys) {
      return newObj;
    }
  }
}
