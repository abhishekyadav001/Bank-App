const express = require("express");
const transactionModel = require("../model/transaction.model");
const authMiddleware = require("../middleware/auth.middleware");

const transactionRouter = express.Router();
transactionRouter.use(authMiddleware);
transactionRouter.get("/", async (req, res) => {
  try {
    const alltransactions = await transactionModel.find();

    res.status(201).send({ msg: "all user is get successfully", payload: { alltransactions } });
  } catch (error) {}
});

transactionRouter.post("/", async (req, res) => {
  try {
    const { userID, amount, type } = req.body;

    const transaction = await transactionModel.create({ userID, amount, type });

    res.status(201).send({ msg: "Transaction Successfull" });
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = transactionRouter;
