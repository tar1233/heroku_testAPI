// const functions = require("firebase-functions");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8081;

var corsOptions = {
  origin: `*` 
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    console.log("test")
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./app/route/data.routes")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });



