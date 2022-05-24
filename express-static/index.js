const express = require('express');
const path = require('path');
const app = express();

path.join(__dirname, 'public');

const middleStatic = express.static('public');

app.use(middleStatic);

app.listen(3000, () => {
});
