const db = require("../models");
const Transaction = db.transaction;

exports.getTransactions = async function (req, res) {
  const walletId = req.query.walletId;
  const skip = req.query.skip;
  const limit = req.query.limit;
  try {
    const result = await Transaction.find({ walletId: walletId })
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    res.send(result);
  } catch (error) {
    return res.send(500, error);
  }
};
