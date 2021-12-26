
import Loader from "react-loader-spinner";
import useGetWallet from "../api/hooks/useGetWallet";
import Initialize from "./Initialize";
import Details from "./Details";

import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;
const Welcome = () => {
  const { loading, wallet, refreshWallet } = useGetWallet(1);

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }

  return (
    <main>
      {wallet ? (
        <Details
          wallet={wallet}
          refreshWallet={refreshWallet}
        />
      ) : (
        <Initialize />
      )}
    </main>
  );
};

export default Welcome;
