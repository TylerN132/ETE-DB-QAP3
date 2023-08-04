const express = require("express");
const router = express.Router();
const gamesDAL = require("./gamesDAL");
router.get("/", (request, response) => {
  gamesDAL.getusersprogression();
  response.send("Hello World");
});

router.get("/", async (request, response) => {
  const { rows: users } = await gamesDAL.getallusers();
  response.render("index", { users });
});
