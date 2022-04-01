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

JSON.stringify({ name: 'Jonathan', ID: '12341234' });
console.log('JSON string', JSON.stringify({ name: 'Jonathan', ID: '12341234' }));

console.log('typeof String:', typeof JSON.stringify({ name: 'Jonathan', ID: '12341234' })
);

JSON.parse(JSON.stringify({ name: 'Jonathan', ID: '12341234' }));
console.log('json parse', JSON.parse(JSON.stringify({ name: 'Jonathan', ID: '12341234' })));

console.log('json parse typeof:', typeof JSON.parse(JSON.stringify({ name: 'Jonathan', ID: '12341234' })));
