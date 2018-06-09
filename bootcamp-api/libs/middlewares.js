module.exports = app => {
  const port = 3000;

  app.listen(port, () => {
    console.log(`Bootcamp API - porta ${port}`);
  });
};