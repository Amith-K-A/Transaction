import axios from "axios";

const transaction = (data) => {
  const { id, amount, description } = data;
  return axios.post(`/transact/${id}`, {
    amount,
    description,
  });
};

const getTransaction = (data) => {
  const walletId = data.id;
  const skip = data.skip;
  const limit = data.limit;
  return axios.get(`/transactions?walletId=${walletId}&skip=${skip}&limit=${limit}`);
};

const Transaction = {
  transaction,
  getTransaction,
};

export default Transaction;
