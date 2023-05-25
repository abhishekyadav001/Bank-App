const express = require("express");
const usersModel = require("../model/users.model");
const UserRoute = express.Router();
UserRoute.get("/", async (req, res) => {
  try {
    const users = usersModel.find();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});

UserRoute.post("/", async (req, res) => {
  const { username, email, password } = req;
  try {
    // const users = usersModel.create({ username: username, email: email, password: password });
    // res.send({ message: "user_succesfully have been singin" });
    bcrypte.hash(password, 5, async (err, result) => {
      const user = new UserModel({ username: username, email: email, password: result });
      user.save();
      res.send("sign up successfull");
    });
  } catch (error) {
    res.send(error.message);
  }
});
UserRoute.post("/login", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = { UserRoute };
