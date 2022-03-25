/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newSuffix = [];
  for (var i = 0; i < words.length; i++) {
    newSuffix.push(words[i] + suffix);
  }
  return newSuffix;
}
