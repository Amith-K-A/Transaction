const mongoose = require("mongoose");

const Transaction = mongoose.model(
  "transaction",
  new mongoose.Schema({
    walletId: String,
    amount: Number,
    balance: Number,
    description: String,
    date: Date,
    type: String,
  })
);

module.exports = Transaction;