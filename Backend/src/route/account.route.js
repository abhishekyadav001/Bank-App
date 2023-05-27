const express = require("express");
const accountRouter = express.Router();
accountRouter.get("/", (req, res) => {
  res.send("this is a accountRouting page");
});
module.exports = { accountRouter };
