import axios from "axios";

const getWalletByUser = (userId) => {
  return axios
    .get(`/walletByUser/${userId}`, {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
};

const addWallet = (data) => {
  const { userId, balance, name } = data;
  return axios.post("/setup", {
    balance,
    name,
    userId,
  });
};

const Wallet = {
  getWalletByUser,
  addWallet,
};

export default Wallet;
