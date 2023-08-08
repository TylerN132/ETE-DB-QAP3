const express = require("express");
const router = express.Router();
const gamesDAL = require("./gamesDAL");

router.get("/", async (request, response) => {
  const rows = await gamesDAL.getallusers();
  try {
    console.log(rows);
    response.render("index", { rows });
  } catch (e) {
    console.error(e);
    response.render("Oopsie");
  }
});

module.exports = router;
