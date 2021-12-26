import { useRef } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import useCreatWallet from "../api/hooks/useCreatWallet";

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

const Initialize = () => {
  const { loading, addWallet, wallet, error } = useCreatWallet();
  const nameRef = useRef();
  const balenceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const balanceNumber = balenceRef.current.value || 0;
    const balance = parseFloat(balanceNumber).toFixed(4);

    addWallet({ userId: 1, balance, name }).then((res) => {
      if (res && res.status === 200) {
        //reload page
        window.location.reload();
      }
    });
  };

  if (loading || wallet) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <StyledForm className="card-form" onSubmit={handleSubmit}>
      <FieldStyle>
        <h1>Creat Your wallet</h1>
        <FieldWrapper>
          <h2>Name</h2>
          <StyledInput type="text" ref={nameRef} required />
        </FieldWrapper>
        <FieldWrapper>
          <h2>Balence(optional)</h2>
          <StyledInput type="number" min={0} ref={balenceRef} step="any" />
        </FieldWrapper>
        <ButtonWrapper>
          <StyledButton type="submit">Creat</StyledButton>
        </ButtonWrapper>
      </FieldStyle>
    </StyledForm>
  );
};

export default Initialize;
