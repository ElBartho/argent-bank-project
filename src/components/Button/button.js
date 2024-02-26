import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  cursor: ${({ cursor }) => cursor && cursor};
  padding: ${({ padding }) => padding && padding};
  font-size: ${({ fontSize }) => fontSize && fontSize};
  font-weight: bold;
  margin: ${({ margin }) => margin && margin};
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;
