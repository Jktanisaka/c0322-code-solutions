const fs = require('fs');

const specifiedFile = process.argv[2];

fs.readFile(specifiedFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
