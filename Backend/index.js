require("dotenv").config();
const port = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});

app.listen(port, () => {
  console.log("listeneing port", port);
});
