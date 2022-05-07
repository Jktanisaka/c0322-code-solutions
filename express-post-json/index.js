const express = require('express');
const app = express();

const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const keys in grades) {
    gradesArr.push(grades[keys]);
  }
  res.json(gradesArr);
});

app.listen(3000, () => {
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newObj = req.body;
  newObj.id = nextId;
  grades[nextId] = newObj;
  nextId++;
  res.status(201);
  res.json(newObj);
});
