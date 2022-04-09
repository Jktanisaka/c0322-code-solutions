var array = [
  {
    isbn: '1212',
    title: 'title of a book',
    author: 'Jonathan Tanisaka'
  },
  {
    isbn: '123552',
    title: 'title of a booook',
    author: 'Tonathan Janisaka'
  },
  {
    isbn: '123212352',
    title: 'Bitle of a Took',
    author: 'Jonathanika Tanisakathan'
  }
];
console.log('array of books:', array);
console.log('typeof array of books:', typeof (array));

JSON.stringify(array);
console.log('JSON array of books', JSON.stringify(array));
console.log('typeof JSON array of books:', typeof (JSON.stringify(array)));

var student = '{"name":"Jonathan Tanisaka", "ID": 1324544}';
console.log('JSON string student', student);
console.log('typeof String student:', typeof student);

var studentParse = JSON.parse(student);
console.log('json parse', studentParse);
console.log('json parse typeof:', typeof studentParse);
