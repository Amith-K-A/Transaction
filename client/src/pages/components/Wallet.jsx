import styled from "styled-components";
import { Link } from "react-router-dom";

const FieldStyle = styled.div`
  width: 25vh;
  display: flex;
  flex-direction: column;
  background: #00bfff;
  box-shadow: 9px 10px 31px 0px rgb(0 0 0 / 75%);
  padding: 15px;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  padding-right: 5px;
  font-size: larger;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: x-large;
  text-align: center;
`;

const Wrapper = styled.div`
  float: right;
  margin: 20px;
`;

const SeeTransaction = styled.div`
  font-weight: bold;
  font-size: small;
  direction: rtl;
  color: blue;
  padding-top: 20px;
`;

const Wallet = ({ wallet }) => {
  return (
    <Wrapper>
      <FieldStyle>
        <Header>Your wallet</Header>
        <FieldWrapper>
          <Title>Name: </Title>
          {wallet.name}
        </FieldWrapper>
        <FieldWrapper>
          <Title>Balence: </Title>
          {wallet.balance}₹
        </FieldWrapper>
        <SeeTransaction>
          <Link to="/transactionDetails">See transactions</Link>
        </SeeTransaction>
      </FieldStyle>
    </Wrapper>
  );
};

export default Wallet;
