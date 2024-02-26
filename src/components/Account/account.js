import styled from 'styled-components';

export const AccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  color: #2c3e50;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountAmountDescription = styled.p`
  margin: 0;
`;
