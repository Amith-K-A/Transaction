import { useRef, useState } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Switch from "react-switch";
import useTransaction from "../../api/hooks/useTransaction";

const FieldStyle = styled.div`
  width: max-content;
  padding: 8%;
  background: #00bfff;
  box-shadow: 9px 10px 31px 0px rgba(0, 0, 0, 0.75);
`;

const FieldWrapper = styled.div`
  display: grid;
  flex-direction: column;
`;

const StyledInput = styled.input`
  height: 25px;
`;

const StyledButton = styled.button`
  width: 20vh;
  height: 30px;
  background: lightblue;
  cursor: pointer;
  font-weight: bold;
`;

const ButtonWrapper = styled.span`
  padding-top: 50px;
  display: flex;
  flex-direction: row-reverse;
`;

const ToggleWrapper = styled.span`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const StyledForm = styled.form`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const LoaderWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: larger;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Transaction = ({ wallet, refreshWallet }) => {

  const { initiateTransaction, loading, error } = useTransaction();
  const [checked, setChecked] = useState(false);
  const amountRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountNumber = amountRef.current.value || 0;
    let amount = parseFloat(amountNumber).toFixed(4);

    if (!checked) {
      amount = Math.abs(amount) * -1;
    }
    const id = wallet._id;
    const description = descriptionRef.current.value;

    initiateTransaction({ id, amount, description }).then((res) => {
      if (res && res.status === 200) {
        refreshWallet();
      }
    });
  };

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  if (error) {
    return <p>{error.response.data.message}</p>;
  }

  return (
    <StyledForm className="card-form" onSubmit={handleSubmit}>
      <FieldStyle>
        <h1>Initiate a Transition</h1>
        <FieldWrapper>
          <Title>Enter the Amount(₹)</Title>
          <StyledInput
            type="number"
            step="any"
            min={1}
            ref={amountRef}
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <Title>Description</Title>
          <StyledInput type="text" ref={descriptionRef} />
        </FieldWrapper>
        <ToggleWrapper>
          <Switch
            onChange={() => setChecked(!checked)}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={"#ba0410"}
          />
          <Title>{checked ? "Credit" : "Debit"}</Title>
        </ToggleWrapper>
        <ButtonWrapper>
          <StyledButton type="submit">Transfer</StyledButton>
        </ButtonWrapper>
      </FieldStyle>
    </StyledForm>
  );
};

export default Transaction;
