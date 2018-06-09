const express = require('express');
const consign = require('consign');

const app = express();

consign()
  .include('libs/middlewares.js')
  .then('routes')
  .into(app)

app. listen (app.get('port'), () => {
  console.log(`Bootcamp API - porta ${app.get('port')}`);
});