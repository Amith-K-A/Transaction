const db = require("../models");
const Wallet = db.wallet;
const Transaction = db.transaction;

exports.createWallet = (req, res) => {
  const wallet = new Wallet({
    userID: req.body.userId,
    name: req.body.name,
    balance: req.body.balance,
    Date: new Date(),
    transactionId: req.body.transactionId,
  });

  wallet.save((err, wallet) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send(wallet);
  });
};

exports.getWallet = (req, res) => {
  const walletId = req.params.walletId;

  Wallet.findOne({ _id: walletId }, (err, wallet) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send(wallet);
  });
};

exports.transaction = async (req, res) => {
  const walletId = req.params.walletId;
  const amount = req.body.amount;
  const description = req.body.description;

  await Wallet.findOne({ _id: walletId }, async function (err, wallet) {
    if (err) return res.send(500, { error: err });
    if (!wallet) return res.send(500, { error: "Wallet not found" });

    const result = wallet.balance - Math.abs(amount);

    if (amount > 0) {
      wallet.balance = wallet.balance + amount;
    } else {
      if (result >= 0) {
        wallet.balance = result;
      } else {
        return res.send(500, { error: "Low balence" });
      }
    }

    const session = await Transaction.startSession();
    session.startTransaction();
    const opts = { session };

    const transaction = new Transaction({
      walletId: walletId,
      amount: Math.abs(amount),
      balance: wallet.balance,
      description: description,
      date: new Date(),
      type: amount > 0 ? "CREDIT" : "DEBIT",
    });

    transaction.save(opts, async (err, transaction) => {
      if (err) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).send({ message: err });
        return;
      }

      wallet.transactionId.push(transaction._id);

      await Wallet.findOneAndUpdate(walletId, wallet, async function (err) {
        if (err) {
          await session.abortTransaction();
          session.endSession();
          return res.send(500, { error: err });
        }
      });
      await session.commitTransaction();
      session.endSession();
      res.send(transaction);
    });
  });
};
