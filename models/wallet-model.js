const mongoose = require("mongoose");

const Wallet = mongoose.model(
  "wallet",
  new mongoose.Schema({
    name: String,
    balance: Number,
    userId: Number,
    date: Date,
    transactionId: []
  })
);

module.exports = Wallet;
