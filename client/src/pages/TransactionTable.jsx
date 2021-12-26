import { useState } from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import Table from "./components/Table";
import useGetTransaction from "../api/hooks/useGetTransaction";

const LoaderWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: xx-large;
  font-weight: bolder;
  padding: 30px;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 30px;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  padding: 10px;
  width: 100px;
  margin: 10px;
  background: #00bfff;
  font-weight: bold;
  cursor: pointer;
`;

const Pagination = styled.button`
  display: flex;
  float: right;
  justify-content: space-between;
  width: 20vh;
  margin-top: 15px;
  cursor: pointer;
  border: none;
`;

const ExportAsCsv = styled.button`
  display: flex;
  float: right;
  justify-content: space-between;
  width: 20vh;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  height: 35px;
  background: #00bfff;
  font-weight: bold;
  cursor: pointer;
`;

export default function TransactionTable() {
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const [step, setStep] = useState(1);
  const { loading, transactions } = useGetTransaction(1, skip, limit);
  const history = useHistory();

  const nextPage = () => {
    if (transactions.length) {
      setSkip(skip + limit);
      setStep(step + 1);
    }
  };

  const previousPage = () => {
    if (step > 1) {
      setSkip(skip - limit);
      setStep(step - 1);
    }
  };

  if (loading || !transactions) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  return (
    <>
      <StyledButton onClick={() => history.push("/")}>Back</StyledButton>
      <Wrapper>
        <Title>Transactions</Title>
        {transactions.length ? (
          <ExportAsCsv>
            <CSVLink data={transactions}>Export as CSV</CSVLink>
          </ExportAsCsv>
        ) : (
          <></>
        )}
        <Table items={transactions} />
        <Pagination>
          <div onClick={previousPage}>Previous</div>
          {step}
          <div onClick={nextPage}>Next</div>
        </Pagination>
      </Wrapper>
    </>
  );
}
