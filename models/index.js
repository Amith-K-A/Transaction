const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.wallet = require("./wallet-model");
db.transaction = require("./transaction-model");

module.exports = db;