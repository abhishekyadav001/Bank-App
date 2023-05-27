const mongoose = require("mongoose");

const accountModel = new mongoose.Schema(
  {
    objectid: { type: String, required: true },
    amount: { type: Number, required: true },

    // Additional fields for user details (example- name, age, address, etc.)
  },
  { timestamps: true }
);
const userModel = mongoose.model("account", userSchema);

module.exports = { userModel };
