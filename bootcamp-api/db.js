const Sequelize = require('sequelize');

module.exports = app => {
  const config = app.libs.config;
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.params
  );

  return sequelize;
}