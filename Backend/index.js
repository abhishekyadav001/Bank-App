const port = process.env.PORT || 8080;
const express = require("express");
require("dotenv").config();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});
app.use(express.json());

app.listen(port, () => {
  console.log("listeneing port", port);
});
