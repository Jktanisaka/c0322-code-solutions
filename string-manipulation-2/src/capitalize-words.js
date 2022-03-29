/* exported capitalizeWords */
/*
create new function with the parameter string
new variable newWord will be assigned an empty string
make variable and assign the value of the lowercase string (tolowercase)
split up the string into individual strings (split at spaces)
write a for loop that iterates through each word
during each loop, capitalize the first letter and add the rest of them (use substring) together
once the loop is done running the value of splitstring will be an array
return the value of the array after it has been joined together as a string
*/

function capitalizeWords(string) {
  var splitString = string.toLowerCase();
  splitString = splitString.split(' ');
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
  }
  return splitString.join(' ');
}
