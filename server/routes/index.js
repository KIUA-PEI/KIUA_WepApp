const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, '../../app', 'build', 'index.html'));
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;