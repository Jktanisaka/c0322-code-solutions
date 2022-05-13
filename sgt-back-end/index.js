const pg = require('pg');
const express = require('express');
const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Query failed' });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const courseName = req.body.course;
  const score = Number(req.body.score);
  const params = [name, courseName, score];
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  if (!Number.isInteger(score) || score <= 0 || score > 100) {
    res.status(400).json({ error: 'score must be an integer between 0 and 100' });
    return;
  }
  if (!name || !courseName || !score) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
  } else {
    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Query failed' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const courseName = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  const params = [name, courseName, score, gradeId];
  const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
  `;
  if (!Number(req.params.gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'invalid ID, must be a positive integer' });
    return;
  }
  if (!name || !courseName || !score) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
  } else {
    db.query(sql, params)
      .then(result => {
        if (!result.rows[0]) {
          res.status(404).json({ error: `Cant find grade with gradeId ${gradeId}` });
        } else {
          res.status(200).json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Query failed' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const sql = `
  delete from "grades"
  where "gradeId" = ${gradeId}
  returning *;
`;
  if (!Number(req.params.gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'invalid ID, must be a positive integer' });
    return;
  }
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cant find grade with gradeId ${gradeId}` });
      } else {
        res.status(204).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Query failed' });
    });
});

app.listen(3000, () => {
  process.stdout.write('running' + '\n');
});
