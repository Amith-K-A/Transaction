import { useState } from "react";
import Wallet from "../controllers/wallet";

const useCreatWallet = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [wallet, setWallet] = useState();


  const addWallet = (data) => {
    setLoading(true);
    return Wallet.addWallet(data)
      .then(wallet => {
        setWallet(wallet);
        setError(undefined);
        setLoading(false);
        return wallet;
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }
  return { loading, error, wallet, addWallet };
};

export default useCreatWallet;