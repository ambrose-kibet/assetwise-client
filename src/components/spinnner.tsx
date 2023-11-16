import styled from 'styled-components';

const Loading = () => <SpinnerContainer className="spinner" />;
export default Loading;

const SpinnerContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 5pt solid rgba(128, 128, 128, 0.322);
  border-top: 5pt solid var(--orange);
  border-right: 5pt solid var(--orange);
  border-bottom: 5pt solid var(--orange);
  animation: spinner-spin infinite 1s linear;
  margin: auto;

  @keyframes spinner-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
