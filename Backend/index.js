const express = require("express");
const { UserRoute } = require("./route/users.route");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});

app.use("/user", UserRoute);
app.listen(8080, () => {
  console.log("listeneing port", 8080);
});
