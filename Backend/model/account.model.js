const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  accountNumber: { type: String, required: true },
  balance: { type: Number, required: true },
  transactionDate: { type: Date, default: Date.now },
  // Additional fields for account details (example, account type, status, etc.)
});

module.exports = mongoose.model("Account", accountSchema);
