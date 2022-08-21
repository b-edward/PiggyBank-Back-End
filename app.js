require("dotenv").config();
const express = require("express");
const cors = require("cors");
const user = require("./routes/user");
const moduleRoute = require("./routes/module");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

//NOTE: Run with cmd terminal to use nodemon
const app = express();

sequelize
  .sync()
  .then((result) => {
    app.listen(parseInt(process.env.PORT));
  })
  .catch((e) => {
    console.log("Failed to sync", e);
  });

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/user", user);
app.use("/module", moduleRoute);

app.get("*", (req, res) => {
  res.status(404).send({ error: "Invalid path" });
});
