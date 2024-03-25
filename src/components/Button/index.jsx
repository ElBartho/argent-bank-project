import { StyledButton } from './button';

const Button = ({
  text,
  type,
  cursor,
  padding,
  fontSize,
  margin,
  onClick,
  textColor,
  borderColor,
  backgroundColor,
  width,
}) => {
  return (
    <StyledButton
      type={type}
      $cursor={cursor}
      $padding={padding}
      $fontSize={fontSize}
      $margin={margin}
      onClick={onClick}
      $textColor={textColor}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      $width={width}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
