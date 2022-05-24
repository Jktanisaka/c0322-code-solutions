const express = require('express');
const path = require('path');
const app = express();

const mainPath = path.join(__dirname, 'public');

const middleStatic = express.static(mainPath);

app.use(middleStatic);

app.listen(3001, () => {
});
