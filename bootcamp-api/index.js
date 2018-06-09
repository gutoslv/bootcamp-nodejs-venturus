const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'Bootcamp API OK!'});
});

app.get('/tasks', (req, res) => {
  res.json({
    tasks: [
      { name: 'Pão' },
      { name: 'Nanana' },
      { name: 'Pão-Nanana'}
    ]
  });
});

app. listen (port, () => {
  console.log(`Bootcamp API - porta ${port}`);
});