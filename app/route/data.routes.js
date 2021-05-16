module.exports = (app) => {
  const user = require("../controllers/user.controller.js");
  const router = require("express").Router();
  router.post("/", user.create);

  // router.get("/", data.findAll)
  // router.get("/published", data.findAllPublished)
  // router.get("/:id", data.findOne);
  // router.put("/:id", data.update);
  // router.delete("/:id", data.delete);
  // router.delete("/", data.deleteAll);

  app.use("/api/data", router);
};
