import { useEffect, useState, useCallback } from "react";
import Wallet from "../controllers/wallet";

const useGetWallet = (userId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [wallet, setWallet] = useState();

  const refreshWallet = useCallback(
    (wallet) => {
      if (wallet) {
        setWallet(wallet);
        return wallet;
      }
      if (userId) {
        setLoading(true);
        return Wallet.getWalletByUser(userId)
          .then((wallet) => {
            setWallet(wallet);
            setError(undefined);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }
    },
    [userId]
  );

  useEffect(() => {
    refreshWallet();
  }, [userId, refreshWallet]);

  return { loading, error, wallet, refreshWallet };
};

export default useGetWallet;
