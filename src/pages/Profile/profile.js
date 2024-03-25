import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  background-color: #12002b;
  width: 100%;
  padding-top: 24px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  margin-bottom: 2rem;
`;

export const EditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  input {
    padding: 10px;
    font-size: 1.2rem;
    border-color: #00bc77;
    box-sizing: border-box;
  }
`;

export const DuoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
`;

export const ValidationError = styled.span`
  color: red;
`;

// @media (min-width: 720px) {
//   .account-content-wrapper.cta {
//     flex: 0;
//   }

//   .transaction-button {
//     width: 200px;
//   }
// }
