const db = require("../models");
const User = db.data1;
// save data
exports.create = (req, res) => {
  console.log("1")
  if (!req.body.userId) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User({
    userId: req.body.userId,
    displayName: req.body.displayName,
    displayImage: req.body.displayImage,
    coupon: {
      c1: req.body.c1,
      c2: req.body.c2
    }
  });

  user
    .save(user)
    .then((data) => {
      console.log({data})
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user.",
      });
    });
};