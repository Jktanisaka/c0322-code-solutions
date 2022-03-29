/* exported ransomCase */
/*
make a new function with the parameter string
make every letter in the string lowercase
write a for loop that iterates through every character in the string
(var i = 0; i < string.length; i++)
code block will need to pick every other character and capitalize it, then add that value
to ransomString
if the remainder of i/2 is strictly equal to 0 then add the letter to ransomString
else add the uppercase letter to ransomstring
after the loop has ended, return the value of ransomString
*/

function ransomCase(string) {
  var lowerString = string.toLowerCase();
  var ransomString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomString += lowerString[i];
    } else {
      ransomString += lowerString[i].toUpperCase();
    }
  }
  return ransomString;
}
