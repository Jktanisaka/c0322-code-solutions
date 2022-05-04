const data = Math.random().toString() + '\n';
const fs = require('fs');
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
