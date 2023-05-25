const express = require("express");
const { UserRoute } = require("./route/users.route");
const { connection } = require("./config/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});

app.use("/user", UserRoute);
app.listen(8080, async () => {
  try {
    await connection();
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
  console.log("listeneing port", 8080);
});
