const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'Bootcamp API OK!'});
});

app. listen (port, () => {
  console.log(`Bootcamp API - porta ${port}`);
})