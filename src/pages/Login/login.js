import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100%;
  flex: 1;
  min-height: 100vh;
  background-color: #12002b;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  height: 380px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  label {
    font-weight: bold;
  }
  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

export const RemenberWrapper = styled.div`
  display: flex;
  label {
    margin-left: 0.25rem;
  }
`;

export const ValidationError = styled.span`
  color: red;
`;
