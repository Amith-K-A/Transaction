import { useState } from "react";
import Transaction from "../controllers/transaction";

const useTransaction = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [transaction, setTransaction] = useState();


  const initiateTransaction = (data) => {
    setLoading(true);
    
    return Transaction.transaction(data)
      .then(transaction => {
        setTransaction(transaction);
        setError(undefined);
        setLoading(false);
        return transaction;
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }
  return { loading, error, transaction, initiateTransaction };
};

export default useTransaction;