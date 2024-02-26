import { StyledButton } from './button';

const Button = ({ text, type, cursor, padding, fontSize, margin }) => {
  return (
    <StyledButton
      type={type}
      cursor={cursor}
      padding={padding}
      fontSize={fontSize}
      margin={margin}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
