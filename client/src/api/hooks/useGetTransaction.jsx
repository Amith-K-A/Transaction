import { useState, useEffect } from "react";
import Transaction from "../controllers/transaction";
import Wallet from "../controllers/wallet";

const useTransaction = (userId, skip, limit) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [transactions, setTransactions] = useState();

  const getTransactions = (userId, skip, limit) => {
    setLoading(true);
    return Wallet.getWalletByUser(userId)
      .then((wallet) => {
        const id = wallet._id;
        Transaction.getTransaction({ id, skip, limit })
          .then((transaction) => {
            setTransactions(transaction.data);
            setError(undefined);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    
    getTransactions(userId, skip, limit);
  }, [userId, skip, limit]);

  return { loading, error, transactions, getTransactions };
};

export default useTransaction;
