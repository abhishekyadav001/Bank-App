const { default: mongoose } = require("mongoose");
require("dotenv").config();
const url = process.env.DB_URL;
const connection = () => {
  mongoose.connect(url);
};

module.exports = { connection };
