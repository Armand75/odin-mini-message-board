const express = require("express");
const router = express.Router();
const messages = require("./home").messages

router.post("/", (req, res) => {
  console.log(req.body);
  messages.push(req.body);

  res.redirect("/");
});
router.get("/", (req, res) => {
  res.render("new");
});
module.exports = {router};
