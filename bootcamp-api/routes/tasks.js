module.exports = app => {
  app.get("/tasks", (req, res) => {
    res.json({
      tasks: [{ name: "Pão" }, { name: "Nanana" }, { name: "Pão-Nanana" }]
    });
  });
};
