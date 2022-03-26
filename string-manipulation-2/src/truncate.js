/* exported truncate */
/*
create a new function with parameters length and string

*/
function truncate(length, string) {
  var newString = '';
  /*
  if (string === '') {
    return '...';
  }
  for (i = 0; (i < length) && (i < string.length); i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}
*/
  var i = 0;
  while ((i < length) && (i < string.length)) {
    newString += string[i];
    i++;
  }
  newString += '...';
  return newString;
}
