module.exports = app => {
  const port = 3000;

  const app = express();

  app.listen(port, () => {
    console.log(`Bootcamp API - porta ${port}`);
  });
};