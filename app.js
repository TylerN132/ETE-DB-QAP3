const gamesDAL = require("./gamesDAL");
const express = require("express");
const app = express();
const { Pool } = require("pg");
const router = require("./Router");
const port = process.env.PORT || 3000;
const methodoverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(methodoverride("_method"));
//app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(port, () => {
  console.log("Server running on this port! " + port);
});
