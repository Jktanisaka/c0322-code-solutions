const fs = require('fs');
const data = require('./data.json');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const newArr = [];
  for (const i in data.notes) {
    newArr.push(data.notes[i]);
  }
  res.status(200).json(newArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else if (data.notes[req.params.id]) {
    res.status(200).json(data.notes[req.params.id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    const newObj = req.body;
    newObj.id = data.nextId;
    data.notes[data.nextId] = newObj;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(201).json(newObj);
      }
    });
  }
}
);

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else if (req.params.id) {
    delete data.notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(204).json({});
      }
    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || !req.body.content) {
    res.status(400).json({ error: 'ID must be a positive integer and content is a required field' });
  } else if (req.body.content) {
    data.notes[req.params.id].content = req.body.content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.listen(3000, () => {
  process.stdout.write('running' + '\n');
});
