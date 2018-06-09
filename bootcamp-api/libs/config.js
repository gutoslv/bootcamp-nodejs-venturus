module.exports = {
  database: 'bootcamp',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'bootcamp.sqlite',
    define: {
      undescored: true
    }
  },
  jwtSecret: 'B007C4MP-AP1',
  jwSession: {
    session:false
  }
};