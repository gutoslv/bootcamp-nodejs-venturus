module.exports = app => {
  const Tasks = app.db.models.Tasks;

  app
    .route("/tasks")
    .get(async (req, res) => {
      try {
        const tasks = await Tasks.findAll();

        res.json(tasks);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unexpected error" });
      }
    })

    .post(async (req, res) => {
      try {
        const task = await Tasks.create(red.body);
        res.json(task);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unexpected error" });
      }
    });

  app
    .route("/tasks")
    .get(async (req, res) => {
      try {
        const task = await Tasks.findById(req.params.id);

        if (task) {
          res.json(task);
        } else {
          res.sendStatus(404);
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unexpected error" });
      }
    })

    .put(async (req, res) => {
      try {
        await Tasks.update(req.body, {
          where: {
            id: req.params.id
          }
        });

        res.sendStatus(204);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unexpected error" });
      }
    })

    .delete(async (req, res) => {
      try {
        await Tasks.destroy({
          where: {
            id: req.params.id
          }
        });

        res.sendStatus(204);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unexpected error" });
      }
    });
};
