const mongoose = require("mongoose");

const Wallet = mongoose.model(
  "wallet",
  new mongoose.Schema({
    name: String,
    date: Date,
    balance: Number,
    transactionId: []
  })
);

module.exports = Wallet;
