const controller = require("../controllers/wallet-controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.post("/setup", [], controller.createWallet);
  app.post("/transaction/:walletId", [], controller.transaction);
};
