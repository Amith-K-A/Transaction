import Wallet from "./components/Wallet";

import Transaction from "./components/Transaction";

const Details = ({ wallet, refreshWallet }) => {

  return (
    <div>
      <Wallet wallet={wallet} />
      <Transaction
        wallet={wallet}
        refreshWallet={refreshWallet}
      />
      
    </div>
  );
};

export default Details;
