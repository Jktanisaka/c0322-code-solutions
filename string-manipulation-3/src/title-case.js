/* exported titleCase */

/*
purpose, create  function that converts a string(title) to titleCase
titleCase = Capitalize the first word of the title and of any subtitle.
Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words (e.g., Self-Report not Self-report).
Capitalize all words of four letters or more.
Use  lowercase only for “minor” words of three letters or fewer, namely, for conjunctions
(words like and, or, nor, and but), articles (the words a, an, and the), and prepositions
(words like as, at, by, for, in, of, on, per, and to), as long as they aren’t the first
word in a title or subtitle.
JavaScript and API may be hard coded

FUNCTION
create a function with parameter title(string)
convert every character in title to lowercase
create array minorWords to store all minor words
split title at spaces and assign that value to the new variable newTitle
create a for loop to iterate through newTitle
  within that for loop check to see if a colon exists in that word, if it does then capitalize the next word
  create another for loop to iterate through each value in minorWord and check it against the current word
  if the values match, increment i by 1 (this essentially skips the current value from being capitalized)
convert all other words to uppercase the first letter
run conditionals to check if the value is javascript or API and return the proper value
create conditional to check if a hyphen exists in the word, if it does then split the word at the hyphen
and capitalize both values in the splitStr array, then join them back up and assign that value to the current index
once the loop is done, capitalize the first letter and return the joined value of newTitle

*/
function titleCase(title) {
  title = title.toLowerCase();
  var minorWords = ['and', 'or', 'nor', 'but', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'a', 'an', 'the'];
  var newTitle = title.split(' ');
  for (var i = 0; i < newTitle.length; i++) {
    if (newTitle[i].indexOf(':') !== -1) {
      newTitle[i + 1] = newTitle[i + 1].charAt(0).toUpperCase() + newTitle[i + 1].slice(1);
    }
    for (var f = 0; f < minorWords.length; f++) {
      if (newTitle[i] === (minorWords[f])) {
        i++;
      }
    }
    newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1);
    if (newTitle[i] === 'Javascript') {
      newTitle[i] = 'JavaScript';
    } else if (newTitle[i] === 'Javascript:') {
      newTitle[i] = 'JavaScript:';
    } else if (newTitle[i] === 'Api') {
      newTitle[i] = 'API';
    } else if (newTitle[i].indexOf('-') !== -1) {
      var splitStr = newTitle[i].split('-');
      splitStr = splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1) + '-' + splitStr[1].charAt(0).toUpperCase() + splitStr[1].slice(1);
      newTitle[i] = splitStr;
    }
  }
  newTitle[0] = newTitle[0].charAt(0).toUpperCase() + newTitle[0].slice(1);
  return newTitle.join(' ');
}
