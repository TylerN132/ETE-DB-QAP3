const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  gamesDAL.getusersprogression();
  response.send("Hello World");
});
