const gamesDAL = require("./gamesDAL");
const express = require("express");
const app = express();
const { Pool } = require("pg");
const Router = require("./Router");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on this port! " + port);
});

app.use("/", Router.js);
