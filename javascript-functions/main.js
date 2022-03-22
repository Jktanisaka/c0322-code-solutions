function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('number of seconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('greeting:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('area:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('first name:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
console.log('last element in array:', getLastElement(['propane', 'and', 'propane', 'accessories']));
