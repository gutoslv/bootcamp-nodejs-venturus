const fs = require('fs');
const Sequelize = require('sequelize');
const path = require('path');

module.exports = app => {
  const config = app.libs.config;
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.params
  );

  const db = {
    sequelize,
    models: {}
  }

  const dir = path.join(__dirname, 'models');

  fs.readdirSync(dir).forEach(file => {
    
  });

  return db;
};