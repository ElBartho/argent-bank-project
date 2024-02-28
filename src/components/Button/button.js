import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: ${({ $width }) => $width && $width};
  cursor: ${({ $cursor }) => $cursor && $cursor};
  padding: ${({ $padding }) => $padding && $padding};
  font-size: ${({ $fontSize }) => $fontSize && $fontSize};
  font-weight: bold;
  margin: ${({ $margin }) => $margin && $margin};
  border-color: ${({ $borderColor }) => $borderColor && $borderColor};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor && $backgroundColor};
  color: ${({ $textColor }) => $textColor && $textColor};
`;
